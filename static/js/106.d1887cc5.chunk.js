(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1048:function(e,t,a){"use strict";var r=a(0),n=function(){return(n=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var c=function(){return Math.random().toString(36).substring(2)},l=function(e){var t=e.rtl,a=e.speed,l=e.interval,i=e.style,s=e.width,o=e.height,d=e.baseUrl,m=e.gradientRatio,u=e.animate,p=e.ariaLabel,f=e.children,b=e.className,E=e.uniquekey,y=e.primaryColor,g=e.primaryOpacity,h=e.secondaryColor,x=e.secondaryOpacity,O=e.preserveAspectRatio,w=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["rtl","speed","interval","style","width","height","baseUrl","gradientRatio","animate","ariaLabel","children","className","uniquekey","primaryColor","primaryOpacity","secondaryColor","secondaryOpacity","preserveAspectRatio"]),v=E?E+"-idClip":c(),j=E?E+"-idGradient":c(),D=t?{transform:"scaleX(-1)"}:{},N="0; "+l+"; 1",C=a+"s";return Object(r.createElement)("svg",n({role:"img",style:n(n({},i),D),className:b,"aria-label":p||null,viewBox:"0 0 "+s+" "+o,preserveAspectRatio:O},w),p?Object(r.createElement)("title",null,p):null,Object(r.createElement)("rect",{x:"0",y:"0",width:s,height:o,clipPath:"url("+d+"#"+v+")",style:{fill:"url("+d+"#"+j+")"}}),Object(r.createElement)("defs",null,Object(r.createElement)("clipPath",{id:v},f),Object(r.createElement)("linearGradient",{id:j},Object(r.createElement)("stop",{offset:"0%",stopColor:y,stopOpacity:g},u&&Object(r.createElement)("animate",{attributeName:"offset",values:-m+"; "+-m+"; 1",keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:h,stopOpacity:x},u&&Object(r.createElement)("animate",{attributeName:"offset",values:-m/2+"; "+-m/2+"; "+(1+m/2),keyTimes:N,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:y,stopOpacity:g},u&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+m),keyTimes:N,dur:C,repeatCount:"indefinite"})))))},i={animate:!0,ariaLabel:"Loading interface...",baseUrl:"",gradientRatio:2,height:130,interval:.25,preserveAspectRatio:"none",primaryColor:"#f0f0f0",primaryOpacity:1,rtl:!1,secondaryColor:"#e0e0e0",secondaryOpacity:1,speed:2,style:{},width:400},s=function(e){return Object(r.createElement)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:e.width,height:e.height})},o=function(e){var t=n(n({},i),e);return Object(r.createElement)(l,n({},t),e.children||Object(r.createElement)(s,n({},t)))};t.a=o},1197:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(98),l=a(40),i=a(6),s=a(140),o=a(54),d="[PROJECT DASHBOARD APP] GET WIDGETS",m="[PROJECT DASHBOARD APP] REQUEST WIDGETS",u="[PROJECT DASHBOARD APP] GET CHARTS",p="[PROJECT DASHBOARD APP] REQUEST CHARTS",f="[PROJECT DASHBOARD APP] GET BUDGETS",b="[PROJECT DASHBOARD APP] REQUEST BUDGETS";var E=a(46),y=a(8),g={data:[],charts:[],budgets:[],loading:!1,loadingCharts:!1,loadingBudgets:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(y.a)({},e,{data:[],loading:!0});case d:return Object(y.a)({},e,{data:t.payload,loading:!1});case p:return Object(y.a)({},e,{charts:[],loadingCharts:!0});case u:return Object(y.a)({},e,{charts:t.payload,loadingCharts:!1});case b:return Object(y.a)({},e,{budgets:[],loadingBudgets:!0});case f:return Object(y.a)({},e,{budgets:t.payload,loadingBudgets:!1});default:return e}},x=Object(E.d)({widgets:h}),O=a(139),w=a(18);var v=n.a.memo(function(e){return n.a.createElement(O.a,{className:"w-full rounded-8 shadow-none border-1"},n.a.createElement("div",{className:"flex items-center justify-between pr-4 pl-16 pt-4"},n.a.createElement(c.a,{className:"text-16"}," Demandes en cours")),n.a.createElement("div",{className:"text-center pt-12 pb-28"},n.a.createElement(w.a,{to:"/demandes",className:"text-72 leading-none text-green"},e.widget),n.a.createElement(c.a,{className:"text-16",color:"textSecondary"},"Demandes")))});var j=n.a.memo(function(e){return n.a.createElement(O.a,{className:"w-full rounded-8 shadow-none border-1"},n.a.createElement("div",{className:"flex items-center justify-between pr-4 pl-16 pt-4"},n.a.createElement(c.a,{className:"text-16"}," Demandes expir\xe9es")),n.a.createElement("div",{className:"text-center pt-12 pb-28"},n.a.createElement(w.a,{to:"/demandes",className:"text-72 leading-none text-red"},e.widget),n.a.createElement(c.a,{className:"text-16",color:"textSecondary"},"Demandes")))});var D=n.a.memo(function(e){return n.a.createElement(O.a,{className:"w-full rounded-8 shadow-none border-1"},n.a.createElement("div",{className:"flex items-center justify-between pr-4 pl-16 pt-4"},n.a.createElement(c.a,{className:"text-16"},"Demandes en attente")),n.a.createElement("div",{className:"text-center pt-12 pb-28"},n.a.createElement(w.a,{to:"/demandes",className:"text-72 leading-none text-orange"},e.widget),n.a.createElement(c.a,{className:"text-16",color:"textSecondary"},"Demandes")))});var N=n.a.memo(function(e){return n.a.createElement(O.a,{className:"w-full rounded-8 shadow-none border-1"},n.a.createElement("div",{className:"flex items-center justify-between pr-4 pl-16 pt-4"},n.a.createElement(c.a,{className:"text-16"},"Demandes rejet\xe9es")),n.a.createElement("div",{className:"text-center pt-12 pb-28"},n.a.createElement(w.a,{to:"/demandes",className:"text-72 leading-none text-red"},e.widget),n.a.createElement(c.a,{className:"text-16",color:"textSecondary"},"Demandes")))}),C=a(23),k=a(1035),Y=a(250),A=a(345),S=a(342),R=a(1014),P=a(354),T=a.n(P),M=a(64),B=a.n(M),L=Object(A.a)(function(e){return{root:{background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+e.palette.primary.main+" 100%)"}}});var H=Object(s.a)("dashboardApp",x)(function(e){var t=Object(i.c)(function(e){return e.fuse.settings.mainThemeDark}),a=Object(i.b)(),s=Object(r.useState)({startDate:B()().startOf("isoWeek").format("YYYY-MM-DD"),endDate:B()().endOf("isoWeek").format("YYYY-MM-DD")}),d=Object(C.a)(s,2),m=d[0],f=d[1],b=L(e),E=Object(S.a)(),g=Object(r.useState)("0"),h=Object(C.a)(g,2),x=h[0],O=h[1],w=Object(r.useState)(null),v=Object(C.a)(w,2),j=v[0],D=v[1],N=Object(i.c)(function(e){return e.dashboardApp.widgets});return Object(r.useEffect)(function(){a(function(e){var t=o.a.get("/api/demandes/charts?startDate=".concat(e.startDate,"&endDate=").concat(e.endDate));return function(e){return e({type:p}),t.then(function(t){return e({type:u,payload:t.data})})}}(m))},[a,m]),Object(r.useEffect)(function(){D(T.a.merge({},N.charts))},[N.charts]),n.a.createElement(R.a,{theme:t},n.a.createElement("div",{className:b.root},n.a.createElement("div",{className:"container relative p-16 sm:p-24 flex flex-row justify-between items-center"},n.a.createElement(l.d,{delay:100},n.a.createElement("div",{className:"flex-col"},n.a.createElement(c.a,{className:"h2",color:"textPrimary"},j&&j.title))),n.a.createElement("div",{className:"flex flex-row items-center"},Object.entries({0:"Cette semaine",1:"La semaine derni\xe8re",2:"Il y a 2 semaines"}).map(function(e){var t=Object(C.a)(e,2),a=t[0],r=t[1];return n.a.createElement(k.a,{key:a,className:"normal-case shadow-none px-16",onClick:function(){return O(e=a),void f("1"===e?{startDate:B()().subtract(1,"weeks").startOf("isoWeek").format("YYYY-MM-DD"),endDate:B()().subtract(1,"weeks").endOf("isoWeek").format("YYYY-MM-DD")}:"2"===e?{startDate:B()().subtract(2,"weeks").startOf("isoWeek").format("YYYY-MM-DD"),endDate:B()().subtract(2,"weeks").endOf("isoWeek").format("YYYY-MM-DD")}:{startDate:B()().startOf("isoWeek").format("YYYY-MM-DD"),endDate:B()().endOf("isoWeek").format("YYYY-MM-DD")});var e},color:x===a?"secondary":"default",variant:x===a?"contained":"text"},r)}))),n.a.createElement("div",{className:"container relative h-200 sm:h-256 pb-16"},n.a.createElement(Y.c,{data:{labels:["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],datasets:j&&j.mainChart?j.mainChart.datasets.map(function(e){return Object(y.a)({},e,{borderColor:E.palette.secondary.main,backgroundColor:E.palette.secondary.main,pointBackgroundColor:E.palette.secondary.dark,pointHoverBackgroundColor:E.palette.secondary.main,pointBorderColor:E.palette.secondary.contrastText,pointHoverBorderColor:E.palette.secondary.contrastText})}):[]},options:{spanGaps:!1,legend:{display:!1},maintainAspectRatio:!1,tooltips:{position:"nearest",mode:"index",intersect:!1},layout:{padding:{top:32,left:32,right:32}},elements:{point:{radius:4,borderWidth:2,hoverRadius:4,hoverBorderWidth:2},line:{tension:0}},scales:{xAxes:[{gridLines:{display:!1,drawBorder:!1,tickMarkLength:18},ticks:{fontColor:"#ffffff"}}],yAxes:[{display:!1,gridLines:{tickMarkLength:16},ticks:{min:0,max:25,stepSize:.5}}]},plugins:{filler:{propagate:!1},xLabelsOnTop:{active:!0,render:"k"}}}}))))}),W=a(972),G=a(1048);var U=n.a.memo(function(e){var t=Object(i.b)(),a=Object(i.c)(function(e){return e.dashboardApp.widgets}),l=Object(r.useState)(B()().format("Y")),s=Object(C.a)(l,2),d=s[0],m=s[1];return Object(r.useEffect)(function(){t(function(e){var t=o.a.get("/api/demandes/budgets?year=".concat(e));return function(e){return e({type:b}),t.then(function(t){return e({type:f,payload:t.data})})}}(d))},[t,d]),n.a.createElement(n.a.Fragment,null,!1===a.loadingBudgets?n.a.createElement(O.a,{className:"w-full rounded-8 shadow-none border-1"},n.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},n.a.createElement(c.a,{className:"text-16"},"Budget de l'ann\xe9e ",d," jusqu'\xe0 maintenant"),n.a.createElement(W.a,{native:!0,value:d,onChange:function(e){m(e.target.value)},inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries({0:B()().format("Y"),1:B()().subtract(1,"year").format("Y"),2:B()().subtract(2,"year").format("Y")}).map(function(e){var t=Object(C.a)(e,2),a=t[0],r=t[1];return n.a.createElement("option",{key:a,value:r},r)}))),n.a.createElement("div",{className:"text-center px-24 py-32"},n.a.createElement(c.a,{className:"text-24 leading-tight",color:"textSecondary"},d),n.a.createElement(c.a,{className:"text-72 leading-tight text-green"},a.budgets&&parseFloat(a.budgets).toLocaleString(void 0,{minimumFractionDigits:2}),"\u2002Dhs"),n.a.createElement(c.a,{className:"text-24 leading-tight",color:"textSecondary"},"HT"))):n.a.createElement(G.a,{height:280,width:500,speed:3,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},n.a.createElement("rect",{x:"3",y:"3",rx:"10",ry:"10",width:"300",height:"180"}),n.a.createElement("rect",{x:"6",y:"190",rx:"0",ry:"0",width:"292",height:"20"}),n.a.createElement("rect",{x:"4",y:"215",rx:"0",ry:"0",width:"239",height:"20"}),n.a.createElement("rect",{x:"4",y:"242",rx:"0",ry:"0",width:"274",height:"20"})))}),J=a(346);t.default=Object(s.a)("dashboardApp",x)(function(e){var t=Object(i.b)(),a=Object(i.c)(function(e){return e.dashboardApp.widgets});return Object(r.useEffect)(function(){t(function(){var e=o.a.get("/api/demandes/widgets");return function(t){return t({type:m}),e.then(function(e){return t({type:d,payload:e.data})})}}())},[t]),n.a.createElement("div",{className:"w-full"},n.a.createElement(J.Helmet,null,n.a.createElement("title",null,"Dashboard | Les Achats Industriels"),n.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),n.a.createElement("meta",{name:"googlebot",content:"noindex"})),n.a.createElement(H,null),!1===a.loading?n.a.createElement(l.d,{animation:"transition.slideUpIn",delay:200},n.a.createElement("div",{className:"flex flex-col md:flex-row sm:p-8 container"},n.a.createElement("div",{className:"flex flex-1 flex-col min-w-0"},n.a.createElement(l.d,{delay:600},n.a.createElement(c.a,{className:"p-16 pb-8 text-18 font-300"},"Le suivi de vos demandes")),n.a.createElement("div",{className:"flex flex-col sm:flex sm:flex-row "},n.a.createElement("div",{className:"widget flex w-full sm:w-1/4 p-16"},n.a.createElement(D,{widget:a.data.widget3})),n.a.createElement("div",{className:"widget flex w-full sm:w-1/4 p-16"},n.a.createElement(v,{widget:a.data.widget1})),n.a.createElement("div",{className:"widget flex w-full sm:w-1/4 p-16"},n.a.createElement(j,{widget:a.data.widget2})),n.a.createElement("div",{className:"widget w-full sm:w-1/4 p-16"},n.a.createElement(N,{widget:a.data.widget4})))))):n.a.createElement(G.a,{height:100,width:650,speed:2,primaryColor:"#d9d9d9",secondaryColor:"#ecebeb"},n.a.createElement("circle",{cx:"90",cy:"50",r:"30"}),n.a.createElement("rect",{x:"20",y:"90",rx:"0",ry:"0",width:"140",height:"25"}),n.a.createElement("circle",{cx:"250",cy:"50",r:"30"}),n.a.createElement("rect",{x:"180",y:"90",rx:"0",ry:"0",width:"140",height:"25"}),n.a.createElement("circle",{cx:"400",cy:"50",r:"30"}),n.a.createElement("rect",{x:"340",y:"90",rx:"0",ry:"0",width:"140",height:"25"}),n.a.createElement("circle",{cx:"570",cy:"50",r:"30"}),n.a.createElement("rect",{x:"500",y:"90",rx:"0",ry:"0",width:"140",height:"25"})),n.a.createElement("div",{className:"flex flex-col md:flex-row sm:p-8 container"},n.a.createElement("div",{className:"flex flex-1 flex-col min-w-0"},n.a.createElement("div",{className:"widget w-full sm:w-1/2 p-16"},n.a.createElement(U,null)))))})}}]);