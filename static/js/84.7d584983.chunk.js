(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1271:function(e,t,a){"use strict";var n=a(50),r=a(33);const c="[FAQS APP ADMIN] REQUEST FAQS",l="[FAQS APP ADMIN] GET FAQS",i="[FAQS APP ADMIN] SET FAQS SEARCH TEXT";function s(e){return{type:i,searchText:e.target.value}}function o(){const e=n.a.get("/api/faqs");return t=>(t({type:c}),e.then(e=>t({type:l,payload:e.data})))}function u(e){return t=>{const a=n.a.delete(e["@id"]);return t({type:c}),a.then(e=>Promise.all([t(Object(r.B)({message:"Faq bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>t(o())))}}var d=a(102);const f="[FAQ APP APP] REQUEST FAQ",m="[FAQ APP APP] REQUEST CATEGORIES",p="[FAQ APP APP] GET FAQ",h="[FAQ APP APP] GET CATEGORIES",E="[FAQ APP APP] SAVE ERROR",g="[FAQ APP APP] UPDATE FAQ",A="[FAQ APP APP] REQUEST SAVE_FAQ",y="[FAQ APP APP] CLEAN_UP";function P(){return e=>e({type:y})}function x(e){const t=n.a.get("/api/faqs/".concat(e));return e=>(e({type:f}),t.then(t=>{e({type:p,payload:t.data})}))}function b(){const e=n.a.get("/api/faq_categories?props[]=id&props[]=name&props[]=icon");return t=>(t({type:m}),e.then(e=>{t({type:h,payload:e.data["hydra:member"]})}))}function q(e,t){return e.categorie&&(e.categorie=e.categorie.value),(a,c)=>{const l=n.a.put(e["@id"],e);return a({type:A}),l.then(e=>Promise.all([a({type:g,payload:e.data}),a(Object(r.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"})),t.push("/admin/faqs")])).catch(e=>{a({type:E,payload:d.a.parseApiErrors(e)})})}}function v(e,t){e.categorie&&(e.categorie=e.categorie.value);const a=n.a.post("/api/faqs",e);return e=>(e({type:A}),a.then(a=>{e(Object(r.B)({message:"Faq sauvegard\xe9"})),e({type:g,payload:a.data}),t.push("/admin/faqs")}).catch(t=>{e({type:E,payload:d.a.parseApiErrors(t)})}))}function F(){return{type:p,payload:{question:"",reponse:""}}}a.d(t,"f",function(){return c}),a.d(t,"d",function(){return l}),a.d(t,"j",function(){return i}),a.d(t,"r",function(){return s}),a.d(t,"n",function(){return o}),a.d(t,"p",function(){return u}),a.d(t,"e",function(){return f}),a.d(t,"c",function(){return p}),a.d(t,"b",function(){return h}),a.d(t,"h",function(){return E}),a.d(t,"i",function(){return g}),a.d(t,"g",function(){return A}),a.d(t,"a",function(){return y}),a.d(t,"k",function(){return P}),a.d(t,"m",function(){return x}),a.d(t,"l",function(){return b}),a.d(t,"s",function(){return q}),a.d(t,"q",function(){return v}),a.d(t,"o",function(){return F})},1359:function(e,t,a){"use strict";var n=a(43),r=a(1271);const c={entities:[],loading:!1,searchText:""};var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.f:return{...e,loading:!0};case r.d:return{...e,entities:t.payload["hydra:member"],loading:!1};case r.j:return{...e,searchText:t.searchText};default:return e}};const i={loading:!1,requestFaq:!1,error:null,data:null,categories:null};var s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.a:return{...e,loading:!1,requestFaq:!1,error:null,data:null};case r.g:return{...e,loading:!0};case r.e:return{...e,requestFaq:!0};case r.c:return{...e,data:t.payload,requestFaq:!1,error:null};case r.b:return{...e,categories:t.payload};case r.i:return{...e,loading:!1,error:null};case r.h:return{...e,loading:!1,error:t.payload};default:return e}};const o=Object(n.d)({faqs:l,faq:s});t.a=o},1593:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(39),l=a(136),i=a(89),s=a(1221),o=a(1140),u=a(1204),d=a(71),f=a(7),m=a(365),p=a(1233),h=a(1271);var E=Object(d.g)(function(e){const t=Object(f.b)(),a=Object(f.c)(e=>{let{faqsApp:t}=e;return t.faqs.entities}),l=Object(f.c)(e=>{let{faqsApp:t}=e;return t.faqs.loading}),d=Object(f.c)(e=>{let{faqsApp:t}=e;return t.faqs.searchText}),[E,g]=Object(n.useState)(null);return Object(n.useEffect)(()=>{a&&g(function(e,t){const a=Object.keys(e).map(t=>e[t]);return 0===t.length?a:c.y.filterArrayByString(a,t)}(a,d))},[a,d]),E?l?r.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},r.a.createElement(p.a,{color:"secondary"})," \u2002 Chargement ..."):0===E.length?r.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},r.a.createElement(i.a,{color:"textSecondary",variant:"h5"},"Aucun Faq trouv\xe9")):r.a.createElement(c.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(m.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:(t,a,n)=>({className:"h-64 cursor-pointer",onClick:(t,n)=>{a&&e.history.push("/admin/faqs/"+a.original.id)}}),getTheadProps:(e,t,a)=>({className:"h-64 font-bold"}),data:E,columns:[{Header:"Question",filterable:!0,accessor:"question"},{Header:"R\xe9ponse",filterable:!0,accessor:"reponse"},{Header:"Cat\xe9gorie",filterable:!0,id:"categorie",accessor:e=>e.categorie?e.categorie.name:"N/A"},{Header:"",Cell:e=>r.a.createElement("div",{className:"flex items-center"},r.a.createElement(s.a,{title:"Editer"},r.a.createElement(o.a,{className:"text-teal text-20"},r.a.createElement(u.a,null,"edit"))),r.a.createElement(s.a,{title:"Supprimer"},r.a.createElement(o.a,{className:"text-red text-20",onClick:a=>{a.stopPropagation(),t(h.p(e.original))}},r.a.createElement(u.a,null,"delete"))))}],defaultPageSize:10,loading:l,noDataText:"Aucun faq trouv\xe9",loadingText:"Chargement...",ofText:"sur"})):null}),g=a(135),A=a(1139),y=a(1227),P=a(1205),x=a(16);var b=function(e){const t=Object(f.b)(),a=Object(f.c)(e=>{let{fuse:t}=e;return t.settings.mainTheme}),n=Object(f.c)(e=>{let{faqsApp:t}=e;return t.faqs.searchText});return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(c.d,{animation:"transition.expandIn",delay:300},r.a.createElement(u.a,{className:"text-32 mr-0 sm:mr-12"},"help_outline")),r.a.createElement(c.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(i.a,{className:"hidden sm:flex",variant:"h6"},"Gestion des Faqs"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center pr-8 sm:px-12"},r.a.createElement(P.a,{theme:a},r.a.createElement(c.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(g.a,{className:"flex p-4 items-center w-full max-w-512 px-8 py-4",elevation:1},r.a.createElement(u.a,{className:"mr-8",color:"action"},"search"),r.a.createElement(A.a,{placeholder:"Rechercher",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:n,inputProps:{"aria-label":"Search"},onChange:e=>t(h.r(e))}))))),r.a.createElement(c.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(y.a,{component:x.a,to:"/admin/faqs/new",className:"whitespace-no-wrap",variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex"},"Ajouter"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},q=a(1359);t.default=Object(l.a)("faqsApp",q.a)(function(){const e=Object(f.b)();return Object(n.useEffect)(()=>{e(h.n())},[e]),r.a.createElement(c.o,{classes:{content:"flex flex-col h-full",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(b,null),content:r.a.createElement(E,null),innerScroll:!0})})}}]);