const ge=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}};ge();const E={},pe=(e,t)=>e===t,j={equals:pe};let me=ue;const P={},L=1,D=2,ie={owned:null,cleanups:null,context:null,owner:null};var p=null;let F=null,h=null,B=null,b=null,I=null,J=0;function U(e,t){const n=h,s=p,l=e.length===0?ie:{owned:null,cleanups:null,context:null,owner:t||s};p=l,h=null;try{return Z(()=>e(()=>z(l)),!0)}finally{h=n,p=s}}function q(e,t){t=t?Object.assign({},j,t):j;const n={value:e,observers:null,observerSlots:null,pending:P,comparator:t.equals||void 0},s=l=>(typeof l=="function"&&(l=l(n.pending!==P?n.pending:n.value)),X(n,l));return[re.bind(n),s]}function te(e,t,n){const s=Y(e,t,!0,L);R(s)}function H(e,t,n){const s=Y(e,t,!1,L);R(s)}function ye(e,t,n){n=n?Object.assign({},j,n):j;const s=Y(e,t,!0,0);return s.pending=P,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,R(s),re.bind(s)}function ne(e,t,n){arguments.length===2?typeof t=="object"&&(n=t,t=e,e=!0):arguments.length===1&&(t=e,e=!0),n||(n={}),n.globalRefetch!==!1&&(G||(G=new Set),G.add(A),p&&oe(()=>G.delete(A)));const s=new Set,[l,i]=q(n.initialValue),[o,r]=q(void 0,{equals:!1}),[u,c]=q(!1),[f,g]=q();let a,d=null,m=null,S=null,v=!1,N=typeof e=="function";E.context&&(S=`${E.context.id}${E.context.count++}`,E.load&&(m=E.load(S)));function y(w,C,T,k){return d===w&&(d=null,m&&w===m&&n.onHydrated&&n.onHydrated(k,{value:C}),m=null,g(a=T),x(C)),C}function x(w){Q(()=>{i(()=>w),c(!1);for(const C of s.keys())C.decrement();s.clear()})}function _(){const w=we,C=l();if(a)throw a;return h&&!h.user&&w&&te(()=>{o(),d&&(w.resolved||s.has(w)||(w.increment(),s.add(w)))}),C}function A(w=!0){if(w&&v)return;v=!1,g(a=void 0);const C=N?e():e;if(C==null||C===!1){y(d,M(l));return}const T=m||M(()=>t(C,{value:l(),refetching:w}));return typeof T!="object"||!("then"in T)?(y(d,T),T):(d=T,v=!0,queueMicrotask(()=>v=!1),Q(()=>{c(!0),r()}),T.then(k=>y(T,k,void 0,C),k=>y(T,k,k)))}return Object.defineProperties(_,{loading:{get(){return u()}},error:{get(){return f()}}}),N?te(()=>A(!1)):A(!1),[_,{refetch:A,mutate:i}]}let G;function Q(e){if(B)return e();let t;const n=B=[];try{t=e()}finally{B=null}return Z(()=>{for(let s=0;s<n.length;s+=1){const l=n[s];if(l.pending!==P){const i=l.pending;l.pending=P,X(l,i)}}},!1),t}function M(e){let t,n=h;return h=null,t=e(),h=n,t}function oe(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}let we;function re(){const e=F;if(this.sources&&(this.state||e)){const t=b;b=null,this.state===L||e?R(this):K(this),b=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function X(e,t,n){if(B)return e.pending===P&&B.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&Z(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l];s&&F.disposed.has(i),(s&&!i.tState||!s&&!i.state)&&(i.pure?b.push(i):I.push(i),i.observers&&ce(i)),s||(i.state=L)}if(b.length>1e6)throw b=[],new Error},!1),t}function R(e){if(!e.fn)return;z(e);const t=p,n=h,s=J;h=p=e,be(e,e.value,s),h=n,p=t}function be(e,t,n){let s;try{s=e.fn(t)}catch(l){ae(l)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?X(e,s):e.value=s,e.updatedAt=n)}function Y(e,t,n,s=L,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==ie&&(p.owned?p.owned.push(i):p.owned=[i]),i}function fe(e){const t=F;if(e.state===0||t)return;if(e.state===D||t)return K(e);if(e.suspense&&M(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<J);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===L||t)R(e);else if(e.state===D||t){const l=b;b=null,K(e,n[0]),b=l}}function Z(e,t){if(b)return e();let n=!1;t||(b=[]),I?n=!0:I=[],J++;try{return e()}catch(s){ae(s)}finally{Se(n)}}function Se(e){b&&(ue(b),b=null),!e&&(I.length?Q(()=>{me(I),I=null}):I=null)}function ue(e){for(let t=0;t<e.length;t++)fe(e[t])}function K(e,t){const n=F;e.state=0;for(let s=0;s<e.sources.length;s+=1){const l=e.sources[s];l.sources&&(l.state===L||n?l!==t&&fe(l):(l.state===D||n)&&K(l,t))}}function ce(e){const t=F;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=D,s.pure?b.push(s):I.push(s),s.observers&&ce(s))}}function z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const i=l.pop(),o=n.observerSlots.pop();s<l.length&&(i.sourceSlots[o]=s,l[s]=i,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ae(e){throw e}const xe=Symbol("fallback");function se(e){for(let t=0;t<e.length;t++)e[t]()}function _e(e,t,n={}){let s=[],l=[],i=[],o=0,r=t.length>1?[]:null;return oe(()=>se(i)),()=>{let u=e()||[],c,f;return M(()=>{let a=u.length,d,m,S,v,N,y,x,_,A;if(a===0)o!==0&&(se(i),i=[],s=[],l=[],o=0,r&&(r=[])),n.fallback&&(s=[xe],l[0]=U(w=>(i[0]=w,n.fallback())),o=1);else if(o===0){for(l=new Array(a),f=0;f<a;f++)s[f]=u[f],l[f]=U(g);o=a}else{for(S=new Array(a),v=new Array(a),r&&(N=new Array(a)),y=0,x=Math.min(o,a);y<x&&s[y]===u[y];y++);for(x=o-1,_=a-1;x>=y&&_>=y&&s[x]===u[_];x--,_--)S[_]=l[x],v[_]=i[x],r&&(N[_]=r[x]);for(d=new Map,m=new Array(_+1),f=_;f>=y;f--)A=u[f],c=d.get(A),m[f]=c===void 0?-1:c,d.set(A,f);for(c=y;c<=x;c++)A=s[c],f=d.get(A),f!==void 0&&f!==-1?(S[f]=l[c],v[f]=i[c],r&&(N[f]=r[c]),f=m[f],d.set(A,f)):i[c]();for(f=y;f<a;f++)f in S?(l[f]=S[f],i[f]=v[f],r&&(r[f]=N[f],r[f](f))):l[f]=U(g);l=l.slice(0,o=a),s=u.slice(0)}return l});function g(a){if(i[f]=a,r){const[d,m]=q(f);return r[f]=m,t(u[f],d)}return t(u[f])}}}function de(e,t){return M(()=>e(t))}function Ae(e){const t="fallback"in e&&{fallback:()=>e.fallback};return ye(_e(()=>e.each,e.children,t||void 0))}function Ce(e,t,n){let s=n.length,l=t.length,i=s,o=0,r=0,u=t[l-1].nextSibling,c=null;for(;o<l||r<i;){if(t[o]===n[r]){o++,r++;continue}for(;t[l-1]===n[i-1];)l--,i--;if(l===o){const f=i<s?r?n[r-1].nextSibling:n[i-r]:u;for(;r<i;)e.insertBefore(n[r++],f)}else if(i===r)for(;o<l;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[r]===t[l-1]){const f=t[--l].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--i],f),t[l]=n[i]}else{if(!c){c=new Map;let g=r;for(;g<i;)c.set(n[g],g++)}const f=c.get(t[o]);if(f!=null)if(r<f&&f<i){let g=o,a=1,d;for(;++g<l&&g<i&&!((d=c.get(t[g]))==null||d!==f+a);)a++;if(a>f-r){const m=t[o];for(;r<f;)e.insertBefore(n[r++],m)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}function ve(e,t,n){let s;return U(l=>{s=l,t===document?e():$(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function ee(e,t,n){const s=document.createElement("template");s.innerHTML=e;let l=s.content.firstChild;return n&&(l=l.firstChild),l}function Ne(e,t,n={}){const s=e.style;if(t==null||typeof t=="string")return s.cssText=t;typeof n=="string"&&(n={});let l,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)l=t[i],l!==n[i]&&(s.setProperty(i,l),n[i]=l);return n}function $(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return V(e,t,s,n);H(l=>V(e,t(),l,n),s)}function V(e,t,n,s,l){for(E.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(E.context)return n;if(i==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=O(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(E.context)return n;n=O(e,n,s)}else{if(i==="function")return H(()=>{let r=t();for(;typeof r=="function";)r=r();n=V(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[];if(W(r,t,l))return H(()=>n=V(e,r,n,s,!0)),()=>n;if(E.context){for(let u=0;u<r.length;u++)if(r[u].parentNode)return n=r}if(r.length===0){if(n=O(e,n,s),o)return n}else Array.isArray(n)?n.length===0?le(e,r,s):Ce(e,n,r):(n&&O(e),le(e,r));n=r}else if(t instanceof Node){if(E.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=O(e,n,s,t);O(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function W(e,t,n){let s=!1;for(let l=0,i=t.length;l<i;l++){let o=t[l],r;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=W(e,o)||s;else if((r=typeof o)=="string")e.push(document.createTextNode(o));else if(r==="function")if(n){for(;typeof o=="function";)o=o();s=W(e,Array.isArray(o)?o:[o])||s}else e.push(o),s=!0;else e.push(document.createTextNode(o.toString()))}return s}function le(e,t,n){for(let s=0,l=t.length;s<l;s++)e.insertBefore(t[s],n)}function O(e,t,n,s){if(n===void 0)return e.textContent="";const l=s||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(l!==r){const u=r.parentNode===e;!i&&!o?u?e.replaceChild(l,r):e.insertBefore(l,n):u&&r.remove()}else i=!0}}else e.insertBefore(l,n);return[l]}async function he(e,t){return fetch("https://api.loquiz.com/v3/"+t,{method:"GET",headers:{accept:"application/json",Authorization:"ApiKey-v1 d64642249a14413ac83fdf40b57192b7be1bfb715a3e74519e279b3ee5eaf426"}})}async function Te(e,t){return he(e,"results/"+t+"/teams")}async function Ee(e,t){return he(e,"games/"+t)}const Ie=ee('<div class="game_cont"><h1 class="game_name"></h1></div>'),$e=ee("<p>Loading teams ...</p>"),Le=ee('<div class="team_cont"><div class="team_name"></div><div class="team_odo">Odometer: </div><div class="team_tot">Total score: </div><div class="team_dur">Game duration: </div></div>');class ke{constructor(t){this.name=t}}class Oe{constructor(t){this.name=t.name,this.totalS=parseInt(t.totalScore),this.color=t.color,this.odometer=parseFloat(t.odometer),this.duration=parseInt(t.finishTime)-parseInt(t.startTime)}}async function Pe(){console.log("Fetching game info");let e=window.localStorage.getItem("auth_key"),t=window.localStorage.getItem("game");return Ee(e,t).then(n=>(n.status!=200,n.json())).then(n=>new ke(n.title))}async function qe(){console.log("Fetching teams");let e=window.localStorage.getItem("auth_key"),t=window.localStorage.getItem("game");return Te(e,t).then(n=>(n.status!=200,n.json())).then(n=>{let l=n.items.map(async i=>new Oe(i));return Promise.all(l)})}const Be=()=>{const[e,{mutate:t,refetch:n}]=ne(Pe),[s,{refetch:l}]=ne(qe);setInterval(()=>n(),.5*60*1e3),setInterval(()=>l(),1*1e3);const i={1:{"background-color":"#e5e7e9"},0:{"background-color":"#d5dbdb"}};return(()=>{const o=Ie.cloneNode(!0),r=o.firstChild;return $(r,()=>e()?.name),$(o,de(Ae,{get each(){return s()?.sort((u,c)=>c.totalS-u.totalS)},get fallback(){return $e.cloneNode(!0)},children:(u,c)=>(()=>{const f=Le.cloneNode(!0),g=f.firstChild,a=g.nextSibling;a.firstChild;const d=a.nextSibling;d.firstChild;const m=d.nextSibling;return m.firstChild,$(g,()=>u.name),$(a,()=>u.odometer,null),$(d,()=>u.totalS,null),$(m,()=>u.duration,null),H(S=>{const v=i[c()%2],N=u.color;return S._v$=Ne(f,v,S._v$),N!==S._v$2&&g.style.setProperty("background-color",S._v$2=N),S},{_v$:void 0,_v$2:void 0}),f})()}),null),o})()};ve(()=>de(Be,{}),document.getElementById("root"));