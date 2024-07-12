(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1244:function(e,t,a){"use strict";var r=a(3),n=a.n(r),i=a(4),o=a.n(i),s=a(0),c=a.n(s),l=a(2),u=a(8),p=a(89),d=c.a.forwardRef(function(e,t){var a=e.children,r=e.classes,i=e.className,s=e.disableTypography,u=void 0!==s&&s,d=o()(e,["children","classes","className","disableTypography"]);return c.a.createElement("div",n()({className:Object(l.a)(r.root,i),ref:t},d),u?a:c.a.createElement(p.a,{variant:"h6"},a))});t.a=Object(u.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(d)},1245:function(e,t,a){"use strict";var r=a(3),n=a.n(r),i=a(0),o=a.n(i),s=a(8),c=a(89),l=o.a.forwardRef(function(e,t){return o.a.createElement(c.a,n()({component:"p",variant:"body1",color:"textSecondary",ref:t},e))});t.a=Object(s.a)({root:{marginBottom:16}},{name:"MuiDialogContentText"})(l)},1540:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(39),o=a(7),s=a(136),c=a(1221),l=a(1227),u=a(1140),p=a(1244),d=a(1229),m=a(1245),g=a(1230),E=a(1204),f=a(365),h=a(50),b=a(102),O=a(33),y=a(10);const A="[CATEGORIES APP] GET CATEGORIES",S="[CATEGORIES APP] GET SOUS_SECTEURS",v="[CATEGORIES APP] REQUEST CATEGORIES",C="[CATEGORIES APP] SET SEARCH TEXT",T="[CATEGORIES APP] OPEN NEW CATEGORIES DIALOG",j="[CATEGORIES APP] CLOSE NEW CATEGORIES DIALOG",P="[CATEGORIES APP] OPEN EDIT CATEGORIES DIALOG",x="[CATEGORIES APP] CLOSE EDIT CATEGORIES DIALOG",I="[CATEGORIES APP] ADD CATEGORIE",N="[CATEGORIES APP] SAVE ERROR",R="[CATEGORIES APP] UPDATE CATEGORIE",w="[CATEGORIES APP] REMOVE CATEGORIE",G="[CATEGORIES APP] SET PARAMETRES DATA";function D(e){var t="";e.search.length>0&&e.search.map(function(e,a){t+="&"+e.id+"="+e.value});const a=h.a.get("/api/categories?page=".concat(e.page).concat(t,"&order[").concat(e.filter.id,"]=").concat(e.filter.direction,"&props[]=id&props[]=name&props[]=sousSecteurs"));return e=>(e({type:v}),a.then(t=>{e({type:A,payload:t.data})}))}function k(e){return{type:G,parametres:e}}const L="[DIALOG] OPEN",F="[DIALOG] CLOSE";function W(){return{type:F}}var z=a(8);var M=function(e){const t=Object(o.b)(),a=Object(o.c)(e=>{let{categoriesApp:t}=e;return t.categories.entities}),s=Object(o.c)(e=>{let{categoriesApp:t}=e;return t.categories.pageCount}),b=Object(o.c)(e=>{let{categoriesApp:t}=e;return t.categories.loading}),A=Object(o.c)(e=>{let{categoriesApp:t}=e;return t.categories.parametres}),S=Object(o.c)(e=>{let{categoriesApp:t}=e;return t.categories.searchText}),[C,T]=Object(r.useState)(null),j=Object(z.a)(e=>({tooltip:{maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9","& b":{fontWeight:e.typography.fontWeightMedium}}}))(c.a);if(Object(r.useEffect)(()=>{a&&T(function(e,t){const a=Object.keys(e).map(t=>e[t]);return 0===t.length?a:i.y.filterArrayByString(a,t)}(a,S))},[a,S]),!C)return null;const x=y.a.debounce(e=>t(k(e)),700);return n.a.createElement(i.d,{animation:"transition.slideUpIn",delay:300},n.a.createElement(f.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:(e,a,r)=>({className:"cursor-pointer",onClick:(e,r)=>{a&&t(function(e){return{type:P,data:e}}(a.original))}}),data:C,columns:[{Header:"Nom du produit",accessor:"name",filterable:!0},{Header:"Activit\xe9s",className:"font-bold",accessor:"sousSecteurs.name",filterable:!0,Cell:e=>n.a.createElement("div",{className:"flex items-center"},n.a.createElement(j,{title:n.a.createElement(n.a.Fragment,null,0===Object.keys(e.original.sousSecteurs).length?"Il n'y aucune activit\xe9":n.a.createElement("ul",null,y.a.map(e.original.sousSecteurs,function(e,t){return n.a.createElement("li",{key:t}," ",e.name," ")})))},n.a.createElement(l.a,{onClick:e=>{e.stopPropagation()}},Object.keys(e.original.sousSecteurs).length)))},{Header:"",sortable:!1,width:64,Cell:e=>n.a.createElement("div",{className:"flex items-center"},n.a.createElement(u.a,{className:"text-red text-20",onClick:a=>{a.stopPropagation(),t(function(e){return{type:L,options:e}}({children:n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{id:"alert-dialog-title"},"Suppression"),n.a.createElement(d.a,null,n.a.createElement(m.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),n.a.createElement(g.a,null,n.a.createElement(l.a,{onClick:()=>t(W()),color:"primary"},"Non"),n.a.createElement(l.a,{onClick:a=>{t(function(e,t){let a={del:!0,name:e.name+"_deleted-"+e.id};return r=>(r({type:v}),h.a.put("/api/categories/".concat(e.id),a).then(e=>Promise.all([r(Object(O.B)({message:"Cat\xe9gorie bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>r(D(t)))).catch(e=>{r({type:w}),e.response.data&&e.response.data["hydra:description"]&&r(Object(O.B)({message:e.response.data["hydra:description"],anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))}))}(e.original,A)),t(W())},color:"primary",autoFocus:!0},"Oui")))}))}},n.a.createElement(E.a,null,"delete")))}],manual:!0,pages:s,page:A.page-1,defaultPageSize:10,loading:b,showPageSizeOptions:!1,onPageChange:e=>{A.page=e+1,t(k(A))},onSortedChange:(e,a,r)=>{A.page=1,A.filter.id="sousSecteur"===e[0].id?"sousSecteur.id":e[0].id,A.filter.direction=e[0].desc?"desc":"asc",t(k(A))},onFilteredChange:e=>{A.page=1,A.search=e,x(A)},noDataText:"Aucun cat\xe9gorie trouv\xe9",loadingText:"Chargement...",ofText:"sur"}))},B=a(89);var H=function(e){const t=Object(o.b)();return n.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},n.a.createElement("div",{className:"flex items-center"},n.a.createElement(i.d,{animation:"transition.expandIn",delay:300},n.a.createElement(E.a,{className:"text-32 mr-0 sm:mr-12"},"ballot")),n.a.createElement(i.d,{animation:"transition.slideLeftIn",delay:300},n.a.createElement(B.a,{className:"hidden sm:flex",variant:"h6"},"Gestion des produits"))),n.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"}),n.a.createElement(i.d,{animation:"transition.slideRightIn",delay:300},n.a.createElement(l.a,{onClick:e=>t({type:T}),className:"whitespace-no-wrap",variant:"contained"},n.a.createElement("span",{className:"hidden sm:flex"},"Ajouter nouveau produit"),n.a.createElement("span",{className:"flex sm:hidden"},"New"))))},U=a(1223),V=a(1218),_=a(1228),q=a(137),J=a(51),Q=a.n(J),X=a(368);const K={name:""};var Y=function(e){const t=Object(o.b)(),a=Object(o.c)(e=>{let{categoriesApp:t}=e;return t.categories.categorieDialog}),s=Object(o.c)(e=>{let{categoriesApp:t}=e;return t.categories.sousSecteurs}),c=Object(o.c)(e=>{let{categoriesApp:t}=e;return t.categories.parametres}),{form:u,handleChange:p,setForm:m}=Object(q.b)(K),[f,A]=Object(r.useState)(!1),S=Object(r.useRef)(null),v=Object(r.useCallback)(()=>{if("edit"===a.type&&a.data&&(m({...a.data}),a.data.sousSecteurs)){let e=a.data.sousSecteurs.map(e=>({value:e["@id"],label:e.name}));m(y.a.set({...a.data},"sousSecteurs",e))}"new"===a.type&&m({...K,...a.data})},[a.data,a.type,m]);function C(){"edit"===a.type?t({type:x}):t({type:j})}return Object(r.useEffect)(()=>{a.props.open&&v()},[a.props.open,v]),n.a.createElement(U.a,Object.assign({classes:{paper:"m-24"}},a.props,{onClose:C,fullWidth:!0,maxWidth:"xs"}),n.a.createElement(V.a,{position:"static",elevation:1},n.a.createElement(_.a,{className:"flex w-full"},n.a.createElement(B.a,{variant:"subtitle1",color:"inherit"},"new"===a.type?"Nouveau produit":"Editer produit"))),n.a.createElement(Q.a,{onValidSubmit:function(e){"new"===a.type?t(function(e,t){let a=null;e.sousSecteurs&&(a=e.sousSecteurs.map(e=>e.value));const r={...e,sousSecteurs:a};return e=>h.a.post("/api/categories",r).then(a=>Promise.all([e({type:I}),e(Object(O.B)({message:"Cat\xe9gorie bien ajout\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>e(D(t)))).catch(t=>{e({type:N}),e(Object(O.B)({message:y.a.map(b.a.parseApiErrors(t),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}(u,c)):t(function(e,t){let a=null;e.sousSecteurs&&(a=e.sousSecteurs.map(e=>e.value));const r={...e,sousSecteurs:a};return a=>h.a.put("/api/categories/".concat(e.id),r).then(e=>Promise.all([a({type:R}),a(Object(O.B)({message:"Cat\xe9gorie bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>a(D(t)))).catch(e=>{a({type:N}),a(Object(O.B)({message:y.a.map(b.a.parseApiErrors(e),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}(u,c)),C()},onValid:function(){A(!0)},onInvalid:function(){A(!1)},ref:S,className:"flex flex-col overflow-hidden"},n.a.createElement(d.a,{classes:{root:"p-24"}},n.a.createElement("div",{className:"flex"},n.a.createElement("div",{className:"min-w-48 pt-20"},n.a.createElement(E.a,{color:"action"},"work")),n.a.createElement(X.a,{id:"sousSecteurs",name:"sousSecteurs",className:"MuiFormControl-fullWidth MuiTextField-root mb-24",value:u.sousSecteurs,onChange:e=>(function(e,t){m(y.a.set({...u},t,e))})(e,"sousSecteurs"),placeholder:"S\xe9lectionner...",textFieldProps:{label:"Activit\xe9s",InputLabelProps:{shrink:!0},variant:"outlined"},options:s,fullWidth:!0,isMulti:!0,required:!0})),n.a.createElement("div",{className:"flex"},n.a.createElement("div",{className:"min-w-48 pt-20"},n.a.createElement(E.a,{color:"action"},"ballot")),n.a.createElement(i.F,{className:"mb-24",label:"Nom",autoFocus:!0,id:"name",name:"name",value:u.name,onChange:p,variant:"outlined",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,fullWidth:!0}))),"new"===a.type?n.a.createElement(g.a,{className:"justify-between pl-16"},n.a.createElement(l.a,{variant:"contained",color:"primary",type:"submit",disabled:!f},"Ajouter")):n.a.createElement(g.a,{className:"justify-between pl-16"},n.a.createElement(l.a,{variant:"contained",color:"primary",type:"submit",disabled:!f},"Modifier"))))},Z=a(43);const $={entities:null,pageCount:null,searchText:"",parametres:{page:1,search:[],filter:{id:"id",direction:"desc"}},routeParams:{},categorieDialog:{type:"new",props:{open:!1},data:null},sousSecteurs:null,loading:!1,parents:null};var ee=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{...e,sousSecteurs:t.payload};case v:return{...e,loading:!0};case A:return{...e,entities:t.payload["hydra:member"],pageCount:b.a.hydraPageCount(t.payload),loading:!1};case w:return{...e,loading:!1};case C:return{...e,searchText:t.searchText};case G:return{...e,parametres:{page:t.parametres.page,search:t.parametres.search,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}};case T:return{...e,categorieDialog:{type:"new",props:{open:!0},data:null}};case j:return{...e,categorieDialog:{type:"new",props:{open:!1},data:null}};case P:return{...e,categorieDialog:{type:"edit",props:{open:!0},data:t.data}};case x:return{...e,categorieDialog:{type:"edit",props:{open:!1},data:null}};default:return e}};const te={state:!1,options:{children:"Hi"}};var ae=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.f:return{...e,state:!0,options:{...e.options,...t.options}};case O.a:return{...e,state:!1};default:return e}};var re=Object(Z.d)({categories:ee,dialog:ae}),ne=a(364);t.default=Object(s.a)("categoriesApp",re)(function(e){const t=Object(o.b)(),a=Object(r.useRef)(null),s=Object(o.c)(e=>{let{categoriesApp:t}=e;return t.categories.parametres}),c=Object(o.c)(e=>{let{categoriesApp:t}=e;return t.categories.sousSecteurs});return Object(r.useEffect)(()=>{t(D(s))},[t,s]),Object(r.useEffect)(()=>{c||t(function(){const e=h.a.get("/api/sous_secteurs?pagination=false&props[]=id&props[]=name");return t=>e.then(e=>{t({type:S,payload:e.data["hydra:member"]})})}())},[t,c]),n.a.createElement(n.a.Fragment,null,n.a.createElement(ne.Helmet,null,n.a.createElement("title",null,"Produits | Les Achats Industriels"),n.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),n.a.createElement("meta",{name:"googlebot",content:"noindex"})),n.a.createElement(i.p,{classes:{contentWrapper:"p-0 sm:p-24 pb-80 sm:pb-80 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:n.a.createElement(H,{pageLayout:a}),content:n.a.createElement(M,null),sidebarInner:!0,ref:a,innerScroll:!0}),n.a.createElement(Y,null))})}}]);