(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1048:function(e,t,a){"use strict";var n=a(0),r=function(){return(r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var c=function(){return Math.random().toString(36).substring(2)},o=function(e){var t=e.rtl,a=e.speed,o=e.interval,i=e.style,s=e.width,u=e.height,l=e.baseUrl,d=e.gradientRatio,p=e.animate,f=e.ariaLabel,A=e.children,m=e.className,E=e.uniquekey,y=e.primaryColor,g=e.primaryOpacity,h=e.secondaryColor,O=e.secondaryOpacity,v=e.preserveAspectRatio,T=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["rtl","speed","interval","style","width","height","baseUrl","gradientRatio","animate","ariaLabel","children","className","uniquekey","primaryColor","primaryOpacity","secondaryColor","secondaryOpacity","preserveAspectRatio"]),P=E?E+"-idClip":c(),b=E?E+"-idGradient":c(),S=t?{transform:"scaleX(-1)"}:{},C="0; "+o+"; 1",_=a+"s";return Object(n.createElement)("svg",r({role:"img",style:r(r({},i),S),className:m,"aria-label":f||null,viewBox:"0 0 "+s+" "+u,preserveAspectRatio:v},T),f?Object(n.createElement)("title",null,f):null,Object(n.createElement)("rect",{x:"0",y:"0",width:s,height:u,clipPath:"url("+l+"#"+P+")",style:{fill:"url("+l+"#"+b+")"}}),Object(n.createElement)("defs",null,Object(n.createElement)("clipPath",{id:P},A),Object(n.createElement)("linearGradient",{id:b},Object(n.createElement)("stop",{offset:"0%",stopColor:y,stopOpacity:g},p&&Object(n.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:C,dur:_,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:h,stopOpacity:O},p&&Object(n.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:C,dur:_,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:y,stopOpacity:g},p&&Object(n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:C,dur:_,repeatCount:"indefinite"})))))},i={animate:!0,ariaLabel:"Loading interface...",baseUrl:"",gradientRatio:2,height:130,interval:.25,preserveAspectRatio:"none",primaryColor:"#f0f0f0",primaryOpacity:1,rtl:!1,secondaryColor:"#e0e0e0",secondaryOpacity:1,speed:2,style:{},width:400},s=function(e){return Object(n.createElement)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:e.width,height:e.height})},u=function(e){var t=r(r({},i),e);return Object(n.createElement)(o,r({},t),e.children||Object(n.createElement)(s,r({},t)))};t.a=u},1054:function(e,t,a){"use strict";var n=a(173);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(348)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"NavigateNext");t.default=c},1055:function(e,t,a){"use strict";var n=a(173);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(348)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Home");t.default=c},1067:function(e,t,a){"use strict";var n=a(3),r=a.n(n),c=a(199),o=a.n(c),i=a(28),s=a.n(i),u=a(4),l=a.n(u),d=a(0),p=a.n(d),f=(a(31),a(1),a(2)),A=a(7),m=a(98),E=a(14),y=a(51),g=Object(y.a)(p.a.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var h=Object(A.a)(function(e){return{root:{display:"flex"},icon:{width:24,height:16,backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,marginLeft:e.spacing(.5),marginRight:e.spacing(.5),cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(E.b)(e.palette.grey[200],.12)}}}},{name:"PrivateBreadcrumbCollapsed"})(function(e){var t=e.classes,a=l()(e,["classes"]);return p.a.createElement("li",r()({className:t.root},a),p.a.createElement(g,{className:t.icon}))});var O=Object(A.a)({root:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"PrivateBreadcrumbSeparator"})(function(e){var t=e.classes,a=e.className,n=l()(e,["classes","className"]);return p.a.createElement("li",r()({"aria-hidden":!0,className:Object(f.a)(t.root,a)},n))});var v=p.a.forwardRef(function(e,t){var a=e.children,n=e.classes,c=e.className,i=e.component,u=void 0===i?"nav":i,d=e.itemsAfterCollapse,A=void 0===d?1:d,E=e.itemsBeforeCollapse,y=void 0===E?1:E,g=e.maxItems,v=void 0===g?8:g,T=e.separator,P=void 0===T?"/":T,b=l()(e,["children","classes","className","component","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),S=p.a.useState(!1),C=s()(S,2),_=C[0],N=C[1],j=p.a.Children.toArray(a).filter(function(e){return p.a.isValidElement(e)}).map(function(e,t){return p.a.createElement("li",{className:n.li,key:"child-".concat(t)},e)});return p.a.createElement(m.a,r()({ref:t,component:u,color:"textSecondary",className:Object(f.a)(n.root,c)},b),p.a.createElement("ol",{className:n.ol},function(e,t,a){return e.reduce(function(n,r,c){return c<e.length-1?n=n.concat(r,p.a.createElement(O,{key:"separator-".concat(c),className:t},a)):n.push(r),n},[])}(_||v&&j.length<=v?j:function(e){return y+A>=e.length?e:[].concat(o()(e.slice(0,y)),[p.a.createElement(h,{key:"ellipsis",onClick:function(){N(!0)}})],o()(e.slice(e.length-A,e.length)))}(j),n.separator,P)))});t.a=Object(A.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0},li:{listStyle:"none"},separator:{}},{name:"MuiBreadcrumbs"})(v)},1090:function(e,t,a){"use strict";var n=a(54),r=a(67),c=a.n(r),o=a(10),i="[DEMANDES ACHATS PORTAIL APP] CLEAN_UP",s="[DEMANDES ACHATS PORTAIL APP] REQUEST_DEMANDES_ACHATS",u="[DEMANDES ACHATS PORTAIL APP] REQUEST_SECTEURS_COUNT",l="[DEMANDES ACHATS PORTAIL APP] REQUEST_PAYS_COUNT",d="[DEMANDES ACHATS PORTAIL APP] REQUEST_VILLES_COUNT",p="[DEMANDES ACHATS PORTAIL APP] REQUEST_ACTIVITES_COUNT",f="[DEMANDES ACHATS PORTAIL APP] REQUEST_CATEGORIES_COUNT",A="[DEMANDES ACHATS PORTAIL APP] GET_CATEGORIES_COUNT",m="[DEMANDES ACHATS PORTAIL APP] GET_ACTIVITES_COUNT",E="[DEMANDES ACHATS PORTAIL APP] GET_DEMANDES_ACHATS",y="[DEMANDES ACHATS PORTAIL APP] GET_SECTEURS_COUNT",g="[DEMANDES ACHATS PORTAIL APP] GET_PAYS_COUNT",h="[DEMANDES ACHATS PORTAIL APP] GET_VILLES_COUNT",O="[DEMANDES ACHATS PORTAIL APP] SET PARAMETRES DATA";function v(e,t,a,r){var c=e.secteur,i=e.activite,u=e.categorie,l="";t&&(l+=l?"&acheteur.pays.slug=".concat(t):"acheteur.pays.slug=".concat(t),a&&(l+="&acheteur.ville.slug=".concat(a))),u?l+="&categories.slug=".concat(u):i?l+="&categories.sousSecteurs.slug=".concat(i):c&&(l+="&categories.sousSecteurs.secteur.slug=".concat(c));var d=o.a.split(r.filter.id,"-"),p=n.a.get("/api/demande_achats?page=".concat(r.page,"&itemsPerPage=").concat(r.itemsPerPage,"&statut=1&order[").concat(d[0],"]=").concat(d[1])+(l||""));return function(e){return e({type:s}),p.then(function(t){e({type:E,payload:t.data})})}}function T(e,t,a){var r=e.secteur,c=e.activite,o=n.a.get("/count_demandes_achats_categorie?secteur=".concat(r||"","&sousSecteur=").concat(c||"","&pays=").concat(t||"","&ville=").concat(a||""));return function(e){return e({type:u}),o.then(function(t){e({type:y,payload:t.data})})}}function P(e,t,a){var r=e.secteur,c=e.activite,o=n.a.get("/count_demandes_achats_categorie?secteur=".concat(r||"","&sousSecteur=").concat(c||"","&pays=").concat(t||"","&ville=").concat(a||""));return function(e){return e({type:p}),o.then(function(t){e({type:m,payload:t.data})})}}function b(e,t,a){var r=e.secteur,c=e.activite,o=e.categorie,i=n.a.get("/count_demandes_achats_categorie?secteur=".concat(r||"","&sousSecteur=").concat(c||"","&categorie=").concat(o||"","&pays=").concat(t||"","&ville=").concat(a||""));return function(e){return e({type:f}),i.then(function(t){e({type:A,payload:t.data})})}}function S(e,t){var a=e.secteur,r=e.activite,c=e.categorie,o=n.a.get("/count_demandes_achats_pays?secteur=".concat(a||"","&sousSecteur=").concat(r||"","&categorie=").concat(c||"","&pays=").concat(t||""));return function(e){return e({type:l}),o.then(function(t){e({type:g,payload:t.data})})}}function C(e,t){var a=e.secteur,r=e.activite,c=e.categorie,o=n.a.get("/count_demandes_achats_pays?secteur=".concat(a||"","&sousSecteur=").concat(r||"","&categorie=").concat(c||"","&pays=").concat(t||""));return function(e){return e({type:d}),o.then(function(t){e({type:h,payload:t.data})})}}function _(){var e=n.a.get("/count_demandes_achats_categorie"),t=n.a.get("/count_demandes_achats_pays");return function(a){a({type:l}),a({type:u}),c.a.all([e,t]).then(c.a.spread(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];a({type:y,payload:t[0].data}),a({type:g,payload:t[1].data})})).catch(function(e){})}}function N(e){return{type:O,parametres:e}}var j="[DEMANDE ACHAT PORTAIL APP] CLEAN_UP",R="[DEMANDE ACHAT PORTAIL APP] REQUEST_DEMANDE",D="[DEMANDE ACHAT PORTAIL APP] GET_DEMANDE",L="[DEMANDE ACHAT PORTAIL APP] GET_ATTACHEMENT",M="[DEMANDE ACHAT PORTAIL APP] REQUEST_ATTACHEMENT",I="[DEMANDE ACHAT PORTAIL APP] SAVE_ERROR";function w(){return function(e){return e({type:j})}}function H(e){var t=n.a.get("/api/demande_achats/".concat(e,"/fournisseur"));return function(e){return e({type:R}),t.then(function(t){e({type:D,payload:t.data})}).catch(function(t){e({type:I})})}}function U(e){var t=Object(n.a)({url:"/attachements/".concat(e.id),method:"GET",responseType:"blob"});return function(a){return a({type:M}),t.then(function(t){var n=window.URL.createObjectURL(new Blob([t.data])),r=document.createElement("a");return r.href=n,r.setAttribute("download",e.url),document.body.appendChild(r),r.click(),a({type:L})})}}a.d(t,"a",function(){return i}),a.d(t,"l",function(){return s}),a.d(t,"n",function(){return u}),a.d(t,"m",function(){return l}),a.d(t,"o",function(){return d}),a.d(t,"i",function(){return p}),a.d(t,"j",function(){return f}),a.d(t,"c",function(){return A}),a.d(t,"b",function(){return m}),a.d(t,"e",function(){return E}),a.d(t,"g",function(){return y}),a.d(t,"f",function(){return g}),a.d(t,"h",function(){return h}),a.d(t,"q",function(){return O}),a.d(t,"v",function(){return v}),a.d(t,"z",function(){return T}),a.d(t,"s",function(){return P}),a.d(t,"t",function(){return b}),a.d(t,"x",function(){return S}),a.d(t,"A",function(){return C}),a.d(t,"y",function(){return _}),a.d(t,"B",function(){return N}),a.d(t,"a",function(){}),a.d(t,"k",function(){return R}),a.d(t,"d",function(){return D}),a.d(t,"p",function(){return I}),a.d(t,"r",function(){return w}),a.d(t,"u",function(){return H}),a.d(t,"w",function(){return U})},1202:function(e,t,a){"use strict";var n=a(46),r=a(8),c=a(1090),o={data:[],loading:!1},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.p:return Object(r.a)({},e,{loading:!1});case c.a:return Object(r.a)({},o);case c.k:return Object(r.a)({},e,{loading:!0});case c.d:return Object(r.a)({},e,{loading:!1,data:t.payload});default:return e}},s=a(107),u={data:[],secteurs:[],activites:[],categories:[],pays:[],villes:[],loading:!1,totalItems:null,pageCount:null,parametres:{itemsPerPage:10,page:1,filter:{id:"created-desc"}},loadingSecteurs:!1,loadingPays:!1,loadingActivites:!1,loadingCategories:!1,loadingVilles:!1},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.a:return Object(r.a)({},u);case c.l:return Object(r.a)({},e,{loading:!0});case c.n:return Object(r.a)({},e,{loadingSecteurs:!0});case c.m:return Object(r.a)({},e,{loadingPays:!0});case c.i:return Object(r.a)({},e,{loadingActivites:!0});case c.j:return Object(r.a)({},e,{loadingCategories:!0});case c.o:return Object(r.a)({},e,{loadingVilles:!0});case c.e:return Object(r.a)({},e,{loading:!1,data:t.payload["hydra:member"],pageCount:s.a.hydraPageCount(t.payload),totalItems:t.payload["hydra:totalItems"]});case c.g:return Object(r.a)({},e,{loadingSecteurs:!1,secteurs:t.payload});case c.f:return Object(r.a)({},e,{loadingPays:!1,pays:t.payload});case c.b:return Object(r.a)({},e,{loadingActivites:!1,activites:t.payload});case c.c:return Object(r.a)({},e,{loadingCategories:!1,categories:t.payload});case c.h:return Object(r.a)({},e,{loadingVilles:!1,villes:t.payload});case c.q:return Object(r.a)({},e,{parametres:{itemsPerPage:t.parametres.itemsPerPage,page:t.parametres.page,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}});default:return e}},d=Object(n.d)({demande:i,demandes:l});t.a=d}}]);