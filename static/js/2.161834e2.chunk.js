(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1241:function(e,t,a){"use strict";var n=a(0),r=function(){return(r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var c=function(){return Math.random().toString(36).substring(2)},s=function(e){var t=e.rtl,a=e.speed,s=e.interval,i=e.style,o=e.width,l=e.height,d=e.baseUrl,m=e.gradientRatio,p=e.animate,u=e.ariaLabel,h=e.children,f=e.className,g=e.uniquekey,y=e.primaryColor,b=e.primaryOpacity,E=e.secondaryColor,v=e.secondaryOpacity,x=e.preserveAspectRatio,w=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["rtl","speed","interval","style","width","height","baseUrl","gradientRatio","animate","ariaLabel","children","className","uniquekey","primaryColor","primaryOpacity","secondaryColor","secondaryOpacity","preserveAspectRatio"]),O=g?g+"-idClip":c(),N=g?g+"-idGradient":c(),j=t?{transform:"scaleX(-1)"}:{},P="0; "+s+"; 1",T=a+"s";return Object(n.createElement)("svg",r({role:"img",style:r(r({},i),j),className:f,"aria-label":u||null,viewBox:"0 0 "+o+" "+l,preserveAspectRatio:x},w),u?Object(n.createElement)("title",null,u):null,Object(n.createElement)("rect",{x:"0",y:"0",width:o,height:l,clipPath:"url("+d+"#"+O+")",style:{fill:"url("+d+"#"+N+")"}}),Object(n.createElement)("defs",null,Object(n.createElement)("clipPath",{id:O},h),Object(n.createElement)("linearGradient",{id:N},Object(n.createElement)("stop",{offset:"0%",stopColor:y,stopOpacity:b},p&&Object(n.createElement)("animate",{attributeName:"offset",values:-m+"; "+-m+"; 1",keyTimes:P,dur:T,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:E,stopOpacity:v},p&&Object(n.createElement)("animate",{attributeName:"offset",values:-m/2+"; "+-m/2+"; "+(1+m/2),keyTimes:P,dur:T,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:y,stopOpacity:b},p&&Object(n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+m),keyTimes:P,dur:T,repeatCount:"indefinite"})))))},i={animate:!0,ariaLabel:"Loading interface...",baseUrl:"",gradientRatio:2,height:130,interval:.25,preserveAspectRatio:"none",primaryColor:"#f0f0f0",primaryOpacity:1,rtl:!1,secondaryColor:"#e0e0e0",secondaryOpacity:1,speed:2,style:{},width:400},o=function(e){return Object(n.createElement)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:e.width,height:e.height})},l=function(e){var t=r(r({},i),e);return Object(n.createElement)(s,r({},t),e.children||Object(n.createElement)(o,r({},t)))};t.a=l},1243:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext();t.a=r},1248:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext();t.a=r},1273:function(e,t,a){"use strict";var n=a(3),r=a.n(n),c=a(4),s=a.n(c),i=a(0),o=a.n(i),l=a(2),d=a(8),m=a(1248),p=o.a.forwardRef(function(e,t){var a=e.classes,n=e.className,c=e.component,i=void 0===c?"table":c,d=e.padding,p=void 0===d?"default":d,u=e.size,h=void 0===u?"medium":u,f=s()(e,["classes","className","component","padding","size"]),g=o.a.useMemo(function(){return{padding:p,size:h}},[p,h]);return o.a.createElement(m.a.Provider,{value:g},o.a.createElement(i,r()({ref:t,className:Object(l.a)(a.root,n)},f)))});t.a=Object(d.a)({root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0}},{name:"MuiTable"})(p)},1274:function(e,t,a){"use strict";var n=a(3),r=a.n(n),c=a(4),s=a.n(c),i=a(0),o=a.n(i),l=a(2),d=a(8),m=a(1243),p={variant:"head"},u=o.a.forwardRef(function(e,t){var a=e.classes,n=e.className,c=e.component,i=void 0===c?"thead":c,d=s()(e,["classes","className","component"]);return o.a.createElement(m.a.Provider,{value:p},o.a.createElement(i,r()({className:Object(l.a)(a.root,n),ref:t},d)))});t.a=Object(d.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},1275:function(e,t,a){"use strict";var n=a(3),r=a.n(n),c=a(4),s=a.n(c),i=a(0),o=a.n(i),l=a(2),d=a(8),m=a(1243),p=o.a.forwardRef(function(e,t){var a=e.classes,n=e.className,c=e.component,i=void 0===c?"tr":c,d=e.hover,p=void 0!==d&&d,u=e.selected,h=void 0!==u&&u,f=s()(e,["classes","className","component","hover","selected"]),g=o.a.useContext(m.a);return o.a.createElement(i,r()({ref:t,className:Object(l.a)(a.root,n,g&&["head"===g.variant&&a.head,"footer"===g.variant&&a.footer],p&&a.hover,h&&a.selected)},f))});t.a=Object(d.a)(function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:"none","&$selected":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.04)":"rgba(255, 255, 255, 0.08)"},"&$hover:hover":{backgroundColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.07)":"rgba(255, 255, 255, 0.14)"}},selected:{},hover:{},head:{},footer:{}}},{name:"MuiTableRow"})(p)},1276:function(e,t,a){"use strict";var n=a(4),r=a.n(n),c=a(3),s=a.n(c),i=a(0),o=a.n(i),l=a(2),d=a(8),m=a(9),p=a(12),u=a(1248),h=a(1243),f=o.a.forwardRef(function(e,t){var a,n=e.align,c=void 0===n?"inherit":n,i=e.classes,d=e.className,p=e.component,f=e.padding,g=e.scope,y=e.size,b=e.sortDirection,E=e.variant,v=r()(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=o.a.useContext(u.a),w=o.a.useContext(h.a);a=p||(w&&"head"===w.variant?"th":"td");var O=g;!O&&w&&"head"===w.variant&&(O="col");var N=f||(x&&x.padding?x.padding:"default"),j=y||(x&&x.size?x.size:"medium"),P=null;return b&&(P="asc"===b?"ascending":"descending"),o.a.createElement(a,s()({ref:t,className:Object(l.a)(i.root,(E?"head"===E:w&&"head"===w.variant)&&i.head,(E?"body"===E:w&&"body"===w.variant)&&i.body,(E?"footer"===E:w&&"footer"===w.variant)&&i.footer,"inherit"!==c&&i["align".concat(Object(m.a)(c))],"default"!==N&&i["padding".concat(Object(m.a)(N))],"medium"!==j&&i["size".concat(Object(m.a)(j))],d),"aria-sort":P,scope:O},v))});t.a=Object(d.a)(function(e){return{root:s()({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(p.e)(Object(p.c)(e.palette.divider,1),.88):Object(p.a)(Object(p.c)(e.palette.divider,1),.68)),textAlign:"left",padding:"14px 40px 14px 16px","&:last-child":{paddingRight:16}}),head:{color:e.palette.text.secondary,fontSize:e.typography.pxToRem(12),lineHeight:e.typography.pxToRem(21),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary,fontWeight:e.typography.fontWeightRegular},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"}}},{name:"MuiTableCell"})(f)},1277:function(e,t,a){"use strict";var n=a(3),r=a.n(n),c=a(4),s=a.n(c),i=a(0),o=a.n(i),l=a(2),d=a(8),m=a(1243),p={variant:"body"},u=o.a.forwardRef(function(e,t){var a=e.classes,n=e.className,c=e.component,i=void 0===c?"tbody":c,d=s()(e,["classes","className","component"]);return o.a.createElement(m.a.Provider,{value:p},o.a.createElement(i,r()({className:Object(l.a)(a.root,n),ref:t},d)))});t.a=Object(d.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(u)},1285:function(e,t,a){"use strict";var n=a(50);const r="[PROJECT DASHBOARD APP] GET WIDGETS",c="[PROJECT DASHBOARD APP] REQUEST WIDGETS",s="[PROJECT DASHBOARD APP] GET CHARTS",i="[PROJECT DASHBOARD APP] REQUEST CHARTS",o="[PROJECT DASHBOARD APP] GET BUDGETS",l="[PROJECT DASHBOARD APP] REQUEST BUDGETS",d="[PROJECT DASHBOARD APP] REQUEST_TEAM_POTENTIEL",m="[PROJECT DASHBOARD APP] GET_TEAM_POTENTIEL";function p(){const e=n.a.get("/api/demandes/widgets");return t=>(t({type:c}),e.then(e=>t({type:r,payload:e.data})))}function u(e){const t=n.a.get("/api/demandes/charts?startDate=".concat(e.startDate,"&endDate=").concat(e.endDate));return e=>(e({type:i}),t.then(t=>e({type:s,payload:t.data})))}function h(e){const t=n.a.get("/api/demandes/budgets?year=".concat(e));return e=>(e({type:l}),t.then(t=>e({type:o,payload:t.data})))}function f(e){const t=n.a.get("/api/acheteur/teamsRank?year=".concat(e));return e=>(e({type:d}),t.then(t=>e({type:m,payload:t.data})))}a.d(t,"e",function(){return r}),a.d(t,"j",function(){return c}),a.d(t,"b",function(){return s}),a.d(t,"g",function(){return i}),a.d(t,"a",function(){return o}),a.d(t,"f",function(){return l}),a.d(t,"h",function(){return"[PROJECT DASHBOARD APP] REQUEST_POTENTIEL"}),a.d(t,"c",function(){return"[PROJECT DASHBOARD APP] GET_POTENTIEL"}),a.d(t,"i",function(){return d}),a.d(t,"d",function(){return m}),a.d(t,"n",function(){return p}),a.d(t,"l",function(){return u}),a.d(t,"k",function(){return h}),a.d(t,"m",function(){return f})},1304:function(e,t,a){"use strict";var n=a(43),r=a(1285);const c={data:[],charts:[],budgets:[],loading:!1,loadingCharts:!1,loadingBudgets:!1,loadingTeams:!1,teamPotentiels:!1,loadingTeamPotentiels:!1};var s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.j:return{...e,data:[],loading:!0};case r.e:return{...e,data:t.payload,loading:!1};case r.g:return{...e,charts:[],loadingCharts:!0};case r.b:return{...e,charts:t.payload,loadingCharts:!1};case r.f:return{...e,budgets:[],loadingBudgets:!0};case r.a:return{...e,budgets:t.payload,loadingBudgets:!1};case r.h:return{...e,teams:[],loadingTeams:!0};case r.c:return{...e,teams:t.payload,loadingTeams:!1};case r.i:return{...e,teamPotentiels:[],loadingTeamPotentiels:!0};case r.d:return{...e,teamPotentiels:t.payload,loadingTeamPotentiels:!1};default:return e}};const i=Object(n.d)({widgets:s});t.a=i},1328:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(135),s=a(89),i=a(16);t.a=r.a.memo(function(e){return r.a.createElement(c.a,{className:"w-full rounded-8 shadow-none border-1"},r.a.createElement("div",{className:"flex items-center justify-between pr-4 pl-16 pt-4"},r.a.createElement(s.a,{className:"text-16"}," Demandes en cours")),r.a.createElement("div",{className:"text-center pt-12 pb-28"},r.a.createElement(i.a,{to:"/demandes",className:"text-72 leading-none text-green"},e.widget),r.a.createElement(s.a,{className:"text-16",color:"textSecondary"},"Demandes")))})},1329:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(135),s=a(89),i=a(16);t.a=r.a.memo(function(e){return r.a.createElement(c.a,{className:"w-full rounded-8 shadow-none border-1"},r.a.createElement("div",{className:"flex items-center justify-between pr-4 pl-16 pt-4"},r.a.createElement(s.a,{className:"text-16"}," Demandes expir\xe9es")),r.a.createElement("div",{className:"text-center pt-12 pb-28"},r.a.createElement(i.a,{to:"/demandes",className:"text-72 leading-none text-red"},e.widget),r.a.createElement(s.a,{className:"text-16",color:"textSecondary"},"Demandes")))})},1330:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(135),s=a(89),i=a(16);t.a=r.a.memo(function(e){return r.a.createElement(c.a,{className:"w-full rounded-8 shadow-none border-1"},r.a.createElement("div",{className:"flex items-center justify-between pr-4 pl-16 pt-4"},r.a.createElement(s.a,{className:"text-16"},"Demandes en attente")),r.a.createElement("div",{className:"text-center pt-12 pb-28"},r.a.createElement(i.a,{to:"/demandes",className:"text-72 leading-none text-orange"},e.widget),r.a.createElement(s.a,{className:"text-16",color:"textSecondary"},"Demandes")))})},1331:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(135),s=a(89),i=a(16);t.a=r.a.memo(function(e){return r.a.createElement(c.a,{className:"w-full rounded-8 shadow-none border-1"},r.a.createElement("div",{className:"flex items-center justify-between pr-4 pl-16 pt-4"},r.a.createElement(s.a,{className:"text-16"},"Demandes rejet\xe9es")),r.a.createElement("div",{className:"text-center pt-12 pb-28"},r.a.createElement(i.a,{to:"/demandes",className:"text-72 leading-none text-red"},e.widget),r.a.createElement(s.a,{className:"text-16",color:"textSecondary"},"Demandes")))})},1332:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(135),s=a(89),i=a(1158),o=a(1273),l=a(1274),d=a(1275),m=a(1276),p=a(1277),u=a(7),h=a(1285),f=a(1241),g=a(59),y=a.n(g);const b=e=>{const t=Math.random()*(1-.7)+.7;return r.a.createElement(f.a,Object.assign({height:40,width:1060,speed:2,primaryColor:"#d9d9d9",secondaryColor:"#ecebeb"},e),r.a.createElement("rect",{x:"0",y:"15",rx:"4",ry:"4",width:"6",height:"6.4"}),r.a.createElement("rect",{x:"34",y:"13",rx:"6",ry:"6",width:200*t,height:"12"}),r.a.createElement("rect",{x:"633",y:"13",rx:"6",ry:"6",width:23*t,height:"12"}),r.a.createElement("rect",{x:"653",y:"13",rx:"6",ry:"6",width:78*t,height:"12"}),r.a.createElement("rect",{x:"755",y:"13",rx:"6",ry:"6",width:117*t,height:"12"}),r.a.createElement("rect",{x:"938",y:"13",rx:"6",ry:"6",width:83*t,height:"12"}),r.a.createElement("rect",{x:"0",y:"39",rx:"6",ry:"6",width:"1060",height:".3"}))};t.a=function(e){const t=Object(u.b)(),a=Object(u.c)(e=>{let{dashboardApp:t}=e;return t.widgets}),[f,g]=Object(n.useState)(y()().format("Y"));return Object(n.useEffect)(()=>{t(h.m(f))},[t,f]),r.a.createElement(r.a.Fragment,null,!1===a.loadingTeamPotentiels?r.a.createElement(c.a,{className:"w-full rounded-8 shadow-none border-1"},r.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},r.a.createElement(s.a,{className:"text-24"},"Le suivi de l'ann\xe9e ",f),r.a.createElement("div",{className:"flex"},r.a.createElement(s.a,{className:"text-11 font-500 rounded-4 text-white bg-blue px-8 py-4"},a.teamPotentiels.length+" Acheteur(s) / Master(s)"),r.a.createElement(i.a,{native:!0,className:"ml-4 pl-4 text-11",value:f,onChange:function(e){g(e.target.value)},inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries({0:y()().format("Y"),1:y()().subtract(1,"year").format("Y"),2:y()().subtract(2,"year").format("Y")}).map(e=>{let[t,a]=e;return r.a.createElement("option",{className:"text-12 text-black",key:t,value:a},a)})))),r.a.createElement("div",{className:"table-responsive"},r.a.createElement(o.a,{className:"w-full min-w-full",size:"small"},r.a.createElement(l.a,null,r.a.createElement(d.a,null,r.a.createElement(m.a,{className:"whitespace-no-wrap"},"Acheteur / Master, NOM & Pr\xe9nom"),r.a.createElement(m.a,{className:"whitespace-no-wrap"},"BlackListe"),r.a.createElement(m.a,{className:"whitespace-no-wrap"},"Budgets Acheteur / Master"),r.a.createElement(m.a,{className:"whitespace-no-wrap"},"Nbr Demandes en attente"),r.a.createElement(m.a,{className:"whitespace-no-wrap"},"Nbr Demandes en cours"),r.a.createElement(m.a,{className:"whitespace-no-wrap"},"Nbr Demandes expir\xe9es"),r.a.createElement(m.a,{className:"whitespace-no-wrap"},"Nbr Demandes Rejet\xe9es"))),r.a.createElement(p.a,null,Array.isArray(a.teamPotentiels)&&a.teamPotentiels.map((e,t)=>r.a.createElement(d.a,{key:t},r.a.createElement(m.a,{className:"whitespace-no-wrap"}),r.a.createElement(m.a,{className:"whitespace-no-wrap"}),r.a.createElement(m.a,{className:"whitespace-no-wrap"},e.budgets),r.a.createElement(m.a,{className:"whitespace-no-wrap"},e.attentes),r.a.createElement(m.a,{className:"whitespace-no-wrap"},e.cours),r.a.createElement(m.a,{className:"whitespace-no-wrap"},e.expirees),r.a.createElement(m.a,{className:"whitespace-no-wrap"},e.rejetees))))))):r.a.createElement(b,null))}}}]);