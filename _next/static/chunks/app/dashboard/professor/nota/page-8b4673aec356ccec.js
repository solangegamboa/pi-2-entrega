(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{6045:function(e,a,r){Promise.resolve().then(r.bind(r,8248))},9361:function(e,a,r){"use strict";r.d(a,{Z:function(){return l}});var t=r(9268),n=r(9524);function l(e){let{tipo:a,items:r,headers:l,handleDelete:s}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(n.Z,{children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:l.map((e,a)=>(0,t.jsx)("th",{children:e},a))})}),(0,t.jsx)("tbody",{children:r.map(e=>"aula"===a?(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.turma}),(0,t.jsx)("td",{children:e.dataAula}),(0,t.jsx)("td",{children:e.anotacao}),(0,t.jsx)("td",{children:(0,t.jsx)("button",{value:e.id,onClick:s,children:"Apagar"})})]},e.id):"aula_estudante"===a?(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.disciplina}),(0,t.jsx)("td",{children:e.nome}),(0,t.jsx)("td",{children:e.dataAula}),(0,t.jsx)("td",{children:"online"===e.tipo?(0,t.jsx)("span",{className:"link",children:"Acessar aula"}):e.tipo}),(0,t.jsx)("td",{children:e.local})]},e.id):(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.turma}),(0,t.jsx)("td",{children:e.avaliacao}),(0,t.jsx)("td",{children:e.aluno}),(0,t.jsx)("td",{children:e.nota}),(0,t.jsx)("td",{children:(0,t.jsx)("button",{value:e.id,onClick:s,children:"Apagar"})})]},e.id),r)})]})})}},8248:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return u}});var t=r(9268),n=r(6006),l=r(1435),s=r(5630),i=r(9776),d=r(3749),o=r(6642),c=r(9361);function u(){let[e]=(0,n.useState)(["Turma","Avalia\xe7\xe3o","Aluno","Nota","A\xe7\xe3o"]),[a,r]=(0,n.useState)([{turma:"Turma 1",avaliacao:"Avalia\xe7\xe3o 1",aluno:"Aluno 1",nota:"7.5",id:1},{turma:"Turma 1",avaliacao:"Avalia\xe7\xe3o 1",aluno:"Aluno 2",nota:"8.0",id:2},{turma:"Turma 1",avaliacao:"Avalia\xe7\xe3o 1",aluno:"Aluno 3",nota:"9.0",id:3},{turma:"Turma 1",avaliacao:"Avalia\xe7\xe3o 2",aluno:"Aluno 1",nota:"7.0",id:4}]),[u,x]=(0,n.useState)({variant:"",msg:""}),h=e=>{let t=e.target.value,n=a.filter(e=>e.id!=t);r(n),x({variant:"danger",msg:"Registro Deletado com sucesso"})},m=e=>{e.preventDefault();let t={turma:e.target.turma.value,aluno:e.target.aluno.value,nota:e.target.nota.value,avaliacao:e.target.avaliacao.value,id:a.length+1};e.target.reset(),r([...a,t]),x({variant:"success",msg:"Registro Adicionado com sucesso"})};return(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{children:(0,t.jsx)(i.Z.Item,{href:"/dashboard/professor",children:" Dashboard"})}),(0,t.jsx)("h2",{className:"title",children:"Notas"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Notas Cadastradas"}),(0,t.jsx)(c.Z,{headers:e,items:a,tipo:"notas",handleDelete:h})]}),(0,t.jsxs)("div",{children:[u&&(0,t.jsx)(d.Z,{variant:u.variant,children:u.msg},u.variant),(0,t.jsx)(o.Z,{children:(0,t.jsxs)(o.Z.Item,{eventKey:"0",children:[(0,t.jsx)(o.Z.Header,{children:"Cadastrar Nota"}),(0,t.jsx)(o.Z.Body,{children:(0,t.jsx)(l.Z,{tipo:"cadastro_nota",handleAdd:m})})]})})]})]})}},6642:function(e,a,r){"use strict";r.d(a,{Z:function(){return A}});var t=r(8683),n=r.n(t),l=r(6006),s=r(9581),i=r(5710),d=r(8725);function o(e,a){return Array.isArray(e)?e.includes(a):e===a}let c=l.createContext({});c.displayName="AccordionContext";var u=r(9268);let x=l.forwardRef(({as:e="div",bsPrefix:a,className:r,children:t,eventKey:s,...x},h)=>{let{activeEventKey:m}=(0,l.useContext)(c);return a=(0,i.vE)(a,"accordion-collapse"),(0,u.jsx)(d.Z,{ref:h,in:o(m,s),...x,className:n()(r,a),children:(0,u.jsx)(e,{children:l.Children.only(t)})})});x.displayName="AccordionCollapse";let h=l.createContext({eventKey:""});h.displayName="AccordionItemContext";let m=l.forwardRef(({as:e="div",bsPrefix:a,className:r,onEnter:t,onEntering:s,onEntered:d,onExit:o,onExiting:c,onExited:m,...v},j)=>{a=(0,i.vE)(a,"accordion-body");let{eventKey:f}=(0,l.useContext)(h);return(0,u.jsx)(x,{eventKey:f,onEnter:t,onEntering:s,onEntered:d,onExit:o,onExiting:c,onExited:m,children:(0,u.jsx)(e,{ref:j,...v,className:n()(r,a)})})});m.displayName="AccordionBody";let v=l.forwardRef(({as:e="button",bsPrefix:a,className:r,onClick:t,...s},d)=>{a=(0,i.vE)(a,"accordion-button");let{eventKey:x}=(0,l.useContext)(h),m=function(e,a){let{activeEventKey:r,onSelect:t,alwaysOpen:n}=(0,l.useContext)(c);return l=>{let s=e===r?null:e;n&&(s=Array.isArray(r)?r.includes(e)?r.filter(a=>a!==e):[...r,e]:[e]),null==t||t(s,l),null==a||a(l)}}(x,t),{activeEventKey:v}=(0,l.useContext)(c);return"button"===e&&(s.type="button"),(0,u.jsx)(e,{ref:d,onClick:m,...s,"aria-expanded":Array.isArray(v)?v.includes(x):x===v,className:n()(r,a,!o(v,x)&&"collapsed")})});v.displayName="AccordionButton";let j=l.forwardRef(({as:e="h2",bsPrefix:a,className:r,children:t,onClick:l,...s},d)=>(a=(0,i.vE)(a,"accordion-header"),(0,u.jsx)(e,{ref:d,...s,className:n()(r,a),children:(0,u.jsx)(v,{onClick:l,children:t})})));j.displayName="AccordionHeader";let f=l.forwardRef(({as:e="div",bsPrefix:a,className:r,eventKey:t,...s},d)=>{a=(0,i.vE)(a,"accordion-item");let o=(0,l.useMemo)(()=>({eventKey:t}),[t]);return(0,u.jsx)(h.Provider,{value:o,children:(0,u.jsx)(e,{ref:d,...s,className:n()(r,a)})})});f.displayName="AccordionItem";let p=l.forwardRef((e,a)=>{let{as:r="div",activeKey:t,bsPrefix:d,className:o,onSelect:x,flush:h,alwaysOpen:m,...v}=(0,s.Ch)(e,{activeKey:"onSelect"}),j=(0,i.vE)(d,"accordion"),f=(0,l.useMemo)(()=>({activeEventKey:t,onSelect:x,alwaysOpen:m}),[t,x,m]);return(0,u.jsx)(c.Provider,{value:f,children:(0,u.jsx)(r,{ref:a,...v,className:n()(o,j,h&&`${j}-flush`)})})});p.displayName="Accordion";var A=Object.assign(p,{Button:v,Collapse:x,Item:f,Header:j,Body:m})},3749:function(e,a,r){"use strict";var t=r(8683),n=r.n(t),l=r(6006),s=r(9581),i=r(3152),d=r(2029),o=r(5710),c=r(8468),u=r(5052),x=r(9010),h=r(4378),m=r(9268);let v=(0,x.Z)("h4");v.displayName="DivStyledAsH4";let j=(0,h.Z)("alert-heading",{Component:v}),f=(0,h.Z)("alert-link",{Component:d.Z}),p=l.forwardRef((e,a)=>{let{bsPrefix:r,show:t=!0,closeLabel:l="Close alert",closeVariant:d,className:x,children:h,variant:v="primary",onClose:j,dismissible:f,transition:p=c.Z,...A}=(0,s.Ch)(e,{show:"onClose"}),y=(0,o.vE)(r,"alert"),N=(0,i.Z)(e=>{j&&j(!1,e)}),b=!0===p?c.Z:p,g=(0,m.jsxs)("div",{role:"alert",...b?void 0:A,ref:a,className:n()(x,y,v&&`${y}-${v}`,f&&`${y}-dismissible`),children:[f&&(0,m.jsx)(u.Z,{onClick:N,"aria-label":l,variant:d}),h]});return b?(0,m.jsx)(b,{unmountOnExit:!0,...A,ref:void 0,in:t,children:g}):t?g:null});p.displayName="Alert",a.Z=Object.assign(p,{Link:f,Heading:j})},9776:function(e,a,r){"use strict";r.d(a,{Z:function(){return u}});var t=r(8683),n=r.n(t),l=r(6006),s=r(5710),i=r(2029),d=r(9268);let o=l.forwardRef(({bsPrefix:e,active:a=!1,children:r,className:t,as:l="li",linkAs:o=i.Z,linkProps:c={},href:u,title:x,target:h,...m},v)=>{let j=(0,s.vE)(e,"breadcrumb-item");return(0,d.jsx)(l,{ref:v,...m,className:n()(j,t,{active:a}),"aria-current":a?"page":void 0,children:a?r:(0,d.jsx)(o,{...c,href:u,title:x,target:h,children:r})})});o.displayName="BreadcrumbItem";let c=l.forwardRef(({bsPrefix:e,className:a,listProps:r={},children:t,label:l="breadcrumb",as:i="nav",...o},c)=>{let u=(0,s.vE)(e,"breadcrumb");return(0,d.jsx)(i,{"aria-label":l,className:a,ref:c,...o,children:(0,d.jsx)("ol",{...r,className:n()(u,null==r?void 0:r.className),children:t})})});c.displayName="Breadcrumb";var u=Object.assign(c,{Item:o})},9524:function(e,a,r){"use strict";var t=r(8683),n=r.n(t),l=r(6006),s=r(5710),i=r(9268);let d=l.forwardRef(({bsPrefix:e,className:a,striped:r,bordered:t,borderless:l,hover:d,size:o,variant:c,responsive:u,...x},h)=>{let m=(0,s.vE)(e,"table"),v=n()(a,m,c&&`${m}-${c}`,o&&`${m}-${o}`,r&&`${m}-${"string"==typeof r?`striped-${r}`:"striped"}`,t&&`${m}-bordered`,l&&`${m}-borderless`,d&&`${m}-hover`),j=(0,i.jsx)("table",{...x,className:v,ref:h});if(u){let e=`${m}-responsive`;return"string"==typeof u&&(e=`${e}-${u}`),(0,i.jsx)("div",{className:e,children:j})}return j});a.Z=d}},function(e){e.O(0,[901,527,435,667,139,744],function(){return e(e.s=6045)}),_N_E=e.O()}]);