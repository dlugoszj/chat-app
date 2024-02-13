(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var vc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},zf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ol={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),r.push(t[l],t[h],t[d],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(il(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new Kf;const d=i<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Kf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qf=function(n){const e=il(n);return ol.encodeByteArray(e,!0)},Ps=function(n){return Qf(n).replace(/\./g,"")},Wf=function(n){try{return ol.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Vs(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Hf(t)||(n[t]=Vs(n[t],e[t]));return n}function Hf(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=()=>Yf().__FIREBASE_DEFAULTS__,Jf=()=>{if(typeof process>"u"||typeof vc>"u")return;const n=vc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Zf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Wf(n[1]);return e&&JSON.parse(e)},al=()=>{try{return Xf()||Jf()||Zf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cl=()=>{var n;return(n=al())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ps(JSON.stringify(t)),Ps(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nm(){var n;const e=(n=al())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rm(){return typeof self=="object"&&self.self===self}function ul(){return!nm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ll(){try{return typeof indexedDB=="object"}catch{return!1}}function sm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="FirebaseError";class Zt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=im,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xs.prototype.create)}}class Xs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?om(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Zt(s,a,r)}}function om(n,e){return n.replace(am,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const am=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function gr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Rc(i)&&Rc(o)){if(!gr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Rc(n){return n!==null&&typeof n=="object"}function cm(n,e){const t=new um(n,e);return t.subscribe.bind(t)}class um{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");lm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Li),s.error===void 0&&(s.error=Li),s.complete===void 0&&(s.complete=Li);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Li(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(n){return n&&n._delegate?n._delegate:n}class $t{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new em;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fm(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dm(n){return n===Ct?void 0:n}function fm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=[];var k;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(k||(k={}));const hl={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},gm=k.INFO,pm={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},_m=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=pm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jo{constructor(e){this.name=e,this._logLevel=gm,this._logHandler=_m,this._userLogHandler=null,$o.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}function ym(n){$o.forEach(e=>{e.setLogLevel(n)})}function Im(n,e){for(const t of $o){let r=null;e&&e.level&&(r=hl[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&n({level:k[i].toLowerCase(),message:a,args:o,type:s.name})}}}const Em=(n,e)=>e.some(t=>n instanceof t);let Sc,bc;function wm(){return Sc||(Sc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tm(){return bc||(bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dl=new WeakMap,no=new WeakMap,fl=new WeakMap,Bi=new WeakMap,Go=new WeakMap;function vm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(ct(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&dl.set(t,n)}).catch(()=>{}),Go.set(e,n),e}function Am(n){if(no.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});no.set(n,e)}let ro={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return no.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ct(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Rm(n){ro=n(ro)}function Sm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ui(this),e,...t);return fl.set(r,e.sort?e.sort():[e]),ct(r)}:Tm().includes(n)?function(...e){return n.apply(Ui(this),e),ct(dl.get(this))}:function(...e){return ct(n.apply(Ui(this),e))}}function bm(n){return typeof n=="function"?Sm(n):(n instanceof IDBTransaction&&Am(n),Em(n,wm())?new Proxy(n,ro):n)}function ct(n){if(n instanceof IDBRequest)return vm(n);if(Bi.has(n))return Bi.get(n);const e=bm(n);return e!==n&&(Bi.set(n,e),Go.set(e,n)),e}const Ui=n=>Go.get(n);function Pm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=ct(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ct(o.result),c.oldVersion,c.newVersion,ct(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Vm=["get","getKey","getAll","getAllKeys","count"],Cm=["put","add","delete","clear"],qi=new Map;function Pc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qi.get(e))return qi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Cm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vm.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&c.done]))[0]};return qi.set(e,i),i}Rm(n=>({...n,get:(e,t,r)=>Pc(e,t)||n.get(e,t,r),has:(e,t)=>!!Pc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function xm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const so="@firebase/app",Vc="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new jo("@firebase/app"),Nm="@firebase/app-compat",km="@firebase/analytics-compat",Mm="@firebase/analytics",Om="@firebase/app-check-compat",Fm="@firebase/app-check",Lm="@firebase/auth",Bm="@firebase/auth-compat",Um="@firebase/database",qm="@firebase/database-compat",$m="@firebase/functions",jm="@firebase/functions-compat",Gm="@firebase/installations",zm="@firebase/installations-compat",Km="@firebase/messaging",Qm="@firebase/messaging-compat",Wm="@firebase/performance",Hm="@firebase/performance-compat",Ym="@firebase/remote-config",Xm="@firebase/remote-config-compat",Jm="@firebase/storage",Zm="@firebase/storage-compat",eg="@firebase/firestore",tg="@firebase/firestore-compat",ng="firebase",rg="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="[DEFAULT]",sg={[so]:"fire-core",[Nm]:"fire-core-compat",[Mm]:"fire-analytics",[km]:"fire-analytics-compat",[Fm]:"fire-app-check",[Om]:"fire-app-check-compat",[Lm]:"fire-auth",[Bm]:"fire-auth-compat",[Um]:"fire-rtdb",[qm]:"fire-rtdb-compat",[$m]:"fire-fn",[jm]:"fire-fn-compat",[Gm]:"fire-iid",[zm]:"fire-iid-compat",[Km]:"fire-fcm",[Qm]:"fire-fcm-compat",[Wm]:"fire-perf",[Hm]:"fire-perf-compat",[Ym]:"fire-rc",[Xm]:"fire-rc-compat",[Jm]:"fire-gcs",[Zm]:"fire-gcs-compat",[eg]:"fire-fst",[tg]:"fire-fst-compat","fire-js":"fire-js",[ng]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new Map,pr=new Map;function Ds(n,e){try{n.container.addComponent(e)}catch(t){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ml(n,e){n.container.addOrOverwriteComponent(e)}function vn(n){const e=n.name;if(pr.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;pr.set(e,n);for(const t of ft.values())Ds(t,n);return!0}function gl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ig(n,e,t=dt){gl(n,e).clearInstance(t)}function og(){pr.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ye=new Xs("app","Firebase",ag);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cg=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ye.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=rg;function Ko(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dt,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ye.create("bad-app-name",{appName:String(s)});if(t||(t=cl()),!t)throw Ye.create("no-options");const i=ft.get(s);if(i){if(gr(t,i.options)&&gr(r,i.config))return i;throw Ye.create("duplicate-app",{appName:s})}const o=new mm(s);for(const c of pr.values())o.addComponent(c);const a=new cg(t,r,o);return ft.set(s,a),a}function ug(n=dt){const e=ft.get(n);if(!e&&n===dt&&cl())return Ko();if(!e)throw Ye.create("no-app",{appName:n});return e}function lg(){return Array.from(ft.values())}async function pl(n){const e=n.name;ft.has(e)&&(ft.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function ut(n,e,t){var r;let s=(r=sg[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(a.join(" "));return}vn(new $t(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function _l(n,e){if(n!==null&&typeof n!="function")throw Ye.create("invalid-log-argument");Im(n,e)}function yl(n){ym(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="firebase-heartbeat-database",dg=1,_r="firebase-heartbeat-store";let $i=null;function Il(){return $i||($i=Pm(hg,dg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_r)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ye.create("idb-open",{originalErrorMessage:n.message})})),$i}async function fg(n){try{const t=(await Il()).transaction(_r),r=await t.objectStore(_r).get(El(n));return await t.done,r}catch(e){if(e instanceof Zt)jt.warn(e.message);else{const t=Ye.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(t.message)}}}async function Cc(n,e){try{const r=(await Il()).transaction(_r,"readwrite");await r.objectStore(_r).put(e,El(n)),await r.done}catch(t){if(t instanceof Zt)jt.warn(t.message);else{const r=Ye.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jt.warn(r.message)}}}function El(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=1024,gg=30*24*60*60*1e3;class pg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=gg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dc(),{heartbeatsToSend:r,unsentEntries:s}=_g(this._heartbeatsCache.heartbeats),i=Ps(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Dc(){return new Date().toISOString().substring(0,10)}function _g(n,e=mg){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),xc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),xc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class yg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ll()?sm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xc(n){return Ps(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(n){vn(new $t("platform-logger",e=>new Dm(e),"PRIVATE")),vn(new $t("heartbeat",e=>new pg(e),"PRIVATE")),ut(so,Vc,n),ut(so,Vc,"esm2017"),ut("fire-js","")}Ig("");const Eg=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Zt,SDK_VERSION:zo,_DEFAULT_ENTRY_NAME:dt,_addComponent:Ds,_addOrOverwriteComponent:ml,_apps:ft,_clearComponents:og,_components:pr,_getProvider:gl,_registerComponent:vn,_removeServiceInstance:ig,deleteApp:pl,getApp:ug,getApps:lg,initializeApp:Ko,onLog:_l,registerVersion:ut,setLogLevel:yl},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t){this._delegate=e,this.firebase=t,Ds(e,new $t("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),pl(this._delegate)))}_getService(e,t=dt){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=dt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ds(this._delegate,e)}_addOrOverwriteComponent(e){ml(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Nc=new Xs("app-compat","Firebase",Tg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(n){const e={},t={__esModule:!0,initializeApp:i,app:s,registerVersion:ut,setLogLevel:yl,onLog:_l,apps:null,SDK_VERSION:zo,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Eg}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function s(u){if(u=u||dt,!Ac(e,u))throw Nc.create("no-app",{appName:u});return e[u]}s.App=n;function i(u,l={}){const h=Ko(u,l);if(Ac(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(vn(u)&&u.type==="PUBLIC"){const d=(m=s())=>{if(typeof m[h]!="function")throw Nc.create("invalid-app-argument",{appName:l});return m[h]()};u.serviceProps!==void 0&&Vs(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...m){return this._getService.bind(this,l).apply(this,u.multipleInstances?m:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(){const n=vg(wg);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:wl,extendNamespace:e,createSubscribe:cm,ErrorFactory:Xs,deepExtend:Vs});function e(t){Vs(n,t)}return n}const Ag=wl();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new jo("@firebase/app-compat"),Rg="@firebase/app-compat",Sg="0.2.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(n){ut(Rg,Sg,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(rm()&&self.firebase!==void 0){kc.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&kc.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const yr=Ag;bg();var Pg="firebase",Vg="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr.registerVersion(Pg,Vg,"app-compat");var Cg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,Qo=Qo||{},b=Cg||self;function Js(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function $r(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Dg(n){return Object.prototype.hasOwnProperty.call(n,ji)&&n[ji]||(n[ji]=++xg)}var ji="closure_uid_"+(1e9*Math.random()>>>0),xg=0;function Ng(n,e,t){return n.call.apply(n.bind,arguments)}function kg(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function Ee(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ee=Ng:Ee=kg,Ee.apply(null,arguments)}function us(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function he(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function vt(){this.s=this.s,this.o=this.o}var Mg=0;vt.prototype.s=!1;vt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Mg!=0)&&Dg(this)};vt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tl=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Wo(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Mc(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Js(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function we(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Og=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const t=()=>{};b.addEventListener("test",t,e),b.removeEventListener("test",t,e)}catch{}return n}();function Ir(n){return/^[\s\xa0]*$/.test(n)}function Zs(){var n=b.navigator;return n&&(n=n.userAgent)?n:""}function Be(n){return Zs().indexOf(n)!=-1}function Ho(n){return Ho[" "](n),n}Ho[" "]=function(){};function Fg(n,e){var t=Vp;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var Lg=Be("Opera"),An=Be("Trident")||Be("MSIE"),vl=Be("Edge"),io=vl||An,Al=Be("Gecko")&&!(Zs().toLowerCase().indexOf("webkit")!=-1&&!Be("Edge"))&&!(Be("Trident")||Be("MSIE"))&&!Be("Edge"),Bg=Zs().toLowerCase().indexOf("webkit")!=-1&&!Be("Edge");function Rl(){var n=b.document;return n?n.documentMode:void 0}var oo;e:{var Gi="",zi=function(){var n=Zs();if(Al)return/rv:([^\);]+)(\)|;)/.exec(n);if(vl)return/Edge\/([\d\.]+)/.exec(n);if(An)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Bg)return/WebKit\/(\S+)/.exec(n);if(Lg)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(zi&&(Gi=zi?zi[1]:""),An){var Ki=Rl();if(Ki!=null&&Ki>parseFloat(Gi)){oo=String(Ki);break e}}oo=Gi}var ao;if(b.document&&An){var Oc=Rl();ao=Oc||parseInt(oo,10)||void 0}else ao=void 0;var Ug=ao;function Er(n,e){if(we.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Al){e:{try{Ho(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:qg[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Er.$.h.call(this)}}he(Er,we);var qg={2:"touch",3:"pen",4:"mouse"};Er.prototype.h=function(){Er.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var jr="closure_listenable_"+(1e6*Math.random()|0),$g=0;function jg(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=s,this.key=++$g,this.fa=this.ia=!1}function ei(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Yo(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function Gg(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Sl(n){const e={};for(const t in n)e[t]=n[t];return e}const Fc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bl(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<Fc.length;i++)t=Fc[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function ti(n){this.src=n,this.g={},this.h=0}ti.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=uo(n,e,r,s);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new jg(e,this.src,i,!!r,s),e.ia=t,n.push(e)),e};function co(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=Tl(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ei(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function uo(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.fa&&i.listener==e&&i.capture==!!t&&i.la==r)return s}return-1}var Xo="closure_lm_"+(1e6*Math.random()|0),Qi={};function Pl(n,e,t,r,s){if(r&&r.once)return Cl(n,e,t,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Pl(n,e[i],t,r,s);return null}return t=ea(t),n&&n[jr]?n.O(e,t,$r(r)?!!r.capture:!!r,s):Vl(n,e,t,!1,r,s)}function Vl(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=$r(s)?!!s.capture:!!s,a=Zo(n);if(a||(n[Xo]=a=new ti(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=zg(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)Og||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(xl(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function zg(){function n(t){return e.call(n.src,n.listener,t)}const e=Kg;return n}function Cl(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Cl(n,e[i],t,r,s);return null}return t=ea(t),n&&n[jr]?n.P(e,t,$r(r)?!!r.capture:!!r,s):Vl(n,e,t,!0,r,s)}function Dl(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Dl(n,e[i],t,r,s);else r=$r(r)?!!r.capture:!!r,t=ea(t),n&&n[jr]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=uo(i,t,r,s),-1<t&&(ei(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=Zo(n))&&(e=n.g[e.toString()],n=-1,e&&(n=uo(e,t,r,s)),(t=-1<n?e[n]:null)&&Jo(t))}function Jo(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[jr])co(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(xl(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Zo(e))?(co(t,n),t.h==0&&(t.src=null,e[Xo]=null)):ei(n)}}}function xl(n){return n in Qi?Qi[n]:Qi[n]="on"+n}function Kg(n,e){if(n.fa)n=!0;else{e=new Er(e,this);var t=n.listener,r=n.la||n.src;n.ia&&Jo(n),n=t.call(r,e)}return n}function Zo(n){return n=n[Xo],n instanceof ti?n:null}var Wi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ea(n){return typeof n=="function"?n:(n[Wi]||(n[Wi]=function(e){return n.handleEvent(e)}),n[Wi])}function le(){vt.call(this),this.i=new ti(this),this.S=this,this.J=null}he(le,vt);le.prototype[jr]=!0;le.prototype.removeEventListener=function(n,e,t,r){Dl(this,n,e,t,r)};function _e(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new we(e,n);else if(e instanceof we)e.target=e.target||n;else{var s=e;e=new we(r,n),bl(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=ls(o,r,!0,e)&&s}if(o=e.g=n,s=ls(o,r,!0,e)&&s,s=ls(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=ls(o,r,!1,e)&&s}le.prototype.N=function(){if(le.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)ei(t[r]);delete n.g[e],n.h--}}this.J=null};le.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};le.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function ls(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&co(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ta=b.JSON.stringify;class Qg{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Wg(){var n=na;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Hg{constructor(){this.h=this.g=null}add(e,t){const r=Nl.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Nl=new Qg(()=>new Yg,n=>n.reset());class Yg{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Xg(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function Jg(n){b.setTimeout(()=>{throw n},0)}let wr,Tr=!1,na=new Hg,kl=()=>{const n=b.Promise.resolve(void 0);wr=()=>{n.then(Zg)}};var Zg=()=>{for(var n;n=Wg();){try{n.h.call(n.g)}catch(t){Jg(t)}var e=Nl;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Tr=!1};function ni(n,e){le.call(this),this.h=n||1,this.g=e||b,this.j=Ee(this.qb,this),this.l=Date.now()}he(ni,le);E=ni.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_e(this,"tick"),this.ga&&(ra(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ra(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}E.N=function(){ni.$.N.call(this),ra(this),delete this.g};function sa(n,e,t){if(typeof n=="function")t&&(n=Ee(n,t));else if(n&&typeof n.handleEvent=="function")n=Ee(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:b.setTimeout(n,e||0)}function Ml(n){n.g=sa(()=>{n.g=null,n.i&&(n.i=!1,Ml(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class ep extends vt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ml(this)}N(){super.N(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vr(n){vt.call(this),this.h=n,this.g={}}he(vr,vt);var Lc=[];function Ol(n,e,t,r){Array.isArray(t)||(t&&(Lc[0]=t.toString()),t=Lc);for(var s=0;s<t.length;s++){var i=Pl(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Fl(n){Yo(n.g,function(e,t){this.g.hasOwnProperty(t)&&Jo(e)},n),n.g={}}vr.prototype.N=function(){vr.$.N.call(this),Fl(this)};vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ri(){this.g=!0}ri.prototype.Ea=function(){this.g=!1};function tp(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function np(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function yn(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+sp(n,t)+(r?" "+r:"")})}function rp(n,e){n.info(function(){return"TIMEOUT: "+e})}ri.prototype.info=function(){};function sp(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ta(t)}catch{return e}}var en={},Bc=null;function si(){return Bc=Bc||new le}en.Ta="serverreachability";function Ll(n){we.call(this,en.Ta,n)}he(Ll,we);function Ar(n){const e=si();_e(e,new Ll(e))}en.STAT_EVENT="statevent";function Bl(n,e){we.call(this,en.STAT_EVENT,n),this.stat=e}he(Bl,we);function Ae(n){const e=si();_e(e,new Bl(e,n))}en.Ua="timingevent";function Ul(n,e){we.call(this,en.Ua,n),this.size=e}he(Ul,we);function Gr(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){n()},e)}var ii={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ql={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ia(){}ia.prototype.h=null;function Uc(n){return n.h||(n.h=n.i())}function $l(){}var zr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function oa(){we.call(this,"d")}he(oa,we);function aa(){we.call(this,"c")}he(aa,we);var lo;function oi(){}he(oi,ia);oi.prototype.g=function(){return new XMLHttpRequest};oi.prototype.i=function(){return{}};lo=new oi;function Kr(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new vr(this),this.P=ip,n=io?125:void 0,this.V=new ni(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new jl}function jl(){this.i=null,this.g="",this.h=!1}var ip=45e3,Gl={},ho={};E=Kr.prototype;E.setTimeout=function(n){this.P=n};function fo(n,e,t){n.L=1,n.A=ci(Xe(e)),n.u=t,n.S=!0,zl(n,null)}function zl(n,e){n.G=Date.now(),Qr(n),n.B=Xe(n.A);var t=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),Zl(t.i,"t",r),n.o=0,t=n.l.J,n.h=new jl,n.g=Eh(n.l,t?e:null,!n.u),0<n.O&&(n.M=new ep(Ee(n.Pa,n,n.g),n.O)),Ol(n.U,n.g,"readystatechange",n.nb),e=n.I?Sl(n.I):{},n.u?(n.v||(n.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,e)):(n.v="GET",n.g.ha(n.B,n.v,null,e)),Ar(),tp(n.j,n.v,n.B,n.m,n.W,n.u)}E.nb=function(n){n=n.target;const e=this.M;e&&Ue(n)==3?e.l():this.Pa(n)};E.Pa=function(n){try{if(n==this.g)e:{const l=Ue(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||io||this.g&&(this.h.h||this.g.ja()||Gc(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Ar(3):Ar(2)),ai(this);var t=this.g.da();this.ca=t;t:if(Kl(this)){var r=Gc(this.g);n="";var s=r.length,i=Ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),ar(this);var o="";break t}this.h.i=new b.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,np(this.j,this.v,this.B,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ir(a)){var u=a;break t}}u=null}if(t=u)yn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mo(this,t);else{this.i=!1,this.s=3,Ae(12),Ft(this),ar(this);break e}}this.S?(Ql(this,l,o),io&&this.i&&l==3&&(Ol(this.U,this.V,"tick",this.mb),this.V.start())):(yn(this.j,this.m,o,null),mo(this,o)),l==4&&Ft(this),this.i&&!this.J&&(l==4?ph(this.l,this):(this.i=!1,Qr(this)))}else Sp(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ae(12)):(this.s=0,Ae(13)),Ft(this),ar(this)}}}catch{}finally{}};function Kl(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function Ql(n,e,t){let r=!0,s;for(;!n.J&&n.o<t.length;)if(s=op(n,t),s==ho){e==4&&(n.s=4,Ae(14),r=!1),yn(n.j,n.m,null,"[Incomplete Response]");break}else if(s==Gl){n.s=4,Ae(15),yn(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else yn(n.j,n.m,s,null),mo(n,s);Kl(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),e!=4||t.length!=0||n.h.h||(n.s=1,Ae(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),fa(e),e.M=!0,Ae(11))):(yn(n.j,n.m,t,"[Invalid Chunked Response]"),Ft(n),ar(n))}E.mb=function(){if(this.g){var n=Ue(this.g),e=this.g.ja();this.o<e.length&&(ai(this),Ql(this,n,e),this.i&&n!=4&&Qr(this))}};function op(n,e){var t=n.o,r=e.indexOf(`
`,t);return r==-1?ho:(t=Number(e.substring(t,r)),isNaN(t)?Gl:(r+=1,r+t>e.length?ho:(e=e.slice(r,r+t),n.o=r+t,e)))}E.cancel=function(){this.J=!0,Ft(this)};function Qr(n){n.Y=Date.now()+n.P,Wl(n,n.P)}function Wl(n,e){if(n.C!=null)throw Error("WatchDog timer not null");n.C=Gr(Ee(n.lb,n),e)}function ai(n){n.C&&(b.clearTimeout(n.C),n.C=null)}E.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(rp(this.j,this.B),this.L!=2&&(Ar(),Ae(17)),Ft(this),this.s=2,ar(this)):Wl(this,this.Y-n)};function ar(n){n.l.H==0||n.J||ph(n.l,n)}function Ft(n){ai(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,ra(n.V),Fl(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function mo(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||go(t.i,n))){if(!n.K&&go(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)ks(t),di(t);else break e;da(t),Ae(18)}}else t.Fa=s[1],0<t.Fa-t.V&&37500>s[2]&&t.G&&t.A==0&&!t.v&&(t.v=Gr(Ee(t.ib,t),6e3));if(1>=nh(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Lt(t,11)}else if((n.K||t.g==n)&&ks(t),!Ir(e))for(s=t.Ja.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const m=n.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=r.i;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ca(i,i.h),i.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,j(r.I,r.F,w))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=Ih(r,r.J?r.pa:null,r.Y),o.K){rh(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(ai(a),Qr(a)),r.g=o}else mh(r);0<t.j.length&&fi(t)}else u[0]!="stop"&&u[0]!="close"||Lt(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Lt(t,7):ha(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}Ar(4)}catch{}}function ap(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Js(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function cp(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Js(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Hl(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Js(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=cp(n),r=ap(n),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}var Yl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function up(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function qt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof qt){this.h=n.h,xs(this,n.j),this.s=n.s,this.g=n.g,Ns(this,n.m),this.l=n.l;var e=n.i,t=new Rr;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),qc(this,t),this.o=n.o}else n&&(e=String(n).match(Yl))?(this.h=!1,xs(this,e[1]||"",!0),this.s=nr(e[2]||""),this.g=nr(e[3]||"",!0),Ns(this,e[4]),this.l=nr(e[5]||"",!0),qc(this,e[6]||"",!0),this.o=nr(e[7]||"")):(this.h=!1,this.i=new Rr(null,this.h))}qt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(rr(e,$c,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(rr(e,$c,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(rr(t,t.charAt(0)=="/"?dp:hp,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",rr(t,mp)),n.join("")};function Xe(n){return new qt(n)}function xs(n,e,t){n.j=t?nr(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Ns(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function qc(n,e,t){e instanceof Rr?(n.i=e,gp(n.i,n.h)):(t||(e=rr(e,fp)),n.i=new Rr(e,n.h))}function j(n,e,t){n.i.set(e,t)}function ci(n){return j(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function nr(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function rr(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,lp),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function lp(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var $c=/[#\/\?@]/g,hp=/[#\?:]/g,dp=/[#\?]/g,fp=/[#\?@]/g,mp=/#/g;function Rr(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function At(n){n.g||(n.g=new Map,n.h=0,n.i&&up(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}E=Rr.prototype;E.add=function(n,e){At(this),this.i=null,n=Bn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Xl(n,e){At(n),e=Bn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Jl(n,e){return At(n),e=Bn(n,e),n.g.has(e)}E.forEach=function(n,e){At(this),this.g.forEach(function(t,r){t.forEach(function(s){n.call(e,s,r,this)},this)},this)};E.ta=function(){At(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const s=n[r];for(let i=0;i<s.length;i++)t.push(e[r])}return t};E.Z=function(n){At(this);let e=[];if(typeof n=="string")Jl(this,n)&&(e=e.concat(this.g.get(Bn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};E.set=function(n,e){return At(this),this.i=null,n=Bn(this,n),Jl(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};E.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Zl(n,e,t){Xl(n,e),0<t.length&&(n.i=null,n.g.set(Bn(n,e),Wo(t)),n.h+=t.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function Bn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function gp(n,e){e&&!n.j&&(At(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(Xl(this,r),Zl(this,s,t))},n)),n.j=e}var pp=class{constructor(n,e){this.g=n,this.map=e}};function eh(n){this.l=n||_p,b.PerformanceNavigationTiming?(n=b.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(b.g&&b.g.Ka&&b.g.Ka()&&b.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _p=10;function th(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function nh(n){return n.h?1:n.g?n.g.size:0}function go(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function ca(n,e){n.g?n.g.add(e):n.h=e}function rh(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}eh.prototype.cancel=function(){if(this.i=sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function sh(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Wo(n.i)}var yp=class{stringify(n){return b.JSON.stringify(n,void 0)}parse(n){return b.JSON.parse(n,void 0)}};function Ip(){this.g=new yp}function Ep(n,e,t){const r=t||"";try{Hl(n,function(s,i){let o=s;$r(s)&&(o=ta(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function wp(n,e){const t=new ri;if(b.Image){const r=new Image;r.onload=us(hs,t,r,"TestLoadImage: loaded",!0,e),r.onerror=us(hs,t,r,"TestLoadImage: error",!1,e),r.onabort=us(hs,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=us(hs,t,r,"TestLoadImage: timeout",!1,e),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function hs(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ui(n){this.l=n.ec||null,this.j=n.ob||!1}he(ui,ia);ui.prototype.g=function(){return new li(this.l,this.j)};ui.prototype.i=function(n){return function(){return n}}({});function li(n,e){le.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=ua,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}he(li,le);var ua=0;E=li.prototype;E.open=function(n,e){if(this.readyState!=ua)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Sr(this)};E.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||b).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wr(this)),this.readyState=ua};E.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Sr(this)),this.g&&(this.readyState=3,Sr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ih(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function ih(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}E.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Wr(this):Sr(this),this.readyState==3&&ih(this)}};E.Za=function(n){this.g&&(this.response=this.responseText=n,Wr(this))};E.Ya=function(n){this.g&&(this.response=n,Wr(this))};E.ka=function(){this.g&&Wr(this)};function Wr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Sr(n)}E.setRequestHeader=function(n,e){this.v.append(n,e)};E.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Sr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Tp=b.JSON.parse;function J(n){le.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=oh,this.L=this.M=!1}he(J,le);var oh="",vp=/^https?$/i,Ap=["POST","PUT"];E=J.prototype;E.Oa=function(n){this.M=n};E.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():lo.g(),this.C=this.u?Uc(this.u):Uc(lo),this.g.onreadystatechange=Ee(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(i){jc(this,i);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)t.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())t.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),s=b.FormData&&n instanceof b.FormData,!(0<=Tl(Ap,e))||r||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{uh(this),0<this.B&&((this.L=Rp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ee(this.ua,this)):this.A=sa(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){jc(this,i)}};function Rp(n){return An&&typeof n.timeout=="number"&&n.ontimeout!==void 0}E.ua=function(){typeof Qo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_e(this,"timeout"),this.abort(8))};function jc(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,ah(n),hi(n)}function ah(n){n.F||(n.F=!0,_e(n,"complete"),_e(n,"error"))}E.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,_e(this,"complete"),_e(this,"abort"),hi(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hi(this,!0)),J.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?ch(this):this.kb())};E.kb=function(){ch(this)};function ch(n){if(n.h&&typeof Qo<"u"&&(!n.C[1]||Ue(n)!=4||n.da()!=2)){if(n.v&&Ue(n)==4)sa(n.La,0,n);else if(_e(n,"readystatechange"),Ue(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var s=String(n.I).match(Yl)[1]||null;!s&&b.self&&b.self.location&&(s=b.self.location.protocol.slice(0,-1)),r=!vp.test(s?s.toLowerCase():"")}t=r}if(t)_e(n,"complete"),_e(n,"success");else{n.m=6;try{var i=2<Ue(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",ah(n)}}finally{hi(n)}}}}function hi(n,e){if(n.g){uh(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||_e(n,"ready");try{t.onreadystatechange=r}catch{}}}function uh(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(b.clearTimeout(n.A),n.A=null)}E.isActive=function(){return!!this.g};function Ue(n){return n.g?n.g.readyState:0}E.da=function(){try{return 2<Ue(this)?this.g.status:-1}catch{return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Tp(e)}};function Gc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case oh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Sp(n){const e={};n=(n.g&&2<=Ue(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Ir(n[r]))continue;var t=Xg(n[r]);const s=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const i=e[s]||[];e[s]=i,i.push(t)}Gg(e,function(r){return r.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function lh(n){let e="";return Yo(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function la(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=lh(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):j(n,e,t))}function Hn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function hh(n){this.Ga=0,this.j=[],this.l=new ri,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hn("baseRetryDelayMs",5e3,n),this.hb=Hn("retryDelaySeedMs",1e4,n),this.eb=Hn("forwardChannelMaxRetries",2,n),this.xa=Hn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new eh(n&&n.concurrentRequestLimit),this.Ja=new Ip,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=hh.prototype;E.ra=8;E.H=1;function ha(n){if(dh(n),n.H==3){var e=n.W++,t=Xe(n.I);if(j(t,"SID",n.K),j(t,"RID",e),j(t,"TYPE","terminate"),Hr(n,t),e=new Kr(n,n.l,e),e.L=2,e.A=ci(Xe(t)),t=!1,b.navigator&&b.navigator.sendBeacon)try{t=b.navigator.sendBeacon(e.A.toString(),"")}catch{}!t&&b.Image&&(new Image().src=e.A,t=!0),t||(e.g=Eh(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Qr(e)}yh(n)}function di(n){n.g&&(fa(n),n.g.cancel(),n.g=null)}function dh(n){di(n),n.u&&(b.clearTimeout(n.u),n.u=null),ks(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&b.clearTimeout(n.m),n.m=null)}function fi(n){if(!th(n.i)&&!n.m){n.m=!0;var e=n.Na;wr||kl(),Tr||(wr(),Tr=!0),na.add(e,n),n.C=0}}function bp(n,e){return nh(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Gr(Ee(n.Na,n,e),_h(n,n.C)),n.C++,!0)}E.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new Kr(this,this.l,n);let i=this.s;if(this.U&&(i?(i=Sl(i),bl(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=fh(this,s,e),t=Xe(this.I),j(t,"RID",n),j(t,"CVER",22),this.F&&j(t,"X-HTTP-Session-Id",this.F),Hr(this,t),i&&(this.O?e="headers="+encodeURIComponent(String(lh(i)))+"&"+e:this.o&&la(t,this.o,i)),ca(this.i,s),this.bb&&j(t,"TYPE","init"),this.P?(j(t,"$req",e),j(t,"SID","null"),s.aa=!0,fo(s,t,null)):fo(s,t,e),this.H=2}}else this.H==3&&(n?zc(this,n):this.j.length==0||th(this.i)||zc(this))};function zc(n,e){var t;e?t=e.m:t=n.W++;const r=Xe(n.I);j(r,"SID",n.K),j(r,"RID",t),j(r,"AID",n.V),Hr(n,r),n.o&&n.s&&la(r,n.o,n.s),t=new Kr(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=fh(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),ca(n.i,t),fo(t,r,e)}function Hr(n,e){n.na&&Yo(n.na,function(t,r){j(e,r,t)}),n.h&&Hl({},function(t,r){j(e,r,t)})}function fh(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Ee(n.h.Va,n.h,n):null;e:{var s=n.j;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=s[c].g;const l=s[c].map;if(u-=i,0>u)i=Math.max(0,s[c].g-100),a=!1;else try{Ep(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function mh(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;wr||kl(),Tr||(wr(),Tr=!0),na.add(e,n),n.A=0}}function da(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Gr(Ee(n.Ma,n),_h(n,n.A)),n.A++,!0)}E.Ma=function(){if(this.u=null,gh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Gr(Ee(this.jb,this),n)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ae(10),di(this),gh(this))};function fa(n){n.B!=null&&(b.clearTimeout(n.B),n.B=null)}function gh(n){n.g=new Kr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Xe(n.wa);j(e,"RID","rpc"),j(e,"SID",n.K),j(e,"AID",n.V),j(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&j(e,"TO",n.qa),j(e,"TYPE","xmlhttp"),Hr(n,e),n.o&&n.s&&la(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.A=ci(Xe(e)),t.u=null,t.S=!0,zl(t,n)}E.ib=function(){this.v!=null&&(this.v=null,di(this),da(this),Ae(19))};function ks(n){n.v!=null&&(b.clearTimeout(n.v),n.v=null)}function ph(n,e){var t=null;if(n.g==e){ks(n),fa(n),n.g=null;var r=2}else if(go(n.i,e))t=e.F,rh(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.u?e.u.length:0,e=Date.now()-e.G;var s=n.C;r=si(),_e(r,new Ul(r,t)),fi(n)}else mh(n);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&bp(n,e)||r==2&&da(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:Lt(n,5);break;case 4:Lt(n,10);break;case 3:Lt(n,6);break;default:Lt(n,2)}}}function _h(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Lt(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Ee(n.pb,n);t||(t=new qt("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||xs(t,"https"),ci(t)),wp(t.toString(),r)}else Ae(2);n.H=0,n.h&&n.h.za(e),yh(n),dh(n)}E.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ae(2)):(this.l.info("Failed to ping google.com"),Ae(1))};function yh(n){if(n.H=0,n.ma=[],n.h){const e=sh(n.i);(e.length!=0||n.j.length!=0)&&(Mc(n.ma,e),Mc(n.ma,n.j),n.i.i.length=0,Wo(n.j),n.j.length=0),n.h.ya()}}function Ih(n,e,t){var r=t instanceof qt?Xe(t):new qt(t);if(r.g!="")e&&(r.g=e+"."+r.g),Ns(r,r.m);else{var s=b.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new qt(null);r&&xs(i,r),e&&(i.g=e),s&&Ns(i,s),t&&(i.l=t),r=i}return t=n.F,e=n.Da,t&&e&&j(r,t,e),j(r,"VER",n.ra),Hr(n,r),r}function Eh(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n.Ha&&!n.va?new J(new ui({ob:t})):new J(n.va),e.Oa(n.J),e}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function wh(){}E=wh.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function Ms(){if(An&&!(10<=Number(Ug)))throw Error("Environmental error: no available transport.")}Ms.prototype.g=function(n,e){return new xe(n,e)};function xe(n,e){le.call(this),this.g=new hh(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Ir(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ir(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Un(this)}he(xe,le);xe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Ae(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Ih(n,null,n.Y),fi(n)};xe.prototype.close=function(){ha(this.g)};xe.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=ta(n),n=t);e.j.push(new pp(e.fb++,n)),e.H==3&&fi(e)};xe.prototype.N=function(){this.g.h=null,delete this.j,ha(this.g),delete this.g,xe.$.N.call(this)};function Th(n){oa.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}he(Th,oa);function vh(){aa.call(this),this.status=1}he(vh,aa);function Un(n){this.g=n}he(Un,wh);Un.prototype.Ba=function(){_e(this.g,"a")};Un.prototype.Aa=function(n){_e(this.g,new Th(n))};Un.prototype.za=function(n){_e(this.g,new vh)};Un.prototype.ya=function(){_e(this.g,"b")};function Pp(){this.blockSize=-1}function Fe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}he(Fe,Pp);Fe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hi(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(s=0;16>s;++s)r[s]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],s=n.g[2];var i=n.g[3],o=e+(i^t&(s^i))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[3]+3250441966&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[7]+4249261313&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[11]+2304563134&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[15]+1236535329&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(t^s))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[0]+3921069994&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[4]+3889429448&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[8]+1163531501&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[12]+2368359562&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(t^s^i)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[14]+4259657740&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[10]+3200236656&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[6]+76029189&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[2]+3299628645&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(s^(t|~i))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[5]+4237533241&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[1]+2240044497&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[13]+1309151649&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+i&4294967295}Fe.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=t;)Hi(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<e;)if(r[s++]=n.charCodeAt(i++),s==this.blockSize){Hi(this,r),s=0;break}}else for(;i<e;)if(r[s++]=n[i++],s==this.blockSize){Hi(this,r),s=0;break}}this.h=s,this.i+=e};Fe.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function B(n,e){this.h=e;for(var t=[],r=!0,s=n.length-1;0<=s;s--){var i=n[s]|0;r&&i==e||(t[s]=i,r=!1)}this.g=t}var Vp={};function ma(n){return-128<=n&&128>n?Fg(n,function(e){return new B([e|0],0>e?-1:0)}):new B([n|0],0>n?-1:0)}function qe(n){if(isNaN(n)||!isFinite(n))return In;if(0>n)return ge(qe(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=po;return new B(e,0)}function Ah(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ge(Ah(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=qe(Math.pow(e,8)),r=In,s=0;s<n.length;s+=8){var i=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+i),e);8>i?(i=qe(Math.pow(e,i)),r=r.R(i).add(qe(o))):(r=r.R(t),r=r.add(qe(o)))}return r}var po=4294967296,In=ma(0),_o=ma(1),Kc=ma(16777216);E=B.prototype;E.ea=function(){if(ke(this))return-ge(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:po+r)*e,e*=po}return n};E.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(We(this))return"0";if(ke(this))return"-"+ge(this).toString(n);for(var e=qe(Math.pow(n,6)),t=this,r="";;){var s=Fs(t,e).g;t=Os(t,s.R(e));var i=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=s,We(t))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};E.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function We(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function ke(n){return n.h==-1}E.X=function(n){return n=Os(this,n),ke(n)?-1:We(n)?0:1};function ge(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new B(t,~n.h).add(_o)}E.abs=function(){return ke(this)?ge(this):this};E.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(n.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,t[s]=o<<16|i}return new B(t,t[t.length-1]&-2147483648?-1:0)};function Os(n,e){return n.add(ge(e))}E.R=function(n){if(We(this)||We(n))return In;if(ke(this))return ke(n)?ge(this).R(ge(n)):ge(ge(this).R(n));if(ke(n))return ge(this.R(ge(n)));if(0>this.X(Kc)&&0>n.X(Kc))return qe(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<n.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(s)>>>16,c=n.D(s)&65535;t[2*r+2*s]+=o*c,ds(t,2*r+2*s),t[2*r+2*s+1]+=i*c,ds(t,2*r+2*s+1),t[2*r+2*s+1]+=o*a,ds(t,2*r+2*s+1),t[2*r+2*s+2]+=i*a,ds(t,2*r+2*s+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new B(t,0)};function ds(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Yn(n,e){this.g=n,this.h=e}function Fs(n,e){if(We(e))throw Error("division by zero");if(We(n))return new Yn(In,In);if(ke(n))return e=Fs(ge(n),e),new Yn(ge(e.g),ge(e.h));if(ke(e))return e=Fs(n,ge(e)),new Yn(ge(e.g),e.h);if(30<n.g.length){if(ke(n)||ke(e))throw Error("slowDivide_ only works with positive integers.");for(var t=_o,r=e;0>=r.X(n);)t=Qc(t),r=Qc(r);var s=cn(t,1),i=cn(r,1);for(r=cn(r,2),t=cn(t,2);!We(r);){var o=i.add(r);0>=o.X(n)&&(s=s.add(t),i=o),r=cn(r,1),t=cn(t,1)}return e=Os(n,s.R(e)),new Yn(s,e)}for(s=In;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=qe(t),o=i.R(e);ke(o)||0<o.X(n);)t-=r,i=qe(t),o=i.R(e);We(i)&&(i=_o),s=s.add(i),n=Os(n,o)}return new Yn(s,n)}E.gb=function(n){return Fs(this,n).h};E.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new B(t,this.h&n.h)};E.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new B(t,this.h|n.h)};E.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new B(t,this.h^n.h)};function Qc(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new B(t,n.h)}function cn(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,s=[],i=0;i<r;i++)s[i]=0<e?n.D(i+t)>>>e|n.D(i+t+1)<<32-e:n.D(i+t);return new B(s,n.h)}Ms.prototype.createWebChannel=Ms.prototype.g;xe.prototype.send=xe.prototype.u;xe.prototype.open=xe.prototype.m;xe.prototype.close=xe.prototype.close;ii.NO_ERROR=0;ii.TIMEOUT=8;ii.HTTP_ERROR=6;ql.COMPLETE="complete";$l.EventType=zr;zr.OPEN="a";zr.CLOSE="b";zr.ERROR="c";zr.MESSAGE="d";le.prototype.listen=le.prototype.O;J.prototype.listenOnce=J.prototype.P;J.prototype.getLastError=J.prototype.Sa;J.prototype.getLastErrorCode=J.prototype.Ia;J.prototype.getStatus=J.prototype.da;J.prototype.getResponseJson=J.prototype.Wa;J.prototype.getResponseText=J.prototype.ja;J.prototype.send=J.prototype.ha;J.prototype.setWithCredentials=J.prototype.Oa;Fe.prototype.digest=Fe.prototype.l;Fe.prototype.reset=Fe.prototype.reset;Fe.prototype.update=Fe.prototype.j;B.prototype.add=B.prototype.add;B.prototype.multiply=B.prototype.R;B.prototype.modulo=B.prototype.gb;B.prototype.compare=B.prototype.X;B.prototype.toNumber=B.prototype.ea;B.prototype.toString=B.prototype.toString;B.prototype.getBits=B.prototype.D;B.fromNumber=qe;B.fromString=Ah;var Cp=function(){return new Ms},Dp=function(){return si()},Yi=ii,xp=ql,Np=en,Wc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},fs=$l,kp=J,Mp=Fe,En=B;const Hc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ae.UNAUTHENTICATED=new ae(null),ae.GOOGLE_CREDENTIALS=new ae("google-credentials-uid"),ae.FIRST_PARTY=new ae("first-party-uid"),ae.MOCK_USER=new ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn="10.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new jo("@firebase/firestore");function fn(){return mt.logLevel}function Op(n){mt.setLogLevel(n)}function _(n,...e){if(mt.logLevel<=k.DEBUG){const t=e.map(ga);mt.debug(`Firestore (${qn}): ${n}`,...t)}}function te(n,...e){if(mt.logLevel<=k.ERROR){const t=e.map(ga);mt.error(`Firestore (${qn}): ${n}`,...t)}}function Le(n,...e){if(mt.logLevel<=k.WARN){const t=e.map(ga);mt.warn(`Firestore (${qn}): ${n}`,...t)}}function ga(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(n="Unexpected state"){const e=`FIRESTORE (${qn}) INTERNAL ASSERTION FAILED: `+n;throw te(e),new Error(e)}function R(n,e){n||A()}function Fp(n,e){n||A()}function I(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Zt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ae.UNAUTHENTICATED))}shutdown(){}}class Bp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Up{constructor(e){this.t=e,this.currentUser=ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new ue;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ue,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ue)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(R(typeof r.accessToken=="string"),new Rh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return R(e===null||typeof e=="string"),new ae(e)}}class qp{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ae.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $p{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new qp(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gp{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=i=>{i.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(R(typeof t.token=="string"),this.R=t.token,new jp(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=zp(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function P(n,e){return n<e?-1:n>e?1:0}function Rn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function bh(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Q.fromMillis(Date.now())}static fromDate(e){return Q.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Q(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.timestamp=e}static fromTimestamp(e){return new S(e)}static min(){return new S(new Q(0,0))}static max(){return new S(new Q(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t,r){t===void 0?t=0:t>e.length&&A(),r===void 0?r=e.length-t:r>e.length-t&&A(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return br.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof br?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class x extends br{construct(e,t,r){return new x(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new x(t)}static emptyPath(){return new x([])}}const Kp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends br{construct(e,t,r){return new z(e,t,r)}static isValidIdentifier(e){return Kp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new z(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new p(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new p(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new p(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e){this.path=e}static fromPath(e){return new y(x.fromString(e))}static fromName(e){return new y(x.fromString(e).popFirst(5))}static empty(){return new y(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&x.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return x.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new y(new x(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function yo(n){return n.fields.find(e=>e.kind===2)}function Dt(n){return n.fields.filter(e=>e.kind!==2)}Ls.UNKNOWN_ID=-1;class Es{constructor(e,t){this.fieldPath=e,this.kind=t}}class Pr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Pr(0,Ne.min())}}function Ph(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=S.fromTimestamp(r===1e9?new Q(t+1,0):new Q(t,r));return new Ne(s,y.empty(),e)}function Vh(n){return new Ne(n.readTime,n.key,-1)}class Ne{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ne(S.min(),y.empty(),-1)}static max(){return new Ne(S.max(),y.empty(),-1)}}function pa(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=y.comparator(n.documentKey,e.documentKey),t!==0?t:P(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==Ch)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,r)=>{t(e)})}static reject(e){return new f((t,r)=>{r(e)})}static waitFor(e){return new f((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=f.resolve(!1);for(const r of e)t=t.next(s=>s?f.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new f((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,t){return new f((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new ue,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new cr(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=_a(r.target.error);this.V.reject(new cr(e,s))}}static open(e,t,r,s){try{return new mi(t,e.transaction(s,r))}catch(i){throw new cr(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Wp(t)}}class Me{constructor(e,t,r){this.name=e,this.version=t,this.p=r,Me.S(Cs())===12.2&&te("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),xt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ll())return!1;if(Me.C())return!0;const e=Cs(),t=Me.S(e),r=0<t&&t<10,s=Me.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new cr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new p(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new p(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new cr(e,o))},s.onupgradeneeded=i=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=mi.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),f.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Qp{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return xt(this.k.delete())}}class cr extends p{constructor(e,t){super(g.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function St(n){return n.name==="IndexedDbTransactionError"}class Wp{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(_("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),xt(r)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),xt(this.store.add(e))}get(e){return xt(this.store.get(e)).next(t=>(t===void 0&&(t=null),_("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),xt(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),xt(this.store.count())}W(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new f((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new f((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,t){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.G(s,t)}Z(e){const t=this.cursor({});return new f((r,s)=>{t.onerror=i=>{const o=_a(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,t){const r=[];return new f((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new Qp(a),u=t(a.primaryKey,a.value,c);if(u instanceof f){const l=u.catch(h=>(c.done(),f.reject(h)));r.push(l)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>f.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function xt(n){return new f((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=_a(r.target.error);t(s)}})}let Yc=!1;function _a(n){const e=Me.S(Cs());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Yc||(Yc=!0,setTimeout(()=>{throw r},0)),r}}return n}class Hp{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){_("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{_("IndexBackfiller",`Documents written: ${await this.X.te()}`)}catch(t){St(t)?_("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Rt(t)}await this.ee(6e4)})}}class Yp{constructor(e,t){this.localStore=e,this.persistence=t}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ne(t,e))}ne(e,t){const r=new Set;let s=t,i=!0;return f.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackfiller",`Processing collection: ${o}`),this.re(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>t-s)}re(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(s,i)).next(a=>(_("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ie(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=Vh(i);pa(o,r)>0&&(r=o)}),new Ne(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.se(r),this.oe=r=>t.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Ve._e=-1;function Yr(n){return n==null}function Vr(n){return n===0&&1/n==-1/0}function xh(n){return typeof n=="number"&&Number.isInteger(n)&&!Vr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xc(e)),e=Xp(n.get(t),e);return Xc(e)}function Xp(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Xc(n){return n+""}function $e(n){const e=n.length;if(R(e>=2),e===2)return R(n.charAt(0)===""&&n.charAt(1)===""),x.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&A(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:A()}i=o+2}return new x(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(n,e){return[n,Re(e)]}function Nh(n,e,t){return[n,Re(e),t]}const Jp={},Zp=["prefixPath","collectionGroup","readTime","documentId"],e_=["prefixPath","collectionGroup","documentId"],t_=["collectionGroup","readTime","prefixPath","documentId"],n_=["canonicalId","targetId"],r_=["targetId","path"],s_=["path","targetId"],i_=["collectionId","parent"],o_=["indexId","uid"],a_=["uid","sequenceNumber"],c_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],u_=["indexId","uid","orderedDocumentKey"],l_=["userId","collectionPath","documentId"],h_=["userId","collectionPath","largestBatchId"],d_=["userId","collectionGroup","largestBatchId"],kh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],f_=[...kh,"documentOverlays"],Mh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Oh=Mh,m_=[...Oh,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends Dh{constructor(e,t){super(),this.ae=e,this.currentSequenceNumber=t}}function de(n,e){const t=I(n);return Me.M(t.ae,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function tn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Fh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new $(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new $(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ms(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ms(this.root,e,this.comparator,!1)}getReverseIterator(){return new ms(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ms(this.root,e,this.comparator,!0)}}class ms{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??me.RED,this.left=s??me.EMPTY,this.right=i??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new me(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const e=this.left.check();if(e!==this.right.check())throw A();return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(e,t,r,s,i){return this}insert(e,t,r){return new me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.comparator=e,this.data=new $(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eu(this.data.getIterator())}getIteratorFrom(e){return new eu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof U)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new U(this.comparator);return t.data=e,t}}class eu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function un(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.fields=e,e.sort(z.comparator)}static empty(){return new Ce([])}unionWith(e){let t=new U(z.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ce(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Rn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Lh("Invalid base64 string: "+i):i}}(e);return new ie(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ie(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const p_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gt(n){if(R(!!n),typeof n=="string"){let e=0;const t=p_.exec(n);if(R(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:X(n.seconds),nanos:X(n.nanos)}}function X(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pt(n){return typeof n=="string"?ie.fromBase64String(n):ie.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ya(n){const e=n.mapValue.fields.__previous_value__;return gi(e)?ya(e):e}function Cr(n){const e=gt(n.mapValue.fields.__local_write_time__.timestampValue);return new Q(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t,r,s,i,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class _t{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new _t("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _t&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ts={nullValue:"NULL_VALUE"};function Gt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gi(n)?4:Bh(n)?9007199254740991:10:A()}function ze(n,e){if(n===e)return!0;const t=Gt(n);if(t!==Gt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Cr(n).isEqual(Cr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=gt(s.timestampValue),a=gt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return pt(s.bytesValue).isEqual(pt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return X(s.geoPointValue.latitude)===X(i.geoPointValue.latitude)&&X(s.geoPointValue.longitude)===X(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return X(s.integerValue)===X(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=X(s.doubleValue),a=X(i.doubleValue);return o===a?Vr(o)===Vr(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Rn(n.arrayValue.values||[],e.arrayValue.values||[],ze);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Zc(o)!==Zc(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ze(o[c],a[c])))return!1;return!0}(n,e);default:return A()}}function Dr(n,e){return(n.values||[]).find(t=>ze(t,e))!==void 0}function yt(n,e){if(n===e)return 0;const t=Gt(n),r=Gt(e);if(t!==r)return P(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return P(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=X(i.integerValue||i.doubleValue),c=X(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return tu(n.timestampValue,e.timestampValue);case 4:return tu(Cr(n),Cr(e));case 5:return P(n.stringValue,e.stringValue);case 6:return function(i,o){const a=pt(i),c=pt(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=P(a[u],c[u]);if(l!==0)return l}return P(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=P(X(i.latitude),X(o.latitude));return a!==0?a:P(X(i.longitude),X(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=yt(a[u],c[u]);if(l)return l}return P(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===at.mapValue&&o===at.mapValue)return 0;if(i===at.mapValue)return 1;if(o===at.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=P(c[h],l[h]);if(d!==0)return d;const m=yt(a[c[h]],u[l[h]]);if(m!==0)return m}return P(c.length,l.length)}(n.mapValue,e.mapValue);default:throw A()}}function tu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return P(n,e);const t=gt(n),r=gt(e),s=P(t.seconds,r.seconds);return s!==0?s:P(t.nanos,r.nanos)}function Sn(n){return Eo(n)}function Eo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=gt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return pt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Eo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Eo(t.fields[o])}`;return s+"}"}(n.mapValue):A()}function zt(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wo(n){return!!n&&"integerValue"in n}function xr(n){return!!n&&"arrayValue"in n}function nu(n){return!!n&&"nullValue"in n}function ru(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function vs(n){return!!n&&"mapValue"in n}function ur(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return tn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ur(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ur(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Bh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function y_(n){return"nullValue"in n?Ts:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?zt(_t.empty(),y.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:A()}function I_(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?zt(_t.empty(),y.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?at:A()}function su(n,e){const t=yt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function iu(n,e){const t=yt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.value=e}static empty(){return new pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!vs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ur(t)}setAll(e){let t=z.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=ur(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());vs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];vs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){tn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pe(ur(this.value))}}function Uh(n){const e=[];return tn(n.fields,(t,r)=>{const s=new z([t]);if(vs(r)){const i=Uh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ce(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new G(e,0,S.min(),S.min(),S.min(),pe.empty(),0)}static newFoundDocument(e,t,r,s){return new G(e,1,t,S.min(),r,s,0)}static newNoDocument(e,t){return new G(e,2,t,S.min(),S.min(),pe.empty(),0)}static newUnknownDocument(e,t){return new G(e,3,t,S.min(),S.min(),pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof G&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){this.position=e,this.inclusive=t}}function ou(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=y.comparator(y.fromName(o.referenceValue),t.key):r=yt(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function au(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ze(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t="asc"){this.field=e,this.dir=t}}function E_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{}class N extends qh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new w_(e,t,r):t==="array-contains"?new A_(e,r):t==="in"?new Qh(e,r):t==="not-in"?new R_(e,r):t==="array-contains-any"?new S_(e,r):new N(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new T_(e,r):new v_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(yt(t,this.value)):t!==null&&Gt(this.value)===Gt(t)&&this.matchesComparison(yt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class L extends qh{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new L(e,t)}matches(e){return bn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function bn(n){return n.op==="and"}function To(n){return n.op==="or"}function Ia(n){return $h(n)&&bn(n)}function $h(n){for(const e of n.filters)if(e instanceof L)return!1;return!0}function vo(n){if(n instanceof N)return n.field.canonicalString()+n.op.toString()+Sn(n.value);if(Ia(n))return n.filters.map(e=>vo(e)).join(",");{const e=n.filters.map(t=>vo(t)).join(",");return`${n.op}(${e})`}}function jh(n,e){return n instanceof N?function(r,s){return s instanceof N&&r.op===s.op&&r.field.isEqual(s.field)&&ze(r.value,s.value)}(n,e):n instanceof L?function(r,s){return s instanceof L&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&jh(o,s.filters[a]),!0):!1}(n,e):void A()}function Gh(n,e){const t=n.filters.concat(e);return L.create(t,n.op)}function zh(n){return n instanceof N?function(t){return`${t.field.canonicalString()} ${t.op} ${Sn(t.value)}`}(n):n instanceof L?function(t){return t.op.toString()+" {"+t.getFilters().map(zh).join(" ,")+"}"}(n):"Filter"}class w_ extends N{constructor(e,t,r){super(e,t,r),this.key=y.fromName(r.referenceValue)}matches(e){const t=y.comparator(e.key,this.key);return this.matchesComparison(t)}}class T_ extends N{constructor(e,t){super(e,"in",t),this.keys=Kh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class v_ extends N{constructor(e,t){super(e,"not-in",t),this.keys=Kh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Kh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>y.fromName(r.referenceValue))}class A_ extends N{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xr(t)&&Dr(t.arrayValue,this.value)}}class Qh extends N{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Dr(this.value.arrayValue,t)}}class R_ extends N{constructor(e,t){super(e,"not-in",t)}matches(e){if(Dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Dr(this.value.arrayValue,t)}}class S_ extends N{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Dr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Ao(n,e=null,t=[],r=[],s=null,i=null,o=null){return new b_(n,e,t,r,s,i,o)}function Kt(n){const e=I(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>vo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Yr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Sn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Sn(r)).join(",")),e.ce=t}return e.ce}function Xr(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!E_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!jh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!au(n.startAt,e.startAt)&&au(n.endAt,e.endAt)}function Bs(n){return y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Us(n,e){return n.filters.filter(t=>t instanceof N&&t.field.isEqual(e))}function cu(n,e,t){let r=Ts,s=!0;for(const i of Us(n,e)){let o=Ts,a=!0;switch(i.op){case"<":case"<=":o=y_(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Ts}su({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];su({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function uu(n,e,t){let r=at,s=!0;for(const i of Us(n,e)){let o=at,a=!0;switch(i.op){case">=":case">":o=I_(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=at}iu({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];iu({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Wh(n,e,t,r,s,i,o,a){return new Ze(n,e,t,r,s,i,o,a)}function $n(n){return new Ze(n)}function lu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ea(n){return n.collectionGroup!==null}function wn(n){const e=I(n);if(e.le===null){e.le=[];const t=new Set;for(const i of e.explicitOrderBy)e.le.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new U(z.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.le.push(new Nr(i,r))}),t.has(z.keyField().canonicalString())||e.le.push(new Nr(z.keyField(),r))}return e.le}function Se(n){const e=I(n);return e.he||(e.he=P_(e,wn(n))),e.he}function P_(n,e){if(n.limitType==="F")return Ao(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Nr(s.field,i)});const t=n.endAt?new It(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new It(n.startAt.position,n.startAt.inclusive):null;return Ao(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ro(n,e){const t=n.filters.concat([e]);return new Ze(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function qs(n,e,t){return new Ze(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Jr(n,e){return Xr(Se(n),Se(e))&&n.limitType===e.limitType}function Hh(n){return`${Kt(Se(n))}|lt:${n.limitType}`}function mn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>zh(s)).join(", ")}]`),Yr(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Sn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Sn(s)).join(",")),`Target(${r})`}(Se(n))}; limitType=${n.limitType})`}function Zr(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of wn(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=ou(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,wn(r),s)||r.endAt&&!function(o,a,c){const u=ou(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,wn(r),s))}(n,e)}function Yh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Xh(n){return(e,t)=>{let r=!1;for(const s of wn(n)){const i=V_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function V_(n,e,t){const r=n.field.isKeyField()?y.comparator(e.key,t.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?yt(c,u):A()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){tn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Fh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=new $(y.comparator);function De(){return C_}const Jh=new $(y.comparator);function sr(...n){let e=Jh;for(const t of n)e=e.insert(t.key,t);return e}function Zh(n){let e=Jh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function je(){return lr()}function ed(){return lr()}function lr(){return new bt(n=>n.toString(),(n,e)=>n.isEqual(e))}const D_=new $(y.comparator),x_=new U(y.comparator);function V(...n){let e=x_;for(const t of n)e=e.add(t);return e}const N_=new U(P);function wa(){return N_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vr(e)?"-0":e}}function nd(n){return{integerValue:""+n}}function rd(n,e){return xh(e)?nd(e):td(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this._=void 0}}function k_(n,e,t){return n instanceof Pn?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&gi(i)&&(i=ya(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof Qt?id(n,e):n instanceof Wt?od(n,e):function(s,i){const o=sd(s,i),a=hu(o)+hu(s.Ie);return wo(o)&&wo(s.Ie)?nd(a):td(s.serializer,a)}(n,e)}function M_(n,e,t){return n instanceof Qt?id(n,e):n instanceof Wt?od(n,e):t}function sd(n,e){return n instanceof Vn?function(r){return wo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Pn extends pi{}class Qt extends pi{constructor(e){super(),this.elements=e}}function id(n,e){const t=ad(e);for(const r of n.elements)t.some(s=>ze(s,r))||t.push(r);return{arrayValue:{values:t}}}class Wt extends pi{constructor(e){super(),this.elements=e}}function od(n,e){let t=ad(e);for(const r of n.elements)t=t.filter(s=>!ze(s,r));return{arrayValue:{values:t}}}class Vn extends pi{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function hu(n){return X(n.integerValue||n.doubleValue)}function ad(n){return xr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){this.field=e,this.transform=t}}function O_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Qt&&s instanceof Qt||r instanceof Wt&&s instanceof Wt?Rn(r.elements,s.elements,ze):r instanceof Vn&&s instanceof Vn?ze(r.Ie,s.Ie):r instanceof Pn&&s instanceof Pn}(n.transform,e.transform)}class F_{constructor(e,t){this.version=e,this.transformResults=t}}class K{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new K}static exists(e){return new K(void 0,e)}static updateTime(e){return new K(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function As(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _i{}function cd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Gn(n.key,K.none()):new jn(n.key,n.data,K.none());{const t=n.data,r=pe.empty();let s=new U(z.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new et(n.key,r,new Ce(s.toArray()),K.none())}}function L_(n,e,t){n instanceof jn?function(s,i,o){const a=s.value.clone(),c=fu(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof et?function(s,i,o){if(!As(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=fu(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(ud(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function hr(n,e,t,r){return n instanceof jn?function(i,o,a,c){if(!As(i.precondition,o))return a;const u=i.value.clone(),l=mu(i.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof et?function(i,o,a,c){if(!As(i.precondition,o))return a;const u=mu(i.fieldTransforms,c,o),l=o.data;return l.setAll(ud(i)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(i,o,a){return As(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function B_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=sd(r.transform,s||null);i!=null&&(t===null&&(t=pe.empty()),t.set(r.field,i))}return t||null}function du(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Rn(r,s,(i,o)=>O_(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class jn extends _i{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class et extends _i{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ud(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function fu(n,e,t){const r=new Map;R(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,M_(o,a,t[s]))}return r}function mu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,k_(i,o,e))}return r}class Gn extends _i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ta extends _i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&L_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=hr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=hr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ed();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const c=cd(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),V())}isEqual(e){return this.batchId===e.batchId&&Rn(this.mutations,e.mutations,(t,r)=>du(t,r))&&Rn(this.baseMutations,e.baseMutations,(t,r)=>du(t,r))}}class Aa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){R(e.mutations.length===r.length);let s=function(){return D_}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Aa(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re,M;function ld(n){switch(n){default:return A();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function hd(n){if(n===void 0)return te("GRPC error has no .code"),g.UNKNOWN;switch(n){case re.OK:return g.OK;case re.CANCELLED:return g.CANCELLED;case re.UNKNOWN:return g.UNKNOWN;case re.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case re.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case re.INTERNAL:return g.INTERNAL;case re.UNAVAILABLE:return g.UNAVAILABLE;case re.UNAUTHENTICATED:return g.UNAUTHENTICATED;case re.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case re.NOT_FOUND:return g.NOT_FOUND;case re.ALREADY_EXISTS:return g.ALREADY_EXISTS;case re.PERMISSION_DENIED:return g.PERMISSION_DENIED;case re.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case re.ABORTED:return g.ABORTED;case re.OUT_OF_RANGE:return g.OUT_OF_RANGE;case re.UNIMPLEMENTED:return g.UNIMPLEMENTED;case re.DATA_LOSS:return g.DATA_LOSS;default:return A()}}(M=re||(re={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=new En([4294967295,4294967295],0);function gu(n){const e=dd().encode(n),t=new Mp;return t.update(e),new Uint8Array(t.digest())}function pu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new En([t,r],0),new En([s,i],0)]}class Sa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ir(`Invalid padding: ${t}`);if(r<0)throw new ir(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ir(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ir(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=En.fromNumber(this.Te)}de(e,t,r){let s=e.add(t.multiply(En.fromNumber(r)));return s.compare(q_)===1&&(s=new En([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=gu(e),[r,s]=pu(t);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Sa(i,s,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=gu(e),[r,s]=pu(t);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ns.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ts(S.min(),s,new $(P),De(),V())}}class ns{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ns(r,t,V(),V(),V())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t,r,s){this.Ve=e,this.removedTargetIds=t,this.key=r,this.me=s}}class fd{constructor(e,t){this.targetId=e,this.fe=t}}class md{constructor(e,t,r=ie.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class _u{constructor(){this.ge=0,this.pe=Iu(),this.ye=ie.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=V(),t=V(),r=V();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:A()}}),new ns(this.ye,this.we,e,t,r)}Fe(){this.Se=!1,this.pe=Iu()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,R(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class $_{constructor(e){this.Le=e,this.ke=new Map,this.qe=De(),this.Qe=yu(),this.Ke=new $(P)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(t);break;case 3:this.je(t)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.Ce(e.resumeToken));break;default:A()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.fe.count,s=this.Ye(t);if(s){const i=s.target;if(Bs(i))if(r===0){const o=new y(i.path);this.We(t,o,G.newNoDocument(o,S.min()))}else R(r===1);else{const o=this.Ze(t);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=pt(r).toUint8Array()}catch(c){if(c instanceof Lh)return Le("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Sa(o,s,i)}catch(c){return Le(c instanceof ir?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,r){return t.fe.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(t,i,null),s++)}),s}it(e){const t=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Bs(a.target)){const c=new y(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,G.newNoDocument(c,e))}i.De&&(t.set(o,i.ve()),i.Fe())}});let r=V();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new ts(e,t,this.Ke,this.qe,r);return this.qe=De(),this.Qe=yu(),this.Ke=new $(P),s}Ue(e,t){if(!this.je(e))return;const r=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,r),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,t)?s.Me(t,1):s.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),r&&(this.qe=this.qe.insert(t,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new _u,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new U(P),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||_("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new _u),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function yu(){return new $(y.comparator)}function Iu(){return new $(y.comparator)}const j_={asc:"ASCENDING",desc:"DESCENDING"},G_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},z_={and:"AND",or:"OR"};class K_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function So(n,e){return n.useProto3Json||Yr(e)?e:{value:e}}function Cn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Q_(n,e){return Cn(n,e.toTimestamp())}function ne(n){return R(!!n),S.fromTimestamp(function(t){const r=gt(t);return new Q(r.seconds,r.nanos)}(n))}function ba(n,e){return bo(n,e).canonicalString()}function bo(n,e){const t=function(s){return new x(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function pd(n){const e=x.fromString(n);return R(Sd(e)),e}function kr(n,e){return ba(n.databaseId,e.path)}function Ge(n,e){const t=pd(e);if(t.get(1)!==n.databaseId.projectId)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new y(Id(t))}function _d(n,e){return ba(n.databaseId,e)}function yd(n){const e=pd(n);return e.length===4?x.emptyPath():Id(e)}function Po(n){return new x(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Id(n){return R(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Eu(n,e,t){return{name:kr(n,e),fields:t.value.mapValue.fields}}function Ed(n,e,t){const r=Ge(n,e.name),s=ne(e.updateTime),i=e.createTime?ne(e.createTime):S.min(),o=new pe({mapValue:{fields:e.fields}}),a=G.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function W_(n,e){return"found"in e?function(r,s){R(!!s.found),s.found.name,s.found.updateTime;const i=Ge(r,s.found.name),o=ne(s.found.updateTime),a=s.found.createTime?ne(s.found.createTime):S.min(),c=new pe({mapValue:{fields:s.found.fields}});return G.newFoundDocument(i,o,a,c)}(n,e):"missing"in e?function(r,s){R(!!s.missing),R(!!s.readTime);const i=Ge(r,s.missing),o=ne(s.readTime);return G.newNoDocument(i,o)}(n,e):A()}function H_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:A()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,l){return u.useProto3Json?(R(l===void 0||typeof l=="string"),ie.fromBase64String(l||"")):(R(l===void 0||l instanceof Uint8Array),ie.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?g.UNKNOWN:hd(u.code);return new p(l,u.message||"")}(o);t=new md(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ge(n,r.document.name),i=ne(r.document.updateTime),o=r.document.createTime?ne(r.document.createTime):S.min(),a=new pe({mapValue:{fields:r.document.fields}}),c=G.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Rs(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ge(n,r.document),i=r.readTime?ne(r.readTime):S.min(),o=G.newNoDocument(s,i),a=r.removedTargetIds||[];t=new Rs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ge(n,r.document),i=r.removedTargetIds||[];t=new Rs([],i,s,null)}else{if(!("filter"in e))return A();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new U_(s,i),a=r.targetId;t=new fd(a,o)}}return t}function Mr(n,e){let t;if(e instanceof jn)t={update:Eu(n,e.key,e.value)};else if(e instanceof Gn)t={delete:kr(n,e.key)};else if(e instanceof et)t={update:Eu(n,e.key,e.data),updateMask:ty(e.fieldMask)};else{if(!(e instanceof Ta))return A();t={verify:kr(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Pn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Qt)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wt)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Vn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw A()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Q_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:A()}(n,e.precondition)),t}function Vo(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?K.updateTime(ne(i.updateTime)):i.exists!==void 0?K.exists(i.exists):K.none()}(e.currentDocument):K.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let c=null;if("setToServerValue"in a)R(a.setToServerValue==="REQUEST_TIME"),c=new Pn;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new Qt(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new Wt(l)}else"increment"in a?c=new Vn(o,a.increment):A();const u=z.fromServerFormat(a.fieldPath);return new es(u,c)}(n,s)):[];if(e.update){e.update.name;const s=Ge(n,e.update.name),i=new pe({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Ce(u.map(l=>z.fromServerFormat(l)))}(e.updateMask);return new et(s,i,o,t,r)}return new jn(s,i,t,r)}if(e.delete){const s=Ge(n,e.delete);return new Gn(s,t)}if(e.verify){const s=Ge(n,e.verify);return new Ta(s,t)}return A()}function Y_(n,e){return n&&n.length>0?(R(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?ne(s.updateTime):ne(i);return o.isEqual(S.min())&&(o=ne(i)),new F_(o,s.transformResults||[])}(t,e))):[]}function wd(n,e){return{documents:[_d(n,e.path)]}}function Td(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=_d(n,s);const i=function(u){if(u.length!==0)return Rd(L.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(l=>function(d){return{field:gn(d.field),direction:J_(d.dir)}}(l))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=So(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:t,parent:s}}function vd(n){let e=yd(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){R(r===1);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(h){const d=Ad(h);return d instanceof L&&Ia(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(v){return new Nr(pn(v.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Yr(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,m=h.values||[];return new It(m,d)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new It(m,d)}(t.endAt)),Wh(e,s,o,i,a,"F",c,u)}function X_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ad(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=pn(t.unaryFilter.field);return N.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=pn(t.unaryFilter.field);return N.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=pn(t.unaryFilter.field);return N.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pn(t.unaryFilter.field);return N.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(t){return N.create(pn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return L.create(t.compositeFilter.filters.map(r=>Ad(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return A()}}(t.compositeFilter.op))}(n):A()}function J_(n){return j_[n]}function Z_(n){return G_[n]}function ey(n){return z_[n]}function gn(n){return{fieldPath:n.canonicalString()}}function pn(n){return z.fromServerFormat(n.fieldPath)}function Rd(n){return n instanceof N?function(t){if(t.op==="=="){if(ru(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NAN"}};if(nu(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ru(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NAN"}};if(nu(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(t.field),op:Z_(t.op),value:t.value}}}(n):n instanceof L?function(t){const r=t.getFilters().map(s=>Rd(s));return r.length===1?r[0]:{compositeFilter:{op:ey(t.op),filters:r}}}(n):A()}function ty(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Sd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t,r,s,i=S.min(),o=S.min(),a=ie.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new He(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.ct=e}}function ny(n,e){let t;if(e.document)t=Ed(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=y.fromSegments(e.noDocument.path),s=Yt(e.noDocument.readTime);t=G.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return A();{const r=y.fromSegments(e.unknownDocument.path),s=Yt(e.unknownDocument.version);t=G.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new Q(s[0],s[1]);return S.fromTimestamp(i)}(e.readTime)),t}function wu(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:$s(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:kr(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Cn(i,o.version.toTimestamp()),createTime:Cn(i,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Ht(e.version)};else{if(!e.isUnknownDocument())return A();r.unknownDocument={path:t.path.toArray(),version:Ht(e.version)}}return r}function $s(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Ht(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Yt(n){const e=new Q(n.seconds,n.nanoseconds);return S.fromTimestamp(e)}function Nt(n,e){const t=(e.baseMutations||[]).map(i=>Vo(n.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Vo(n.ct,i)),s=Q.fromMillis(e.localWriteTimeMs);return new va(e.batchId,s,t,r)}function or(n){const e=Yt(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Yt(n.lastLimboFreeSnapshotVersion):S.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){return R(i.documents.length===1),Se($n(yd(i.documents[0])))}(n.query):function(i){return Se(vd(i))}(n.query),new He(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,ie.fromBase64String(n.resumeToken))}function Pd(n,e){const t=Ht(e.snapshotVersion),r=Ht(e.lastLimboFreeSnapshotVersion);let s;s=Bs(e.target)?wd(n.ct,e.target):Td(n.ct,e.target).ut;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Kt(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Pa(n){const e=vd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qs(e,e.limit,"L"):e}function Xi(n,e){return new Ra(e.largestBatchId,Vo(n.ct,e.overlayMutation))}function Tu(n,e){const t=e.path.lastSegment();return[n,Re(e.path.popLast()),t]}function vu(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Ht(r.readTime),documentKey:Re(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{getBundleMetadata(e,t){return Au(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:Yt(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Au(e).put(function(s){return{bundleId:s.id,createTime:Ht(ne(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Ru(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:Pa(i.bundledQuery),readTime:Yt(i.readTime)}}(r)})}saveNamedQuery(e,t){return Ru(e).put(function(s){return{name:s.name,readTime:Ht(ne(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Au(n){return de(n,"bundles")}function Ru(n){return de(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new yi(e,r)}getOverlay(e,t){return Xn(e).get(Tu(this.userId,t)).next(r=>r?Xi(this.serializer,r):null)}getOverlays(e,t){const r=je();return f.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new Ra(t,o);s.push(this.ht(e,a))}),f.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(Re(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Xn(e).H("collectionPathOverlayIndex",a))}),f.waitFor(i)}getOverlaysForCollection(e,t,r){const s=je(),i=Re(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Xn(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Xi(this.serializer,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=je();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Xn(e).Y({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Xi(this.serializer,u);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}ht(e,t){return Xn(e).put(function(s,i,o){const[a,c,u]=Tu(i,o.mutation.key);return{userId:i,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Mr(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function Xn(n){return de(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(X(e.integerValue));else if("doubleValue"in e){const r=X(e.doubleValue);isNaN(r)?this.Et(t,13):(this.Et(t,15),Vr(r)?t.dt(0):t.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(t,20),typeof r=="string"?t.At(r):(t.At(`${r.seconds||""}`),t.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(pt(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(t,45),t.dt(r.latitude||0),t.dt(r.longitude||0)}else"mapValue"in e?Bh(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):A()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const r=e.fields||{};this.Et(t,55);for(const s of Object.keys(r))this.Rt(s,t),this.It(r[s],t)}wt(e,t){const r=e.values||[];this.Et(t,50);for(const s of r)this.It(s,t)}gt(e,t){this.Et(t,37),y.fromName(e).path.forEach(r=>{this.Et(t,60),this.St(r,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}kt.bt=new kt;function sy(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Su(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=sy(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class iy{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ct(r.value),r=t.next();this.vt()}Ft(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Mt(r.value),r=t.next();this.xt()}Ot(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const s=t.codePointAt(0);this.Ct(240|s>>>18),this.Ct(128|63&s>>>12),this.Ct(128|63&s>>>6),this.Ct(128|63&s)}}this.vt()}Nt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const s=t.codePointAt(0);this.Mt(240|s>>>18),this.Mt(128|63&s>>>12),this.Mt(128|63&s>>>6),this.Mt(128|63&s)}}this.xt()}Bt(e){const t=this.Lt(e),r=Su(t);this.kt(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}qt(e){const t=this.Lt(e),r=Su(t);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Ct(e){const t=255&e;t===0?(this.Kt(0),this.Kt(255)):t===255?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class oy{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class ay{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Jn{constructor(){this.Gt=new iy,this.zt=new oy(this.Gt),this.jt=new ay(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}Jt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Mt(this.indexId,this.documentKey,this.arrayValue,r)}}function nt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=bu(n.arrayValue,e.arrayValue),t!==0?t:(t=bu(n.directionalValue,e.directionalValue),t!==0?t:y.comparator(n.documentKey,e.documentKey)))}function bu(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){this.Yt=new U((t,r)=>z.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const t of e.filters){const r=t;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(R(e.collectionGroup===this.collectionId),this.en)return!1;const t=yo(e);if(t!==void 0&&!this.nn(t))return!1;const r=Dt(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.nn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!s.has(a.field.canonicalString())){const c=r[i];if(!this.rn(a,c)||!this.sn(this.Zt[o++],c))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new U(z.comparator);const t=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Es(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Es(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Es(r.field,r.dir==="asc"?0:1)));return new Ls(Ls.UNKNOWN_ID,this.collectionId,t,Pr.empty())}nn(e){for(const t of this.Xt)if(this.rn(t,e))return!0;return!1}rn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n){var e,t;if(R(n instanceof N||n instanceof L),n instanceof N){if(n instanceof Qh){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>N.create(n.field,"==",i)))||[];return L.create(s,"or")}return n}const r=n.filters.map(s=>Vd(s));return L.create(r,n.op)}function cy(n){if(n.getFilters().length===0)return[];const e=xo(Vd(n));return R(Cd(e)),Co(e)||Do(e)?[e]:e.getFilters()}function Co(n){return n instanceof N}function Do(n){return n instanceof L&&Ia(n)}function Cd(n){return Co(n)||Do(n)||function(t){if(t instanceof L&&To(t)){for(const r of t.getFilters())if(!Co(r)&&!Do(r))return!1;return!0}return!1}(n)}function xo(n){if(R(n instanceof N||n instanceof L),n instanceof N)return n;if(n.filters.length===1)return xo(n.filters[0]);const e=n.filters.map(r=>xo(r));let t=L.create(e,n.op);return t=js(t),Cd(t)?t:(R(t instanceof L),R(bn(t)),R(t.filters.length>1),t.filters.reduce((r,s)=>Va(r,s)))}function Va(n,e){let t;return R(n instanceof N||n instanceof L),R(e instanceof N||e instanceof L),t=n instanceof N?e instanceof N?function(s,i){return L.create([s,i],"and")}(n,e):Vu(n,e):e instanceof N?Vu(e,n):function(s,i){if(R(s.filters.length>0&&i.filters.length>0),bn(s)&&bn(i))return Gh(s,i.getFilters());const o=To(s)?s:i,a=To(s)?i:s,c=o.filters.map(u=>Va(u,a));return L.create(c,"or")}(n,e),js(t)}function Vu(n,e){if(bn(e))return Gh(e,n.getFilters());{const t=e.filters.map(r=>Va(n,r));return L.create(t,"or")}}function js(n){if(R(n instanceof N||n instanceof L),n instanceof N)return n;const e=n.getFilters();if(e.length===1)return js(e[0]);if($h(n))return n;const t=e.map(s=>js(s)),r=[];return t.forEach(s=>{s instanceof N?r.push(s):s instanceof L&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:L.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this._n=new Ca}addToCollectionParentIndex(e,t){return this._n.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}deleteAllFieldIndexes(e){return f.resolve()}createTargetIndexes(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(Ne.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve(Ne.min())}updateCollectionGroup(e,t,r){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class Ca{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new U(x.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new U(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Uint8Array(0);class ly{constructor(e,t){this.databaseId=t,this.an=new Ca,this.un=new bt(r=>Kt(r),(r,s)=>Xr(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.an.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.an.add(t)});const i={collectionId:r,parent:Re(s)};return Cu(e).put(i)}return f.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[bh(t),""],!1,!0);return Cu(e).W(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push($e(o.parent))}return r})}addFieldIndex(e,t){const r=Zn(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=hn(e);return i.next(a=>{o.put(vu(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Zn(e),s=hn(e),i=ln(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Zn(e),r=ln(e),s=hn(e);return t.H().next(()=>r.H()).next(()=>s.H())}createTargetIndexes(e,t){return f.forEach(this.cn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new Pu(r).on();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=ln(e);let s=!0;const i=new Map;return f.forEach(this.cn(t),o=>this.ln(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=V();const a=[];return f.forEach(i,(c,u)=>{_("IndexedDbIndexManager",`Using index ${function(D){return`id=${D.indexId}|cg=${D.collectionGroup}|f=${D.fields.map(H=>`${H.fieldPath}:${H.kind}`).join(",")}`}(c)} to execute ${Kt(t)}`);const l=function(D,H){const ee=yo(H);if(ee===void 0)return null;for(const Y of Us(D,ee.fieldPath))switch(Y.op){case"array-contains-any":return Y.value.arrayValue.values||[];case"array-contains":return[Y.value]}return null}(u,c),h=function(D,H){const ee=new Map;for(const Y of Dt(H))for(const ye of Us(D,Y.fieldPath))switch(ye.op){case"==":case"in":ee.set(Y.fieldPath.canonicalString(),ye.value);break;case"not-in":case"!=":return ee.set(Y.fieldPath.canonicalString(),ye.value),Array.from(ee.values())}return null}(u,c),d=function(D,H){const ee=[];let Y=!0;for(const ye of Dt(H)){const an=ye.kind===0?cu(D,ye.fieldPath,D.startAt):uu(D,ye.fieldPath,D.startAt);ee.push(an.value),Y&&(Y=an.inclusive)}return new It(ee,Y)}(u,c),m=function(D,H){const ee=[];let Y=!0;for(const ye of Dt(H)){const an=ye.kind===0?uu(D,ye.fieldPath,D.endAt):cu(D,ye.fieldPath,D.endAt);ee.push(an.value),Y&&(Y=an.inclusive)}return new It(ee,Y)}(u,c),v=this.hn(c,u,d),w=this.hn(c,u,m),T=this.Pn(c,u,h),C=this.In(c.indexId,l,v,d.inclusive,w,m.inclusive,T);return f.forEach(C,F=>r.j(F,t.limit).next(D=>{D.forEach(H=>{const ee=y.fromSegments(H.documentKey);o.has(ee)||(o=o.add(ee),a.push(ee))})}))}).next(()=>a)}return f.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=cy(L.create(e.filters,"and")).map(r=>Ao(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}In(e,t,r,s,i,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,i.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.Tn(t[h/u]):gs,m=this.En(e,d,r[h%u],s),v=this.dn(e,d,i[h%u],o),w=a.map(T=>this.En(e,d,T,!0));l.push(...this.createRange(m,v,w))}return l}En(e,t,r,s){const i=new Mt(e,y.empty(),t,r);return s?i:i.Jt()}dn(e,t,r,s){const i=new Mt(e,y.empty(),t,r);return s?i.Jt():i}ln(e,t){const r=new Pu(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const s=this.cn(t);return f.forEach(s,i=>this.ln(e,i).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new U(z.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}An(e,t){const r=new Jn;for(const s of Dt(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Ht(s.kind);kt.bt.Pt(i,o)}return r.Wt()}Tn(e){const t=new Jn;return kt.bt.Pt(e,t.Ht(0)),t.Wt()}Rn(e,t){const r=new Jn;return kt.bt.Pt(zt(this.databaseId,t),r.Ht(function(i){const o=Dt(i);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,t,r){if(r===null)return[];let s=[];s.push(new Jn);let i=0;for(const o of Dt(e)){const a=r[i++];for(const c of s)if(this.Vn(t,o.fieldPath)&&xr(a))s=this.mn(s,o,a);else{const u=c.Ht(o.kind);kt.bt.Pt(a,u)}}return this.fn(s)}hn(e,t,r){return this.Pn(e,t,r.position)}fn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Wt();return t}mn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new Jn;c.seed(a.Wt()),kt.bt.Pt(o,c.Ht(t.kind)),i.push(c)}return i}Vn(e,t){return!!e.filters.find(r=>r instanceof N&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Zn(e),s=hn(e);return(t?r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.W()).next(i=>{const o=[];return f.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new Pr(h.sequenceNumber,new Ne(Yt(h.readTime),new y($e(h.documentKey)),h.largestBatchId)):Pr.empty(),m=l.fields.map(([v,w])=>new Es(z.fromServerFormat(v),w));return new Ls(l.indexId,l.collectionGroup,m,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:P(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Zn(e),i=hn(e);return this.gn(e).next(o=>s.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,c=>i.put(vu(c.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return f.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),f.forEach(a,c=>this.pn(e,s,c).next(u=>{const l=this.yn(i,c);return u.isEqual(l)?f.resolve():this.wn(e,i,c,u,l)}))))})}Sn(e,t,r,s){return ln(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.Rn(r,t.key),documentKey:t.key.path.toArray()})}bn(e,t,r,s){return ln(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.Rn(r,t.key),t.key.path.toArray()])}pn(e,t,r){const s=ln(e);let i=new U(nt);return s.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,t)])},(o,a)=>{i=i.add(new Mt(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}yn(e,t){let r=new U(nt);const s=this.An(t,e);if(s==null)return r;const i=yo(t);if(i!=null){const o=e.data.field(i.fieldPath);if(xr(o))for(const a of o.arrayValue.values||[])r=r.add(new Mt(t.indexId,e.key,this.Tn(a),s))}else r=r.add(new Mt(t.indexId,e.key,gs,s));return r}wn(e,t,r,s,i){_("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,u,l,h,d){const m=c.getIterator(),v=u.getIterator();let w=un(m),T=un(v);for(;w||T;){let C=!1,F=!1;if(w&&T){const D=l(w,T);D<0?F=!0:D>0&&(C=!0)}else w!=null?F=!0:C=!0;C?(h(T),T=un(v)):F?(d(w),w=un(m)):(w=un(m),T=un(v))}}(s,i,nt,a=>{o.push(this.Sn(e,t,r,a))},a=>{o.push(this.bn(e,t,r,a))}),f.waitFor(o)}gn(e){let t=1;return hn(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>nt(o,a)).filter((o,a,c)=>!a||nt(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=nt(o,e),c=nt(o,t);if(a===0)s[0]=e.Jt();else if(a>0&&c<0)s.push(o),s.push(o.Jt());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Dn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,gs,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,gs,[]];i.push(IDBKeyRange.bound(a,c))}return i}Dn(e,t){return nt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Du)}getMinOffset(e,t){return f.mapArray(this.cn(t),r=>this.ln(e,r).next(s=>s||A())).next(Du)}}function Cu(n){return de(n,"collectionParents")}function ln(n){return de(n,"indexEntries")}function Zn(n){return de(n,"indexConfiguration")}function hn(n){return de(n,"indexState")}function Du(n){R(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;pa(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Ne(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Pe{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Pe(e,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Y({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{R(a===1)}));const u=[];for(const l of t.mutations){const h=Nh(e,l.key.path,t.batchId);i.push(s.delete(h)),u.push(l.key)}return f.waitFor(i).next(()=>u)}function Gs(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw A();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe.DEFAULT_COLLECTION_PERCENTILE=10,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pe.DEFAULT=new Pe(41943040,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pe.DISABLED=new Pe(-1,0,0);class Ii{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Cn={}}static lt(e,t,r,s){R(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Ii(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return rt(e).Y({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=_n(e),o=rt(e);return o.add({}).next(a=>{R(typeof a=="number");const c=new va(a,t,r,s),u=function(m,v,w){const T=w.baseMutations.map(F=>Mr(m.ct,F)),C=w.mutations.map(F=>Mr(m.ct,F));return{userId:v,batchId:w.batchId,localWriteTimeMs:w.localWriteTime.toMillis(),baseMutations:T,mutations:C}}(this.serializer,this.userId,c),l=[];let h=new U((d,m)=>P(d.canonicalString(),m.canonicalString()));for(const d of s){const m=Nh(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(m,Jp))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Cn[a]=c.keys()}),f.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return rt(e).get(t).next(r=>r?(R(r.userId===this.userId),Nt(this.serializer,r)):null)}vn(e,t){return this.Cn[t]?f.resolve(this.Cn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Cn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return rt(e).Y({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(R(a.batchId>=r),i=Nt(this.serializer,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return rt(e).Y({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return rt(e).W("userMutationsIndex",t).next(r=>r.map(s=>Nt(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ws(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return _n(e).Y({range:s},(o,a,c)=>{const[u,l,h]=o,d=$e(l);if(u===this.userId&&t.path.isEqual(d))return rt(e).get(h).next(m=>{if(!m)throw A();R(m.userId===this.userId),i.push(Nt(this.serializer,m))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new U(P);const s=[];return t.forEach(i=>{const o=ws(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=_n(e).Y({range:a},(u,l,h)=>{const[d,m,v]=u,w=$e(m);d===this.userId&&i.path.isEqual(w)?r=r.add(v):h.done()});s.push(c)}),f.waitFor(s).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=ws(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new U(P);return _n(e).Y({range:o},(c,u,l)=>{const[h,d,m]=c,v=$e(d);h===this.userId&&r.isPrefixOf(v)?v.length===s&&(a=a.add(m)):l.done()}).next(()=>this.Fn(e,a))}Fn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(rt(e).get(i).next(o=>{if(o===null)throw A();R(o.userId===this.userId),r.push(Nt(this.serializer,o))}))}),f.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return Dd(e.ae,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Mn(t.batchId)}),f.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return _n(e).Y({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=$e(i[1]);s.push(c)}else a.done()}).next(()=>{R(s.length===0)})})}containsKey(e,t){return xd(e,this.userId,t)}xn(e){return Nd(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function xd(n,e,t){const r=ws(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return _n(n).Y({range:i,J:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function rt(n){return de(n,"mutations")}function _n(n){return de(n,"documentMutations")}function Nd(n){return de(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Xt(0)}static Bn(){return new Xt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Ln(e).next(t=>{const r=new Xt(t.highestTargetId);return t.highestTargetId=r.next(),this.kn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ln(e).next(t=>S.fromTimestamp(new Q(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ln(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Ln(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.kn(e,s)))}addTargetData(e,t){return this.qn(e,t).next(()=>this.Ln(e).next(r=>(r.targetCount+=1,this.Qn(t,r),this.kn(e,r))))}updateTargetData(e,t){return this.qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>dn(e).delete(t.targetId)).next(()=>this.Ln(e)).next(r=>(R(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return dn(e).Y((o,a)=>{const c=or(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>f.waitFor(i)).next(()=>s)}forEachTarget(e,t){return dn(e).Y((r,s)=>{const i=or(s);t(i)})}Ln(e){return Nu(e).get("targetGlobalKey").next(t=>(R(t!==null),t))}kn(e,t){return Nu(e).put("targetGlobalKey",t)}qn(e,t){return dn(e).put(Pd(this.serializer,t))}Qn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Ln(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Kt(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return dn(e).Y({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const u=or(a);Xr(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=it(e);return t.forEach(o=>{const a=Re(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),f.waitFor(s)}removeMatchingKeys(e,t,r){const s=it(e);return f.forEach(t,i=>{const o=Re(i.path);return f.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=it(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=it(e);let i=V();return s.Y({range:r,J:!0},(o,a,c)=>{const u=$e(o[1]),l=new y(u);i=i.add(l)}).next(()=>i)}containsKey(e,t){const r=Re(t.path),s=IDBKeyRange.bound([r],[bh(r)],!1,!0);let i=0;return it(e).Y({index:"documentTargetsIndex",J:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}_t(e,t){return dn(e).get(t).next(r=>r?or(r):null)}}function dn(n){return de(n,"targets")}function Nu(n){return de(n,"targetGlobal")}function it(n){return de(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku([n,e],[t,r]){const s=P(n,t);return s===0?P(e,r):s}class dy{constructor(e){this.Kn=e,this.buffer=new U(ku),this.$n=0}Un(){return++this.$n}Wn(e){const t=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ku(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){_("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){St(t)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Rt(t)}await this.zn(3e5)})}}class my{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.Hn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return f.resolve(Ve._e);const r=new dy(t);return this.jn.forEachTarget(e,s=>r.Wn(s.sequenceNumber)).next(()=>this.jn.Jn(e,s=>r.Wn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(xu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xu):this.Yn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,t){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),fn()<=k.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}function gy(n,e){return new my(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,t){this.db=e,this.garbageCollector=gy(this,t)}Hn(e){const t=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Zn(e){let t=0;return this.Jn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Jn(e,t){return this.Xn(e,(r,s)=>t(s))}addReference(e,t,r){return ps(e,r)}removeReference(e,t,r){return ps(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ps(e,t)}er(e,t){return function(s,i){let o=!1;return Nd(s).Z(a=>xd(s,a,i).next(c=>(c&&(o=!0),f.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Xn(e,(o,a)=>{if(a<=t){const c=this.er(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,S.min()),it(e).delete(function(h){return[0,Re(h.path)]}(o))))});s.push(c)}}).next(()=>f.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ps(e,t)}Xn(e,t){const r=it(e);let s,i=Ve._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Ve._e&&t(new y($e(s)),i),i=u,s=c):i=Ve._e}).next(()=>{i!==Ve._e&&t(new y($e(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ps(n,e){return it(n).put(function(r,s){return{targetId:0,path:Re(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.changes=new bt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,G.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?f.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Vt(e).put(r)}removeEntry(e,t,r){return Vt(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],$s(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.tr(e,r)))}getEntry(e,t){let r=G.newInvalidDocument(t);return Vt(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(er(t))},(s,i)=>{r=this.nr(t,i)}).next(()=>r)}rr(e,t){let r={size:0,document:G.newInvalidDocument(t)};return Vt(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(er(t))},(s,i)=>{r={document:this.nr(t,i),size:Gs(i)}}).next(()=>r)}getEntries(e,t){let r=De();return this.ir(e,t,(s,i)=>{const o=this.nr(s,i);r=r.insert(s,o)}).next(()=>r)}sr(e,t){let r=De(),s=new $(y.comparator);return this.ir(e,t,(i,o)=>{const a=this.nr(i,o);r=r.insert(i,a),s=s.insert(i,Gs(o))}).next(()=>({documents:r,_r:s}))}ir(e,t,r){if(t.isEmpty())return f.resolve();let s=new U(Fu);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(er(s.first()),er(s.last())),o=s.getIterator();let a=o.getNext();return Vt(e).Y({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=y.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Fu(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.U(er(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),$s(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Vt(e).W(IDBKeyRange.bound(a,c,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let l=De();for(const h of u){const d=this.nr(y.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(Zr(t,d)||s.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(e,t,r,s){let i=De();const o=Ou(t,r),a=Ou(t,Ne.max());return Vt(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.nr(y.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new yy(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Mu(e).get("remoteDocumentGlobalKey").next(t=>(R(!!t),t))}tr(e,t){return Mu(e).put("remoteDocumentGlobalKey",t)}nr(e,t){if(t){const r=ny(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(S.min())))return r}return G.newInvalidDocument(e)}}function Md(n){return new _y(n)}class yy extends kd{constructor(e,t){super(),this.ar=e,this.trackRemovals=t,this.ur=new bt(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new U((i,o)=>P(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.ur.get(i);if(t.push(this.ar.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=wu(this.ar.serializer,o);s=s.add(i.path.popLast());const u=Gs(c);r+=u-a.size,t.push(this.ar.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=wu(this.ar.serializer,o.convertToNoDocument(S.min()));t.push(this.ar.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.ar.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.ar.updateMetadata(e,r)),f.waitFor(t)}getFromCache(e,t){return this.ar.rr(e,t).next(r=>(this.ur.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.ar.sr(e,t).next(({documents:r,_r:s})=>(s.forEach((i,o)=>{this.ur.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function Mu(n){return de(n,"remoteDocumentGlobal")}function Vt(n){return de(n,"remoteDocumentsV14")}function er(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Ou(n,e){const t=e.documentKey.path.toArray();return[n,$s(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Fu(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=P(t[i],r[i]),s)return s;return s=P(t.length,r.length),s||(s=P(t[t.length-2],r[r.length-2]),s||P(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&hr(r.mutation,s,Ce.empty(),Q.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,V()).next(()=>r))}getLocalViewOfDocuments(e,t,r=V()){const s=je();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=sr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=je();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,V()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=De();const o=lr(),a=function(){return lr()}();return t.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof et)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),hr(l.mutation,u,l.mutation.getFieldMask(),Q.now())):o.set(u.key,Ce.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new Iy(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=lr();let s=new $((o,a)=>o-a),i=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Ce.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||V()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=ed();l.forEach(d=>{if(!i.has(d)){const m=cd(t.get(d),r.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ea(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):f.resolve(je());let a=-1,c=i;return o.next(u=>f.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?f.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,V())).next(l=>({batchId:a,changes:Zh(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new y(t)).next(r=>{let s=sr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=sr();return this.indexManager.getCollectionParents(e,i).next(a=>f.forEach(a,c=>{const u=function(h,d){return new Ze(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,G.newInvalidDocument(l)))});let a=sr();return o.forEach((c,u)=>{const l=i.get(c);l!==void 0&&hr(l.mutation,u,Ce.empty(),Q.now()),Zr(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return f.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ne(s.createTime)}}(t)),f.resolve()}getNamedQuery(e,t){return f.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(s){return{name:s.name,query:Pa(s.bundledQuery),readTime:ne(s.readTime)}}(t)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(){this.overlays=new $(y.comparator),this.hr=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const r=je();return f.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),f.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),f.resolve()}getOverlaysForCollection(e,t,r){const s=je(),i=t.length+1,o=new y(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return f.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new $((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=je(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=je(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return f.resolve(a)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ra(t,r));let i=this.hr.get(t);i===void 0&&(i=V(),this.hr.set(t,i)),this.hr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.Pr=new U(oe.Ir),this.Tr=new U(oe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new oe(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new oe(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new y(new x([])),r=new oe(t,e),s=new oe(t,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new y(new x([])),r=new oe(t,e),s=new oe(t,e+1);let i=V();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new oe(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class oe{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return y.comparator(e.key,t.key)||P(e.pr,t.pr)}static Er(e,t){return P(e.pr,t.pr)||y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new U(oe.Ir)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new va(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new oe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.br(r),i=s<0?0:s;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new oe(t,0),s=new oe(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new U(P);return t.forEach(s=>{const i=new oe(s,0),o=new oe(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),f.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;y.isDocumentKey(i)||(i=i.child(""));const o=new oe(new y(i),0);let a=new U(P);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.pr)),!0)},o),f.resolve(this.Dr(a))}Dr(e){const t=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){R(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return f.forEach(t.mutations,s=>{const i=new oe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new oe(t,0),s=this.wr.firstAfterOrEqual(r);return f.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this.vr=e,this.docs=function(){return new $(y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return f.resolve(r?r.document.mutableCopy():G.newInvalidDocument(t))}getEntries(e,t){let r=De();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():G.newInvalidDocument(s))}),f.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=De();const o=t.path,a=new y(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||pa(Vh(l),r)<=0||(s.has(l.key)||Zr(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(e,t,r,s){A()}Fr(e,t){return f.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Ay(this)}getSize(e){return f.resolve(this.size)}}class Ay extends kd{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),f.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.persistence=e,this.Mr=new bt(t=>Kt(t),Xr),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Da,this.targetCount=0,this.Br=Xt.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,s)=>t(s)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),f.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new Xt(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.qn(t),f.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),f.waitFor(i).next(()=>s)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return f.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),f.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),f.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return f.resolve(r)}containsKey(e,t){return f.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t){this.Lr={},this.overlays={},this.kr=new Ve(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Ry(this),this.indexManager=new uy,this.remoteDocumentCache=function(s){return new vy(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new bd(t),this.$r=new Ey(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Lr[e.toKey()];return r||(r=new Ty(t,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){_("MemoryPersistence","Starting transaction:",e);const s=new Sy(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,t){return f.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,t)))}}class Sy extends Dh{constructor(e){super(),this.currentSequenceNumber=e}}class Ei{constructor(e){this.persistence=e,this.zr=new Da,this.jr=null}static Hr(e){return new Ei(e)}get Jr(){if(this.jr)return this.jr;throw A()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),f.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),f.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Jr,r=>{const s=y.fromPath(r);return this.Yr(e,s).next(i=>{i||t.removeEntry(s,S.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return f.or([()=>f.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.serializer=e}N(e,t,r,s){const i=new mi("createOrUpgrade",t);r<1&&s>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Jc,{unique:!0}),c.createObjectStore("documentMutations")}(e),Lu(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return r<3&&s>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),Lu(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:S.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").W().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Jc,{unique:!0});const h=u.store("mutations"),d=l.map(m=>h.put(m));return f.waitFor(d)})}(e,i))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Xr(i))),r<6&&s>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.ei(i)))),r<7&&s>=7&&(o=o.next(()=>this.ti(i))),r<8&&s>=8&&(o=o.next(()=>this.ni(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.ri(i))),r<11&&s>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:l_});u.createIndex("collectionPathOverlayIndex",h_,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",d_,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:Zp});u.createIndex("documentKeyIndex",e_),u.createIndex("collectionGroupIndex",t_)}(e)).next(()=>this.ii(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.si(e,i))),r<15&&s>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:o_}).createIndex("sequenceNumberIndex",a_,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:c_}).createIndex("documentKeyIndex",u_,{unique:!1})}(e))),o}ei(e){let t=0;return e.store("remoteDocuments").Y((r,s)=>{t+=Gs(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.W().next(s=>f.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>f.forEach(a,c=>{R(c.userId===i.userId);const u=Nt(this.serializer,c);return Dd(e,i.userId,u).next(()=>{})}))}))}ti(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.Y((o,a)=>{const c=new x(o),u=function(h){return[0,Re(h)]}(c);i.push(t.get(u).next(l=>l?f.resolve():(h=>t.put({targetId:0,path:Re(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>f.waitFor(i))})}ni(e,t){e.createObjectStore("collectionParents",{keyPath:i_});const r=t.store("collectionParents"),s=new Ca,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Re(c)})}};return t.store("remoteDocuments").Y({J:!0},(o,a)=>{const c=new x(o);return i(c.popLast())}).next(()=>t.store("documentMutations").Y({J:!0},([o,a,c],u)=>{const l=$e(a);return i(l.popLast())}))}ri(e){const t=e.store("targets");return t.Y((r,s)=>{const i=or(s),o=Pd(this.serializer,i);return t.put(o)})}ii(e,t){const r=t.store("remoteDocuments"),s=[];return r.Y((i,o)=>{const a=t.store("remoteDocumentsV14"),c=function(h){return h.document?new y(x.fromString(h.document.name).popFirst(5)):h.noDocument?y.fromSegments(h.noDocument.path):h.unknownDocument?y.fromSegments(h.unknownDocument.path):A()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(u))}).next(()=>f.waitFor(s))}si(e,t){const r=t.store("mutations"),s=Md(this.serializer),i=new Fd(Ei.Hr,this.serializer.ct);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:V();Nt(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),f.forEach(a,(c,u)=>{const l=new ae(u),h=yi.lt(this.serializer,l),d=i.getIndexManager(l),m=Ii.lt(l,this.serializer,d,i.referenceDelegate);return new Od(s,m,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Io(t,Ve._e),c).next()})})}}function Lu(n){n.createObjectStore("targetDocuments",{keyPath:r_}).createIndex("documentTargetsIndex",s_,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",n_,{unique:!0}),n.createObjectStore("targetGlobal")}const Ji="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class xa{constructor(e,t,r,s,i,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.oi=i,this.window=o,this.document=a,this._i=u,this.ai=l,this.ui=h,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=d=>Promise.resolve(),!xa.D())throw new p(g.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new py(this,s),this.Ti=t+"main",this.serializer=new bd(c),this.Ei=new Me(this.Ti,this.ui,new by(this.serializer)),this.Qr=new hy(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Md(this.serializer),this.$r=new ry,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,l===!1&&te("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,Ji);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Ve(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>_s(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(t=>{t||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(t=>this.isPrimary&&!t?this.yi(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(St(e))return _("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return tr(e).get("owner").next(t=>f.resolve(this.Si(t)))}bi(e){return _s(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=de(t,"clientMetadata");return r.W().next(s=>{const i=this.vi(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return f.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const t of e)this.di.removeItem(this.Fi(t.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?f.resolve(!0):tr(e).get("owner").next(t=>{if(t!==null&&this.Ci(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)){if(this.Si(t)&&this.networkEnabled)return!0;if(!this.Si(t)){if(!t.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,Ji);return!1}}return!(!this.networkEnabled||!this.inForeground)||_s(e).W().next(r=>this.vi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&_("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Io(e,Ve._e);return this.yi(t).next(()=>this.bi(t))}),this.Ei.close(),this.Bi()}vi(e,t){return e.filter(r=>this.Ci(r.updateTimeMs,t)&&!this.Mi(r.clientId))}Li(){return this.runTransaction("getActiveClients","readonly",e=>_s(e).W().next(t=>this.vi(t,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,t){return Ii.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ly(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return yi.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,t,r){_("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(c){return c===15?m_:c===14?Oh:c===13?Mh:c===12?f_:c===11?kh:void A()}(this.ui);let o;return this.Ei.runTransaction(e,s,i,a=>(o=new Io(a,this.kr?this.kr.next():Ve._e),t==="readwrite-primary"?this.gi(o).next(c=>!!c||this.pi(o)).next(c=>{if(!c)throw te(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new p(g.FAILED_PRECONDITION,Ch);return r(o)}).next(c=>this.wi(o).next(()=>c)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return tr(e).get("owner").next(t=>{if(t!==null&&this.Ci(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)&&!this.Si(t)&&!(this.ai||this.allowTabSynchronization&&t.allowTabSynchronization))throw new p(g.FAILED_PRECONDITION,Ji)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return tr(e).put("owner",t)}static D(){return Me.D()}yi(e){const t=tr(e);return t.get("owner").next(r=>this.Si(r)?(_("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}Ci(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(te(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;ul()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var t;try{const r=((t=this.di)===null||t===void 0?void 0:t.getItem(this.Fi(e)))!==null;return _("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return te("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){te("Failed to set zombie client id.",e)}}Bi(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function tr(n){return de(n,"owner")}function _s(n){return de(n,"clientMetadata")}function Na(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=s}static Ki(e,t){let r=V(),s=V();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ka(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return ul()?8:Me.v(Cs())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ji(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Py;return this.Ji(e,t,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,t,o,a.size)})}).next(()=>i.result)}Yi(e,t,r,s){return r.documentReadCount<this.Wi?(fn()<=k.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),f.resolve()):(fn()<=k.DEBUG&&_("QueryEngine","Query:",mn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(fn()<=k.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Se(t))):f.resolve())}ji(e,t){if(lu(t))return f.resolve(null);let r=Se(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=qs(t,null,"F"),r=Se(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=V(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Zi(t,a);return this.Xi(t,u,o,c.readTime)?this.ji(e,qs(t,null,"F")):this.es(e,u,t,c)}))})))}Hi(e,t,r,s){return lu(t)||s.isEqual(S.min())?f.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(t,i);return this.Xi(t,o,r,s)?f.resolve(null):(fn()<=k.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),mn(t)),this.es(e,o,t,Ph(s,-1)).next(a=>a))})}Zi(e,t){let r=new U(Xh(e));return t.forEach((s,i)=>{Zr(e,i)&&(r=r.add(i))}),r}Xi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,t,r){return fn()<=k.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",mn(t)),this.zi.getDocumentsMatchingQuery(e,t,Ne.min(),r)}es(e,t,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t,r,s){this.persistence=e,this.ts=t,this.serializer=s,this.ns=new $(P),this.rs=new bt(i=>Kt(i),Xr),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Od(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function Bd(n,e,t,r){return new Vy(n,e,t,r)}async function Ud(n,e){const t=I(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=V();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function Cy(n,e){const t=I(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.os.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let m=f.resolve();return d.forEach(v=>{m=m.next(()=>l.getEntry(c,v)).next(w=>{const T=u.docVersions.get(v);R(T!==null),w.version.compareTo(T)<0&&(h.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),l.addEntry(w)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=V();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function qd(n){const e=I(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function Dy(n,e){const t=I(n),r=e.snapshotVersion;let s=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.os.newChangeBuffer({trackRemovals:!0});s=t.ns;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(t.Qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.Qr.addMatchingKeys(i,l.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(ie.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,r)),s=s.insert(h,m),function(w,T,C){return w.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,m,l)&&a.push(t.Qr.updateTargetData(i,m))});let c=De(),u=V();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push($d(i,o,e.documentUpdates).next(l=>{c=l.cs,u=l.ls})),!r.isEqual(S.min())){const l=t.Qr.getLastRemoteSnapshotVersion(i).next(h=>t.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.ns=s,i))}function $d(n,e,t){let r=V(),s=V();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=De();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:s}})}function xy(n,e){const t=I(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Dn(n,e){const t=I(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Qr.getTargetData(r,e).next(i=>i?(s=i,f.resolve(s)):t.Qr.allocateTargetId(r).next(o=>(s=new He(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function xn(n,e,t){const r=I(n),s=r.ns.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!St(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function zs(n,e,t){const r=I(n);let s=S.min(),i=V();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=I(c),d=h.rs.get(l);return d!==void 0?f.resolve(h.ns.get(d)):h.Qr.getTargetData(u,l)}(r,o,Se(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,t?s:S.min(),t?i:V())).next(a=>(zd(r,Yh(e),a),{documents:a,hs:i})))}function jd(n,e){const t=I(n),r=I(t.Qr),s=t.ns.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r._t(i,e).next(o=>o?o.target:null))}function Gd(n,e){const t=I(n),r=t.ss.get(e)||S.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.os.getAllFromCollectionGroup(s,e,Ph(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(zd(t,e,s),s))}function zd(n,e,t){let r=n.ss.get(e)||S.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(e,r)}async function Ny(n,e,t,r){const s=I(n);let i=V(),o=De();for(const u of t){const l=e.Ps(u.metadata.name);u.document&&(i=i.add(l));const h=e.Is(u);h.setReadTime(e.Ts(u.metadata.readTime)),o=o.insert(l,h)}const a=s.os.newChangeBuffer({trackRemovals:!0}),c=await Dn(s,function(l){return Se($n(x.fromString(`__bundle__/docs/${l}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",u=>$d(u,a,o).next(l=>(a.apply(u),l)).next(l=>s.Qr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>s.Qr.addMatchingKeys(u,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(u,l.cs,l.ls)).next(()=>l.cs)))}async function ky(n,e,t=V()){const r=await Dn(n,Se(Pa(e.bundledQuery))),s=I(n);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=ne(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.$r.saveNamedQuery(i,e);const a=r.withResumeToken(ie.EMPTY_BYTE_STRING,o);return s.ns=s.ns.insert(a.targetId,a),s.Qr.updateTargetData(i,a).next(()=>s.Qr.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.Qr.addMatchingKeys(i,t,r.targetId)).next(()=>s.$r.saveNamedQuery(i,e))})}function Bu(n,e){return`firestore_clients_${n}_${e}`}function Uu(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Zi(n,e){return`firestore_targets_${n}_${e}`}class Ks{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Es(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new p(s.error.code,s.error.message))),o?new Ks(e,t,s.state,i):(te("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class dr{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Es(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new p(r.error.code,r.error.message))),i?new dr(e,r.state,s):(te("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Qs{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Es(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=wa();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=xh(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Qs(e,i):(te("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Ma{constructor(e,t){this.clientId=e,this.onlineState=t}static Es(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Ma(t.clientId,t.onlineState):(te("SharedClientState",`Failed to parse online state: ${e}`),null)}}class No{constructor(){this.activeTargetIds=wa()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eo{constructor(e,t,r,s,i){this.window=e,this.oi=t,this.persistenceKey=r,this.Vs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new $(P),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ws=Bu(this.persistenceKey,this.Vs),this.Ss=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new No),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.Fs=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Li();for(const r of e){if(r===this.Vs)continue;const s=this.getItem(Bu(this.persistenceKey,r));if(s){const i=Qs.Es(r,s);i&&(this.ps=this.ps.insert(i.clientId,i))}}this.Ms();const t=this.storage.getItem(this.vs);if(t){const r=this.xs(t);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let t=!1;return this.ps.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Bs(e,"pending")}updateMutationState(e,t,r){this.Bs(e,t,r),this.Ls(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Zi(this.persistenceKey,e));if(r){const s=dr.Es(e,r);s&&(t=s.state)}}return this.ks.As(e),this.Ms(),t}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Zi(this.persistenceKey,e))}updateQueryState(e,t,r){this.qs(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Ls(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return _("SharedClientState","READ",e,t),t}setItem(e,t){_("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const t=e;if(t.storageArea===this.storage){if(_("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ws)return void te("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.bs.test(t.key)){if(t.newValue==null){const r=this.$s(t.key);return this.Us(r,null)}{const r=this.Ws(t.key,t.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(t.key)){if(t.newValue!==null){const r=this.Gs(t.key,t.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(t.key)){if(t.newValue!==null){const r=this.js(t.key,t.newValue);if(r)return this.Hs(r)}}else if(t.key===this.vs){if(t.newValue!==null){const r=this.xs(t.newValue);if(r)return this.Os(r)}}else if(t.key===this.Ss){const r=function(i){let o=Ve._e;if(i!=null)try{const a=JSON.parse(i);R(typeof a=="number"),o=a}catch(a){te("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Ve._e&&this.sequenceNumberHandler(r)}else if(t.key===this.Fs){const r=this.Js(t.newValue);await Promise.all(r.map(s=>this.syncEngine.Ys(s)))}}}else this.ys.push(t)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Bs(e,t,r){const s=new Ks(this.currentUser,e,t,r),i=Uu(this.persistenceKey,this.currentUser,e);this.setItem(i,s.ds())}Ls(e){const t=Uu(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Qs(e){const t={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(t))}qs(e,t,r){const s=Zi(this.persistenceKey,e),i=new dr(e,t,r);this.setItem(s,i.ds())}Ks(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Fs,t)}$s(e){const t=this.bs.exec(e);return t?t[1]:null}Ws(e,t){const r=this.$s(e);return Qs.Es(r,t)}Gs(e,t){const r=this.Ds.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Ks.Es(new ae(i),s,t)}js(e,t){const r=this.Cs.exec(e),s=Number(r[1]);return dr.Es(s,t)}xs(e){return Ma.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,t){const r=t?this.ps.insert(e,t):this.ps.remove(e),s=this.Ns(this.ps),i=this.Ns(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let t=wa();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Kd{constructor(){this.no=new No,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new No,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys=null;function to(){return ys===null?ys=function(){return 268435456+Math.round(2147483648*Math.random())}():ys++,"0x"+ys.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="WebChannelConnection";class Ly extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+t.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(t,r,s,i,o){const a=to(),c=this.bo(t,r.toUriEncodedString());_("RestConnection",`Sending RPC '${t}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,i,o),this.Co(t,c,u,s).then(l=>(_("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw Le("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",c,"request:",s),l})}vo(t,r,s,i,o,a){return this.So(t,r,s,i,o)}Do(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}bo(t,r){const s=Oy[t];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,r,s){const i=to();return new Promise((o,a)=>{const c=new kp;c.setWithCredentials(!0),c.listenOnce(xp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Yi.NO_ERROR:const l=c.getResponseJson();_(Ie,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Yi.TIMEOUT:_(Ie,`RPC '${e}' ${i} timed out`),a(new p(g.DEADLINE_EXCEEDED,"Request time out"));break;case Yi.HTTP_ERROR:const h=c.getStatus();if(_(Ie,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(T){const C=T.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(C)>=0?C:g.UNKNOWN}(m.status);a(new p(v,m.message))}else a(new p(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new p(g.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{_(Ie,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);_(Ie,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",u,r,15)})}Fo(e,t,r){const s=to(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Cp(),a=Dp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=i.join("");_(Ie,`Creating RPC '${e}' stream ${s}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,m=!1;const v=new Fy({lo:T=>{m?_(Ie,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(d||(_(Ie,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),_(Ie,`RPC '${e}' stream ${s} sending:`,T),h.send(T))},ho:()=>h.close()}),w=(T,C,F)=>{T.listen(C,D=>{try{F(D)}catch(H){setTimeout(()=>{throw H},0)}})};return w(h,fs.EventType.OPEN,()=>{m||_(Ie,`RPC '${e}' stream ${s} transport opened.`)}),w(h,fs.EventType.CLOSE,()=>{m||(m=!0,_(Ie,`RPC '${e}' stream ${s} transport closed`),v.Vo())}),w(h,fs.EventType.ERROR,T=>{m||(m=!0,Le(Ie,`RPC '${e}' stream ${s} transport errored:`,T),v.Vo(new p(g.UNAVAILABLE,"The operation could not be completed")))}),w(h,fs.EventType.MESSAGE,T=>{var C;if(!m){const F=T.data[0];R(!!F);const D=F,H=D.error||((C=D[0])===null||C===void 0?void 0:C.error);if(H){_(Ie,`RPC '${e}' stream ${s} received error:`,H);const ee=H.status;let Y=function(Gf){const Tc=re[Gf];if(Tc!==void 0)return hd(Tc)}(ee),ye=H.message;Y===void 0&&(Y=g.INTERNAL,ye="Unknown error status: "+ee+" with message "+H.message),m=!0,v.Vo(new p(Y,ye)),h.close()}else _(Ie,`RPC '${e}' stream ${s} received:`,F),v.mo(F)}}),w(a,Np.STAT_EVENT,T=>{T.stat===Wc.PROXY?_(Ie,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===Wc.NOPROXY&&_(Ie,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.Ro()},0),v}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(){return typeof window<"u"?window:null}function Ss(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n){return new K_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=t,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const t=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,t-r);s>0&&_("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Oa(e,t)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():t&&t.code===g.RESOURCE_EXHAUSTED?(te(t.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===t&&this.o_(r,s)},r=>{e(()=>{const s=new p(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,t){const r=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget(()=>this.Wo===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class By extends Wd{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();const t=H_(this.serializer,e),r=function(i){if(!("targetChange"in i))return S.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?S.min():o.readTime?ne(o.readTime):S.min()}(e);return this.listener.u_(t,r)}c_(e){const t={};t.database=Po(this.serializer),t.addTarget=function(i,o){let a;const c=o.target;if(a=Bs(c)?{documents:wd(i,c)}:{query:Td(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=gd(i,o.resumeToken);const u=So(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(S.min())>0){a.readTime=Cn(i,o.snapshotVersion.toTimestamp());const u=So(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=X_(this.serializer,e);r&&(t.labels=r),this.t_(t)}l_(e){const t={};t.database=Po(this.serializer),t.removeTarget=e,this.t_(t)}}class Uy extends Wd{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){if(R(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const t=Y_(e.writeResults,e.commitTime),r=ne(e.commitTime);return this.listener.T_(r,t)}return R(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Po(this.serializer),this.t_(e)}I_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Mr(this.serializer,r))};this.t_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,bo(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(g.UNKNOWN,i.toString())})}vo(e,t,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,bo(t,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new p(g.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class $y{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(te(t),this.g_=!1):_("OnlineStateTracker",t)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Pt(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=I(c);u.v_.add(4),await zn(u),u.x_.set("Unknown"),u.v_.delete(4),await ss(u)}(this))})}),this.x_=new $y(r,s)}}async function ss(n){if(Pt(n))for(const e of n.F_)await e(!0)}async function zn(n){for(const e of n.F_)await e(!1)}function wi(n,e){const t=I(n);t.C_.has(e.targetId)||(t.C_.set(e.targetId,e),Ba(t)?La(t):Qn(t).Jo()&&Fa(t,e))}function Or(n,e){const t=I(n),r=Qn(t);t.C_.delete(e),r.Jo()&&Hd(t,e),t.C_.size===0&&(r.Jo()?r.Xo():Pt(t)&&t.x_.set("Unknown"))}function Fa(n,e){if(n.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(S.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qn(n).c_(e)}function Hd(n,e){n.O_.Oe(e),Qn(n).l_(e)}function La(n){n.O_=new $_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.C_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Qn(n).start(),n.x_.p_()}function Ba(n){return Pt(n)&&!Qn(n).Ho()&&n.C_.size>0}function Pt(n){return I(n).v_.size===0}function Yd(n){n.O_=void 0}async function Gy(n){n.C_.forEach((e,t)=>{Fa(n,e)})}async function zy(n,e){Yd(n),Ba(n)?(n.x_.S_(e),La(n)):n.x_.set("Unknown")}async function Ky(n,e,t){if(n.x_.set("Online"),e instanceof md&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(n,e)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ws(n,r)}else if(e instanceof Rs?n.O_.$e(e):e instanceof fd?n.O_.Je(e):n.O_.Ge(e),!t.isEqual(S.min()))try{const r=await qd(n.localStore);t.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=i.C_.get(u);l&&i.C_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=i.C_.get(c);if(!l)return;i.C_.set(c,l.withResumeToken(ie.EMPTY_BYTE_STRING,l.snapshotVersion)),Hd(i,c);const h=new He(l.target,c,u,l.sequenceNumber);Fa(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Ws(n,r)}}async function Ws(n,e,t){if(!St(e))throw e;n.v_.add(1),await zn(n),n.x_.set("Offline"),t||(t=()=>qd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await t(),n.v_.delete(1),await ss(n)})}function Xd(n,e){return e().catch(t=>Ws(n,t,e))}async function Kn(n){const e=I(n),t=Et(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;Qy(e);)try{const s=await xy(e.localStore,r);if(s===null){e.D_.length===0&&t.Xo();break}r=s.batchId,Wy(e,s)}catch(s){await Ws(e,s)}Jd(e)&&Zd(e)}function Qy(n){return Pt(n)&&n.D_.length<10}function Wy(n,e){n.D_.push(e);const t=Et(n);t.Jo()&&t.P_&&t.I_(e.mutations)}function Jd(n){return Pt(n)&&!Et(n).Ho()&&n.D_.length>0}function Zd(n){Et(n).start()}async function Hy(n){Et(n).d_()}async function Yy(n){const e=Et(n);for(const t of n.D_)e.I_(t.mutations)}async function Xy(n,e,t){const r=n.D_.shift(),s=Aa.from(r,e,t);await Xd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Kn(n)}async function Jy(n,e){e&&Et(n).P_&&await async function(r,s){if(function(o){return ld(o)&&o!==g.ABORTED}(s.code)){const i=r.D_.shift();Et(r).Zo(),await Xd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Kn(r)}}(n,e),Jd(n)&&Zd(n)}async function $u(n,e){const t=I(n);t.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=Pt(t);t.v_.add(3),await zn(t),r&&t.x_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.v_.delete(3),await ss(t)}async function ko(n,e){const t=I(n);e?(t.v_.delete(2),await ss(t)):e||(t.v_.add(2),await zn(t),t.x_.set("Unknown"))}function Qn(n){return n.N_||(n.N_=function(t,r,s){const i=I(t);return i.R_(),new By(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:Gy.bind(null,n),To:zy.bind(null,n),u_:Ky.bind(null,n)}),n.F_.push(async e=>{e?(n.N_.Zo(),Ba(n)?La(n):n.x_.set("Unknown")):(await n.N_.stop(),Yd(n))})),n.N_}function Et(n){return n.B_||(n.B_=function(t,r,s){const i=I(t);return i.R_(),new Uy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:Hy.bind(null,n),To:Jy.bind(null,n),E_:Yy.bind(null,n),T_:Xy.bind(null,n)}),n.F_.push(async e=>{e?(n.B_.Zo(),await Kn(n)):(await n.B_.stop(),n.D_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new Ua(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wn(n,e){if(te("AsyncQueue",`${e}: ${n}`),St(n))return new p(g.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||y.comparator(t.key,r.key):(t,r)=>y.comparator(t.key,r.key),this.keyedMap=sr(),this.sortedSet=new $(this.comparator)}static emptySet(e){return new Tn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Tn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Tn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this.L_=new $(y.comparator)}track(e){const t=e.doc.key,r=this.L_.get(t);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(t,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(t):e.type===1&&r.type===2?this.L_=this.L_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):A():this.L_=this.L_.insert(t,e)}k_(){const e=[];return this.L_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Nn{constructor(e,t,r,s,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Nn(e,t,Tn.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.q_=void 0,this.Q_=[]}}class eI{constructor(){this.queries=new bt(e=>Hh(e),Jr),this.onlineState="Unknown",this.K_=new Set}}async function qa(n,e){const t=I(n),r=e.query;let s=!1,i=t.queries.get(r);if(i||(s=!0,i=new Zy),s)try{i.q_=await t.onListen(r)}catch(o){const a=Wn(o,`Initialization of query '${mn(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.Q_.push(e),e.U_(t.onlineState),i.q_&&e.W_(i.q_)&&ja(t)}async function $a(n,e){const t=I(n),r=e.query;let s=!1;const i=t.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return t.queries.delete(r),t.onUnlisten(r)}function tI(n,e){const t=I(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&ja(t)}function nI(n,e,t){const r=I(n),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(t);r.queries.delete(e)}function ja(n){n.K_.forEach(e=>{e.next()})}class Ga{constructor(e,t,r){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Nn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Y_(e){e=Nn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,t){this.X_=e,this.byteLength=t}ea(){return"metadata"in this.X_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e){this.serializer=e}Ps(e){return Ge(this.serializer,e)}Is(e){return e.metadata.exists?Ed(this.serializer,e.document,!1):G.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return ne(e)}}class sI{constructor(e,t,r){this.ta=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ef(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++t;const r=x.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ra(e){const t=new Map,r=new Gu(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.Ps(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||V()).add(i);t.set(o,a)}}return t}async complete(){const e=await Ny(this.localStore,new Gu(this.serializer),this.documents,this.ta.id),t=this.ra(this.documents);for(const r of this.queries)await ky(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function ef(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this.key=e}}class nf{constructor(e){this.key=e}}class rf{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=V(),this.mutatedKeys=V(),this.ua=Xh(e),this.ca=new Tn(this.ua)}get la(){return this.oa}ha(e,t){const r=t?t.Pa:new ju,s=t?t.ca:this.ca;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),m=Zr(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;d&&m?d.data.isEqual(m.data)?v!==w&&(r.track({type:3,doc:m}),T=!0):this.Ia(d,m)||(r.track({type:2,doc:m}),T=!0,(c&&this.ua(m,c)>0||u&&this.ua(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),T=!0):d&&!m&&(r.track({type:1,doc:d}),T=!0,(c||u)&&(a=!0)),T&&(m?(o=o.add(m),i=w?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((l,h)=>function(m,v){const w=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return w(m)-w(v)}(l.type,h.type)||this.ua(l.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=t&&!s?this.Ea():[],c=this.aa.size===0&&this.current&&!s?1:0,u=c!==this._a;return this._a=c,o.length!==0||u?{snapshot:new Nn(this.query,e.ca,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new ju,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(t=>this.oa=this.oa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.oa=this.oa.delete(t)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=V(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const t=[];return e.forEach(r=>{this.aa.has(r)||t.push(new nf(r))}),this.aa.forEach(r=>{e.has(r)||t.push(new tf(r))}),t}Ra(e){this.oa=e.hs,this.aa=V();const t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return Nn.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class iI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class oI{constructor(e){this.key=e,this.ma=!1}}class aI{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new bt(a=>Hh(a),Jr),this.pa=new Map,this.ya=new Set,this.wa=new $(y.comparator),this.Sa=new Map,this.ba=new Da,this.Da={},this.Ca=new Map,this.va=Xt.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function cI(n,e){const t=Ha(n);let r,s;const i=t.ga.get(e);if(i)r=i.targetId,t.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await Dn(t.localStore,Se(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await za(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&wi(t.remoteStore,o)}return s}async function za(n,e,t,r,s){n.Ma=(h,d,m)=>async function(w,T,C,F){let D=T.view.ha(C);D.Xi&&(D=await zs(w.localStore,T.query,!1).then(({documents:ye})=>T.view.ha(ye,D)));const H=F&&F.targetChanges.get(T.targetId),ee=F&&F.targetMismatches.get(T.targetId)!=null,Y=T.view.applyChanges(D,w.isPrimaryClient,H,ee);return Mo(w,T.targetId,Y.da),Y.snapshot}(n,h,d,m);const i=await zs(n.localStore,e,!0),o=new rf(e,i.hs),a=o.ha(i.documents),c=ns.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,c);Mo(n,t,u.da);const l=new iI(e,t,o);return n.ga.set(e,l),n.pa.has(t)?n.pa.get(t).push(e):n.pa.set(t,[e]),u.snapshot}async function uI(n,e){const t=I(n),r=t.ga.get(e),s=t.pa.get(r.targetId);if(s.length>1)return t.pa.set(r.targetId,s.filter(i=>!Jr(i,e))),void t.ga.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await xn(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Or(t.remoteStore,r.targetId),kn(t,r.targetId)}).catch(Rt)):(kn(t,r.targetId),await xn(t.localStore,r.targetId,!0))}async function lI(n,e,t){const r=Ya(n);try{const s=await function(o,a){const c=I(o),u=Q.now(),l=a.reduce((m,v)=>m.add(v.key),V());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=De(),w=V();return c.os.getEntries(m,l).next(T=>{v=T,v.forEach((C,F)=>{F.isValidDocument()||(w=w.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,v)).next(T=>{h=T;const C=[];for(const F of a){const D=B_(F,h.get(F.key).overlayedDocument);D!=null&&C.push(new et(F.key,D,Uh(D.value.mapValue),K.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,C,a)}).next(T=>{d=T;const C=T.applyToLocalDocumentSet(h,w);return c.documentOverlayCache.saveOverlays(m,T.batchId,C)})}).then(()=>({batchId:d.batchId,changes:Zh(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Da[o.currentUser.toKey()];u||(u=new $(P)),u=u.insert(a,c),o.Da[o.currentUser.toKey()]=u}(r,s.batchId,t),await tt(r,s.changes),await Kn(r.remoteStore)}catch(s){const i=Wn(s,"Failed to persist write");t.reject(i)}}async function sf(n,e){const t=I(n);try{const r=await Dy(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Sa.get(i);o&&(R(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?R(o.ma):s.removedDocuments.size>0&&(R(o.ma),o.ma=!1))}),await tt(t,r,e)}catch(r){await Rt(r)}}function zu(n,e,t){const r=I(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=I(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.Q_)d.U_(a)&&(u=!0)}),u&&ja(c)}(r.eventManager,e),s.length&&r.fa.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hI(n,e,t){const r=I(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new $(y.comparator);o=o.insert(i,G.newNoDocument(i,S.min()));const a=V().add(i),c=new ts(S.min(),new Map,new $(P),o,a);await sf(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),Wa(r)}else await xn(r.localStore,e,!1).then(()=>kn(r,e,t)).catch(Rt)}async function dI(n,e){const t=I(n),r=e.batch.batchId;try{const s=await Cy(t.localStore,e);Qa(t,r,null),Ka(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await tt(t,s)}catch(s){await Rt(s)}}async function fI(n,e,t){const r=I(n);try{const s=await function(o,a){const c=I(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(R(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);Qa(r,e,t),Ka(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await tt(r,s)}catch(s){await Rt(s)}}async function mI(n,e){const t=I(n);Pt(t.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=I(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(r===-1)return void e.resolve();const s=t.Ca.get(r)||[];s.push(e),t.Ca.set(r,s)}catch(r){const s=Wn(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function Ka(n,e){(n.Ca.get(e)||[]).forEach(t=>{t.resolve()}),n.Ca.delete(e)}function Qa(n,e,t){const r=I(n);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function kn(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.pa.get(e))n.ga.delete(r),t&&n.fa.xa(r,t);n.pa.delete(e),n.isPrimaryClient&&n.ba.Vr(e).forEach(r=>{n.ba.containsKey(r)||of(n,r)})}function of(n,e){n.ya.delete(e.path.canonicalString());const t=n.wa.get(e);t!==null&&(Or(n.remoteStore,t),n.wa=n.wa.remove(e),n.Sa.delete(t),Wa(n))}function Mo(n,e,t){for(const r of t)r instanceof tf?(n.ba.addReference(r.key,e),gI(n,r)):r instanceof nf?(_("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,e),n.ba.containsKey(r.key)||of(n,r.key)):A()}function gI(n,e){const t=e.key,r=t.path.canonicalString();n.wa.get(t)||n.ya.has(r)||(_("SyncEngine","New document in limbo: "+t),n.ya.add(r),Wa(n))}function Wa(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const e=n.ya.values().next().value;n.ya.delete(e);const t=new y(x.fromString(e)),r=n.va.next();n.Sa.set(r,new oI(t)),n.wa=n.wa.insert(t,r),wi(n.remoteStore,new He(Se($n(t.path)),r,"TargetPurposeLimboResolution",Ve._e))}}async function tt(n,e,t){const r=I(n),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=ka.Ki(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.fa.u_(s),await async function(c,u){const l=I(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(u,d=>f.forEach(d.qi,m=>l.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>f.forEach(d.Qi,m=>l.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!St(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=l.ns.get(d),v=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(v);l.ns=l.ns.insert(d,w)}}}(r.localStore,i))}async function pI(n,e){const t=I(n);if(!t.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const r=await Ud(t.localStore,e);t.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new p(g.CANCELLED,o))})}),i.Ca.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tt(t,r.us)}}function _I(n,e){const t=I(n),r=t.Sa.get(e);if(r&&r.ma)return V().add(r.key);{let s=V();const i=t.pa.get(e);if(!i)return s;for(const o of i){const a=t.ga.get(o);s=s.unionWith(a.view.la)}return s}}async function yI(n,e){const t=I(n),r=await zs(t.localStore,e.query,!0),s=e.view.Ra(r);return t.isPrimaryClient&&Mo(t,e.targetId,s.da),s}async function II(n,e){const t=I(n);return Gd(t.localStore,e).then(r=>tt(t,r))}async function EI(n,e,t,r){const s=I(n),i=await function(a,c){const u=I(a),l=I(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.vn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):f.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Kn(s.remoteStore):t==="acknowledged"||t==="rejected"?(Qa(s,e,r||null),Ka(s,e),function(a,c){I(I(a).mutationQueue).Mn(c)}(s.localStore,e)):A(),await tt(s,i)):_("SyncEngine","Cannot apply mutation batch with id: "+e)}async function wI(n,e){const t=I(n);if(Ha(t),Ya(t),e===!0&&t.Fa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await Ku(t,r.toArray());t.Fa=!0,await ko(t.remoteStore,!0);for(const i of s)wi(t.remoteStore,i)}else if(e===!1&&t.Fa!==!1){const r=[];let s=Promise.resolve();t.pa.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(kn(t,o),xn(t.localStore,o,!0))),Or(t.remoteStore,o)}),await s,await Ku(t,r),function(o){const a=I(o);a.Sa.forEach((c,u)=>{Or(a.remoteStore,u)}),a.ba.mr(),a.Sa=new Map,a.wa=new $(y.comparator)}(t),t.Fa=!1,await ko(t.remoteStore,!1)}}async function Ku(n,e,t){const r=I(n),s=[],i=[];for(const o of e){let a;const c=r.pa.get(o);if(c&&c.length!==0){a=await Dn(r.localStore,Se(c[0]));for(const u of c){const l=r.ga.get(u),h=await yI(r,l);h.snapshot&&i.push(h.snapshot)}}else{const u=await jd(r.localStore,o);a=await Dn(r.localStore,u),await za(r,af(u),o,!1,a.resumeToken)}s.push(a)}return r.fa.u_(i),s}function af(n){return Wh(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function TI(n){return function(t){return I(I(t).persistence).Li()}(I(n).localStore)}async function vI(n,e,t,r){const s=I(n);if(s.Fa)return void _("SyncEngine","Ignoring unexpected query state notification.");const i=s.pa.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Gd(s.localStore,Yh(i[0])),a=ts.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ie.EMPTY_BYTE_STRING);await tt(s,o,a);break}case"rejected":await xn(s.localStore,e,!0),kn(s,e,r);break;default:A()}}async function AI(n,e,t){const r=Ha(n);if(r.Fa){for(const s of e){if(r.pa.has(s)){_("SyncEngine","Adding an already active target "+s);continue}const i=await jd(r.localStore,s),o=await Dn(r.localStore,i);await za(r,af(i),o.targetId,!1,o.resumeToken),wi(r.remoteStore,o)}for(const s of t)r.pa.has(s)&&await xn(r.localStore,s,!1).then(()=>{Or(r.remoteStore,s),kn(r,s)}).catch(Rt)}}function Ha(n){const e=I(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=sf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_I.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hI.bind(null,e),e.fa.u_=tI.bind(null,e.eventManager),e.fa.xa=nI.bind(null,e.eventManager),e}function Ya(n){const e=I(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fI.bind(null,e),e}function RI(n,e,t){const r=I(n);(async function(i,o,a){try{const c=await o.getMetadata();if(await function(m,v){const w=I(m),T=ne(v.createTime);return w.persistence.runTransaction("hasNewerBundle","readonly",C=>w.$r.getBundleMetadata(C,v.id)).then(C=>!!C&&C.createTime.compareTo(T)>=0)}(i.localStore,c))return await o.close(),a._completeWith(function(m){return{taskState:"Success",documentsLoaded:m.totalDocuments,bytesLoaded:m.totalBytes,totalDocuments:m.totalDocuments,totalBytes:m.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(ef(c));const u=new sI(c,i.localStore,o.serializer);let l=await o.Oa();for(;l;){const d=await u.na(l);d&&a._updateProgress(d),l=await o.Oa()}const h=await u.complete();return await tt(i,h.sa,void 0),await function(m,v){const w=I(m);return w.persistence.runTransaction("Save bundle","readwrite",T=>w.$r.saveBundleMetadata(T,v))}(i.localStore,c),a._completeWith(h.progress),Promise.resolve(h.ia)}catch(c){return Le("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,t).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class Oo{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Bd(this.persistence,new Ld,e.initialUser,this.serializer)}createPersistence(e){return new Fd(Ei.Hr,this.serializer)}createSharedClientState(e){return new Kd}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cf extends Oo{constructor(e,t,r){super(),this.Na=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await Ya(this.Na.syncEngine),await Kn(this.Na.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Bd(this.persistence,new Ld,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new fy(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new Yp(t,this.persistence);return new Hp(e.asyncQueue,r)}createPersistence(e){const t=Na(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Pe.withCacheSize(this.cacheSizeBytes):Pe.DEFAULT;return new xa(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Qd(),Ss(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Kd}}class SI extends cf{constructor(e,t){super(e,t,!1),this.Na=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Na.syncEngine;this.sharedClientState instanceof eo&&(this.sharedClientState.syncEngine={Zs:EI.bind(null,t),Xs:vI.bind(null,t),eo:AI.bind(null,t),Li:TI.bind(null,t),Ys:II.bind(null,t)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await wI(this.Na.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Qd();if(!eo.D(t))throw new p(g.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Na(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new eo(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Xa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pI.bind(null,this.syncEngine),await ko(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eI}()}createDatastore(e){const t=rs(e.databaseInfo.databaseId),r=function(i){return new Ly(i)}(e.databaseInfo);return function(i,o,a,c){return new qy(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,a){return new jy(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>zu(this.syncEngine,t,0),function(){return qu.D()?new qu:new My}())}createSyncEngine(e,t){return function(s,i,o,a,c,u,l){const h=new aI(s,i,o,a,c,u);return l&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const s=I(r);_("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await zn(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):te("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t){this.ka=e,this.serializer=t,this.metadata=new ue,this.buffer=new Uint8Array,this.qa=function(){return new TextDecoder("utf-8")}(),this.Qa().then(r=>{r&&r.ea()?this.metadata.resolve(r.X_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.X_)}`))},r=>this.metadata.reject(r))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){const e=await this.Ka();if(e===null)return null;const t=this.qa.decode(e),r=Number(t);isNaN(r)&&this.$a(`length string (${t}) is not valid number`);const s=await this.Ua(r);return new rI(JSON.parse(s),e.length+r)}Wa(){return this.buffer.findIndex(e=>e===123)}async Ka(){for(;this.Wa()<0&&!await this.Ga(););if(this.buffer.length===0)return null;const e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");const t=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}$a(e){throw this.ka.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ga(){const e=await this.ka.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new p(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(s,i){const o=I(s),a={documents:i.map(h=>kr(o.serializer,h))},c=await o.vo("BatchGetDocuments",o.serializer.databaseId,x.emptyPath(),a,i.length),u=new Map;c.forEach(h=>{const d=W_(o.serializer,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());R(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Gn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=y.fromPath(r);this.mutations.push(new Ta(s,this.precondition(s)))}),await async function(r,s){const i=I(r),o={writes:s.map(a=>Mr(i.serializer,a))};await i.So("Commit",i.serializer.databaseId,x.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw A();t=S.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new p(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(S.min())?K.exists(!1):K.updateTime(t):K.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(S.min()))throw new p(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return K.updateTime(t)}return K.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.za=r.maxAttempts,this.jo=new Oa(this.asyncQueue,"transaction_retry")}ja(){this.za-=1,this.Ha()}Ha(){this.jo.qo(async()=>{const e=new PI(this.datastore),t=this.Ja(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Ya(s)}))}).catch(r=>{this.Ya(r)})})}Ja(e){try{const t=this.updateFunction(e);return!Yr(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Ya(e){this.za>0&&this.Za(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ha(),Promise.resolve()))):this.deferred.reject(e)}Za(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!ld(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ae.UNAUTHENTICATED,this.clientId=Sh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{_("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(_("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Wn(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bs(n,e){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ud(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Fo(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ja(n);_("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>$u(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>$u(e.remoteStore,s)),n._onlineComponents=e}function uf(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Ja(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await bs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!uf(t))throw t;Le("Error using user provided cache. Falling back to memory cache: "+t),await bs(n,new Oo)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await bs(n,new Oo);return n._offlineComponents}async function vi(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Fo(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Fo(n,new Xa))),n._onlineComponents}function lf(n){return Ja(n).then(e=>e.persistence)}function Za(n){return Ja(n).then(e=>e.localStore)}function hf(n){return vi(n).then(e=>e.remoteStore)}function ec(n){return vi(n).then(e=>e.syncEngine)}function DI(n){return vi(n).then(e=>e.datastore)}async function Mn(n){const e=await vi(n),t=e.eventManager;return t.onListen=cI.bind(null,e.syncEngine),t.onUnlisten=uI.bind(null,e.syncEngine),t}function xI(n){return n.asyncQueue.enqueue(async()=>{const e=await lf(n),t=await hf(n);return e.setNetworkEnabled(!0),function(s){const i=I(s);return i.v_.delete(0),ss(i)}(t)})}function NI(n){return n.asyncQueue.enqueue(async()=>{const e=await lf(n),t=await hf(n);return e.setNetworkEnabled(!1),async function(s){const i=I(s);i.v_.add(0),await zn(i),i.x_.set("Offline")}(t)})}function kI(n,e){const t=new ue;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await function(u,l){const h=I(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(s,i);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new p(g.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=Wn(a,`Failed to get document '${i} from cache`);o.reject(c)}}(await Za(n),e,t)),t.promise}function df(n,e,t={}){const r=new ue;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const l=new Ti({next:d=>{o.enqueueAndForget(()=>$a(i,h));const m=d.docs.has(a);!m&&d.fromCache?u.reject(new p(g.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&c&&c.source==="server"?u.reject(new p(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Ga($n(a.path),l,{includeMetadataChanges:!0,Z_:!0});return qa(i,h)}(await Mn(n),n.asyncQueue,e,t,r)),r.promise}function MI(n,e){const t=new ue;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await zs(s,i,!0),c=new rf(i,a.hs),u=c.ha(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=Wn(a,`Failed to execute query '${i} against cache`);o.reject(c)}}(await Za(n),e,t)),t.promise}function ff(n,e,t={}){const r=new ue;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const l=new Ti({next:d=>{o.enqueueAndForget(()=>$a(i,h)),d.fromCache&&c.source==="server"?u.reject(new p(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Ga(a,l,{includeMetadataChanges:!0,Z_:!0});return qa(i,h)}(await Mn(n),n.asyncQueue,e,t,r)),r.promise}function OI(n,e){const t=new Ti(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,i){I(s).K_.add(i),i.next()}(await Mn(n),t)),()=>{t.La(),n.asyncQueue.enqueueAndForget(async()=>function(s,i){I(s).K_.delete(i)}(await Mn(n),t))}}function FI(n,e,t,r){const s=function(o,a){let c;return c=typeof o=="string"?dd().encode(o):o,function(l,h){return new bI(l,h)}(function(l,h){if(l instanceof Uint8Array)return Qu(l,h);if(l instanceof ArrayBuffer)return Qu(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(t,rs(e));n.asyncQueue.enqueueAndForget(async()=>{RI(await ec(n),s,r)})}function LI(n,e){return n.asyncQueue.enqueue(async()=>function(r,s){const i=I(r);return i.persistence.runTransaction("Get named query","readonly",o=>i.$r.getNamedQuery(o,s))}(await Za(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(n,e,t){if(!t)throw new p(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function gf(n,e,t,r){if(e===!0&&r===!0)throw new p(g.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hu(n){if(!y.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Yu(n){if(y.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ai(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":A()}function O(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new p(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ai(n);throw new p(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function pf(n,e){if(e<=0)throw new p(g.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new p(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class is{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new p(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Lp;switch(r.type){case"firstParty":return new $p(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new p(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Wu.get(t);r&&(_("ComponentProvider","Removing Datastore"),Wu.delete(t),r.terminate())}(this),Promise.resolve()}}function BI(n,e,t,r={}){var s;const i=(n=O(n,is))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Le("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ae.MOCK_USER;else{a=tm(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new p(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ae(u)}n._authCredentials=new Bp(new Rh(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let be=class _f{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _f(this.firestore,e,this._query)}},W=class yf{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yf(this.firestore,e,this._key)}},lt=class If extends be{constructor(e,t,r){super(e,t,$n(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new W(this.firestore,null,new y(e))}withConverter(e){return new If(this.firestore,e,this._path)}};function Ef(n,e,...t){if(n=se(n),tc("collection","path",e),n instanceof is){const r=x.fromString(e,...t);return Yu(r),new lt(n,null,r)}{if(!(n instanceof W||n instanceof lt))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(x.fromString(e,...t));return Yu(r),new lt(n.firestore,null,r)}}function UI(n,e){if(n=O(n,is),tc("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new be(n,null,function(r){return new Ze(x.emptyPath(),r)}(e))}function Hs(n,e,...t){if(n=se(n),arguments.length===1&&(e=Sh.newId()),tc("doc","path",e),n instanceof is){const r=x.fromString(e,...t);return Hu(r),new W(n,null,new y(r))}{if(!(n instanceof W||n instanceof lt))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(x.fromString(e,...t));return Hu(r),new W(n.firestore,n instanceof lt?n.converter:null,new y(r))}}function wf(n,e){return n=se(n),e=se(e),(n instanceof W||n instanceof lt)&&(e instanceof W||e instanceof lt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Tf(n,e){return n=se(n),e=se(e),n instanceof be&&e instanceof be&&n.firestore===e.firestore&&Jr(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Oa(this,"async_queue_retry"),this._u=()=>{const t=Ss();t&&_("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const e=Ss();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const t=Ss();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const t=new ue;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!St(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const t=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw te("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=t,t}enqueueAfterDelay(e,t,r){this.au(),this.ou.indexOf(e)>-1&&(t=0);const s=Ua.createAndSchedule(this,e,t,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&A()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const t of this.nu)if(t.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.nu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const t=this.nu.indexOf(e);this.nu.splice(t,1)}}function Lo(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class $I{constructor(){this._progressObserver={},this._taskCompletionResolver=new ue,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=-1;let Z=class extends is{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=function(){return new qI}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vf(this),this._firestoreClient.terminate()}};function fe(n){return n._firestoreClient||vf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function vf(n){var e,t,r;const s=n._freezeSettings(),i=function(a,c,u,l){return new __(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,mf(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new CI(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}function GI(n,e){Rf(n=O(n,Z));const t=fe(n);if(t._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");Le("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),s=new Xa;return Af(t,s,new cf(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function zI(n){Rf(n=O(n,Z));const e=fe(n);if(e._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");Le("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Xa;return Af(e,r,new SI(r,t.cacheSizeBytes))}function Af(n,e,t){const r=new ue;return n.asyncQueue.enqueue(async()=>{try{await bs(n,t),await Fo(n,e),r.resolve()}catch(s){const i=s;if(!uf(i))throw i;Le("Error enabling indexeddb cache. Falling back to memory cache: "+i),r.reject(i)}}).then(()=>r.promise)}function KI(n){if(n._initialized&&!n._terminated)throw new p(g.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ue;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Me.D())return Promise.resolve();const s=r+"main";await Me.delete(s)}(Na(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function QI(n){return function(t){const r=new ue;return t.asyncQueue.enqueueAndForget(async()=>mI(await ec(t),r)),r.promise}(fe(n=O(n,Z)))}function WI(n){return xI(fe(n=O(n,Z)))}function HI(n){return NI(fe(n=O(n,Z)))}function YI(n,e){const t=fe(n=O(n,Z)),r=new $I;return FI(t,n._databaseId,e,r),r}function XI(n,e){return LI(fe(n=O(n,Z)),e).then(t=>t?new be(n,null,t.query):null)}function Rf(n){if(n._initialized||n._terminated)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ke(ie.fromBase64String(e))}catch(t){throw new p(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ke(ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wt=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nn=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=/^__.*__$/;class ZI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new et(e,this.data,this.fieldMask,t,this.fieldTransforms):new jn(e,this.data,t,this.fieldTransforms)}}class Sf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new et(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function bf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class Si{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new Si(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Au({path:r,Vu:!1});return s.mu(e),s}fu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return Ys(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(bf(this.du)&&JI.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class eE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||rs(e)}Su(e,t,r,s=!1){return new Si({du:e,methodName:t,wu:r,path:z.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rn(n){const e=n._freezeSettings(),t=rs(n._databaseId);return new eE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function bi(n,e,t,r,s,i={}){const o=n.Su(i.merge||i.mergeFields?2:0,e,t,s);cc("Data must be an object, but it was:",o,r);const a=Cf(r,o);let c,u;if(i.merge)c=new Ce(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Bo(e,h,t);if(!o.contains(d))throw new p(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);xf(l,d)||l.push(d)}c=new Ce(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new ZI(new pe(a),c,u)}class os extends nn{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof os}}function Pf(n,e,t){return new Si({du:3,wu:e.settings.wu,methodName:n._methodName,Vu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class nc extends nn{_toFieldTransform(e){return new es(e.path,new Pn)}isEqual(e){return e instanceof nc}}class rc extends nn{constructor(e,t){super(e),this.bu=t}_toFieldTransform(e){const t=Pf(this,e,!0),r=this.bu.map(i=>sn(i,t)),s=new Qt(r);return new es(e.path,s)}isEqual(e){return e instanceof rc&&gr(this.bu,e.bu)}}class sc extends nn{constructor(e,t){super(e),this.bu=t}_toFieldTransform(e){const t=Pf(this,e,!0),r=this.bu.map(i=>sn(i,t)),s=new Wt(r);return new es(e.path,s)}isEqual(e){return e instanceof sc&&gr(this.bu,e.bu)}}class ic extends nn{constructor(e,t){super(e),this.Du=t}_toFieldTransform(e){const t=new Vn(e.serializer,rd(e.serializer,this.Du));return new es(e.path,t)}isEqual(e){return e instanceof ic&&this.Du===e.Du}}function oc(n,e,t,r){const s=n.Su(1,e,t);cc("Data must be an object, but it was:",s,r);const i=[],o=pe.empty();tn(r,(c,u)=>{const l=uc(e,c,t);u=se(u);const h=s.fu(l);if(u instanceof os)i.push(l);else{const d=sn(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Ce(i);return new Sf(o,a,s.fieldTransforms)}function ac(n,e,t,r,s,i){const o=n.Su(1,e,t),a=[Bo(e,r,t)],c=[s];if(i.length%2!=0)throw new p(g.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Bo(e,i[d])),c.push(i[d+1]);const u=[],l=pe.empty();for(let d=a.length-1;d>=0;--d)if(!xf(u,a[d])){const m=a[d];let v=c[d];v=se(v);const w=o.fu(m);if(v instanceof os)u.push(m);else{const T=sn(v,w);T!=null&&(u.push(m),l.set(m,T))}}const h=new Ce(u);return new Sf(l,h,o.fieldTransforms)}function Vf(n,e,t,r=!1){return sn(t,n.Su(r?4:3,e))}function sn(n,e){if(Df(n=se(n)))return cc("Unsupported field value:",e,n),Cf(n,e);if(n instanceof nn)return function(r,s){if(!bf(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=sn(a,s.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Q.fromDate(r);return{timestampValue:Cn(s.serializer,i)}}if(r instanceof Q){const i=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cn(s.serializer,i)}}if(r instanceof Ri)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ke)return{bytesValue:gd(s.serializer,r._byteString)};if(r instanceof W){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ba(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${Ai(r)}`)}(n,e)}function Cf(n,e){const t={};return Fh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tn(n,(r,s)=>{const i=sn(s,e.Ru(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Df(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Q||n instanceof Ri||n instanceof Ke||n instanceof W||n instanceof nn)}function cc(n,e,t){if(!Df(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Ai(t);throw r==="an object"?e.pu(n+" a custom object"):e.pu(n+" "+r)}}function Bo(n,e,t){if((e=se(e))instanceof wt)return e._internalPath;if(typeof e=="string")return uc(n,e);throw Ys("Field path arguments must be of type string or ",n,!1,void 0,t)}const tE=new RegExp("[~\\*/\\[\\]]");function uc(n,e,t){if(e.search(tE)>=0)throw Ys(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new wt(...e.split("."))._internalPath}catch{throw Ys(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ys(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new p(g.INVALID_ARGUMENT,a+n+c)}function xf(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new W(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nE extends Fr{data(){return super.data()}}function Pi(n,e){return typeof e=="string"?uc(n,e):e instanceof wt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new p(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lc{}class as extends lc{}function st(n,e,...t){let r=[];e instanceof lc&&r.push(e),r=r.concat(t),function(i){const o=i.filter(c=>c instanceof hc).length,a=i.filter(c=>c instanceof Vi).length;if(o>1||o>0&&a>0)throw new p(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Vi extends as{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Vi(e,t,r)}_apply(e){const t=this._parse(e);return Mf(e._query,t),new be(e.firestore,e.converter,Ro(e._query,t))}_parse(e){const t=rn(e.firestore);return function(i,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new p(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Zu(h,l);const m=[];for(const v of h)m.push(Ju(c,i,v));d={arrayValue:{values:m}}}else d=Ju(c,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Zu(h,l),d=Vf(a,o,h,l==="in"||l==="not-in");return N.create(u,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function rE(n,e,t){const r=e,s=Pi("where",n);return Vi._create(s,r,t)}class hc extends lc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:L.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Mf(o,c),o=Ro(o,c)}(e._query,t),new be(e.firestore,e.converter,Ro(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dc extends as{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new dc(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Nr(i,o)}(e._query,this._field,this._direction);return new be(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ze(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function sE(n,e="asc"){const t=e,r=Pi("orderBy",n);return dc._create(r,t)}class Ci extends as{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ci(e,t,r)}_apply(e){return new be(e.firestore,e.converter,qs(e._query,this._limit,this._limitType))}}function iE(n){return pf("limit",n),Ci._create("limit",n,"F")}function oE(n){return pf("limitToLast",n),Ci._create("limitToLast",n,"L")}class Di extends as{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Di(e,t,r)}_apply(e){const t=kf(e,this.type,this._docOrFields,this._inclusive);return new be(e.firestore,e.converter,function(s,i){return new Ze(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function aE(...n){return Di._create("startAt",n,!0)}function cE(...n){return Di._create("startAfter",n,!1)}class xi extends as{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new xi(e,t,r)}_apply(e){const t=kf(e,this.type,this._docOrFields,this._inclusive);return new be(e.firestore,e.converter,function(s,i){return new Ze(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,t))}}function uE(...n){return xi._create("endBefore",n,!1)}function lE(...n){return xi._create("endAt",n,!0)}function kf(n,e,t,r){if(t[0]=se(t[0]),t[0]instanceof Fr)return function(i,o,a,c,u){if(!c)throw new p(g.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of wn(i))if(h.field.isKeyField())l.push(zt(o,c.key));else{const d=c.data.field(h.field);if(gi(d))throw new p(g.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const m=h.field.canonicalString();throw new p(g.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${m}' (used as the orderBy) does not exist.`)}l.push(d)}return new It(l,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=rn(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new p(g.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const m=[];for(let v=0;v<l.length;v++){const w=l[v];if(d[v].field.isKeyField()){if(typeof w!="string")throw new p(g.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof w}`);if(!Ea(o)&&w.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${w}' contains a slash.`);const T=o.path.child(x.fromString(w));if(!y.isDocumentKey(T))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${T}' is not because it contains an odd number of segments.`);const C=new y(T);m.push(zt(a,C))}else{const T=Vf(c,u,w);m.push(T)}}return new It(m,h)}(n._query,n.firestore._databaseId,s,e,t,r)}}function Ju(n,e,t){if(typeof(t=se(t))=="string"){if(t==="")throw new p(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ea(e)&&t.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(x.fromString(t));if(!y.isDocumentKey(r))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zt(n,new y(r))}if(t instanceof W)return zt(n,t._key);throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ai(t)}.`)}function Zu(n,e){if(!Array.isArray(n)||n.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Mf(n,e){const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class fc{convertValue(e,t="none"){switch(Gt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return X(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw A()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return tn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new Ri(X(e.latitude),X(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ya(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Cr(e));default:return null}}convertTimestamp(e){const t=gt(e);return new Q(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=x.fromString(e);R(Sd(r));const s=new _t(r.get(1),r.get(3)),i=new y(r.popFirst(5));return s.isEqual(t)||te(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class hE extends fc{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ke(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new W(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Je=class extends Fr{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Pi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},fr=class extends Je{data(e={}){return super.data(e)}},Tt=class{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Bt(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new fr(this._firestore,this._userDataWriter,r.key,r,new Bt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new fr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Bt(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new fr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Bt(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:dE(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function dE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}function Of(n,e){return n instanceof Je&&e instanceof Je?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Tt&&e instanceof Tt&&n._firestore===e._firestore&&Tf(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(n){n=O(n,W);const e=O(n.firestore,Z);return df(fe(e),n._key).then(t=>mc(e,n,t))}class on extends fc{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ke(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new W(this.firestore,null,t)}}function mE(n){n=O(n,W);const e=O(n.firestore,Z),t=fe(e),r=new on(e);return kI(t,n._key).then(s=>new Je(e,r,n._key,s,new Bt(s!==null&&s.hasLocalMutations,!0),n.converter))}function gE(n){n=O(n,W);const e=O(n.firestore,Z);return df(fe(e),n._key,{source:"server"}).then(t=>mc(e,n,t))}function pE(n){n=O(n,be);const e=O(n.firestore,Z),t=fe(e),r=new on(e);return Nf(n._query),ff(t,n._query).then(s=>new Tt(e,r,n,s))}function _E(n){n=O(n,be);const e=O(n.firestore,Z),t=fe(e),r=new on(e);return MI(t,n._query).then(s=>new Tt(e,r,n,s))}function yE(n){n=O(n,be);const e=O(n.firestore,Z),t=fe(e),r=new on(e);return ff(t,n._query,{source:"server"}).then(s=>new Tt(e,r,n,s))}function el(n,e,t){n=O(n,W);const r=O(n.firestore,Z),s=Ni(n.converter,e,t);return cs(r,[bi(rn(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,K.none())])}function tl(n,e,t,...r){n=O(n,W);const s=O(n.firestore,Z),i=rn(s);let o;return o=typeof(e=se(e))=="string"||e instanceof wt?ac(i,"updateDoc",n._key,e,t,r):oc(i,"updateDoc",n._key,e),cs(s,[o.toMutation(n._key,K.exists(!0))])}function IE(n){return cs(O(n.firestore,Z),[new Gn(n._key,K.none())])}function EE(n,e){const t=O(n.firestore,Z),r=Hs(n),s=Ni(n.converter,e);return cs(t,[bi(rn(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,K.exists(!1))]).then(()=>r)}function Ff(n,...e){var t,r,s;n=se(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Lo(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Lo(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(n instanceof W)u=O(n.firestore,Z),l=$n(n._key.path),c={next:h=>{e[o]&&e[o](mc(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=O(n,be);u=O(h.firestore,Z),l=h._query;const d=new on(u);c={next:m=>{e[o]&&e[o](new Tt(u,d,h,m))},error:e[o+1],complete:e[o+2]},Nf(n._query)}return function(d,m,v,w){const T=new Ti(w),C=new Ga(m,T,v);return d.asyncQueue.enqueueAndForget(async()=>qa(await Mn(d),C)),()=>{T.La(),d.asyncQueue.enqueueAndForget(async()=>$a(await Mn(d),C))}}(fe(u),l,a,c)}function wE(n,e){return OI(fe(n=O(n,Z)),Lo(e)?e:{next:e})}function cs(n,e){return function(r,s){const i=new ue;return r.asyncQueue.enqueueAndForget(async()=>lI(await ec(r),s,i)),i.promise}(fe(n),e)}function mc(n,e,t){const r=t.docs.get(e._key),s=new on(n);return new Je(n,s,e._key,r,new Bt(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vE=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=rn(e)}set(e,t,r){this._verifyNotCommitted();const s=ot(e,this._firestore),i=Ni(s.converter,t,r),o=bi(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,K.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=ot(e,this._firestore);let o;return o=typeof(t=se(t))=="string"||t instanceof wt?ac(this._dataReader,"WriteBatch.update",i._key,t,r,s):oc(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,K.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ot(e,this._firestore);return this._mutations=this._mutations.concat(new Gn(t._key,K.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function ot(n,e){if((n=se(n)).firestore!==e)throw new p(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AE=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=rn(t)}get(t){const r=ot(t,this._firestore),s=new hE(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return A();const o=i[0];if(o.isFoundDocument())return new Fr(this._firestore,s,o.key,o,r.converter);if(o.isNoDocument())return new Fr(this._firestore,s,r._key,null,r.converter);throw A()})}set(t,r,s){const i=ot(t,this._firestore),o=Ni(i.converter,r,s),a=bi(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,s);return this._transaction.set(i._key,a),this}update(t,r,s,...i){const o=ot(t,this._firestore);let a;return a=typeof(r=se(r))=="string"||r instanceof wt?ac(this._dataReader,"Transaction.update",o._key,r,s,i):oc(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=ot(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ot(e,this._firestore),r=new on(this._firestore);return super.get(e).then(s=>new Je(this._firestore,r,t._key,s._document,new Bt(!1,!1),t.converter))}};function RE(n,e,t){n=O(n,Z);const r=Object.assign(Object.assign({},TE),t);return function(i){if(i.maxAttempts<1)throw new p(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,a){const c=new ue;return i.asyncQueue.enqueueAndForget(async()=>{const u=await DI(i);new VI(i.asyncQueue,u,a,o,c).ja()}),c.promise}(fe(n),s=>e(new AE(n,s)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(){return new os("deleteField")}function bE(){return new nc("serverTimestamp")}function PE(...n){return new rc("arrayUnion",n)}function VE(...n){return new sc("arrayRemove",n)}function CE(n){return new ic("increment",n)}(function(e,t=!0){(function(s){qn=s})(zo),vn(new $t("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Z(new Up(r.getProvider("auth-internal")),new Gp(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new p(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _t(u.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ut(Hc,"4.4.2",e),ut(Hc,"4.4.2","esm2017")})();const DE="@firebase/firestore-compat",xE="0.3.25";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new p("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(){if(typeof Uint8Array>"u")throw new p("unimplemented","Uint8Arrays are not available in this environment.")}function rl(){if(!g_())throw new p("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Lr{constructor(e){this._delegate=e}static fromBase64String(e){return rl(),new Lr(Ke.fromBase64String(e))}static fromUint8Array(e){return nl(),new Lr(Ke.fromUint8Array(e))}toBase64(){return rl(),this._delegate.toBase64()}toUint8Array(){return nl(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(n){return NE(n,["next","error","complete"])}function NE(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{enableIndexedDbPersistence(e,t){return GI(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return zI(e._delegate)}clearIndexedDbPersistence(e){return KI(e._delegate)}}class Lf{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof _t||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Le("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){BI(this._delegate,e,t,r)}enableNetwork(){return WI(this._delegate)}disableNetwork(){return HI(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,gf("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return QI(this._delegate)}onSnapshotsInSync(e){return wE(this._delegate,e)}get app(){if(!this._appCompat)throw new p("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new On(this,Ef(this._delegate,e))}catch(t){throw ve(t,"collection()","Firestore.collection()")}}doc(e){try{return new Oe(this,Hs(this._delegate,e))}catch(t){throw ve(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Te(this,UI(this._delegate,e))}catch(t){throw ve(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return RE(this._delegate,t=>e(new Bf(this,t)))}batch(){return fe(this._delegate),new Uf(new vE(this._delegate,e=>cs(this._delegate,e)))}loadBundle(e){return YI(this._delegate,e)}namedQuery(e){return XI(this._delegate,e).then(t=>t?new Te(this,t):null)}}class ki extends fc{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lr(new Ke(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Oe.forKey(t,this.firestore,null)}}function ME(n){Op(n)}class Bf{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ki(e)}get(e){const t=Ut(e);return this._delegate.get(t).then(r=>new Br(this._firestore,new Je(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const s=Ut(e);return r?(gc("Transaction.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=Ut(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=Ut(e);return this._delegate.delete(t),this}}class Uf{constructor(e){this._delegate=e}set(e,t,r){const s=Ut(e);return r?(gc("WriteBatch.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=Ut(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=Ut(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Jt{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new fr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ur(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Jt.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(t);return i||(i=new Jt(e,new ki(e),t),s.set(t,i)),i}}Jt.INSTANCES=new WeakMap;class Oe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ki(e)}static forPath(e,t,r){if(e.length%2!==0)throw new p("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Oe(t,new W(t._delegate,r,new y(e)))}static forKey(e,t,r){return new Oe(t,new W(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new On(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new On(this.firestore,Ef(this._delegate,e))}catch(t){throw ve(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=se(e),e instanceof W?wf(this._delegate,e):!1}set(e,t){t=gc("DocumentReference.set",t);try{return t?el(this._delegate,e,t):el(this._delegate,e)}catch(r){throw ve(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?tl(this._delegate,e):tl(this._delegate,e,t,...r)}catch(s){throw ve(s,"updateDoc()","DocumentReference.update()")}}delete(){return IE(this._delegate)}onSnapshot(...e){const t=qf(e),r=$f(e,s=>new Br(this.firestore,new Je(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return Ff(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=mE(this._delegate):(e==null?void 0:e.source)==="server"?t=gE(this._delegate):t=fE(this._delegate),t.then(r=>new Br(this.firestore,new Je(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Oe(this.firestore,e?this._delegate.withConverter(Jt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ve(n,e,t){return n.message=n.message.replace(e,t),n}function qf(n){for(const e of n)if(typeof e=="object"&&!Uo(e))return e;return{}}function $f(n,e){var t,r;let s;return Uo(n[0])?s=n[0]:Uo(n[1])?s=n[1]:typeof n[0]=="function"?s={next:n[0],error:n[1],complete:n[2]}:s={next:n[1],error:n[2],complete:n[3]},{next:i=>{s.next&&s.next(e(i))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class Br{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Oe(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Of(this._delegate,e._delegate)}}class Ur extends Br{data(e){const t=this._delegate.data(e);return this._delegate._converter||Fp(t!==void 0),t}}class Te{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ki(e)}where(e,t,r){try{return new Te(this.firestore,st(this._delegate,rE(e,t,r)))}catch(s){throw ve(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Te(this.firestore,st(this._delegate,sE(e,t)))}catch(r){throw ve(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Te(this.firestore,st(this._delegate,iE(e)))}catch(t){throw ve(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Te(this.firestore,st(this._delegate,oE(e)))}catch(t){throw ve(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Te(this.firestore,st(this._delegate,aE(...e)))}catch(t){throw ve(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Te(this.firestore,st(this._delegate,cE(...e)))}catch(t){throw ve(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Te(this.firestore,st(this._delegate,uE(...e)))}catch(t){throw ve(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Te(this.firestore,st(this._delegate,lE(...e)))}catch(t){throw ve(t,"endAt()","Query.endAt()")}}isEqual(e){return Tf(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=_E(this._delegate):(e==null?void 0:e.source)==="server"?t=yE(this._delegate):t=pE(this._delegate),t.then(r=>new qo(this.firestore,new Tt(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=qf(e),r=$f(e,s=>new qo(this.firestore,new Tt(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return Ff(this._delegate,t,r)}withConverter(e){return new Te(this.firestore,e?this._delegate.withConverter(Jt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class OE{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ur(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class qo{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Te(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ur(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new OE(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Ur(this._firestore,r))})}isEqual(e){return Of(this._delegate,e._delegate)}}class On extends Te{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Oe(this.firestore,e):null}doc(e){try{return e===void 0?new Oe(this.firestore,Hs(this._delegate)):new Oe(this.firestore,Hs(this._delegate,e))}catch(t){throw ve(t,"doc()","CollectionReference.doc()")}}add(e){return EE(this._delegate,e).then(t=>new Oe(this.firestore,t))}isEqual(e){return wf(this._delegate,e._delegate)}withConverter(e){return new On(this.firestore,e?this._delegate.withConverter(Jt.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ut(n){return O(n,W)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(...e){this._delegate=new wt(...e)}static documentId(){return new pc(z.keyField().canonicalString())}isEqual(e){return e=se(e),e instanceof wt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this._delegate=e}static serverTimestamp(){const e=bE();return e._methodName="FieldValue.serverTimestamp",new Ot(e)}static delete(){const e=SE();return e._methodName="FieldValue.delete",new Ot(e)}static arrayUnion(...e){const t=PE(...e);return t._methodName="FieldValue.arrayUnion",new Ot(t)}static arrayRemove(...e){const t=VE(...e);return t._methodName="FieldValue.arrayRemove",new Ot(t)}static increment(e){const t=CE(e);return t._methodName="FieldValue.increment",new Ot(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE={Firestore:Lf,GeoPoint:Ri,Timestamp:Q,Blob:Lr,Transaction:Bf,WriteBatch:Uf,DocumentReference:Oe,DocumentSnapshot:Br,Query:Te,QueryDocumentSnapshot:Ur,QuerySnapshot:qo,CollectionReference:On,FieldPath:pc,FieldValue:Ot,setLogLevel:ME,CACHE_SIZE_UNLIMITED:jI};function LE(n,e){n.INTERNAL.registerComponent(new $t("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},FE)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(n){LE(n,(e,t)=>new Lf(e,t,new kE)),n.registerVersion(DE,xE)}BE(yr);const UE={apiKey:"AIzaSyDorIO_gFaqrzv30MVHxX-tjni4nCqskk0",authDomain:"webrtc-video-app-99930.firebaseapp.com",projectId:"webrtc-video-app-99930",storageBucket:"webrtc-video-app-99930.appspot.com",messagingSenderId:"627650830286",appId:"1:627650830286:web:045b06cb2a4f8a1ad8959f",measurementId:"G-29KE14F96P"};yr.apps.length||yr.initializeApp(UE);const jf=yr.firestore(),_c={iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]}],iceCandidatePoolSize:10};let Is=null,mr=null;var q=new RTCPeerConnection(_c);q.ondatachannel=yc;var ce=q.createDataChannel("textChannel");ce.onopen=Fn;ce.onclose=Fn;ce.onmessage=Mi;function Fn(n){ce&&(ce.readyState=="open"?Ln.disabled=!1:Ln.disabled=!0)}function sl(n){}function yc(n){console.log("ReceiveCallBack"),ce=n.channel,ce.onmessage=Mi,ce.onopen=sl,ce.onclose=sl}function Mi(n){console.log("receiveMessage");const e=document.createElement("p"),t=document.createTextNode("Guest: "+n.data);e.appendChild(t),ht.appendChild(e),ht.scrollTop=ht.scrollHeight}const qE=document.getElementById("webcamVideo"),Oi=document.getElementById("callButton"),$E=document.getElementById("callInput"),Fi=document.getElementById("answerButton"),Ic=document.getElementById("remoteVideo"),qr=document.getElementById("hangupButton"),Ln=document.getElementById("sendMessage"),Qe=document.getElementById("messageInput"),ht=document.getElementById("receivebox"),Ec=document.getElementById("meetingID"),wc=async()=>{console.log("running"),Is=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0}),mr=new MediaStream,Is.getTracks().forEach(n=>{q.addTrack(n,Is)}),q.ontrack=n=>{n.streams[0].getTracks().forEach(e=>{mr.addTrack(e)})},qE.srcObject=Is,Ic.srcObject=mr,Oi.disabled=!1,Fi.disabled=!1,Ln.disabled=!0};window.onload=async()=>{wc()};function jE(n){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=t.length;let s=0;for(;s<n;)e+=t.charAt(Math.floor(Math.random()*r)),s+=1;return e}Oi.onclick=async()=>{let n=jE(5);const e=jf.collection("calls").doc(n),t=e.collection("offerCandidates"),r=e.collection("answerCandidates");Ec.innerHTML="Meeting ID: "+e.id,q.onicecandidate=o=>{o.candidate&&t.add(o.candidate.toJSON())};const s=await q.createOffer();await q.setLocalDescription(s);const i={sdp:s.sdp,type:s.type};await e.set({offer:i}),e.onSnapshot(o=>{const a=o.data();if(!q.currentRemoteDescription&&(a!=null&&a.answer)){const c=new RTCSessionDescription(a.answer);q.setRemoteDescription(c)}}),r.onSnapshot(o=>{o.docChanges().forEach(a=>{if(a.type==="added"){const c=new RTCIceCandidate(a.doc.data());q.addIceCandidate(c)}})}),qr.disabled=!1,Ln.disabled=!1};Fi.onclick=async()=>{const n=$E.value,e=jf.collection("calls").doc(n),t=e.collection("answerCandidates"),r=e.collection("offerCandidates");q.onicecandidate=c=>{c.candidate&&t.add(c.candidate.toJSON())};const i=(await e.get()).data().offer;await q.setRemoteDescription(new RTCSessionDescription(i));const o=await q.createAnswer();await q.setLocalDescription(o);const a={type:o.type,sdp:o.sdp};await e.update({answer:a}),r.onSnapshot(c=>{c.docChanges().forEach(u=>{if(console.log(u),u.type==="added"){let l=u.doc.data();q.addIceCandidate(new RTCIceCandidate(l))}})}),qr.disabled=!1};sendMessage.onclick=async()=>{if(Qe.value=="")return;ce.send(Qe.value);const n=document.createElement("p"),e=document.createTextNode("You: "+Qe.value);n.appendChild(e),ht.appendChild(n),Qe.value="",Qe.focus(),ht.scrollTop=ht.scrollHeight};qr.onclick=async()=>{q.close(),Oi.disabled=!1,Fi.disabled=!1,Ln.disabled=!0,qr.disabled=!0,Qe.value="",Qe.disabled=!0,ht.innerHTML="",Ec.innerHTML="",mr=null,Ic.srcObject=null,q=new RTCPeerConnection(_c),q.ondatachannel=yc,ce=q.createDataChannel("textChannel"),ce.onopen=Fn,ce.onclose=Fn,ce.onmessage=Mi,wc()};q.onconnectionstatechange=n=>{console.log(q.connectionState),q.connectionState=="disconnected"&&(q.close(),Oi.disabled=!1,Fi.disabled=!1,Ln.disabled=!0,qr.disabled=!0,Qe.value="",Qe.disabled=!0,ht.innerHTML="",Ec.innerHTML="",mr=null,Ic.srcObject=null,q=new RTCPeerConnection(_c),q.ondatachannel=yc,ce=q.createDataChannel("textChannel"),ce.onopen=Fn,ce.onclose=Fn,ce.onmessage=Mi,wc())};
