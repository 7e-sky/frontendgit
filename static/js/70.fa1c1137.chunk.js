(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1246:function(e,t,a){"use strict";var r=a(175);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(0)),s=(0,r(a(366)).default)(l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),l.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"NavigateNext");t.default=s},1247:function(e,t,a){"use strict";var r=a(175);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(0)),s=(0,r(a(366)).default)(l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),l.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Home");t.default=s},1256:function(e,t,a){"use strict";var r=a(3),l=a.n(r),s=a(203),c=a.n(s),m=a(24),n=a.n(m),o=a(4),i=a.n(o),x=a(0),p=a.n(x),d=(a(28),a(2)),E=a(8),h=a(89),y=a(12),u=a(47),f=Object(u.a)(p.a.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var g=Object(E.a)(function(e){return{root:{display:"flex"},icon:{width:24,height:16,backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,marginLeft:e.spacing(.5),marginRight:e.spacing(.5),cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(y.b)(e.palette.grey[200],.12)}}}},{name:"PrivateBreadcrumbCollapsed"})(function(e){var t=e.classes,a=i()(e,["classes"]);return p.a.createElement("li",l()({className:t.root},a),p.a.createElement(f,{className:t.icon}))});var b=Object(E.a)({root:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"PrivateBreadcrumbSeparator"})(function(e){var t=e.classes,a=e.className,r=i()(e,["classes","className"]);return p.a.createElement("li",l()({"aria-hidden":!0,className:Object(d.a)(t.root,a)},r))});var v=p.a.forwardRef(function(e,t){var a=e.children,r=e.classes,s=e.className,m=e.component,o=void 0===m?"nav":m,x=e.itemsAfterCollapse,E=void 0===x?1:x,y=e.itemsBeforeCollapse,u=void 0===y?1:y,f=e.maxItems,v=void 0===f?8:f,N=e.separator,k=void 0===N?"/":N,I=i()(e,["children","classes","className","component","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),j=p.a.useState(!1),C=n()(j,2),_=C[0],w=C[1],S=p.a.Children.toArray(a).filter(function(e){return p.a.isValidElement(e)}).map(function(e,t){return p.a.createElement("li",{className:r.li,key:"child-".concat(t)},e)});return p.a.createElement(h.a,l()({ref:t,component:o,color:"textSecondary",className:Object(d.a)(r.root,s)},I),p.a.createElement("ol",{className:r.ol},function(e,t,a){return e.reduce(function(r,l,s){return s<e.length-1?r=r.concat(l,p.a.createElement(b,{key:"separator-".concat(s),className:t},a)):r.push(l),r},[])}(_||v&&S.length<=v?S:function(e){return u+E>=e.length?e:[].concat(c()(e.slice(0,u)),[p.a.createElement(g,{key:"ellipsis",onClick:function(){w(!0)}})],c()(e.slice(e.length-E,e.length)))}(S),r.separator,k)))});t.a=Object(E.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0},li:{listStyle:"none"},separator:{}},{name:"MuiBreadcrumbs"})(v)},1564:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),s=a(1157),c=a(1232),m=a(89),n=a(1227),o=a(39),i=a(1208),x=a(1146),p=a(1209),d=a(1212),E=a(1204),h=a(409),y=a(163);const u=Object(s.a)(e=>({badge:{backgroundColor:e.palette.error.main,color:e.palette.getContrastText(e.palette.error.main)},price:{backgroundColor:e.palette.primary[600]},root:{width:"100%",backgroundColor:e.palette.background.paper,border:"1px solid #ddd"}}));var f=function(e){const t=u(),{currency:a}=e;return l.a.createElement("div",null,l.a.createElement("div",{className:"-mt-160 mb-24"},l.a.createElement("div",{className:"w-full max-w-2xl mx-auto"},l.a.createElement(o.d,{duration:400,delay:800},l.a.createElement(c.a,{container:!0},l.a.createElement(c.a,{item:!0,xs:6,sm:6,md:4,container:!0},l.a.createElement(c.a,{item:!0,xs:12,className:"h-160"}),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(i.a,{className:t.root},l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Pr\xe9sentations de Produits / Services"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15 ml-16"},primary:"Images / Photos"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15 ml-16"},primary:"Fiches Techniques"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15 ml-16"},primary:"Vid\xe9os"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15 ml-16"},primary:"R\xe9ception des demandes par produit expos\xe9"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Activit\xe9s"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Mini-site de votre soci\xe9t\xe9"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56"},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Catalogues produits"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Catalogues produits PDF t\xe9l\xe9chargeable"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"R\xe9ception de demande de devis ( RFQ ) par mail"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Gestion commerciale"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15 ml-16"},primary:"Cr\xe9ation d\u2019Agences / Services"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15 ml-16"},primary:"Affectation les demandes d\u2019achats ( RFQ )"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15 ml-16"},primary:"Suivi des ventes de vos Agences / Services"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Pr\xe9sentation de produit en \xab\xa01ere Page\xa0\xbb"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Banni\xe8re publicitaire 720x90px en \xab\xa01ere Page\xa0\xbb"}))))),l.a.createElement(c.a,{item:!0,xs:6,sm:6,md:8,container:!0,spacing:1},l.a.createElement(c.a,{item:!0,xs:12,sm:6,md:3,container:!0},l.a.createElement(c.a,{item:!0,xs:12,style:{background:"linear-gradient(to top left, #feb2b2 10%, #feb2b2 30%, #e53e3e 60%, #e53e3e 60%)",borderRadius:"20px 20px 0 0",border:"1px solid #f56565"},className:"text-center h-160 "},l.a.createElement("div",{className:"text-black uppercase font-extrabold pt-16 text-24"},"FREE"),l.a.createElement("div",{className:"flex justify-center mt-12 text-black"},l.a.createElement("span",{className:" uppercase text-10 sm:text-12 md:text-14 lg:text-15"},0===a?o.z:"$"),l.a.createElement("span",{className:" uppercase font-extrabold text-32"},"00",l.a.createElement("span",{className:"text-10"},",00")))),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(i.a,{className:t.root},l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{justify:"center",classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"Max 5"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"Max 5"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"Max 5"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"illimit\xe9"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Limit\xe9 par Nbr. produits"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"illimit\xe9"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15 "},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close")}))))),l.a.createElement(c.a,{item:!0,xs:12,sm:6,md:3,className:"flex hidden sm:block md:block lg:block "},l.a.createElement(c.a,{item:!0,xs:12,style:{background:"linear-gradient(to top left, #9ae6b4 10%, #9ae6b4 30%, #38a169 60%, #38a169 60%)",borderRadius:"20px 20px 0 0",border:"1px solid #38a169"},className:"text-center h-160 "},l.a.createElement("div",{className:"text-black uppercase font-extrabold pt-16 text-24"},"CLASSIC"),l.a.createElement("div",{className:"flex justify-center mt-12 text-black"},l.a.createElement("span",{className:" uppercase text-10 sm:text-12 md:text-14 lg:text-15"},0===a?o.z:"$"),l.a.createElement("span",{className:" uppercase font-extrabold text-32"},0===a?"250":"25",l.a.createElement("span",{className:"text-10"},",00 / mois",0===a&&" HT")))),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(i.a,{className:t.root},l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{justify:"center",classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"5 par produit"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"1 par produit"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"1 par produit"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"illimit\xe9"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Jusqu'\xe0 3 activit\xe9s"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"illimit\xe9"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15 "},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"1 produit (1 mois)"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close")}))))),l.a.createElement(c.a,{item:!0,xs:12,sm:6,md:3,className:"flex hidden sm:hidden md:block lg:block "},l.a.createElement(c.a,{item:!0,xs:12,style:{background:"linear-gradient(to top left, #90cdf4 10%, #90cdf4 30%, #3182ce 60%, #3182ce 60%)",borderRadius:"20px 20px 0 0",border:"1px solid #3182ce"},className:"text-center h-160 "},l.a.createElement("div",{className:"text-black uppercase font-extrabold pt-16 text-24"},"BUSINESS"),l.a.createElement("div",{className:"flex justify-center mt-12 text-black"},l.a.createElement("span",{className:" uppercase text-10 sm:text-12 md:text-14 lg:text-15"},0===a?o.z:"$"),l.a.createElement("span",{className:" uppercase font-extrabold text-32"},0===a?"350":"35",l.a.createElement("span",{className:"text-10"},",00 / mois",0===a&&" HT")))),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(i.a,{className:t.root},l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{justify:"center",classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"5 par produit"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"1 par produit"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"1 par produit"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"illimit\xe9"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Jusqu'\xe0 5 activit\xe9s"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"10 pages"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"illimit\xe9"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15 "},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"1 produit (1 mois)"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close")}))))),l.a.createElement(c.a,{item:!0,xs:12,sm:6,md:3,className:"flex hidden sm:hidden md:block lg:block "},l.a.createElement(c.a,{item:!0,xs:12,style:{background:"linear-gradient(to top left, #faf089 10%, #faf089 30%, #d69e2e 60%, #d69e2e 60%)",borderRadius:"20px 20px 0 0",border:"1px solid #d69e2e"},className:"text-center h-160 "},l.a.createElement("div",{className:"text-black uppercase font-extrabold pt-16 text-24"},"GOLD"),l.a.createElement("div",{className:"flex justify-center mt-12 text-black"},l.a.createElement("span",{className:" uppercase text-10 sm:text-12 md:text-14 lg:text-15"},0===a?o.z:"$"),l.a.createElement("span",{className:" uppercase font-extrabold text-32"},0===a?"450":"45",l.a.createElement("span",{className:"text-10"},",00 / mois",0===a&&" HT")))),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(i.a,{className:t.root},l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{justify:"center",classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"5 par produit"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"1 par produit"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"1 par produit"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"illimit\xe9"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Jusqu'\xe0 10 activit\xe9s"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"20 pages"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"illimit\xe9"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15 "},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"2 produit (3 mois)"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"1 banni\xe8re (6 mois)"})))))))))))},g=a(2);const b=Object(s.a)(e=>({header:{height:300,background:"linear-gradient(to right, "+e.palette.secondary.dark+" 0%, "+e.palette.secondary.main+" 100%)",color:"white"},badge:{backgroundColor:e.palette.error.main,color:e.palette.getContrastText(e.palette.error.main)},price:{backgroundColor:e.palette.primary[600]},root:{width:"100%",backgroundColor:e.palette.background.paper,border:"1px solid #ddd"}}));var v=function(e){const t=b(),{currency:a}=e;return l.a.createElement("div",null,l.a.createElement("div",{className:Object(g.a)(t.header,"flex")},l.a.createElement("div",{className:"p-24 w-full max-w-2xl mx-auto"},l.a.createElement("div",{className:"text-center my-40 mx-24"},l.a.createElement(o.d,{animation:"transition.slideUpIn",duration:400,delay:100},l.a.createElement(m.a,{variant:"h1",color:"inherit",className:"font-bold uppercase text-24 sm:text-32 md:text-44 "},"Tarif Acheteur"))))),l.a.createElement("div",{className:"-mt-160 mb-24"},l.a.createElement("div",{className:"w-full max-w-2xl mx-auto"},l.a.createElement(o.d,{duration:400,delay:800},l.a.createElement(c.a,{container:!0},l.a.createElement(c.a,{item:!0,xs:6,sm:6,md:4,container:!0},l.a.createElement(c.a,{item:!0,xs:12,className:"h-160"}),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(i.a,{className:t.root},l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Publication des demandes de devis ( RFQ )"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"R\xe9ception des devis"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Voir les profils des Fournisseurs"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56"},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Voir les catalogues des Fournisseurs"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Voir le nombre de Fournisseurs Int\xe9ress\xe9s * "})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Compte anonyme **"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Voir le nombre de diffusions de la ( RFQ )"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Sous-compte Acheteur ***"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 "},alignItems:"flex-start"},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:"Blackliste"}))))),l.a.createElement(c.a,{item:!0,xs:6,sm:6,md:8,container:!0,spacing:1},l.a.createElement(c.a,{item:!0,xs:12,sm:6,md:6,container:!0},l.a.createElement(c.a,{item:!0,xs:12,style:{background:"linear-gradient(to top left, #feb2b2 10%, #feb2b2 30%, #e53e3e 60%, #e53e3e 60%)",borderRadius:"20px 20px 0 0",border:"1px solid #f56565"},className:"text-center h-160 "},l.a.createElement("div",{className:"text-black uppercase font-extrabold pt-16 text-24"},"FREE"),l.a.createElement("div",{className:"flex justify-center mt-12 text-black"},l.a.createElement("span",{className:" uppercase text-10 sm:text-12 md:text-14 lg:text-15"},0===a?o.z:"$"),l.a.createElement("span",{className:" uppercase font-extrabold text-32"},"00",l.a.createElement("span",{className:"text-10"},",00")))),l.a.createElement(c.a,{item:!0,xs:12},l.a.createElement(i.a,{className:t.root},l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{justify:"center",classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"illimit\xe9"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:"illimit\xe9"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15 "},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:h.a[500]}},"check_circle")})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close"),secondary:"( Nous contacter )"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close"),secondary:"( A venir )"})),l.a.createElement(d.a,{component:"li"}),l.a.createElement(x.a,{classes:{root:"h-60 sm:h-56 text-center"}},l.a.createElement(p.a,{classes:{primary:"font-bold text-10 sm:text-12 md:text-14 lg:text-15"},primary:l.a.createElement(E.a,{style:{color:y.a[500]}},"close"),secondary:"( Nous contacter )"})))))))),l.a.createElement("div",{className:"flex flex-col mt-8"},l.a.createElement(m.a,{variant:"caption"},"* Les Fournisseurs qui ont achet\xe9 votre Profil pour vous contacter."),l.a.createElement(m.a,{variant:"caption"},"** Le compte anonyme vous lib\xe8re de g\xe9rer vos achats et les fournisseurs ne sauront pas votre identit\xe9. Un pourcentage payant sera d\xe9fini en commun accord pour chaque RFQ."),l.a.createElement(m.a,{variant:"caption"},"*** Sous Compte acheteur vous permet d'ajouter vos coll\xe8gues ou collaborateurs pour plus d'efficacit\xe9.")))))};const N=Object(s.a)(e=>({header:{height:450,background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+e.palette.primary.main+" 100%)",color:"white"}}));var k=l.a.memo(function(e){const t=N(),[a,s]=Object(r.useState)(0);function c(e){s(e)}return l.a.createElement("div",null,l.a.createElement("div",{className:Object(g.a)(t.header,"flex")},l.a.createElement("div",{className:"p-24 w-full max-w-2xl mx-auto"},l.a.createElement("div",{className:"text-center my-40 mx-24"},l.a.createElement(o.d,{animation:"transition.slideUpIn",duration:400,delay:100},l.a.createElement(m.a,{variant:"h1",color:"inherit",className:"font-bold uppercase text-24 sm:text-32 md:text-44 "},"Tarif Fournisseur")),l.a.createElement(o.d,{duration:400,delay:600},l.a.createElement(m.a,{variant:"subtitle1",color:"inherit",className:"opacity-75 mt-16 text-13 sm:text-18 mx-auto max-w-512"},"Votre place de march\xe9"," ",l.a.createElement("span",{className:" italic font-bold uppercase"},"B2B")," la plus adapt\xe9 \xe0 vos besoin avec une tarification simple et abordable.",l.a.createElement("br",null)," Vous pouvez toujours essayer un plan gratuit!")),l.a.createElement(o.e,{enter:{animation:"transition.expandIn"},duration:400,delay:600,className:"mt-16"},l.a.createElement(n.a,{variant:0===a?"contained":"outlined",color:"secondary",className:"mr-16",onClick:()=>c(0)},o.z),l.a.createElement(n.a,{color:"secondary",onClick:()=>c(1),variant:0===a?"outlined":"contained"},"$"))))),l.a.createElement(f,{currency:a}),l.a.createElement(v,{currency:a}))}),I=a(1256),j=a(1247),C=a.n(j),_=a(16),w=a(1246),S=a.n(w);const R=Object(s.a)(e=>({layoutRoot:{},breadcrumbs:{fontSize:11},link:{display:"flex","align-items":"center"},icon:{marginRight:e.spacing(.5),width:20,height:20},btn:{fontSize:11,padding:"0px 8px"}}));var z=function(e){const t=R();return l.a.createElement("div",{className:"flex items-center"},l.a.createElement(n.a,{variant:"outlined",size:"small",color:"secondary",onClick:()=>e.history.goBack(),className:Object(g.a)(t.btn,"mr-8")},l.a.createElement(E.a,null,"chevron_left")," ",l.a.createElement("span",{className:"transition ease-in-out duration-700 "},"Retour")),l.a.createElement(o.d,{animation:"transition.slideLeftIn",delay:300},l.a.createElement(I.a,{"aria-label":"breadcrumb",separator:l.a.createElement(S.a,{fontSize:"small"}),className:t.breadcrumbs},l.a.createElement(_.a,{color:"inherit",to:"/",className:t.link},l.a.createElement(C.a,{className:t.icon}),"Accueil"),l.a.createElement("span",{className:"text-white"},"Tarifs"))))},O=a(364);const F=Object(s.a)(e=>({root:{display:"flex",flexDirection:"column",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},middle:{background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+e.palette.primary.main+" 100%)",position:"relative",marginBottom:e.spacing(4)},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},header:{color:e.palette.getContrastText(e.palette.primary.main),position:"relative",marginBottom:e.spacing(4),backgroundColor:e.palette.primary.main,backgroundImage:"url(https://source.unsplash.com/collection/9804105)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}));t.default=function(e){const t=F();return l.a.createElement("div",{className:Object(g.a)(t.root,e.innerScroll&&t.innerScroll,"min-h-md")},l.a.createElement(O.Helmet,null,l.a.createElement("title",null,"Tarifs | Les Achats Industriels"),l.a.createElement("meta",{name:"description",content:"Tarifs abonnements et jetons pour les fournisseurs, et Acheteur"})),l.a.createElement("div",{className:Object(g.a)(t.middle,"mb-0 relative overflow-hidden flex flex-col flex-shrink-0 ")},l.a.createElement(c.a,{container:!0,className:" max-w-2xl mx-auto py-8  sm:px-16 items-center z-9999"},l.a.createElement(c.a,{item:!0,sm:12,xs:12},l.a.createElement(z,e)))),l.a.createElement(k,e))}}}]);