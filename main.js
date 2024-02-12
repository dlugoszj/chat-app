
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDorIO_gFaqrzv30MVHxX-tjni4nCqskk0",
  authDomain: "webrtc-video-app-99930.firebaseapp.com",
  projectId: "webrtc-video-app-99930",
  storageBucket: "webrtc-video-app-99930.appspot.com",
  messagingSenderId: "627650830286",
  appId: "1:627650830286:web:045b06cb2a4f8a1ad8959f",
  measurementId: "G-29KE14F96P"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

// Global State
let receiveChannel = null;
let localStream = null;
let remoteStream = null;

var pc = new RTCPeerConnection(servers);
pc.ondatachannel = receiveChannelCallback;

var textChannel = pc.createDataChannel("textChannel");
textChannel.onopen = handleSendTextChannelStatusChange;
textChannel.onclose = handleSendTextChannelStatusChange;
textChannel.onmessage = handleReceiveMessage;


function handleSendTextChannelStatusChange(event){
  if(textChannel){
    let state = textChannel.readyState;

    if(state =="open"){
      messageButton.disabled = false;
    }
    else{
      messageButton.disabled = true;
    }
  }
}

function handleReceiveChannelStatusChange(event) {
  if (receiveChannel) {
    console.log(
      `Receive channel's status has changed to ${receiveChannel.readyState}`,
    );
  }
}


function receiveChannelCallback(event) {
  console.log("ReceiveCallBack")
  textChannel = event.channel;
  textChannel.onmessage = handleReceiveMessage;
  textChannel.onopen = handleReceiveChannelStatusChange;
  textChannel.onclose = handleReceiveChannelStatusChange;
}

function handleReceiveMessage(event) {
  console.log("receiveMessage")

  const el = document.createElement("p");
  const txtNode = document.createTextNode("Guest: "+event.data);

  el.appendChild(txtNode);
  receiveBox.appendChild(el);
  receiveBox.scrollTop = receiveBox.scrollHeight;
}

// HTML elements
const webcamVideo = document.getElementById('webcamVideo');
const callButton = document.getElementById('callButton');
const callInput = document.getElementById('callInput');
const answerButton = document.getElementById('answerButton');
const remoteVideo = document.getElementById('remoteVideo');
const hangupButton = document.getElementById('hangupButton');
const messageButton = document.getElementById('sendMessage');
const messageInput = document.getElementById('messageInput');
const receiveBox = document.getElementById("receivebox");
const meetingID = document.getElementById("meetingID");



// 1. Setup media sources

const loading = async () => {
  console.log("running");
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  remoteStream = new MediaStream();

  // Push tracks from local stream to peer connection
  localStream.getTracks().forEach((track) => {
    pc.addTrack(track, localStream);
  });

  // Pull tracks from remote stream, add to video stream
  pc.ontrack = (event) => {
    event.streams[0].getTracks().forEach((track) => {
      remoteStream.addTrack(track);
    });
  };

  webcamVideo.srcObject = localStream;
  remoteVideo.srcObject = remoteStream;

  callButton.disabled = false;
  answerButton.disabled = false;
  messageButton.disabled = true;
}

window.onload = async () => {
  loading();
  
};

//Function that creates meeting ID
function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

// 2. Create an offer
callButton.onclick = async () => {
  // Reference Firestore collections for signaling
  let id = makeid(5);
  const callDoc = firestore.collection('calls').doc(id);
  const offerCandidates = callDoc.collection('offerCandidates');
  const answerCandidates = callDoc.collection('answerCandidates');

  // callInput.value = callDoc.id;

  meetingID.innerHTML = "Meeting ID: " + callDoc.id;

  // Get candidates for caller, save to db
  pc.onicecandidate = (event) => {
    event.candidate && offerCandidates.add(event.candidate.toJSON());
  };

  // Create offer
  const offerDescription = await pc.createOffer();
  await pc.setLocalDescription(offerDescription);

  const offer = {
    sdp: offerDescription.sdp,
    type: offerDescription.type,
  };

  await callDoc.set({ offer });

  // Listen for remote answer
  callDoc.onSnapshot((snapshot) => {
    const data = snapshot.data();
    if (!pc.currentRemoteDescription && data?.answer) {
      const answerDescription = new RTCSessionDescription(data.answer);
      pc.setRemoteDescription(answerDescription);
    }
  });

  // When answered, add candidate to peer connection
  answerCandidates.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const candidate = new RTCIceCandidate(change.doc.data());
        pc.addIceCandidate(candidate);
      }
    });
  });

  hangupButton.disabled = false;
  messageButton.disabled= false;
};

// 3. Answer the call with the unique ID
answerButton.onclick = async () => {
  const callId = callInput.value;
  const callDoc = firestore.collection('calls').doc(callId);
  const answerCandidates = callDoc.collection('answerCandidates');
  const offerCandidates = callDoc.collection('offerCandidates');

  pc.onicecandidate = (event) => {
    event.candidate && answerCandidates.add(event.candidate.toJSON());
  };

  const callData = (await callDoc.get()).data();

  const offerDescription = callData.offer;
  await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

  const answerDescription = await pc.createAnswer();
  await pc.setLocalDescription(answerDescription);

  const answer = {
    type: answerDescription.type,
    sdp: answerDescription.sdp,
  };

  await callDoc.update({ answer });

  offerCandidates.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      console.log(change);
      if (change.type === 'added') {
        let data = change.doc.data();
        pc.addIceCandidate(new RTCIceCandidate(data));
      }
    });
  });
  hangupButton.disabled=false;
};

sendMessage.onclick = async () => {
  if(messageInput.value== ""){
    return;
  }
  textChannel.send(messageInput.value);

  const el = document.createElement("p");
  const txtNode = document.createTextNode("You: " + messageInput.value);

  el.appendChild(txtNode);
  receiveBox.appendChild(el);

  messageInput.value = "";
  messageInput.focus();
  receiveBox.scrollTop = receiveBox.scrollHeight;
}

hangupButton.onclick = async () => {

  pc.close();
  // Update user interface elements

  callButton.disabled = false;
  answerButton.disabled = false;
  messageButton.disabled = true;
  hangupButton.disabled = true;

  messageInput.value = "";
  messageInput.disabled = true;
  receiveBox.innerHTML = "";
  meetingID.innerHTML= "";
  remoteStream = null;
  remoteVideo.srcObject = null ;

  pc = new RTCPeerConnection(servers);
  pc.ondatachannel = receiveChannelCallback;

  textChannel = pc.createDataChannel("textChannel");
  textChannel.onopen = handleSendTextChannelStatusChange;
  textChannel.onclose = handleSendTextChannelStatusChange;
  textChannel.onmessage = handleReceiveMessage;
  loading();
}

pc.onconnectionstatechange = (event) => {
  console.log(pc.connectionState);
  if(pc.connectionState == "disconnected"){
    pc.close();
    // Update user interface elements
  
    callButton.disabled = false;
    answerButton.disabled = false;
    messageButton.disabled = true;
    hangupButton.disabled = true;
  
    messageInput.value = "";
    messageInput.disabled = true;
    receiveBox.innerHTML = "";
    meetingID.innerHTML= "";
    remoteStream = null;
    remoteVideo.srcObject = null ;

    pc = new RTCPeerConnection(servers);
    pc.ondatachannel = receiveChannelCallback;
  
    textChannel = pc.createDataChannel("textChannel");
    textChannel.onopen = handleSendTextChannelStatusChange;
    textChannel.onclose = handleSendTextChannelStatusChange;
    textChannel.onmessage = handleReceiveMessage;
    loading();
  }
};