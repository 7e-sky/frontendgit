(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1244:function(e,t,a){"use strict";var n=a(3),r=a.n(n),l=a(4),i=a.n(l),o=a(0),c=a.n(o),s=a(2),m=a(8),u=a(89),p=c.a.forwardRef(function(e,t){var a=e.children,n=e.classes,l=e.className,o=e.disableTypography,m=void 0!==o&&o,p=i()(e,["children","classes","className","disableTypography"]);return c.a.createElement("div",r()({className:Object(s.a)(n.root,l),ref:t},p),m?a:c.a.createElement(u.a,{variant:"h6"},a))});t.a=Object(m.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(p)},1245:function(e,t,a){"use strict";var n=a(3),r=a.n(n),l=a(0),i=a.n(l),o=a(8),c=a(89),s=i.a.forwardRef(function(e,t){return i.a.createElement(c.a,r()({component:"p",variant:"body1",color:"textSecondary",ref:t},e))});t.a=Object(o.a)({root:{marginBottom:16}},{name:"MuiDialogContentText"})(s)},1539:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(39),i=a(7),o=a(136),c=a(89),s=a(1140),m=a(1244),u=a(1229),p=a(1245),d=a(1230),f=a(1227),h=a(1204),E=a(365),O=a(50),b=a(102),g=a(33),y=a(10);const v="[MOTIFS APP] GET MOTIFS",x="[MOTIFS APP] SET SEARCH TEXT",j="[MOTIFS APP] OPEN NEW MOTIFS DIALOG",T="[MOTIFS APP] CLOSE NEW MOTIFS DIALOG",I="[MOTIFS APP] OPEN EDIT MOTIFS DIALOG",N="[MOTIFS APP] CLOSE EDIT MOTIFS DIALOG",w="[MOTIFS APP] ADD MOTIF",M="[MOTIFS APP] SAVE ERROR",S="[MOTIFS APP] UPDATE MOTIF",P="[MOTIFS APP] REMOVE MOTIF";function A(){const e=O.a.get("/api/motifs");return t=>e.then(e=>{t({type:v,payload:e.data["hydra:member"]})})}function F(e){return(t,a)=>{return O.a.delete(e["@id"]).then(e=>Promise.all([t({type:P}),t(Object(g.B)({message:"Motif bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>t(A())))}}const D="[DIALOG] OPEN",C="[DIALOG] CLOSE";function L(){return{type:C}}function k(e){return{type:D,options:e}}var R=function(e){const t=Object(i.b)(),a=Object(i.c)(e=>{let{motifsApp:t}=e;return t.motifs.entities}),o=Object(i.c)(e=>{let{motifsApp:t}=e;return t.motifs.searchText}),[O,b]=Object(n.useState)(null);return Object(n.useEffect)(()=>{a&&b(function(e,t){const a=Object.keys(e).map(t=>e[t]);return 0===t.length?a:l.y.filterArrayByString(a,t)}(a,o))},[a,o]),O?0===O.length?r.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},r.a.createElement(c.a,{color:"textSecondary",variant:"h5"},"Il n'y a pas de Motifs!")):r.a.createElement(l.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(E.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:(e,a,n)=>({className:"cursor-pointer",onClick:(e,n)=>{a&&t(function(e){return{type:I,data:e}}(a.original))}}),data:O,columns:[{Header:"Id",accessor:"id",filterable:!1},{Header:"D\xe9singnation",accessor:"name",filterable:!0},{Header:"",width:64,Cell:e=>r.a.createElement("div",{className:"flex items-center"},r.a.createElement(s.a,{className:"text-red text-20",onClick:a=>{a.stopPropagation(),t(k({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(u.a,null,r.a.createElement(p.a,{id:"alert-dialog-description"},"'Voulez vous vraiment supprimer cet enregistrement ?'")),r.a.createElement(d.a,null,r.a.createElement(f.a,{onClick:()=>t(L()),color:"primary"},"Non"),r.a.createElement(f.a,{onClick:a=>{t(F(e.original)),t(L())},color:"primary",autoFocus:!0},"Oui")))}))}},r.a.createElement(h.a,null,"delete")))}],defaultPageSize:10,noDataText:"No Motif found"})):null},z=a(135),G=a(1139),H=a(1205);var B=function(e){const t=Object(i.b)(),a=Object(i.c)(e=>{let{motifsApp:t}=e;return t.motifs.searchText}),n=Object(i.c)(e=>{let{fuse:t}=e;return t.settings.mainTheme});return r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(l.d,{animation:"transition.expandIn",delay:300},r.a.createElement(h.a,{className:"text-32 mr-0 sm:mr-12"},"remove_circle_outline")),r.a.createElement(l.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(c.a,{className:"hidden sm:flex",variant:"h6"},"Gestion des motifs du rejet"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},r.a.createElement(H.a,{theme:n},r.a.createElement(l.d,{animation:"transition.slideDownIn",delay:300},r.a.createElement(z.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},r.a.createElement(h.a,{className:"mr-8",color:"action"},"search"),r.a.createElement(G.a,{placeholder:"Rechercher...",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:e=>t(function(e){return{type:x,searchText:e.target.value}}(e))}))))),r.a.createElement(l.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(f.a,{onClick:e=>t({type:j}),className:"whitespace-no-wrap",variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex"},"Ajouter nouveau Motif"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},W=a(1223),V=a(1218),_=a(1228),U=a(137),J=a(51),q=a.n(J);const X={name:""};var K=function(e){const t=Object(i.b)(),a=Object(i.c)(e=>{let{motifsApp:t}=e;return t.motifs.motifsDialog}),{form:o,handleChange:E,setForm:v}=Object(U.b)(X),[x,j]=Object(n.useState)(!1),I=Object(n.useRef)(null),P=Object(n.useCallback)(()=>{"edit"===a.type&&a.data&&v({...a.data}),"new"===a.type&&v({...X,...a.data})},[a.data,a.type,v]);function D(){"edit"===a.type?t({type:N}):t({type:T})}function C(){t(F(o)),t(L()),D()}return Object(n.useEffect)(()=>{a.props.open&&P()},[a.props.open,P]),r.a.createElement(W.a,Object.assign({classes:{paper:"m-24"}},a.props,{onClose:D,fullWidth:!0,maxWidth:"xs"}),r.a.createElement(V.a,{position:"static",elevation:1},r.a.createElement(_.a,{className:"flex w-full"},r.a.createElement(c.a,{variant:"subtitle1",color:"inherit"},"new"===a.type?"Nouveau Motif":"Editer Motif"))),r.a.createElement(q.a,{onValidSubmit:function(e){var n,r;"new"===a.type?t((r=o,(e,t)=>O.a.post("/api/motifs",r).then(t=>Promise.all([e({type:w}),e(Object(g.B)({message:"Motif bien ajout\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>e(A()))).catch(t=>{e({type:M}),e(Object(g.B)({message:y.a.map(b.a.parseApiErrors(t),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))}))):t((n=o,(e,t)=>O.a.put(n["@id"],n).then(t=>Promise.all([e({type:S}),e(Object(g.B)({message:"Motif bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>e(A()))).catch(t=>{e({type:M}),e(Object(g.B)({message:y.a.map(b.a.parseApiErrors(t),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))}))),D()},onValid:function(){j(!0)},onInvalid:function(){j(!1)},ref:I,className:"flex flex-col overflow-hidden"},r.a.createElement(u.a,{classes:{root:"p-24"}},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"min-w-48 pt-20"},r.a.createElement(h.a,{color:"action"},"remove_circle_outline")),r.a.createElement(l.F,{className:"mb-24",label:"D\xe9signation",autoFocus:!0,id:"name",name:"name",value:o.name,onChange:E,variant:"outlined",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,fullWidth:!0}))),"new"===a.type?r.a.createElement(d.a,{className:"justify-between pl-16"},r.a.createElement(f.a,{variant:"contained",color:"primary",type:"submit",disabled:!x},"Ajouter")):r.a.createElement(d.a,{className:"justify-between pl-16"},r.a.createElement(f.a,{variant:"contained",color:"primary",type:"submit",disabled:!x},"Modifier"),r.a.createElement(s.a,{onClick:()=>t(k({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(u.a,null,r.a.createElement(p.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),r.a.createElement(d.a,null,r.a.createElement(f.a,{onClick:()=>t(L()),color:"primary"},"Non"),r.a.createElement(f.a,{onClick:C,color:"primary",autoFocus:!0},"Oui")))}))},r.a.createElement(h.a,null,"delete")))))},Q=a(43);const Y={entities:null,searchText:"",selectedMotifsIds:[],routeParams:{},motifsDialog:{type:"new",props:{open:!1},data:null}};var Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{...e,entities:t.payload};case x:return{...e,searchText:t.searchText};case j:return{...e,motifsDialog:{type:"new",props:{open:!0},data:null}};case T:return{...e,motifsDialog:{type:"new",props:{open:!1},data:null}};case I:return{...e,motifsDialog:{type:"edit",props:{open:!0},data:t.data}};case N:return{...e,motifsDialog:{type:"edit",props:{open:!1},data:null}};default:return e}};const $={state:!1,options:{children:"Hi"}};var ee=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.f:return{...e,state:!0,options:{...e.options,...t.options}};case g.a:return{...e,state:!1};default:return e}};var te=Object(Q.d)({motifs:Z,dialog:ee}),ae=a(364);t.default=Object(o.a)("motifsApp",te)(function(e){const t=Object(i.b)(),a=Object(n.useRef)(null);return Object(n.useEffect)(()=>{t(A())},[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.Helmet,null,r.a.createElement("title",null,"Motifs | Les Achats Industriels"),r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("meta",{name:"googlebot",content:"noindex"})),r.a.createElement(l.p,{classes:{contentWrapper:"p-0 sm:p-24 pb-80 sm:pb-80 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(B,{pageLayout:a}),content:r.a.createElement(R,null),sidebarInner:!0,ref:a,innerScroll:!0}),r.a.createElement(K,null))})}}]);