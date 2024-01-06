"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7147:(M,f,l)=>{l.d(f,{c:()=>t});var e=l(5074),s=l(2279),g=l(5909);const t=(c,i)=>{let n,o;const p=(d,w,b)=>{if(typeof document>"u")return;const T=document.elementFromPoint(d,w);T&&i(T)?T!==n&&(r(),m(T,b)):r()},m=(d,w)=>{n=d,o||(o=n);const b=n;(0,e.w)(()=>b.classList.add("ion-activated")),w()},r=(d=!1)=>{if(!n)return;const w=n;(0,e.w)(()=>w.classList.remove("ion-activated")),d&&o!==n&&n.click(),n=void 0};return(0,g.createGesture)({el:c,gestureName:"buttonActiveDrag",threshold:0,onStart:d=>p(d.currentX,d.currentY,s.a),onMove:d=>p(d.currentX,d.currentY,s.b),onEnd:()=>{r(!0),(0,s.h)(),o=void 0}})}},7981:(M,f,l)=>{l.d(f,{g:()=>s});var e=l(8480);const s=()=>{if(void 0!==e.w)return e.w.Capacitor}},6361:(M,f,l)=>{l.d(f,{g:()=>e});const e=(i,n,o,p,m)=>g(i[1],n[1],o[1],p[1],m).map(r=>s(i[0],n[0],o[0],p[0],r)),s=(i,n,o,p,m)=>m*(3*n*Math.pow(m-1,2)+m*(-3*o*m+3*o+p*m))-i*Math.pow(m-1,3),g=(i,n,o,p,m)=>c((p-=m)-3*(o-=m)+3*(n-=m)-(i-=m),3*o-6*n+3*i,3*n-3*i,i).filter(d=>d>=0&&d<=1),c=(i,n,o,p)=>{if(0===i)return((i,n,o)=>{const p=n*n-4*i*o;return p<0?[]:[(-n+Math.sqrt(p))/(2*i),(-n-Math.sqrt(p))/(2*i)]})(n,o,p);const m=(3*(o/=i)-(n/=i)*n)/3,r=(2*n*n*n-9*n*o+27*(p/=i))/27;if(0===m)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-m),-Math.sqrt(-m)];const d=Math.pow(r/2,2)+Math.pow(m/3,3);if(0===d)return[Math.pow(r/2,.5)-n/3];if(d>0)return[Math.pow(-r/2+Math.sqrt(d),1/3)-Math.pow(r/2+Math.sqrt(d),1/3)-n/3];const w=Math.sqrt(Math.pow(-m/3,3)),b=Math.acos(-r/(2*Math.sqrt(Math.pow(-m/3,3)))),T=2*Math.pow(w,1/3);return[T*Math.cos(b/3)-n/3,T*Math.cos((b+2*Math.PI)/3)-n/3,T*Math.cos((b+4*Math.PI)/3)-n/3]}},9535:(M,f,l)=>{l.d(f,{i:()=>e});const e=s=>s&&""!==s.dir?"rtl"===s.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},8217:(M,f,l)=>{l.r(f),l.d(f,{startFocusVisible:()=>t});const e="ion-focused",g=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],t=c=>{let i=[],n=!0;const o=c?c.shadowRoot:document,p=c||document.body,m=O=>{i.forEach(_=>_.classList.remove(e)),O.forEach(_=>_.classList.add(e)),i=O},r=()=>{n=!1,m([])},d=O=>{n=g.includes(O.key),n||m([])},w=O=>{if(n&&void 0!==O.composedPath){const _=O.composedPath().filter(y=>!!y.classList&&y.classList.contains("ion-focusable"));m(_)}},b=()=>{o.activeElement===p&&m([])};return o.addEventListener("keydown",d),o.addEventListener("focusin",w),o.addEventListener("focusout",b),o.addEventListener("touchstart",r,{passive:!0}),o.addEventListener("mousedown",r),{destroy:()=>{o.removeEventListener("keydown",d),o.removeEventListener("focusin",w),o.removeEventListener("focusout",b),o.removeEventListener("touchstart",r),o.removeEventListener("mousedown",r)},setFocus:m}}},3515:(M,f,l)=>{l.d(f,{c:()=>s});var e=l(6647);const s=i=>{const n=i;let o;return{hasLegacyControl:()=>{if(void 0===o){const m=void 0!==n.label||g(n),r=n.hasAttribute("aria-label")||n.hasAttribute("aria-labelledby")&&null===n.shadowRoot,d=(0,e.h)(n);o=!0===n.legacy||!m&&!r&&null!==d}return o}}},g=i=>!!(t.includes(i.tagName)&&null!==i.querySelector('[slot="label"]')||c.includes(i.tagName)&&""!==i.textContent),t=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],c=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},2279:(M,f,l)=>{l.d(f,{I:()=>s,a:()=>n,b:()=>o,c:()=>i,d:()=>m,h:()=>p});var e=l(7981),s=function(r){return r.Heavy="HEAVY",r.Medium="MEDIUM",r.Light="LIGHT",r}(s||{});const t={getEngine(){const r=window.TapticEngine;if(r)return r;const d=(0,e.g)();return null!=d&&d.isPluginAvailable("Haptics")?d.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const d=(0,e.g)();return"web"!==(null==d?void 0:d.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,e.g)(),impact(r){const d=this.getEngine();if(!d)return;const w=this.isCapacitor()?r.style:r.style.toLowerCase();d.impact({style:w})},notification(r){const d=this.getEngine();if(!d)return;const w=this.isCapacitor()?r.type:r.type.toLowerCase();d.notification({type:w})},selection(){const r=this.isCapacitor()?s.Light:"light";this.impact({style:r})},selectionStart(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionStart():r.gestureSelectionStart())},selectionChanged(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionChanged():r.gestureSelectionChanged())},selectionEnd(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionEnd():r.gestureSelectionEnd())}},c=()=>t.available(),i=()=>{c()&&t.selection()},n=()=>{c()&&t.selectionStart()},o=()=>{c()&&t.selectionChanged()},p=()=>{c()&&t.selectionEnd()},m=r=>{c()&&t.impact(r)}},4690:(M,f,l)=>{l.d(f,{I:()=>i,a:()=>m,b:()=>c,c:()=>w,d:()=>T,f:()=>r,g:()=>p,i:()=>o,p:()=>b,r:()=>O,s:()=>d});var e=l(8239),s=l(6647),g=l(1092);const c="ion-content",i=".ion-content-scroll-host",n=`${c}, ${i}`,o=_=>"ION-CONTENT"===_.tagName,p=function(){var _=(0,e.Z)(function*(y){return o(y)?(yield new Promise(a=>(0,s.c)(y,a)),y.getScrollElement()):y});return function(a){return _.apply(this,arguments)}}(),m=_=>_.querySelector(i)||_.querySelector(n),r=_=>_.closest(n),d=(_,y)=>o(_)?_.scrollToTop(y):Promise.resolve(_.scrollTo({top:0,left:0,behavior:y>0?"smooth":"auto"})),w=(_,y,a,h)=>o(_)?_.scrollByPoint(y,a,h):Promise.resolve(_.scrollBy({top:a,left:y,behavior:h>0?"smooth":"auto"})),b=_=>(0,g.b)(_,c),T=_=>{if(o(_)){const a=_.scrollY;return _.scrollY=!1,a}return _.style.setProperty("overflow","hidden"),!0},O=(_,y)=>{o(_)?_.scrollY=y:_.style.removeProperty("overflow")}},2776:(M,f,l)=>{l.d(f,{a:()=>e,b:()=>w,c:()=>n,d:()=>b,e:()=>E,f:()=>i,g:()=>T,h:()=>g,i:()=>s,j:()=>h,k:()=>v,l:()=>o,m:()=>r,n:()=>O,o:()=>m,p:()=>c,q:()=>t,r:()=>a,s:()=>u,t:()=>d,u:()=>_,v:()=>y,w:()=>p});const e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",T="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},6912:(M,f,l)=>{l.d(f,{c:()=>t,g:()=>c});var e=l(8480),s=l(6647),g=l(1092);const t=(n,o,p)=>{let m,r;void 0!==e.w&&"MutationObserver"in e.w&&(m=new MutationObserver(T=>{for(const O of T)for(const _ of O.addedNodes)if(_.nodeType===Node.ELEMENT_NODE&&_.slot===o)return p(),void(0,s.r)(()=>d(_))}),m.observe(n,{childList:!0}));const d=T=>{var O;r&&(r.disconnect(),r=void 0),r=new MutationObserver(_=>{p();for(const y of _)for(const a of y.removedNodes)a.nodeType===Node.ELEMENT_NODE&&a.slot===o&&b()}),r.observe(null!==(O=T.parentElement)&&void 0!==O?O:T,{subtree:!0,childList:!0})},b=()=>{r&&(r.disconnect(),r=void 0)};return{destroy:()=>{m&&(m.disconnect(),m=void 0),b()}}},c=(n,o,p)=>{const m=null==n?0:n.toString().length,r=i(m,o);if(void 0===p)return r;try{return p(m,o)}catch(d){return(0,g.a)("Exception in provided `counterFormatter`.",d),r}},i=(n,o)=>`${n} / ${o}`},406:(M,f,l)=>{l.d(f,{K:()=>t,a:()=>g});var e=l(7981),s=function(c){return c.Unimplemented="UNIMPLEMENTED",c.Unavailable="UNAVAILABLE",c}(s||{}),g=function(c){return c.Body="body",c.Ionic="ionic",c.Native="native",c.None="none",c}(g||{});const t={getEngine(){const c=(0,e.g)();if(null!=c&&c.isPluginAvailable("Keyboard"))return c.Plugins.Keyboard},getResizeMode(){const c=this.getEngine();return null!=c&&c.getResizeMode?c.getResizeMode().catch(i=>{if(i.code!==s.Unimplemented)throw i}):Promise.resolve(void 0)}}},4776:(M,f,l)=>{l.r(f),l.d(f,{KEYBOARD_DID_CLOSE:()=>c,KEYBOARD_DID_OPEN:()=>t,copyVisualViewport:()=>v,keyboardDidClose:()=>_,keyboardDidOpen:()=>T,keyboardDidResize:()=>O,resetKeyboardAssist:()=>m,setKeyboardClose:()=>b,setKeyboardOpen:()=>w,startKeyboardAssist:()=>r,trackViewportChanges:()=>h});var e=l(406);l(7981),l(8480);const t="ionKeyboardDidShow",c="ionKeyboardDidHide";let n={},o={},p=!1;const m=()=>{n={},o={},p=!1},r=u=>{if(e.K.getEngine())d(u);else{if(!u.visualViewport)return;o=v(u.visualViewport),u.visualViewport.onresize=()=>{h(u),T()||O(u)?w(u):_(u)&&b(u)}}},d=u=>{u.addEventListener("keyboardDidShow",E=>w(u,E)),u.addEventListener("keyboardDidHide",()=>b(u))},w=(u,E)=>{y(u,E),p=!0},b=u=>{a(u),p=!1},T=()=>!p&&n.width===o.width&&(n.height-o.height)*o.scale>150,O=u=>p&&!_(u),_=u=>p&&o.height===u.innerHeight,y=(u,E)=>{const C=new CustomEvent(t,{detail:{keyboardHeight:E?E.keyboardHeight:u.innerHeight-o.height}});u.dispatchEvent(C)},a=u=>{const E=new CustomEvent(c);u.dispatchEvent(E)},h=u=>{n=Object.assign({},o),o=v(u.visualViewport)},v=u=>({width:Math.round(u.width),height:Math.round(u.height),offsetTop:u.offsetTop,offsetLeft:u.offsetLeft,pageTop:u.pageTop,pageLeft:u.pageLeft,scale:u.scale})},8813:(M,f,l)=>{l.d(f,{c:()=>i});var e=l(8239),s=l(8480),g=l(406);const t=n=>{if(void 0===s.d||n===g.a.None||void 0===n)return null;const o=s.d.querySelector("ion-app");return null!=o?o:s.d.body},c=n=>{const o=t(n);return null===o?0:o.clientHeight},i=function(){var n=(0,e.Z)(function*(o){let p,m,r,d;const w=function(){var y=(0,e.Z)(function*(){const a=yield g.K.getResizeMode(),h=void 0===a?void 0:a.mode;p=()=>{void 0===d&&(d=c(h)),r=!0,b(r,h)},m=()=>{r=!1,b(r,h)},null==s.w||s.w.addEventListener("keyboardWillShow",p),null==s.w||s.w.addEventListener("keyboardWillHide",m)});return function(){return y.apply(this,arguments)}}(),b=(y,a)=>{o&&o(y,T(a))},T=y=>{if(0===d||d===c(y))return;const a=t(y);return null!==a?new Promise(h=>{const u=new ResizeObserver(()=>{a.clientHeight===d&&(u.disconnect(),h())});u.observe(a)}):void 0};return yield w(),{init:w,destroy:()=>{null==s.w||s.w.removeEventListener("keyboardWillShow",p),null==s.w||s.w.removeEventListener("keyboardWillHide",m),p=m=void 0},isKeyboardVisible:()=>r}});return function(p){return n.apply(this,arguments)}}()},1798:(M,f,l)=>{l.d(f,{c:()=>s});var e=l(8239);const s=()=>{let g;return{lock:function(){var c=(0,e.Z)(function*(){const i=g;let n;return g=new Promise(o=>n=o),void 0!==i&&(yield i),n});return function(){return c.apply(this,arguments)}}()}}},5005:(M,f,l)=>{l.d(f,{c:()=>g});var e=l(8480),s=l(6647);const g=(t,c,i)=>{let n;const o=()=>!(void 0===c()||void 0!==t.label||null===i()),m=()=>{const d=c();if(void 0===d)return;if(!o())return void d.style.removeProperty("width");const w=i().scrollWidth;if(0===w&&null===d.offsetParent&&void 0!==e.w&&"IntersectionObserver"in e.w){if(void 0!==n)return;const b=n=new IntersectionObserver(T=>{1===T[0].intersectionRatio&&(m(),b.disconnect(),n=void 0)},{threshold:.01,root:t});b.observe(d)}else d.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{o()&&(0,s.r)(()=>{m()})},destroy:()=>{n&&(n.disconnect(),n=void 0)}}}},610:(M,f,l)=>{l.d(f,{S:()=>s});const s={bubbles:{dur:1e3,circles:9,fn:(g,t,c)=>{const i=g*t/c-g+"ms",n=2*Math.PI*t/c;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(g,t,c)=>{const i=t/c,n=g*i-g+"ms",o=2*Math.PI*i;return{r:5,style:{top:32*Math.sin(o)+"%",left:32*Math.cos(o)+"%","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(g,t)=>({r:6,style:{left:32-32*t+"%","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:8,fn:(g,t,c)=>({y1:14,y2:26,style:{transform:`rotate(${360/c*t+(t<c/2?180:-180)}deg)`,"animation-delay":g*t/c-g+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(g,t,c)=>({y1:12,y2:20,style:{transform:`rotate(${360/c*t+(t<c/2?180:-180)}deg)`,"animation-delay":g*t/c-g+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(g,t,c)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":g*t/c-g+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(g,t,c)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":g*t/c-g+"ms"}})}}},3981:(M,f,l)=>{l.r(f),l.d(f,{createSwipeBackGesture:()=>c});var e=l(6647),s=l(9535),g=l(5909);l(7737);const c=(i,n,o,p,m)=>{const r=i.ownerDocument.defaultView;let d=(0,s.i)(i);const b=a=>d?-a.deltaX:a.deltaX;return(0,g.createGesture)({el:i,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:a=>(d=(0,s.i)(i),(a=>{const{startX:v}=a;return d?v>=r.innerWidth-50:v<=50})(a)&&n()),onStart:o,onMove:a=>{const v=b(a)/r.innerWidth;p(v)},onEnd:a=>{const h=b(a),v=r.innerWidth,u=h/v,E=(a=>d?-a.velocityX:a.velocityX)(a),C=E>=0&&(E>.2||h>v/2),D=(C?1-u:u)*v;let A=0;if(D>5){const Z=D/Math.abs(E);A=Math.min(Z,540)}m(C,u<=0?.01:(0,e.l)(0,u,.9999),A)}})}},31:(M,f,l)=>{l.d(f,{w:()=>e});const e=(t,c,i)=>{if(typeof MutationObserver>"u")return;const n=new MutationObserver(o=>{i(s(o,c))});return n.observe(t,{childList:!0,subtree:!0}),n},s=(t,c)=>{let i;return t.forEach(n=>{for(let o=0;o<n.addedNodes.length;o++)i=g(n.addedNodes[o],c)||i}),i},g=(t,c)=>{if(1!==t.nodeType)return;const i=t;return(i.tagName===c.toUpperCase()?[i]:Array.from(i.querySelectorAll(c))).find(o=>o.value===i.value)}},8545:(M,f,l)=>{l.r(f),l.d(f,{BookPage:()=>y});var e=l(755),s=l(5477),g=l(6733);function t(a,h){if(1&a&&(e.TgZ(0,"ion-chip",9),e._uU(1),e.qZA()),2&a){const v=h.$implicit;e.xp6(1),e.Oqu(v)}}function c(a,h){if(1&a&&(e.TgZ(0,"ion-card",10),e._UZ(1,"ion-img",11),e.TgZ(2,"ion-card-header")(3,"ion-card-title",12),e._uU(4),e.qZA()(),e.TgZ(5,"ion-card-content"),e._uU(6),e.qZA()()),2&a){const v=h.$implicit;e.xp6(1),e.Q6J("alt",v.title)("src",v.image),e.xp6(3),e.Oqu(v.title),e.xp6(2),e.hij(" ",v.desc," ")}}function i(a,h){if(1&a&&(e.TgZ(0,"ion-card",13),e._UZ(1,"ion-img",11),e.TgZ(2,"ion-card-header")(3,"ion-card-title",12),e._uU(4),e.qZA()(),e.TgZ(5,"ion-card-content"),e._uU(6),e.qZA()()),2&a){const v=h.$implicit;e.Q6J("href",v.path),e.xp6(1),e.Q6J("alt",v.title)("src",v.image),e.xp6(3),e.Oqu(v.title),e.xp6(2),e.hij(" ",v.desc," ")}}let n=(()=>{var a;class h{constructor(){this.filters=["Finance","Technology","Design"],this.books=[{image:"../../assets/images/books/manage-finance.svg",title:"How to Manage Your Finance",desc:"Finance"},{image:"../../assets/images/books/cash.svg",title:"Cash Cash Cash",desc:"Finance"},{image:"../../assets/images/books/finance-binance.svg",title:"Finance Binance",desc:"Finance"}],this.books1=[{image:"../../assets/images/books/transition-technology.svg",title:"Transitioning to Technology",desc:"Technology",path:"/tabs/book/bookdetail"},{image:"../../assets/images/books/dummies.svg",title:"Programming for Dummies",desc:"Technology"},{image:"../../assets/images/books/cannot-programming.svg",title:"I can't do Programming",desc:"Technology"}]}ngOnInit(){}}return(a=h).\u0275fac=function(u){return new(u||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-library"]],decls:17,vars:3,consts:[[1,"flex","items-center","border-slate-300","border-solid","border-2","px-4","py-3","rounded-lg","m-3","space-x-5"],["name","book-outline","size","large","color","warning"],["color","light",1,"p-5","pb-10","mt-30"],[1,"ml-4","mt-4"],["class","mr-4 text-md",4,"ngFor","ngForOf"],[1,"mt-8"],[1,"ml-4","mt-4","flex","whitespace-nowrap","overflow-scroll"],["class","w-[30vw] lg:w-[20vw]",4,"ngFor","ngForOf"],["class","w-[30vw] lg:w-[20vw]",3,"href",4,"ngFor","ngForOf"],[1,"mr-4","text-md"],[1,"w-[30vw]","lg:w-[20vw]"],[1,"w-[29.1vw]","lg:w-[19.1vw]",3,"alt","src"],["text-wrap",""],[1,"w-[30vw]","lg:w-[20vw]",3,"href"]],template:function(u,E){1&u&&(e.TgZ(0,"div",0),e._UZ(1,"ion-icon",1),e.TgZ(2,"p"),e._uU(3," Your application will be reviewed by the company once submitted\n"),e.qZA()(),e._UZ(4,"ion-searchbar",2),e.TgZ(5,"ion-title"),e._uU(6,"Suggested Genres"),e.qZA(),e.TgZ(7,"div",3),e.YNc(8,t,2,1,"ion-chip",4),e.qZA(),e.TgZ(9,"ion-title",5),e._uU(10,"Top Finance Books"),e.qZA(),e.TgZ(11,"div",6),e.YNc(12,c,7,4,"ion-card",7),e.qZA(),e.TgZ(13,"ion-title",5),e._uU(14,"Top Technology Books"),e.qZA(),e.TgZ(15,"div",6),e.YNc(16,i,7,5,"ion-card",8),e.qZA()),2&u&&(e.xp6(8),e.Q6J("ngForOf",E.filters),e.xp6(4),e.Q6J("ngForOf",E.books),e.xp6(4),e.Q6J("ngForOf",E.books1))},dependencies:[s.PM,s.FN,s.Zi,s.Dq,s.hM,s.gu,s.Xz,s.VI,s.wd,s.j9,g.sg],encapsulation:2}),h})();function o(a,h){if(1&a&&(e.TgZ(0,"ion-card")(1,"ion-card-header",9)(2,"ion-thumbnail",10),e._UZ(3,"img",11),e.qZA(),e.TgZ(4,"div")(5,"ion-card-title"),e._uU(6),e.qZA(),e.TgZ(7,"ion-card-subtitle"),e._uU(8),e.qZA(),e.TgZ(9,"ion-button",12),e._uU(10,"Remove"),e.qZA()()()()),2&a){const v=h.$implicit;e.xp6(3),e.Q6J("src",v.image,e.LSH),e.xp6(3),e.Oqu(v.title),e.xp6(2),e.Oqu(v.desc)}}let p=(()=>{var a;class h{constructor(){this.books=[{image:"../../assets/images/books/manage-finance.svg",title:"How to Manage Finance",desc:"Finance"},{image:"../../assets/images/books/transition-technology.svg",title:"Transitioning to Technology",desc:"Technology"},{image:"../../assets/images/books/dummies.svg",title:"Programming for Dummies",desc:"Technology"}]}ngOnInit(){}}return(a=h).\u0275fac=function(u){return new(u||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-cart"]],decls:16,vars:1,consts:[[1,"px-2","border-2","border-solid","border-slate-300"],[1,"flex","items-center","py-2"],["name","location-outline","size","large"],[1,"uppercase","pl-1"],[1,"normal-case"],[4,"ngFor","ngForOf"],[1,"border-b-2"],["fill","solid","shape","round","color","secondary",1,"w-full","pt-3"],[1,"font-bold","py-5"],[1,"flex","flex-row","space-x-5"],[1,"w-[10vw]"],[3,"src"],["fill","clear"]],template:function(u,E){1&u&&(e.TgZ(0,"ion-card",0)(1,"ion-card-header")(2,"div",1),e._UZ(3,"ion-icon",2),e.TgZ(4,"ion-card-subtitle",3),e._uU(5,"Send to"),e.qZA()(),e.TgZ(6,"ion-card-title",4),e._uU(7,"I am a great potato ball"),e.qZA(),e.TgZ(8,"ion-card-subtitle"),e._uU(9,"100, Jalan Potato Universe 00000 Potato City Kuala Lumpur "),e.qZA()()(),e.TgZ(10,"div"),e.YNc(11,o,11,3,"ion-card",5),e.qZA(),e._UZ(12,"hr",6),e.TgZ(13,"ion-button",7)(14,"p",8),e._uU(15,"Proceed to Delivery"),e.qZA()()),2&u&&(e.xp6(11),e.Q6J("ngForOf",E.books))},dependencies:[s.YG,s.PM,s.Zi,s.tO,s.Dq,s.gu,s.Bs,g.sg],encapsulation:2}),h})();function m(a,h){if(1&a&&(e.TgZ(0,"ion-card",4)(1,"ion-card-header")(2,"div",5),e._UZ(3,"ion-icon",6),e.TgZ(4,"ion-card-subtitle",7),e._uU(5),e.qZA()(),e.TgZ(6,"div",8)(7,"div")(8,"ion-card-title",9),e._uU(9),e.qZA(),e.TgZ(10,"ion-card-subtitle"),e._uU(11),e.qZA()(),e.TgZ(12,"ion-badge",10),e._uU(13),e.qZA()()()()),2&a){const v=h.$implicit;e.Q6J("href",v.path),e.xp6(5),e.Oqu(v.serial),e.xp6(4),e.Oqu(v.courier),e.xp6(2),e.Oqu(v.code),e.xp6(2),e.Oqu(v.status)}}function r(a,h){if(1&a&&(e.TgZ(0,"ion-card",11)(1,"ion-card-header")(2,"div",5),e._UZ(3,"ion-icon",6),e.TgZ(4,"ion-card-subtitle",7),e._uU(5),e.qZA()(),e.TgZ(6,"div",8)(7,"div")(8,"ion-card-title",9),e._uU(9),e.qZA(),e.TgZ(10,"ion-card-subtitle"),e._uU(11),e.qZA()(),e.TgZ(12,"ion-badge",10),e._uU(13),e.qZA()()()()),2&a){const v=h.$implicit;e.xp6(5),e.Oqu(v.serial),e.xp6(4),e.Oqu(v.courier),e.xp6(2),e.Oqu(v.code),e.xp6(2),e.Oqu(v.status)}}let d=(()=>{var a;class h{constructor(){this.deliveries=[{serial:"Delivery #0004",courier:"J&T Express",code:"ABC101010",status:"Out for Delivery",path:"/tabs/book/deliverydetail"},{serial:"Delivery #0003",courier:"J&T Express",code:"ABC101011",status:"Out for Delivery"}],this.deliveries1=[{serial:"Delivery #0002",courier:"J&T Express",code:"ABC101009",status:"Completed"}]}ngOnInit(){}}return(a=h).\u0275fac=function(u){return new(u||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-delivery"]],decls:9,vars:2,consts:[["color","light",1,"p-5","pb-10","mt-30"],[1,"mt-10","px-5","pt-2"],["class","px-2 py-1 border-2 border-solid border-slate-300",3,"href",4,"ngFor","ngForOf"],["class","px-2 py-1 border-2 border-solid border-slate-300",4,"ngFor","ngForOf"],[1,"px-2","py-1","border-2","border-solid","border-slate-300",3,"href"],[1,"flex","items-center","py-2"],["name","send-outline","size","large"],[1,"uppercase"],[1,"flex","justify-between"],[1,"normal-case"],["slot","end","color","warning",1,"px-2","py-0","text-lg","text-white"],[1,"px-2","py-1","border-2","border-solid","border-slate-300"]],template:function(u,E){1&u&&(e._UZ(0,"ion-searchbar",0),e.TgZ(1,"div",1)(2,"h2"),e._uU(3,"Ongoing Deliveries"),e.qZA(),e.YNc(4,m,14,5,"ion-card",2),e.qZA(),e.TgZ(5,"div",1)(6,"h2"),e._uU(7,"Completed Deliveries"),e.qZA(),e.YNc(8,r,14,4,"ion-card",3),e.qZA()),2&u&&(e.xp6(4),e.Q6J("ngForOf",E.deliveries),e.xp6(4),e.Q6J("ngForOf",E.deliveries1))},dependencies:[s.yp,s.PM,s.Zi,s.tO,s.Dq,s.gu,s.VI,s.j9,g.sg],encapsulation:2}),h})();var w=l(2133);function b(a,h){if(1&a){const v=e.EpF();e.TgZ(0,"ion-segment-button",10),e.NdJ("click",function(){const x=e.CHM(v).index,C=e.oxw();return e.KtG(C._segmentSelected(x))}),e.TgZ(1,"ion-label"),e._uU(2),e.qZA()()}if(2&a){const v=h.$implicit;e.Q6J("value",v),e.xp6(2),e.Oqu(v)}}function T(a,h){1&a&&(e.TgZ(0,"div"),e._UZ(1,"app-library"),e.qZA())}function O(a,h){1&a&&(e.TgZ(0,"div"),e._UZ(1,"app-cart"),e.qZA())}function _(a,h){1&a&&(e.TgZ(0,"div"),e._UZ(1,"app-delivery"),e.qZA())}let y=(()=>{var a;class h{ionViewWillEnter(){const u=document.getElementsByTagName("ion-tab-bar");for(let E=0;E<u.length;E++)u[E].style.display="none"}ionViewWillLeave(){const u=document.getElementsByTagName("ion-tab-bar");for(let E=0;E<u.length;E++)u[E].style.display="flex"}_segmentSelected(u){this.selectedSegment=this.segmentList[u]}constructor(){this.segmentList=["Library","Cart","Delivery"],this.selectedSegment=this.segmentList[0],this.slides=[n,p,d]}}return(a=h).\u0275fac=function(u){return new(u||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-book"]],decls:16,vars:7,consts:[[3,"translucent"],["slot","start"],["defaultHref","/tabs/home"],["slot","end"],["name","notifications-outline",1,"mr-8","text-2xl"],["mode","md","value","Library",3,"ngModel","ngModelChange"],[3,"value","click",4,"ngFor","ngForOf"],[1,"ion-padding"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"value","click"]],template:function(u,E){1&u&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5," Book \u{1f4d6} "),e.qZA(),e.TgZ(6,"ion-buttons",3),e._UZ(7,"ion-icon",4),e.qZA()(),e.TgZ(8,"ion-toolbar")(9,"ion-segment",5),e.NdJ("ngModelChange",function(C){return E.selectedSegment=C}),e.YNc(10,b,3,2,"ion-segment-button",6),e.qZA()()(),e.TgZ(11,"ion-content",7)(12,"div",8),e.YNc(13,T,2,0,"div",9),e.YNc(14,O,2,0,"div",9),e.YNc(15,_,2,0,"div",9),e.qZA()()),2&u&&(e.Q6J("translucent",!0),e.xp6(9),e.Q6J("ngModel",E.selectedSegment),e.xp6(1),e.Q6J("ngForOf",E.segmentList),e.xp6(2),e.Q6J("ngSwitch",E.selectedSegment),e.xp6(1),e.Q6J("ngSwitchCase","Library"),e.xp6(1),e.Q6J("ngSwitchCase","Cart"),e.xp6(1),e.Q6J("ngSwitchCase","Delivery"))},dependencies:[s.Sm,s.W2,s.Gu,s.gu,s.Q$,s.cJ,s.GO,s.wd,s.sr,s.QI,s.oU,g.sg,g.RF,g.n9,w.JJ,w.On,n,d,p]}),h})()},2071:(M,f,l)=>{l.r(f),l.d(f,{CoursePage:()=>c});var e=l(6733),s=l(2133),g=l(5477),t=l(755);let c=(()=>{var i;class n{constructor(){}ionViewWillEnter(){const p=document.getElementsByTagName("ion-tab-bar");for(let m=0;m<p.length;m++)p[m].style.display="none"}ionViewWillLeave(){const p=document.getElementsByTagName("ion-tab-bar");for(let m=0;m<p.length;m++)p[m].style.display="flex"}ngOnInit(){}}return(i=n).\u0275fac=function(p){return new(p||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-course"]],standalone:!0,features:[t.jDz],decls:54,vars:0,consts:[["slot","start"],["defaultHref","/tabs/learn"],[1,"flex","space-x-10","w-full","dark:text-white"],["src","../../../assets/images/courses/not-broke.svg",1,"w-52"],[1,"text-3xl","w-50%"],[1,"text-gray-500"],[1,"mt-5","bg-opacity-20","bg-rose-500","border-2","border-solid","border-rose-500","rounded-2xl"],[1,"flex","flex-row","items-center","gap-5"],["name","star-outline","size","large","color","primary"],[1,"text-lg","text-black","dark:text-white"],[1,"font-bold"],[1,"flex"],[1,"w-full","rounded-xl","bg-slate-100"],[1,"flex","flex-row","space-x-5"],["name","bookmarks-outline","size","large"],[1,"uppercase"],["name","people-circle-outline","size","large"],[1,"space-y-3"],[1,"mt-10","flex","items-center","p-5","w-fit","mx-auto"],["src","../../assets/images/home/learn_upskill.svg",1,"w-32"],["name","arrow-forward-circle","size","large","color","primary"],["fill","solid","shape","round","color","secondary",1,"w-full"],[1,"font-bold","py-5"]],template:function(p,m){1&p&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA()()(),t.TgZ(4,"div",2),t._UZ(5,"ion-img",3),t.TgZ(6,"div")(7,"h2",4),t._uU(8,"Not Going Broke in 365 Days"),t.qZA(),t.TgZ(9,"p",5),t._uU(10,"Finance | 10 hours"),t.qZA()()(),t.TgZ(11,"ion-card",6)(12,"ion-card-header",7),t._UZ(13,"ion-icon",8),t.TgZ(14,"div")(15,"p",9),t._uU(16," Get "),t.TgZ(17,"span",10),t._uU(18,"100 points"),t.qZA(),t._uU(19," by completing this course! "),t.qZA()()()(),t.TgZ(20,"div",11)(21,"ion-card",12)(22,"ion-card-header",13),t._UZ(23,"ion-icon",14),t.TgZ(24,"div")(25,"ion-card-subtitle",15),t._uU(26,"Modules"),t.qZA(),t.TgZ(27,"ion-card-title"),t._uU(28,"5"),t.qZA()()()(),t.TgZ(29,"ion-card",12)(30,"ion-card-header",13),t._UZ(31,"ion-icon",16),t.TgZ(32,"div")(33,"ion-card-subtitle",15),t._uU(34,"Instructor"),t.qZA(),t.TgZ(35,"ion-card-title"),t._uU(36,"Vandyck Lai"),t.qZA()()()()(),t.TgZ(37,"ion-card",12)(38,"ion-card-content",17)(39,"h3",15),t._uU(40,"About the Course"),t.qZA(),t.TgZ(41,"p"),t._uU(42," This course teaches you to not be broke within 365 days, we often find ourselves spending money, swiping credit cards like you are Elon Musk. But truth is, you should be equipped with knowledge in financial management to make your life less miserable. I don't know how to continue, lorem ipsum dolor sit amet, and you probably need to come up with the rest of the description. "),t.qZA()()(),t.TgZ(43,"ion-card",18),t._UZ(44,"ion-img",19),t.TgZ(45,"ion-card-header")(46,"ion-card-title"),t._uU(47,"Take the Assessments"),t.qZA(),t.TgZ(48,"ion-card-subtitle"),t._uU(49," The course provider has also prepared a short assessment for you! "),t.qZA()(),t._UZ(50,"ion-icon",20),t.qZA(),t.TgZ(51,"ion-button",21)(52,"p",22),t._uU(53,"Start Course"),t.qZA()())},dependencies:[g.Pc,g.YG,g.Sm,g.PM,g.FN,g.Zi,g.tO,g.Dq,g.Gu,g.gu,g.Xz,g.sr,g.oU,e.ez,s.u5]}),n})()},1888:(M,f,l)=>{l.d(f,{e:()=>o});var e=l(2939),s=l(1209),g=l(1570),t=l(2425),c=l(7560),i=l(553),n=l(755);let o=(()=>{var p;class m{constructor(d){this.http=d,this.apiUrl="https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText",this.localApiUrl="http://localhost:8000"}generateText(d){const w=new e.WM({"Content-Type":"application/json"});return this.http.post(`${this.apiUrl}?key=${i.N.palmApi.apiKey}`,{prompt:{text:d},temperature:1,candidateCount:1},{headers:w}).pipe((0,g.b)(O=>console.log("request made to language model")),(0,t.U)(O=>{var _;return null!==(_=O.candidates.map(y=>y.output))&&void 0!==_?_:[]}),(0,c.K)(this.handleError("generateText",[])))}handleError(d="operation",w){return b=>(console.error(`${d} failed: ${b.message}`),(0,s.of)(w))}getLocalData(){return this.http.get(`${this.localApiUrl}`).pipe((0,g.b)(d=>console.log("fetched data from local API")),(0,c.K)(this.handleError("getLocalData",[])))}}return(p=m).\u0275fac=function(d){return new(d||p)(n.LFG(e.eN))},p.\u0275prov=n.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),m})()}}]);