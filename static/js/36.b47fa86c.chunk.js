(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1244:function(e,t,a){"use strict";var n=a(3),r=a.n(n),i=a(4),o=a.n(i),c=a(0),s=a.n(c),d=a(2),l=a(8),u=a(89),p=s.a.forwardRef(function(e,t){var a=e.children,n=e.classes,i=e.className,c=e.disableTypography,l=void 0!==c&&c,p=o()(e,["children","classes","className","disableTypography"]);return s.a.createElement("div",r()({className:Object(d.a)(n.root,i),ref:t},p),l?a:s.a.createElement(u.a,{variant:"h6"},a))});t.a=Object(l.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(p)},1245:function(e,t,a){"use strict";var n=a(3),r=a.n(n),i=a(0),o=a.n(i),c=a(8),s=a(89),d=o.a.forwardRef(function(e,t){return o.a.createElement(s.a,r()({component:"p",variant:"body1",color:"textSecondary",ref:t},e))});t.a=Object(c.a)({root:{marginBottom:16}},{name:"MuiDialogContentText"})(d)},1249:function(e,t,a){"use strict";var n=a(33),r=a(50),i=a(200);a(1264);const o="[DEMANDES APP] REQUEST DEMANDES",c="[DEMANDES APP] REMOVE DEMANDES",s="[DEMANDES APP] SET PARAMETRES DATA",d="[DEMANDES APP] CLEAN_UP",l="[DEMANDES APP] GET DEMANDES",u="[DEMANDES APP] SET DEMANDES SEARCH TEXT";function p(){return e=>e({type:d})}function f(e){var t="";e.search.length>0&&e.search.map(e=>e.value&&("created"===e.id?t+="&"+e.id+"[after]="+e.value:t+="&"+e.id+"="+e.value));const a=r.a.get("/api/demande_devis?page=".concat(e.page,"&del=0&statut=false").concat(t,"&order[").concat(e.filter.id,"]=").concat(e.filter.direction));return e=>(e({type:o}),a.then(t=>e({type:l,payload:t.data})))}function m(e){var t="";e.search.length>0&&e.search.map(e=>e.value&&("created"===e.id?t+="&"+e.id+"[after]="+e.value:t+="&"+e.id+"="+e.value));const a=r.a.get("/api/demande_devis?page=".concat(e.page,"&del=0&statut=1").concat(t,"&order[").concat(e.filter.id,"]=").concat(e.filter.direction));return e=>(e({type:o}),a.then(t=>e({type:l,payload:t.data})))}function g(e){var t="";e.search.length>0&&e.search.map(e=>e.value&&("created"===e.id?t+="&"+e.id+"[after]="+e.value:t+="&"+e.id+"="+e.value));const a=r.a.get("/api/demande_devis?page=".concat(e.page,"&del=1").concat(t,"&order[").concat(e.filter.id,"]=").concat(e.filter.direction));return e=>(e({type:o}),a.then(t=>e({type:l,payload:t.data})))}function E(e,t){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o={del:a};return(s,d)=>{return r.a.put("/api/demande_devis/".concat(e.id),o).then(e=>Promise.all([s({type:c}),s(i.b("demandes-devis")),s(!1===a?Object(n.B)({message:"Demande bien recup\xe9r\xe9e!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}):Object(n.B)({message:"Demande bien supprim\xe9e!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>s(!1===a?g(t):f(t))))}}function h(e){return{type:s,parametres:e}}var A=a(39);const P="[DEMANDE APP] REQUEST DEMANDE",v="[DEMANDE APP] GET DEMANDE",D="[DEMANDE APP] REQUEST SAVE",y="[DEMANDE APP] SAVE DEMANDE",b="[DEMANDE APP] SAVE ERROR";function T(e){const t=r.a.get("/api/demande_devis/".concat(e));return e=>(e({type:P}),t.then(t=>{e({type:v,payload:t.data})}).catch(t=>{e({type:b,payload:A.y.parseApiErrors(t)})}))}function O(e,t){const a=r.a.put("/api/demande_devis/".concat(t),e);return e=>(e({type:D}),a.then(t=>(e(Object(n.B)({message:"Demande Modifi\xe9e"})),e(i.b("demandes-devis")),e({type:y,payload:t.data}))).catch(t=>{e({type:b,payload:A.y.parseApiErrors(t)})}))}const S="[DIALOG] OPEN",N="[DIALOG] CLOSE";function C(){return{type:N}}function R(e){return{type:S,options:e}}a.d(t,"e",function(){return o}),a.d(t,"j",function(){return s}),a.d(t,"a",function(){return d}),a.d(t,"c",function(){return l}),a.d(t,"i",function(){return u}),a.d(t,"k",function(){return p}),a.d(t,"o",function(){return f}),a.d(t,"p",function(){return m}),a.d(t,"n",function(){return g}),a.d(t,"s",function(){return E}),a.d(t,"t",function(){return h}),a.d(t,"d",function(){return P}),a.d(t,"b",function(){return v}),a.d(t,"f",function(){return D}),a.d(t,"g",function(){return y}),a.d(t,"h",function(){return b}),a.d(t,"m",function(){return T}),a.d(t,"r",function(){return O}),a.d(t,"l",function(){return C}),a.d(t,"q",function(){return R})},1264:function(e,t,a){"use strict";var n=a(50);const r="[PORTAIL APP] REQUEST_DEMANDE_DEVIS",i="[PORTAIL APP] GET_DEMANDE_DEVIS",o="[PORTAIL APP] REQUEST_ACTUALITE",c="[PORTAIL APP] GET_ACTUALITE",s="[PORTAIL APP] REQUEST_FOCUS_PRODUITS",d="[PORTAIL APP] GET_FOCUS_PRODUITS",l="[PORTAIL APP] REQUEST_CATEGORIES",u="[PORTAIL APP] GET_CATEGORIES",p="[PORTAIL APP] CLEAN_UP_DEVIS",f="[PORTAIL APP] CLEAN_UP_PRODUCT",m="[PORTAIL APP] CLEAN_UP_NEW",g="[PORTAIL APP] CLEAN_UP_NEW";function E(){return e=>e({type:g})}function h(){return e=>e({type:p})}function A(){return e=>e({type:f})}function P(){return e=>e({type:m})}function v(){const e=n.a.get("/api/focus_categories_mobile");return t=>(t({type:l}),e.then(e=>t({type:u,payload:e.data})))}function D(){const e=n.a.get("/api/select_produits?produit[exists]=true");return t=>(t({type:s}),e.then(e=>t({type:d,payload:e.data["hydra:member"]})))}function y(){const e=n.a.get("/api/demande_achats?itemsPerPage=4&statut=1&isPublic=1&order[created]=desc&props[]=id&props[]=reference&props[]=titre&props[]=description&props[]=pays&props[]=ville&props[]=dateExpiration&props[]=created&props[]=slug");return t=>(t({type:r}),e.then(e=>t({type:i,payload:e.data["hydra:member"]})))}function b(){const e=n.a.get("/api/actualites?itemsPerPage=4&isActive=true&order[created]=desc");return t=>(t({type:o}),e.then(e=>t({type:c,payload:e.data["hydra:member"]})))}a.d(t,"k",function(){return r}),a.d(t,"g",function(){return i}),a.d(t,"i",function(){return o}),a.d(t,"e",function(){return c}),a.d(t,"l",function(){return s}),a.d(t,"h",function(){return d}),a.d(t,"j",function(){return l}),a.d(t,"f",function(){return u}),a.d(t,"b",function(){return p}),a.d(t,"d",function(){return f}),a.d(t,"c",function(){return m}),a.d(t,"a",function(){return g}),a.d(t,"m",function(){return E}),a.d(t,"n",function(){return h}),a.d(t,"p",function(){return A}),a.d(t,"o",function(){return P}),a.d(t,"q",function(){return v}),a.d(t,"r",function(){return D}),a.d(t,"t",function(){return y}),a.d(t,"s",function(){return b})},1289:function(e,t,a){"use strict";var n=a(43),r=a(1249),i=a(102);const o={data:[],pageCount:null,loading:!1,searchText:"",parametres:{page:1,search:[],filter:{id:"created",direction:"desc"}},demandesDialog:{props:{open:!1}}};var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.a:return{...o};case r.e:return{...e,loading:!0};case r.c:return{...e,data:t.payload["hydra:member"],pageCount:i.a.hydraPageCount(t.payload),loading:!1};case r.i:return{...e,searchText:t.searchText};case r.j:return{...e,parametres:{page:t.parametres.page,search:t.parametres.search,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}};default:return e}};const s={data:null,error:null,loading:!1,success:!1};var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.d:case r.f:return{...e,loading:!0};case r.b:return{...e,data:t.payload,loading:!1};case r.g:return{...e,loading:!1,success:!0};case r.h:return{...e,error:t.payload,loading:!1,success:!1};default:return e}},l=a(33);const u={state:!1,options:{children:"Hi"}};var p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.f:return{...e,state:!0,options:{...e.options,...t.options}};case l.a:return{...e,state:!1};default:return e}};const f=Object(n.d)({demandesDevis:c,demandeDevis:d,dialog:p});t.a=f},1573:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(39),o=a(136),c=a(1151),s=a(1221),d=a(1140),l=a(1244),u=a(1229),p=a(1245),f=a(1230),m=a(1227),g=a(1204),E=a(71),h=a(1249),A=a(7),P=a(59),v=a.n(P),D=a(102),y=a(365),b=a(1226),T=a(10);const O=Object(b.a)(e=>({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},chip:{marginLeft:e.spacing(1),padding:2,background:"#ef5350",color:"white",fontWeight:"bold",fontSize:"11px",height:20},chip2:{marginLeft:e.spacing(1),padding:2,background:"#4caf50",color:"white",fontWeight:"bold",fontSize:"11px",height:20},chipOrange:{marginLeft:e.spacing(1),padding:2,background:"#ff9800",color:"white",fontWeight:"bold",fontSize:"11px",height:20}}));var S=Object(E.g)(function(e){O();const t=Object(A.b)(),a=Object(A.c)(e=>{let{demandesDevistraitesApp:t}=e;return t.demandesDevis.data}),o=Object(A.c)(e=>{let{demandesDevistraitesApp:t}=e;return t.demandesDevis.loading}),E=Object(A.c)(e=>{let{demandesDevistraitesApp:t}=e;return t.demandesDevis.pageCount}),P=Object(A.c)(e=>{let{demandesDevistraitesApp:t}=e;return t.demandesDevis.parametres}),b=Object(A.c)(e=>{let{demandesDevistraitesApp:t}=e;return t.demandesDevis.searchText}),[S,N]=Object(n.useState)(null),C=T.a.debounce(e=>t(h.t(e)),1e3);return Object(n.useEffect)(()=>{a&&N(function(e,t){const a=Object.keys(e).map(t=>e[t]);return 0===t.length?a:D.a.filterArrayByString(a,t)}(a,b))},[a,b]),S?r.a.createElement("div",{className:"w-full flex flex-col"},r.a.createElement(i.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(y.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:(t,a,n)=>({className:"h-64 cursor-pointer",onClick:(t,n)=>{a&&e.history.push("/demandes_devis/"+a.original.id)}}),getTheadProps:(e,t,a)=>({className:"h-64"}),data:S,columns:[{Header:"Fournisseur",className:"font-bold",accessor:"fournisseur",filterable:!0,Cell:e=>e.original.fournisseur?e.original.fournisseur.societe:""},{Header:"Produit r\xe9f.",className:"font-bold",accessor:"produit.reference",filterable:!0,Cell:e=>e.original.produit?e.original.produit.reference:""},{Header:"Quantit\xe9",accessor:"quantity",filterable:!0,Cell:e=>e.original.quantity?e.original.quantity:""},{Header:"Nom Contact",accessor:"contact",filterable:!0,Cell:e=>e.original.contact?e.original.contact:""},{Header:"Soci\xe9t\xe9",accessor:"societe",filterable:!0,Cell:e=>e.original.societe?e.original.societe:""},{Header:"T\xe9l\xe9phone",accessor:"phone",filterable:!0,Cell:e=>e.original.phone?e.original.phone:""},{Header:"Email",accessor:"email",filterable:!0,Cell:e=>e.original.email?e.original.email:""},{Header:"Adresse",accessor:"adresse",filterable:!0,Cell:e=>e.original.adresse?e.original.adresse:""},{Header:"Message",accessor:"message",filterable:!0,Cell:e=>T.a.truncate(e.original.message,{length:36,separator:" "})},{Header:"Date de cr\xe9ation",accessor:"created",filterable:!0,Cell:e=>v()(e.original.created).format("DD/MM/YYYY HH:mm"),Filter:e=>{let{filter:t,onChange:a}=e;return r.a.createElement(c.a,{onChange:e=>a(e.target.value),style:{width:"100%"},value:t?t.value:"",type:"date",InputLabelProps:{shrink:!0}})}},{Header:"",Cell:e=>r.a.createElement("div",{className:"flex items-center"},r.a.createElement(s.a,{title:"R\xe9afficher"},r.a.createElement(d.a,{className:"text-green text-20",onClick:a=>{a.stopPropagation(),t(h.q({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(u.a,null,r.a.createElement(p.a,{id:"alert-dialog-description"},"Voulez vous vraiment R\xe9afficher cette demande ?")),r.a.createElement(f.a,null,r.a.createElement(m.a,{variant:"contained",onClick:()=>t(h.l()),color:"primary"},"Non"),r.a.createElement(m.a,{onClick:a=>{t(h.s(e.original,P,!1)),t(h.l())},color:"primary",autoFocus:!0},"Oui")))}))}},r.a.createElement(g.a,null,"autorenew"))))}],manual:!0,defaultSortDesc:!0,pages:E,page:P.page-1,defaultPageSize:10,loading:o,showPageSizeOptions:!1,onPageChange:e=>{P.page=e+1,t(h.t(P))},onSortedChange:(e,a,n)=>{P.page=1,P.filter.id=e[0].id,P.filter.direction=e[0].desc?"desc":"asc",t(h.t(P))},onFilteredChange:e=>{P.page=1,P.search=e,C(P)},noDataText:"Aucune demande trouv\xe9e",loadingText:"Chargement...",ofText:"sur"}))):null}),N=a(89);var C=function(e){return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(i.d,{animation:"transition.expandIn",delay:300},r.a.createElement(g.a,{className:"text-32 mr-0 sm:mr-12"},"delete_forever")),r.a.createElement(i.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(N.a,{className:"hidden sm:flex",variant:"h6"},"Demandes de devis supprim\xe9es"))))},R=a(1289),_=a(364);t.default=Object(o.a)("demandesDevistraitesApp",R.a)(function(){const e=Object(A.b)(),t=Object(A.c)(e=>{let{demandesDevistraitesApp:t}=e;return t.demandesDevis.parametres});return Object(n.useEffect)(()=>(e(h.n(t)),()=>{e(h.k())}),[e,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(_.Helmet,null,r.a.createElement("title",null,"Demandes devis supprim\xe9es | Les Achats Industriels"),r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("meta",{name:"googlebot",content:"noindex"})),r.a.createElement(i.o,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(C,null),content:r.a.createElement(S,null),innerScroll:!0}))})}}]);