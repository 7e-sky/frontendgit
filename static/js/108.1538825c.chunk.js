(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1388:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(89),c=a(39),s=a(7),i=a(136),o=a(1285),d=a(1304),m=a(1328),f=a(1329),p=a(1330),u=a(1331),x=a(1227),g=a(267),h=a(1157),E=a(1141),w=a(1205),b=a(373),y=a.n(b),v=a(59),Y=a.n(v);const k=Object(h.a)(e=>({root:{background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+e.palette.primary.main+" 100%)"}}));var O=Object(i.a)("dashboardApp",d.a)(function(e){const t=Object(s.c)(e=>{let{fuse:t}=e;return t.settings.mainThemeDark}),a=Object(s.b)(),[i,d]=Object(r.useState)({startDate:Y()().startOf("isoWeek").format("YYYY-MM-DD"),endDate:Y()().endOf("isoWeek").format("YYYY-MM-DD")}),m=k(e),f=Object(E.a)(),[p,u]=Object(r.useState)("0"),[h,b]=Object(r.useState)(null),v=Object(s.c)(e=>{let{dashboardApp:t}=e;return t.widgets});return Object(r.useEffect)(()=>{a(o.l(i))},[a,i]),Object(r.useEffect)(()=>{b(y.a.merge({},v.charts))},[v.charts]),n.a.createElement(w.a,{theme:t},n.a.createElement("div",{className:m.root},n.a.createElement("div",{className:"container relative p-16 sm:p-24 flex flex-row justify-between items-center"},n.a.createElement(c.d,{delay:100},n.a.createElement("div",{className:"flex-col"},n.a.createElement(l.a,{className:"h2",color:"textPrimary"},h&&h.title))),n.a.createElement("div",{className:"flex flex-row items-center"},Object.entries({0:"Cette semaine",1:"La semaine derni\xe8re",2:"Il y a 2 semaines"}).map(e=>{let[t,a]=e;return n.a.createElement(x.a,{key:t,className:"normal-case shadow-none px-16",onClick:()=>(function(e){u(e),d("1"===e?{startDate:Y()().subtract(1,"weeks").startOf("isoWeek").format("YYYY-MM-DD"),endDate:Y()().subtract(1,"weeks").endOf("isoWeek").format("YYYY-MM-DD")}:"2"===e?{startDate:Y()().subtract(2,"weeks").startOf("isoWeek").format("YYYY-MM-DD"),endDate:Y()().subtract(2,"weeks").endOf("isoWeek").format("YYYY-MM-DD")}:{startDate:Y()().startOf("isoWeek").format("YYYY-MM-DD"),endDate:Y()().endOf("isoWeek").format("YYYY-MM-DD")})})(t),color:p===t?"secondary":"default",variant:p===t?"contained":"text"},a)}))),n.a.createElement("div",{className:"container relative h-200 sm:h-256 pb-16"},n.a.createElement(g.c,{data:{labels:["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],datasets:h&&h.mainChart?h.mainChart.datasets.map(e=>({...e,borderColor:f.palette.secondary.main,backgroundColor:f.palette.secondary.main,pointBackgroundColor:f.palette.secondary.dark,pointHoverBackgroundColor:f.palette.secondary.main,pointBorderColor:f.palette.secondary.contrastText,pointHoverBorderColor:f.palette.secondary.contrastText})):[]},options:{spanGaps:!1,legend:{display:!1},maintainAspectRatio:!1,tooltips:{position:"nearest",mode:"index",intersect:!1},layout:{padding:{top:32,left:32,right:32}},elements:{point:{radius:4,borderWidth:2,hoverRadius:4,hoverBorderWidth:2},line:{tension:0}},scales:{xAxes:[{gridLines:{display:!1,drawBorder:!1,tickMarkLength:18},ticks:{fontColor:"#ffffff"}}],yAxes:[{display:!1,gridLines:{tickMarkLength:16},ticks:{min:0,max:25,stepSize:.5}}]},plugins:{filler:{propagate:!1},xLabelsOnTop:{active:!0,render:"k"}}}}))))}),D=a(135),N=a(1158),j=a(1241);var M=n.a.memo(function(e){const t=Object(s.b)(),a=Object(s.c)(e=>{let{dashboardApp:t}=e;return t.widgets}),[c,i]=Object(r.useState)(Y()().format("Y"));return Object(r.useEffect)(()=>{t(o.k(c))},[t,c]),n.a.createElement(n.a.Fragment,null,!1===a.loadingBudgets?n.a.createElement(D.a,{className:"w-full rounded-8 shadow-none border-1"},n.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},n.a.createElement(l.a,{className:"text-16"},"Budget de l'ann\xe9e ",c," jusqu'\xe0 maintenant"),n.a.createElement(N.a,{native:!0,value:c,onChange:function(e){i(e.target.value)},inputProps:{name:"currentRange"},disableUnderline:!0},Object.entries({0:Y()().format("Y"),1:Y()().subtract(1,"year").format("Y"),2:Y()().subtract(2,"year").format("Y")}).map(e=>{let[t,a]=e;return n.a.createElement("option",{key:t,value:a},a)}))),n.a.createElement("div",{className:"text-center px-24 py-32"},n.a.createElement(l.a,{className:"text-24 leading-tight",color:"textSecondary"},c),n.a.createElement(l.a,{className:"text-72 leading-tight text-green"},a.budgets&&parseFloat(a.budgets).toLocaleString(void 0,{minimumFractionDigits:2}),"\u2002Dhs"),n.a.createElement(l.a,{className:"text-24 leading-tight",color:"textSecondary"},"HT"))):n.a.createElement(j.a,{height:280,width:500,speed:3,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},n.a.createElement("rect",{x:"3",y:"3",rx:"10",ry:"10",width:"300",height:"180"}),n.a.createElement("rect",{x:"6",y:"190",rx:"0",ry:"0",width:"292",height:"20"}),n.a.createElement("rect",{x:"4",y:"215",rx:"0",ry:"0",width:"239",height:"20"}),n.a.createElement("rect",{x:"4",y:"242",rx:"0",ry:"0",width:"274",height:"20"})))}),C=(a(1332),a(364));t.default=Object(i.a)("dashboardApp",d.a)(function(e){const t=Object(s.b)(),a=Object(s.c)(e=>{let{dashboardApp:t}=e;return t.widgets});return Object(r.useEffect)(()=>{t(o.n())},[t]),n.a.createElement("div",{className:"w-full"},n.a.createElement(C.Helmet,null,n.a.createElement("title",null,"Dashboard | Les Achats Industriels"),n.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),n.a.createElement("meta",{name:"googlebot",content:"noindex"})),n.a.createElement(O,null),!1===a.loading?n.a.createElement(c.d,{animation:"transition.slideUpIn",delay:200},n.a.createElement("div",{className:"flex flex-col md:flex-row sm:p-8 container"},n.a.createElement("div",{className:"flex flex-1 flex-col min-w-0"},n.a.createElement(c.d,{delay:600},n.a.createElement(l.a,{className:"p-16 pb-8 text-18 font-300"},"Le suivi de vos demandes")),n.a.createElement("div",{className:"flex flex-col sm:flex sm:flex-row "},n.a.createElement("div",{className:"widget flex w-full sm:w-1/4 p-16"},n.a.createElement(p.a,{widget:a.data.widget3})),n.a.createElement("div",{className:"widget flex w-full sm:w-1/4 p-16"},n.a.createElement(m.a,{widget:a.data.widget1})),n.a.createElement("div",{className:"widget flex w-full sm:w-1/4 p-16"},n.a.createElement(f.a,{widget:a.data.widget2})),n.a.createElement("div",{className:"widget w-full sm:w-1/4 p-16"},n.a.createElement(u.a,{widget:a.data.widget4})))))):n.a.createElement(j.a,{height:100,width:650,speed:2,primaryColor:"#d9d9d9",secondaryColor:"#ecebeb"},n.a.createElement("circle",{cx:"90",cy:"50",r:"30"}),n.a.createElement("rect",{x:"20",y:"90",rx:"0",ry:"0",width:"140",height:"25"}),n.a.createElement("circle",{cx:"250",cy:"50",r:"30"}),n.a.createElement("rect",{x:"180",y:"90",rx:"0",ry:"0",width:"140",height:"25"}),n.a.createElement("circle",{cx:"400",cy:"50",r:"30"}),n.a.createElement("rect",{x:"340",y:"90",rx:"0",ry:"0",width:"140",height:"25"}),n.a.createElement("circle",{cx:"570",cy:"50",r:"30"}),n.a.createElement("rect",{x:"500",y:"90",rx:"0",ry:"0",width:"140",height:"25"})),n.a.createElement("div",{className:"flex flex-col md:flex-row sm:p-8 container"},n.a.createElement("div",{className:"flex flex-1 flex-col min-w-0"},n.a.createElement("div",{className:"widget w-full sm:w-1/2 p-16"},n.a.createElement(M,null)))))})}}]);