(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[810],{5041:function(e,t,r){"use strict";r.d(t,{FT:function(){return s}});var n=r(6006),a=r(9268);let i=["as","disabled"];function s({tagName:e,disabled:t,href:r,target:n,rel:a,role:i,onClick:s,tabIndex:o=0,type:l}){e||(e=null!=r||null!=n||null!=a?"a":"button");let u={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},u];let c=n=>{var a;if(!t&&("a"!==e||(a=r)&&"#"!==a.trim())||n.preventDefault(),t){n.stopPropagation();return}null==s||s(n)},d=e=>{" "===e.key&&(e.preventDefault(),c(e))};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:t?void 0:o,href:r,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:c,onKeyDown:d},u]}let o=n.forwardRef((e,t)=>{let{as:r,disabled:n}=e,o=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,i),[l,{tagName:u}]=s(Object.assign({tagName:r,disabled:n},o));return(0,a.jsx)(u,Object.assign({},o,l,{ref:t}))});o.displayName="Button",t.ZP=o},8683:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var s=a.apply(null,r);s&&e.push(s)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(r=(function(){return a}).apply(t,[]))&&(e.exports=r)}()},4243:function(e,t,r){Promise.resolve().then(r.bind(r,9041))},6687:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(9268),a=r(9362),i=r(8683),s=r.n(i),o=r(6006),l=r(5710),u=r(4378),c=r(9010);let d=o.forwardRef(({bsPrefix:e,className:t,variant:r,as:a="img",...i},o)=>{let u=(0,l.vE)(e,"card-img");return(0,n.jsx)(a,{ref:o,className:s()(r?`${u}-${r}`:u,t),...i})});d.displayName="CardImg";var f=r(2269);let p=o.forwardRef(({bsPrefix:e,className:t,as:r="div",...a},i)=>{let u=(0,l.vE)(e,"card-header"),c=(0,o.useMemo)(()=>({cardHeaderBsPrefix:u}),[u]);return(0,n.jsx)(f.Z.Provider,{value:c,children:(0,n.jsx)(r,{ref:i,...a,className:s()(t,u)})})});p.displayName="CardHeader";let v=(0,c.Z)("h5"),m=(0,c.Z)("h6"),x=(0,u.Z)("card-body"),g=(0,u.Z)("card-title",{Component:v}),y=(0,u.Z)("card-subtitle",{Component:m}),h=(0,u.Z)("card-link",{Component:"a"}),b=(0,u.Z)("card-text",{Component:"p"}),j=(0,u.Z)("card-footer"),N=(0,u.Z)("card-img-overlay"),C=o.forwardRef(({bsPrefix:e,className:t,bg:r,text:a,border:i,body:o=!1,children:u,as:c="div",...d},f)=>{let p=(0,l.vE)(e,"card");return(0,n.jsx)(c,{ref:f,...d,className:s()(t,p,r&&`bg-${r}`,a&&`text-${a}`,i&&`border-${i}`),children:o?(0,n.jsx)(x,{children:u}):u})});C.displayName="Card";var Z=Object.assign(C,{Img:d,Title:g,Subtitle:y,Body:x,Link:h,Text:b,Header:p,Footer:j,ImgOverlay:N});r(1995);var _=r(6008),w=function(e){let t=(0,_.useRouter)();return(0,n.jsxs)(Z,{style:{width:"18rem"},className:"cards",id:e.id,children:[(0,n.jsx)(Z.Img,{variant:"top",src:e.image}),(0,n.jsxs)(Z.Body,{children:[(0,n.jsx)(Z.Title,{children:e.title}),(0,n.jsx)(Z.Text,{children:e.text}),(0,n.jsx)(a.Z,{variant:"primary",onClick:()=>t.push("".concat(e.slug)),children:"Acessar"})]})]})}},9041:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(9268);r(6006);var a=r(5630),i=r(1571),s=r(6687);function o(){return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)("h2",{className:"title",children:"\xc1rea do Fornecedor"}),(0,n.jsx)(i.Z,{children:[{title:"Material",text:"\xc1rea para cadastrar material",image:"https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",slug:"/dashboard/fornecedor/material"}].map((e,t)=>(0,n.jsx)(s.Z,{title:e.title,text:e.text,image:e.image,slug:e.slug,id:"card-"+t},t))})]})}},1995:function(){},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:u,ref:c,props:i,_owner:o.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},9268:function(e,t,r){"use strict";e.exports=r(3177)},6008:function(e,t,r){e.exports=r(167)},9362:function(e,t,r){"use strict";var n=r(8683),a=r.n(n),i=r(6006),s=r(5041),o=r(5710),l=r(9268);let u=i.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:n,active:i=!1,disabled:u=!1,className:c,...d},f)=>{let p=(0,o.vE)(t,"btn"),[v,{tagName:m}]=(0,s.FT)({tagName:e,disabled:u,...d});return(0,l.jsx)(m,{...v,...d,ref:f,disabled:u,className:a()(c,p,i&&"active",r&&`${p}-${r}`,n&&`${p}-${n}`,d.href&&u&&"disabled")})});u.displayName="Button",t.Z=u},1571:function(e,t,r){"use strict";var n=r(4378);t.Z=(0,n.Z)("card-group")},2269:function(e,t,r){"use strict";var n=r(6006);let a=n.createContext(null);a.displayName="CardHeaderContext",t.Z=a},5630:function(e,t,r){"use strict";var n=r(8683),a=r.n(n),i=r(6006),s=r(5710),o=r(9268);let l=i.forwardRef(({bsPrefix:e,fluid:t=!1,as:r="div",className:n,...i},l)=>{let u=(0,s.vE)(e,"container"),c="string"==typeof t?`-${t}`:"-fluid";return(0,o.jsx)(r,{ref:l,...i,className:a()(n,t?`${u}${c}`:u)})});l.displayName="Container",t.Z=l},5710:function(e,t,r){"use strict";r.d(t,{pi:function(){return l},vE:function(){return o},zG:function(){return u}});var n=r(6006);r(9268);let a=n.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:i,Provider:s}=a;function o(e,t){let{prefixes:r}=(0,n.useContext)(a);return e||r[t]||t}function l(){let{breakpoints:e}=(0,n.useContext)(a);return e}function u(){let{minBreakpoint:e}=(0,n.useContext)(a);return e}},4378:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(8683),a=r.n(n),i=/-(.)/g,s=r(6006),o=r(5710),l=r(9268);let u=e=>e[0].toUpperCase()+e.replace(i,function(e,t){return t.toUpperCase()}).slice(1);function c(e,{displayName:t=u(e),Component:r,defaultProps:n}={}){let i=s.forwardRef(({className:t,bsPrefix:i,as:s=r||"div",...u},c)=>{let d={...n,...u},f=(0,o.vE)(i,e);return(0,l.jsx)(s,{ref:c,className:a()(t,f),...d})});return i.displayName=t,i}},9010:function(e,t,r){"use strict";var n=r(6006),a=r(8683),i=r.n(a),s=r(9268);t.Z=e=>n.forwardRef((t,r)=>(0,s.jsx)("div",{...t,ref:r,className:i()(t.className,e)}))}},function(e){e.O(0,[667,139,744],function(){return e(e.s=4243)}),_N_E=e.O()}]);