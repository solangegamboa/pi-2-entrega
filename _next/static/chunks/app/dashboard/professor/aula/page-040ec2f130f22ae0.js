(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{1810:function(e,a,r){Promise.resolve().then(r.bind(r,9528))},9646:function(e,a,r){"use strict";r.d(a,{Z:function(){return c}});var t=r(9268),n=r(8683),s=r.n(n),l=r(6006),d=r(5710);let i=l.forwardRef(({bsPrefix:e,className:a,striped:r,bordered:n,borderless:l,hover:i,size:c,variant:o,responsive:u,...x},h)=>{let m=(0,d.vE)(e,"table"),f=s()(a,m,o&&`${m}-${o}`,c&&`${m}-${c}`,r&&`${m}-${"string"==typeof r?`striped-${r}`:"striped"}`,n&&`${m}-bordered`,l&&`${m}-borderless`,i&&`${m}-hover`),j=(0,t.jsx)("table",{...x,className:f,ref:h});if(u){let e=`${m}-responsive`;return"string"==typeof u&&(e=`${e}-${u}`),(0,t.jsx)("div",{className:e,children:j})}return j});function c(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i,{children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:e.headers.map((e,a)=>(0,t.jsx)("th",{children:e},a))})}),(0,t.jsx)("tbody",{children:e.items.map((a,r)=>{var n;return"aula"===(n=e.tipo)?(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:a.turma}),(0,t.jsx)("td",{children:a.dataAula}),(0,t.jsx)("td",{children:a.anotacao}),(0,t.jsxs)("td",{children:[(0,t.jsx)("button",{children:"Apagar"})," "]})]},r):"aula_estudante"===n?(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:a.disciplina}),(0,t.jsx)("td",{children:a.nome}),(0,t.jsx)("td",{children:a.dataAula}),(0,t.jsx)("td",{children:"online"===a.tipo?(0,t.jsx)("span",{className:"link",children:"Acessar aula"}):a.tipo}),(0,t.jsx)("td",{children:a.local})]},r):void(a.turma,a.avaliacao,a.aluno,a.nota)},e)})]})})}},9528:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return c}});var t=r(9268);r(6006);var n=r(5630),s=r(9776),l=r(6642),d=r(9646),i=r(1435);function c(){let e={headers:["Turma","Data da Aula","Anota\xe7\xf5es","A\xe7\xf5es"],items:[{turma:"Turma 1",dataAula:"20/05/2023 19:30",anotacao:"Anota\xe7\xf5es 1"},{turma:"Turma 1",dataAula:"27/05/2023 19:30",anotacao:"Anota\xe7\xf5es 2"},{turma:"Turma 1",dataAula:"03/06/2023 19:30",anotacao:"Anota\xe7\xf5es 3"},{turma:"Turma 1",dataAula:"10/06/2023 19:30",anotacao:"Anota\xe7\xf5es 1"}]};return(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(s.Z,{children:(0,t.jsx)(s.Z.Item,{href:"/dashboard/professor",children:" Dashboard"})}),(0,t.jsx)("h2",{className:"title",children:"Aulas"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Aulas Cadastradas"}),(0,t.jsx)(d.Z,{headers:e.headers,items:e.items,tipo:"aula"})]}),(0,t.jsx)("div",{children:(0,t.jsx)(l.Z,{children:(0,t.jsxs)(l.Z.Item,{eventKey:"0",children:[(0,t.jsx)(l.Z.Header,{children:"Cadastrar Aula"}),(0,t.jsx)(l.Z.Body,{children:(0,t.jsx)(i.Z,{tipo:"cadastro_aula"})})]})})})]})}},6642:function(e,a,r){"use strict";r.d(a,{Z:function(){return A}});var t=r(8683),n=r.n(t),s=r(6006),l=r(9581),d=r(5710),i=r(8725);function c(e,a){return Array.isArray(e)?e.includes(a):e===a}let o=s.createContext({});o.displayName="AccordionContext";var u=r(9268);let x=s.forwardRef(({as:e="div",bsPrefix:a,className:r,children:t,eventKey:l,...x},h)=>{let{activeEventKey:m}=(0,s.useContext)(o);return a=(0,d.vE)(a,"accordion-collapse"),(0,u.jsx)(i.Z,{ref:h,in:c(m,l),...x,className:n()(r,a),children:(0,u.jsx)(e,{children:s.Children.only(t)})})});x.displayName="AccordionCollapse";let h=s.createContext({eventKey:""});h.displayName="AccordionItemContext";let m=s.forwardRef(({as:e="div",bsPrefix:a,className:r,onEnter:t,onEntering:l,onEntered:i,onExit:c,onExiting:o,onExited:m,...f},j)=>{a=(0,d.vE)(a,"accordion-body");let{eventKey:v}=(0,s.useContext)(h);return(0,u.jsx)(x,{eventKey:v,onEnter:t,onEntering:l,onEntered:i,onExit:c,onExiting:o,onExited:m,children:(0,u.jsx)(e,{ref:j,...f,className:n()(r,a)})})});m.displayName="AccordionBody";let f=s.forwardRef(({as:e="button",bsPrefix:a,className:r,onClick:t,...l},i)=>{a=(0,d.vE)(a,"accordion-button");let{eventKey:x}=(0,s.useContext)(h),m=function(e,a){let{activeEventKey:r,onSelect:t,alwaysOpen:n}=(0,s.useContext)(o);return s=>{let l=e===r?null:e;n&&(l=Array.isArray(r)?r.includes(e)?r.filter(a=>a!==e):[...r,e]:[e]),null==t||t(l,s),null==a||a(s)}}(x,t),{activeEventKey:f}=(0,s.useContext)(o);return"button"===e&&(l.type="button"),(0,u.jsx)(e,{ref:i,onClick:m,...l,"aria-expanded":Array.isArray(f)?f.includes(x):x===f,className:n()(r,a,!c(f,x)&&"collapsed")})});f.displayName="AccordionButton";let j=s.forwardRef(({as:e="h2",bsPrefix:a,className:r,children:t,onClick:s,...l},i)=>(a=(0,d.vE)(a,"accordion-header"),(0,u.jsx)(e,{ref:i,...l,className:n()(r,a),children:(0,u.jsx)(f,{onClick:s,children:t})})));j.displayName="AccordionHeader";let v=s.forwardRef(({as:e="div",bsPrefix:a,className:r,eventKey:t,...l},i)=>{a=(0,d.vE)(a,"accordion-item");let c=(0,s.useMemo)(()=>({eventKey:t}),[t]);return(0,u.jsx)(h.Provider,{value:c,children:(0,u.jsx)(e,{ref:i,...l,className:n()(r,a)})})});v.displayName="AccordionItem";let p=s.forwardRef((e,a)=>{let{as:r="div",activeKey:t,bsPrefix:i,className:c,onSelect:x,flush:h,alwaysOpen:m,...f}=(0,l.Ch)(e,{activeKey:"onSelect"}),j=(0,d.vE)(i,"accordion"),v=(0,s.useMemo)(()=>({activeEventKey:t,onSelect:x,alwaysOpen:m}),[t,x,m]);return(0,u.jsx)(o.Provider,{value:v,children:(0,u.jsx)(r,{ref:a,...f,className:n()(c,j,h&&`${j}-flush`)})})});p.displayName="Accordion";var A=Object.assign(p,{Button:f,Collapse:x,Item:v,Header:j,Body:m})},9776:function(e,a,r){"use strict";r.d(a,{Z:function(){return u}});var t=r(8683),n=r.n(t),s=r(6006),l=r(5710),d=r(2029),i=r(9268);let c=s.forwardRef(({bsPrefix:e,active:a=!1,children:r,className:t,as:s="li",linkAs:c=d.Z,linkProps:o={},href:u,title:x,target:h,...m},f)=>{let j=(0,l.vE)(e,"breadcrumb-item");return(0,i.jsx)(s,{ref:f,...m,className:n()(j,t,{active:a}),"aria-current":a?"page":void 0,children:a?r:(0,i.jsx)(c,{...o,href:u,title:x,target:h,children:r})})});c.displayName="BreadcrumbItem";let o=s.forwardRef(({bsPrefix:e,className:a,listProps:r={},children:t,label:s="breadcrumb",as:d="nav",...c},o)=>{let u=(0,l.vE)(e,"breadcrumb");return(0,i.jsx)(d,{"aria-label":s,className:a,ref:o,...c,children:(0,i.jsx)("ol",{...r,className:n()(u,null==r?void 0:r.className),children:t})})});o.displayName="Breadcrumb";var u=Object.assign(o,{Item:c})}},function(e){e.O(0,[901,460,435,667,139,744],function(){return e(e.s=1810)}),_N_E=e.O()}]);