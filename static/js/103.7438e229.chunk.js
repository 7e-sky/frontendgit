(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1049:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};a.default=n},1375:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t(23),l=t(0),i=t.n(l),o=t(945),s=t(98),c=t(1044),m=t(1027),u=t(1040),d=t(1039),p=t(1013),E=t(1020),f=t(1035),v=t(963),h=t(958),g=t(345),b=t(40),y=t(141),x=t(6),P=t(140),w=t(54),O=t(107),N=t(36),A=t(10),L="[PROFILE ACHETEUR APP] REQUEST ACHETEUR",j="[PROFILE ACHETEUR APP] GET ACHETEUR",R="[PROFILE ACHETEUR APP] GET PAYS",C="[PROFILE ACHETEUR APP] GET VILLES",I="[PROFILE ACHETEUR APP] REQUEST PAYS",F="[PROFILE ACHETEUR APP] REQUEST VILLES",S="[PROFILE ACHETEUR APP] SAVE ERROR",T="[PROFILE ACHETEUR APP] GET SECTEURS",q="[PROFILE ACHETEUR APP] UPDATE ACHETEUR",U="[PROFILE ACHETEUR APP] REQUEST UPDATE_ACHETEUR",H="[PROFILE ACHETEUR APP] UPLOAD AVATAR",M="[PROFILE ACHETEUR APP] UPLOAD REQUEST",z="[PROFILE ACHETEUR APP] UPLOAD ERROR";function V(e){var a=w.a.get("/api/acheteurs/".concat(e));return function(e){return e({type:L}),a.then(function(a){e({type:j,payload:a.data})})}}function W(e){var a=w.a.get("".concat(e,"/villes?pagination=false&props[]=id&props[]=name"));return function(e){return e({type:F}),a.then(function(a){e({type:C,payload:a.data["hydra:member"]})})}}function k(e,a){return function(t,n){var r=w.a.put("/api/acheteurs/".concat(a),e);return t({type:U}),r.then(function(e){return Promise.all([t({type:q,payload:e.data}),t(Object(N.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])}).catch(function(e){t({type:S,payload:O.a.parseApiErrors(e)})})}}var D=t(46),B={pays:null,secteurs:null,loading:!1,requestAcheteur:!1,loadingVille:!1,villes:null,error:null,data:null,profileReqInProgress:!1,avatar:null,profile_deleted:null},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case U:case I:return Object(n.a)({},e,{loading:!0});case L:return Object(n.a)({},e,{requestAcheteur:!0});case F:return Object(n.a)({},e,{villes:null,loadingVille:!0});case j:return Object(n.a)({},e,{data:a.payload,requestAcheteur:!1,error:null});case T:return Object(n.a)({},e,{secteurs:A.a.keyBy(a.payload,"id")});case R:return Object(n.a)({},e,{pays:A.a.keyBy(a.payload,"id"),loading:!1});case C:return Object(n.a)({},e,{villes:A.a.keyBy(a.payload,"id"),loadingVille:!1});case q:return Object(n.a)({},e,{loading:!1,error:null});case S:return Object(n.a)({},e,{loading:!1,error:a.payload,success:!1,redirect_success:""});case M:return Object(n.a)({},e,{profileReqInProgress:!0});case H:return Object(n.a)({},e,{avatar:a.payload,profileReqInProgress:!1});case z:return Object(n.a)({},e,{profileReqInProgress:!1});default:return e}},G=Object(D.d)({profile:_}),Q=t(55),$=t.n(Q),J=t(1041),Y=t(1049),Z=t.n(Y),K=t(1032),X=t(2),ee=t(346),ae=t(351),te=t.n(ae),ne=t(352),re=t.n(ne),le=Object(g.a)(function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},buttonProgress:{color:Z.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},profileImageUpload:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut},profileImageItem:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{"& $profileImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:e.shadows[3],"& $profileImageFeaturedStar":{opacity:1},"&:hover $profileImageFeaturedStar":{opacity:1}}}}});a.default=Object(P.a)("profileAcheteurApp",G)(function(e){var a=Object(x.b)(),t=le(),g=Object(x.c)(function(e){return e.profileAcheteurApp.profile}),P=Object(x.c)(function(e){return e.auth.user}),L=Object(x.c)(function(e){return e.profileAcheteurApp.profile.pays}),j=Object(x.c)(function(e){return e.profileAcheteurApp.profile.villes}),C=Object(l.useRef)(null),F=Object(l.useState)(!1),D=Object(r.a)(F,2),B=D[0],_=D[1],G=Object(l.useState)(!1),Q=Object(r.a)(G,2),Y=Q[0],Z=Q[1],ae=Object(l.useState)(!1),ne=Object(r.a)(ae,2),ie=ne[0],oe=ne[1],se=Object(l.useState)(!1),ce=Object(r.a)(se,2),me=ce[0],ue=ce[1],de=Object(l.useState)(!1),pe=Object(r.a)(de,2),Ee=pe[0],fe=pe[1],ve=Object(l.useState)(0),he=Object(r.a)(ve,2),ge=he[0],be=he[1],ye=Object(y.b)(null),xe=ye.form,Pe=ye.handleChange,we=ye.setForm,Oe=Object(l.useState)({showPassword:!1}),Ne=Object(r.a)(Oe,2),Ae=Ne[0],Le=Ne[1],je=function(){Le(Object(n.a)({},Ae,{showPassword:!Ae.showPassword}))},Re=function(e){e.preventDefault()};function Ce(e,t){"ville"===t?(we(A.a.set(Object(n.a)({},xe),t,e)),Z(e)):"secteur"===t?(we(A.a.set(Object(n.a)({},xe),t,e)),ue(e)):(xe.ville="",oe(e),we(A.a.set(Object(n.a)({},xe),t,e)),e.value&&a(W(e.value)),"Maroc"===e.label?_(!0):_(!1))}function Ie(){fe(!1)}function Fe(){fe(!0)}return Object(l.useEffect)(function(){a(V(P.id))},[a,P.id]),Object(l.useEffect)(function(){a(function(){var e=w.a.get("/api/pays?pagination=false&props[]=id&props[]=name");return function(a){return a({type:I}),e.then(function(e){a({type:R,payload:e.data["hydra:member"]})})}}()),a(function(){var e=w.a.get("/api/secteurs?pagination=false&props[]=id&props[]=name");return function(a){return e.then(function(e){a({type:T,payload:e.data["hydra:member"]})})}}())},[a,P.id]),Object(l.useEffect)(function(){g.data&&!xe&&g.data.pays&&a(W(g.data.pays["@id"]))},[a,g.data,xe]),Object(l.useEffect)(function(){g.error&&(g.error.societe||g.error.newPassword||g.error.newConfirmpassword||g.error.oldPassword||g.error.phone||g.error.firstName||g.error.lastName||g.error.pays||g.error.ville||g.error.adresse1||g.error.adresse2||g.error.website||g.error.fix||g.error.ice||g.error.description)&&(C.current.updateInputsWithError(Object(n.a)({},g.error)),Ie())},[g.error]),Object(l.useEffect)(function(){(g.data&&!xe||g.data&&xe&&g.data.id!==xe.id)&&(g.data.pays&&"Maroc"===g.data.pays.name&&_(!0),we(Object(n.a)({},g.data)),ue({value:g.data.secteur["@id"],label:g.data.secteur.name}),Z({value:g.data.ville["@id"],label:g.data.ville.name}),oe({value:g.data.pays["@id"],label:g.data.pays.name}))},[xe,g.data,we]),Object(l.useEffect)(function(){g.avatar&&we(A.a.set(Object(n.a)({},xe),"avatar",g.avatar))},[xe,g.avatar,we]),i.a.createElement(i.a.Fragment,null,i.a.createElement(ee.Helmet,null,i.a.createElement("title",null,"Mon profil | Les Achats Industriels"),i.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),i.a.createElement("meta",{name:"googlebot",content:"noindex"})),i.a.createElement(b.o,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:g.requestAcheteur?i.a.createElement(K.a,{color:"secondary"}):xe&&i.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},i.a.createElement("div",{className:"flex flex-col items-start max-w-full"},i.a.createElement("div",{className:"flex items-center max-w-full"},i.a.createElement(b.d,{animation:"transition.expandIn",delay:300},xe.avatar?i.a.createElement(o.a,{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded",alt:"user photo",src:b.G+xe.avatar.url}):i.a.createElement(o.a,{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded"},xe.firstName[0])),i.a.createElement("div",{className:"flex flex-col min-w-0"},i.a.createElement(b.d,{animation:"transition.slideLeftIn",delay:300},i.a.createElement(s.a,{className:"text-16 sm:text-20 truncate"},xe.firstName&&xe.lastName?xe.firstName+" "+xe.lastName:"NOM & Pr\xe9nom")),i.a.createElement(b.d,{animation:"transition.slideLeftIn",delay:300},i.a.createElement(s.a,{variant:"caption"},xe.societe?xe.societe:"Soci\xe9t\xe9"," ",xe.email?" | "+xe.email:"")))))),contentToolbar:g.requestAcheteur?i.a.createElement("div",{className:t.root},i.a.createElement(K.a,{color:"secondary"})):xe&&i.a.createElement(c.a,{value:ge,onChange:function(e,a){be(a)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},i.a.createElement(m.a,{className:"h-64 normal-case",label:"Infos soci\xe9t\xe9"}),i.a.createElement(m.a,{className:"h-64 normal-case",label:"Infos utilisateur"}),i.a.createElement(m.a,{className:"h-64 normal-case",label:"Photo"}),i.a.createElement(m.a,{className:"h-64 normal-case",label:"Mot de passe"})),content:g.requestAcheteur?"":xe&&i.a.createElement("div",{className:" sm:p-10 max-w-2xl"},0===ge&&i.a.createElement($.a,{onValidSubmit:function(e){var t,n;a((t=e,n=xe.id,"Maroc"!==t.pays.label&&(t.ice=null),t.pays=t.pays.value,t.ville=t.ville.value,t.secteur=t.secteur.value,null===t.codepostal?delete t.codepostal:t.codepostal=parseInt(t.codepostal),function(e,a){var r=w.a.put("/api/acheteurs/".concat(n),t);return e({type:U}),r.then(function(a){return Promise.all([e({type:q,payload:a.data}),e(Object(N.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])}).then(function(){return e(V(n))}).catch(function(a){e({type:S,payload:O.a.parseApiErrors(a)})})}))},onValid:Fe,onInvalid:Ie,ref:C,className:"flex pt-5 flex-col "},i.a.createElement(u.a,{container:!0,spacing:3,className:"mb-5"},i.a.createElement(u.a,{item:!0,xs:12,sm:8},i.a.createElement("div",{className:"flex"},i.a.createElement(b.F,{className:"",label:"Raison sociale",autoFocus:!0,id:"societe",name:"societe",value:xe.societe,onChange:Pe,variant:"outlined",validations:{matchRegexp:/^[a-z]|([a-z][0-9])|([0-9][a-z])|([a-z][0-9][a-z])+$/i,minLength:2,maxLength:40},validationErrors:{minLength:"Raison sociale doit d\xe9passer 2 caract\xe8res alphanum\xe9riques",maxLength:"Raison sociale ne peut d\xe9passer 40 caract\xe8res alphanum\xe9riques",matchRegexp:"Raison sociale doit contenir des caract\xe8res alphanum\xe9riques"},required:!0,fullWidth:!0}))),i.a.createElement(u.a,{item:!0,xs:12,sm:4},i.a.createElement("div",{className:"flex"},i.a.createElement(b.F,{className:"",type:"text",name:"fix",value:xe.fix,onChange:Pe,label:"Fixe",autoComplete:"fix",validations:{minLength:10,maxLength:13},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10",maxLength:"La longueur maximale de caract\xe8re est 13"},InputProps:{endAdornment:i.a.createElement(d.a,{position:"end"},i.a.createElement(p.a,{className:"text-20",color:"action"},"local_phone"))},fullWidth:!0,variant:"outlined"}))),i.a.createElement(u.a,{item:!0,xs:12,sm:8},i.a.createElement(b.E,{id:"secteur",className:"",name:"secteur",value:me,placeholder:"S\xe9lectionner votre secteur d'activit\xe9",textFieldProps:{label:"Secteur d'activit\xe9",InputLabelProps:{shrink:!0},variant:"outlined",required:!0},options:g.secteurs,onChange:function(e){return Ce(e,"secteur")},fullWidth:!0})),i.a.createElement(u.a,{item:!0,xs:12,sm:4},i.a.createElement("div",{className:"flex"},i.a.createElement(b.F,{className:"",type:"text",name:"website",value:xe.website,onChange:Pe,autoComplete:"website",label:"Site Web",validations:"isUrl",validationErrors:{isUrl:"Exemple : http://www.exemple.com"},InputProps:{endAdornment:i.a.createElement(d.a,{position:"end"},i.a.createElement(p.a,{className:"text-20",color:"action"},"language"))},fullWidth:!0,variant:"outlined"}))),i.a.createElement(u.a,{item:!0,xs:12,sm:8},i.a.createElement("div",{className:"flex"},B?i.a.createElement(b.F,{className:"",type:"text",name:"ice",value:xe.ice,onChange:Pe,label:"ICE",autoComplete:"ice",validations:{minLength:15,maxLength:15,isNumeric:"isNumeric",matchRegexp:/^(?!.*?(\w)\1{14}).*$/},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 15",maxLength:"La longueur maximale de caract\xe8re est 15",isNumeric:"Cette valeur doit \xeatre num\xe9rique. ",matchRegexp:"ICE non valid"},variant:"outlined",required:!0,fullWidth:!0}):""))),i.a.createElement(E.a,null),i.a.createElement(u.a,{container:!0,spacing:3,className:"mb-5"},i.a.createElement(u.a,{item:!0,xs:12,sm:8},i.a.createElement("div",{className:"flex"},i.a.createElement(b.F,{className:"mt-20",type:"text",name:"adresse1",value:xe.adresse1,onChange:Pe,autoComplete:"adresse",label:"Adresse 1",validations:{minLength:10},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10"},InputProps:{endAdornment:i.a.createElement(d.a,{position:"end"},i.a.createElement(p.a,{className:"text-20",color:"action"},"location_on"))},variant:"outlined",required:!0,fullWidth:!0}))),i.a.createElement(u.a,{item:!0,xs:12,sm:4},i.a.createElement(b.E,{id:"pays",name:"pays",value:ie,placeholder:"S\xe9lectionner une Pays",textFieldProps:{label:"Pays",InputLabelProps:{shrink:!0},variant:"outlined",required:!0},className:"mt-20",options:L,onChange:function(e){return Ce(e,"pays")},required:!0})),i.a.createElement(u.a,{item:!0,xs:12,sm:4},i.a.createElement("div",{className:"flex"},i.a.createElement(b.F,{className:"",type:"text",name:"adresse2",value:xe.adresse2,onChange:Pe,autoComplete:"adresse",label:"Adresse 2",validations:{minLength:10},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10"},InputProps:{endAdornment:i.a.createElement(d.a,{position:"end"},i.a.createElement(p.a,{className:"text-20",color:"action"},"location_on"))},variant:"outlined",fullWidth:!0}))),i.a.createElement(u.a,{item:!0,xs:12,sm:4},i.a.createElement("div",{className:"flex"},i.a.createElement(b.F,{className:"",type:"number",name:"codepostal",value:String(xe.codepostal),onChange:Pe,validations:{minLength:3,maxLength:10},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 3",maxLength:"La longueur maximale de caract\xe8re est 10"},autoComplete:"codepostal",label:"Code Postal",variant:"outlined",fullWidth:!0}))),i.a.createElement(u.a,{item:!0,xs:12,sm:4},i.a.createElement(b.E,{id:"ville",name:"ville",value:Y,placeholder:"S\xe9lectionner une ville",textFieldProps:{label:"Ville",InputLabelProps:{shrink:!0},variant:"outlined",required:!0},className:"",options:j,isLoading:g.loadingVille,onChange:function(e){return Ce(e,"ville")},required:!0}))),i.a.createElement(E.a,null),i.a.createElement(u.a,{container:!0,spacing:3},i.a.createElement(u.a,{item:!0,xs:12,sm:12},i.a.createElement(b.F,{className:"mb-5 mt-20  w-full",type:"text",name:"description",value:xe.description,onChange:Pe,label:"Pr\xe9sentation",autoComplete:"description",validations:{minLength:10},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10"},variant:"outlined",multiline:!0,rows:"8"}))),i.a.createElement(f.a,{type:"submit",variant:"contained",color:"primary",className:"w-200 pr-auto mt-16 normal-case","aria-label":"Sauvegarder",disabled:!Ee||g.loading,value:"legacy"},"Sauvegarder",g.loading&&i.a.createElement(J.a,{size:24,className:t.buttonProgress}))),1===ge&&i.a.createElement($.a,{onValidSubmit:function(e){var t,n;a((t=e,n=xe.id,function(e,a){var r=w.a.put("/api/acheteurs/".concat(n),t);return e({type:U}),r.then(function(a){return Promise.all([e({type:q,payload:a.data}),e(Object(N.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])}).then(function(){return e(V(n))}).catch(function(a){e({type:S,payload:O.a.parseApiErrors(a)})})}))},onValid:Fe,onInvalid:Ie,ref:C,className:"flex pt-5 flex-col "},i.a.createElement(u.a,{container:!0,spacing:3},i.a.createElement(u.a,{item:!0,xs:12,sm:2},i.a.createElement(b.D,{className:"mb-16",name:"civilite",label:"Civilit\xe9",onChange:Pe,value:xe.civilite,variant:"outlined",required:!0,fullWidth:!0},i.a.createElement(v.a,{value:"M."},"M."),i.a.createElement(v.a,{value:"Mme"},"Mme"),i.a.createElement(v.a,{value:"Mlle"},"Mlle"))),i.a.createElement(u.a,{item:!0,xs:12,sm:5},i.a.createElement(b.F,{className:"mb-16",type:"text",name:"lastName",value:xe.lastName,onChange:Pe,label:"Nom",validations:{minLength:2},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 2"},InputProps:{endAdornment:i.a.createElement(d.a,{position:"end"},i.a.createElement(p.a,{className:"text-20",color:"action"},"person"))},variant:"outlined",required:!0,fullWidth:!0})),i.a.createElement(u.a,{item:!0,xs:12,sm:5},i.a.createElement(b.F,{className:"mb-16",value:xe.firstName,onChange:Pe,type:"text",name:"firstName",label:"Pr\xe9nom",validations:{minLength:2},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 2"},InputProps:{endAdornment:i.a.createElement(d.a,{position:"end"},i.a.createElement(p.a,{className:"text-20",color:"action"},"person"))},variant:"outlined",required:!0,fullWidth:!0}))),i.a.createElement(E.a,null),i.a.createElement(u.a,{container:!0,spacing:3,className:"mt-5"},i.a.createElement(u.a,{item:!0,xs:12,sm:6},i.a.createElement(b.F,{className:"mb-16",type:"text",name:"email",value:xe.email,label:"Email",variant:"outlined",disabled:!0,fullWidth:!0})),i.a.createElement(u.a,{item:!0,xs:12,sm:6},i.a.createElement(b.F,{className:"mb-16",value:xe.phone,onChange:Pe,type:"text",name:"phone",label:"T\xe9l\xe9phone",validations:{minLength:10,maxLength:13},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10",maxLength:"La longueur maximale de caract\xe8re est 13"},InputProps:{endAdornment:i.a.createElement(d.a,{position:"end"},i.a.createElement(p.a,{className:"text-20",color:"action"},"local_phone"))},variant:"outlined",required:!0,fullWidth:!0}))),i.a.createElement(f.a,{type:"submit",variant:"contained",color:"primary",className:"w-200 pr-auto mt-16 normal-case","aria-label":"Sauvegarder",disabled:!Ee||g.loading,value:"legacy"},"Sauvegarder",g.loading&&i.a.createElement(J.a,{size:24,className:t.buttonProgress}))),2===ge&&i.a.createElement("div",null,i.a.createElement("input",{accept:"image/jpeg,image/gif,image/png",className:"hidden",id:"button-file",type:"file",disabled:g.profileReqInProgress,onChange:function(e){var t=e.target.files[0];t&&a(function(e,a){return function(t,n){var r=new FormData;r.append("file",e);var l=w.a.post("/api/avatars",r,{headers:{"Content-Type":"multipart/form-data"}});return t({type:M}),l.then(function(e){return Promise.all([e,t({type:H,payload:e.data}),t(k({avatar:e.data["@id"]},a))])}).catch(function(e){t({type:z}),t(Object(N.B)({message:A.a.map(O.a.parseApiErrors(e),function(e,a){return a+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}(t,xe.id))}}),i.a.createElement("div",{className:"flex justify-center sm:justify-start flex-wrap"},i.a.createElement("label",{htmlFor:"button-file",className:Object(X.a)(t.profileImageUpload,"flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5")},g.profileReqInProgress?i.a.createElement(J.a,{size:24,className:t.buttonProgress}):i.a.createElement(p.a,{fontSize:"large",color:"action"},"arrow_upward")),i.a.createElement("div",{className:Object(X.a)(t.profileImageItem,"flex items-center cursor-pointer justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden  shadow-1 hover:shadow-5"),onClick:xe.avatar?function(){return window.open(b.G+xe.avatar.url,"_blank")}:""},xe.avatar?i.a.createElement("img",{className:"max-w-none w-auto h-full",src:b.G+xe.avatar.url,alt:xe.societe}):i.a.createElement("img",{className:"max-w-none w-auto h-full",src:"assets/images/avatars/profile.jpg",alt:xe.societe})))),3===ge&&i.a.createElement($.a,{onValidSubmit:function(e){a(function(e,a){var t=this;return function(n,r){var l=w.a.put("/api/users/".concat(a,"/reset-password"),e);return n({type:U}),l.then(function(e){e.data.user&&t.setSession(e.data.token),Promise.all([n({type:q,payload:e.data}),n(Object(N.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])}).then(function(){return n(V(a))}).catch(function(e){n({type:S,payload:O.a.parseApiErrors(e)})})}}(e,xe.id))},onValid:Fe,onInvalid:Ie,ref:C,className:"flex pt-5 flex-col "},i.a.createElement(b.F,{className:"mb-16",type:Ae.showPassword?"text":"password",name:"oldPassword",label:"Mot de passe actuel",validations:{minLength:6,matchRegexp:/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}/},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6",matchRegexp:"Le mot de passe doit \xeatre de 6 caract\xe8res minimum et contenir un lettre majuscules et des lettres minuscules et au moins un chiffre"},InputProps:{endAdornment:i.a.createElement(d.a,{position:"end"},i.a.createElement(h.a,{"aria-label":"toggle password visibility",onClick:je,onMouseDown:Re},Ae.showPassword?i.a.createElement(te.a,null):i.a.createElement(re.a,null)))},variant:"outlined",required:!0}),i.a.createElement(b.F,{className:"mb-16",type:Ae.showPassword?"text":"password",name:"newPassword",label:"Nouveau mot de passe",validations:{minLength:6},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6"},InputProps:{endAdornment:i.a.createElement(d.a,{position:"end"},i.a.createElement(h.a,{"aria-label":"toggle password visibility",onClick:je,onMouseDown:Re},Ae.showPassword?i.a.createElement(te.a,null):i.a.createElement(re.a,null)))},variant:"outlined",required:!0}),i.a.createElement(b.F,{className:"mb-16",type:Ae.showPassword?"text":"password",name:"newConfirmpassword",label:"Confirmer le mot de passe",validations:"equalsField:newPassword",validationErrors:{equalsField:"Passwords do not match"},InputProps:{endAdornment:i.a.createElement(d.a,{position:"end"},i.a.createElement(h.a,{"aria-label":"toggle password visibility",onClick:je,onMouseDown:Re},Ae.showPassword?i.a.createElement(te.a,null):i.a.createElement(re.a,null)))},variant:"outlined",required:!0}),i.a.createElement(f.a,{type:"submit",variant:"contained",color:"primary",className:"w-200 pr-auto mt-16 normal-case","aria-label":"Sauvegarder",disabled:!Ee||g.loading,value:"legacy"},"Sauvegarder",g.loading&&i.a.createElement(J.a,{size:24,className:t.buttonProgress})))),innerScroll:!0}))})}}]);