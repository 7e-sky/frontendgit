(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1051:function(e,t,n){"use strict";var r=n(3),a=n.n(r),u=n(4),c=n.n(u),o=n(0),i=n.n(o),s=(n(1),n(2)),l=n(7),d=n(98),S=i.a.forwardRef(function(e,t){var n=e.children,r=e.classes,u=e.className,o=e.disableTypography,l=void 0!==o&&o,S=c()(e,["children","classes","className","disableTypography"]);return i.a.createElement("div",a()({className:Object(s.a)(r.root,u),ref:t},S),l?n:i.a.createElement(d.a,{variant:"h6"},n))});t.a=Object(l.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(S)},1052:function(e,t,n){"use strict";var r=n(3),a=n.n(r),u=n(0),c=n.n(u),o=(n(1),n(7)),i=n(98),s=c.a.forwardRef(function(e,t){return c.a.createElement(i.a,a()({component:"p",variant:"body1",color:"textSecondary",ref:t},e))});t.a=Object(o.a)({root:{marginBottom:16}},{name:"MuiDialogContentText"})(s)},1086:function(e,t,n){"use strict";var r=n(54),a=n(36),u="[SUGGESTION SUGGESTIONS APP ADMIN] REQUEST SUGGESTION SUGGESTIONS",c="[SUGGESTION SUGGESTIONS APP ADMIN] GET SUGGESTION SUGGESTIONS",o="[SUGGESTION SUGGESTIONS APP ADMIN] SET SUGGESTION SUGGESTIONS SEARCH TEXT";function i(){var e=r.a.get("/api/suggestion_secteurs?etat=false");return function(t){return t({type:u}),e.then(function(e){return t({type:c,payload:e.data})})}}function s(e){return function(t){return t({type:u}),r.a.delete("/api/suggestion_secteurs/".concat(e.id)).then(function(e){return Promise.all([t(Object(a.B)({message:"Suggestion bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(function(){return t(i())})}).catch(function(e){e.response.data&&e.response.data["hydra:description"]&&t(Object(a.B)({message:e.response.data["hydra:description"],anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))}).then(function(){return t(i())})}}n(107);var l="[SUGGESTION SUGGESTION APP ADMIN] REQUEST SUGGESTION",d="[SUGGESTION SUGGESTION APP ADMIN] REQUEST SECTEUR",S="[SUGGESTION SUGGESTION APP ADMIN] REQUEST SOUS_SECTEUR",f="[SUGGESTION SUGGESTION APP ADMIN] REQUEST CATEGORIE",g="[SUGGESTION SUGGESTION APP ADMIN] GET SUGGESTION",E="[SUGGESTION SUGGESTION APP ADMIN] GET SECTEUR",p="[SUGGESTION SUGGESTION APP ADMIN] GET SOUS_SECTEUR",m="[SUGGESTION SUGGESTION APP ADMIN] GET CATEGORIE",O="[SUGGESTION SUGGESTION APP ADMIN] SAVE ERROR",G="[SUGGESTION SUGGESTION APP ADMIN] UPDATE SUGGESTION",h="[SUGGESTION SUGGESTION APP ADMIN] REQUEST SAVE_SUGGESTION",T="[SUGGESTION SUGGESTION APP ADMIN] CLEAN_UP";function N(){return function(e){return e({type:T})}}function b(e){var t=r.a.get("/api/suggestion_secteurs/".concat(e));return function(e){return e({type:l}),t.then(function(t){t.data.secteur&&e(function(e){var t=r.a.get("/api/secteurs?name=".concat(e));return function(e){return e({type:d}),t.then(function(t){e({type:E,payload:t.data["hydra:member"][0]})})}}(t.data.secteur)),t.data.sousSecteur&&e(function(e){var t=r.a.get("/api/sous_secteurs?name=".concat(e));return function(e){return e({type:S}),t.then(function(t){e({type:p,payload:t.data["hydra:member"][0]})})}}(t.data.sousSecteur)),t.data.categorie&&e(function(e){var t=r.a.get("/api/categories?name=".concat(e));return function(e){return e({type:f}),t.then(function(t){e({type:m,payload:t.data["hydra:member"][0]})})}}(t.data.categorie)),e({type:g,payload:t.data})})}}function I(e){var t={name:e},n=r.a.post("/api/secteurs",t);return function(e){return e({type:d}),n.then(function(t){e(Object(a.B)({message:"Secteur ajout\xe9",autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),e({type:E,payload:t.data})})}}function y(e,t){var n={name:e,secteur:t},u=r.a.post("/api/sous_secteurs",n);return function(e){return e({type:S}),u.then(function(t){e(Object(a.B)({message:"Activit\xe9 ajout\xe9e",autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),e({type:p,payload:t.data})})}}function v(e,t){var n={name:e,sousSecteurs:[t]},u=r.a.post("/api/categories",n);return function(e){return e({type:f}),u.then(function(t){e(Object(a.B)({message:"Cat\xe9gorie ajout\xe9e",autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},variant:"success"})),e({type:m,payload:t.data})})}}var U="[DIALOG] OPEN",A="[DIALOG] CLOSE";function j(){return{type:A}}function P(e){return{type:U,options:e}}n.d(t,"k",function(){return u}),n.d(t,"f",function(){return c}),n.d(t,"n",function(){return o}),n.d(t,"r",function(){return i}),n.d(t,"t",function(){return s}),n.d(t,"i",function(){return d}),n.d(t,"j",function(){return S}),n.d(t,"g",function(){return f}),n.d(t,"e",function(){return g}),n.d(t,"c",function(){return E}),n.d(t,"d",function(){return p}),n.d(t,"b",function(){return m}),n.d(t,"l",function(){return O}),n.d(t,"m",function(){return G}),n.d(t,"h",function(){return h}),n.d(t,"a",function(){return T}),n.d(t,"o",function(){return N}),n.d(t,"q",function(){return b}),n.d(t,"v",function(){return I}),n.d(t,"w",function(){return y}),n.d(t,"u",function(){return v}),n.d(t,"p",function(){return j}),n.d(t,"s",function(){return P})},1158:function(e,t,n){"use strict";var r=n(46),a=n(8),u=n(1086),c={entities:[],loading:!1,searchText:""},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.k:return Object(a.a)({},e,{loading:!0});case u.f:return Object(a.a)({},e,{entities:t.payload["hydra:member"],loading:!1});case u.n:return Object(a.a)({},e,{searchText:t.searchText});default:return e}},i={requestSuggestion:!1,requestSecteur:!1,requestSousSecteur:!1,requestCategorie:!1,error:null,data:null,secteur:null,sousSecteur:null,categorie:null},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.a:return Object(a.a)({},e,{requestSuggestion:!1,error:null,data:null,secteur:null,sousSecteur:null});case u.h:case u.k:return Object(a.a)({},e,{requestSuggestion:!0});case u.i:return Object(a.a)({},e,{requestSecteur:!0});case u.j:return Object(a.a)({},e,{requestSousSecteur:!0});case u.g:return Object(a.a)({},e,{requestCategorie:!0});case u.e:return Object(a.a)({},e,{data:t.payload,requestSuggestion:!1,error:null});case u.c:return Object(a.a)({},e,{secteur:t.payload,requestSecteur:!1});case u.d:return Object(a.a)({},e,{sousSecteur:t.payload,requestSousSecteur:!1});case u.b:return Object(a.a)({},e,{categorie:t.payload,requestCategorie:!1});case u.m:return Object(a.a)({},e,{requestSuggestion:!1,error:null});case u.l:return Object(a.a)({},e,{requestSuggestion:!1,error:t.payload});default:return e}},l=n(36),d={state:!1,options:{children:"Hi"}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.f:return Object(a.a)({},e,{state:!0,options:Object(a.a)({},e.options,t.options)});case l.a:return Object(a.a)({},e,{state:!1});default:return e}},f=Object(r.d)({suggestions:o,suggestion:s,dialog:S});t.a=f},1402:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(40),c=n(140),o=n(23),i=n(1029),s=n(958),l=n(1013),d=n(1051),S=n(1037),f=n(1052),g=n(1038),E=n(1035),p=n(78),m=n(6),O=n(347),G=n(1086);var h=Object(p.g)(function(e){var t=Object(m.c)(function(e){return e.suggestionsApp.suggestions.entities}),n=Object(m.c)(function(e){return e.suggestionsApp.suggestions.loading}),c=Object(m.c)(function(e){return e.suggestionsApp.suggestions.searchText}),p=Object(m.b)(),h=Object(r.useState)(null),T=Object(o.a)(h,2),N=T[0],b=T[1];return Object(r.useEffect)(function(){t&&b(function(e,t){var n=Object.keys(e).map(function(t){return e[t]});return 0===t.length?n:u.y.filterArrayByString(n,t)}(t,c))},[t,c]),N?a.a.createElement(u.d,{animation:"transition.slideUpIn",delay:300},a.a.createElement(O.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:function(t,n,r){return{className:"h-64 cursor-pointer",onClick:function(t,r){n&&e.history.push("/parametres/suggestions/"+n.original.id)}}},getTheadProps:function(e,t,n){return{className:"h-64 font-bold"}},data:N,columns:[{Header:"Societ\xe9",filterable:!0,accessor:"user",className:"font-bold",Cell:function(e){return e.original.user?e.original.user.societe:"N/A"}},{Header:"Secteur",filterable:!0,accessor:"secteur"},{Header:"Activit\xe9",filterable:!0,accessor:"sousSecteur"},{Header:"Produit",filterable:!0,accessor:"categorie"},{Header:"Page",filterable:!0,accessor:"pageSuggestion"},{Header:"",Cell:function(e){return a.a.createElement("div",{className:"flex items-center"},a.a.createElement(i.a,{title:"Editer"},a.a.createElement(s.a,{className:"text-teal text-20"},a.a.createElement(l.a,null,"edit"))),a.a.createElement(i.a,{title:"Supprimer"},a.a.createElement(s.a,{className:"text-red text-20",onClick:function(t){t.stopPropagation(),p(G.s({children:a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,{id:"alert-dialog-title"},"Suppression"),a.a.createElement(S.a,null,a.a.createElement(f.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),a.a.createElement(g.a,null,a.a.createElement(E.a,{onClick:function(){return p(G.p())},color:"primary"},"Non"),a.a.createElement(E.a,{onClick:function(t){p(G.t(e.original)),p(G.p())},color:"primary",autoFocus:!0},"Oui")))}))}},a.a.createElement(l.a,null,"delete"))))}}],defaultPageSize:10,loading:n,noDataText:"Aucune suggestion trouv\xe9e",loadingText:"Chargement...",ofText:"sur"})):null}),T=n(98);var N=function(e){return a.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},a.a.createElement("div",{className:"flex items-center"},a.a.createElement(u.d,{animation:"transition.expandIn",delay:300},a.a.createElement(l.a,{className:"text-32 mr-0 sm:mr-12"},"work")),a.a.createElement(u.d,{animation:"transition.slideLeftIn",delay:300},a.a.createElement(T.a,{className:"hidden sm:flex",variant:"h6"},"Suggestions Secteurs"))))},b=n(1158),I=n(346);t.default=Object(c.a)("suggestionsApp",b.a)(function(){var e=Object(m.b)();return Object(r.useEffect)(function(){e(G.r())},[e]),a.a.createElement(a.a.Fragment,null,a.a.createElement(I.Helmet,null,a.a.createElement("title",null,"Suggestions secteurs | Les Achats Industriels"),a.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),a.a.createElement("meta",{name:"googlebot",content:"noindex"})),a.a.createElement(u.o,{classes:{content:"flex flex-col h-full",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:a.a.createElement(N,null),content:a.a.createElement(h,null),innerScroll:!0}))})}}]);