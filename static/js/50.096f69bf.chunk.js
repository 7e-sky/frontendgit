(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1244:function(e,t,a){"use strict";var r=a(3),n=a.n(r),c=a(4),i=a.n(c),l=a(0),o=a.n(l),s=a(2),u=a(8),d=a(89),p=o.a.forwardRef(function(e,t){var a=e.children,r=e.classes,c=e.className,l=e.disableTypography,u=void 0!==l&&l,p=i()(e,["children","classes","className","disableTypography"]);return o.a.createElement("div",n()({className:Object(s.a)(r.root,c),ref:t},p),u?a:o.a.createElement(d.a,{variant:"h6"},a))});t.a=Object(u.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(p)},1245:function(e,t,a){"use strict";var r=a(3),n=a.n(r),c=a(0),i=a.n(c),l=a(8),o=a(89),s=i.a.forwardRef(function(e,t){return i.a.createElement(o.a,n()({component:"p",variant:"body1",color:"textSecondary",ref:t},e))});t.a=Object(l.a)({root:{marginBottom:16}},{name:"MuiDialogContentText"})(s)},1257:function(e,t,a){"use strict";var r=a(33),n=a(50);const c="[ACHETEURS ADMIN APP] REQUEST ACHETEURS",i="[ACHETEURS ADMIN APP] SET PARAMETRES DATA",l="[ACHETEURS ADMIN APP] GET ACHETEURS",o="[ACHETEURS ADMIN APP] OPEN NEW ACHETEURS DIALOG",s="[ACHETEURS ADMIN APP] SET ACHETEURS SEARCH TEXT";function u(){return{type:o}}function d(e){var t="";e.search.length>0&&e.search.map(e=>e.value&&("created"===e.id?t+="&"+e.id+"[after]="+e.value:t+="&"+e.id+"="+e.value));const a=n.a.get("/api/acheteurs?page=".concat(e.page).concat(t,"&order[").concat(e.filter.id,"]=").concat(e.filter.direction));return e=>(e({type:c}),a.then(t=>e({type:l,payload:t.data})))}function p(e,t,a){let i={isactif:t};return t=>{return t({type:c}),n.a.put(e["@id"],i).then(e=>Promise.all([t(Object(r.B)({message:"Statut modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>t(d(a))))}}function m(e){return{type:i,parametres:e}}var E=a(102),f=a(10),h=a(200),A=a(59),g=a.n(A);const y="[ACHETEURS ADMIN APP] REQUEST ACHETEUR",v="[ACHETEURS ADMIN APP] GET ACHETEUR",P="[ACHETEURS ADMIN APP] REQUEST ACHETEUR DEMANDES",T="[ACHETEURS ADMIN APP] GET ACHETEUR DEMANDES",R="[ACHETEURS ADMIN APP] REQUEST ACHETEUR BL",C="[ACHETEURS ADMIN APP] GET ACHETEUR BL",D="[ACHETEURS ADMIN APP] GET PAYS",N="[ACHETEURS ADMIN APP] GET VILLES",S="[ACHETEURS ADMIN APP] REQUEST PAYS",H="[ACHETEURS ADMIN APP] REQUEST VILLES",b="[ACHETEURS ADMIN APP] SAVE ERROR",U="[ACHETEURS ADMIN APP] UPDATE ACHETEUR",I="[ACHETEURS ADMIN APP] REQUEST UPDATE_ACHETEUR",O="[ACHETEURS ADMIN APP] GET_SECTEURS",x="[ACHETEURS ADMIN APP] REQUEST_ADD_VILLE",M="[ACHETEURS ADMIN APP] SAVE_ADD_VILLE",j="[ACHETEURS ADMIN APP] SAVE_ERROR_ADD_VILLE",w="[ACHETEURS ADMIN APP] CLEAN_UP_VILLE",L="[ACHETEURS ADMIN APP] UPLOAD AVATAR",_="[ACHETEURS ADMIN APP] UPLOAD REQUEST",Y="[ACHETEURS ADMIN APP] UPLOAD ERROR",B="[ACHETEURS ADMIN APP] SET PARAMETRES DETAIL",k="[ACHETEUR ADMIN APP] CLEAN_UP_ACHETEUR";function V(e){return{type:B,parametres:e}}function G(){return e=>e({type:k})}function z(){return e=>e({type:w})}function q(e){const t=n.a.get("/api/acheteurs/".concat(e));return e=>(e({type:y}),t.then(t=>{e({type:v,payload:t.data})}))}function Q(e){const t=n.a.get("/api/acheteurs/".concat(e,"/blacklistes"));return e=>(e({type:R}),t.then(t=>{e({type:C,payload:t.data})}))}function F(e,t){var a="";t.search.length>0&&t.search.map(function(e,t){e.value&&("created"===e.id||"dateExpiration"===e.id?a+="&"+e.id+"[after]="+e.value:"statut"===e.id?"0"===e.value?a+="&statut=0&dateExpiration[strictly_after]=".concat(g()().format("YYYY-MM-DDTHH:mm:ss")):"1"===e.value?a+="&statut=1&dateExpiration[strictly_after]=".concat(g()().format("YYYY-MM-DDTHH:mm:ss")):"2"===e.value?a+="&statut=2&dateExpiration[strictly_after]=".concat(g()().format("YYYY-MM-DDTHH:mm:ss")):"3"===e.value?a+="&statut=3":"4"===e.value&&(a+="&dateExpiration[strictly_before]=".concat(g()().format("YYYY-MM-DDTHH:mm:ss"))):a+="&"+e.id+"="+e.value)});const r=n.a.get("/api/acheteurs/".concat(e,"/demandes?page=").concat(t.page).concat(a,"&order[").concat(t.filter.id,"]=").concat(t.filter.direction));return e=>(e({type:P}),r.then(t=>{e({type:T,payload:t.data})}))}function J(){const e=n.a.get("/api/pays?pagination=false&props[]=id&props[]=name");return t=>(t({type:S}),e.then(e=>{t({type:D,payload:e.data["hydra:member"]})}))}function W(e){const t=n.a.get("".concat(e,"/villes?pagination=false&props[]=id&props[]=name"));return e=>(e({type:H}),t.then(t=>{e({type:N,payload:t.data["hydra:member"]})}))}function K(e,t,a){let c={name:e,pays:"/api/pays/".concat(t)};const i=n.a.post("/api/villes",c);return e=>(e({type:x}),e({type:I}),i.then(r=>{e(W("/api/pays/".concat(t)));let c={ville:r.data["@id"],autreVille:null};return n.a.put("/api/acheteurs/".concat(a),c).then(t=>{e(h.b("acheteur-admin")),e({type:U,payload:t.data}),e({type:M})})}).catch(t=>{e({type:j}),e(Object(r.B)({message:f.a.map(E.a.parseApiErrors(t),function(e,t){return e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))}))}function X(){const e=n.a.get("/api/secteurs?pagination=false&props[]=id&props[]=name");return t=>e.then(e=>{t({type:O,payload:e.data["hydra:member"]})})}function Z(e,t){let a={...e,ice:"Maroc"!==e.pays.label?null:e.ice,pays:e.pays.value,ville:e.ville.value,secteur:e.secteur.value,codepostal:e.codepostal?parseInt(e.codepostal):null};return null===a.codepostal&&delete a.codepostal,e=>{const c=n.a.put("/api/acheteurs/".concat(t),a);return e({type:I}),c.then(t=>Promise.all([e({type:U,payload:t.data}),e(Object(r.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).catch(t=>{e({type:b,payload:E.a.parseApiErrors(t)})})}}function $(e,t){let a={isactif:t};return t=>{return t({type:I}),n.a.put(e["@id"],a).then(e=>Promise.all([t({type:U,payload:e.data}),t(Object(r.B)({message:"Statut modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]))}}function ee(e,t){return a=>{const c=n.a.put("/api/acheteurs/".concat(t),e);return a({type:I}),c.then(e=>Promise.all([a({type:U,payload:e.data}),a(Object(r.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).catch(e=>{a({type:b,payload:E.a.parseApiErrors(e)})})}}function te(e,t){return a=>{const c=new FormData;c.append("file",e);const i=n.a.post("/api/avatars",c,{headers:{"Content-Type":"multipart/form-data"}});return a({type:_}),i.then(e=>Promise.all([e,a({type:L,payload:e.data}),a(ae({avatar:e.data["@id"]},t))])).catch(e=>{a({type:Y}),a(Object(r.B)({message:f.a.map(E.a.parseApiErrors(e),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}function ae(e,t){return a=>{const c=n.a.put("/api/acheteurs/".concat(t),e);return a({type:I}),c.then(e=>Promise.all([a({type:U,payload:e.data}),a(Object(r.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).catch(e=>{a({type:b,payload:E.a.parseApiErrors(e)})})}}const re="[DIALOG] OPEN",ne="[DIALOG] CLOSE";function ce(){return{type:ne}}function ie(e){return{type:re,options:e}}a.d(t,"l",function(){return c}),a.d(t,"w",function(){return i}),a.d(t,"d",function(){return l}),a.d(t,"j",function(){return o}),a.d(t,"v",function(){return s}),a.d(t,"Q",function(){return u}),a.d(t,"J",function(){return d}),a.d(t,"C",function(){return p}),a.d(t,"R",function(){return m}),a.d(t,"k",function(){return y}),a.d(t,"c",function(){return v}),a.d(t,"n",function(){return P}),a.d(t,"f",function(){return T}),a.d(t,"m",function(){return R}),a.d(t,"e",function(){return C}),a.d(t,"g",function(){return D}),a.d(t,"i",function(){return N}),a.d(t,"p",function(){return S}),a.d(t,"r",function(){return H}),a.d(t,"t",function(){return b}),a.d(t,"y",function(){return U}),a.d(t,"q",function(){return I}),a.d(t,"h",function(){return O}),a.d(t,"o",function(){return x}),a.d(t,"s",function(){return M}),a.d(t,"u",function(){return j}),a.d(t,"b",function(){return w}),a.d(t,"z",function(){return L}),a.d(t,"B",function(){return _}),a.d(t,"A",function(){return Y}),a.d(t,"x",function(){return B}),a.d(t,"a",function(){return k}),a.d(t,"S",function(){return V}),a.d(t,"E",function(){return G}),a.d(t,"F",function(){return z}),a.d(t,"I",function(){return q}),a.d(t,"K",function(){return Q}),a.d(t,"L",function(){return F}),a.d(t,"M",function(){return J}),a.d(t,"O",function(){return W}),a.d(t,"D",function(){return K}),a.d(t,"N",function(){return X}),a.d(t,"T",function(){return Z}),a.d(t,"H",function(){return $}),a.d(t,"U",function(){return ee}),a.d(t,"V",function(){return te}),a.d(t,"G",function(){return ce}),a.d(t,"P",function(){return ie})},1302:function(e,t,a){"use strict";var r=a(43),n=a(1257),c=a(102);const i={data:[],pageCount:null,loading:!1,searchText:"",acheteursDialog:{type:"new",props:{open:!1},data:null},parametres:{page:1,societe:"",search:[],filter:{id:"created",direction:"desc"}}};var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.l:return{...e,loading:!0};case n.d:return{...e,data:t.payload["hydra:member"],pageCount:c.a.hydraPageCount(t.payload),loading:!1};case n.j:return{...e,acheteursDialog:{type:"new",props:{open:!0},data:null}};case n.v:return{...e,searchText:t.searchText};case n.w:return{...e,parametres:{page:t.parametres.page,societe:t.parametres.societe,search:t.parametres.search,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}};default:return e}};const o={pays:null,secteurs:null,loading:!1,requestAcheteur:!1,villes:null,error:null,data:null,acheteurReqInProgress:!1,avatar:null,acheteur_deleted:null,loadingAddVille:!1,villeAdded:!1,demandes:[],totalItems:0,pageCount:null,loadingDmd:!1,parametres:{page:1,search:[],description:"",filter:{id:"created",direction:"desc"}},blacklistes:[],totalItemsBl:0,loadingBL:!1};var s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.m:return{...e,loadingBL:!0};case n.e:return{...e,totalItemsBl:t.payload["hydra:totalItems"],blacklistes:t.payload["hydra:member"],loadingBL:!1};case n.n:return{...e,loadingDmd:!0};case n.f:return{...e,demandes:t.payload["hydra:member"],totalItems:t.payload["hydra:totalItems"],pageCount:c.a.hydraPageCount(t.payload),loadingDmd:!1};case n.o:return{...e,loadingAddVille:!0};case n.s:return{...e,loadingAddVille:!1,villeAdded:!0};case n.u:return{...e,loadingAddVille:!1};case n.b:return{...e,villeAdded:!1};case n.a:return{...e,pays:null,secteurs:null,loading:!1,requestAcheteur:!1,villes:null,error:null,data:null,acheteurReqInProgress:!1,avatar:null,acheteur_deleted:null};case n.q:case n.p:return{...e,loading:!0};case n.k:return{...e,requestAcheteur:!0};case n.r:return{...e,villes:null};case n.c:return{...e,data:t.payload,requestAcheteur:!1,error:null};case n.h:return{...e,secteurs:t.payload};case n.g:return{...e,pays:t.payload,loading:!1};case n.i:return{...e,villes:[...t.payload,{"@id":"/api/villes/113",name:"Autre"}]};case n.y:return{...e,loading:!1,data:t.payload,error:null};case n.t:return{...e,loading:!1,error:t.payload,success:!1,redirect_success:""};case n.B:return{...e,acheteurReqInProgress:!0};case n.z:return{...e,avatar:t.payload,acheteurReqInProgress:!1};case n.A:return{...e,acheteurReqInProgress:!1};case n.x:return{...e,parametres:{page:t.parametres.page,search:t.parametres.search,description:t.parametres.description,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}};default:return e}},u=a(33);const d={state:!1,options:{children:"Hi"}};var p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.f:return{...e,state:!0,options:{...e.options,...t.options}};case u.a:return{...e,state:!1};default:return e}};const m=Object(r.d)({acheteurs:l,dialog:p,acheteur:s});t.a=m},1588:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(39),i=a(136),l=a(1130),o=a(1151),s=a(1221),u=a(1140),d=a(1244),p=a(1229),m=a(1245),E=a(1230),f=a(1227),h=a(1204),A=a(71),g=a(1257),y=a(7),v=a(59),P=a.n(v),T=a(365),R=a(10);var C=Object(A.g)(function(e){const t=Object(y.b)(),a=Object(y.c)(e=>{let{acheteursAdminApp:t}=e;return t.acheteurs.data}),i=Object(y.c)(e=>{let{acheteursAdminApp:t}=e;return t.acheteurs.loading}),A=Object(y.c)(e=>{let{acheteursAdminApp:t}=e;return t.acheteurs.pageCount}),v=Object(y.c)(e=>{let{acheteursAdminApp:t}=e;return t.acheteurs.parametres}),C=Object(y.c)(e=>{let{acheteursAdminApp:t}=e;return t.acheteurs.searchText}),[D,N]=Object(r.useState)(null);if(Object(r.useEffect)(()=>{a&&N(function(e,t){const a=Object.keys(e).map(t=>e[t]);return 0===t.length?a:c.y.filterArrayByString(a,t)}(a,C))},[a,C]),!D)return null;const S=R.a.debounce(e=>t(g.R(e)),1e3);return n.a.createElement("div",{className:"w-full flex flex-col"},n.a.createElement(c.d,{animation:"transition.slideUpIn",delay:300},n.a.createElement(T.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTheadProps:(e,t,a)=>({className:"h-64"}),data:D,columns:[{Header:"",Cell:e=>e.original.avatar?n.a.createElement(l.a,{className:"mr-8",alt:e.original.firstName,src:c.G+e.original.avatar.url}):n.a.createElement(l.a,{className:"mr-8",alt:e.original.firstName,src:"assets/images/avatars/images.png"}),className:"justify-center",width:64,sortable:!1},{Header:"Soci\xe9t\xe9",accessor:"societe",filterable:!0,getProps:(e,t,a)=>({style:{color:t&&t.original.ville&&113===t.original.ville.id?"orange":null}})},{Header:"Nom",accessor:"lastName",filterable:!0},{Header:"Pr\xe9nom",accessor:"firstName",filterable:!0},{Header:"Email",accessor:"email",filterable:!0},{Header:"T\xe9l\xe9phone",accessor:"phone",filterable:!0},{Header:"Date de cr\xe9ation",accessor:"created",filterable:!0,Cell:e=>P()(e.original.created).format("DD/MM/YYYY HH:mm"),Filter:e=>{let{filter:t,onChange:a}=e;return n.a.createElement(o.a,{onChange:e=>a(e.target.value),style:{width:"100%"},value:t?t.value:"",type:"date",InputLabelProps:{shrink:!0}})}},{Header:"Statut",accessor:"isactif",filterable:!0,Cell:e=>e.original.isactif?n.a.createElement(s.a,{title:"Activ\xe9"},n.a.createElement(u.a,{className:"text-green text-20",onClick:a=>{a.stopPropagation(),t(g.P({children:n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{id:"alert-dialog-title"},"D\xe9sactivation"),n.a.createElement(p.a,null,n.a.createElement(m.a,{id:"alert-dialog-description"},"Voulez vous vraiment d\xe9sactiv\xe9 ce compte ?")),n.a.createElement(E.a,null,n.a.createElement(f.a,{onClick:()=>t(g.G()),variant:"contained",color:"primary"},"Non"),n.a.createElement(f.a,{onClick:a=>{t(g.C(e.original,!1,v)),t(g.G())},color:"primary",variant:"outlined",autoFocus:!0},"Oui")))}))}},n.a.createElement(h.a,null,"check_circle"))):n.a.createElement(s.a,{title:"D\xe9sactiv\xe9"},n.a.createElement(u.a,{className:"text-red text-20",onClick:a=>{a.stopPropagation(),t(g.P({children:n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{id:"alert-dialog-title"},"Activation"),n.a.createElement(p.a,null,n.a.createElement(m.a,{id:"alert-dialog-description"},"Voulez vous vraiment activ\xe9 ce compte ?")),n.a.createElement(E.a,null,n.a.createElement(f.a,{onClick:()=>t(g.G()),variant:"contained",color:"primary"},"Non"),n.a.createElement(f.a,{onClick:a=>{t(g.C(e.original,!0,v)),t(g.G())},color:"primary",variant:"outlined",autoFocus:!0},"Oui")))}))}},n.a.createElement(h.a,null,"remove_circle"))),Filter:e=>{let{filter:t,onChange:a}=e;return n.a.createElement("select",{onChange:e=>a(e.target.value),style:{width:"100%"},value:t?t.value:""},n.a.createElement("option",{value:""},"Tous"),n.a.createElement("option",{value:"true"},"Actif"),n.a.createElement("option",{value:"false"},"Inactif"))}},{Header:"",Cell:t=>n.a.createElement("div",{className:"flex items-center"},n.a.createElement(s.a,{title:"D\xe9tails",onClick:a=>{a.stopPropagation(),e.history.push("/users/acheteur/show/"+t.original.id)}},n.a.createElement(u.a,{className:"text-teal text-20"},n.a.createElement(h.a,null,"remove_red_eye"))),n.a.createElement(s.a,{title:"Editer",onClick:a=>{a.stopPropagation(),e.history.push("/users/acheteurs/"+t.original.id)}},n.a.createElement(u.a,{className:"text-orange text-20"},n.a.createElement(h.a,null,"edit"))))}],manual:!0,pages:A,page:v.page-1,defaultPageSize:10,loading:i,showPageSizeOptions:!1,onPageChange:e=>{v.page=e+1,t(g.R(v))},onSortedChange:(e,a,r)=>{v.page=1,v.filter.id=e[0].id,v.filter.direction=e[0].desc?"desc":"asc",t(g.R(v))},onFilteredChange:e=>{v.page=1,v.search=e,S(v)},noDataText:"No Acheteur found",loadingText:"Chargement...",ofText:"sur"})))}),D=a(89),N=a(135),S=a(1139),H=a(1205);var b=function(e){const t=Object(y.b)(),a=Object(y.c)(e=>{let{fuse:t}=e;return t.settings.mainTheme}),r=Object(y.c)(e=>{let{acheteursAdminApp:t}=e;return t.acheteurs.parametres});return n.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},n.a.createElement("div",{className:"flex items-center"},n.a.createElement(c.d,{animation:"transition.expandIn",delay:300},n.a.createElement(h.a,{className:"text-32 mr-0 sm:mr-12"},"supervisor_account")),n.a.createElement(c.d,{animation:"transition.slideLeftIn",delay:300},n.a.createElement(D.a,{className:"hidden sm:flex",variant:"h6"},"Gestion des acheteurs"))),n.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},n.a.createElement(H.a,{theme:a},n.a.createElement(c.d,{animation:"transition.slideDownIn",delay:300},n.a.createElement(N.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},n.a.createElement(h.a,{className:"mr-8",color:"action"},"search"),n.a.createElement(S.a,{placeholder:"Rechercher",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:r.societe,inputProps:{"aria-label":"Rechercher"},onChange:e=>{r.page=1,r.societe=e.target.value,t(g.R(r))}}))))),n.a.createElement(c.d,{animation:"transition.slideRightIn",delay:300},n.a.createElement(f.a,{onClick:e=>t(g.Q()),className:"whitespace-no-wrap",variant:"contained"},n.a.createElement("span",{className:"hidden sm:flex"},"Ajouter un Acheteur"),n.a.createElement("span",{className:"flex sm:hidden"},"New"))))},U=a(1302);t.default=Object(i.a)("acheteursAdminApp",U.a)(function(){const e=Object(y.b)(),t=Object(y.c)(e=>{let{acheteursAdminApp:t}=e;return t.acheteurs.parametres});return Object(r.useEffect)(()=>{e(g.J(t))},[e,t]),n.a.createElement(c.o,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:n.a.createElement(b,null),content:n.a.createElement(C,null),innerScroll:!0})})}}]);