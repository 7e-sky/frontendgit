(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1244:function(e,t,a){"use strict";var n=a(3),r=a.n(n),o=a(4),c=a.n(o),i=a(0),s=a.n(i),l=a(2),u=a(8),d=a(89),p=s.a.forwardRef(function(e,t){var a=e.children,n=e.classes,o=e.className,i=e.disableTypography,u=void 0!==i&&i,p=c()(e,["children","classes","className","disableTypography"]);return s.a.createElement("div",r()({className:Object(l.a)(n.root,o),ref:t},p),u?a:s.a.createElement(d.a,{variant:"h6"},a))});t.a=Object(u.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(p)},1245:function(e,t,a){"use strict";var n=a(3),r=a.n(n),o=a(0),c=a.n(o),i=a(8),s=a(89),l=c.a.forwardRef(function(e,t){return c.a.createElement(s.a,r()({component:"p",variant:"body1",color:"textSecondary",ref:t},e))});t.a=Object(i.a)({root:{marginBottom:16}},{name:"MuiDialogContentText"})(l)},1279:function(e,t,a){"use strict";var n=a(33),r=a(50),o=a(200);const c="[CONTACTS FOURNISSEUR APP] REQUEST CONTACTS",i="[CONTACTS FOURNISSEUR APP] REMOVE CONTACTS",s="[CONTACTS FOURNISSEUR APP] SET PARAMETRES DATA",l="[CONTACTS FOURNISSEUR APP] GET CONTACTS",u="[CONTACTS FOURNISSEUR APP] SET CONTACTS SEARCH TEXT";function d(e){var t="";e.search.length>0&&e.search.map(e=>e.value&&("created"===e.id?t+="&"+e.id+"[after]="+e.value:t+="&"+e.id+"="+e.value));const a=r.a.get("/api/contact_fournisseurs?page=".concat(e.page).concat(t,"&order[").concat(e.filter.id,"]=").concat(e.filter.direction));return e=>(e({type:c}),a.then(t=>e({type:l,payload:t.data})))}function p(e,t){let a={del:!0};return(s,l)=>{const u=r.a.put("/api/contact_fournisseurs/".concat(e.id),a);return s({type:c}),u.then(e=>Promise.all([s({type:i}),s(o.b("message-fournisseur")),s(Object(n.B)({message:"Message bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>s(d(t))))}}function m(e){return{type:s,parametres:e}}var f=a(39);const g="[CONTACT FOURNISSEUR APP] REQUEST CONTACT",h="[CONTACT FOURNISSEUR APP] GET CONTACT",E="[CONTACT FOURNISSEUR APP] REQUEST SAVE",C="[CONTACT FOURNISSEUR APP] SAVE ERROR",O="[CONTACT FOURNISSEUR APP] CLEAN_ERROR",T="[CONTACT FOURNISSEUR APP] CLEAN_UP";function b(){return e=>e({type:O})}function S(e){const t=r.a.get("/api/contact_fournisseurs/".concat(e));return e=>(e({type:g}),t.then(t=>{e({type:h,payload:t.data})}).catch(t=>{e({type:C,payload:f.y.parseApiErrors(t)})}))}function N(e,t,a){const c=r.a.put("/api/contact_fournisseurs/".concat(t),e);return e=>(e({type:E}),c.then(t=>{e(o.b("message-fournisseur")),e(Object(n.B)({message:"Message Modifi\xe9"})),a.push("/contact_fournisseur")}).catch(t=>{e({type:C,payload:f.y.parseApiErrors(t)})}))}const A="[DIALOG] OPEN",v="[DIALOG] CLOSE";function y(){return{type:v}}function R(e){return{type:A,options:e}}a.d(t,"f",function(){return c}),a.d(t,"j",function(){return s}),a.d(t,"d",function(){return l}),a.d(t,"i",function(){return u}),a.d(t,"n",function(){return d}),a.d(t,"q",function(){return p}),a.d(t,"r",function(){return m}),a.d(t,"e",function(){return g}),a.d(t,"c",function(){return h}),a.d(t,"g",function(){return E}),a.d(t,"h",function(){return C}),a.d(t,"a",function(){return O}),a.d(t,"b",function(){return T}),a.d(t,"k",function(){return b}),a.d(t,"m",function(){return S}),a.d(t,"p",function(){return N}),a.d(t,"l",function(){return y}),a.d(t,"o",function(){return R})},1343:function(e,t,a){"use strict";var n=a(43),r=a(1279);const o={data:null,error:null,loading:!1};var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.b:return{...o};case r.a:return{...e,error:null};case r.e:case r.g:return{...e,loading:!0};case r.c:return{...e,data:t.payload,loading:!1};case r.h:return{...e,error:t.payload,loading:!1};default:return e}},i=a(102);const s={data:[],pageCount:null,loading:!1,searchText:"",parametres:{page:1,search:[],filter:{id:"created",direction:"desc"}}};var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.f:return{...e,loading:!0};case r.d:return{...e,data:t.payload["hydra:member"],pageCount:i.a.hydraPageCount(t.payload),loading:!1};case r.i:return{...e,searchText:t.searchText};case r.j:return{...e,parametres:{page:t.parametres.page,search:t.parametres.search,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}};default:return e}},u=a(33);const d={state:!1,options:{children:"Hi"}};var p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.f:return{...e,state:!0,options:{...e.options,...t.options}};case u.a:return{...e,state:!1};default:return e}};const m=Object(n.d)({contactsFournisseur:l,contactFournisseur:c,dialog:p});t.a=m},1575:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(39),c=a(136),i=a(1151),s=a(1160),l=a(1221),u=a(1140),d=a(1244),p=a(1229),m=a(1245),f=a(1230),g=a(1227),h=a(1204),E=a(71),C=a(1279),O=a(7),T=a(59),b=a.n(T),S=a(102),N=a(365),A=a(1226),v=a(10);const y=Object(A.a)(e=>({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},chip:{marginLeft:e.spacing(1),padding:2,background:"#ef5350",color:"white",fontWeight:"bold",fontSize:"11px",height:20},chip2:{marginLeft:e.spacing(1),padding:2,background:"#4caf50",color:"white",fontWeight:"bold",fontSize:"11px",height:20},chipOrange:{marginLeft:e.spacing(1),padding:2,background:"#ff9800",color:"white",fontWeight:"bold",fontSize:"11px",height:20}}));var R=Object(E.g)(function(e){const t=y(),a=Object(O.b)(),c=Object(O.c)(e=>{let{contactsFournisseurApp:t}=e;return t.contactsFournisseur.data}),E=Object(O.c)(e=>{let{contactsFournisseurApp:t}=e;return t.contactsFournisseur.loading}),T=Object(O.c)(e=>{let{contactsFournisseurApp:t}=e;return t.contactsFournisseur.pageCount}),A=Object(O.c)(e=>{let{contactsFournisseurApp:t}=e;return t.contactsFournisseur.parametres}),R=Object(O.c)(e=>{let{contactsFournisseurApp:t}=e;return t.contactsFournisseur.searchText}),[P,x]=Object(n.useState)(null);if(Object(n.useEffect)(()=>{c&&x(function(e,t){const a=Object.keys(e).map(t=>e[t]);return 0===t.length?a:S.a.filterArrayByString(a,t)}(c,R))},[c,R]),!P)return null;const F=v.a.debounce(e=>a(C.r(e)),1e3);return r.a.createElement("div",{className:"w-full flex flex-col"},r.a.createElement(o.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(N.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:(t,a,n)=>({className:"h-64 cursor-pointer",onClick:(t,n)=>{a&&e.history.push("/contact_fournisseur/"+a.original.id)}}),getTheadProps:(e,t,a)=>({className:"h-64"}),data:P,columns:[{Header:"Fournisseur",className:"font-bold",accessor:"fournisseur.societe",filterable:!0,Cell:e=>e.original.fournisseur?e.original.fournisseur.societe:""},{Header:"Nom Contact",accessor:"contact",filterable:!0,Cell:e=>e.original.contact?e.original.contact:""},{Header:"T\xe9l\xe9phone",accessor:"phone",filterable:!0,Cell:e=>e.original.phone?e.original.phone:""},{Header:"Email",accessor:"email",filterable:!0,Cell:e=>e.original.email?e.original.email:""},{Header:"Message",accessor:"message",filterable:!0,Cell:e=>v.a.truncate(e.original.message,{length:36,separator:" "})},{Header:"Date de cr\xe9ation",accessor:"created",filterable:!0,Cell:e=>b()(e.original.created).format("DD/MM/YYYY HH:mm"),Filter:e=>{let{filter:t,onChange:a}=e;return r.a.createElement(i.a,{onChange:e=>a(e.target.value),style:{width:"100%"},value:t?t.value:"",type:"date",InputLabelProps:{shrink:!0}})}},{Header:"Statut",accessor:"statut",filterable:!0,Cell:e=>r.a.createElement("div",{className:"flex items-center"},!1===e.original.statut?r.a.createElement(s.a,{className:t.chipOrange,label:"En attente"}):r.a.createElement(s.a,{className:t.chip2,label:"Valid\xe9"})),Filter:e=>{let{filter:t,onChange:a}=e;return r.a.createElement("select",{onChange:e=>a(e.target.value),style:{width:"100%"},value:t?t.value:""},r.a.createElement("option",{value:""},"Tous"),r.a.createElement("option",{value:"true"},"Valid\xe9"),r.a.createElement("option",{value:"false"},"En attente"))}},{Header:"",Cell:e=>r.a.createElement("div",{className:"flex items-center"},1!==e.original.statut?r.a.createElement(l.a,{title:"Supprimer"},r.a.createElement(u.a,{className:"text-red text-20",onClick:t=>{t.stopPropagation(),a(C.o({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(p.a,null,r.a.createElement(m.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),r.a.createElement(f.a,null,r.a.createElement(g.a,{onClick:()=>a(C.l()),color:"primary"},"Non"),r.a.createElement(g.a,{onClick:t=>{a(C.q(e.original,A)),a(C.l())},color:"primary",autoFocus:!0},"Oui")))}))}},r.a.createElement(h.a,null,"delete"))):r.a.createElement(l.a,{title:"Interdit!"},r.a.createElement(u.a,{className:"text-20 cursor-not-allowed disable",onClick:e=>{e.stopPropagation()}},r.a.createElement(h.a,null,"delete"))),r.a.createElement(l.a,{title:"D\xe9tails"},r.a.createElement(u.a,{className:"text-teal text-20"},r.a.createElement(h.a,null,"remove_red_eye"))))}],manual:!0,pages:T,page:A.page-1,defaultPageSize:10,loading:E,showPageSizeOptions:!1,onPageChange:e=>{A.page=e+1,a(C.r(A))},onSortedChange:(e,t,n)=>{A.page=1,A.filter.id=e[0].id,A.filter.direction=e[0].desc?"desc":"asc",a(C.r(A))},onFilteredChange:e=>{A.page=1,A.search=e,F(A)},noDataText:"Aucun message trouv\xe9",loadingText:"Chargement...",ofText:"sur"})))}),P=a(89);var x=function(e){return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(o.d,{animation:"transition.expandIn",delay:300},r.a.createElement(h.a,{className:"text-32 mr-0 sm:mr-12"},"email")),r.a.createElement(o.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(P.a,{className:"hidden sm:flex",variant:"h6"},"Validation des messages envoy\xe9s aux Fournisseurs"))))},F=a(1343),U=a(364);t.default=Object(c.a)("contactsFournisseurApp",F.a)(function(){const e=Object(O.b)(),t=Object(O.c)(e=>{let{contactsFournisseurApp:t}=e;return t.contactsFournisseur.parametres});return Object(n.useEffect)(()=>{e(C.n(t))},[e,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(U.Helmet,null,r.a.createElement("title",null,"Messages fournisseurs | Les Achats Industriels"),r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("meta",{name:"googlebot",content:"noindex"})),r.a.createElement(o.o,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(x,null),content:r.a.createElement(R,null),innerScroll:!0}))})}}]);