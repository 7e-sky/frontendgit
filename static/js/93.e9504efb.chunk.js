(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1085:function(e,t,a){"use strict";var n=a(54),r=a(64),i=a.n(r),c="[DEMANDES FOURNISSEUR APP] REQUEST DEMANDES",o="[DEMANDES FOURNISSEUR APP] SET PARAMETRES DATA",u="[DEMANDES FOURNISSEUR APP] GET DEMANDES",l="[DEMANDES FOURNISSEUR APP] ERRORS",s="[DEMANDES FOURNISSEUR APP] ERROR_404",d="[DEMANDES FOURNISSEUR APP] SET DEMANDES SEARCH TEXT";function f(e,t){var a="";e.search.length>0&&e.search.map(function(e,n){e.value&&("created"===e.id||"dateExpiration"===e.id?a+="&"+e.id+"[after]="+e.value:"statut"===e.id?"1"===e.value?a+="&statut=1&dateExpiration[strictly_after]=".concat(i()().format("YYYY-MM-DDTHH:mm:ss")):"3"===e.value?a+="&statut=3}":"4"===e.value&&(a+="&dateExpiration[strictly_before]=".concat(i()().format("YYYY-MM-DDTHH:mm:ss"))):"historiques"===e.id?"1"===e.value?a+="&historiques.fournisseur.id=".concat(t):"2"===e.value&&(a+="&historiques.fournisseur=".concat(t)):a+="&"+e.id+"="+e.value)});var r=n.a.get("/api/demande_achats/fournisseur?page=".concat(e.page).concat(a,"&order[").concat(e.filter.id,"]=").concat(e.filter.direction));return function(e){return e({type:c}),r.then(function(t){return e({type:u,payload:t.data})}).catch(function(t){404===t.response.status&&e({type:s}),e({type:l})})}}function m(e){return{type:o,parametres:e}}var p=a(21),E=a(36),g=a(103),h=a(196),b=a(10),v="[DEMANDE FOURNISSEUR APP] REQUEST_VISITE_DEMANDE",O="[DEMANDE FOURNISSEUR APP] REQUEST_ADD_PRODUIT",D="[DEMANDE FOURNISSEUR APP] PRODUITS_ADDED",y="[DEMANDE FOURNISSEUR APP] GET_VISITE_DEMANDE",S="[DEMANDE FOURNISSEUR APP] REQUEST DEMANDE",A="[DEMANDE FOURNISSEUR APP] GET DEMANDE",N="[DEMANDE FOURNISSEUR APP] GET PRODUITS FRS",R="[DEMANDE FOURNISSEUR APP] SAVE ERROR",x="[DEMANDE FOURNISSEUR APP] CLEAN_UP";function j(){return function(e){return e({type:x})}}function P(e){var t=n.a.get("/api/demande_achats/".concat(e,"/fournisseur"));return function(e){return e({type:S}),t.then(function(t){return e(h.b("demandes_prix")),e({type:A,payload:t.data})})}}function U(e,t,a){var r=b.a.map(t,function(e,t){return e["@id"]}),i={categories:[].concat(Object(p.a)(r),[e])},c=n.a.put("/api/fournisseurs/".concat(a),i);return function(e){return e({type:O}),c.then(function(t){return e(M(a)),e(Object(E.B)({message:"Bien ajout\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))})}}function M(e){var t=n.a.get("/api/fournisseurs/".concat(e,"/categories"));return function(e){return t.then(function(t){e({type:N,payload:t.data["hydra:member"]})})}}function T(e,t){var a=n.a.get("/api/detail_visites?fournisseur=".concat(e,"&demande=").concat(t));return function(e){return e({type:v}),a.then(function(t){e({type:y,payload:t.data["hydra:member"][0]})})}}function I(e,t){var a={budget:parseFloat(0),demande:"/api/demande_achats/"+t.id},r=n.a.post("/api/detail_visites",a);return function(e){return e({type:v}),r.then(function(t){e({type:y,payload:t.data}),e(Object(g.i)())}).catch(function(t){e({type:R}),e(Object(E.B)({message:"Cette soci\xe9t\xe9 vous a blacklist\xe9, merci de nous contacter sur cette adresse mediateur@lesachatsindustriels.com pour plus de d\xe9tails",autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}var C="[DIALOG] OPEN",F="[DIALOG] CLOSE";function w(){return{type:F}}function _(e){return{type:C,options:e}}a.d(t,"k",function(){return c}),a.d(t,"o",function(){return o}),a.d(t,"e",function(){return u}),a.d(t,"b",function(){return l}),a.d(t,"c",function(){return s}),a.d(t,"n",function(){return d}),a.d(t,"u",function(){return f}),a.d(t,"y",function(){return m}),a.d(t,"l",function(){return v}),a.d(t,"i",function(){return O}),a.d(t,"h",function(){return D}),a.d(t,"g",function(){return y}),a.d(t,"j",function(){return S}),a.d(t,"d",function(){return A}),a.d(t,"f",function(){return N}),a.d(t,"m",function(){return R}),a.d(t,"a",function(){return x}),a.d(t,"r",function(){return j}),a.d(t,"t",function(){return P}),a.d(t,"p",function(){return U}),a.d(t,"v",function(){return M}),a.d(t,"w",function(){return T}),a.d(t,"q",function(){return I}),a.d(t,"s",function(){return w}),a.d(t,"x",function(){return _})},1156:function(e,t,a){"use strict";var n=a(46),r=a(8),i=a(1085),c=a(107),o={data:[],pageCount:null,loading:!1,error:!0,searchText:"",parametres:{page:1,search:[],description:"",filter:{id:"created",direction:"desc"}}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.k:return Object(r.a)({},e,{loading:!0,error:!1});case i.c:return Object(r.a)({},e,{loading:!1,error:!0});case i.b:return Object(r.a)({},e,{loading:!1});case i.e:return Object(r.a)({},e,{data:t.payload["hydra:member"],pageCount:c.a.hydraPageCount(t.payload),loading:!1});case i.n:return Object(r.a)({},e,{searchText:t.searchText});case i.o:return Object(r.a)({},e,{parametres:{page:t.parametres.page,search:t.parametres.search,description:t.parametres.description,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}});default:return e}},l={data:null,error:null,loading:!1,attachement:null,visit:null,produits:null,requestAddProduit:!1},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.j:case i.l:return Object(r.a)({},e,{loading:!0});case i.i:case i.h:return Object(r.a)({},e,{requestAddProduit:!0});case i.a:return Object(r.a)({},e,{data:null,visit:null,loading:!1,attachement:null,error:null,produits:null});case i.f:return Object(r.a)({},e,{produits:t.payload});case i.d:return Object(r.a)({},e,{data:t.payload,loading:!1});case i.g:return Object(r.a)({},e,{visit:t.payload,loading:!1});case i.m:return Object(r.a)({},e,{error:t.payload,loading:!1});default:return e}},d=a(36),f={state:!1,options:{children:"Hi"}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.f:return Object(r.a)({},e,{state:!0,options:Object(r.a)({},e.options,t.options)});case d.a:return Object(r.a)({},e,{state:!1});default:return e}},p=Object(n.d)({demandes:u,demande:s,dialog:m});t.a=p},1393:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(40),c=a(140),o=a(23),u=a(98),l=a(1035),s=a(967),d=a(1039),f=a(1029),m=a(1013),p=a(974),E=a(958),g=a(78),h=a(1085),b=a(6),v=a(64),O=a.n(v),D=a(107),y=a(347),S=a(1034),A=a(10),N=a(18),R=Object(S.a)(function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},chip:{marginLeft:e.spacing(1),padding:2,background:"#ef5350",color:"white",fontWeight:"bold",fontSize:"11px",height:20},chip2:{marginLeft:e.spacing(1),padding:2,background:"#4caf50",color:"white",fontWeight:"bold",fontSize:"11px",height:20},chipOrange:{marginLeft:e.spacing(1),padding:2,background:"#ff9800",color:"white",fontWeight:"bold",fontSize:"11px",height:20}}});var x=Object(g.g)(function(e){var t=R(),a=Object(b.b)(),c=Object(b.c)(function(e){return e.demandesApp.demandes.data}),g=Object(b.c)(function(e){return e.demandesApp.demandes.error}),v=Object(b.c)(function(e){return e.demandesApp.demandes.loading}),S=Object(b.c)(function(e){return e.demandesApp.demandes.pageCount}),x=Object(b.c)(function(e){return e.demandesApp.demandes.parametres}),j=Object(b.c)(function(e){return e.auth.user}),P=Object(b.c)(function(e){return e.demandesApp.demandes.searchText}),U=Object(n.useState)(null),M=Object(o.a)(U,2),T=M[0],I=M[1];if(Object(n.useEffect)(function(){c&&I(function(e,t){var a=Object.keys(e).map(function(t){return e[t]});return 0===t.length?a:D.a.filterArrayByString(a,t)}(c,P))},[c,P]),!T)return null;if(g)return r.a.createElement("div",{className:"flex flex-col items-center justify-center h-full"},r.a.createElement(u.a,{color:"textSecondary",className:"mb-16",variant:"h6"},"Pour recever et consulter les demandes de devis qui vous int\xe9resse, vous devez choisir les produits dans lesquelles vous \xeates actif."),r.a.createElement(l.a,{component:N.a,to:"/user/profile/1",color:"secondary",variant:"contained"},"Modifier votre profile"));var C=A.a.debounce(function(e){return a(h.y(e))},1e3);return r.a.createElement(i.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(y.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTheadProps:function(e,t,a){return{className:"h-64 font-bold"}},data:T,columns:[{Header:"R\xe9f\xe9rence",className:"font-bold",filterable:!0,accessor:"reference",Cell:function(e){return e.original.reference?"RFQ-"+e.original.reference:"En attente"},Filter:function(e){var t=e.filter,a=e.onChange;return r.a.createElement(s.a,{onChange:function(e){return a(e.target.value)},style:{width:"100%"},value:t?t.value:"",InputProps:{startAdornment:r.a.createElement(d.a,{position:"start"},"RFQ-")}})}},{Header:"Visibilit\xe9",accessor:"historiques",width:64,filterable:!1,Cell:function(e){return e.original.historiques.length>0&&A.a.findKey(e.original.historiques,function(e){return e.fournisseur.id===j.id})?r.a.createElement(f.a,{title:"Lu"},r.a.createElement(m.a,{className:"text-green text-20"},"remove_red_eye")):r.a.createElement(f.a,{title:"Non lu"},r.a.createElement(m.a,{className:"text-orange text-20"},"remove_red_eye"))}},{Header:"Titre",accessor:"titre",filterable:!0,Cell:function(e){return r.a.createElement("div",{className:"flex items-center"},A.a.capitalize(A.a.truncate(e.original.titre,{length:25,separator:" "})))}},{Header:"Budget",accessor:"budget",filterable:!0,Cell:function(e){return r.a.createElement(r.a.Fragment,null,parseFloat(e.original.budget).toLocaleString("fr",{minimumFractionDigits:2}),"\u2002",e.original.currency?e.original.currency.name:"")}},{Header:"Produits",accessor:"categories.name",filterable:!0,Cell:function(e){return A.a.truncate(A.a.join(A.a.map(e.original.categories,"name"),", "),{length:25,separator:" "})}},{Header:"Date de cr\xe9ation",accessor:"created",filterable:!0,Cell:function(e){return O()(e.original.created).format("DD/MM/YYYY")},Filter:function(e){var t=e.filter,a=e.onChange;return r.a.createElement(s.a,{onChange:function(e){return a(e.target.value)},style:{width:"100%"},value:t?t.value:"",type:"date",InputLabelProps:{shrink:!0}})}},{Header:"\xc9ch\xe9ance",minWidth:125,accessor:"dateExpiration",filterable:!0,Cell:function(e){return r.a.createElement("div",{className:"flex items-center"},O()(e.original.dateExpiration).format("DD/MM/YYYY"),O()(e.original.dateExpiration)>=O()()?r.a.createElement(p.a,{className:t.chip2,label:0===O()(e.original.dateExpiration).diff(O()(),"days")?O()(e.original.dateExpiration).diff(O()(),"hours")+" h":O()(e.original.dateExpiration).diff(O()(),"days")+" j"}):r.a.createElement(p.a,{className:t.chip,label:0===O()(e.original.dateExpiration).diff(O()(),"days")?O()(e.original.dateExpiration).diff(O()(),"hours")+" h":O()(e.original.dateExpiration).diff(O()(),"days")+" j"}))},Filter:function(e){var t=e.filter,a=e.onChange;return r.a.createElement(s.a,{onChange:function(e){return a(e.target.value)},style:{width:"100%"},value:t?t.value:"",type:"date",InputLabelProps:{shrink:!0}})}},{Header:"Statut",accessor:"statut",sortable:!1,filterable:!0,Cell:function(e){return r.a.createElement("div",{className:"flex items-center"},3===e.original.statut?r.a.createElement(p.a,{className:t.chip2,label:"Adjug\xe9e"}):O()(e.original.dateExpiration)>=O()()?0===e.original.statut?r.a.createElement(p.a,{className:t.chipOrange,label:"En attente"}):1===e.original.statut?r.a.createElement(p.a,{className:t.chip2,label:"En cours"}):r.a.createElement(p.a,{className:t.chip,label:"Refus\xe9e"}):r.a.createElement(p.a,{className:t.chip,label:"Expir\xe9e"}))},Filter:function(e){var t=e.filter,a=e.onChange;return r.a.createElement("select",{onChange:function(e){return a(e.target.value)},style:{width:"100%"},value:t?t.value:""},r.a.createElement("option",{value:""},"Tous"),r.a.createElement("option",{value:"1"},"En cours"),r.a.createElement("option",{value:"3"},"Adug\xe9e"),r.a.createElement("option",{value:"4"},"Expir\xe9e"))}},{Header:"",Cell:function(t){return r.a.createElement("div",{className:"flex items-center"},r.a.createElement(f.a,{title:"D\xe9tails"},r.a.createElement(E.a,{className:"text-teal text-20",onClick:function(){return e.history.push("/demandes_prix/"+t.original.id)}},r.a.createElement(m.a,null,"remove_red_eye"))))}}],manual:!0,defaultSortDesc:!0,pages:S,page:x.page-1,defaultPageSize:10,loading:v,showPageSizeOptions:!1,onPageChange:function(e){x.page=e+1,a(h.y(x))},onSortedChange:function(e,t,n){x.page=1,x.filter.id=e[0].id,x.filter.direction=e[0].desc?"desc":"asc",a(h.y(x))},onFilteredChange:function(e){x.page=1,x.search=e,C(x)},noDataText:"Aucune demande d'achat trouv\xe9e",loadingText:"Chargement...",ofText:"sur"}))});var j=function(e){return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(i.d,{animation:"transition.expandIn",delay:300},r.a.createElement(m.a,{className:"text-32 mr-0 sm:mr-12"},"inbox")),r.a.createElement(i.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(u.a,{className:"hidden sm:flex",variant:"h6"},"Les demandes de prix"))))},P=a(1156),U=a(346);t.default=Object(c.a)("demandesApp",P.a)(function(){var e=Object(b.b)(),t=Object(b.c)(function(e){return e.demandesApp.demandes.parametres}),a=Object(b.c)(function(e){return e.auth.user});return Object(n.useEffect)(function(){e(h.u(t,a.id))},[e,t,a.id]),r.a.createElement(r.a.Fragment,null,r.a.createElement(U.Helmet,null,r.a.createElement("title",null,"RFQs | Les Achats Industriels"),r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("meta",{name:"googlebot",content:"noindex"})),r.a.createElement(i.o,{classes:{content:"flex flex-col h-full",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(j,null),content:r.a.createElement(x,null),innerScroll:!0}))})}}]);