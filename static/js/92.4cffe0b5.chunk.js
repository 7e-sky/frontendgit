(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1073:function(e,t,a){"use strict";var n=a(36),r=a(54),c=a(196),i="[DEMANDES DEVIS FOURNISSEUR APP] REQUEST DEMANDES",s="[DEMANDES DEVIS FOURNISSEUR APP] REMOVE DEMANDES",o="[DEMANDES DEVIS FOURNISSEUR APP] SET PARAMETRES DATA",l="[DEMANDES DEVIS FOURNISSEUR APP] GET DEMANDES",d="[DEMANDES DEVIS FOURNISSEUR APP] SET DEMANDES SEARCH TEXT";function u(e,t){var a=e.message?"=".concat(e.message):"",n=r.a.get("/api/fournisseurs/".concat(t,"/demandes?page=").concat(e.page,"&del=false&message").concat(a,"&statut=1&order[").concat(e.filter.id,"]=").concat(e.filter.direction));return function(e){return e({type:i}),n.then(function(t){return e({type:l,payload:t.data})})}}function m(e,t,a){var i={del:!0};return function(o,l){return r.a.put("/api/demande_devis/".concat(e.id),i).then(function(e){return Promise.all([o({type:s}),o(c.b("product-devis")),o(Object(n.B)({message:"Demande bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(function(){return o(u(t,a))})})}}function f(e){return{type:o,parametres:e}}var p=a(40),E="[DEMANDE DEVIS FOURNISSEUR APP] REQUEST DEMANDE",g="[DEMANDE DEVIS FOURNISSEUR APP] GET DEMANDE",D="[DEMANDE DEVIS FOURNISSEUR APP] SAVE ERROR";function h(e){var t=r.a.get("/api/demande_devis/".concat(e));return function(e){return e({type:E}),t.then(function(t){return e(c.b("product-devis")),e({type:g,payload:t.data})}).catch(function(t){e({type:D,payload:p.y.parseApiErrors(t)})})}}a.d(t,"d",function(){return i}),a.d(t,"g",function(){return o}),a.d(t,"b",function(){return l}),a.d(t,"f",function(){return d}),a.d(t,"i",function(){return u}),a.d(t,"j",function(){return m}),a.d(t,"k",function(){return f}),a.d(t,"c",function(){return E}),a.d(t,"a",function(){return g}),a.d(t,"e",function(){return D}),a.d(t,"h",function(){return h})},1162:function(e,t,a){"use strict";var n=a(46),r=a(8),c=a(1073),i=a(107),s={data:[],pageCount:null,loading:!1,searchText:"",parametres:{page:1,message:"",filter:{id:"created",direction:"desc"}},demandesDialog:{props:{open:!1}}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.d:return Object(r.a)({},e,{loading:!0});case c.b:return Object(r.a)({},e,{data:t.payload["hydra:member"],pageCount:i.a.hydraPageCount(t.payload),loading:!1});case c.f:return Object(r.a)({},e,{searchText:t.searchText});case c.g:return Object(r.a)({},e,{parametres:{page:t.parametres.page,message:t.parametres.message,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}});default:return e}},l={data:null,error:null,loading:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.c:return Object(r.a)({},e,{loading:!0});case c.a:return Object(r.a)({},e,{data:t.payload,loading:!1});case c.e:return Object(r.a)({},e,{error:t.payload,loading:!1});default:return e}},u=Object(n.d)({demandesDevis:o,demandeDevis:d});t.a=u},1396:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(40),i=a(140),s=a(23),o=a(1029),l=a(958),d=a(1013),u=a(78),m=a(1073),f=a(6),p=a(64),E=a.n(p),g=a(107),D=a(347),h=a(10);var v=Object(u.g)(function(e){var t=Object(f.b)(),a=Object(f.c)(function(e){return e.demandesDevisFrsApp.demandesDevis.data}),i=Object(f.c)(function(e){return e.demandesDevisFrsApp.demandesDevis.loading}),u=Object(f.c)(function(e){return e.demandesDevisFrsApp.demandesDevis.pageCount}),p=Object(f.c)(function(e){return e.demandesDevisFrsApp.demandesDevis.parametres}),v=Object(f.c)(function(e){return e.auth.user}),b=Object(f.c)(function(e){return e.demandesDevisFrsApp.demandesDevis.searchText}),S=Object(n.useState)(null),N=Object(s.a)(S,2),A=N[0],O=N[1];return Object(n.useEffect)(function(){a&&O(function(e,t){var a=Object.keys(e).map(function(t){return e[t]});return 0===t.length?a:g.a.filterArrayByString(a,t)}(a,b))},[a,b]),A?r.a.createElement("div",{className:"w-full flex flex-col"},r.a.createElement(c.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(D.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:function(t,a,n){return{className:"h-64 cursor-pointer",onClick:function(t,n){a&&e.history.push("/product_devis/"+a.original.id)}}},getTheadProps:function(e,t,a){return{className:"h-64"}},data:A,columns:[{Header:"",filterable:!1,Cell:function(e){return r.a.createElement("div",{className:"flex items-center"},e.original.isRead?r.a.createElement("p",{className:"text-green"},"Lu"):r.a.createElement("p",{className:"text-orange"},"No Lu"))}},{Header:"Produit r\xe9f.",className:"font-bold",id:"reference",accessor:function(e){return e.produit?e.produit.reference:""}},{Header:"Quantit\xe9",id:"quantity",accessor:function(e){return e.quantity?e.quantity:""}},{Header:"Nom Contact",id:"contact",accessor:function(e){return e.contact?e.contact:""}},{Header:"Soci\xe9t\xe9",id:"societe",accessor:function(e){return e.societe?e.societe:""}},{Header:"T\xe9l\xe9phone",id:"phone",accessor:function(e){return e.phone?e.phone:""}},{Header:"Email",id:"email",accessor:function(e){return e.email?e.email:""}},{Header:"Adresse",id:"adresse",accessor:function(e){return e.adresse?e.adresse:""}},{Header:"Message",accessor:"message",filterable:!1,Cell:function(e){return h.a.truncate(e.original.message,{length:36,separator:" "})}},{Header:"Date de cr\xe9ation",accessor:"created",filterable:!1,Cell:function(e){return E()(e.original.created).format("DD/MM/YYYY HH:mm")}},{Header:"",Cell:function(e){return r.a.createElement("div",{className:"flex items-center"},1!==e.original.statut?r.a.createElement(o.a,{title:"Supprimer"},r.a.createElement(l.a,{className:"text-red text-20",onClick:function(a){a.stopPropagation(),t(m.j(e.original,p,v.id))}},r.a.createElement(d.a,null,"delete"))):r.a.createElement(o.a,{title:"Interdit!"},r.a.createElement(l.a,{className:"text-20 cursor-not-allowed disable",onClick:function(e){e.stopPropagation()}},r.a.createElement(d.a,null,"delete"))),r.a.createElement(o.a,{title:"D\xe9tails"},r.a.createElement(l.a,{className:"text-teal text-20"},r.a.createElement(d.a,null,"remove_red_eye"))))}}],manual:!0,defaultSortDesc:!0,pages:u,page:p.page-1,defaultPageSize:10,loading:i,showPageSizeOptions:!1,onPageChange:function(e){p.page=e+1,t(m.k(p))},onSortedChange:function(e,a,n){p.page=1,p.filter.id=e[0].id,p.filter.direction=e[0].desc?"desc":"asc",t(m.k(p))},noDataText:"Aucune demande trouv\xe9e",loadingText:"Chargement...",ofText:"sur"}))):null}),b=a(98),S=a(139),N=a(957),A=a(1014);var O=function(e){var t=Object(f.b)(),a=Object(f.c)(function(e){return e.fuse.settings.mainTheme}),n=Object(f.c)(function(e){return e.demandesDevisFrsApp.demandesDevis.parametres});return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(c.d,{animation:"transition.expandIn",delay:300},r.a.createElement(d.a,{className:"text-32 mr-0 sm:mr-12"},"inbox")),r.a.createElement(c.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(b.a,{className:"hidden sm:flex",variant:"h6"},"Gestion des demandes de devis"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},r.a.createElement(A.a,{theme:a},r.a.createElement(c.d,{animation:"transition.slideDownIn",delay:300},r.a.createElement(S.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},r.a.createElement(d.a,{className:"mr-8",color:"action"},"search"),r.a.createElement(N.a,{placeholder:"Rechercher dans les messages",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:n.message,inputProps:{"aria-label":"Rechercher"},onChange:function(e){n.page=1,n.message=e.target.value,t(m.k(n))}}))))))},x=a(1162),y=a(346);t.default=Object(i.a)("demandesDevisFrsApp",x.a)(function(){var e=Object(f.b)(),t=Object(f.c)(function(e){return e.demandesDevisFrsApp.demandesDevis.parametres}),a=Object(f.c)(function(e){return e.auth.user});return Object(n.useEffect)(function(){a&&e(m.i(t,a.id))},[e,t,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.Helmet,null,r.a.createElement("title",null,"Demandes de devis | Les Achats Industriels"),r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("meta",{name:"googlebot",content:"noindex"})),r.a.createElement(c.o,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(O,null),content:r.a.createElement(v,null),innerScroll:!0}))})}}]);