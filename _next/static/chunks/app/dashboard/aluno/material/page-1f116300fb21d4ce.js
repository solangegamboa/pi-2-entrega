(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[399],{7987:function(e,a,t){Promise.resolve().then(t.bind(t,3729))},3729:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return x}});var r=t(9268),i=t(6006),n=t(5630),l=t(9776),s=t(9524),c=t(5052),d=t(3749),o=t(6642),u=t(1435);function x(){let[e,a]=(0,i.useState)([{id:1,material:"Apostila - Aula 1",data:"05/5/2023",status:"Solicita\xe7\xe3o Atendida",disciplina:"Disciplina 1",cancel:!0},{id:2,material:"Atividade - Aula 1",data:"05/5/2023",status:"Solicita\xe7\xe3o Pendente",disciplina:"Disciplina 2",cancel:!1},{id:3,material:"Livro - Aula 1",data:"05/5/2023",status:"Solicita\xe7\xe3o N\xe3o Atendida",disciplina:"Disciplina 1",cancel:!1}]),[t,x]=(0,i.useState)({variant:"",msg:""}),[h,m]=(0,i.useState)(""),v=t=>{t.preventDefault();let r=new Date,i={id:e.length+1,data:"".concat(r.getDay(),"/").concat(r.getMonth(),"/").concat(r.getFullYear()),status:"Solicita\xe7\xe3o Pendente",disciplina:t.target.disciplina.value,material:"".concat(t.target.tipo.value," - ").concat(t.target.titulo.value),cancel:!1};t.target.reset(),a([...e,i]),x({variant:"success",msg:"Registro Adicionado com sucesso"})},f=t=>{console.log(e),a(e.map(e=>e.id==t.target.value?{...e,cancel:!e.cancel}:e))};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(l.Z.Item,{href:"/dashboard/aluno",children:" Dashboard"})}),(0,r.jsx)("h2",{className:"title",children:"Ambiente de Solicita\xe7\xe3o de Materiais"}),(0,r.jsxs)(s.Z,{striped:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Disciplina"}),(0,r.jsx)("th",{children:"Material"}),(0,r.jsx)("th",{children:"Data"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Cancelar"})]})}),(0,r.jsx)("tbody",{children:e.map((e,a)=>(0,r.jsxs)("tr",{className:e.cancel&&"canceled",children:[(0,r.jsx)("td",{children:e.disciplina}),(0,r.jsx)("td",{children:e.material}),(0,r.jsx)("td",{children:e.data}),(0,r.jsx)("td",{children:e.status}),(0,r.jsx)("td",{children:(0,r.jsx)(c.Z,{onClick:f,value:e.id})})]},a))})]}),t&&(0,r.jsx)(d.Z,{variant:t.variant,children:t.msg},t.variant),(0,r.jsx)(o.Z,{children:(0,r.jsxs)(o.Z.Item,{eventKey:"0",children:[(0,r.jsx)(o.Z.Header,{children:"Nova Solicita\xe7\xe3o"}),(0,r.jsx)(o.Z.Body,{children:(0,r.jsx)(u.Z,{tipo:"solicitacao",handleAdd:v})})]})})]})})}},6642:function(e,a,t){"use strict";t.d(a,{Z:function(){return y}});var r=t(8683),i=t.n(r),n=t(6006),l=t(9581),s=t(5710),c=t(8725);function d(e,a){return Array.isArray(e)?e.includes(a):e===a}let o=n.createContext({});o.displayName="AccordionContext";var u=t(9268);let x=n.forwardRef(({as:e="div",bsPrefix:a,className:t,children:r,eventKey:l,...x},h)=>{let{activeEventKey:m}=(0,n.useContext)(o);return a=(0,s.vE)(a,"accordion-collapse"),(0,u.jsx)(c.Z,{ref:h,in:d(m,l),...x,className:i()(t,a),children:(0,u.jsx)(e,{children:n.Children.only(r)})})});x.displayName="AccordionCollapse";let h=n.createContext({eventKey:""});h.displayName="AccordionItemContext";let m=n.forwardRef(({as:e="div",bsPrefix:a,className:t,onEnter:r,onEntering:l,onEntered:c,onExit:d,onExiting:o,onExited:m,...v},f)=>{a=(0,s.vE)(a,"accordion-body");let{eventKey:j}=(0,n.useContext)(h);return(0,u.jsx)(x,{eventKey:j,onEnter:r,onEntering:l,onEntered:c,onExit:d,onExiting:o,onExited:m,children:(0,u.jsx)(e,{ref:f,...v,className:i()(t,a)})})});m.displayName="AccordionBody";let v=n.forwardRef(({as:e="button",bsPrefix:a,className:t,onClick:r,...l},c)=>{a=(0,s.vE)(a,"accordion-button");let{eventKey:x}=(0,n.useContext)(h),m=function(e,a){let{activeEventKey:t,onSelect:r,alwaysOpen:i}=(0,n.useContext)(o);return n=>{let l=e===t?null:e;i&&(l=Array.isArray(t)?t.includes(e)?t.filter(a=>a!==e):[...t,e]:[e]),null==r||r(l,n),null==a||a(n)}}(x,r),{activeEventKey:v}=(0,n.useContext)(o);return"button"===e&&(l.type="button"),(0,u.jsx)(e,{ref:c,onClick:m,...l,"aria-expanded":Array.isArray(v)?v.includes(x):x===v,className:i()(t,a,!d(v,x)&&"collapsed")})});v.displayName="AccordionButton";let f=n.forwardRef(({as:e="h2",bsPrefix:a,className:t,children:r,onClick:n,...l},c)=>(a=(0,s.vE)(a,"accordion-header"),(0,u.jsx)(e,{ref:c,...l,className:i()(t,a),children:(0,u.jsx)(v,{onClick:n,children:r})})));f.displayName="AccordionHeader";let j=n.forwardRef(({as:e="div",bsPrefix:a,className:t,eventKey:r,...l},c)=>{a=(0,s.vE)(a,"accordion-item");let d=(0,n.useMemo)(()=>({eventKey:r}),[r]);return(0,u.jsx)(h.Provider,{value:d,children:(0,u.jsx)(e,{ref:c,...l,className:i()(t,a)})})});j.displayName="AccordionItem";let p=n.forwardRef((e,a)=>{let{as:t="div",activeKey:r,bsPrefix:c,className:d,onSelect:x,flush:h,alwaysOpen:m,...v}=(0,l.Ch)(e,{activeKey:"onSelect"}),f=(0,s.vE)(c,"accordion"),j=(0,n.useMemo)(()=>({activeEventKey:r,onSelect:x,alwaysOpen:m}),[r,x,m]);return(0,u.jsx)(o.Provider,{value:j,children:(0,u.jsx)(t,{ref:a,...v,className:i()(d,f,h&&`${f}-flush`)})})});p.displayName="Accordion";var y=Object.assign(p,{Button:v,Collapse:x,Item:j,Header:f,Body:m})},3749:function(e,a,t){"use strict";var r=t(8683),i=t.n(r),n=t(6006),l=t(9581),s=t(3152),c=t(2029),d=t(5710),o=t(8468),u=t(5052),x=t(9010),h=t(4378),m=t(9268);let v=(0,x.Z)("h4");v.displayName="DivStyledAsH4";let f=(0,h.Z)("alert-heading",{Component:v}),j=(0,h.Z)("alert-link",{Component:c.Z}),p=n.forwardRef((e,a)=>{let{bsPrefix:t,show:r=!0,closeLabel:n="Close alert",closeVariant:c,className:x,children:h,variant:v="primary",onClose:f,dismissible:j,transition:p=o.Z,...y}=(0,l.Ch)(e,{show:"onClose"}),N=(0,d.vE)(t,"alert"),b=(0,s.Z)(e=>{f&&f(!1,e)}),A=!0===p?o.Z:p,g=(0,m.jsxs)("div",{role:"alert",...A?void 0:y,ref:a,className:i()(x,N,v&&`${N}-${v}`,j&&`${N}-dismissible`),children:[j&&(0,m.jsx)(u.Z,{onClick:b,"aria-label":n,variant:c}),h]});return A?(0,m.jsx)(A,{unmountOnExit:!0,...y,ref:void 0,in:r,children:g}):r?g:null});p.displayName="Alert",a.Z=Object.assign(p,{Link:j,Heading:f})},9776:function(e,a,t){"use strict";t.d(a,{Z:function(){return u}});var r=t(8683),i=t.n(r),n=t(6006),l=t(5710),s=t(2029),c=t(9268);let d=n.forwardRef(({bsPrefix:e,active:a=!1,children:t,className:r,as:n="li",linkAs:d=s.Z,linkProps:o={},href:u,title:x,target:h,...m},v)=>{let f=(0,l.vE)(e,"breadcrumb-item");return(0,c.jsx)(n,{ref:v,...m,className:i()(f,r,{active:a}),"aria-current":a?"page":void 0,children:a?t:(0,c.jsx)(d,{...o,href:u,title:x,target:h,children:t})})});d.displayName="BreadcrumbItem";let o=n.forwardRef(({bsPrefix:e,className:a,listProps:t={},children:r,label:n="breadcrumb",as:s="nav",...d},o)=>{let u=(0,l.vE)(e,"breadcrumb");return(0,c.jsx)(s,{"aria-label":n,className:a,ref:o,...d,children:(0,c.jsx)("ol",{...t,className:i()(u,null==t?void 0:t.className),children:r})})});o.displayName="Breadcrumb";var u=Object.assign(o,{Item:d})},9524:function(e,a,t){"use strict";var r=t(8683),i=t.n(r),n=t(6006),l=t(5710),s=t(9268);let c=n.forwardRef(({bsPrefix:e,className:a,striped:t,bordered:r,borderless:n,hover:c,size:d,variant:o,responsive:u,...x},h)=>{let m=(0,l.vE)(e,"table"),v=i()(a,m,o&&`${m}-${o}`,d&&`${m}-${d}`,t&&`${m}-${"string"==typeof t?`striped-${t}`:"striped"}`,r&&`${m}-bordered`,n&&`${m}-borderless`,c&&`${m}-hover`),f=(0,s.jsx)("table",{...x,className:v,ref:h});if(u){let e=`${m}-responsive`;return"string"==typeof u&&(e=`${e}-${u}`),(0,s.jsx)("div",{className:e,children:f})}return f});a.Z=c}},function(e){e.O(0,[901,527,435,667,139,744],function(){return e(e.s=7987)}),_N_E=e.O()}]);