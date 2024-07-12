(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1272:function(e,t,n){"use strict";var a=n(50),r=n(33);const i="[CONDITIONS APP ADMIN] REQUEST CONDITIONS",c="[CONDITIONS APP ADMIN] GET CONDITIONS",o="[CONDITIONS APP ADMIN] SET CONDITIONS SEARCH TEXT";function l(e){return{type:o,searchText:e.target.value}}function s(){const e=a.a.get("/api/condition_generales");return t=>(t({type:i}),e.then(e=>t({type:c,payload:e.data})))}function d(e){return t=>{const n=a.a.delete(e["@id"]);return t({type:i}),n.then(e=>Promise.all([t(Object(r.B)({message:"Bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>t(s())))}}var u=n(102);const m="[CONDITION APP APP] REQUEST CONDITION",p="[CONDITION APP APP] GET CONDITION",f="[CONDITION APP APP] SAVE ERROR",h="[CONDITION APP APP] UPDATE CONDITION",N="[CONDITION APP APP] REQUEST SAVE_CONDITION",E="[CONDITION APP APP] CLEAN_UP";function O(){return e=>e({type:E})}function g(e){const t=a.a.get("/api/condition_generales/".concat(e));return e=>(e({type:m}),t.then(t=>{e({type:p,payload:t.data})}))}function y(e,t){return(n,i)=>{const c=a.a.put(e["@id"],e);return n({type:N}),c.then(e=>Promise.all([n({type:h,payload:e.data}),n(Object(r.B)({message:"Bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"})),t.push("/admin/conditions")])).catch(e=>{n({type:f,payload:u.a.parseApiErrors(e)})})}}function I(e,t){const n=a.a.post("/api/condition_generales",e);return e=>(e({type:N}),n.then(n=>{e(Object(r.B)({message:"Condition sauvegard\xe9"})),e({type:h,payload:n.data}),t.push("/admin/conditions")}).catch(t=>{e({type:f,payload:u.a.parseApiErrors(t)})}))}function P(){return{type:p,payload:{titre:"",contenu:""}}}n.d(t,"e",function(){return i}),n.d(t,"c",function(){return c}),n.d(t,"i",function(){return o}),n.d(t,"p",function(){return l}),n.d(t,"l",function(){return s}),n.d(t,"n",function(){return d}),n.d(t,"d",function(){return m}),n.d(t,"b",function(){return p}),n.d(t,"h",function(){return f}),n.d(t,"g",function(){return h}),n.d(t,"f",function(){return N}),n.d(t,"a",function(){return E}),n.d(t,"j",function(){return O}),n.d(t,"k",function(){return g}),n.d(t,"q",function(){return y}),n.d(t,"o",function(){return I}),n.d(t,"m",function(){return P})},1360:function(e,t,n){"use strict";var a=n(43),r=n(1272);const i={entities:[],loading:!1,searchText:""};var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.e:return{...e,loading:!0};case r.c:return{...e,entities:t.payload["hydra:member"],loading:!1};case r.i:return{...e,searchText:t.searchText};default:return e}};const o={loading:!1,requestCondition:!1,error:null,data:null};var l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.a:return{...e,loading:!1,requestCondition:!1,error:null,data:null};case r.f:return{...e,loading:!0};case r.d:return{...e,requestCondition:!0};case r.b:return{...e,data:t.payload,requestCondition:!1,error:null};case r.g:return{...e,loading:!1,error:null};case r.h:return{...e,loading:!1,error:t.payload};default:return e}};const s=Object(a.d)({conditions:c,condition:l});t.a=s},1594:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(39),c=n(136),o=n(89),l=n(1221),s=n(1140),d=n(1204),u=n(71),m=n(7),p=n(365),f=n(1233),h=n(1272);var N=Object(u.g)(function(e){const t=Object(m.b)(),n=Object(m.c)(e=>{let{conditionsApp:t}=e;return t.conditions.entities}),c=Object(m.c)(e=>{let{conditionsApp:t}=e;return t.conditions.loading}),u=Object(m.c)(e=>{let{conditionsApp:t}=e;return t.conditions.searchText}),[N,E]=Object(a.useState)(null);return Object(a.useEffect)(()=>{n&&E(function(e,t){const n=Object.keys(e).map(t=>e[t]);return 0===t.length?n:i.y.filterArrayByString(n,t)}(n,u))},[n,u]),N?c?r.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},r.a.createElement(f.a,{color:"secondary"})," \u2002 Chargement ..."):0===N.length?r.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},r.a.createElement(o.a,{color:"textSecondary",variant:"h5"},"Aucun Condition trouv\xe9")):r.a.createElement(i.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(p.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:(t,n,a)=>({className:"h-64 cursor-pointer",onClick:(t,a)=>{n&&e.history.push("/admin/conditions/"+n.original.id)}}),getTheadProps:(e,t,n)=>({className:"h-64 font-bold"}),data:N,columns:[{Header:"titre",filterable:!0,accessor:"titre"},{Header:"",Cell:e=>r.a.createElement("div",{className:"flex items-center"},r.a.createElement(l.a,{title:"Editer"},r.a.createElement(s.a,{className:"text-teal text-20"},r.a.createElement(d.a,null,"edit"))),r.a.createElement(l.a,{title:"Supprimer"},r.a.createElement(s.a,{className:"text-red text-20",onClick:n=>{n.stopPropagation(),t(h.n(e.original))}},r.a.createElement(d.a,null,"delete"))))}],defaultPageSize:10,loading:c,noDataText:"Aucun condition trouv\xe9",loadingText:"Chargement...",ofText:"sur"})):null}),E=n(135),O=n(1139),g=n(1227),y=n(1205),I=n(16);var P=function(e){const t=Object(m.b)(),n=Object(m.c)(e=>{let{fuse:t}=e;return t.settings.mainTheme}),a=Object(m.c)(e=>{let{conditionsApp:t}=e;return t.conditions.searchText});return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(i.d,{animation:"transition.expandIn",delay:300},r.a.createElement(d.a,{className:"text-32 mr-0 sm:mr-12"},"help_outline")),r.a.createElement(i.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(o.a,{className:"hidden sm:flex",variant:"h6"},"Gestion des Conditions"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center pr-8 sm:px-12"},r.a.createElement(y.a,{theme:n},r.a.createElement(i.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(E.a,{className:"flex p-4 items-center w-full max-w-512 px-8 py-4",elevation:1},r.a.createElement(d.a,{className:"mr-8",color:"action"},"search"),r.a.createElement(O.a,{placeholder:"Rechercher",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:e=>t(h.p(e))}))))),r.a.createElement(i.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(g.a,{component:I.a,to:"/admin/conditions/new",className:"whitespace-no-wrap",variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex"},"Ajouter"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},x=n(1360);t.default=Object(c.a)("conditionsApp",x.a)(function(){const e=Object(m.b)();return Object(a.useEffect)(()=>{e(h.l())},[e]),r.a.createElement(i.o,{classes:{content:"flex flex-col h-full",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(P,null),content:r.a.createElement(N,null),innerScroll:!0})})}}]);