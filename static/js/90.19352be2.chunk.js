(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1244:function(e,a,t){"use strict";var n=t(3),r=t.n(n),l=t(4),i=t.n(l),s=t(0),o=t.n(s),c=t(2),m=t(8),d=t(89),u=o.a.forwardRef(function(e,a){var t=e.children,n=e.classes,l=e.className,s=e.disableTypography,m=void 0!==s&&s,u=i()(e,["children","classes","className","disableTypography"]);return o.a.createElement("div",r()({className:Object(c.a)(n.root,l),ref:a},u),m?t:o.a.createElement(d.a,{variant:"h6"},t))});a.a=Object(m.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(u)},1245:function(e,a,t){"use strict";var n=t(3),r=t.n(n),l=t(0),i=t.n(l),s=t(8),o=t(89),c=i.a.forwardRef(function(e,a){return i.a.createElement(o.a,r()({component:"p",variant:"body1",color:"textSecondary",ref:a},e))});a.a=Object(s.a)({root:{marginBottom:16}},{name:"MuiDialogContentText"})(c)},1542:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(39),i=t(7),s=t(136),o=t(89),c=t(1130),m=t(1227),d=t(1140),u=t(1204),p=t(1244),E=t(1229),h=t(1245),f=t(1230),g=t(1221),v=t(365),y=t(50),b=t(102),N=t(33),O=t(10);const P="[PAYS APP] GET PAYS",x="[ZONES APP] GET ZONES",A="[ZONES APP] SET SEARCH TEXT",w="[ZONES APP] OPEN NEW ZONES DIALOG",j="[ZONES APP] CLOSE NEW ZONES DIALOG",S="[ZONES APP] OPEN EDIT ZONES DIALOG",C="[ZONES APP] CLOSE EDIT ZONES DIALOG",z="[ZONES APP] ADD ZONE",T="[ZONES APP] SAVE ERROR",D="[ZONES APP] REMOVE ZONE",L="[ZONES APP] STATUT ZONE",Z="[ZONES APP] UPLOAD IMAGE",I="[ZONES APP] UPLOAD REQUEST",k="[ZONES APP] UPLOAD ERROR",F="[ZONES APP] REQUEST SAVE",R="[ZONES APP] REQUEST_ZONE";function W(){const e=y.a.get("/api/zone_commercials");return a=>(a({type:R}),e.then(e=>{a({type:x,payload:e.data["hydra:member"]})}))}function q(){return{type:j}}function M(){return{type:C}}function H(e){let a={del:!0,username:e.username+"_deleted-"+e.id,email:e.email+"_deleted-"+e.id};return(t,n)=>{return y.a.put(e["@id"],a).then(e=>Promise.all([t({type:D}),t(Object(N.B)({message:"Admin commercials bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>t(W())))}}function G(e,a){let t={isactif:a};return(a,n)=>{return y.a.put(e["@id"],t).then(e=>Promise.all([a({type:L}),a(Object(N.B)({message:"Statut modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>a(W())))}}const B="[DIALOG] OPEN",U="[DIALOG] CLOSE";function V(){return{type:U}}function _(e){return{type:B,options:e}}var Y=t(59),Q=t.n(Y),J=t(8);var X=function(e){const a=Object(i.b)(),t=Object(i.c)(e=>{let{zonesApp:a}=e;return a.zones.entities}),s=Object(i.c)(e=>{let{zonesApp:a}=e;return a.zones.loadingZone}),y=Object(i.c)(e=>{let{zonesApp:a}=e;return a.zones.searchText}),[b,N]=Object(n.useState)(null),P=Object(J.a)(e=>({tooltip:{maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9","& b":{fontWeight:e.typography.fontWeightMedium}}}))(g.a);return Object(n.useEffect)(()=>{t&&N(function(e,a){const t=Object.keys(e).map(a=>e[a]);return 0===a.length?t:l.y.filterArrayByString(t,a)}(t,y))},[t,y]),b?0===b.length?r.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},r.a.createElement(o.a,{color:"textSecondary",variant:"h5"},"Il n'y a pas d'Admins commerciaux!")):r.a.createElement(l.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(v.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:(e,t,n)=>({className:"cursor-pointer",onClick:(e,n)=>{t&&a(function(e){return{type:S,data:e}}(t.original))}}),data:b,columns:[{Header:"",Cell:e=>e.original.avatar?r.a.createElement(c.a,{className:"mr-8",alt:e.original.firstName,src:l.G+e.original.avatar.url}):r.a.createElement(c.a,{className:"mr-8",alt:e.original.firstName,src:"assets/images/avatars/images.png"}),className:"justify-center",width:64,sortable:!1},{Header:"Nom",accessor:"lastName",filterable:!0},{Header:"Pr\xe9nom",accessor:"firstName",filterable:!0},{Header:"Email",accessor:"email",filterable:!0},{Header:"T\xe9l\xe9phone",accessor:"phone",filterable:!0},{Header:"Date de cr\xe9ation",Cell:e=>Q()(e.original.created).format("DD/MM/YYYY HH:mm")},{Header:"Nbr.Pays",className:"font-bold",Cell:e=>r.a.createElement("div",{className:"flex items-center"},r.a.createElement(P,{title:r.a.createElement(r.a.Fragment,null,0===Object.keys(e.original.pays).length?"Il n'y aucun pays":r.a.createElement("ul",null,O.a.map(e.original.pays,function(e,a){return r.a.createElement("li",{key:a}," ",e.name," ")})))},r.a.createElement(m.a,{onClick:e=>{e.stopPropagation()}},Object.keys(e.original.pays).length)))},{Header:"Statut",Cell:e=>e.original.isactif?r.a.createElement(g.a,{title:"Activ\xe9"},r.a.createElement(d.a,{className:"text-green text-20",onClick:t=>{t.stopPropagation(),a(G(e.original,!1))}},r.a.createElement(u.a,null,"check_circle"))):r.a.createElement(g.a,{title:"D\xe9sactiv\xe9"},r.a.createElement(d.a,{className:"text-red text-20",onClick:t=>{t.stopPropagation(),a(G(e.original,!0))}},r.a.createElement(u.a,null,"remove_circle")))},{Header:"",width:64,Cell:e=>r.a.createElement("div",{className:"flex items-center"},r.a.createElement(d.a,{className:"text-red text-20",onClick:t=>{t.stopPropagation(),a(_({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(E.a,null,r.a.createElement(h.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),r.a.createElement(f.a,null,r.a.createElement(m.a,{onClick:()=>a(V()),color:"primary"},"Non"),r.a.createElement(m.a,{onClick:t=>{a(H(e.original)),a(V())},color:"primary",autoFocus:!0},"Oui")))}))}},r.a.createElement(u.a,null,"delete")))}],loading:s,defaultPageSize:10,noDataText:"Aucun admin commercial trouv\xe9",loadingText:"Chargement...",ofText:"sur"})):null},K=t(135),$=t(1139),ee=t(1205);var ae=function(e){const a=Object(i.b)(),t=Object(i.c)(e=>{let{zonesApp:a}=e;return a.zones.searchText}),n=Object(i.c)(e=>{let{fuse:a}=e;return a.settings.mainTheme});return r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(l.d,{animation:"transition.expandIn",delay:300},r.a.createElement(u.a,{className:"text-32 mr-0 sm:mr-12"},"group")),r.a.createElement(l.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(o.a,{className:"hidden sm:flex",variant:"h6"},"Gestion des Admins commerciaux"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},r.a.createElement(ee.a,{theme:n},r.a.createElement(l.d,{animation:"transition.slideDownIn",delay:300},r.a.createElement(K.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},r.a.createElement(u.a,{className:"mr-8",color:"action"},"search"),r.a.createElement($.a,{placeholder:"Rechercher...",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:e=>a(function(e){return{type:A,searchText:e.target.value}}(e))}))))),r.a.createElement(l.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(m.a,{onClick:e=>a({type:w}),className:"whitespace-no-wrap",variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex"},"Ajouter nouvel Ad.C"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},te=t(1223),ne=t(1218),re=t(1228),le=t(1233),ie=t(1231),se=t(137),oe=t(201),ce=t(51),me=t.n(ce),de=t(368),ue=t(369),pe=t.n(ue),Ee=t(370),he=t.n(Ee);const fe={firstName:"",lastName:"",adresse1:"",adresse2:"",codepostal:null,phone:"",email:"",pays:null};var ge=function(e){const a=Object(i.b)(),t=Object(i.c)(e=>{let{zonesApp:a}=e;return a.zones.zonesDialog}),s=Object(i.c)(e=>{let{zonesApp:a}=e;return a.zones}),g=Object(i.c)(e=>{let{zonesApp:a}=e;return a.zones.pays}),v=Object(i.c)(e=>{let{zonesApp:a}=e;return a.zones.imageReqInProgress}),P=Object(i.c)(e=>{let{zonesApp:a}=e;return a.zones.avatar}),{form:x,handleChange:A,setForm:w}=Object(se.b)(fe),[j,S]=Object(n.useState)(!1),C=Object(n.useRef)(null),[D,L]=Object(n.useState)({showPassword:!1}),R=()=>{L({...D,showPassword:!D.showPassword})},G=e=>{e.preventDefault()},B=Object(n.useCallback)(()=>{if("edit"===t.type&&t.data){let e=t.data.pays.map(e=>({value:e["@id"],label:e.name}));w({...t.data}),w(O.a.set({...t.data},"pays",e))}"new"===t.type&&w({...fe,...t.data})},[t.data,t.type,w]);function U(){"edit"===t.type?a(M()):a(q())}function Y(){a(H(x)),a(V()),U()}function Q(){S(!1)}return Object(n.useEffect)(()=>{s.error&&(s.error.firstName||s.error.lastName||s.error.adresse1||s.error.adresse2||s.error.codepostal||s.error.phone||s.error.email||s.error.pays)&&(C.current.updateInputsWithError({...s.error}),Q(),s.error=null)},[s.error]),Object(n.useEffect)(()=>{t.props.open&&B()},[t.props.open,B]),Object(n.useEffect)(()=>{w(P?O.a.set({...x},"avatar",P):O.a.set({...x},"avatar",null))},[P]),r.a.createElement(te.a,Object.assign({classes:{paper:"m-24"}},t.props,{onClose:U,fullWidth:!0,maxWidth:"xs"}),r.a.createElement(ne.a,{position:"static",elevation:1},r.a.createElement(re.a,{className:"flex w-full"},r.a.createElement(o.a,{variant:"subtitle1",color:"inherit"},"new"===t.type?"Nouvelle Zone":"Editer Zone")),r.a.createElement("div",{className:"flex flex-col items-center justify-center pb-24"},v?r.a.createElement(c.a,{className:""},r.a.createElement(le.a,{size:24})):r.a.createElement(c.a,{className:"w-96 h-96",alt:"contact avatar",src:x.avatar?oe.d+x.avatar.url:"assets/images/avatars/images.png"}),"edit"===t.type&&r.a.createElement(o.a,{variant:"h6",color:"inherit",className:"pt-8"},x.firstName,"\u2002",x.lastName))),r.a.createElement(me.a,{onValidSubmit:function(e){x.codepostal=O.a.parseInt(x.codepostal),"new"===t.type?a(function(e){let a=null,t=null;e.pays&&(a=e.pays.map(e=>e.value)),e.avatar&&e.avatar.url&&(t=e.avatar["@id"]);const n={...e,pays:a,avatar:t};return e=>(e({type:F}),y.a.post("/api/zone_commercials",n).then(a=>Promise.all([e({type:z}),e(Object(N.B)({message:"Admin commercials bien ajout\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"})),e(q())]).then(()=>e(W()))).catch(a=>{e({type:T,payload:b.a.parseApiErrors(a)})}))}(x)):a(function(e){let a=null,t=null;e.pays&&(a=e.pays.map(e=>e.value)),e.avatar&&e.avatar.url&&(t=e.avatar["@id"]);const n={...e,pays:a,avatar:t};return a=>(a({type:F}),y.a.put(e["@id"],n).then(e=>Promise.all([a({type:z}),a(Object(N.B)({message:"Admin commercials bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"})),a(M())]).then(()=>a(W()))).catch(e=>{a({type:T,payload:b.a.parseApiErrors(e)})}))}(x))},onValid:function(){S(!0)},onInvalid:Q,ref:C,className:"flex flex-col overflow-hidden"},r.a.createElement(E.a,{classes:{root:"p-24"}},r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"Nom",autoFocus:!0,id:"lastName",name:"lastName",value:x.lastName,onChange:A,variant:"outlined",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"Pr\xe9nom",id:"firstName",name:"firstName",value:x.firstName,onChange:A,variant:"outlined",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"Adresse 1",id:"adresse1",name:"adresse1",value:x.adresse1,onChange:A,variant:"outlined",validations:{minLength:6},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"Adresse 2",id:"adresse2",name:"adresse2",value:x.adresse2,onChange:A,variant:"outlined",validations:{minLength:4},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6"},fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"Code postal",id:"codepostal",type:"number",name:"codepostal",value:O.a.toString(x.codepostal),onChange:A,variant:"outlined",validations:{minLength:4,isNumeric:!0},validationErrors:{minLength:"Min character length is 4",isNumeric:"Numeric value required"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"T\xe9l\xe9phone",id:"phone",name:"phone",value:x.phone,onChange:A,variant:"outlined",validations:{minLength:10,isNumeric:!0},validationErrors:{minLength:"Min character length is 10",isNumeric:"Numeric value required"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",label:"E-mail",id:"email",name:"email",value:x.email,onChange:A,variant:"outlined",validations:"isEmail",validationErrors:{isEmail:"This is not a valid email"},required:!0,fullWidth:!0})),"new"===t.type?r.a.createElement("div",null,r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",type:D.showPassword?"text":"password",name:"password",label:"Mot de passe",onChange:A,validations:{minLength:6},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6"},InputProps:{endAdornment:r.a.createElement(ie.a,{position:"end"},r.a.createElement(d.a,{"aria-label":"toggle password visibility",onClick:R,onMouseDown:G},D.showPassword?r.a.createElement(pe.a,null):r.a.createElement(he.a,null)))},variant:"outlined",required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(l.F,{className:"mb-24",id:"confirmpassword",type:D.showPassword?"text":"password",name:"confirmpassword",label:"Confirmer mot de passe",validations:"equalsField:password",onChange:A,validationErrors:{equalsField:"Passwords not identique"},InputProps:{endAdornment:r.a.createElement(ie.a,{position:"end"},r.a.createElement(d.a,{"aria-label":"toggle password visibility",onClick:R,onMouseDown:G},D.showPassword?r.a.createElement(pe.a,null):r.a.createElement(he.a,null)))},variant:"outlined",fullWidth:!0}))):"",r.a.createElement("div",{className:"flex"},r.a.createElement(de.a,{id:"pays",name:"pays",className:"MuiFormControl-fullWidth MuiTextField-root mb-24",value:x.pays,onChange:e=>(function(e,a){w(O.a.set({...x},a,e))})(e,"pays"),placeholder:"S\xe9lectionner multiple pays",textFieldProps:{label:"Pays",InputLabelProps:{shrink:!0},variant:"outlined"},options:g,fullWidth:!0,isMulti:!0,required:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement("input",{accept:"image/*",id:"button-file",type:"file",onChange:function(e){const t=e.target.files[0];t&&a(function(e){return(a,t)=>{const n=new FormData;n.append("file",e);const r=y.a.post("/api/avatars",n,{headers:{"Content-Type":"multipart/form-data"}});return a({type:I}),r.then(e=>Promise.all([e,a({type:Z,payload:e.data}),a(Object(N.B)({message:"Image uploaded!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).catch(e=>{a({type:k}),a(Object(N.B)({message:O.a.map(b.a.parseApiErrors(e),function(e,a){return a+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}(t))}}))),"new"===t.type?r.a.createElement(f.a,{className:"justify-between pl-16"},r.a.createElement(m.a,{variant:"contained",color:"primary",type:"submit",disabled:!j||s.loading||v},"Ajouter",s.loading&&r.a.createElement(le.a,{size:24}))):r.a.createElement(f.a,{className:"justify-between pl-16"},r.a.createElement(m.a,{variant:"contained",color:"primary",type:"submit",disabled:!j||s.loading||v},"Modifier",s.loading&&r.a.createElement(le.a,{size:24})),r.a.createElement(d.a,{onClick:()=>a(_({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(E.a,null,r.a.createElement(h.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),r.a.createElement(f.a,null,r.a.createElement(m.a,{onClick:()=>a(V()),color:"primary"},"Non"),r.a.createElement(m.a,{onClick:Y,color:"primary",autoFocus:!0},"Oui")))}))},r.a.createElement(u.a,null,"delete")))))},ve=t(43);const ye={entities:null,error:null,loadingZone:!1,loading:!1,searchText:"",selectedZonesIds:[],routeParams:{},zonesDialog:{type:"new",props:{open:!1},data:null},avatar:null,pays:null,imageReqInProgress:!1};var be=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case R:return{...e,loadingZone:!0};case F:return{...e,loading:!0};case z:return{...e,loading:!1,error:null};case P:return{...e,executed:!1,message:null,pays:O.a.keyBy(a.payload,"id")};case x:return{...e,entities:a.payload,loadingZone:!1};case A:return{...e,searchText:a.searchText};case w:return{...e,zonesDialog:{type:"new",props:{open:!0},data:null}};case j:return{...e,zonesDialog:{type:"new",props:{open:!1},data:null}};case S:return{...e,zonesDialog:{type:"edit",props:{open:!0},data:a.data}};case C:return{...e,zonesDialog:{type:"edit",props:{open:!1},data:null}};case I:return{...e,imageReqInProgress:!0};case Z:return{...e,avatar:a.payload,imageReqInProgress:!1};case k:return{...e,imageReqInProgress:!1};case T:return{...e,error:a.payload,loading:!1};default:return e}};const Ne={state:!1,options:{children:"Hi"}};var Oe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case N.f:return{...e,state:!0,options:{...e.options,...a.options}};case N.a:return{...e,state:!1};default:return e}};var Pe=Object(ve.d)({zones:be,dialog:Oe});a.default=Object(s.a)("zonesApp",Pe)(function(e){const a=Object(i.b)(),t=Object(n.useRef)(null);return Object(n.useEffect)(()=>{a(W()),a(function(){const e=y.a.get("/api/pays?pagination=false&props[]=id&props[]=name");return a=>e.then(e=>{a({type:P,payload:e.data["hydra:member"]})})}())},[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.p,{classes:{contentWrapper:"p-0 sm:p-24 pb-80 sm:pb-80 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(ae,{pageLayout:t}),content:r.a.createElement(X,null),sidebarInner:!0,ref:t,innerScroll:!0}),r.a.createElement(ge,null))})}}]);