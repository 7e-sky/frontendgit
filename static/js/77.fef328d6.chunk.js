(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1086:function(e,t,r){"use strict";var n=r(54),a=r(36),u="[SUGGESTION SUGGESTIONS APP ADMIN] REQUEST SUGGESTION SUGGESTIONS",c="[SUGGESTION SUGGESTIONS APP ADMIN] GET SUGGESTION SUGGESTIONS",o="[SUGGESTION SUGGESTIONS APP ADMIN] SET SUGGESTION SUGGESTIONS SEARCH TEXT";function s(){var e=n.a.get("/api/suggestion_secteurs?etat=false");return function(t){return t({type:u}),e.then(function(e){return t({type:c,payload:e.data})})}}function i(e){return function(t){return t({type:u}),n.a.delete("/api/suggestion_secteurs/".concat(e.id)).then(function(e){return Promise.all([t(Object(a.B)({message:"Suggestion bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(function(){return t(s())})}).catch(function(e){e.response.data&&e.response.data["hydra:description"]&&t(Object(a.B)({message:e.response.data["hydra:description"],anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))}).then(function(){return t(s())})}}r(107);var l="[SUGGESTION SUGGESTION APP ADMIN] REQUEST SUGGESTION",d="[SUGGESTION SUGGESTION APP ADMIN] REQUEST SECTEUR",S="[SUGGESTION SUGGESTION APP ADMIN] REQUEST SOUS_SECTEUR",E="[SUGGESTION SUGGESTION APP ADMIN] REQUEST CATEGORIE",f="[SUGGESTION SUGGESTION APP ADMIN] GET SUGGESTION",m="[SUGGESTION SUGGESTION APP ADMIN] GET SECTEUR",p="[SUGGESTION SUGGESTION APP ADMIN] GET SOUS_SECTEUR",g="[SUGGESTION SUGGESTION APP ADMIN] GET CATEGORIE",G="[SUGGESTION SUGGESTION APP ADMIN] SAVE ERROR",O="[SUGGESTION SUGGESTION APP ADMIN] UPDATE SUGGESTION",N="[SUGGESTION SUGGESTION APP ADMIN] REQUEST SAVE_SUGGESTION",h="[SUGGESTION SUGGESTION APP ADMIN] CLEAN_UP";function I(){return function(e){return e({type:h})}}function T(e){var t=n.a.get("/api/suggestion_secteurs/".concat(e));return function(e){return e({type:l}),t.then(function(t){t.data.secteur&&e(function(e){var t=n.a.get("/api/secteurs?name=".concat(e));return function(e){return e({type:d}),t.then(function(t){e({type:m,payload:t.data["hydra:member"][0]})})}}(t.data.secteur)),t.data.sousSecteur&&e(function(e){var t=n.a.get("/api/sous_secteurs?name=".concat(e));return function(e){return e({type:S}),t.then(function(t){e({type:p,payload:t.data["hydra:member"][0]})})}}(t.data.sousSecteur)),t.data.categorie&&e(function(e){var t=n.a.get("/api/categories?name=".concat(e));return function(e){return e({type:E}),t.then(function(t){e({type:g,payload:t.data["hydra:member"][0]})})}}(t.data.categorie)),e({type:f,payload:t.data})})}}function b(e){var t={name:e},r=n.a.post("/api/secteurs",t);return function(e){return e({type:d}),r.then(function(t){e(Object(a.B)({message:"Secteur ajout\xe9",autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),e({type:m,payload:t.data})})}}function y(e,t){var r={name:e,secteur:t},u=n.a.post("/api/sous_secteurs",r);return function(e){return e({type:S}),u.then(function(t){e(Object(a.B)({message:"Activit\xe9 ajout\xe9e",autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),e({type:p,payload:t.data})})}}function U(e,t){var r={name:e,sousSecteurs:[t]},u=n.a.post("/api/categories",r);return function(e){return e({type:E}),u.then(function(t){e(Object(a.B)({message:"Cat\xe9gorie ajout\xe9e",autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),e({type:g,payload:t.data})})}}var v="[DIALOG] OPEN",A="[DIALOG] CLOSE";function j(){return{type:A}}function P(e){return{type:v,options:e}}r.d(t,"k",function(){return u}),r.d(t,"f",function(){return c}),r.d(t,"n",function(){return o}),r.d(t,"r",function(){return s}),r.d(t,"t",function(){return i}),r.d(t,"i",function(){return d}),r.d(t,"j",function(){return S}),r.d(t,"g",function(){return E}),r.d(t,"e",function(){return f}),r.d(t,"c",function(){return m}),r.d(t,"d",function(){return p}),r.d(t,"b",function(){return g}),r.d(t,"l",function(){return G}),r.d(t,"m",function(){return O}),r.d(t,"h",function(){return N}),r.d(t,"a",function(){return h}),r.d(t,"o",function(){return I}),r.d(t,"q",function(){return T}),r.d(t,"v",function(){return b}),r.d(t,"w",function(){return y}),r.d(t,"u",function(){return U}),r.d(t,"p",function(){return j}),r.d(t,"s",function(){return P})},1158:function(e,t,r){"use strict";var n=r(46),a=r(8),u=r(1086),c={entities:[],loading:!1,searchText:""},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.k:return Object(a.a)({},e,{loading:!0});case u.f:return Object(a.a)({},e,{entities:t.payload["hydra:member"],loading:!1});case u.n:return Object(a.a)({},e,{searchText:t.searchText});default:return e}},s={requestSuggestion:!1,requestSecteur:!1,requestSousSecteur:!1,requestCategorie:!1,error:null,data:null,secteur:null,sousSecteur:null,categorie:null},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.a:return Object(a.a)({},e,{requestSuggestion:!1,error:null,data:null,secteur:null,sousSecteur:null});case u.h:case u.k:return Object(a.a)({},e,{requestSuggestion:!0});case u.i:return Object(a.a)({},e,{requestSecteur:!0});case u.j:return Object(a.a)({},e,{requestSousSecteur:!0});case u.g:return Object(a.a)({},e,{requestCategorie:!0});case u.e:return Object(a.a)({},e,{data:t.payload,requestSuggestion:!1,error:null});case u.c:return Object(a.a)({},e,{secteur:t.payload,requestSecteur:!1});case u.d:return Object(a.a)({},e,{sousSecteur:t.payload,requestSousSecteur:!1});case u.b:return Object(a.a)({},e,{categorie:t.payload,requestCategorie:!1});case u.m:return Object(a.a)({},e,{requestSuggestion:!1,error:null});case u.l:return Object(a.a)({},e,{requestSuggestion:!1,error:t.payload});default:return e}},l=r(36),d={state:!1,options:{children:"Hi"}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.f:return Object(a.a)({},e,{state:!0,options:Object(a.a)({},e.options,t.options)});case l.a:return Object(a.a)({},e,{state:!1});default:return e}},E=Object(n.d)({suggestions:o,suggestion:i,dialog:S});t.a=E},1315:function(e,t,r){"use strict";r.r(t);var n=r(8),a=r(0),u=r.n(a),c=r(98),o=r(1013),s=r(1040),i=r(1039),l=r(958),d=r(40),S=r(141),E=r(6),f=r(140),m=r(1086),p=r(1158),g=r(55),G=r.n(g),O=r(1041),N=r(18),h=r(1032);t.default=Object(f.a)("suggestionsApp",p.a)(function(e){var t=Object(E.b)(),r=Object(E.c)(function(e){return e.suggestionsApp.suggestion}),f=Object(a.useRef)(null),p=Object(S.b)(null),g=p.form,I=p.handleChange,T=p.setForm;return Object(a.useEffect)(function(){return function(){var r=e.match.params.suggestionId;t(m.q(r))}(),function(){t(m.o())}},[t,e.match.params]),Object(a.useEffect)(function(){r.error&&r.error.name&&f.current.updateInputsWithError(Object(n.a)({},r.error))},[r.error]),Object(a.useEffect)(function(){(r.data&&!g||r.data&&g&&r.data.id!==g.id)&&T(Object(n.a)({},r.data))},[g,r.data,T]),u.a.createElement(d.o,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:g&&u.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},u.a.createElement("div",{className:"flex flex-col items-start max-w-full"},u.a.createElement(d.d,{animation:"transition.slideRightIn",delay:300},u.a.createElement(c.a,{className:"normal-case flex items-center sm:mb-12",component:N.a,role:"button",to:"/parametres/suggestions",color:"inherit"},u.a.createElement(o.a,{className:"mr-4 text-20"},"arrow_back"),"Suggestions")))),content:r.requestSuggestion?u.a.createElement(h.a,{color:"secondary"}):g&&u.a.createElement("div",{className:" sm:p-10 max-w-2xl"},u.a.createElement(G.a,{ref:f,className:"flex pt-5 flex-col "},u.a.createElement(s.a,{container:!0,spacing:3},u.a.createElement(s.a,{item:!0,xs:12,sm:4},u.a.createElement(d.F,{className:"mb-16",type:"text",name:"secteur",value:g.secteur,onChange:I,InputProps:{endAdornment:r.requestSecteur?u.a.createElement(O.a,{color:"secondary"}):u.a.createElement(i.a,{position:"end"},u.a.createElement(l.a,{color:"secondary","aria-label":"toggle add secteur",disabled:r.secteur||!g.secteur,onClick:function(){return e=g.secteur,void t(m.v(e));var e}},u.a.createElement(o.a,null,"add_circle")))},label:"Secteur",variant:"outlined",required:!0,fullWidth:!0})),u.a.createElement(s.a,{item:!0,xs:12,sm:4},u.a.createElement(d.F,{className:"mb-16",type:"text",name:"sousSecteur",disabled:!r.secteur,value:g.sousSecteur,onChange:I,InputProps:{endAdornment:r.requestSousSecteur?u.a.createElement(O.a,{color:"secondary"}):u.a.createElement(i.a,{position:"end"},u.a.createElement(l.a,{color:"secondary","aria-label":"toggle add sous secteur",disabled:r.sousSecteur||!r.secteur||!g.sousSecteur,onClick:function(){return e=g.sousSecteur,n=r.secteur["@id"],void t(m.w(e,n));var e,n}},u.a.createElement(o.a,null,"add_circle")))},label:"Activit\xe9",variant:"outlined",required:!0,fullWidth:!0})),u.a.createElement(s.a,{item:!0,xs:12,sm:4},u.a.createElement(d.F,{className:"mb-16",type:"text",name:"categorie",value:g.categorie,disabled:!r.sousSecteur,onChange:I,InputProps:{endAdornment:r.requestCategorie?u.a.createElement(O.a,{color:"secondary"}):u.a.createElement(i.a,{position:"end"},u.a.createElement(l.a,{color:"secondary","aria-label":"toggle add sous secteur",disabled:r.categorie||!r.sousSecteur||!g.categorie,onClick:function(){return e=g.categorie,n=r.sousSecteur["@id"],void t(m.u(e,n));var e,n}},u.a.createElement(o.a,null,"add_circle")))},label:"Produit",variant:"outlined",required:!0,fullWidth:!0}))))),innerScroll:!0})})}}]);