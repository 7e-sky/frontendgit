(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1244:function(e,a,t){"use strict";var n=t(3),r=t.n(n),l=t(4),i=t.n(l),s=t(0),c=t.n(s),o=t(2),m=t(8),d=t(89),u=c.a.forwardRef(function(e,a){var t=e.children,n=e.classes,l=e.className,s=e.disableTypography,m=void 0!==s&&s,u=i()(e,["children","classes","className","disableTypography"]);return c.a.createElement("div",r()({className:Object(o.a)(n.root,l),ref:a},u),m?t:c.a.createElement(d.a,{variant:"h6"},t))});a.a=Object(m.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(u)},1245:function(e,a,t){"use strict";var n=t(3),r=t.n(n),l=t(0),i=t.n(l),s=t(8),c=t(89),o=i.a.forwardRef(function(e,a){return i.a.createElement(c.a,r()({component:"p",variant:"body1",color:"textSecondary",ref:a},e))});a.a=Object(s.a)({root:{marginBottom:16}},{name:"MuiDialogContentText"})(o)},1252:function(e,a,t){!function(e){"use strict";e.defineLocale("fr",{months:"janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),monthsShort:"janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xe0] LT",nextDay:"[Demain \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[Hier \xe0] LT",lastWeek:"dddd [dernier \xe0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(e,a){switch(a){case"D":return e+(1===e?"er":"");default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}})}(t(59))},1535:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(39),i=t(7),s=t(136),c=t(89),o=t(1130),m=t(1221),d=t(1140),u=t(1204),p=t(1244),E=t(1229),h=t(1245),v=t(1230),f=t(1227),g=t(365),b=t(50),N=t(102),y=t(33),O=t(10);const P="[PERSONNELS APP] GET PERSONNELS",S="[PERSONNELS APP] SET SEARCH TEXT",x="[PERSONNELS APP] OPEN NEW PERSONNELS DIALOG",j="[PERSONNELS APP] CLOSE NEW PERSONNELS DIALOG",L="[PERSONNELS APP] OPEN EDIT PERSONNELS DIALOG",w="[PERSONNELS APP] CLOSE EDIT PERSONNELS DIALOG",A="[PERSONNELS APP] ADD PERSONNEL",C="[PERSONNELS APP] SAVE ERROR",D="[PERSONNELS APP] UPDATE PERSONNEL",_="[PERSONNELS APP] REMOVE PERSONNEL",R="[PERSONNELS APP] UPLOAD IMAGE",k="[PERSONNELS APP] UPLOAD REQUEST",M="[PERSONNELS APP] UPLOAD ERROR";function T(e){const a=b.a.get("/api/fournisseurs/".concat(e,"/personnels"));return e=>a.then(a=>{e({type:P,payload:a.data["hydra:member"]})})}function H(e,a){let t={del:!0};return(n,r)=>{return b.a.put(e["@id"],t).then(e=>Promise.all([n({type:_}),n(Object(y.B)({message:"Agence / Service bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>n(T(a))))}}const I="[DIALOG] OPEN",Y="[DIALOG] CLOSE";function F(){return{type:Y}}function W(e){return{type:I,options:e}}var B=t(59),q=t.n(B);var z=function(e){const a=Object(i.b)(),t=Object(i.c)(e=>{let{personnelsApp:a}=e;return a.personnels.entities}),s=Object(i.c)(e=>{let{auth:a}=e;return a.user}),b=Object(i.c)(e=>{let{personnelsApp:a}=e;return a.personnels.searchText}),[N,y]=Object(n.useState)(null);return Object(n.useEffect)(()=>{t&&y(function(e,a){const t=Object.keys(e).map(a=>e[a]);return 0===a.length?t:l.y.filterArrayByString(t,a)}(t,b))},[t,b]),N?0===N.length?r.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},r.a.createElement(c.a,{color:"textSecondary",variant:"h5"},"Il n'y a pas d'Agence / Service!")):r.a.createElement(l.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(g.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",data:N,columns:[{Header:"",Cell:e=>e.original.avatar?r.a.createElement(o.a,{className:"mr-8",alt:e.original.firstName,src:l.G+e.original.avatar.url}):r.a.createElement(o.a,{className:"mr-8",alt:e.original.firstName,src:"assets/images/avatars/images.png"}),className:"justify-center",width:64,sortable:!1},{Header:"Agence/Service",accessor:"agence",filterable:!0,Cell:e=>e.original.agence?e.original.agence:""},{Header:"NOM & Pr\xe9nom",accessor:"name",filterable:!0,Cell:e=>e.original.name?e.original.name:""},{Header:"Ville",accessor:"ville",filterable:!0,Cell:e=>e.original.ville?e.original.ville:""},{Header:"Email",accessor:"email",filterable:!0,Cell:e=>e.original.email?e.original.email:""},{Header:"T\xe9l\xe9phone",accessor:"phone",filterable:!0,Cell:e=>e.original.phone?e.original.phone:""},{Header:"Date de cr\xe9ation",Cell:e=>q()(e.original.created).format("DD/MM/YYYY HH:mm")},{Header:"",width:128,Cell:e=>r.a.createElement("div",{className:"flex items-center"},r.a.createElement(m.a,{title:"Editer"},r.a.createElement(d.a,{className:"text-orange text-20",onClick:t=>{t.stopPropagation(),a(function(e){return{type:L,data:e}}(e.original))}},r.a.createElement(u.a,null,"edit"))),r.a.createElement(m.a,{title:"Supprimer"},r.a.createElement(d.a,{className:"text-red text-20",onClick:t=>{t.stopPropagation(),a(W({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(E.a,null,r.a.createElement(h.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),r.a.createElement(v.a,null,r.a.createElement(f.a,{onClick:()=>a(F()),color:"primary"},"Non"),r.a.createElement(f.a,{onClick:t=>{a(H(e.original,s.id)),a(F())},color:"primary",autoFocus:!0},"Oui")))}))}},r.a.createElement(u.a,null,"delete"))))}],defaultPageSize:10,noDataText:"No personnels found"})):null},V=t(135),G=t(1139),U=t(1205);var K=function(e){const a=Object(i.b)(),t=Object(i.c)(e=>{let{personnelsApp:a}=e;return a.personnels.searchText}),n=Object(i.c)(e=>{let{fuse:a}=e;return a.settings.mainTheme});return r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(l.d,{animation:"transition.expandIn",delay:300},r.a.createElement(u.a,{className:"text-32 mr-0 sm:mr-12"},"group")),r.a.createElement(l.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(c.a,{className:"hidden sm:flex",variant:"h6"},"Cr\xe9ation d'Agence / Service"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},r.a.createElement(U.a,{theme:n},r.a.createElement(l.d,{animation:"transition.slideDownIn",delay:300},r.a.createElement(V.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},r.a.createElement(u.a,{className:"mr-8",color:"action"},"search"),r.a.createElement(G.a,{placeholder:"Rechercher...",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:e=>a(function(e){return{type:S,searchText:e.target.value}}(e))}))))),r.a.createElement(l.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(f.a,{onClick:e=>a({type:x}),className:"whitespace-no-wrap",variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex"},"Ajouter"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},J=t(1223),Q=t(1218),X=t(1228),Z=t(1233),$=t(137),ee=t(201),ae=t(51),te=t.n(ae);const ne={name:"",phone:"",email:"",agence:"",ville:""};var re=function(e){const a=Object(i.b)(),t=Object(i.c)(e=>{let{personnelsApp:a}=e;return a.personnels.personnelsDialog}),s=Object(i.c)(e=>{let{personnelsApp:a}=e;return a.personnels.imageReqInProgress}),m=Object(i.c)(e=>{let{personnelsApp:a}=e;return a.personnels.avatar}),g=Object(i.c)(e=>{let{auth:a}=e;return a.user}),{form:P,handleChange:S,setForm:x}=Object($.b)(ne),[L,_]=Object(n.useState)(!1),I=Object(n.useRef)(null),Y=Object(n.useCallback)(()=>{"edit"===t.type&&t.data&&x({...t.data}),"new"===t.type&&x({...t.data,...ne})},[t.data,t.type,x]);function B(){"edit"===t.type?a({type:w}):a({type:j})}function q(){a(H(P,g.id)),a(F()),B()}return Object(n.useEffect)(()=>{t.props.open&&Y()},[t.props.open,Y]),Object(n.useEffect)(()=>{x(m?O.a.set({...P},"avatar",m):O.a.set({...P},"avatar",null))},[m]),r.a.createElement(J.a,Object.assign({classes:{paper:"m-24"}},t.props,{onClose:B,fullWidth:!0,maxWidth:"xs"}),r.a.createElement(Q.a,{position:"static",elevation:1},r.a.createElement(X.a,{className:"flex w-full"},r.a.createElement(c.a,{variant:"subtitle1",color:"inherit"},"new"===t.type?"Nouvelle Agence / Service":P.name)),r.a.createElement("div",{className:"flex flex-col items-center justify-center pb-24"},s?r.a.createElement(o.a,{className:""},r.a.createElement(Z.a,{size:24})):r.a.createElement("div",{className:"flex  items-center"},r.a.createElement(o.a,{className:"w-96 h-96 mr-16",alt:"contact avatar",src:P.avatar?ee.d+P.avatar.url:"assets/images/avatars/images.png"}),r.a.createElement("input",{accept:"image/*",id:"button-file",type:"file",onChange:function(e){const t=e.target.files[0];t&&a(function(e){return(a,t)=>{const n=new FormData;n.append("file",e);const r=b.a.post("/api/avatars",n,{headers:{"Content-Type":"multipart/form-data"}});return a({type:k}),r.then(e=>Promise.all([e,a({type:R,payload:e.data}),a(Object(y.B)({message:"Image t\xe9l\xe9charg\xe9e!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).catch(e=>{a({type:M}),a(Object(y.B)({message:O.a.map(N.a.parseApiErrors(e),function(e,a){return a+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}(t))}})),"edit"===t.type&&r.a.createElement(c.a,{variant:"h6",color:"inherit",className:"pt-8"},P.name))),r.a.createElement(te.a,{onValidSubmit:function(e){"new"===t.type?a(function(e,a){const t={...e,avatar:e.avatar?e.avatar["@id"]:null};return(e,n)=>b.a.post("/api/personnels",t).then(t=>Promise.all([e({type:A}),e(Object(y.B)({message:"Agence / Service bien ajout\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>e(T(a)))).catch(a=>{e({type:C}),e(Object(y.B)({message:O.a.map(N.a.parseApiErrors(a),function(e,a){return a+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}(P,g.id)):a(function(e,a){const t={...e,avatar:e.avatar?e.avatar["@id"]:null};return(n,r)=>b.a.put(e["@id"],t).then(e=>Promise.all([n({type:D}),n(Object(y.B)({message:"Agence / Service bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>n(T(a)))).catch(e=>{n({type:C}),n(Object(y.B)({message:O.a.map(N.a.parseApiErrors(e),function(e,a){return a+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}(P,g.id)),B()},onValid:function(){_(!0)},onInvalid:function(){_(!1)},ref:I,className:"flex flex-col overflow-hidden"},r.a.createElement(E.a,{classes:{root:"p-24"}},r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"Agence ou service",autoFocus:!0,id:"agence",name:"agence",value:P.agence,onChange:S,variant:"outlined",validations:{minLength:2},validationErrors:{minLength:"Min character length is 2"},fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"Nom et Pr\xe9nom",id:"name",name:"name",value:P.name,onChange:S,variant:"outlined",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"Ville",id:"ville",name:"ville",value:P.ville,onChange:S,variant:"outlined",validations:{minLength:2},validationErrors:{minLength:"Min character length is 2"},fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"T\xe9l\xe9phone",id:"phone",name:"phone",value:P.phone,onChange:S,variant:"outlined",validations:{minLength:10,isNumeric:!0},validationErrors:{minLength:"Min character length is 10",isNumeric:"Numeric value required"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"E-mail",id:"email",name:"email",value:P.email,onChange:S,variant:"outlined",validations:"isEmail",validationErrors:{isEmail:"This is not a valid email"},required:!0,fullWidth:!0}))),"new"===t.type?r.a.createElement(v.a,{className:"justify-between pl-16"},r.a.createElement(f.a,{variant:"contained",color:"primary",type:"submit",disabled:!L},"Ajouter")):r.a.createElement(v.a,{className:"justify-between pl-16"},r.a.createElement(f.a,{variant:"contained",color:"primary",type:"submit",disabled:!L},"Modifier"),r.a.createElement(d.a,{onClick:()=>a(W({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(E.a,null,r.a.createElement(h.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),r.a.createElement(v.a,null,r.a.createElement(f.a,{onClick:()=>a(F()),color:"primary"},"Non"),r.a.createElement(f.a,{onClick:q,color:"primary",autoFocus:!0},"Oui")))}))},r.a.createElement(u.a,null,"delete")))))},le=t(43);const ie={entities:null,searchText:"",selectedPersonnelsIds:[],routeParams:{},personnelsDialog:{type:"new",props:{open:!1},data:null},avatar:null,imageReqInProgress:!1};var se=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case P:return{...e,entities:a.payload};case S:return{...e,searchText:a.searchText};case x:return{...e,personnelsDialog:{type:"new",props:{open:!0},data:null}};case j:return{...e,personnelsDialog:{type:"new",props:{open:!1},data:null}};case L:return{...e,personnelsDialog:{type:"edit",props:{open:!0},data:a.data}};case w:return{...e,personnelsDialog:{type:"edit",props:{open:!1},data:null}};case k:return{...e,imageReqInProgress:!0};case R:return{...e,avatar:a.payload,imageReqInProgress:!1};case M:return{...e,imageReqInProgress:!1};default:return e}};const ce={state:!1,options:{children:"Hi"}};var oe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case y.f:return{...e,state:!0,options:{...e.options,...a.options}};case y.a:return{...e,state:!1};default:return e}};var me=Object(le.d)({personnels:se,dialog:oe}),de=t(364),ue=t(16);t(1252);a.default=Object(s.a)("personnelsApp",me)(function(e){const a=Object(i.b)(),t=Object(n.useRef)(null),s=Object(i.c)(e=>{let{auth:a}=e;return a.user}),o=Object(i.c)(e=>{let{auth:a}=e;return a.user.abonnement}),m=Object(i.c)(e=>{let{auth:a}=e;return a.user.loadingAbonnement}),[d,u]=Object(n.useState)(!1),[p,h]=Object(n.useState)(!0),[g,b]=Object(n.useState)(!1),[N,y]=Object(n.useState)(0);if(Object(n.useEffect)(()=>{if(!o)return;if(!o.statut)return void h(!1);let e=q()(o.expired).diff(q()(),"days");y(e),e<=0&&b(!0),o.statut&&e>0&&u(!0)},[o]),Object(n.useEffect)(()=>{s.id&&a(T(s.id))},[a,s]),m)return r.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},r.a.createElement(Z.a,{color:"secondary"})," \u2002 Chargement ...");const O=()=>{e.history.push("/dashboard")};return!d||o&&!o.offre.hasCommercial?p?g?r.a.createElement(J.a,{open:!0,disableBackdropClick:!0,disableEscapeKeyDown:!0,onClose:O,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(E.a,{className:"text-center"},r.a.createElement(c.a,{variant:"h6",className:"my-16 text-red"},"Votre abonnement a expir\xe9 ",q()(o.expired).fromNow()),r.a.createElement(c.a,{color:"textSecondary",className:"mb-16"},"Pour le renouveler, vous pouvez ajouter une commande en cliquant sur le bouton suivant"),r.a.createElement(f.a,{component:ue.a,to:"/billing/renew",className:"whitespace-no-wrap",color:"secondary",variant:"contained"},r.a.createElement("span",{className:""},"Renouveler l'abonnement"))),r.a.createElement(v.a,null,r.a.createElement(f.a,{onClick:O,color:"primary"},"Fermer"))):o&&!o.offre.hasCommercial?r.a.createElement(J.a,{open:!0,disableBackdropClick:!0,disableEscapeKeyDown:!0,onClose:O,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(E.a,{className:"text-center"},r.a.createElement(c.a,{variant:"h6",className:"my-16"},"Mise \xe0 niveau"),r.a.createElement(c.a,{color:"textSecondary",className:"mb-16"},"Ce service n'est pas accessible par votre Pack d'abonnement ",r.a.createElement("strong",{className:"uppercase"},o.offre&&o.offre.name),", nous vous invitons \xe0 mettre \xe0 niveau votre Pack d'abonnement pour b\xe9n\xe9ficier de cette fonctionnalit\xe9."),r.a.createElement(f.a,{component:ue.a,to:"/billing/pack",className:"whitespace-no-wrap",color:"secondary",variant:"contained"},r.a.createElement("span",{className:""},"mise \xe0 niveau"))),r.a.createElement(v.a,null,r.a.createElement(f.a,{onClick:O,color:"primary"},"Fermer"))):r.a.createElement(J.a,{open:!0,disableBackdropClick:!0,disableEscapeKeyDown:!0,onClose:O,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(E.a,null,r.a.createElement(c.a,{variant:"h4",className:"my-16"},"Reserv\xe9 \xe0 nos abonn\xe9s"),r.a.createElement(c.a,{color:"textSecondary",className:"mb-16"},"Ce service n'est pas accessible par votre Pack d'abonnement, nous vous invitons \xe0 mettre \xe0 niveau votre Pack d'abonnement pour b\xe9n\xe9ficier de cette fonctionnalit\xe9."),r.a.createElement(f.a,{component:ue.a,to:"/billing/pack",className:"whitespace-no-wrap",color:"secondary",variant:"contained"},r.a.createElement("span",{className:""},"Commander abonnement"))),r.a.createElement(v.a,null,r.a.createElement(f.a,{onClick:O,color:"primary"},"Fermer"))):r.a.createElement(J.a,{open:!0,disableBackdropClick:!0,disableEscapeKeyDown:!0,onClose:O,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(E.a,{className:"text-center"},r.a.createElement(c.a,{variant:"h6",className:"my-16 text-red"},"Votre abonnement est d\xe9sactiv\xe9"),r.a.createElement(c.a,{color:"textSecondary",className:"mb-16"},"Pour le r\xe9activiter nous vous prions de nous contacter sur l'adresse mail suivante ",r.a.createElement("strong",null,"administrateur@lesachatsindustriels.com"))),r.a.createElement(v.a,null,r.a.createElement(f.a,{onClick:O,color:"primary"},"Fermer"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(de.Helmet,null,r.a.createElement("title",null,"Agences / Services | Les Achats Industriels"),r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("meta",{name:"googlebot",content:"noindex"})),r.a.createElement(l.p,{classes:{contentWrapper:"p-0 sm:p-24 pb-80 sm:pb-80 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(K,{pageLayout:t}),content:r.a.createElement(z,null),sidebarInner:!0,ref:t,innerScroll:!0}),r.a.createElement(re,null))})}}]);