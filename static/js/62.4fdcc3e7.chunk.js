(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1242:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};t.default=n},1271:function(e,t,a){"use strict";var n=a(50),r=a(33);const o="[FAQS APP ADMIN] REQUEST FAQS",c="[FAQS APP ADMIN] GET FAQS",i="[FAQS APP ADMIN] SET FAQS SEARCH TEXT";function s(e){return{type:i,searchText:e.target.value}}function l(){const e=n.a.get("/api/faqs");return t=>(t({type:o}),e.then(e=>t({type:c,payload:e.data})))}function u(e){return t=>{const a=n.a.delete(e["@id"]);return t({type:o}),a.then(e=>Promise.all([t(Object(r.B)({message:"Faq bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>t(l())))}}var d=a(102);const m="[FAQ APP APP] REQUEST FAQ",f="[FAQ APP APP] REQUEST CATEGORIES",p="[FAQ APP APP] GET FAQ",g="[FAQ APP APP] GET CATEGORIES",h="[FAQ APP APP] SAVE ERROR",E="[FAQ APP APP] UPDATE FAQ",A="[FAQ APP APP] REQUEST SAVE_FAQ",b="[FAQ APP APP] CLEAN_UP";function P(){return e=>e({type:b})}function y(e){const t=n.a.get("/api/faqs/".concat(e));return e=>(e({type:m}),t.then(t=>{e({type:p,payload:t.data})}))}function v(){const e=n.a.get("/api/faq_categories?props[]=id&props[]=name&props[]=icon");return t=>(t({type:f}),e.then(e=>{t({type:g,payload:e.data["hydra:member"]})}))}function q(e,t){return e.categorie&&(e.categorie=e.categorie.value),(a,o)=>{const c=n.a.put(e["@id"],e);return a({type:A}),c.then(e=>Promise.all([a({type:E,payload:e.data}),a(Object(r.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"})),t.push("/admin/faqs")])).catch(e=>{a({type:h,payload:d.a.parseApiErrors(e)})})}}function F(e,t){e.categorie&&(e.categorie=e.categorie.value);const a=n.a.post("/api/faqs",e);return e=>(e({type:A}),a.then(a=>{e(Object(r.B)({message:"Faq sauvegard\xe9"})),e({type:E,payload:a.data}),t.push("/admin/faqs")}).catch(t=>{e({type:h,payload:d.a.parseApiErrors(t)})}))}function x(){return{type:p,payload:{question:"",reponse:""}}}a.d(t,"f",function(){return o}),a.d(t,"d",function(){return c}),a.d(t,"j",function(){return i}),a.d(t,"r",function(){return s}),a.d(t,"n",function(){return l}),a.d(t,"p",function(){return u}),a.d(t,"e",function(){return m}),a.d(t,"c",function(){return p}),a.d(t,"b",function(){return g}),a.d(t,"h",function(){return h}),a.d(t,"i",function(){return E}),a.d(t,"g",function(){return A}),a.d(t,"a",function(){return b}),a.d(t,"k",function(){return P}),a.d(t,"m",function(){return y}),a.d(t,"l",function(){return v}),a.d(t,"s",function(){return q}),a.d(t,"q",function(){return F}),a.d(t,"o",function(){return x})},1359:function(e,t,a){"use strict";var n=a(43),r=a(1271);const o={entities:[],loading:!1,searchText:""};var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.f:return{...e,loading:!0};case r.d:return{...e,entities:t.payload["hydra:member"],loading:!1};case r.j:return{...e,searchText:t.searchText};default:return e}};const i={loading:!1,requestFaq:!1,error:null,data:null,categories:null};var s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.a:return{...e,loading:!1,requestFaq:!1,error:null,data:null};case r.g:return{...e,loading:!0};case r.e:return{...e,requestFaq:!0};case r.c:return{...e,data:t.payload,requestFaq:!1,error:null};case r.b:return{...e,categories:t.payload};case r.i:return{...e,loading:!1,error:null};case r.h:return{...e,loading:!1,error:t.payload};default:return e}};const l=Object(n.d)({faqs:c,faq:s});t.a=l},1511:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(89),c=a(1204),i=a(1227),s=a(1236),l=a(1219),u=a(1232),d=a(1157),m=a(39),f=a(137),p=a(7),g=a(136),h=a(1271),E=a(1359),A=a(10),b=a(51),P=a.n(b),y=a(1233),v=a(1242),q=a.n(v),F=a(16),x=a(1224);const Q=Object(d.a)(e=>({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},buttonProgress:{color:q.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}));t.default=Object(g.a)("faqsApp",E.a)(function(e){const t=Object(p.b)(),a=Q(),d=Object(p.c)(e=>{let{faqsApp:t}=e;return t.faq}),g=Object(n.useRef)(null),[E,b]=Object(n.useState)(0),[v,q]=Object(n.useState)(null),{form:w,handleChange:O,setForm:S}=Object(f.b)(null);return Object(n.useEffect)(()=>{t(h.l())},[t]),Object(n.useEffect)(()=>(function(){const a=e.match.params,{faqId:n}=a;t("new"===n?h.o():h.m(n))}(),()=>{t(h.k())}),[t,e.match.params]),Object(n.useEffect)(()=>{d.error&&0===E&&(d.error.question||d.error.reponse)&&g.current.updateInputsWithError({...d.error})},[d.error]),Object(n.useEffect)(()=>{(d.data&&!w||d.data&&w&&d.data.id!==w.id)&&(d.data.categorie&&q({value:d.data.categorie["@id"],label:d.data.categorie.name}),S({...d.data}))},[w,d.data,S]),r.a.createElement(m.o,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:w&&r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex flex-col items-start max-w-full"},r.a.createElement(m.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(o.a,{className:"normal-case flex items-center sm:mb-12",component:F.a,role:"button",to:"/admin/faqs",color:"inherit"},r.a.createElement(c.a,{className:"mr-4 text-20"},"arrow_back"),"Faqs")),r.a.createElement("div",{className:"flex items-center max-w-full"},r.a.createElement("div",{className:"flex flex-col min-w-0"},r.a.createElement(m.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(o.a,{className:"text-16 sm:text-20 truncate"},w.question?w.question:"Nouveau Faq"))))),r.a.createElement(m.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(i.a,{className:"whitespace-no-wrap",variant:"contained",disabled:d.loading||!w.question||!w.reponse,onClick:()=>(function(a){const n=e.match.params,{faqId:r}=n;t("new"===r?h.q(w,e.history):h.s(w,e.history))})()},"Sauvegarder",d.loading&&r.a.createElement(y.a,{size:24,className:a.buttonProgress})))),contentToolbar:w&&r.a.createElement(s.a,{indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},r.a.createElement(l.a,{className:"h-64 normal-case",label:"Infos faq"})),content:d.requestFaq?r.a.createElement(x.a,{color:"secondary"}):w&&r.a.createElement("div",{className:" sm:p-10 max-w-2xl"},0===E&&r.a.createElement(P.a,{ref:g,className:"flex pt-5 flex-col "},r.a.createElement(u.a,{container:!0,spacing:2},r.a.createElement(u.a,{item:!0,xs:12,sm:8},r.a.createElement(m.F,{className:"mb-16",type:"text",name:"question",value:w.question,onChange:O,label:"Question",validations:{minLength:4},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 4"},variant:"outlined",required:!0,fullWidth:!0})),r.a.createElement(u.a,{item:!0,xs:12,sm:4},r.a.createElement(m.E,{id:"categorie",name:"categorie",value:v,placeholder:"S\xe9lectionner une categorie",textFieldProps:{label:"Cat\xe9gories",InputLabelProps:{shrink:!0},variant:"outlined"},className:"mb-16",options:d.categories,onChange:e=>(function(e,t){q(e),S(A.a.set({...w},t,e))})(e,"categorie")}))),r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,xs:12,sm:12},r.a.createElement(m.F,{className:"mb-16",type:"text",name:"reponse",value:w.reponse,onChange:O,label:"R\xe9ponse",validations:{minLength:10},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10"},variant:"outlined",multiline:!0,rows:"8",required:!0,fullWidth:!0}))))),innerScroll:!0})})}}]);