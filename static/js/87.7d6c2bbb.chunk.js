(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1244:function(e,a,t){"use strict";var n=t(3),r=t.n(n),l=t(4),i=t.n(l),s=t(0),c=t.n(s),o=t(2),m=t(8),d=t(89),u=c.a.forwardRef(function(e,a){var t=e.children,n=e.classes,l=e.className,s=e.disableTypography,m=void 0!==s&&s,u=i()(e,["children","classes","className","disableTypography"]);return c.a.createElement("div",r()({className:Object(o.a)(n.root,l),ref:a},u),m?t:c.a.createElement(d.a,{variant:"h6"},t))});a.a=Object(m.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(u)},1245:function(e,a,t){"use strict";var n=t(3),r=t.n(n),l=t(0),i=t.n(l),s=t(8),c=t(89),o=i.a.forwardRef(function(e,a){return i.a.createElement(c.a,r()({component:"p",variant:"body1",color:"textSecondary",ref:a},e))});a.a=Object(s.a)({root:{marginBottom:16}},{name:"MuiDialogContentText"})(o)},1541:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(39),i=t(7),s=t(136),c=t(89),o=t(1130),m=t(1140),d=t(1204),u=t(1244),p=t(1229),h=t(1245),E=t(1230),f=t(1227),v=t(1221),g=t(365),N=t(50),b=t(102),y=t(33),A=t(10);const O="[ADMINS APP] GET ADMINS",x="[ADMINS APP] SET SEARCH TEXT",P="[ADMINS APP] OPEN NEW ADMINS DIALOG",D="[ADMINS APP] CLOSE NEW ADMINS DIALOG",I="[ADMINS APP] OPEN EDIT ADMINS DIALOG",j="[ADMINS APP] CLOSE EDIT ADMINS DIALOG",w="[ADMINS APP] ADD ADMIN",S="[ADMINS APP] SAVE ERROR",C="[ADMINS APP] UPDATE ADMIN",M="[ADMINS APP] REMOVE ADMIN",L="[ADMINS APP] TATUT ADMIN",T="[ADMINS APP] UPLOAD IMAGE",F="[ADMINS APP] UPLOAD REQUEST",R="[ADMINS APP] UPLOAD ERROR";function k(){const e=N.a.get("/api/admins");return a=>e.then(e=>{a({type:O,payload:e.data["hydra:member"]})})}function q(e){let a={del:!0,username:e.username+"_deleted-"+e.id,email:e.email+"_deleted-"+e.id};return(t,n)=>{return N.a.put(e["@id"],a).then(e=>Promise.all([t({type:M}),t(Object(y.B)({message:"Admin bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>t(k())))}}function W(e,a){let t={isactif:a};return(a,n)=>{return N.a.put(e["@id"],t).then(e=>Promise.all([a({type:L}),a(Object(y.B)({message:"Statut modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>a(k())))}}const H="[DIALOG] OPEN",z="[DIALOG] CLOSE";function B(){return{type:z}}function G(e){return{type:H,options:e}}var U=t(59),_=t.n(U);var V=function(e){const a=Object(i.b)(),t=Object(i.c)(e=>{let{adminsApp:a}=e;return a.admins.entities}),s=Object(i.c)(e=>{let{auth:a}=e;return a.user}),N=Object(i.c)(e=>{let{adminsApp:a}=e;return a.admins.searchText}),[b,y]=Object(n.useState)(null);return Object(n.useEffect)(()=>{t&&y(function(e,a){const t=Object.keys(e).map(a=>e[a]);return 0===a.length?t:l.y.filterArrayByString(t,a)}(t,N))},[t,N]),b?0===b.length?r.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},r.a.createElement(c.a,{color:"textSecondary",variant:"h5"},"Il n'y a pas d'admins!")):r.a.createElement(l.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(g.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:(e,t,n)=>({className:"cursor-pointer",onClick:(e,n)=>{t&&a(function(e){return{type:I,data:e}}(t.original))}}),data:b,columns:[{Header:"",Cell:e=>e.original.avatar?r.a.createElement(o.a,{className:"mr-8",alt:e.original.firstName,src:l.G+e.original.avatar.url}):r.a.createElement(o.a,{className:"mr-8",alt:e.original.firstName,src:"assets/images/avatars/images.png"}),className:"justify-center",width:64,sortable:!1},{Header:"Nom",accessor:"lastName",filterable:!0},{Header:"Pr\xe9nom",accessor:"firstName",filterable:!0},{Header:"Email",accessor:"email",filterable:!0},{Header:"T\xe9l\xe9phone",accessor:"phone",filterable:!0},{Header:"Date de cr\xe9ation",Cell:e=>_()(e.original.created).format("DD/MM/YYYY HH:mm")},{Header:"Statut",Cell:e=>s.id!==e.original.id?e.original.isactif?r.a.createElement(v.a,{title:"Activ\xe9"},r.a.createElement(m.a,{className:"text-green text-20",onClick:t=>{t.stopPropagation(),s.id!==e.original.id&&a(W(e.original,!1))}},r.a.createElement(d.a,null,"check_circle"))):r.a.createElement(v.a,{title:"D\xe9sactiv\xe9"},r.a.createElement(m.a,{className:"text-red text-20",onClick:t=>{t.stopPropagation(),a(W(e.original,!0))}},r.a.createElement(d.a,null,"remove_circle"))):r.a.createElement(m.a,{className:"text-20"},r.a.createElement(d.a,null,"check_circle"))},{Header:"",width:64,Cell:e=>s.id!==e.original.id?r.a.createElement("div",{className:"flex items-center"},r.a.createElement(m.a,{className:"text-red text-20",onClick:t=>{t.stopPropagation(),a(G({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(p.a,null,r.a.createElement(h.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),r.a.createElement(E.a,null,r.a.createElement(f.a,{onClick:()=>a(B()),color:"primary"},"Non"),r.a.createElement(f.a,{onClick:t=>{a(q(e.original)),a(B())},color:"primary",autoFocus:!0},"Oui")))}))}},r.a.createElement(d.a,null,"delete"))):r.a.createElement("div",{className:"flex items-center"},r.a.createElement(m.a,{className:"text-20"},r.a.createElement(d.a,null,"delete")))}],defaultPageSize:10,noDataText:"No admins found"})):null},Y=t(135),J=t(1139),Q=t(1205);var X=function(e){const a=Object(i.b)(),t=Object(i.c)(e=>{let{adminsApp:a}=e;return a.admins.searchText}),n=Object(i.c)(e=>{let{fuse:a}=e;return a.settings.mainTheme});return r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(l.d,{animation:"transition.expandIn",delay:300},r.a.createElement(d.a,{className:"text-32 mr-0 sm:mr-12"},"verified_user")),r.a.createElement(l.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(c.a,{className:"hidden sm:flex",variant:"h6"},"Gestion des Admins"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},r.a.createElement(Q.a,{theme:n},r.a.createElement(l.d,{animation:"transition.slideDownIn",delay:300},r.a.createElement(Y.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},r.a.createElement(d.a,{className:"mr-8",color:"action"},"search"),r.a.createElement(J.a,{placeholder:"Rechercher...",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:e=>a(function(e){return{type:x,searchText:e.target.value}}(e))}))))),r.a.createElement(l.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(f.a,{onClick:e=>a({type:P}),className:"whitespace-no-wrap",variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex"},"Ajouter nouvel admin"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},K=t(1223),Z=t(1218),$=t(1228),ee=t(1233),ae=t(1231),te=t(137),ne=t(201),re=t(51),le=t.n(re);const ie={username:"",firstName:"",lastName:"",adresse1:"",adresse2:"",codepostal:null,phone:"",email:""};var se=function(e){const a=Object(i.b)(),t=Object(i.c)(e=>{let{adminsApp:a}=e;return a.admins.adminsDialog}),s=Object(i.c)(e=>{let{auth:a}=e;return a.user}),v=Object(i.c)(e=>{let{adminsApp:a}=e;return a.admins.imageReqInProgress}),g=Object(i.c)(e=>{let{adminsApp:a}=e;return a.admins.avatar}),{form:O,handleChange:x,setForm:P}=Object(te.b)(ie),[I,M]=Object(n.useState)(!1),L=Object(n.useRef)(null),W=Object(n.useCallback)(()=>{"edit"===t.type&&t.data&&P({...t.data}),"new"===t.type&&P({...t.data,...ie})},[t.data,t.type,P]);function H(){"edit"===t.type?a({type:j}):a({type:D})}function z(){a(q(O)),a(B()),H()}return Object(n.useEffect)(()=>{t.props.open&&W()},[t.props.open,W]),Object(n.useEffect)(()=>{P(g?A.a.set({...O},"avatar",g):A.a.set({...O},"avatar",null))},[g]),r.a.createElement(K.a,Object.assign({classes:{paper:"m-24"}},t.props,{onClose:H,fullWidth:!0,maxWidth:"xs"}),r.a.createElement(Z.a,{position:"static",elevation:1},r.a.createElement($.a,{className:"flex w-full"},r.a.createElement(c.a,{variant:"subtitle1",color:"inherit"},"new"===t.type?"Nouveau Admins":"Editer Admins")),r.a.createElement("div",{className:"flex flex-col items-center justify-center pb-24"},v?r.a.createElement(o.a,{className:""},r.a.createElement(ee.a,{size:24})):r.a.createElement(o.a,{className:"w-96 h-96",alt:"contact avatar",src:O.avatar?ne.d+O.avatar.url:"assets/images/avatars/images.png"}))),r.a.createElement(le.a,{onValidSubmit:function(e){var n,r;O.codepostal=A.a.parseInt(O.codepostal),"new"===t.type?a(((r=O).avatar&&r.avatar.url&&(r.avatar=r.avatar["@id"]),(e,a)=>N.a.post("/api/admins",r).then(a=>Promise.all([e({type:w}),e(Object(y.B)({message:"Admin bien ajout\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>e(k()))).catch(a=>{e({type:S}),e(Object(y.B)({message:A.a.map(b.a.parseApiErrors(a),function(e,a){return a+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))}))):a(((n=O).avatar&&n.avatar.url&&(n.avatar=n.avatar["@id"]),(e,a)=>N.a.put(n["@id"],n).then(a=>Promise.all([e({type:C}),e(Object(y.B)({message:"Admin bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>e(k()))).catch(a=>{e({type:S}),e(Object(y.B)({message:A.a.map(b.a.parseApiErrors(a),function(e,a){return a+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))}))),H()},onValid:function(){M(!0)},onInvalid:function(){M(!1)},ref:L,className:"flex flex-col overflow-hidden"},r.a.createElement(p.a,{classes:{root:"p-24"}},r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"Nom",autoFocus:!0,id:"lastName",name:"lastName",value:O.lastName,onChange:x,variant:"outlined",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"Pr\xe9nom",id:"firstName",name:"firstName",value:O.firstName,onChange:x,variant:"outlined",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"Adresse 1",id:"adresse1",name:"adresse1",value:O.adresse1,onChange:x,variant:"outlined",validations:{minLength:6},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"Adresse 2",id:"adresse2",name:"adresse2",value:O.adresse2,onChange:x,variant:"outlined",validations:{minLength:4},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6"},fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"Code postal",id:"codepostal",type:"number",name:"codepostal",value:A.a.toString(O.codepostal),onChange:x,variant:"outlined",validations:{minLength:4,isNumeric:!0},validationErrors:{minLength:"Min character length is 4",isNumeric:"Numeric value required"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"T\xe9l\xe9phone",id:"phone",name:"phone",value:O.phone,onChange:x,variant:"outlined",validations:{minLength:10,isNumeric:!0},validationErrors:{minLength:"Min character length is 10",isNumeric:"Numeric value required"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"E-mail",id:"email",name:"email",disabled:s.data.email===O.email,value:O.email,onChange:x,variant:"outlined",validations:"isEmail",validationErrors:{isEmail:"This is not a valid email"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"Username",id:"username",name:"username",value:O.username,onChange:x,variant:"outlined",validations:{minLength:6},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6"},required:!0,fullWidth:!0})),"new"===t.type?r.a.createElement("div",null,r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",type:"password",name:"password",label:"Mot de passe",onChange:x,validations:{minLength:6},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6"},InputProps:{endAdornment:r.a.createElement(ae.a,{position:"end"},r.a.createElement(d.a,{className:"text-20",color:"action"},"vpn_key"))},variant:"outlined",required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",id:"confirmpassword",type:"password",name:"confirmpassword",label:"Confirmer mot de passe",validations:"equalsField:password",onChange:x,validationErrors:{equalsField:"Passwords not identique"},InputProps:{endAdornment:r.a.createElement(ae.a,{position:"end"},r.a.createElement(d.a,{className:"text-20",color:"action"},"vpn_key"))},variant:"outlined",fullWidth:!0}))):"",r.a.createElement("div",{className:"flex"},r.a.createElement("input",{accept:"image/*",id:"button-file",type:"file",onChange:function(e){const t=e.target.files[0];t&&a(function(e){return(a,t)=>{const n=new FormData;n.append("file",e);const r=N.a.post("/api/avatars",n,{headers:{"Content-Type":"multipart/form-data"}});return a({type:F}),r.then(e=>Promise.all([a({type:T,payload:e.data}),a(Object(y.B)({message:"Image uploaded!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).catch(e=>{a({type:R}),a(Object(y.B)({message:A.a.map(b.a.parseApiErrors(e),function(e,a){return a+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}(t))}}))),"new"===t.type?r.a.createElement(E.a,{className:"justify-between pl-16"},r.a.createElement(f.a,{variant:"contained",color:"primary",type:"submit",disabled:!I||v},"Ajouter")):r.a.createElement(E.a,{className:"justify-between pl-16"},r.a.createElement(f.a,{variant:"contained",color:"primary",type:"submit",disabled:!I||v},"Modifier"),r.a.createElement(m.a,{onClick:()=>a(G({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(p.a,null,r.a.createElement(h.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),r.a.createElement(E.a,null,r.a.createElement(f.a,{onClick:()=>a(B()),color:"primary"},"Non"),r.a.createElement(f.a,{onClick:z,color:"primary",autoFocus:!0},"Oui")))}))},r.a.createElement(d.a,null,"delete")))))},ce=t(43);const oe={entities:null,searchText:"",selectedAdminsIds:[],routeParams:{},adminsDialog:{type:"new",props:{open:!1},data:null},avatar:null,imageReqInProgress:!1};var me=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case O:return{...e,entities:A.a.keyBy(a.payload,"id")};case x:return{...e,searchText:a.searchText};case P:return{...e,adminsDialog:{type:"new",props:{open:!0},data:null}};case D:return{...e,adminsDialog:{type:"new",props:{open:!1},data:null}};case I:return{...e,adminsDialog:{type:"edit",props:{open:!0},data:a.data}};case j:return{...e,adminsDialog:{type:"edit",props:{open:!1},data:null}};case F:return{...e,imageReqInProgress:!0};case T:return{...e,avatar:a.payload,imageReqInProgress:!1};case R:return{...e,imageReqInProgress:!1};default:return e}};const de={state:!1,options:{children:"Hi"}};var ue=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case y.f:return{...e,state:!0,options:{...e.options,...a.options}};case y.a:return{...e,state:!1};default:return e}};var pe=Object(ce.d)({admins:me,dialog:ue});a.default=Object(s.a)("adminsApp",pe)(function(e){const a=Object(i.b)(),t=Object(n.useRef)(null);return Object(n.useEffect)(()=>{a(k())},[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.p,{classes:{contentWrapper:"p-0 sm:p-24 pb-80 sm:pb-80 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(X,{pageLayout:t}),content:r.a.createElement(V,null),sidebarInner:!0,ref:t,innerScroll:!0}),r.a.createElement(se,null))})}}]);