(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1242:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};a.default=n},1553:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(1147),s=t(1209),o=t(1130),i=t(89),c=t(1236),m=t(1219),u=t(1232),d=t(1231),p=t(1204),g=t(1212),E=t(1227),h=t(1150),f=t(1160),v=t(1140),b=t(1157),y=t(39),P=t(137),x=t(7),N=t(136),w=t(50),S=t(102),O=t(33),L=t(10);const C="[PROFILE APP] REQUEST FOURNISSEUR",R="[PROFILE APP] GET FOURNISSEUR",A="[PROFILE APP] GET PAYS",I="[PROFILE APP] GET VILLES",F="[PROFILE APP] REQUEST PAYS",j="[PROFILE APP] REQUEST VILLES",T="[PROFILE APP] SAVE ERROR",q="[PROFILE APP] UPDATE FOURNISSEUR",U="[PROFILE APP] REQUEST UPDATE_FOURNISSEUR",k="[PROFILE APP] GET_SOUS_SECTEUR",z="[PROFILE APP] UPLOAD AVATAR",_="[PROFILE APP] UPLOAD REQUEST",W="[PROFILE APP] UPLOAD ERROR";function D(e){const a=w.a.get("/api/fournisseurs/".concat(e));return e=>(e({type:C}),a.then(a=>{e({type:R,payload:a.data})}))}function M(e){const a=w.a.get("".concat(e,"/villes?pagination=false&props[]=id&props[]=name"));return e=>(e({type:j}),a.then(a=>{e({type:I,payload:a.data["hydra:member"]})}))}function V(e,a){return(t,n)=>{const r=w.a.put("/api/fournisseurs/".concat(a),e);return t({type:U}),r.then(e=>Promise.all([t({type:q,payload:e.data}),t(Object(O.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).catch(e=>{t({type:T,payload:S.a.parseApiErrors(e)})})}}var B=t(60),G=t.n(B);const H="[SEARCH CATEGORIES FRS APP] SC_SET_SEARCH_TEXT",Q="[SEARCH CATEGORIES FRS APP] REQUEST_DATA",$="[SEARCH CATEGORIES FRS APP] GET_DATA",Y="[SEARCH CATEGORIES FRS APP] SC_OPEN",J="[SEARCH CATEGORIES FRS APP] SC_CLOSE",X="[SEARCH CATEGORIES FRS APP] SC_SUSSP",Z="[SEARCH CATEGORIES FRS APP] CLEAN_UP",K=G.a.CancelToken;let ee,ae;function te(){return e=>e({type:Z})}function ne(e){return ae&&clearTimeout(ae),a=>{a({type:Q}),ae=setTimeout(()=>{a(function(e){ee&&ee();const a=w.a.get("/api/categories?name=".concat(e,"&del=false&props[]=id&props[]=name"),{cancelToken:new K(function(e){ee=e})});return e=>a.then(a=>{e({type:$,payload:a.data})}).catch(e=>{G.a.isCancel(e)&&console.log("get canceled")})}(e))},300+1e3*Math.random())}}var re=t(43);const le={pays:null,sousSecteurs:null,loading:!1,requestFournisseur:!1,loadingVille:!1,villes:null,error:null,data:null,profileReqInProgress:!1,avatar:null,profile_deleted:null};var se=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case U:case F:return{...e,loading:!0};case C:return{...e,requestFournisseur:!0};case j:return{...e,villes:null,loadingVille:!0};case R:return{...e,data:a.payload,requestFournisseur:!1,error:null};case k:return{...e,sousSecteurs:a.payload};case A:return{...e,pays:L.a.keyBy(a.payload,"id"),loading:!1};case I:return{...e,villes:L.a.keyBy(a.payload,"id"),loadingVille:!1};case q:return{...e,loading:!1,error:null};case T:return{...e,loading:!1,error:a.payload,success:!1,redirect_success:""};case _:return{...e,profileReqInProgress:!0};case z:return{...e,avatar:a.payload,profileReqInProgress:!1};case W:return{...e,profileReqInProgress:!1};default:return e}};const oe={searchText:"",suggestions:[],loading:!1,opened:!1,noSuggestions:!1};var ie=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case Z:return{...e,suggestions:[],noSuggestions:!1};case Q:return{...e,loading:!0,suggestions:[],noSuggestions:!1};case $:{const t=a.payload["hydra:member"],n=0===t.length;return{...e,suggestions:t,noSuggestions:n,loading:!1}}case H:return{...e,searchText:a.searchText};case Y:return{...e,opened:!0};case J:return{...e,opened:!1,searchText:""};case X:return{...e,opened:!1};default:return e}};var ce=Object(re.d)({profile:se,searchCategories:ie}),me=t(51),ue=t.n(me),de=t(1233),pe=t(1242),ge=t.n(pe),Ee=t(1224),he=t(2),fe=t(364),ve=t(139),be=t.n(ve),ye=t(1151),Pe=t(135),xe=t(371),Ne=t.n(xe),we=t(369),Se=t.n(we),Oe=t(370),Le=t.n(Oe);const Ce=Object(b.a)(e=>({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},chips:{flex:1,display:"flex",flexWrap:"wrap"},suggestion:{display:"block"},suggestionsList:{margin:0,padding:0,listStyleType:"none"},divider:{height:e.spacing(2)},buttonProgress:{color:ge.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},profileImageUpload:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut},profileImageItem:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{"& $profileImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:e.shadows[3],"& $profileImageFeaturedStar":{opacity:1},"&:hover $profileImageFeaturedStar":{opacity:1}}}}));function Re(e,a){let{query:t,isHighlighted:n}=a;return r.a.createElement(l.a,{selected:n,component:"div",className:"z-999",dense:!0},r.a.createElement(s.a,{className:"pl-0 ",primary:r.a.createElement(Ne.a,{highlightClassName:"YourHighlightClass",searchWords:[t],autoEscape:!0,textToHighlight:e.name})}))}function Ae(e){const{classes:a,inputRef:t=(()=>{}),ref:n,...l}=e;return r.a.createElement(ye.a,Object.assign({fullWidth:!0,InputProps:{inputRef:e=>{n(e),t(e)},classes:{input:a.input}}},l))}a.default=Object(N.a)("profileApp",ce)(function(e){const a=Object(n.useRef)(null),t=Object(n.useRef)(null),s=Object(x.c)(e=>{let{profileApp:a}=e;return a.searchCategories}),[b,N]=r.a.useState([]),C=e.match.params,{tab:R}=C,I=Object(x.b)(),j=Ce(),k=Object(x.c)(e=>{let{profileApp:a}=e;return a.profile}),B=Object(x.c)(e=>{let{auth:a}=e;return a.user}),G=Object(x.c)(e=>{let{profileApp:a}=e;return a.profile.pays}),Q=Object(x.c)(e=>{let{profileApp:a}=e;return a.profile.villes}),$=Object(n.useRef)(null),X=Object(n.useRef)(null),Z=Object(n.useRef)(null),[K,ee]=Object(n.useState)(!1),[ae,re]=Object(n.useState)(!1),[le,se]=Object(n.useState)(!1),[oe,ie]=Object(n.useState)(!1),[ce,me]=r.a.useState([]),[pe,ge]=Object(n.useState)(parseInt(R)?parseInt(R):0),{form:ve,handleChange:ye,setForm:xe}=Object(P.b)(null),[Ne,we]=Object(n.useState)({showPassword:!1}),Oe=()=>{we({...Ne,showPassword:!Ne.showPassword})},Ie=e=>{e.preventDefault()};function Fe(e,a){"ville"===a?(xe(L.a.set({...ve},a,e)),re(e)):(ve.ville="",xe(L.a.set({...ve},a,e)),se(e),e.value&&I(M(e.value)),"Maroc"===e.label?ee(!0):ee(!1))}function je(){ie(!1)}function Te(){ie(!0)}function qe(e){L.a.find(ce,s.searchText)||(me([...ce,s.searchText]),ze(),I(te()))}function Ue(e){ze(),I(te())}function ke(e){27===e.keyCode&&(ze(),I(te()))}function ze(){I({type:J}),document.removeEventListener("keydown",ke,!1)}Object(n.useEffect)(()=>{I(D(B.id))},[I,B.id]),Object(n.useEffect)(()=>{I(function(){const e=w.a.get("/api/pays?pagination=false&props[]=id&props[]=name");return a=>(a({type:F}),e.then(e=>{a({type:A,payload:e.data["hydra:member"]})}))}())},[I]),Object(n.useEffect)(()=>{k.data&&!ve&&k.data.pays&&I(M(k.data.pays["@id"]))},[I,k.data,ve]),Object(n.useEffect)(()=>{k.error&&(k.error.societe||k.error.pays||k.error.ville||k.error.adresse1||k.error.adresse2||k.error.website||k.error.fix||k.error.ice||k.error.description)&&($.current&&$.current.updateInputsWithError({...k.error}),je()),k.error&&(k.error.phone||k.error.firstName||k.error.lastName)&&(X.current&&X.current.updateInputsWithError({...k.error}),je()),k.error&&(k.error.newPassword||k.error.newConfirmpassword||k.error.oldPassword)&&(Z.current&&Z.current.updateInputsWithError({...k.error}),je())},[k.error]),Object(n.useEffect)(()=>{(k.data&&!ve||k.data&&ve&&k.data.id!==ve.id)&&(k.data.pays&&"Maroc"===k.data.pays.name&&ee(!0),xe({...k.data}),N(k.data.categories.map(e=>e)),re({value:k.data.ville["@id"],label:k.data.ville.name}),se({value:k.data.pays["@id"],label:k.data.pays.name}),k.data.autreCategories&&me(L.a.split(k.data.autreCategories,",")))},[ve,k.data,xe]),Object(n.useEffect)(()=>{k.avatar&&xe(L.a.set({...ve},"avatar",k.avatar))},[ve,k.avatar,xe]);const _e={renderInputComponent:Ae,suggestions:s.suggestions,focusInputOnSuggestionClick:!1,onSuggestionsFetchRequested:function(e){let{value:a,reason:t}=e;"input-changed"===t&&a&&a.trim().length>1&&I(ne(a.trim()))},onSuggestionsClearRequested:function(){},renderSuggestion:Re};return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.Helmet,null,r.a.createElement("title",null,"Profil | Les Achats Industriels"),r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("meta",{name:"googlebot",content:"noindex"})),r.a.createElement(y.o,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:k.requestFournisseur?r.a.createElement(Ee.a,{color:"secondary"}):ve&&r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex flex-col items-start max-w-full"},r.a.createElement("div",{className:"flex items-center max-w-full"},r.a.createElement(y.d,{animation:"transition.expandIn",delay:300},ve.avatar?r.a.createElement(o.a,{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded",alt:"user photo",src:y.G+ve.avatar.url}):r.a.createElement(o.a,{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded"},ve.firstName[0])),r.a.createElement("div",{className:"flex flex-col min-w-0"},r.a.createElement(y.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(i.a,{className:"text-16 sm:text-20 truncate"},ve.firstName&&ve.lastName?ve.firstName+" "+ve.lastName:"NOM & Pr\xe9nom")),r.a.createElement(y.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(i.a,{variant:"caption"},ve.societe?ve.societe:"Soci\xe9t\xe9"," ",ve.email?" | "+ve.email:"")))))),contentToolbar:k.requestFournisseur?r.a.createElement("div",{className:j.root},r.a.createElement(Ee.a,{color:"secondary"})):ve&&r.a.createElement(c.a,{value:pe,onChange:function(e,a){ge(a)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},r.a.createElement(m.a,{className:"h-64 normal-case",label:"Infos soci\xe9t\xe9"}),r.a.createElement(m.a,{className:"h-64 normal-case",label:"Produits"}),r.a.createElement(m.a,{className:"h-64 normal-case",label:"Infos utilisateur"}),r.a.createElement(m.a,{className:"h-64 normal-case",label:"Photo"}),r.a.createElement(m.a,{className:"h-64 normal-case",label:"Mot de passe"})),content:k.requestFournisseur?"":ve&&r.a.createElement("div",{className:" sm:p-10 max-w-2xl"},0===pe&&r.a.createElement(ue.a,{onValidSubmit:function(e){var a,t;I((a=e,t=ve.id,"Maroc"!==a.pays.label&&(a.ice=null),a.pays=a.pays.value,a.ville=a.ville.value,null===a.codepostal?delete a.codepostal:a.codepostal=parseInt(a.codepostal),(e,n)=>{const r=w.a.put("/api/fournisseurs/".concat(t),a);return e({type:U}),r.then(a=>Promise.all([e({type:q,payload:a.data}),e(Object(O.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).then(()=>e(D(t))).catch(a=>{e({type:T,payload:S.a.parseApiErrors(a)})})}))},onValid:Te,onInvalid:je,ref:$,className:"flex pt-5 flex-col "},r.a.createElement(u.a,{container:!0,spacing:3,className:"mb-5"},r.a.createElement(u.a,{item:!0,xs:12,sm:8},r.a.createElement("div",{className:"flex"},r.a.createElement(y.F,{className:"",label:"Raison sociale",autoFocus:!0,id:"societe",name:"societe",value:ve.societe,onChange:ye,variant:"outlined",validations:{matchRegexp:/^[a-z]|([a-z][0-9])|([0-9][a-z])|([a-z][0-9][a-z])+$/i,minLength:2,maxLength:40},validationErrors:{minLength:"Raison sociale doit d\xe9passer 2 caract\xe8res alphanum\xe9riques",maxLength:"Raison sociale ne peut d\xe9passer 40 caract\xe8res alphanum\xe9riques",matchRegexp:"Raison sociale doit contenir des caract\xe8res alphanum\xe9riques"},required:!0,fullWidth:!0}))),r.a.createElement(u.a,{item:!0,xs:12,sm:4},r.a.createElement("div",{className:"flex"},r.a.createElement(y.F,{className:"",type:"text",name:"fix",value:ve.fix,onChange:ye,label:"Fixe",autoComplete:"fix",validations:{minLength:10,maxLength:13},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10",maxLength:"La longueur maximale de caract\xe8re est 13"},InputProps:{endAdornment:r.a.createElement(d.a,{position:"end"},r.a.createElement(p.a,{className:"text-20",color:"action"},"local_phone"))},fullWidth:!0,variant:"outlined"}))),r.a.createElement(u.a,{item:!0,xs:12,sm:8},r.a.createElement("div",{className:"flex"},K?r.a.createElement(y.F,{className:"",type:"text",name:"ice",value:ve.ice,onChange:ye,label:"ICE",autoComplete:"ice",validations:{minLength:15,maxLength:15,isNumeric:"isNumeric",matchRegexp:/^(?!.*?(\w)\1{14}).*$/},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 15",maxLength:"La longueur maximale de caract\xe8re est 15",isNumeric:"Cette valeur doit \xeatre num\xe9rique. ",matchRegexp:"ICE non valid. "},variant:"outlined",required:!0,fullWidth:!0}):"")),r.a.createElement(u.a,{item:!0,xs:12,sm:4},r.a.createElement("div",{className:"flex"},r.a.createElement(y.F,{className:"",type:"text",name:"website",value:ve.website,onChange:ye,autoComplete:"website",label:"Site Web",validations:"isUrl",validationErrors:{isUrl:"Exemple : http://www.exemple.com"},InputProps:{endAdornment:r.a.createElement(d.a,{position:"end"},r.a.createElement(p.a,{className:"text-20",color:"action"},"language"))},fullWidth:!0,variant:"outlined"})))),r.a.createElement(g.a,null),r.a.createElement(u.a,{container:!0,spacing:3,className:"mb-5"},r.a.createElement(u.a,{item:!0,xs:12,sm:8},r.a.createElement("div",{className:"flex"},r.a.createElement(y.F,{className:"mt-20",type:"text",name:"adresse1",value:ve.adresse1,onChange:ye,autoComplete:"adresse",label:"Adresse 1",validations:{minLength:10},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10"},InputProps:{endAdornment:r.a.createElement(d.a,{position:"end"},r.a.createElement(p.a,{className:"text-20",color:"action"},"location_on"))},variant:"outlined",required:!0,fullWidth:!0}))),r.a.createElement(u.a,{item:!0,xs:12,sm:4},r.a.createElement(y.E,{id:"pays",name:"pays",value:le,placeholder:"S\xe9lectionner une Pays",textFieldProps:{label:"Pays",InputLabelProps:{shrink:!0},variant:"outlined",required:!0},className:"mt-20",options:G,onChange:e=>Fe(e,"pays"),required:!0})),r.a.createElement(u.a,{item:!0,xs:12,sm:4},r.a.createElement("div",{className:"flex"},r.a.createElement(y.F,{className:"",type:"text",name:"adresse2",value:ve.adresse2,onChange:ye,autoComplete:"adresse",label:"Adresse 2",validations:{minLength:10},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10"},InputProps:{endAdornment:r.a.createElement(d.a,{position:"end"},r.a.createElement(p.a,{className:"text-20",color:"action"},"location_on"))},variant:"outlined",fullWidth:!0}))),r.a.createElement(u.a,{item:!0,xs:12,sm:4},r.a.createElement("div",{className:"flex"},r.a.createElement(y.F,{className:"",type:"number",name:"codepostal",value:String(ve.codepostal),onChange:ye,validations:{minLength:3,maxLength:10},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 3",maxLength:"La longueur maximale de caract\xe8re est 10"},autoComplete:"codepostal",label:"Code Postal",variant:"outlined",fullWidth:!0}))),r.a.createElement(u.a,{item:!0,xs:12,sm:4},r.a.createElement(y.E,{id:"ville",name:"ville",value:ae,placeholder:"S\xe9lectionner une ville",textFieldProps:{label:"Ville",InputLabelProps:{shrink:!0},variant:"outlined",required:!0},className:"",options:Q,isLoading:k.loadingVille,onChange:e=>Fe(e,"ville"),required:!0}))),r.a.createElement(g.a,null),r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,xs:12,sm:12},r.a.createElement(y.F,{className:"mb-5 mt-20  w-full",type:"text",name:"description",value:ve.description,onChange:ye,label:"Pr\xe9sentation",autoComplete:"description",validations:{minLength:10},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10"},variant:"outlined",multiline:!0,rows:"8"}))),r.a.createElement(E.a,{type:"submit",variant:"contained",color:"primary",className:"w-200 pr-auto mt-16 normal-case","aria-label":"Sauvegarder",disabled:!oe||k.loading,value:"legacy"},"Sauvegarder",k.loading&&r.a.createElement(de.a,{size:24,className:j.buttonProgress}))),1===pe&&r.a.createElement(ue.a,{onValidSubmit:function(){I(function(e,a,t){var n={categories:L.a.map(e,function(e,a){return e["@id"]}),autreCategories:a.length>0?L.a.join(a,", "):null};return(e,a)=>{const r=w.a.put("/api/fournisseurs/".concat(t),n);return e({type:U}),r.then(a=>Promise.all([e({type:q,payload:a.data}),e(Object(O.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).then(()=>e(D(t))).catch(a=>{e({type:T,payload:S.a.parseApiErrors(a)})})}}(b,ce,ve.id))},className:"flex pt-5 flex-col "},r.a.createElement("div",{ref:t},r.a.createElement(i.a,{variant:"caption",className:"flex items-center mb-16"},r.a.createElement(p.a,null,"info"),"\u2002Vous pouvez choisir un ou plusieurs produits "),r.a.createElement(be.a,Object.assign({},_e,{getSuggestionValue:e=>s.searchText,onSuggestionSelected:(e,a)=>{let{suggestion:n,method:r}=a;"enter"===r&&e.preventDefault(),!L.a.find(b,["name",n.name])&&N([n,...b]),t.current.focus()},inputProps:{classes:j,label:"Produits",placeholder:"Produit (ex: Rayonnage lourd)",value:s.searchText,variant:"outlined",name:"categories",onChange:function(e){I(function(e){return{type:H,searchText:e.target.value}}(e))},onFocus:function(){I({type:Y}),document.addEventListener("keydown",ke,!1)},InputLabelProps:{shrink:!0}},theme:{container:j.container,suggestionsContainerOpen:j.suggestionsContainerOpen,suggestionsList:j.suggestionsList,suggestion:j.suggestion},renderSuggestionsContainer:e=>r.a.createElement(h.a,{anchorEl:t.current,open:Boolean(e.children)||s.noSuggestions||s.loading,popperOptions:{positionFixed:!0},className:"z-9999 mb-8"},r.a.createElement("div",{ref:a},r.a.createElement(Pe.a,Object.assign({elevation:1,square:!0},e.containerProps,{style:{width:t.current?t.current.clientWidth:null}}),e.children,s.noSuggestions&&r.a.createElement(i.a,{className:"px-16 py-12"},"Ce produit n'existe pas encore sur notre base de donn\xe9es. ",r.a.createElement("br",null),"Ajouter ce produit ",r.a.createElement(E.a,{size:"small",onClick:qe,variant:"contained",color:"secondary"},"oui")," ",r.a.createElement(E.a,{size:"small",onClick:Ue,variant:"outlined",color:"primary"},"non")),s.loading&&r.a.createElement("div",{className:"px-16 py-12 text-center"},r.a.createElement(de.a,{color:"secondary"})," ",r.a.createElement("br",null)," Chargement ..."))))}))),b&&b.length>0&&r.a.createElement(i.a,{paragraph:!0,className:"mt-8 mb-2 font-bold"},"Produit(s) s\xe9lection\xe9(s)"),r.a.createElement("div",{className:Object(he.a)(j.chips)},b&&b.length>0&&b.map((e,a)=>r.a.createElement(f.a,{key:a,label:e.name,onDelete:()=>(function(e){N(L.a.reject(b,function(a){return a.id===e}))})(e.id),className:"mt-8 mr-8"}))),ce&&ce.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{paragraph:!0,className:"mt-8 mb-2 font-bold"},"Produit(s) sugg\xe9r\xe9(s)"),r.a.createElement(i.a,{variant:"caption",className:""},"Ce produit sera activ\xe9 une fois valid\xe9 par administrateur, Merci.")),r.a.createElement("div",{className:Object(he.a)(j.chips)},ce&&ce.length>0&&ce.map(e=>r.a.createElement(f.a,{key:e,color:"secondary",label:e,onDelete:()=>(function(e){me(L.a.reject(ce,function(a){return a===e}))})(e),className:"mt-8 mr-8"}))),r.a.createElement(E.a,{type:"submit",variant:"contained",color:"primary",className:"w-200 pr-auto mt-16 normal-case","aria-label":"Sauvegarder",disabled:k.loading||!b.length,value:"legacy"},"Sauvegarder",k.loading&&r.a.createElement(de.a,{size:24,className:j.buttonProgress}))),2===pe&&r.a.createElement(ue.a,{onValidSubmit:function(e){var a,t;I((a=e,t=ve.id,(e,n)=>{const r=w.a.put("/api/fournisseurs/".concat(t),a);return e({type:U}),r.then(a=>Promise.all([e({type:q,payload:a.data}),e(Object(O.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).then(()=>e(D(t))).catch(a=>{e({type:T,payload:S.a.parseApiErrors(a)})})}))},onValid:Te,onInvalid:je,ref:X,className:"flex pt-5 flex-col "},r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,xs:12,sm:2},r.a.createElement(y.D,{className:"mb-16",name:"civilite",label:"Civilit\xe9",onChange:ye,value:ve.civilite,variant:"outlined",required:!0,fullWidth:!0},r.a.createElement(l.a,{value:"M."},"M."),r.a.createElement(l.a,{value:"Mme"},"Mme"),r.a.createElement(l.a,{value:"Mlle"},"Mlle"))),r.a.createElement(u.a,{item:!0,xs:12,sm:5},r.a.createElement(y.F,{className:"mb-16",type:"text",name:"lastName",value:ve.lastName,onChange:ye,label:"Nom",validations:{minLength:2},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 2"},InputProps:{endAdornment:r.a.createElement(d.a,{position:"end"},r.a.createElement(p.a,{className:"text-20",color:"action"},"person"))},variant:"outlined",required:!0,fullWidth:!0})),r.a.createElement(u.a,{item:!0,xs:12,sm:5},r.a.createElement(y.F,{className:"mb-16",value:ve.firstName,onChange:ye,type:"text",name:"firstName",label:"Pr\xe9nom",validations:{minLength:2},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 2"},InputProps:{endAdornment:r.a.createElement(d.a,{position:"end"},r.a.createElement(p.a,{className:"text-20",color:"action"},"person"))},variant:"outlined",required:!0,fullWidth:!0}))),r.a.createElement(g.a,null),r.a.createElement(u.a,{container:!0,spacing:3,className:"mt-5"},r.a.createElement(u.a,{item:!0,xs:12,sm:6},r.a.createElement(y.F,{className:"mb-16",type:"text",name:"email",value:ve.email,label:"Email",variant:"outlined",disabled:!0,fullWidth:!0})),r.a.createElement(u.a,{item:!0,xs:12,sm:6},r.a.createElement(y.F,{className:"mb-16",value:ve.phone,onChange:ye,type:"text",name:"phone",label:"T\xe9l\xe9phone",validations:{minLength:10,maxLength:13},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10",maxLength:"La longueur maximale de caract\xe8re est 13"},InputProps:{endAdornment:r.a.createElement(d.a,{position:"end"},r.a.createElement(p.a,{className:"text-20",color:"action"},"local_phone"))},variant:"outlined",required:!0,fullWidth:!0}))),r.a.createElement(E.a,{type:"submit",variant:"contained",color:"primary",className:"w-200 pr-auto mt-16 normal-case","aria-label":"Sauvegarder",disabled:!oe||k.loading,value:"legacy"},"Sauvegarder",k.loading&&r.a.createElement(de.a,{size:24,className:j.buttonProgress}))),3===pe&&r.a.createElement("div",null,r.a.createElement("input",{accept:"image/jpeg,image/gif,image/png",className:"hidden",id:"button-file",type:"file",disabled:k.profileReqInProgress,onChange:function(e){const a=e.target.files[0];a&&I(function(e,a){return(t,n)=>{const r=new FormData;r.append("file",e);const l=w.a.post("/api/avatars",r,{headers:{"Content-Type":"multipart/form-data"}});return t({type:_}),l.then(e=>Promise.all([e,t({type:z,payload:e.data}),t(V({avatar:e.data["@id"]},a))])).catch(e=>{t({type:W}),t(Object(O.B)({message:L.a.map(S.a.parseApiErrors(e),function(e,a){return a+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}(a,ve.id))}}),r.a.createElement("div",{className:"flex justify-center sm:justify-start flex-wrap"},r.a.createElement("label",{htmlFor:"button-file",className:Object(he.a)(j.profileImageUpload,"flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5")},k.profileReqInProgress?r.a.createElement(de.a,{size:24,className:j.buttonProgress}):r.a.createElement(p.a,{fontSize:"large",color:"action"},"arrow_upward")),r.a.createElement("div",{className:Object(he.a)(j.profileImageItem,"flex items-center cursor-pointer justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden  shadow-1 hover:shadow-5"),onClick:ve.avatar?()=>window.open(y.G+ve.avatar.url,"_blank"):""},ve.avatar?r.a.createElement("img",{className:"max-w-none w-auto h-full",src:y.G+ve.avatar.url,alt:ve.societe}):r.a.createElement("img",{className:"max-w-none w-auto h-full",src:"assets/images/avatars/profile.jpg",alt:ve.societe})))),4===pe&&r.a.createElement(ue.a,{onValidSubmit:function(e){I(function(e,a){return(t,n)=>{const r=w.a.put("/api/users/".concat(a,"/reset-password"),e);return t({type:U}),r.then(e=>{e.data.user&&this.setSession(e.data.token),Promise.all([t({type:q,payload:e.data}),t(Object(O.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])}).then(()=>t(D(a))).catch(e=>{t({type:T,payload:S.a.parseApiErrors(e)})})}}(e,ve.id))},onValid:Te,onInvalid:je,ref:Z,className:"flex pt-5 flex-col "},r.a.createElement(y.F,{className:"mb-16",type:Ne.showPassword?"text":"password",name:"oldPassword",label:"Mot de passe actuel",validations:{minLength:6},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6"},InputProps:{endAdornment:r.a.createElement(d.a,{position:"end"},r.a.createElement(v.a,{"aria-label":"toggle password visibility",onClick:Oe,onMouseDown:Ie},Ne.showPassword?r.a.createElement(Se.a,null):r.a.createElement(Le.a,null)))},variant:"outlined",required:!0}),r.a.createElement(y.F,{className:"mb-16",type:Ne.showPassword?"text":"password",name:"newPassword",label:"Nouveau mot de passe",validations:{minLength:6,matchRegexp:/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}/},validationErrors:{minLength:"La longueur minimale des caract\xe8res est de 6",matchRegexp:"Le mot de passe doit \xeatre de 6 caract\xe8res minimum et contenir un lettre majuscules et des lettres minuscules et au moins un chiffre"},InputProps:{endAdornment:r.a.createElement(d.a,{position:"end"},r.a.createElement(v.a,{"aria-label":"toggle password visibility",onClick:Oe,onMouseDown:Ie},Ne.showPassword?r.a.createElement(Se.a,null):r.a.createElement(Le.a,null)))},variant:"outlined",required:!0}),r.a.createElement(y.F,{className:"mb-16",type:Ne.showPassword?"text":"password",name:"newConfirmpassword",label:"Confirmer le mot de passe",validations:"equalsField:newPassword",validationErrors:{equalsField:"Passwords do not match"},InputProps:{endAdornment:r.a.createElement(d.a,{position:"end"},r.a.createElement(v.a,{"aria-label":"toggle password visibility",onClick:Oe,onMouseDown:Ie},Ne.showPassword?r.a.createElement(Se.a,null):r.a.createElement(Le.a,null)))},variant:"outlined",required:!0}),r.a.createElement(E.a,{type:"submit",variant:"contained",color:"primary",className:"w-200 pr-auto mt-16 normal-case","aria-label":"Sauvegarder",disabled:!oe||k.loading,value:"legacy"},"Sauvegarder",k.loading&&r.a.createElement(de.a,{size:24,className:j.buttonProgress})))),innerScroll:!0}))})}}]);