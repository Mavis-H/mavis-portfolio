import{n as c,s as h}from"./scheduler.740bcf2d.js";const e=[];function d(o,a=c){let i;const n=new Set;function r(t){if(h(o,t)&&(o=t,i)){const b=!e.length;for(const s of n)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(i=a(r,f)||c),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var l;const g=((l=globalThis.__sveltekit_lyghy6)==null?void 0:l.base)??"/mavis-portfolio";var u;const y=((u=globalThis.__sveltekit_lyghy6)==null?void 0:u.assets)??g;export{y as a,g as b,d as w};
