function w(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(q)}function B(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function st(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function G(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(J(n,e))}function at(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],u=Math.max(n.dirty.length,r.length);for(let l=0;l<u;l+=1)s[l]=n.dirty[l]|r[l];return s}return n.dirty|r}return n.dirty}function dt(t,n,e,i,r,s){if(r){const u=L(n,e,i,s);t.p(u,r)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t){return t??""}let E=!1;function K(){E=!0}function Q(){E=!1}function R(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:R(1,r,x=>n[e[x]].claim_order,o))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const s=[],u=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);l>=c;l--)u.push(n[l]);l--}for(;l>=0;l--)u.push(n[l]);s.reverse(),u.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<u.length;c++){for(;o<s.length&&u[c].claim_order>=s[o].claim_order;)o++;const a=o<s.length?s[o]:null;t.insertBefore(u[c],a)}}function W(t,n){if(E){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function pt(t,n,e){E&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function gt(){return S(" ")}function xt(){return S("")}function bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t){return function(n){return n.preventDefault(),t.call(this,n)}}function wt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){tt(t);const s=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const l=t[u];if(n(l)){const c=e(l);return c===void 0?t.splice(u,1):t[u]=c,r||(t.claim_info.last_index=u),l}}for(let u=t.claim_info.last_index-1;u>=0;u--){const l=t[u];if(n(l)){const c=e(l);return c===void 0?t.splice(u,1):t[u]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function T(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const s=[];for(let u=0;u<r.attributes.length;u++){const l=r.attributes[u];e[l.name]||s.push(l.name)}s.forEach(u=>r.removeAttribute(u))},()=>i(n))}function Et(t,n,e){return T(t,n,e,X)}function vt(t,n,e){return T(t,n,e,Y)}function nt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Nt(t){return nt(t," ")}function jt(t,n){n=""+n,t.data!==n&&(t.data=n)}function St(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function kt(t,n){return new t(n)}let y;function p(t){y=t}function D(){if(!y)throw new Error("Function called outside component initialization");return y}function At(t){D().$$.on_mount.push(t)}function Ct(t){D().$$.after_update.push(t)}const h=[],M=[];let m=[];const O=[],z=Promise.resolve();let N=!1;function F(){N||(N=!0,z.then(H))}function Mt(){return F(),z}function j(t){m.push(t)}const v=new Set;let d=0;function H(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const n=h[d];d++,p(n),et(n.$$)}}catch(n){throw h.length=0,d=0,n}for(p(null),h.length=0,d=0;M.length;)M.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];v.has(e)||(v.add(e),e())}m.length=0}while(h.length);for(;O.length;)O.pop()();N=!1,v.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}function it(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const $=new Set;let _;function Ot(){_={r:0,c:[],p:_}}function qt(){_.r||g(_.c),_=_.p}function rt(t,n){t&&t.i&&($.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Lt(t,n){const e={},i={},r={$$scope:1};let s=t.length;for(;s--;){const u=t[s],l=n[s];if(l){for(const c in u)c in l||(i[c]=1);for(const c in l)r[c]||(e[c]=l[c],r[c]=1);t[s]=l}else for(const c in u)r[c]=1}for(const u in i)u in e||(e[u]=void 0);return e}function Pt(t){return typeof t=="object"&&t!==null?t:{}}function Tt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(n,e),i||j(()=>{const u=t.$$.on_mount.map(q).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...u):g(u),t.$$.on_mount=[]}),s.forEach(j)}function ut(t,n){const e=t.$$;e.fragment!==null&&(it(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(h.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,i,r,s,u,l=[-1]){const c=y;p(t);const o=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};u&&u(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,x,...k)=>{const A=k.length?k[0]:x;return o.ctx&&r(o.ctx[f],o.ctx[f]=A)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](A),a&&lt(t,f)),x}):[],o.update(),a=!0,g(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){K();const f=Z(n.target);o.fragment&&o.fragment.l(f),f.forEach(V)}else o.fragment&&o.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),Q(),H()}p(c)}class Ft{$destroy(){ut(this,1),this.$destroy=w}$on(n,e){if(!B(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{ct as A,ut as B,at as C,W as D,dt as E,ht as F,_t as G,w as H,ft as I,st as J,mt as K,yt as L,I as M,Lt as N,Pt as O,bt as P,g as Q,$t as R,Ft as S,Y as T,vt as U,gt as a,pt as b,Nt as c,Bt as d,xt as e,qt as f,rt as g,V as h,zt as i,Ct as j,X as k,Et as l,Z as m,wt as n,At as o,St as p,S as q,nt as r,ot as s,Mt as t,jt as u,Ot as v,M as w,kt as x,Tt as y,Dt as z};
