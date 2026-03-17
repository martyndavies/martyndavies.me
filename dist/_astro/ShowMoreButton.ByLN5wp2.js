import{c as s,j as e}from"./createLucideIcon.DFqhWoCB.js";import"./index.DK-fsZOb.js";/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],i=s("chevron-down",a);/**
 * @license lucide-react v0.500.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],m=s("chevron-up",l);function d({total:n,shown:o,onToggle:c,isExpanded:t}){const r=n-o;return n<=o?null:e.jsx("div",{className:"text-center mt-8",children:e.jsx("button",{type:"button",onClick:c,className:"pixel-button variant-outline","aria-label":t?"Show less":`Show ${r} more`,children:t?e.jsxs(e.Fragment,{children:["Show Less ",e.jsx(m,{className:"w-4 h-4"})]}):e.jsxs(e.Fragment,{children:["See More (",r," more) ",e.jsx(i,{className:"w-4 h-4"})]})})})}export{d as default};
