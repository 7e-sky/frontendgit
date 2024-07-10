(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1051:function(e,a,t){"use strict";var n=t(3),r=t.n(n),i=t(4),l=t.n(i),s=t(0),c=t.n(s),o=(t(1),t(2)),m=t(7),u=t(98),d=c.a.forwardRef(function(e,a){var t=e.children,n=e.classes,i=e.className,s=e.disableTypography,m=void 0!==s&&s,d=l()(e,["children","classes","className","disableTypography"]);return c.a.createElement("div",r()({className:Object(o.a)(n.root,i),ref:a},d),m?t:c.a.createElement(u.a,{variant:"h6"},t))});a.a=Object(m.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(d)},1052:function(e,a,t){"use strict";var n=t(3),r=t.n(n),i=t(0),l=t.n(i),s=(t(1),t(7)),c=t(98),o=l.a.forwardRef(function(e,a){return l.a.createElement(c.a,r()({component:"p",variant:"body1",color:"textSecondary",ref:a},e))});a.a=Object(s.a)({root:{marginBottom:16}},{name:"MuiDialogContentText"})(o)},1358:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(40),l=t(6),s=t(140),c=t(23),o=t(98),m=t(945),u=t(958),d=t(1013),p=t(1051),f=t(1037),h=t(1052),v=t(1038),E=t(1035),g=t(1029),b=t(347),N=t(54),O=t(107),y=t(36),A=t(10),j="[ADMINS APP] GET ADMINS",x="[ADMINS APP] SET SEARCH TEXT",P="[ADMINS APP] OPEN NEW ADMINS DIALOG",D="[ADMINS APP] CLOSE NEW ADMINS DIALOG",I="[ADMINS APP] OPEN EDIT ADMINS DIALOG",w="[ADMINS APP] CLOSE EDIT ADMINS DIALOG",S="[ADMINS APP] ADD ADMIN",C="[ADMINS APP] SAVE ERROR",M="[ADMINS APP] UPDATE ADMIN",L="[ADMINS APP] REMOVE ADMIN",T="[ADMINS APP] TATUT ADMIN",F="[ADMINS APP] UPLOAD IMAGE",R="[ADMINS APP] UPLOAD REQUEST",k="[ADMINS APP] UPLOAD ERROR";function q(){var e=N.a.get("/api/admins");return function(a){return e.then(function(e){a({type:j,payload:e.data["hydra:member"]})})}}function W(e){var a={del:!0,username:e.username+"_deleted-"+e.id,email:e.email+"_deleted-"+e.id};return function(t,n){return N.a.put(e["@id"],a).then(function(e){return Promise.all([t({type:L}),t(Object(y.B)({message:"Admin bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(function(){return t(q())})})}}function H(e,a){var t={isactif:a};return function(a,n){return N.a.put(e["@id"],t).then(function(e){return Promise.all([a({type:T}),a(Object(y.B)({message:"Statut modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(function(){return a(q())})})}}var z="[DIALOG] OPEN",B="[DIALOG] CLOSE";function G(){return{type:B}}function U(e){return{type:z,options:e}}var _=t(64),V=t.n(_);var Y=function(e){var a=Object(l.b)(),t=Object(l.c)(function(e){return e.adminsApp.admins.entities}),s=Object(l.c)(function(e){return e.auth.user}),N=Object(l.c)(function(e){return e.adminsApp.admins.searchText}),O=Object(n.useState)(null),y=Object(c.a)(O,2),A=y[0],j=y[1];return Object(n.useEffect)(function(){t&&j(function(e,a){var t=Object.keys(e).map(function(a){return e[a]});return 0===a.length?t:i.y.filterArrayByString(t,a)}(t,N))},[t,N]),A?0===A.length?r.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},r.a.createElement(o.a,{color:"textSecondary",variant:"h5"},"Il n'y a pas d'admins!")):r.a.createElement(i.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(b.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:function(e,t,n){return{className:"cursor-pointer",onClick:function(e,n){var r;t&&a((r=t.original,{type:I,data:r}))}}},data:A,columns:[{Header:"",Cell:function(e){return e.original.avatar?r.a.createElement(m.a,{className:"mr-8",alt:e.original.firstName,src:i.G+e.original.avatar.url}):r.a.createElement(m.a,{className:"mr-8",alt:e.original.firstName,src:"assets/images/avatars/images.png"})},className:"justify-center",width:64,sortable:!1},{Header:"Nom",accessor:"lastName",filterable:!0},{Header:"Pr\xe9nom",accessor:"firstName",filterable:!0},{Header:"Email",accessor:"email",filterable:!0},{Header:"T\xe9l\xe9phone",accessor:"phone",filterable:!0},{Header:"Date de cr\xe9ation",Cell:function(e){return V()(e.original.created).format("DD/MM/YYYY HH:mm")}},{Header:"Statut",Cell:function(e){return s.id!==e.original.id?e.original.isactif?r.a.createElement(g.a,{title:"Activ\xe9"},r.a.createElement(u.a,{className:"text-green text-20",onClick:function(t){t.stopPropagation(),s.id!==e.original.id&&a(H(e.original,!1))}},r.a.createElement(d.a,null,"check_circle"))):r.a.createElement(g.a,{title:"D\xe9sactiv\xe9"},r.a.createElement(u.a,{className:"text-red text-20",onClick:function(t){t.stopPropagation(),a(H(e.original,!0))}},r.a.createElement(d.a,null,"remove_circle"))):r.a.createElement(u.a,{className:"text-20"},r.a.createElement(d.a,null,"check_circle"))}},{Header:"",width:64,Cell:function(e){return s.id!==e.original.id?r.a.createElement("div",{className:"flex items-center"},r.a.createElement(u.a,{className:"text-red text-20",onClick:function(t){t.stopPropagation(),a(U({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(f.a,null,r.a.createElement(h.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),r.a.createElement(v.a,null,r.a.createElement(E.a,{onClick:function(){return a(G())},color:"primary"},"Non"),r.a.createElement(E.a,{onClick:function(t){a(W(e.original)),a(G())},color:"primary",autoFocus:!0},"Oui")))}))}},r.a.createElement(d.a,null,"delete"))):r.a.createElement("div",{className:"flex items-center"},r.a.createElement(u.a,{className:"text-20"},r.a.createElement(d.a,null,"delete")))}}],defaultPageSize:10,noDataText:"No admins found"})):null},J=t(139),Q=t(957),X=t(1014);var K=function(e){var a=Object(l.b)(),t=Object(l.c)(function(e){return e.adminsApp.admins.searchText}),n=Object(l.c)(function(e){return e.fuse.settings.mainTheme});return r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(i.d,{animation:"transition.expandIn",delay:300},r.a.createElement(d.a,{className:"text-32 mr-0 sm:mr-12"},"verified_user")),r.a.createElement(i.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(o.a,{className:"hidden sm:flex",variant:"h6"},"Gestion des Admins"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},r.a.createElement(X.a,{theme:n},r.a.createElement(i.d,{animation:"transition.slideDownIn",delay:300},r.a.createElement(J.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},r.a.createElement(d.a,{className:"mr-8",color:"action"},"search"),r.a.createElement(Q.a,{placeholder:"Rechercher...",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(e){return a({type:x,searchText:e.target.value})}}))))),r.a.createElement(i.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(E.a,{onClick:function(e){return a({type:P})},className:"whitespace-no-wrap",variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex"},"Ajouter nouvel admin"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},Z=t(8),$=t(1031),ee=t(1026),ae=t(1036),te=t(1041),ne=t(1039),re=t(141),ie=t(197),le=t(55),se=t.n(le),ce={username:"",firstName:"",lastName:"",adresse1:"",adresse2:"",codepostal:null,phone:"",email:""};var oe=function(e){var a=Object(l.b)(),t=Object(l.c)(function(e){return e.adminsApp.admins.adminsDialog}),s=Object(l.c)(function(e){return e.auth.user}),g=Object(l.c)(function(e){return e.adminsApp.admins.imageReqInProgress}),b=Object(l.c)(function(e){return e.adminsApp.admins.avatar}),j=Object(re.b)(ce),x=j.form,P=j.handleChange,I=j.setForm,L=Object(n.useState)(!1),T=Object(c.a)(L,2),H=T[0],z=T[1],B=Object(n.useRef)(null),_=Object(n.useCallback)(function(){"edit"===t.type&&t.data&&I(Object(Z.a)({},t.data)),"new"===t.type&&I(Object(Z.a)({},t.data,ce))},[t.data,t.type,I]);function V(){"edit"===t.type?a({type:w}):a({type:D})}function Y(){a(W(x)),a(G()),V()}return Object(n.useEffect)(function(){t.props.open&&_()},[t.props.open,_]),Object(n.useEffect)(function(){I(b?A.a.set(Object(Z.a)({},x),"avatar",b):A.a.set(Object(Z.a)({},x),"avatar",null))},[b]),r.a.createElement($.a,Object.assign({classes:{paper:"m-24"}},t.props,{onClose:V,fullWidth:!0,maxWidth:"xs"}),r.a.createElement(ee.a,{position:"static",elevation:1},r.a.createElement(ae.a,{className:"flex w-full"},r.a.createElement(o.a,{variant:"subtitle1",color:"inherit"},"new"===t.type?"Nouveau Admins":"Editer Admins")),r.a.createElement("div",{className:"flex flex-col items-center justify-center pb-24"},g?r.a.createElement(m.a,{className:""},r.a.createElement(te.a,{size:24})):r.a.createElement(m.a,{className:"w-96 h-96",alt:"contact avatar",src:x.avatar?ie.d+x.avatar.url:"assets/images/avatars/images.png"}))),r.a.createElement(se.a,{onValidSubmit:function(e){var n,r;x.codepostal=A.a.parseInt(x.codepostal),"new"===t.type?a(((r=x).avatar&&r.avatar.url&&(r.avatar=r.avatar["@id"]),function(e,a){return N.a.post("/api/admins",r).then(function(a){return Promise.all([e({type:S}),e(Object(y.B)({message:"Admin bien ajout\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(function(){return e(q())})}).catch(function(a){e({type:C}),e(Object(y.B)({message:A.a.map(O.a.parseApiErrors(a),function(e,a){return a+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})})):a(((n=x).avatar&&n.avatar.url&&(n.avatar=n.avatar["@id"]),function(e,a){return N.a.put(n["@id"],n).then(function(a){return Promise.all([e({type:M}),e(Object(y.B)({message:"Admin bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(function(){return e(q())})}).catch(function(a){e({type:C}),e(Object(y.B)({message:A.a.map(O.a.parseApiErrors(a),function(e,a){return a+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})})),V()},onValid:function(){z(!0)},onInvalid:function(){z(!1)},ref:B,className:"flex flex-col overflow-hidden"},r.a.createElement(f.a,{classes:{root:"p-24"}},r.a.createElement("div",{className:"flex"},r.a.createElement(i.F,{className:"mb-24",label:"Nom",autoFocus:!0,id:"lastName",name:"lastName",value:x.lastName,onChange:P,variant:"outlined",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(i.F,{className:"mb-24",label:"Pr\xe9nom",id:"firstName",name:"firstName",value:x.firstName,onChange:P,variant:"outlined",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(i.F,{className:"mb-24",label:"Adresse 1",id:"adresse1",name:"adresse1",value:x.adresse1,onChange:P,variant:"outlined",validations:{minLength:6},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(i.F,{className:"mb-24",label:"Adresse 2",id:"adresse2",name:"adresse2",value:x.adresse2,onChange:P,variant:"outlined",validations:{minLength:4},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6"},fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(i.F,{className:"mb-24",label:"Code postal",id:"codepostal",type:"number",name:"codepostal",value:A.a.toString(x.codepostal),onChange:P,variant:"outlined",validations:{minLength:4,isNumeric:!0},validationErrors:{minLength:"Min character length is 4",isNumeric:"Numeric value required"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(i.F,{className:"mb-24",label:"T\xe9l\xe9phone",id:"phone",name:"phone",value:x.phone,onChange:P,variant:"outlined",validations:{minLength:10,isNumeric:!0},validationErrors:{minLength:"Min character length is 10",isNumeric:"Numeric value required"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(i.F,{className:"mb-24",label:"E-mail",id:"email",name:"email",disabled:s.data.email===x.email,value:x.email,onChange:P,variant:"outlined",validations:"isEmail",validationErrors:{isEmail:"This is not a valid email"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(i.F,{className:"mb-24",label:"Username",id:"username",name:"username",value:x.username,onChange:P,variant:"outlined",validations:{minLength:6},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6"},required:!0,fullWidth:!0})),"new"===t.type?r.a.createElement("div",null,r.a.createElement("div",{className:"flex"},r.a.createElement(i.F,{className:"mb-24",type:"password",name:"password",label:"Mot de passe",onChange:P,validations:{minLength:6},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6"},InputProps:{endAdornment:r.a.createElement(ne.a,{position:"end"},r.a.createElement(d.a,{className:"text-20",color:"action"},"vpn_key"))},variant:"outlined",required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(i.F,{className:"mb-24",id:"confirmpassword",type:"password",name:"confirmpassword",label:"Confirmer mot de passe",validations:"equalsField:password",onChange:P,validationErrors:{equalsField:"Passwords not identique"},InputProps:{endAdornment:r.a.createElement(ne.a,{position:"end"},r.a.createElement(d.a,{className:"text-20",color:"action"},"vpn_key"))},variant:"outlined",fullWidth:!0}))):"",r.a.createElement("div",{className:"flex"},r.a.createElement("input",{accept:"image/*",id:"button-file",type:"file",onChange:function(e){var t=e.target.files[0];t&&a(function(e){return function(a,t){var n=new FormData;n.append("file",e);var r=N.a.post("/api/avatars",n,{headers:{"Content-Type":"multipart/form-data"}});return a({type:R}),r.then(function(e){return Promise.all([a({type:F,payload:e.data}),a(Object(y.B)({message:"Image uploaded!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])}).catch(function(e){a({type:k}),a(Object(y.B)({message:A.a.map(O.a.parseApiErrors(e),function(e,a){return a+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}(t))}}))),"new"===t.type?r.a.createElement(v.a,{className:"justify-between pl-16"},r.a.createElement(E.a,{variant:"contained",color:"primary",type:"submit",disabled:!H||g},"Ajouter")):r.a.createElement(v.a,{className:"justify-between pl-16"},r.a.createElement(E.a,{variant:"contained",color:"primary",type:"submit",disabled:!H||g},"Modifier"),r.a.createElement(u.a,{onClick:function(){return a(U({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(f.a,null,r.a.createElement(h.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),r.a.createElement(v.a,null,r.a.createElement(E.a,{onClick:function(){return a(G())},color:"primary"},"Non"),r.a.createElement(E.a,{onClick:Y,color:"primary",autoFocus:!0},"Oui")))}))}},r.a.createElement(d.a,null,"delete")))))},me=t(46),ue={entities:null,searchText:"",selectedAdminsIds:[],routeParams:{},adminsDialog:{type:"new",props:{open:!1},data:null},avatar:null,imageReqInProgress:!1},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case j:return Object(Z.a)({},e,{entities:A.a.keyBy(a.payload,"id")});case x:return Object(Z.a)({},e,{searchText:a.searchText});case P:return Object(Z.a)({},e,{adminsDialog:{type:"new",props:{open:!0},data:null}});case D:return Object(Z.a)({},e,{adminsDialog:{type:"new",props:{open:!1},data:null}});case I:return Object(Z.a)({},e,{adminsDialog:{type:"edit",props:{open:!0},data:a.data}});case w:return Object(Z.a)({},e,{adminsDialog:{type:"edit",props:{open:!1},data:null}});case R:return Object(Z.a)({},e,{imageReqInProgress:!0});case F:return Object(Z.a)({},e,{avatar:a.payload,imageReqInProgress:!1});case k:return Object(Z.a)({},e,{imageReqInProgress:!1});default:return e}},pe={state:!1,options:{children:"Hi"}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case y.f:return Object(Z.a)({},e,{state:!0,options:Object(Z.a)({},e.options,a.options)});case y.a:return Object(Z.a)({},e,{state:!1});default:return e}},he=Object(me.d)({admins:de,dialog:fe});a.default=Object(s.a)("adminsApp",he)(function(e){var a=Object(l.b)(),t=Object(n.useRef)(null);return Object(n.useEffect)(function(){a(q())},[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.p,{classes:{contentWrapper:"p-0 sm:p-24 pb-80 sm:pb-80 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(K,{pageLayout:t}),content:r.a.createElement(Y,null),sidebarInner:!0,ref:t,innerScroll:!0}),r.a.createElement(oe,null))})}}]);