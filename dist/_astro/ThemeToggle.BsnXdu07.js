import{c,j as t}from"./createLucideIcon.DFqhWoCB.js";import{r as a}from"./index.DK-fsZOb.js";/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],m=c("moon",n);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],h=c("sun",d);function i(){const[e,o]=a.useState(!1);return a.useEffect(()=>{const s=localStorage.getItem("theme"),r=window.matchMedia("(prefers-color-scheme: dark)").matches;o(s==="dark"||!s&&r)},[]),a.useEffect(()=>{document.documentElement.classList.toggle("dark",e),localStorage.setItem("theme",e?"dark":"light")},[e]),t.jsx("button",{type:"button",onClick:()=>o(!e),"aria-label":e?"Switch to light mode":"Switch to dark mode",className:"pixel-button bg-transparent border-4 border-current p-2",children:e?t.jsx(h,{className:"w-5 h-5"}):t.jsx(m,{className:"w-5 h-5"})})}export{i as default};
