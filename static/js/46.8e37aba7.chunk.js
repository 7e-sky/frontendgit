(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1244:function(e,t,a){"use strict";var r=a(3),n=a.n(r),s=a(4),c=a.n(s),i=a(0),l=a.n(i),o=a(2),u=a(8),d=a(89),m=l.a.forwardRef(function(e,t){var a=e.children,r=e.classes,s=e.className,i=e.disableTypography,u=void 0!==i&&i,m=c()(e,["children","classes","className","disableTypography"]);return l.a.createElement("div",n()({className:Object(o.a)(r.root,s),ref:t},m),u?a:l.a.createElement(d.a,{variant:"h6"},a))});t.a=Object(u.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(m)},1245:function(e,t,a){"use strict";var r=a(3),n=a.n(r),s=a(0),c=a.n(s),i=a(8),l=a(89),o=c.a.forwardRef(function(e,t){return c.a.createElement(l.a,n()({component:"p",variant:"body1",color:"textSecondary",ref:t},e))});t.a=Object(i.a)({root:{marginBottom:16}},{name:"MuiDialogContentText"})(o)},1267:function(e,t,a){"use strict";var r=a(50),n=a(33);const s="[SECTEURS APP ADMIN] REQUEST SECTEURS",c="[SECTEURS APP ADMIN] GET SECTEURS",i="[SECTEURS APP ADMIN] SET SECTEURS SEARCH TEXT";function l(e){return{type:i,searchText:e.target.value}}function o(){const e=r.a.get("/api/secteurs?pagination=false&props[]=name&props[]=id&props[]=del&props[]=image");return t=>(t({type:s}),e.then(e=>t({type:c,payload:e.data})))}function u(e){let t={del:!0,name:e.name+"_deleted-"+e.id};return a=>{return a({type:s}),r.a.put("/api/secteurs/".concat(e.id),t).then(e=>Promise.all([a(Object(n.B)({message:"secteur bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>a(o()))).catch(e=>{e.response.data&&e.response.data["hydra:description"]&&a(Object(n.B)({message:e.response.data["hydra:description"],anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))}).then(()=>a(o()))}}var d=a(102),m=a(10);const p="[SECTEUR APP APP] REQUEST SECTEUR",E="[SECTEUR APP APP] GET SECTEUR",f="[SECTEUR APP APP] SAVE ERROR",g="[SECTEUR APP APP] UPDATE SECTEUR",h="[SECTEUR APP APP] REQUEST SAVE_SECTEUR",P="[SECTEUR APP APP] UPLOAD REQUEST",y="[SECTEUR APP APP] UPLOAD ERROR",S="[SECTEUR APP APP] UPLOAD ATTACHEMENT",T="[SECTEUR APP APP] CLEAN_UP";function v(){return e=>e({type:T})}function A(e){const t=r.a.get("/api/secteurs/".concat(e,"&props[]=name&props[]=id&props[]=image&props[]=del"));return e=>(e({type:p}),t.then(t=>{e({type:E,payload:t.data})}))}function b(e,t){return e.image&&(e.image=e.image["@id"]),(a,s)=>{const c=r.a.put(e["@id"],e);return a({type:h}),c.then(e=>Promise.all([a({type:g,payload:e.data}),a(Object(n.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"})),t.push("/parametres/secteurs")])).catch(e=>{a({type:f,payload:d.a.parseApiErrors(e)})})}}function R(e,t){e.image&&(e.image=e.image["@id"]);const a=r.a.post("/api/secteurs",e);return e=>(e({type:h}),a.then(a=>{e(Object(n.B)({message:"Secteur sauvegard\xe9"})),e({type:g,payload:a.data}),t.push("/parametres/secteurs")}).catch(t=>{e({type:f,payload:d.a.parseApiErrors(t)})}))}function O(e){return(t,a)=>{const s=new FormData;s.append("file",e);const c=r.a.post("/api/image_secteur",s,{headers:{"Content-Type":"multipart/form-data"}});return t({type:P}),c.then(e=>Promise.all([e,t({type:S,payload:e.data}),t(Object(n.B)({message:"Image uploaded!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).catch(e=>{t({type:y}),t(Object(n.B)({message:m.a.map(d.a.parseApiErrors(e),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}function x(){return{type:E,payload:{name:"",image:null}}}const C="[DIALOG] OPEN",N="[DIALOG] CLOSE";function U(){return{type:N}}function j(e){return{type:C,options:e}}a.d(t,"f",function(){return s}),a.d(t,"c",function(){return c}),a.d(t,"i",function(){return i}),a.d(t,"d",function(){return"[SECTEURS APP] REMOVE SECTEUR"}),a.d(t,"u",function(){return l}),a.d(t,"p",function(){return o}),a.d(t,"s",function(){return u}),a.d(t,"b",function(){return E}),a.d(t,"g",function(){return f}),a.d(t,"h",function(){return g}),a.d(t,"e",function(){return h}),a.d(t,"l",function(){return P}),a.d(t,"k",function(){return y}),a.d(t,"j",function(){return S}),a.d(t,"a",function(){return T}),a.d(t,"m",function(){return v}),a.d(t,"o",function(){return A}),a.d(t,"v",function(){return b}),a.d(t,"t",function(){return R}),a.d(t,"w",function(){return O}),a.d(t,"q",function(){return x}),a.d(t,"n",function(){return U}),a.d(t,"r",function(){return j})},1346:function(e,t,a){"use strict";var r=a(43),n=a(1267);const s={entities:[],loading:!1,searchText:""};var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.f:return{...e,loading:!0};case n.c:return{...e,entities:t.payload["hydra:member"],loading:!1};case n.i:return{...e,searchText:t.searchText};default:return e}};const i={loadingSS:!1,requestSecteur:!1,error:null,data:null,secteurReqInProgress:!1,image:null};var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.a:return{...e,loadingS:!1,requestSecteur:!1,error:null,data:null,secteurReqInProgress:!1,image:null};case n.d:return{...e,loadingS:!1};case n.e:case n.f:return{...e,loadingS:!0};case n.b:return{...e,data:t.payload,requestSecteur:!1,error:null};case n.h:return{...e,loadingS:!1,error:null};case n.g:return{...e,loadingS:!1,error:t.payload};case n.l:return{...e,secteurReqInProgress:!0};case n.j:return{...e,image:t.payload,secteurReqInProgress:!1};case n.k:return{...e,secteurReqInProgress:!1};default:return e}},o=a(33);const u={state:!1,options:{children:"Hi"}};var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.f:return{...e,state:!0,options:{...e.options,...t.options}};case o.a:return{...e,state:!1};default:return e}};const m=Object(r.d)({secteurs:c,secteur:l,dialog:d});t.a=m},1585:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(39),c=a(136),i=a(1130),l=a(1221),o=a(1140),u=a(1204),d=a(1244),m=a(1229),p=a(1245),E=a(1230),f=a(1227),g=a(71),h=a(7),P=a(365),y=a(1267);var S=Object(g.g)(function(e){const t=Object(h.c)(e=>{let{secteursApp:t}=e;return t.secteurs.entities}),a=Object(h.c)(e=>{let{secteursApp:t}=e;return t.secteurs.loading}),c=Object(h.c)(e=>{let{secteursApp:t}=e;return t.secteurs.searchText}),g=Object(h.b)(),[S,T]=Object(r.useState)(null);return Object(r.useEffect)(()=>{t&&T(function(e,t){const a=Object.keys(e).map(t=>e[t]);return 0===t.length?a:s.y.filterArrayByString(a,t)}(t,c))},[t,c]),S?n.a.createElement(s.d,{animation:"transition.slideUpIn",delay:300},n.a.createElement(P.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:(t,a,r)=>({className:"h-64 cursor-pointer",onClick:(t,r)=>{a&&e.history.push("/parametres/secteurs/"+a.original.id)}}),getTheadProps:(e,t,a)=>({className:"h-64 font-bold"}),data:S,columns:[{Header:"",Cell:e=>e.original.image?n.a.createElement(i.a,{className:"mr-8",alt:e.original.firstName,src:s.G+e.original.image.url}):n.a.createElement(i.a,{className:"mr-8",alt:e.original.firstName,src:"assets/images/avatars/images.png"}),className:"justify-center",width:64,sortable:!1},{Header:"Secteur",filterable:!0,accessor:"name"},{Header:"",Cell:e=>n.a.createElement("div",{className:"flex items-center"},n.a.createElement(l.a,{title:"Editer"},n.a.createElement(o.a,{className:"text-teal text-20"},n.a.createElement(u.a,null,"edit"))),n.a.createElement(l.a,{title:"Supprimer"},n.a.createElement(o.a,{className:"text-red text-20",onClick:t=>{t.stopPropagation(),g(y.r({children:n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{id:"alert-dialog-title"},"Suppression"),n.a.createElement(m.a,null,n.a.createElement(p.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),n.a.createElement(E.a,null,n.a.createElement(f.a,{onClick:()=>g(y.n()),color:"primary"},"Non"),n.a.createElement(f.a,{onClick:t=>{g(y.s(e.original)),g(y.n())},color:"primary",autoFocus:!0},"Oui")))}))}},n.a.createElement(u.a,null,"delete"))))}],defaultPageSize:10,loading:a,noDataText:"Aucun secteur trouv\xe9",loadingText:"Chargement...",ofText:"sur"})):null}),T=a(89),v=a(135),A=a(1139),b=a(1205),R=a(16);var O=function(e){const t=Object(h.b)(),a=Object(h.c)(e=>{let{fuse:t}=e;return t.settings.mainTheme}),r=Object(h.c)(e=>{let{secteursApp:t}=e;return t.secteurs.searchText});return n.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},n.a.createElement("div",{className:"flex items-center"},n.a.createElement(s.d,{animation:"transition.expandIn",delay:300},n.a.createElement(u.a,{className:"text-32 mr-0 sm:mr-12"},"work")),n.a.createElement(s.d,{animation:"transition.slideLeftIn",delay:300},n.a.createElement(T.a,{className:"hidden sm:flex",variant:"h6"},"Gestion des Secteurs"))),n.a.createElement("div",{className:"flex flex-1 items-center justify-center pr-8 sm:px-12"},n.a.createElement(b.a,{theme:a},n.a.createElement(s.d,{animation:"transition.slideLeftIn",delay:300},n.a.createElement(v.a,{className:"flex p-4 items-center w-full max-w-512 px-8 py-4",elevation:1},n.a.createElement(u.a,{className:"mr-8",color:"action"},"search"),n.a.createElement(A.a,{placeholder:"Rechercher",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:r,inputProps:{"aria-label":"Search"},onChange:e=>t(y.u(e))}))))),n.a.createElement(s.d,{animation:"transition.slideRightIn",delay:300},n.a.createElement(f.a,{component:R.a,to:"/parametres/secteurs/new",className:"whitespace-no-wrap",variant:"contained"},n.a.createElement("span",{className:"hidden sm:flex"},"Ajouter nouveau secteur"),n.a.createElement("span",{className:"flex sm:hidden"},"New"))))},x=a(1346),C=a(364);t.default=Object(c.a)("secteursApp",x.a)(function(){const e=Object(h.b)();return Object(r.useEffect)(()=>{e(y.p())},[e]),n.a.createElement(n.a.Fragment,null,n.a.createElement(C.Helmet,null,n.a.createElement("title",null,"Secteurs | Les Achats Industriels"),n.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),n.a.createElement("meta",{name:"googlebot",content:"noindex"})),n.a.createElement(s.o,{classes:{content:"flex flex-col h-full",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:n.a.createElement(O,null),content:n.a.createElement(S,null),innerScroll:!0}))})}}]);