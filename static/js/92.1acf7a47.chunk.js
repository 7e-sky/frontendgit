(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1266:function(e,t,a){"use strict";var n=a(50);const r="[ABONNEMENTS FRS APP] REQUEST ABONNEMENTS",l="[ABONNEMENTS FRS APP] SET PARAMETRES DATA",c="[ABONNEMENTS FRS APP] GET ABONNEMENTS",o="[ABONNEMENTS FRS APP] SET ABONNEMENTS SEARCH TEXT",s="[ABONNEMENTS FRS APP] CLEAN_UP";function i(){return e=>e({type:s})}function d(e){const t=n.a.get("/api/fournisseurs/".concat(e,"/abonnements?itemsPerPage=1&order[expired]=desc"));return e=>(e({type:r}),t.then(t=>e({type:c,payload:t.data})))}a(33),a(10);const u="[ABONNEMENT FRS APP] REQUEST ABONNEMENT",m="[ABONNEMENT FRS APP] GET ABONNEMENT",f="[ABONNEMENT FRS APP] GET SOUS_SECTEURS",E="[ABONNEMENT FRS APP] REQUEST OFFRES",p="[ABONNEMENT FRS APP] GET OFFRES",g="[ABONNEMENT FRS APP] REQUEST SAVE",N="[ABONNEMENT FRS APP] SAVE ABONNEMENT",h="[ABONNEMENT FRS APP] GET_PAIEMENT",b="[ABONNEMENT FRS APP] CLEAN_UP_FRS",S="[ABONNEMENT FRS APP] GET_DUREE",A="[ABONNEMENT FRS APP] REQUEST_FOURNISSEURS",T="[ABONNEMENT FRS APP] GET_FOURNISSEURS",x="[ABONNEMENT FRS APP] REQUEST_FOURNISSEUR",O="[ABONNEMENT FRS APP] GET_FOURNISSEUR";function P(e){const t=n.a.get("/api/abonnements/".concat(e));return e=>(e({type:u}),t.then(t=>e({type:m,payload:t.data})))}const y="[COMMANDES AB FRS APP] REQUEST COMMANDES",R="[COMMANDES AB FRS APP] GET COMMANDES",v="[COMMANDES AB FRS APP] SET COMMANDES SEARCH TEXT";function M(e){const t=n.a.get("/api/fournisseurs/".concat(e,"/demande_abonnements?itemsPerPage=1&statut=false&order[created]=desc"));return e=>(e({type:y}),t.then(t=>e({type:R,payload:t.data})))}a.d(t,"m",function(){return r}),a.d(t,"w",function(){return l}),a.d(t,"d",function(){return c}),a.d(t,"u",function(){return o}),a.d(t,"a",function(){return s}),a.d(t,"x",function(){return i}),a.d(t,"z",function(){return d}),a.d(t,"l",function(){return u}),a.d(t,"c",function(){return m}),a.d(t,"k",function(){return f}),a.d(t,"q",function(){return E}),a.d(t,"i",function(){return p}),a.d(t,"r",function(){return g}),a.d(t,"s",function(){return N}),a.d(t,"t",function(){return"[ABONNEMENT FRS APP] SAVE ERROR"}),a.d(t,"j",function(){return h}),a.d(t,"a",function(){}),a.d(t,"b",function(){return b}),a.d(t,"f",function(){return S}),a.d(t,"p",function(){return A}),a.d(t,"h",function(){return T}),a.d(t,"o",function(){return x}),a.d(t,"g",function(){return O}),a.d(t,"y",function(){return P}),a.d(t,"n",function(){return y}),a.d(t,"w",function(){}),a.d(t,"e",function(){return R}),a.d(t,"v",function(){return v}),a.d(t,"A",function(){return M})},1340:function(e,t,a){"use strict";var n=a(43),r=a(1266),l=a(102);const c={data:[],pageCount:null,loading:!1,searchText:"",parametres:{page:1,reference:"",filter:{id:"created",direction:"desc"}}};var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.a:return{...c};case r.m:return{...e,loading:!0};case r.d:return{...e,data:t.payload["hydra:member"],pageCount:l.a.hydraPageCount(t.payload),loading:!1};case r.u:return{...e,searchText:t.searchText};case r.w:return{...e,parametres:{page:t.parametres.page,reference:t.parametres.reference,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}};default:return e}};const s={data:null,offres:null,sousSecteurs:null,error:null,loading:!1,loadingSS:!1,success:!1,paiements:null,durees:null,loadingFournisseurs:!1,fournisseurs:null,fournisseur:null};var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.l:case r.q:case r.r:return{...e,loading:!0,loadingSS:!0};case r.p:case r.o:return{...e,loadingFournisseurs:!0};case r.h:return{...e,fournisseurs:t.payload,loadingFournisseurs:!1};case r.g:return{...e,fournisseur:t.payload,loadingFournisseurs:!1};case r.j:return{...e,paiements:t.payload};case r.f:return{...e,durees:t.payload};case r.s:return{...e,loading:!1,success:!0};case r.a:return{...s};case r.b:return{...e,fournisseur:null};case r.c:return{...e,data:t.payload,loading:!1};case r.k:return{...e,sousSecteurs:t.payload,loadingSS:!1};case r.i:return{...e,offres:t.payload,loading:!1};case r.t:return{...e,error:t.payload,loading:!1};default:return e}},d=a(33);const u={state:!1,options:{children:"Hi"}};var m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.f:return{...e,state:!0,options:{...e.options,...t.options}};case d.a:return{...e,state:!1};default:return e}};const f={data:[],pageCount:null,loading:!1,searchText:"",parametres:{page:1,reference:"",filter:{id:"created",direction:"desc"}}};var E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.n:return{...e,loading:!0};case r.e:return{...e,data:t.payload["hydra:member"],pageCount:l.a.hydraPageCount(t.payload),loading:!1};case r.v:return{...e,searchText:t.searchText};case r.w:return{...e,parametres:{page:t.parametres.page,reference:t.parametres.reference,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}};default:return e}};const p=Object(n.d)({abonnements:o,abonnement:i,commandes:E,dialog:m});t.a=p},1569:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(39),c=a(136),o=a(89),s=a(1160),i=a(1221),d=a(1140),u=a(1204),m=a(71),f=a(7),E=a(59),p=a.n(E),g=a(102),N=a(365),h=a(1226),b=a(10);const S=Object(h.a)(e=>({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},chip:{marginLeft:e.spacing(1),background:"#ef5350",color:"white",fontWeight:"bold",fontSize:"11px"},chip2:{marginLeft:e.spacing(1),background:"#4caf50",color:"white",fontWeight:"bold",fontSize:"11px"},chipOrange:{marginLeft:e.spacing(1),background:"#ff9800",color:"white",fontWeight:"bold",fontSize:"11px"}}));var A=Object(m.g)(function(e){const t=S(),a=Object(f.c)(e=>{let{abonnementFrsApp:t}=e;return t.abonnements.data}),c=Object(f.c)(e=>{let{abonnementFrsApp:t}=e;return t.abonnements.loading}),m=Object(f.c)(e=>{let{abonnementFrsApp:t}=e;return t.abonnements.searchText}),[E,h]=Object(n.useState)(null);return Object(n.useEffect)(()=>{a&&h(function(e,t){const a=Object.keys(e).map(t=>e[t]);return 0===t.length?a:g.a.filterArrayByString(a,t)}(a,m))},[a,m]),E?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{variant:"h6",className:"mb-16"}," Abonnement actuel"),r.a.createElement(l.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(N.b,{className:"-striped -highlight sm:rounded-16 overflow-hidden",getTrProps:(e,t,a)=>({className:"h-64"}),getTheadProps:(e,t,a)=>({className:"h-64 font-bold"}),data:E,columns:[{Header:"Offre",className:"font-bold",sortable:!1,id:"offre",accessor:e=>e.offre.name},{Header:"Activit\xe9s",accessor:"sousSecteurs.name",className:"text-center",sortable:!1,filterable:!1,Cell:e=>b.a.truncate(b.a.join(b.a.map(e.original.sousSecteurs,"name"),", "),{length:150,separator:" "})},{Header:"Date de cr\xe9ation",className:"text-center",accessor:"created",sortable:!1,filterable:!1,Cell:e=>p()(e.original.created).format("DD/MM/YYYY")},{Header:"Date de renouvellement",className:"text-center",sortable:!1,accessor:"expired",filterable:!1,Cell:e=>e.original.expired&&p()(e.original.expired).format("DD/MM/YYYY")},{Header:"Statut",sortable:!1,filterable:!1,Cell:e=>r.a.createElement("div",{className:"flex items-center"},!1===e.original.statut?e.original.expired&&void 0!==e.original.expired?p()(e.original.expired)>=p()()?r.a.createElement(s.a,{className:t.chip,label:"Annul\xe9e"}):r.a.createElement(s.a,{className:t.chip,label:"Expir\xe9"}):r.a.createElement(s.a,{className:t.chipOrange,label:"En attente"}):p()(e.original.expired)>=p()()?r.a.createElement(s.a,{className:t.chip2,label:"En cours"}):r.a.createElement(s.a,{className:t.chip,label:"Expir\xe9"}))},{Header:"",Cell:t=>r.a.createElement("div",{className:"flex items-center"},r.a.createElement(i.a,{title:"D\xe9tails"},r.a.createElement(d.a,{onClick:()=>{e.history.push("/abonnement/"+t.original.id)},className:"text-teal text-20"},r.a.createElement(u.a,null,"remove_red_eye"))),!0===t.original.statut&&p()(t.original.expired).diff(p()(),"month",!0)<=1&&r.a.createElement(i.a,{title:"Renouveler"},r.a.createElement(d.a,{onClick:()=>{e.history.push("/renouveler/"+t.original.id)},className:"text-green text-20"},r.a.createElement(u.a,null,"autorenew"))))}],showPagination:!1,defaultPageSize:1,loading:c,showPageSizeOptions:!1,noDataText:"Pas d'abonnement trouv\xe9",loadingText:"Chargement...",ofText:"sur"}))):null}),T=a(1227),x=a(16);var O=function(e){return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(l.d,{animation:"transition.expandIn",delay:300},r.a.createElement(u.a,{className:"text-32 mr-0 sm:mr-12"},"cloud")),r.a.createElement(l.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(o.a,{className:"hidden sm:flex",variant:"h6"},"Abonnements"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"}),r.a.createElement(l.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(T.a,{component:x.a,to:"/offres/commande/new",className:"whitespace-no-wrap",variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex"},"Ajouter nouvelle commande"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},P=a(1340),y=a(1266),R=a(364),v=a(1236),M=a(1219);const F=Object(h.a)(e=>({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},chip:{marginLeft:e.spacing(1),padding:2,background:"#ef5350",color:"white",fontWeight:"bold",fontSize:"11px",height:20},blue:{marginLeft:e.spacing(1),padding:2,background:"#3490dc",color:"white",fontWeight:"bold",fontSize:"11px",height:20},chip2:{marginLeft:e.spacing(1),padding:2,background:"#4caf50",color:"white",fontWeight:"bold",fontSize:"11px",height:20},chipOrange:{marginLeft:e.spacing(1),padding:2,background:"#ff9800",color:"white",fontWeight:"bold",fontSize:"11px",height:20}}));var w=Object(m.g)(function(e){const t=F(),a=Object(f.c)(e=>{let{abonnementFrsApp:t}=e;return t.commandes.data}),c=Object(f.c)(e=>{let{abonnementFrsApp:t}=e;return t.commandes.loading}),m=Object(f.c)(e=>{let{abonnementFrsApp:t}=e;return t.commandes.searchText}),[E,h]=Object(n.useState)(null);return Object(n.useEffect)(()=>{a&&h(function(e,t){const a=Object.keys(e).map(t=>e[t]);return 0===t.length?a:g.a.filterArrayByString(a,t)}(a,m))},[a,m]),c?r.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},r.a.createElement(o.a,{color:"textSecondary",variant:"h5"},"Chargement...")):E?0===E.length?r.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},r.a.createElement(o.a,{color:"textSecondary",variant:"h5"},"Aucune commande en attente !")):r.a.createElement(l.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(N.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:(e,t,a)=>({className:"h-64"}),getTheadProps:(e,t,a)=>({className:"h-64 font-bold"}),data:E,columns:[{Header:"R\xe9f\xe9rence",className:"font-bold",sortable:!1,id:"reference",accessor:e=>e.reference},{Header:"Offre",className:"font-bold",sortable:!1,id:"offre",accessor:e=>e.offre.name},{Header:"Activit\xe9s",accessor:"sousSecteurs.name",sortable:!1,filterable:!1,Cell:e=>b.a.truncate(b.a.join(b.a.map(e.original.sousSecteurs,"name"),", "),{length:25,separator:" "})},{Header:"Dur\xe9e",sortable:!1,filterable:!1,Cell:e=>r.a.createElement("div",{className:"flex items-center"},e.original.duree?e.original.duree.name+" mois":"")},{Header:"Date de cr\xe9ation",accessor:"created",sortable:!1,filterable:!1,Cell:e=>p()(e.original.created).format("DD/MM/YYYY")},{Header:"Statut",sortable:!1,filterable:!1,Cell:e=>r.a.createElement("div",{className:"flex items-center"},!1===e.original.statut?r.a.createElement(s.a,{className:t.chipOrange,label:"En attente"}):r.a.createElement(s.a,{className:t.chip2,label:"Trait\xe9e"}))},{Header:"",sortable:!1,filterable:!1,Cell:e=>r.a.createElement("div",{className:"flex items-center"},!1===e.original.type?r.a.createElement(s.a,{className:t.blue,label:"Nouvelle"}):r.a.createElement(s.a,{className:t.chip2,label:"Renouvellement"}))},{Header:"",width:64,Cell:t=>r.a.createElement("div",{className:"flex items-center"},!1===t.original.statut?r.a.createElement(i.a,{title:"Editer"},r.a.createElement(d.a,{className:"text-orange text-20",onClick:()=>e.history.push("/offres/commande/"+t.original.id)},r.a.createElement(u.a,null,"edit"))):r.a.createElement(i.a,{title:"Editer"},r.a.createElement(d.a,{className:"text-grey text-20"},r.a.createElement(u.a,null,"edit"))))}],showPagination:!1,defaultPageSize:1,loading:c,showPageSizeOptions:!1,noDataText:"Pas de commande trouv\xe9e",loadingText:"Chargement...",ofText:"sur"})):null});t.default=Object(c.a)("abonnementFrsApp",P.a)(function(){const e=Object(f.b)(),t=Object(f.c)(e=>{let{auth:t}=e;return t.user}),[a,c]=Object(n.useState)(0);return Object(n.useEffect)(()=>{t.id&&e(y.z(t.id))},[e,t]),Object(n.useEffect)(()=>{t.id&&e(y.A(t.id))},[e,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.Helmet,null,r.a.createElement("title",null,"Abonnements | Les Achats Industriels"),r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("meta",{name:"googlebot",content:"noindex"})),r.a.createElement(l.o,{classes:{content:"flex flex-col h-full",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(O,null),contentToolbar:r.a.createElement(v.a,{value:a,onChange:function(e,t){c(t)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},r.a.createElement(M.a,{className:"h-64 normal-case",label:"Abonnement"}),r.a.createElement(M.a,{className:"h-64 normal-case",label:"Commande"})),content:r.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl w-full"},0===a&&r.a.createElement(A,null),1===a&&r.a.createElement(w,null)),innerScroll:!0}))})}}]);