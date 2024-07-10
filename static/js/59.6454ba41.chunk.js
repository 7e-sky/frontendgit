(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1049:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};t.default=r},1072:function(e,t,a){"use strict";var r=a(54),n=a(36),i="[SECTEURS APP ADMIN] REQUEST SECTEURS",o="[SECTEURS APP ADMIN] GET SECTEURS",c="[SECTEURS APP ADMIN] SET SECTEURS SEARCH TEXT";function s(e){return{type:c,searchText:e.target.value}}function u(){var e=r.a.get("/api/secteurs?pagination=false&props[]=name&props[]=id&props[]=del&props[]=image");return function(t){return t({type:i}),e.then(function(e){return t({type:o,payload:e.data})})}}function l(e){var t={del:!0,name:e.name+"_deleted-"+e.id};return function(a){return a({type:i}),r.a.put("/api/secteurs/".concat(e.id),t).then(function(e){return Promise.all([a(Object(n.B)({message:"secteur bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(function(){return a(u())})}).catch(function(e){e.response.data&&e.response.data["hydra:description"]&&a(Object(n.B)({message:e.response.data["hydra:description"],anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))}).then(function(){return a(u())})}}var d=a(107),m=a(10),f="[SECTEUR APP APP] REQUEST SECTEUR",p="[SECTEUR APP APP] GET SECTEUR",E="[SECTEUR APP APP] SAVE ERROR",g="[SECTEUR APP APP] UPDATE SECTEUR",h="[SECTEUR APP APP] REQUEST SAVE_SECTEUR",b="[SECTEUR APP APP] UPLOAD REQUEST",v="[SECTEUR APP APP] UPLOAD ERROR",P="[SECTEUR APP APP] UPLOAD ATTACHEMENT",S="[SECTEUR APP APP] CLEAN_UP";function y(){return function(e){return e({type:S})}}function O(e){var t=r.a.get("/api/secteurs/".concat(e,"&props[]=name&props[]=id&props[]=image&props[]=del"));return function(e){return e({type:f}),t.then(function(t){e({type:p,payload:t.data})})}}function j(e,t){return e.image&&(e.image=e.image["@id"]),function(a,i){var o=r.a.put(e["@id"],e);return a({type:h}),o.then(function(e){return Promise.all([a({type:g,payload:e.data}),a(Object(n.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"})),t.push("/parametres/secteurs")])}).catch(function(e){a({type:E,payload:d.a.parseApiErrors(e)})})}}function A(e,t){e.image&&(e.image=e.image["@id"]);var a=r.a.post("/api/secteurs",e);return function(e){return e({type:h}),a.then(function(a){e(Object(n.B)({message:"Secteur sauvegard\xe9"})),e({type:g,payload:a.data}),t.push("/parametres/secteurs")}).catch(function(t){e({type:E,payload:d.a.parseApiErrors(t)})})}}function w(e){return function(t,a){var i=new FormData;i.append("file",e);var o=r.a.post("/api/image_secteur",i,{headers:{"Content-Type":"multipart/form-data"}});return t({type:b}),o.then(function(e){return Promise.all([e,t({type:P,payload:e.data}),t(Object(n.B)({message:"Image uploaded!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])}).catch(function(e){t({type:v}),t(Object(n.B)({message:m.a.map(d.a.parseApiErrors(e),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}function T(){return{type:p,payload:{name:"",image:null}}}var R="[DIALOG] OPEN",C="[DIALOG] CLOSE";function x(){return{type:C}}function U(e){return{type:R,options:e}}a.d(t,"f",function(){return i}),a.d(t,"c",function(){return o}),a.d(t,"i",function(){return c}),a.d(t,"d",function(){return"[SECTEURS APP] REMOVE SECTEUR"}),a.d(t,"u",function(){return s}),a.d(t,"p",function(){return u}),a.d(t,"s",function(){return l}),a.d(t,"b",function(){return p}),a.d(t,"g",function(){return E}),a.d(t,"h",function(){return g}),a.d(t,"e",function(){return h}),a.d(t,"l",function(){return b}),a.d(t,"k",function(){return v}),a.d(t,"j",function(){return P}),a.d(t,"a",function(){return S}),a.d(t,"m",function(){return y}),a.d(t,"o",function(){return O}),a.d(t,"v",function(){return j}),a.d(t,"t",function(){return A}),a.d(t,"w",function(){return w}),a.d(t,"q",function(){return T}),a.d(t,"n",function(){return x}),a.d(t,"r",function(){return U})},1157:function(e,t,a){"use strict";var r=a(46),n=a(8),i=a(1072),o={entities:[],loading:!1,searchText:""},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.f:return Object(n.a)({},e,{loading:!0});case i.c:return Object(n.a)({},e,{entities:t.payload["hydra:member"],loading:!1});case i.i:return Object(n.a)({},e,{searchText:t.searchText});default:return e}},s={loadingSS:!1,requestSecteur:!1,error:null,data:null,secteurReqInProgress:!1,image:null},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.a:return Object(n.a)({},e,{loadingS:!1,requestSecteur:!1,error:null,data:null,secteurReqInProgress:!1,image:null});case i.d:return Object(n.a)({},e,{loadingS:!1});case i.e:case i.f:return Object(n.a)({},e,{loadingS:!0});case i.b:return Object(n.a)({},e,{data:t.payload,requestSecteur:!1,error:null});case i.h:return Object(n.a)({},e,{loadingS:!1,error:null});case i.g:return Object(n.a)({},e,{loadingS:!1,error:t.payload});case i.l:return Object(n.a)({},e,{secteurReqInProgress:!0});case i.j:return Object(n.a)({},e,{image:t.payload,secteurReqInProgress:!1});case i.k:return Object(n.a)({},e,{secteurReqInProgress:!1});default:return e}},l=a(36),d={state:!1,options:{children:"Hi"}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.f:return Object(n.a)({},e,{state:!0,options:Object(n.a)({},e.options,t.options)});case l.a:return Object(n.a)({},e,{state:!1});default:return e}},f=Object(r.d)({secteurs:c,secteur:u,dialog:m});t.a=f},1314:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a(23),i=a(0),o=a.n(i),c=a(98),s=a(1013),u=a(1035),l=a(1044),d=a(1027),m=a(1040),f=a(345),p=a(40),E=a(141),g=a(6),h=a(140),b=a(1072),v=a(1157),P=a(10),S=a(55),y=a.n(S),O=a(1041),j=a(1049),A=a.n(j),w=a(2),T=a(18),R=a(1032),C=Object(f.a)(function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},buttonProgress:{color:A.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},profileImageUpload:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut},profileImageItem:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{"& $profileImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:e.shadows[3],"& $profileImageFeaturedStar":{opacity:1},"&:hover $profileImageFeaturedStar":{opacity:1}}}}});t.default=Object(h.a)("secteursApp",v.a)(function(e){var t=Object(g.b)(),a=C(),f=Object(g.c)(function(e){return e.secteursApp.secteur}),h=Object(i.useRef)(null),v=Object(i.useState)(0),S=Object(n.a)(v,2),j=S[0],A=S[1],x=Object(E.b)(null),U=x.form,I=x.handleChange,N=x.setForm;return Object(i.useEffect)(function(){return function(){var a=e.match.params.secteurId;t("new"===a?b.q():b.o(a))}(),function(){t(b.m())}},[t,e.match.params]),Object(i.useEffect)(function(){f.error&&0===j&&f.error.name&&h.current.updateInputsWithError(Object(r.a)({},f.error))},[f.error]),Object(i.useEffect)(function(){(f.data&&!U||f.data&&U&&f.data.id!==U.id)&&N(Object(r.a)({},f.data))},[U,f.data,N]),Object(i.useEffect)(function(){f.image&&N(P.a.set(Object(r.a)({},U),"image",f.image))},[f.image]),o.a.createElement(p.o,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:U&&o.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},o.a.createElement("div",{className:"flex flex-col items-start max-w-full"},o.a.createElement(p.d,{animation:"transition.slideRightIn",delay:300},o.a.createElement(c.a,{className:"normal-case flex items-center sm:mb-12",component:T.a,role:"button",to:"/parametres/secteurs",color:"inherit"},o.a.createElement(s.a,{className:"mr-4 text-20"},"arrow_back"),"Secteurs")),o.a.createElement("div",{className:"flex items-center max-w-full"},o.a.createElement("div",{className:"flex flex-col min-w-0"},o.a.createElement(p.d,{animation:"transition.slideLeftIn",delay:300},o.a.createElement(c.a,{className:"text-16 sm:text-20 truncate"},U.name?U.name:"Nouveau Secteur"))))),o.a.createElement(p.d,{animation:"transition.slideRightIn",delay:300},o.a.createElement(u.a,{className:"whitespace-no-wrap",variant:"contained",disabled:f.loadingSSS||!U.name||!U.image,onClick:function(){return function(a){var r=e.match.params.secteurId;t("new"===r?b.t(U,e.history):b.v(U,e.history))}()}},"Sauvegarder",f.loadingSSS&&o.a.createElement(O.a,{size:24,className:a.buttonProgress})))),contentToolbar:U&&o.a.createElement(l.a,{value:j,onChange:function(e,t){A(t)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},o.a.createElement(d.a,{className:"h-64 normal-case",label:"Infos secteur"}),o.a.createElement(d.a,{className:"h-64 normal-case",label:"File"})),content:f.requestSecteur?o.a.createElement(R.a,{color:"secondary"}):U&&o.a.createElement("div",{className:" sm:p-10 max-w-2xl"},0===j&&o.a.createElement(y.a,{ref:h,className:"flex pt-5 flex-col "},o.a.createElement(m.a,{container:!0,spacing:3},o.a.createElement(m.a,{item:!0,xs:12,sm:12},o.a.createElement(p.F,{className:"mb-16",type:"text",name:"name",value:U.name,onChange:I,label:"Nom du secteur",validations:{minLength:3},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 3"},variant:"outlined",required:!0,fullWidth:!0})))),1===j&&o.a.createElement("div",null,o.a.createElement("input",{className:"hidden",id:"button-file",type:"file",disabled:f.secteurReqInProgress,onChange:function(e){var a=e.target.files[0];a&&t(b.w(a,U.id))}}),o.a.createElement("div",{className:"flex justify-center sm:justify-start flex-wrap"},o.a.createElement("label",{htmlFor:"button-file",className:Object(w.a)(a.secteurImageUpload,"flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5")},f.secteurReqInProgress?o.a.createElement(O.a,{size:24,className:a.buttonProgress}):o.a.createElement(s.a,{fontSize:"large",color:"action"},"arrow_upward")),U.image?o.a.createElement("div",{className:Object(w.a)(a.secteurImageItem,"flex items-center cursor-pointer justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden  shadow-1 hover:shadow-5"),onClick:U.image?function(){return window.open(p.G+U.image.url,"_blank")}:""},o.a.createElement("img",{className:"max-w-none w-auto h-full",src:p.G+U.image.url,alt:U.name})):""))),innerScroll:!0})})}}]);