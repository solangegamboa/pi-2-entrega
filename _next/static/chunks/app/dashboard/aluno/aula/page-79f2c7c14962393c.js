(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[452],{3858:function(e,n,i){"use strict";var t=i(6006);n.Z=function(e){var n=(0,t.useRef)(e);return(0,t.useEffect)(function(){n.current=e},[e]),n}},3152:function(e,n,i){"use strict";i.d(n,{Z:function(){return r}});var t=i(6006),a=i(3858);function r(e){var n=(0,a.Z)(e);return(0,t.useCallback)(function(){return n.current&&n.current.apply(n,arguments)},[n])}},5224:function(e,n,i){"use strict";var t=i(6006),a=void 0!==i.g&&i.g.navigator&&"ReactNative"===i.g.navigator.product;n.Z="undefined"!=typeof document||a?t.useLayoutEffect:t.useEffect},8196:function(e,n,i){"use strict";i.d(n,{Z:function(){return a}});var t=i(6006);function a(){var e=(0,t.useRef)(!0),n=(0,t.useRef)(function(){return e.current});return(0,t.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),n.current}},3419:function(e,n,i){"use strict";i.d(n,{Z:function(){return a}});var t=i(6006);function a(e){var n=(0,t.useRef)(null);return(0,t.useEffect)(function(){n.current=e}),n.current}},2029:function(e,n,i){"use strict";i.d(n,{Z:function(){return u}});var t=i(6006);i(3858);var a=i(3152);i(8196),i(3419),i(5224),new WeakMap;var r=i(5041),s=i(9268);let l=["onKeyDown"],c=t.forwardRef((e,n)=>{var i;let{onKeyDown:t}=e,c=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,l),[u]=(0,r.FT)(Object.assign({tagName:"a"},c)),d=(0,a.Z)(e=>{u.onKeyDown(e),null==t||t(e)});return(i=c.href)&&"#"!==i.trim()&&"button"!==c.role?(0,s.jsx)("a",Object.assign({ref:n},c,{onKeyDown:t})):(0,s.jsx)("a",Object.assign({ref:n},c,u,{onKeyDown:d}))});c.displayName="Anchor";var u=c},221:function(e,n,i){Promise.resolve().then(i.bind(i,7725))},9646:function(e,n,i){"use strict";i.d(n,{Z:function(){return u}});var t=i(9268),a=i(8683),r=i.n(a),s=i(6006),l=i(5710);let c=s.forwardRef(({bsPrefix:e,className:n,striped:i,bordered:a,borderless:s,hover:c,size:u,variant:d,responsive:o,...f},h)=>{let p=(0,l.vE)(e,"table"),j=r()(n,p,d&&`${p}-${d}`,u&&`${p}-${u}`,i&&`${p}-${"string"==typeof i?`striped-${i}`:"striped"}`,a&&`${p}-bordered`,s&&`${p}-borderless`,c&&`${p}-hover`),x=(0,t.jsx)("table",{...f,className:j,ref:h});if(o){let e=`${p}-responsive`;return"string"==typeof o&&(e=`${e}-${o}`),(0,t.jsx)("div",{className:e,children:x})}return x});function u(e){let{tipo:n,items:i,headers:a,handleDelete:r}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(c,{children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:a.map((e,n)=>(0,t.jsx)("th",{children:e},n))})}),(0,t.jsx)("tbody",{children:i.map(e=>"aula"===n?(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.turma}),(0,t.jsx)("td",{children:e.dataAula}),(0,t.jsx)("td",{children:e.anotacao}),(0,t.jsx)("td",{children:(0,t.jsx)("button",{value:e.id,onClick:r,children:"Apagar"})})]},e.id):"aula_estudante"===n?(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.disciplina}),(0,t.jsx)("td",{children:e.nome}),(0,t.jsx)("td",{children:e.dataAula}),(0,t.jsx)("td",{children:"online"===e.tipo?(0,t.jsx)("span",{className:"link",children:"Acessar aula"}):e.tipo}),(0,t.jsx)("td",{children:e.local})]},e.id):(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.turma}),(0,t.jsx)("td",{children:e.avaliacao}),(0,t.jsx)("td",{children:e.aluno}),(0,t.jsx)("td",{children:e.nota}),(0,t.jsx)("td",{children:(0,t.jsx)("button",{value:e.id,onClick:r,children:"Apagar"})})]},e.id),i)})]})})}},7725:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return u}});var t=i(9268),a=i(6006),r=i(5630),s=i(9776),l=i(4725),c=i(9646);function u(){let[e]=(0,a.useState)(["Disciplina","Nome","Data da Aula","Link","Local"]),[n,i]=(0,a.useState)([{disciplina:"Disciplina 1",nome:"Conteudo 1",dataAula:"20/05/2023 19:30",link:"https://teste.com/assistir_aula",local:"online",tipo:"online"},{disciplina:"Disciplina 1",nome:"Conteudo 2",dataAula:"27/05/2023 19:30",link:"Presencial",local:"Rua da Faculdade, 123 - Sala 10",tipo:"presencial"},{disciplina:"Disciplina 1",nome:"Conteudo 3",dataAula:"28/05/2023 19:30",link:"https://teste.com/assistir_aula",local:"online",tipo:"online"},{disciplina:"Disciplina 2",nome:"Conteudo 4",dataAula:"20/06/2023 19:30",link:"https://teste.com/assistir_aula",local:"online",tipo:"online"},{disciplina:"Disciplina 2",nome:"Conteudo 5",dataAula:"28/06/2023 19:30",link:"https://teste.com/assistir_aula",local:"online",tipo:"online"},{disciplina:"Disciplina 2",nome:"Conteudo 6",dataAula:"27/06/2023 19:30",link:"Presencial",local:"Rua da Faculdade, 123 - Sala 13",tipo:"presencial"}]),[u,d]=(0,a.useState)(""),o=()=>{};return(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(s.Z,{children:(0,t.jsx)(s.Z.Item,{href:"/dashboard/aluno",children:" Dashboard"})}),(0,t.jsx)("h2",{className:"title",children:"Aulas"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Aulas Cadastradas"}),(0,t.jsxs)("div",{className:"respiro",children:[(0,t.jsx)(l.Z.Label,{children:(0,t.jsx)("strong",{children:"Disciplina"})}),(0,t.jsxs)(l.Z.Select,{onChange:e=>d(e.currentTarget.value),children:[(0,t.jsx)("option",{value:"",children:"Escolha a Disciplina"}),(0,t.jsx)("option",{value:"Disciplina 1",children:"Disciplina 1"}),(0,t.jsx)("option",{value:"Disciplina 2",children:"Disciplina 2"})]})]}),(0,t.jsx)(c.Z,{headers:e,items:""!==u?n.filter(e=>e.disciplina==u):n,tipo:"aula_estudante",handleDelete:o})]})]})}i(3702)},3702:function(){},9776:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var t=i(8683),a=i.n(t),r=i(6006),s=i(5710),l=i(2029),c=i(9268);let u=r.forwardRef(({bsPrefix:e,active:n=!1,children:i,className:t,as:r="li",linkAs:u=l.Z,linkProps:d={},href:o,title:f,target:h,...p},j)=>{let x=(0,s.vE)(e,"breadcrumb-item");return(0,c.jsx)(r,{ref:j,...p,className:a()(x,t,{active:n}),"aria-current":n?"page":void 0,children:n?i:(0,c.jsx)(u,{...d,href:o,title:f,target:h,children:i})})});u.displayName="BreadcrumbItem";let d=r.forwardRef(({bsPrefix:e,className:n,listProps:i={},children:t,label:r="breadcrumb",as:l="nav",...u},d)=>{let o=(0,s.vE)(e,"breadcrumb");return(0,c.jsx)(l,{"aria-label":r,className:n,ref:d,...u,children:(0,c.jsx)("ol",{...i,className:a()(o,null==i?void 0:i.className),children:t})})});d.displayName="Breadcrumb";var o=Object.assign(d,{Item:u})}},function(e){e.O(0,[901,667,139,744],function(){return e(e.s=221)}),_N_E=e.O()}]);