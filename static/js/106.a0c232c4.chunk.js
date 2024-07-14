(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1242:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};a.default=r},1560:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(1130),s=t(89),i=t(1236),o=t(1219),c=t(1232),m=t(1231),d=t(1204),u=t(1212),p=t(1227),E=t(1147),h=t(1140),v=t(1157),g=t(39),f=t(137),b=t(7),y=t(136),x=t(50),P=t(102),w=t(33),N=t(10);const A="[PROFILE ACHETEUR APP] REQUEST ACHETEUR",L="[PROFILE ACHETEUR APP] GET ACHETEUR",R="[PROFILE ACHETEUR APP] GET PAYS",C="[PROFILE ACHETEUR APP] GET VILLES",I="[PROFILE ACHETEUR APP] REQUEST PAYS",O="[PROFILE ACHETEUR APP] REQUEST VILLES",F="[PROFILE ACHETEUR APP] SAVE ERROR",S="[PROFILE ACHETEUR APP] GET SECTEURS",j="[PROFILE ACHETEUR APP] UPDATE ACHETEUR",T="[PROFILE ACHETEUR APP] REQUEST UPDATE_ACHETEUR",q="[PROFILE ACHETEUR APP] UPLOAD AVATAR",U="[PROFILE ACHETEUR APP] UPLOAD REQUEST",H="[PROFILE ACHETEUR APP] UPLOAD ERROR";function M(e){const a=x.a.get("/api/acheteurs/".concat(e));return e=>(e({type:A}),a.then(a=>{e({type:L,payload:a.data})}))}function z(e){const a=x.a.get("".concat(e,"/villes?pagination=false&props[]=id&props[]=name"));return e=>(e({type:O}),a.then(a=>{e({type:C,payload:a.data["hydra:member"]})}))}function V(e,a){return(t,r)=>{const n=x.a.put("/api/acheteurs/".concat(a),e);return t({type:T}),n.then(e=>Promise.all([t({type:j,payload:e.data}),t(Object(w.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).catch(e=>{t({type:F,payload:P.a.parseApiErrors(e)})})}}var W=t(43);const k={pays:null,secteurs:null,loading:!1,requestAcheteur:!1,loadingVille:!1,villes:null,error:null,data:null,profileReqInProgress:!1,avatar:null,profile_deleted:null};var D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case T:case I:return{...e,loading:!0};case A:return{...e,requestAcheteur:!0};case O:return{...e,villes:null,loadingVille:!0};case L:return{...e,data:a.payload,requestAcheteur:!1,error:null};case S:return{...e,secteurs:N.a.keyBy(a.payload,"id")};case R:return{...e,pays:N.a.keyBy(a.payload,"id"),loading:!1};case C:return{...e,villes:N.a.keyBy(a.payload,"id"),loadingVille:!1};case j:return{...e,loading:!1,error:null};case F:return{...e,loading:!1,error:a.payload,success:!1,redirect_success:""};case U:return{...e,profileReqInProgress:!0};case q:return{...e,avatar:a.payload,profileReqInProgress:!1};case H:return{...e,profileReqInProgress:!1};default:return e}};var B=Object(W.d)({profile:D}),_=t(51),G=t.n(_),Q=t(1233),$=t(1242),J=t.n($),Y=t(1224),Z=t(2),K=t(364),X=t(369),ee=t.n(X),ae=t(370),te=t.n(ae);const re=Object(v.a)(e=>({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},buttonProgress:{color:J.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},profileImageUpload:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut},profileImageItem:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{"& $profileImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:e.shadows[3],"& $profileImageFeaturedStar":{opacity:1},"&:hover $profileImageFeaturedStar":{opacity:1}}}}));a.default=Object(y.a)("profileAcheteurApp",B)(function(e){const a=Object(b.b)(),t=re(),v=Object(b.c)(e=>{let{profileAcheteurApp:a}=e;return a.profile}),y=Object(b.c)(e=>{let{auth:a}=e;return a.user}),A=Object(b.c)(e=>{let{profileAcheteurApp:a}=e;return a.profile.pays}),L=Object(b.c)(e=>{let{profileAcheteurApp:a}=e;return a.profile.villes}),C=Object(r.useRef)(null),[O,W]=Object(r.useState)(!1),[k,D]=Object(r.useState)(!1),[B,_]=Object(r.useState)(!1),[$,J]=Object(r.useState)(!1),[X,ae]=Object(r.useState)(!1),[ne,le]=Object(r.useState)(0),{form:se,handleChange:ie,setForm:oe}=Object(f.b)(null),[ce,me]=Object(r.useState)({showPassword:!1}),de=()=>{me({...ce,showPassword:!ce.showPassword})},ue=e=>{e.preventDefault()};function pe(e,t){"ville"===t?(oe(N.a.set({...se},t,e)),D(e)):"secteur"===t?(oe(N.a.set({...se},t,e)),J(e)):(se.ville="",_(e),oe(N.a.set({...se},t,e)),e.value&&a(z(e.value)),"Maroc"===e.label?W(!0):W(!1))}function Ee(){ae(!1)}function he(){ae(!0)}return Object(r.useEffect)(()=>{a(M(y.id))},[a,y.id]),Object(r.useEffect)(()=>{a(function(){const e=x.a.get("/api/pays?pagination=false&props[]=id&props[]=name");return a=>(a({type:I}),e.then(e=>{a({type:R,payload:e.data["hydra:member"]})}))}()),a(function(){const e=x.a.get("/api/secteurs?pagination=false&props[]=id&props[]=name");return a=>e.then(e=>{a({type:S,payload:e.data["hydra:member"]})})}())},[a,y.id]),Object(r.useEffect)(()=>{v.data&&!se&&v.data.pays&&a(z(v.data.pays["@id"]))},[a,v.data,se]),Object(r.useEffect)(()=>{v.error&&(v.error.societe||v.error.newPassword||v.error.newConfirmpassword||v.error.oldPassword||v.error.phone||v.error.firstName||v.error.lastName||v.error.pays||v.error.ville||v.error.adresse1||v.error.adresse2||v.error.website||v.error.fix||v.error.ice||v.error.description)&&(C.current.updateInputsWithError({...v.error}),Ee())},[v.error]),Object(r.useEffect)(()=>{(v.data&&!se||v.data&&se&&v.data.id!==se.id)&&(v.data.pays&&"Maroc"===v.data.pays.name&&W(!0),oe({...v.data}),J({value:v.data.secteur["@id"],label:v.data.secteur.name}),D({value:v.data.ville["@id"],label:v.data.ville.name}),_({value:v.data.pays["@id"],label:v.data.pays.name}))},[se,v.data,oe]),Object(r.useEffect)(()=>{v.avatar&&oe(N.a.set({...se},"avatar",v.avatar))},[se,v.avatar,oe]),n.a.createElement(n.a.Fragment,null,n.a.createElement(K.Helmet,null,n.a.createElement("title",null,"Mon profil | Les Achats Industriels"),n.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),n.a.createElement("meta",{name:"googlebot",content:"noindex"})),n.a.createElement(g.o,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:v.requestAcheteur?n.a.createElement(Y.a,{color:"secondary"}):se&&n.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},n.a.createElement("div",{className:"flex flex-col items-start max-w-full"},n.a.createElement("div",{className:"flex items-center max-w-full"},n.a.createElement(g.d,{animation:"transition.expandIn",delay:300},se.avatar?n.a.createElement(l.a,{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded",alt:"user photo",src:g.G+se.avatar.url}):n.a.createElement(l.a,{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded"},se.firstName[0])),n.a.createElement("div",{className:"flex flex-col min-w-0"},n.a.createElement(g.d,{animation:"transition.slideLeftIn",delay:300},n.a.createElement(s.a,{className:"text-16 sm:text-20 truncate"},se.firstName&&se.lastName?se.firstName+" "+se.lastName:"NOM & Pr\xe9nom")),n.a.createElement(g.d,{animation:"transition.slideLeftIn",delay:300},n.a.createElement(s.a,{variant:"caption"},se.societe?se.societe:"Soci\xe9t\xe9"," ",se.email?" | "+se.email:"")))))),contentToolbar:v.requestAcheteur?n.a.createElement("div",{className:t.root},n.a.createElement(Y.a,{color:"secondary"})):se&&n.a.createElement(i.a,{value:ne,onChange:function(e,a){le(a)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},n.a.createElement(o.a,{className:"h-64 normal-case",label:"Infos soci\xe9t\xe9"}),n.a.createElement(o.a,{className:"h-64 normal-case",label:"Infos utilisateur"}),n.a.createElement(o.a,{className:"h-64 normal-case",label:"Photo"}),n.a.createElement(o.a,{className:"h-64 normal-case",label:"Mot de passe"})),content:v.requestAcheteur?"":se&&n.a.createElement("div",{className:" sm:p-10 max-w-2xl"},0===ne&&n.a.createElement(G.a,{onValidSubmit:function(e){var t,r;a((t=e,r=se.id,"Maroc"!==t.pays.label&&(t.ice=null),t.pays=t.pays.value,t.ville=t.ville.value,t.secteur=t.secteur.value,null===t.codepostal?delete t.codepostal:t.codepostal=parseInt(t.codepostal),(e,a)=>{const n=x.a.put("/api/acheteurs/".concat(r),t);return e({type:T}),n.then(a=>Promise.all([e({type:j,payload:a.data}),e(Object(w.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).then(()=>e(M(r))).catch(a=>{e({type:F,payload:P.a.parseApiErrors(a)})})}))},onValid:he,onInvalid:Ee,ref:C,className:"flex pt-5 flex-col "},n.a.createElement(c.a,{container:!0,spacing:3,className:"mb-5"},n.a.createElement(c.a,{item:!0,xs:12,sm:8},n.a.createElement("div",{className:"flex"},n.a.createElement(g.F,{className:"",label:"Raison sociale",autoFocus:!0,id:"societe",name:"societe",value:se.societe,onChange:ie,variant:"outlined",validations:{matchRegexp:/^[a-z]|([a-z][0-9])|([0-9][a-z])|([a-z][0-9][a-z])+$/i,minLength:2,maxLength:40},validationErrors:{minLength:"Raison sociale doit d\xe9passer 2 caract\xe8res alphanum\xe9riques",maxLength:"Raison sociale ne peut d\xe9passer 40 caract\xe8res alphanum\xe9riques",matchRegexp:"Raison sociale doit contenir des caract\xe8res alphanum\xe9riques"},required:!0,fullWidth:!0}))),n.a.createElement(c.a,{item:!0,xs:12,sm:4},n.a.createElement("div",{className:"flex"},n.a.createElement(g.F,{className:"",type:"text",name:"fix",value:se.fix,onChange:ie,label:"Fixe",autoComplete:"fix",validations:{minLength:10,maxLength:13},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10",maxLength:"La longueur maximale de caract\xe8re est 13"},InputProps:{endAdornment:n.a.createElement(m.a,{position:"end"},n.a.createElement(d.a,{className:"text-20",color:"action"},"local_phone"))},fullWidth:!0,variant:"outlined"}))),n.a.createElement(c.a,{item:!0,xs:12,sm:8},n.a.createElement(g.E,{id:"secteur",className:"",name:"secteur",value:$,placeholder:"S\xe9lectionner votre secteur d'activit\xe9",textFieldProps:{label:"Secteur d'activit\xe9",InputLabelProps:{shrink:!0},variant:"outlined",required:!0},options:v.secteurs,onChange:e=>pe(e,"secteur"),fullWidth:!0})),n.a.createElement(c.a,{item:!0,xs:12,sm:4},n.a.createElement("div",{className:"flex"},n.a.createElement(g.F,{className:"",type:"text",name:"website",value:se.website,onChange:ie,autoComplete:"website",label:"Site Web",validations:"isUrl",validationErrors:{isUrl:"Exemple : http://www.exemple.com"},InputProps:{endAdornment:n.a.createElement(m.a,{position:"end"},n.a.createElement(d.a,{className:"text-20",color:"action"},"language"))},fullWidth:!0,variant:"outlined"}))),n.a.createElement(c.a,{item:!0,xs:12,sm:8},n.a.createElement("div",{className:"flex"},O?n.a.createElement(g.F,{className:"",type:"text",name:"ice",value:se.ice,onChange:ie,label:"ICE",autoComplete:"ice",validations:{minLength:15,maxLength:15,isNumeric:"isNumeric",matchRegexp:/^(?!.*?(\w)\1{14}).*$/},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 15",maxLength:"La longueur maximale de caract\xe8re est 15",isNumeric:"Cette valeur doit \xeatre num\xe9rique. ",matchRegexp:"ICE non valid"},variant:"outlined",required:!0,fullWidth:!0}):""))),n.a.createElement(u.a,null),n.a.createElement(c.a,{container:!0,spacing:3,className:"mb-5"},n.a.createElement(c.a,{item:!0,xs:12,sm:8},n.a.createElement("div",{className:"flex"},n.a.createElement(g.F,{className:"mt-20",type:"text",name:"adresse1",value:se.adresse1,onChange:ie,autoComplete:"adresse",label:"Adresse 1",validations:{minLength:10},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10"},InputProps:{endAdornment:n.a.createElement(m.a,{position:"end"},n.a.createElement(d.a,{className:"text-20",color:"action"},"location_on"))},variant:"outlined",required:!0,fullWidth:!0}))),n.a.createElement(c.a,{item:!0,xs:12,sm:4},n.a.createElement(g.E,{id:"pays",name:"pays",value:B,placeholder:"S\xe9lectionner une Pays",textFieldProps:{label:"Pays",InputLabelProps:{shrink:!0},variant:"outlined",required:!0},className:"mt-20",options:A,onChange:e=>pe(e,"pays"),required:!0})),n.a.createElement(c.a,{item:!0,xs:12,sm:4},n.a.createElement("div",{className:"flex"},n.a.createElement(g.F,{className:"",type:"text",name:"adresse2",value:se.adresse2,onChange:ie,autoComplete:"adresse",label:"Adresse 2",validations:{minLength:10},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10"},InputProps:{endAdornment:n.a.createElement(m.a,{position:"end"},n.a.createElement(d.a,{className:"text-20",color:"action"},"location_on"))},variant:"outlined",fullWidth:!0}))),n.a.createElement(c.a,{item:!0,xs:12,sm:4},n.a.createElement("div",{className:"flex"},n.a.createElement(g.F,{className:"",type:"number",name:"codepostal",value:String(se.codepostal),onChange:ie,validations:{minLength:3,maxLength:10},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 3",maxLength:"La longueur maximale de caract\xe8re est 10"},autoComplete:"codepostal",label:"Code Postal",variant:"outlined",fullWidth:!0}))),n.a.createElement(c.a,{item:!0,xs:12,sm:4},n.a.createElement(g.E,{id:"ville",name:"ville",value:k,placeholder:"S\xe9lectionner une ville",textFieldProps:{label:"Ville",InputLabelProps:{shrink:!0},variant:"outlined",required:!0},className:"",options:L,isLoading:v.loadingVille,onChange:e=>pe(e,"ville"),required:!0}))),n.a.createElement(u.a,null),n.a.createElement(c.a,{container:!0,spacing:3},n.a.createElement(c.a,{item:!0,xs:12,sm:12},n.a.createElement(g.F,{className:"mb-5 mt-20  w-full",type:"text",name:"description",value:se.description,onChange:ie,label:"Pr\xe9sentation",autoComplete:"description",validations:{minLength:10},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10"},variant:"outlined",multiline:!0,rows:"8"}))),n.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary",className:"w-200 pr-auto mt-16 normal-case","aria-label":"Sauvegarder",disabled:!X||v.loading,value:"legacy"},"Sauvegarder",v.loading&&n.a.createElement(Q.a,{size:24,className:t.buttonProgress}))),1===ne&&n.a.createElement(G.a,{onValidSubmit:function(e){var t,r;a((t=e,r=se.id,(e,a)=>{const n=x.a.put("/api/acheteurs/".concat(r),t);return e({type:T}),n.then(a=>Promise.all([e({type:j,payload:a.data}),e(Object(w.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).then(()=>e(M(r))).catch(a=>{e({type:F,payload:P.a.parseApiErrors(a)})})}))},onValid:he,onInvalid:Ee,ref:C,className:"flex pt-5 flex-col "},n.a.createElement(c.a,{container:!0,spacing:3},n.a.createElement(c.a,{item:!0,xs:12,sm:2},n.a.createElement(g.D,{className:"mb-16",name:"civilite",label:"Civilit\xe9",onChange:ie,value:se.civilite,variant:"outlined",required:!0,fullWidth:!0},n.a.createElement(E.a,{value:"M."},"M."),n.a.createElement(E.a,{value:"Mme"},"Mme"),n.a.createElement(E.a,{value:"Mlle"},"Mlle"))),n.a.createElement(c.a,{item:!0,xs:12,sm:5},n.a.createElement(g.F,{className:"mb-16",type:"text",name:"lastName",value:se.lastName,onChange:ie,label:"Nom",validations:{minLength:2},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 2"},InputProps:{endAdornment:n.a.createElement(m.a,{position:"end"},n.a.createElement(d.a,{className:"text-20",color:"action"},"person"))},variant:"outlined",required:!0,fullWidth:!0})),n.a.createElement(c.a,{item:!0,xs:12,sm:5},n.a.createElement(g.F,{className:"mb-16",value:se.firstName,onChange:ie,type:"text",name:"firstName",label:"Pr\xe9nom",validations:{minLength:2},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 2"},InputProps:{endAdornment:n.a.createElement(m.a,{position:"end"},n.a.createElement(d.a,{className:"text-20",color:"action"},"person"))},variant:"outlined",required:!0,fullWidth:!0}))),n.a.createElement(u.a,null),n.a.createElement(c.a,{container:!0,spacing:3,className:"mt-5"},n.a.createElement(c.a,{item:!0,xs:12,sm:6},n.a.createElement(g.F,{className:"mb-16",type:"text",name:"email",value:se.email,label:"Email",variant:"outlined",disabled:!0,fullWidth:!0})),n.a.createElement(c.a,{item:!0,xs:12,sm:6},n.a.createElement(g.F,{className:"mb-16",value:se.phone,onChange:ie,type:"text",name:"phone",label:"T\xe9l\xe9phone",validations:{minLength:10,maxLength:13},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10",maxLength:"La longueur maximale de caract\xe8re est 13"},InputProps:{endAdornment:n.a.createElement(m.a,{position:"end"},n.a.createElement(d.a,{className:"text-20",color:"action"},"local_phone"))},variant:"outlined",required:!0,fullWidth:!0}))),n.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary",className:"w-200 pr-auto mt-16 normal-case","aria-label":"Sauvegarder",disabled:!X||v.loading,value:"legacy"},"Sauvegarder",v.loading&&n.a.createElement(Q.a,{size:24,className:t.buttonProgress}))),2===ne&&n.a.createElement("div",null,n.a.createElement("input",{accept:"image/jpeg,image/gif,image/png",className:"hidden",id:"button-file",type:"file",disabled:v.profileReqInProgress,onChange:function(e){const t=e.target.files[0];t&&a(function(e,a){return(t,r)=>{const n=new FormData;n.append("file",e);const l=x.a.post("/api/avatars",n,{headers:{"Content-Type":"multipart/form-data"}});return t({type:U}),l.then(e=>Promise.all([e,t({type:q,payload:e.data}),t(V({avatar:e.data["@id"]},a))])).catch(e=>{t({type:H}),t(Object(w.B)({message:N.a.map(P.a.parseApiErrors(e),function(e,a){return a+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}(t,se.id))}}),n.a.createElement("div",{className:"flex justify-center sm:justify-start flex-wrap"},n.a.createElement("label",{htmlFor:"button-file",className:Object(Z.a)(t.profileImageUpload,"flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5")},v.profileReqInProgress?n.a.createElement(Q.a,{size:24,className:t.buttonProgress}):n.a.createElement(d.a,{fontSize:"large",color:"action"},"arrow_upward")),n.a.createElement("div",{className:Object(Z.a)(t.profileImageItem,"flex items-center cursor-pointer justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden  shadow-1 hover:shadow-5"),onClick:se.avatar?()=>window.open(g.G+se.avatar.url,"_blank"):""},se.avatar?n.a.createElement("img",{className:"max-w-none w-auto h-full",src:g.G+se.avatar.url,alt:se.societe}):n.a.createElement("img",{className:"max-w-none w-auto h-full",src:"assets/images/avatars/profile.jpg",alt:se.societe})))),3===ne&&n.a.createElement(G.a,{onValidSubmit:function(e){a(function(e,a){return(t,r)=>{const n=x.a.put("/api/users/".concat(a,"/reset-password"),e);return t({type:T}),n.then(e=>{e.data.user&&this.setSession(e.data.token),Promise.all([t({type:j,payload:e.data}),t(Object(w.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])}).then(()=>t(M(a))).catch(e=>{t({type:F,payload:P.a.parseApiErrors(e)})})}}(e,se.id))},onValid:he,onInvalid:Ee,ref:C,className:"flex pt-5 flex-col "},n.a.createElement(g.F,{className:"mb-16",type:ce.showPassword?"text":"password",name:"oldPassword",label:"Mot de passe actuel",validations:{minLength:6,matchRegexp:/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}/},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6",matchRegexp:"Le mot de passe doit \xeatre de 6 caract\xe8res minimum et contenir un lettre majuscules et des lettres minuscules et au moins un chiffre"},InputProps:{endAdornment:n.a.createElement(m.a,{position:"end"},n.a.createElement(h.a,{"aria-label":"toggle password visibility",onClick:de,onMouseDown:ue},ce.showPassword?n.a.createElement(ee.a,null):n.a.createElement(te.a,null)))},variant:"outlined",required:!0}),n.a.createElement(g.F,{className:"mb-16",type:ce.showPassword?"text":"password",name:"newPassword",label:"Nouveau mot de passe",validations:{minLength:6},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6"},InputProps:{endAdornment:n.a.createElement(m.a,{position:"end"},n.a.createElement(h.a,{"aria-label":"toggle password visibility",onClick:de,onMouseDown:ue},ce.showPassword?n.a.createElement(ee.a,null):n.a.createElement(te.a,null)))},variant:"outlined",required:!0}),n.a.createElement(g.F,{className:"mb-16",type:ce.showPassword?"text":"password",name:"newConfirmpassword",label:"Confirmer le mot de passe",validations:"equalsField:newPassword",validationErrors:{equalsField:"Passwords do not match"},InputProps:{endAdornment:n.a.createElement(m.a,{position:"end"},n.a.createElement(h.a,{"aria-label":"toggle password visibility",onClick:de,onMouseDown:ue},ce.showPassword?n.a.createElement(ee.a,null):n.a.createElement(te.a,null)))},variant:"outlined",required:!0}),n.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary",className:"w-200 pr-auto mt-16 normal-case","aria-label":"Sauvegarder",disabled:!X||v.loading,value:"legacy"},"Sauvegarder",v.loading&&n.a.createElement(Q.a,{size:24,className:t.buttonProgress})))),innerScroll:!0}))})}}]);