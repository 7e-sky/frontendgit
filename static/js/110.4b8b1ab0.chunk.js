(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1557:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(89),s=t(1204),l=t(1227),i=t(1233),o=t(1224),m=t(1236),u=t(1219),d=t(1232),p=t(1215),E=t(1273),g=t(1274),f=t(1275),h=t(1276),b=t(1277),y=t(1238),x=t(1160),S=t(1223),v=t(1244),N=t(1229),A=t(1151),O=t(1212),C=t(1230),w=t(163),F=t(1157),M=t(39),P=t(16),R=t(1295),j=t(10),T=t(7),D=t(136),k=t(50),B=t(33);const U="[COMMANDE AB FRS APP] REQUEST COMMANDE",I="[COMMANDE AB FRS APP] GET COMMANDE",L="[COMMANDE AB FRS APP] REQUEST_SUGGESTION",z="[COMMANDE AB FRS APP] REQUEST_SOUS_SECTEURS",_="[COMMANDE AB FRS APP] GET SOUS_SECTEURS",G="[COMMANDE AB FRS APP] REQUEST SECTEURS",V="[COMMANDE AB FRS APP] GET SECTEURS",Q="[COMMANDE AB FRS APP] REQUEST FOURNISSEUR",H="[COMMANDE AB FRS APP] GET FOURNISSEUR",W="[COMMANDE AB FRS APP] REQUEST OFFRES",q="[COMMANDE AB FRS APP] GET OFFRES",$="[COMMANDE AB FRS APP] REQUEST SAVE",J="[COMMANDE AB FRS APP] SAVE COMMANDE",K="[COMMANDE AB FRS APP] SAVE_SUGGESTION",X="[COMMANDE AB FRS APP] GET_PAIEMENT",Y="[COMMANDE AB FRS APP] GET_DUREE",Z="[COMMANDE AB FRS APP] CLEAN_UP";function ee(){return e=>e({type:Z})}var ae=t(43);const te={data:null,offres:null,fournisseur:null,loadingSecteurs:!1,secteurs:null,sousSecteurs:null,error:null,loading:!1,loadingSuggestion:!1,loadingSS:!1,success:!1,successActivite:!1,paiements:null,durees:null};var ne=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case U:case Q:case W:case $:return{...e,loading:!0};case G:return{...e,loadingSecteurs:!0};case V:return{...e,secteurs:a.payload,loadingSecteurs:!1};case z:return{...e,loadingSS:!0};case _:return{...e,sousSecteurs:a.payload,loadingSS:!1};case X:return{...e,paiements:a.payload};case Y:return{...e,durees:a.payload};case L:return{...e,loadingSuggestion:!0};case K:return{...e,successActivite:!0,loadingSuggestion:!1};case I:return{...e,data:a.payload,loading:!1};case J:return{...e,loading:!1,success:!0};case Z:return{initialState:te};case H:return{...e,fournisseur:a.payload,loading:!1};case q:return{...e,offres:a.payload,loading:!1};case"[COMMANDE AB FRS APP] SAVE ERROR":return{...e,error:a.payload,loading:!1};default:return e}};const re={state:!1,options:{children:"Hi"}};var ce=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case B.f:return{...e,state:!0,options:{...e.options,...a.options}};case B.a:return{...e,state:!1};default:return e}};var se=Object(ae.d)({commande:ne,dialog:ce}),le=t(51),ie=t.n(le),oe=t(137),me=t(1216),ue=t(1149),de=t(1241),pe=t(2);const Ee=Object(F.a)(e=>({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},chips:{flex:1,display:"flex",flexWrap:"wrap"},commandeImageFeaturedStar:{position:"absolute",top:0,right:0,color:w.a[400],opacity:0},button:{margin:e.spacing(1)},commandeImageUpload:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut},commandeImageItem:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{"& $commandeImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:e.shadows[3],"& $commandeImageFeaturedStar":{opacity:1},"&:hover $commandeImageFeaturedStar":{opacity:1}}},error:{backgroundColor:e.palette.error.dark},border:{borderLeft:"11px solid "+e.palette.secondary.main+"!important",paddingLeft:11},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"},margin:{margin:e.spacing(1)},chip:{marginLeft:e.spacing(1),background:"#ef5350",color:"white",fontWeight:"bold",fontSize:"11px"},chip2:{marginLeft:e.spacing(1),background:"#4caf50",color:"white",fontWeight:"bold",fontSize:"11px"},chip3:{margin:e.spacing(1),background:"green",color:"white",fontWeight:"bold",fontSize:"11px"}}));a.default=Object(D.a)("commandeOffreFrsApp",se)(function(e){const a=Object(T.b)(),t=Object(T.c)(e=>{let{commandeOffreFrsApp:a}=e;return a.commande}),w=Object(T.c)(e=>{let{auth:a}=e;return a.user}),[F,D]=Object(n.useState)([]),[Z,ae]=Object(n.useState)(""),[te,ne]=Object(n.useState)(""),[re,ce]=Object(n.useState)(null),[se,le]=Object(n.useState)(null),[ge,fe]=Object(n.useState)(null),[he,be]=Object(n.useState)(null),[ye,xe]=Object(n.useState)(!1),{form:Se,setForm:ve}=Object(oe.b)(null),[Ne,Ae]=Object(n.useState)(0),[Oe,Ce]=Object(n.useState)(0),[we,Fe]=Object(n.useState)(0),[Me,Pe]=Object(n.useState)(0),[Re,je]=Object(n.useState)(0),[Te,De]=Object(n.useState)(0),ke=Ee(e);function Be(){xe(!1)}function Ue(e,a){De(a)}function Ie(t){const n=e.match.params,{commandeId:r}=n;a("new"===r?function(e,a,t,n,r){var c={offre:t["@id"],sousSecteurs:j.a.map(a,function(e,a){return e.value}),mode:n,duree:r["@id"]};const s=k.a.post("/api/demande_abonnements",c);return e=>(e({type:$}),s.then(a=>(e(Object(B.B)({message:"Votre commande a bien \xe9t\xe9 enregistr\xe9e, un mail vous sera envoy\xe9 d\xe8s la validation de votre commande, nous vous remercions pour votre confiance!"})),e({type:J,payload:a.data}))))}(0,F,se,ge,he):function(e,a,t,n,r){var c={...e,offre:t["@id"],sousSecteurs:j.a.map(a,function(e,a){return e.value}),mode:n,duree:r["@id"]};const s=k.a.put(e["@id"],c);return e=>(e({type:$}),s.then(a=>(e(Object(B.B)({message:"Commande modifi\xe9e avec succ\xe8s"})),e({type:J,payload:a.data}))))}(t,F,se,ge,he))}function Le(e,t){if("activites"===t){if(F.length===se.nbActivite)return;if(!j.a.find(F,["value",e.value])){var n=e;n.label=re.label+": "+n.label,D([e,...F])}}else e.value&&(ce(e),a(function(e){const a=k.a.get("".concat(e,"/sous_secteurs?pagination=false&props[]=id&props[]=name"));return e=>(e({type:z}),a.then(a=>{e({type:_,payload:a.data["hydra:member"]})}))}(e.value)))}return Object(n.useEffect)(()=>{w.id&&a(function(e){const a=k.a.get("/api/fournisseurs/".concat(e));return e=>(e({type:Q}),a.then(a=>e({type:H,payload:a.data})))}(w.id))},[a,w.id]),Object(n.useEffect)(()=>{a(function(){const e=k.a.get("/api/offres");return a=>(a({type:W}),e.then(e=>a({type:q,payload:e.data["hydra:member"]})))}()),a(function(){const e=k.a.get("/api/secteurs?pagination=false&props[]=id&props[]=name&order[name]=asc");return a=>(a({type:G}),e.then(e=>{a({type:V,payload:e.data["hydra:member"]})}))}()),a(function(){const e=k.a.get("/api/paiements");return a=>e.then(e=>{a({type:X,payload:e.data["hydra:member"]})})}()),a(function(){const e=k.a.get("/api/durees");return a=>e.then(e=>{a({type:Y,payload:e.data["hydra:member"]})})}())},[a]),Object(n.useEffect)(()=>{t.success&&(a(ee()),e.history.push("/abonnement"))},[t.success,a]),Object(n.useEffect)(()=>{t.successActivite&&xe(!1)},[t.successActivite,xe]),Object(n.useEffect)(()=>(function(){const t=e.match.params,{commandeId:n}=t;a("new"===n?{type:I,payload:{offre:null,sousSecteurs:[]}}:function(e){const a=k.a.get("/api/demande_abonnements/".concat(e));return e=>(e({type:U}),a.then(a=>e({type:I,payload:a.data})))}(n))}(),()=>{a(ee())}),[a,e.match.params]),Object(n.useEffect)(()=>{if((t.data&&!Se||t.data&&Se&&t.data.id!==Se.id)&&(ve({...t.data}),t.data.sousSecteurs&&D(t.data.sousSecteurs.map(e=>({value:e["@id"],label:e.secteur.name+": "+e.name}))),t.data.offre&&le(t.data.offre),t.data.mode&&fe(t.data.mode["@id"]),t.data.duree&&(be(t.data.duree),t.data.offre)))if(t.data.fournisseur.currency.name===M.z){let e=t.data.offre.prixMad*t.data.duree.name;if(Ae(e),t.data.duree.remise){let a=e*t.data.duree.remise/100,n=e-a,r=n*M.A;Fe(a),Pe(n),Ce(r),je(n+r)}else{let a=e*M.A;Ce(e*M.A),je(e+a)}}else{let e=t.data.offre.prixEur*t.data.duree.name;if(Ae(e),t.data.duree.remise){let a=e*t.data.duree.remise/100,n=e-a;Fe(a),Pe(n),je(n)}else je(e)}},[Se,t.data,ve]),Object(n.useEffect)(()=>{t.offres&&!se&&le(t.offres[0])},[se,t.offres,le]),Object(n.useEffect)(()=>{t.paiements&&!ge&&fe(t.paiements[0]["@id"])},[ge,t.paiements,fe]),Object(n.useEffect)(()=>{if(t.durees&&!he&&(be(t.durees[0]),se))if(w.data.currency===M.z){let e=se.prixMad*t.durees[0].name;if(Ae(e),t.durees[0].remise){let a=e*t.durees[0].remise/100,n=e-a,r=n*M.A;Fe(a),Pe(n),Ce(r),je(n+r)}else{let a=e*M.A;Ce(e*M.A),je(e+a)}}else{let e=se.prixEur*t.durees[0].name;if(Ae(e),t.durees[0].remise){let a=e*t.durees[0].remise/100,n=e-a;Fe(a),Pe(n),je(n)}else je(e)}},[he,t.durees,be]),r.a.createElement(M.o,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:t.loading?"":Se&&r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex flex-col items-start max-w-full"},r.a.createElement(M.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(c.a,{className:"normal-case flex items-center sm:mb-12",component:P.a,role:"button",to:"/abonnement",color:"inherit"},r.a.createElement(s.a,{className:"mr-4 text-20"},"arrow_back"),"Retour")),r.a.createElement("div",{className:"flex items-center max-w-full"},r.a.createElement("div",{className:"flex flex-col min-w-0"},r.a.createElement(M.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement("div",{className:"text-16 sm:text-20 truncate"},t.data.reference?t.data.reference:"Nouvelle Commande"))))),r.a.createElement("div",{className:"flex items-end"},0===Te?r.a.createElement(l.a,{variant:"contained",color:"secondary",onClick:e=>Ue(0,1)},"Suivant ",r.a.createElement(s.a,null,"navigate_next")):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{variant:"outlined",color:"secondary",className:"mr-4",onClick:e=>Ue(0,0)},r.a.createElement(s.a,null,"navigate_before")," Pr\xe9c\xe9dent"),r.a.createElement(l.a,{className:"whitespace-no-wrap",variant:"contained",color:"secondary",disabled:0===F.length,onClick:()=>Ie(Se)},"Passer la commande",t.loading&&r.a.createElement(i.a,{size:24,className:ke.buttonProgress}))))),contentToolbar:t.loading||!Se?r.a.createElement("div",{className:ke.root},r.a.createElement(o.a,{color:"secondary"})):r.a.createElement(m.a,{value:Te,onChange:Ue,indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},r.a.createElement(u.a,{className:"h-64 normal-case",label:"D\xe9tail de l'abonnement"}),r.a.createElement(u.a,{className:"h-64 normal-case",label:"Secteurs d'activit\xe9s"})),content:t.loading?"":Se&&r.a.createElement(ie.a,null,r.a.createElement("div",{className:"p-10  sm:p-24 max-w-2xl"},0===Te&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{container:!0,spacing:3,className:""},r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(c.a,{className:"mb-16 ",variant:"h6"},r.a.createElement("span",{className:ke.border},"Offres"))),r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(c.a,{className:"mb-16",variant:"h6"}," ",r.a.createElement("span",{className:ke.border},"R\xe9capitulatif de votre commande")))),r.a.createElement(d.a,{container:!0,spacing:3,className:"mt-16 mb-8"},r.a.createElement(d.a,{item:!0,xs:12,sm:6,className:"border-1"},t.offres&&se&&t.fournisseur?t.offres.map((e,a)=>r.a.createElement(d.a,{container:!0,key:a,spacing:3},r.a.createElement(d.a,{item:!0,xs:6,sm:6},r.a.createElement("strong",{className:"p-1"},e.name)," ",r.a.createElement("br",null),r.a.createElement("span",{className:"p-1"},e.description)),r.a.createElement(d.a,{item:!0,xs:6,sm:6},r.a.createElement(ue.a,{row:!0},r.a.createElement(p.a,{control:r.a.createElement(me.a,{checked:se.id===e.id,onChange:()=>(function(e){if(le(e),F.length>0&&D(j.a.slice(F,0,e.nbActivite)),w.data.currency===M.z){let a=e.prixMad*he.name;if(Ae(a),he.remise){let e=a*he.remise/100,t=a-e,n=t*M.A;Fe(e),Pe(t),Ce(n),je(t+n)}else{let e=a,t=e*M.A;Ce(t),Pe(e),je(e+t)}}else{let a=e.prixEur*he.name;if(Ae(a),he.remise){let e=a*he.remise/100,t=a-e;Fe(e),Pe(t),je(t)}else{let e=a;Pe(e),je(e)}}})(e),value:e["@id"]}),label:t.fournisseur.currency.name===M.z?parseFloat(e.prixMad).toLocaleString("fr",{minimumFractionDigits:2})+M.z+" HT / mois":parseFloat(e.prixEur).toLocaleString("fr",{minimumFractionDigits:2})+" \u20ac HT / mois"}))))):r.a.createElement(de.a,{height:160,width:400,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("circle",{cx:"10",cy:"20",r:"8"}),r.a.createElement("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),r.a.createElement("circle",{cx:"10",cy:"50",r:"8"}),r.a.createElement("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),r.a.createElement("circle",{cx:"10",cy:"80",r:"8"}),r.a.createElement("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}))),r.a.createElement(d.a,{item:!0,xs:12,sm:6},t.offres&&se&&he?r.a.createElement(E.a,{className:"w-full -striped"},r.a.createElement(g.a,{className:"bg-gray-200"},r.a.createElement(f.a,null,r.a.createElement(h.a,{className:"font-bold  text-black"},"Offre"),r.a.createElement(h.a,{className:"font-bold text-black text-right"},"Total HT"))),r.a.createElement(b.a,null,r.a.createElement(f.a,null,r.a.createElement(h.a,{component:"th",scope:"row",className:"truncate text-11"},r.a.createElement("strong",null,se?se.name:""),r.a.createElement("br",null),parseFloat(se.prixMad).toLocaleString("fr",{minimumFractionDigits:2}),"* ",he.name+" mois"),r.a.createElement(h.a,{component:"th",scope:"row",className:"truncate text-11 text-right"},parseFloat(Ne).toLocaleString("fr",{minimumFractionDigits:2}))),r.a.createElement(f.a,{className:"bg-gray-200"},r.a.createElement(h.a,{component:"th",scope:"row",className:"truncate text-11 text-right"},"Total HT"),r.a.createElement(h.a,{component:"th",scope:"row",className:"truncate text-11 text-right"},parseFloat(Ne).toLocaleString("fr",{minimumFractionDigits:2}))),he.remise?r.a.createElement(f.a,{className:""},r.a.createElement(h.a,{component:"th",scope:"row",className:"truncate text-11 text-right"},"Remise (",he.remise,"%)"),r.a.createElement(h.a,{component:"th",scope:"row",className:"truncate text-11 text-right"},parseFloat(we).toLocaleString("fr",{minimumFractionDigits:2}))):null,Me>0&&Me!==Ne?r.a.createElement(f.a,{className:"bg-gray-200"},r.a.createElement(h.a,{component:"th",scope:"row",className:"truncate text-11 text-right"},"Montant NET HT"),r.a.createElement(h.a,{component:"th",scope:"row",className:"truncate text-11 text-right"},parseFloat(Me).toLocaleString("fr",{minimumFractionDigits:2}))):null,r.a.createElement(f.a,{className:""},r.a.createElement(h.a,{component:"th",scope:"row",className:"truncate text-11 text-right"},"TVA (20%)"),r.a.createElement(h.a,{component:"th",scope:"row",className:"truncate text-11 text-right"},parseFloat(Oe).toLocaleString("fr",{minimumFractionDigits:2}))),r.a.createElement(f.a,{className:"bg-gray-200"},r.a.createElement(h.a,{component:"th",scope:"row",className:"truncate font-bold text-11 text-right"},"Montant TTC"),r.a.createElement(h.a,{component:"th",scope:"row",className:"truncate font-bold text-13 text-right"},parseFloat(Re).toLocaleString("fr",{minimumFractionDigits:2}))))):r.a.createElement(de.a,{height:160,width:400,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("circle",{cx:"10",cy:"20",r:"8"}),r.a.createElement("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),r.a.createElement("circle",{cx:"10",cy:"50",r:"8"}),r.a.createElement("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),r.a.createElement("circle",{cx:"10",cy:"80",r:"8"}),r.a.createElement("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"})))),r.a.createElement(d.a,{container:!0,spacing:3,className:""},r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(c.a,{className:"mb-16",variant:"h6"},r.a.createElement("span",{className:ke.border},"Mode de paiement"),"  ")),r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(c.a,{className:"mb-16",variant:"h6"},r.a.createElement("span",{className:ke.border},"Dur\xe9e de votre abonnement")," "))),r.a.createElement(d.a,{container:!0,spacing:3,className:"mt-6 mb-8"},r.a.createElement(d.a,{item:!0,xs:12,sm:6,className:"border-1"},t.paiements?t.paiements.map((e,a)=>r.a.createElement(p.a,{onChange:()=>fe(e["@id"]),key:a,value:e["@id"],checked:ge===e["@id"],control:r.a.createElement(y.a,null),label:e.name})):r.a.createElement(de.a,{height:70,width:400,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("circle",{cx:"15",cy:"17",r:"6"}),r.a.createElement("rect",{x:"25",y:"11",rx:"5",ry:"5",width:"100",height:"12"}),r.a.createElement("circle",{cx:"145",cy:"17",r:"6"}),r.a.createElement("rect",{x:"155",y:"11",rx:"5",ry:"5",width:"100",height:"12"}))),r.a.createElement(d.a,{item:!0,xs:12,sm:6,className:"border-1"},t.durees&&he?t.durees.map((e,a)=>r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(p.a,{onChange:()=>(function(e){if(be(e),w.data.currency===M.z){let a=se.prixMad*e.name;if(Ae(a),e.remise){let t=a*e.remise/100,n=a-t,r=n*M.A;Fe(t),Pe(n),Ce(r),je(n+r)}else{let e=a,t=e*M.A;Ce(t),Pe(e),je(e+t)}}else{let a=se.prixEur*e.name;if(Ae(a),e.remise){let t=a*e.remise/100,n=a-t;Fe(t),Pe(n),je(n)}else{let e=a;Pe(e),je(e)}}})(e),value:e["@id"],checked:he.id===e.id,control:r.a.createElement(y.a,null),label:e.name+" mois"}),e.remise?r.a.createElement("span",{className:"text-12 text-red"},"(Soit ",e.remise,"% de remise )"):"")):r.a.createElement(de.a,{height:70,width:400,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("circle",{cx:"15",cy:"17",r:"6"}),r.a.createElement("rect",{x:"25",y:"11",rx:"5",ry:"5",width:"100",height:"12"}),r.a.createElement("circle",{cx:"145",cy:"17",r:"6"}),r.a.createElement("rect",{x:"155",y:"11",rx:"5",ry:"5",width:"100",height:"12"})))),r.a.createElement(d.a,{container:!0,spacing:3,className:"mt-6 mb-16"},r.a.createElement(d.a,{item:!0,xs:12,sm:12,className:"flex justify-end"},r.a.createElement(l.a,{variant:"contained",color:"secondary",onClick:e=>Ue(0,1)},"Suivant ",r.a.createElement(s.a,null,"navigate_next"))))),1===Te&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{container:!0,spacing:3,className:""},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(c.a,{className:"mb-16",variant:"h6"},r.a.createElement("span",{className:ke.border},"Secteurs & Activit\xe9s")))),r.a.createElement(d.a,{container:!0,spacing:3,className:"mt-8 mb-8"},r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(M.E,{id:"secteurs",name:"secteurs",value:re,placeholder:"S\xe9lectionner.. ",textFieldProps:{label:"Secteurs",InputLabelProps:{shrink:!0},variant:"outlined"},className:"mb-16",options:t.secteurs,isLoading:t.loadingSecteurs,onChange:e=>Le(e,"secteurs"),required:!0})),r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(M.E,{id:"activites",name:"activites",value:"",placeholder:"S\xe9lectionner.. ",textFieldProps:{label:"Activit\xe9s",InputLabelProps:{shrink:!0},variant:"outlined"},className:"mb-16",options:t.sousSecteurs,isLoading:t.loadingSS,onChange:e=>Le(e,"activites"),required:!0}),r.a.createElement(c.a,{variant:"caption"},se&&(se.nbActivite>F.length?"Vous pouvez encore ajouter ".concat(se.nbActivite-F.length," activit\xe9s"):"Vous avez atteint la limite de ".concat(se.nbActivite," activit\xe9s"))))),r.a.createElement(d.a,{container:!0,spacing:3,className:"mb-8"},r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(c.a,{variant:"h6"},r.a.createElement("span",{className:ke.border},"Activit\xe9(s) choisie(s)"))),r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(c.a,{variant:"h6"},r.a.createElement("span",{className:ke.border},"Suggestions")," "))),r.a.createElement(d.a,{container:!0,spacing:3,className:"mt-4 border-1"},r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement("div",{className:Object(pe.a)(ke.chips)},F&&F.length>0&&j.a.sortBy(F,[function(e){return e.label}]).map((e,a)=>r.a.createElement(x.a,{key:e.label,label:e.label,color:"secondary",onDelete:()=>(function(e){D(j.a.reject(F,function(a){return a.value===e}))})(e.value),className:"mt-8 mr-8"})))),r.a.createElement(d.a,{item:!0,xs:12,sm:6,className:"border-1"},t.fournisseur?r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{className:"mt-4",variant:"caption"},"Si vos secteurs ou activit\xe9s n\xb4existent pas, veuillez nous les envoyer en cliquant"),r.a.createElement("div",{className:"mt-4"},r.a.createElement(R.a,{component:"button",variant:"body2",color:"secondary",onClick:function(){xe(!0)}},"Suggerer d'autres secteurs et activit\xe9s"),r.a.createElement(S.a,{open:ye,onClose:Be,"aria-labelledby":"form-dialog-title"},r.a.createElement(v.a,{id:"form-dialog-title"},"Vos suggestions"),r.a.createElement(N.a,null,r.a.createElement(c.a,{variant:"caption"},"Ces suggestions seront prises en compte par l'administrateur dans les plus brefs d\xe9lais."),r.a.createElement(d.a,{container:!0,spacing:3},r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(A.a,{className:"mt-8 mb-16",error:te.length<=2,required:!0,label:"Secteur",autoFocus:!0,value:te,id:"secteur",name:"secteur",onChange:e=>ne(e.target.value),variant:"outlined",fullWidth:!0,helperText:te.length<=2?"Ce champ doit contenir au moins 3 caract\xe8res":""})),r.a.createElement(d.a,{item:!0,xs:12,sm:6},r.a.createElement(A.a,{className:"mt-8 mb-16",id:"sousSecteur",name:"sousSecteur",error:Z.length<=2,onChange:e=>ae(e.target.value),label:"Activit\xe9",type:"text",required:!0,value:Z,variant:"outlined",fullWidth:!0,helperText:Z.length<=2?"Ce champ doit contenir au moins 3 caract\xe8res ":""})))),r.a.createElement(O.a,null),r.a.createElement(C.a,null,r.a.createElement(l.a,{onClick:Be,variant:"outlined",color:"primary"},"Annuler"),r.a.createElement(l.a,{onClick:function(){a(function(e,a,t){let n={};if(a&&e)return n.sousSecteur=a,n.secteur=e,n.pageSuggestion="Demande Offre d'abonnement fournisseur",n.user="/api/fournisseurs/".concat(t),(e,a)=>{const t=k.a.post("/api/suggestion_secteurs",n);return e({type:L}),t.then(a=>Promise.all([e({type:K}),e(Object(B.B)({message:"Votre suggestion a bien \xe9t\xe9 enregistr\xe9e, un mail vous sera envoy\xe9 d\xe8s la validation de votre suggestion, nous vous remercions pour votre confiance!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]))}}(te,Z,w.id))},variant:"contained",color:"secondary",disabled:t.loadingSuggestion||Z.length<2||te.length<=2},"Soumettre la suggestion",t.loadingSuggestion&&r.a.createElement(i.a,{size:24,className:ke.buttonProgress})))))):r.a.createElement(de.a,{height:70,width:400,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"1",y:"13",rx:"5",ry:"5",width:"220",height:"24"})))),r.a.createElement(d.a,{container:!0,spacing:3,className:"mt-16 mb-16 flex justify-end"},r.a.createElement(d.a,{item:!0,xs:12,sm:6,className:"flex justify-end"},r.a.createElement(l.a,{variant:"outlined",color:"secondary",className:"mr-4",onClick:e=>Ue(0,0)},r.a.createElement(s.a,null,"navigate_before")," Pr\xe9c\xe9dent"),r.a.createElement(l.a,{className:"whitespace-no-wrap",variant:"contained",color:"secondary",disabled:0===F.length,onClick:()=>Ie(Se)},"Passer la commande",t.loading&&r.a.createElement(i.a,{size:24,className:ke.buttonProgress}))))))),innerScroll:!0})})}}]);