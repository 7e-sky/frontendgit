(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1254:function(e,t,a){"use strict";var n=a(50),r=a(33),c=a(39),o=a(10);const s="[DETAIL FOURNISSEUR APP] CLEAN_UP",i="[DETAIL FOURNISSEUR APP] REQUEST_FOURNISSEUR_PRODUITS_APERCU",l="[DETAIL FOURNISSEUR APP] REQUEST_FOURNISSEUR_PRODUITS",u="[DETAIL FOURNISSEUR APP] REQUEST_FOURNISSEUR",m="[DETAIL FOURNISSEUR APP] GET_FOURNISSEUR",d="[DETAIL FOURNISSEUR APP] GET_FOURNISSEUR_PRODUITS_APERCU",p="[DETAIL FOURNISSEUR APP] GET_FOURNISSEUR_PRODUITS",g="[DETAIL FOURNISSEUR APP] SAVE ERROR",E="[DETAIL FOURNISSEUR APP] SAVE ERROR GET",f="[DETAIL FOURNISSEUR APP] REQUEST_UPDATE_FOURNISSEUR",h="[DETAIL FOURNISSEUR APP] GET_UPDATE_FOURNISSEUR",y="[DETAIL FOURNISSEUR APP] SET PARAMETRES DATA",b="[DETAIL FOURNISSEUR APP] CLEAN_ERROR",S="[DETAIL FOURNISSEUR APP] OPEN NEW CONTACT FOURNISSEUR DIALOG",v="[DETAIL FOURNISSEUR APP] CLOSE NEW CONTACT FOURNISSEUR DIALOG",N="[DETAIL FOURNISSEUR APP] REQUEST SAVE",P="[DETAIL FOURNISSEUR APP] SAVE MESSAGE",x="[DETAIL FOURNISSEUR APP] CLEAN_UP_FRS",R="[DETAIL FOURNISSEUR APP] CLEAN_UP_PD_AP",O="[DETAIL FOURNISSEUR APP] CLEAN_UP_PDS";function A(){return e=>e({type:x})}function I(){return e=>e({type:R})}function U(){return e=>e({type:O})}function w(){return e=>e({type:b})}function T(e){const t=n.a.get("/api/fournisseurs/".concat(e));return e=>(e({type:u}),t.then(t=>{e({type:m,payload:t.data})}).catch(t=>{e({type:E})}))}function C(e){const t=n.a.get("/api/fournisseurs/".concat(e,"/produits?itemsPerPage=4&order[created]=desc&isValid=true"));return e=>(e({type:i}),t.then(t=>{e({type:d,payload:t.data["hydra:member"]})}))}function _(e,t){let a=o.a.split(t.filter.id,"-");const r=n.a.get("/api/produits?page=".concat(t.page,"&fournisseur=").concat(e,"&isValid=true&fournisseur.parent=").concat(e,"&itemsPerPage=").concat(t.itemsPerPage,"&order[").concat(a[0],"]=").concat(a[1]));return e=>(e({type:l}),r.then(t=>{e({type:p,payload:t.data})}))}function L(e){const t=n.a.put("/custom/update_fournisseur/".concat(e));return e=>(e({type:f}),t.then(t=>{e({type:h,payload:t.data})}))}function j(e){return{type:y,parametres:e}}function F(e){return{type:S,id:e}}function k(){return{type:v}}function D(e,t){e.fournisseur="/api/fournisseurs/"+t;const a=n.a.post("/api/contact_fournisseurs",e);return e=>(e({type:N}),a.then(t=>(e(Object(r.B)({message:"Message bien envoy\xe9",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"})),e({type:P}),e(k()))).catch(t=>{e({type:g,payload:c.y.parseApiErrors(t)})}))}var z=a(60),G=a.n(z);const V="[FOURNISSEURS PORTAIL APP] REQUEST_FOURNISSEURS",q="[FOURNISSEURS PORTAIL APP] REQUEST_SECTEURS_COUNT",B="[FOURNISSEURS PORTAIL APP] REQUEST_PAYS_COUNT",W="[FOURNISSEURS PORTAIL APP] REQUEST_ACTIVITES_COUNT",Q="[FOURNISSEURS PORTAIL APP] REQUEST_CATEGORIES_COUNT",H="[FOURNISSEURS PORTAIL APP] REQUEST_VILLES_COUNT",M="[FOURNISSEURS PORTAIL APP] GET_VILLES_COUNT",X="[FOURNISSEURS PORTAIL APP] GET_ACTIVITES_COUNT",Y="[FOURNISSEURS PORTAIL APP] GET_CATEGORIES_COUNT",J="[FOURNISSEURS PORTAIL APP] GET_FOURNISSEURS",K="[FOURNISSEURS PORTAIL APP] GET_SECTEURS_COUNT",Z="[FOURNISSEURS PORTAIL APP] GET_PAYS_COUNT";function $(e,t,a,r,c){const{secteur:s,activite:i,categorie:l}=e;let u="";l?u+="&categories.slug=".concat(l):i?u+="&categories.sousSecteurs.slug=".concat(i):s&&(u+="categories.sousSecteurs.secteur.slug=".concat(s)),t&&(u+=u?"&pays.slug=".concat(t):"pays.slug=".concat(t)),r&&(u+="&ville.slug=".concat(r)),c&&(u+="&societeLower=".concat(c)),u&&(u="&"+u);let m=o.a.split(a.filter.id,"-");const d=n.a.get("/api/fournisseurs?page=".concat(a.page,"&exists[parent]=false&isactif=true&isComplet=true&itemsPerPage=").concat(a.itemsPerPage,"&order[").concat(m[0],"]=").concat(m[1])+(u||""));return e=>(e({type:V}),d.then(t=>{e({type:J,payload:t.data})}))}function ee(e,t,a,r){const{secteur:c,activite:o}=e,s=n.a.get("/count_fournisseur_categorie?secteur=".concat(c||"","&sousSecteur=").concat(o||"","&pays=").concat(t||"","&ville=").concat(a||"","&q=").concat(r||""));return e=>(e({type:q}),s.then(t=>{e({type:K,payload:t.data})}))}function te(e,t,a,r){const{secteur:c,activite:o}=e,s=n.a.get("/count_fournisseur_categorie?secteur=".concat(c||"","&sousSecteur=").concat(o||"","&pays=").concat(t||"","&ville=").concat(a||"","&q=").concat(r||""));return e=>(e({type:W}),s.then(t=>{e({type:X,payload:t.data})}))}function ae(e,t,a,r){const{secteur:c,activite:o,categorie:s}=e,i=n.a.get("/count_fournisseur_categorie?secteur=".concat(c||"","&sousSecteur=").concat(o||"","&categorie=").concat(s||"","&pays=").concat(t||"","&ville=").concat(a||"","&q=").concat(r||""));return e=>(e({type:Q}),i.then(t=>{e({type:Y,payload:t.data})}))}function ne(e,t,a){const{secteur:r,activite:c,categorie:o}=e,s=n.a.get("/count_fournisseur_pays?secteur=".concat(r||"","&sousSecteur=").concat(c||"","&categorie=").concat(o||"","&pays=").concat(t||"","&q=").concat(a||""));return e=>(e({type:H}),s.then(t=>{e({type:M,payload:t.data})}))}function re(e,t,a){const{secteur:r,activite:c,categorie:o}=e,s=n.a.get("/count_fournisseur_pays?secteur=".concat(r||"","&sousSecteur=").concat(c||"","&categorie=").concat(o||"","&pays=").concat(t||"","&q=").concat(a||""));return e=>(e({type:B}),s.then(t=>{e({type:Z,payload:t.data})}))}function ce(e){const t=n.a.get("/count_fournisseur_categorie?q=".concat(e||"")),a=n.a.get("/count_fournisseur_pays?q=".concat(e||""));return e=>{e({type:B}),e({type:q}),G.a.all([t,a]).then(G.a.spread(function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];e({type:K,payload:a[0].data}),e({type:Z,payload:a[1].data})})).catch(e=>{})}}a.d(t,"b",function(){return s}),a.d(t,"w",function(){return i}),a.d(t,"v",function(){return l}),a.d(t,"t",function(){return u}),a.d(t,"i",function(){return m}),a.d(t,"l",function(){return d}),a.d(t,"k",function(){return p}),a.d(t,"C",function(){return g}),a.d(t,"D",function(){return E}),a.d(t,"A",function(){return f}),a.d(t,"o",function(){return h}),a.d(t,"F",function(){return y}),a.d(t,"a",function(){return b}),a.d(t,"q",function(){return S}),a.d(t,"f",function(){return v}),a.d(t,"y",function(){return N}),a.d(t,"E",function(){return P}),a.d(t,"c",function(){return x}),a.d(t,"e",function(){return R}),a.d(t,"d",function(){return O}),a.d(t,"I",function(){return A}),a.d(t,"J",function(){return I}),a.d(t,"K",function(){return U}),a.d(t,"H",function(){return w}),a.d(t,"O",function(){return T}),a.d(t,"Q",function(){return C}),a.d(t,"P",function(){return _}),a.d(t,"Y",function(){return L}),a.d(t,"X",function(){return j}),a.d(t,"W",function(){return F}),a.d(t,"L",function(){return k}),a.d(t,"G",function(){return D}),a.d(t,"b",function(){}),a.d(t,"u",function(){return V}),a.d(t,"z",function(){return q}),a.d(t,"x",function(){return B}),a.d(t,"r",function(){return W}),a.d(t,"s",function(){return Q}),a.d(t,"B",function(){return H}),a.d(t,"p",function(){return M}),a.d(t,"g",function(){return X}),a.d(t,"h",function(){return Y}),a.d(t,"j",function(){return J}),a.d(t,"n",function(){return K}),a.d(t,"m",function(){return Z}),a.d(t,"F",function(){}),a.d(t,"R",function(){return $}),a.d(t,"U",function(){return ee}),a.d(t,"M",function(){return te}),a.d(t,"N",function(){return ae}),a.d(t,"V",function(){return ne}),a.d(t,"S",function(){return re}),a.d(t,"T",function(){return ce}),a.d(t,"X",function(){})},1335:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1223),o=a(1218),s=a(1228),i=a(89),l=a(1229),u=a(1231),m=a(1204),d=a(1230),p=a(1227),g=a(1233),E=a(137),f=a(1254),h=a(7),y=a(39),b=a(51),S=a.n(b),v=a(1295);const N={contact:""};t.a=function(e){const t=Object(h.b)(),a=Object(h.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur}),b=Object(h.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.contactFournisseurDialog}),{form:P,handleChange:x,setForm:R}=Object(E.b)(N),[O,A]=Object(n.useState)(!1),I=Object(n.useRef)(null),U=Object(n.useCallback)(()=>{"new"===b.type&&R({...N,...b.data})},[b.data,b.type,R]);function w(){A(!1)}return Object(n.useEffect)(()=>(a.error&&(a.error.contact||a.error.phone||a.error.email||a.error.message)&&(I.current.updateInputsWithError({...a.error}),w()),()=>{t(f.H())}),[a.error,t]),Object(n.useEffect)(()=>{b.props.open&&U()},[b.props.open,U]),r.a.createElement(c.a,Object.assign({classes:{paper:"m-24"}},b.props,{onClose:function(){t(f.L())},fullWidth:!0,maxWidth:"xs"}),r.a.createElement(o.a,{position:"static",elevation:1},r.a.createElement(s.a,{className:"flex w-full"},r.a.createElement(i.a,{variant:"subtitle1",color:"inherit"},"ENVOYEZ UN MESSAGE"))),r.a.createElement(S.a,{onValidSubmit:function(e){"new"===b.type&&t(f.G(e,b.data))},onValid:function(){A(!0)},onInvalid:w,ref:I,className:"flex flex-col overflow-hidden"},r.a.createElement(l.a,{classes:{root:"p-24"}},r.a.createElement("div",{className:"flex"},r.a.createElement(y.F,{className:"mb-24",label:"Nom Contact",autoFocus:!0,id:"contact",name:"contact",value:P.contact,onChange:x,variant:"outlined",validations:{minLength:4,maxLength:100},InputProps:{endAdornment:r.a.createElement(u.a,{position:"end"},r.a.createElement(m.a,{className:"text-20",color:"action"},"perm_identity"))},validationErrors:{maxLength:"La longueur minimale de caract\xe8re est 100",minLength:"La longueur minimale des caract\xe8res est de 4"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(y.F,{className:"mb-24",value:P.phone,onChange:x,type:"text",autoComplete:"phone",id:"phone",name:"phone",label:"T\xe9l\xe9phone",validations:{minLength:10,maxLength:13},validationErrors:{minLength:"La longueur minimale de caract\xe8re est 10",maxLength:"La longueur maximale de caract\xe8re est 13"},InputProps:{endAdornment:r.a.createElement(u.a,{position:"end"},r.a.createElement(m.a,{className:"text-20",color:"action"},"local_phone"))},variant:"outlined",required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(y.F,{className:"mb-24",type:"text",autoComplete:"email",name:"email",value:P.email,onChange:x,label:"Email",validations:"isEmail",validationErrors:{isEmail:"Veuillez saisir un e-mail valide"},InputProps:{endAdornment:r.a.createElement(u.a,{position:"end"},r.a.createElement(m.a,{className:"text-20",color:"action"},"email"))},variant:"outlined",fullWidth:!0,required:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(y.F,{className:"mb-16  w-full",type:"text",name:"message",value:P.message,onChange:x,placeholder:"Fournissez des informations pertinentes pour obtenir un devis adapt\xe9 \xe0 vos besoins",label:"Message",autoComplete:"message",validations:{minLength:10,maxLength:1e3},validationErrors:{maxLength:"La longueur maximale de caract\xe8re est 1000",minLength:"La longueur minimale de caract\xe8re est 10"},variant:"outlined",multiline:!0,rows:"4",required:!0})),"En appuyant sur le bouton ",r.a.createElement("span",{className:"font-bold"},' "Envoyer"'),", vous acceptez les ",r.a.createElement(v.a,{href:"/conditions",target:"_blank",rel:"noreferrer noopener"},"Conditions d'utilisation")," Politique de protection des donn\xe9es"),r.a.createElement(d.a,{className:"justify-between pl-16"},r.a.createElement(p.a,{variant:"contained",color:"primary",type:"submit",disabled:!O||a.loadingsContact},"Envoyer",a.loadingsContact&&r.a.createElement(g.a,{size:24})),r.a.createElement("p",{className:"pr-16"},"* Champs obligatoires"))))}},1354:function(e,t,a){"use strict";var n=a(43),r=a(1254),c=a(39);const o={data:[],produits:[],produitsApercu:[],loading:!1,loadingProduits:!1,loadingProduitsApercu:!1,loadingsPhone:!1,loadingsContact:!1,showPhone:!1,phone:null,error:null,totalItems:null,pageCount:null,parametres:{itemsPerPage:10,page:1,filter:{id:"created-desc"}},contactFournisseurDialog:{type:"new",props:{open:!1},data:null}};var s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.D:return{...e,loading:!1};case r.b:return{...o};case r.a:return{...e,error:null};case r.y:return{...e,loadingsContact:!0};case r.t:return{...e,loading:!0,showPhone:!1,phone:null};case r.v:return{...e,loadingProduits:!0};case r.w:return{...e,loadingProduitsApercu:!0};case r.A:return{...e,loadingsPhone:!0,showPhone:!1};case r.i:return{...e,loading:!1,data:t.payload};case r.c:return{...e,data:[]};case r.E:return{...e,loadingsContact:!1};case r.l:return{...e,loadingProduitsApercu:!1,produitsApercu:t.payload};case r.e:return{...e,produitsApercu:[]};case r.k:return{...e,loadingProduits:!1,produits:t.payload["hydra:member"],pageCount:c.y.hydraPageCount(t.payload),totalItems:t.payload["hydra:totalItems"]};case r.d:return{...e,produits:[],totalItems:null,pageCount:null};case r.o:return{...e,loadingsPhone:!1,phone:t.payload,showPhone:!0};case r.F:return{...e,parametres:{itemsPerPage:t.parametres.itemsPerPage,page:t.parametres.page,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}};case r.q:return{...e,contactFournisseurDialog:{type:"new",props:{open:!0},data:t.id}};case r.C:return{...e,error:t.payload,loadingsContact:!1};case r.f:return{...e,contactFournisseurDialog:{type:"new",props:{open:!1},data:null}};default:return e}},i=a(102);const l={data:[],secteurs:[],activites:[],categories:[],pays:[],villes:[],loading:!1,totalItems:null,pageCount:null,parametres:{itemsPerPage:10,page:1,filter:{id:"created-desc"}},loadingSecteurs:!1,loadingPays:!1,loadingActivites:!1,loadingCategories:!1,loadingVilles:!1};var u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.b:return{...l};case r.u:return{...e,loading:!0};case r.z:return{...e,loadingSecteurs:!0};case r.x:return{...e,loadingPays:!0};case r.B:return{...e,loadingVilles:!0};case r.r:return{...e,loadingActivites:!0};case r.s:return{...e,loadingCategories:!0};case r.j:return{...e,loading:!1,data:t.payload["hydra:member"],pageCount:i.a.hydraPageCount(t.payload),totalItems:t.payload["hydra:totalItems"]};case r.n:return{...e,loadingSecteurs:!1,secteurs:t.payload};case r.m:return{...e,loadingPays:!1,pays:t.payload};case r.p:return{...e,loadingVilles:!1,villes:t.payload};case r.g:return{...e,loadingActivites:!1,activites:t.payload};case r.h:return{...e,loadingCategories:!1,categories:t.payload};case r.F:return{...e,parametres:{itemsPerPage:t.parametres.itemsPerPage,page:t.parametres.page,filter:{id:t.parametres.filter.id}}};default:return e}};const m=Object(n.d)({fournisseur:s,fournisseurs:u});t.a=m},1554:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(1157),o=a(1232),s=a(135),i=a(89),l=a(1227),u=a(1204),m=a(1130),d=a(1236),p=a(1219),g=a(1217),E=a(1235),f=a(1233),h=a(1139),y=a(1231),b=a(1221),S=a(1140),v=a(1226),N=a(2),P=a(39),x=a(201),R=a(1254),O=a(364),A=a(1524),I=a(1525),U=a(1526),w=a(1160),T=a(7),C=a(16),_=a(1295),L=a(10);var j=function(e){const t=e.match.params,{id:a,slug:n}=t,c=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.data}),o=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.produitsApercu}),s=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.loadingProduitsApercu}),l=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.loading});return c?r.a.createElement("div",{className:"p-20"},l?"loading ... ":r.a.createElement(P.e,{enter:{animation:"transition.slideUpBigIn"}},r.a.createElement(i.a,{className:" text-justify leading-relaxed text-14 whitespace-pre-line"},c.description),r.a.createElement(i.a,{variant:"h2",className:"my-24 p-12 bg-gray-300 uppercase font-bold text-16"},"Aper\xe7u du catalogue produits"),s?r.a.createElement("div",{className:"text-center mt-16"},"Chargement..."):o.length>0?r.a.createElement(A.a,{className:"",spacing:8,cols:0},o&&o.map((e,t)=>r.a.createElement(I.a,{classes:{root:"w-full sm:w-1/2 md:w-1/4",tile:"rounded-8"},component:C.a,to:"/detail-produit/".concat(e.sousSecteurs.slug,"/").concat(e.categorie.slug,"/").concat(e.id,"-").concat(e.slug),key:t},r.a.createElement("img",{src:e.featuredImageId?x.d+e.featuredImageId.url:"assets/images/ecommerce/product-placeholder.jpg",alt:e.titre}),r.a.createElement(U.a,{title:e.titre,actionIcon:r.a.createElement(S.a,{component:C.a,to:"/detail-produit/".concat(e.sousSecteurs.slug,"/").concat(e.categorie.slug,"/").concat(e.id,"-").concat(e.slug)},r.a.createElement(u.a,{className:"text-white opacity-75"},"arrow_forward_ios"))})))):r.a.createElement("div",{className:"text-center mt-16"},"Aucun produit n'est ajout\xe9 par cette entreprise"),o.length>0&&r.a.createElement("div",{className:"text-right mt-16"},r.a.createElement(_.a,{component:C.a,to:"/entreprise/".concat(a,"-").concat(n,"/produits"),className:""},"Voir tout le catalogue de produits >")),r.a.createElement(i.a,{variant:"h2",className:"my-24 p-12 bg-gray-300 uppercase font-bold text-16"},"Activit\xe9s"),c.categories&&c.categories.map((t,a)=>r.a.createElement(w.a,{label:L.a.capitalize(t.name),classes:{root:"h-24",label:"pl-4 pr-6 py-4 text-11"},onClick:()=>t.sousSecteurs[0]&&e.history.push({pathname:"/entreprises/"+t.sousSecteurs[0].secteur.slug+"/"+t.sousSecteurs[0].slug+"/"+t.slug}),key:a,variant:"outlined",className:"ml-4 mb-4 h-24"})))):null},F=a(8),k=a(198),D=a(1158),z=a(1241);var G=Object(F.a)(e=>({root:{flexGrow:1},paper:{padding:e.spacing(2),marginTop:10,maxWidth:"100%"},image:{width:218},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"150px"}}))(function(e){const t=Object(T.b)(),a=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.pageCount}),n=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.produits}),c=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.loadingProduits}),l=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.parametres}),{classes:m}=e;return r.a.createElement("div",{className:m.root},c?(d=r.a.createElement(z.a,{speed:2,width:400,height:100,viewBox:"0 0 400 100"},r.a.createElement("rect",{x:"2",y:"8",rx:"0",ry:"0",width:"105",height:"83"}),r.a.createElement("rect",{x:"120",y:"10",rx:"0",ry:"0",width:"133",height:"10"}),r.a.createElement("rect",{x:"119",y:"31",rx:"0",ry:"0",width:"216",height:"21"}),r.a.createElement("rect",{x:"120",y:"79",rx:"2",ry:"2",width:"43",height:"12"}),r.a.createElement("rect",{x:"130",y:"89",rx:"2",ry:"2",width:"43",height:"0"}),r.a.createElement("rect",{x:"172",y:"80",rx:"2",ry:"2",width:"43",height:"11"}),r.a.createElement("rect",{x:"223",y:"80",rx:"2",ry:"2",width:"43",height:"11"}),r.a.createElement("rect",{x:"120",y:"61",rx:"0",ry:"0",width:"44",height:"9"}),r.a.createElement("rect",{x:"350",y:"11",rx:"0",ry:"0",width:"46",height:"8"})),[0,1,2,3,4,5,6,7,8,9].map(e=>r.a.cloneElement(d,{key:e}))):r.a.createElement(P.e,{enter:{animation:"transition.slideUpBigIn"}},n.length>0?n.map((e,t)=>r.a.createElement(s.a,{className:m.paper,key:t},r.a.createElement(o.a,{container:!0,spacing:2},r.a.createElement(o.a,{item:!0},r.a.createElement(k.a,{className:m.image,component:C.a,to:"/detail-produit/".concat(e.sousSecteurs.slug,"/").concat(e.categorie.slug,"/").concat(e.id,"-").concat(e.slug)},r.a.createElement("img",{className:m.img,alt:e.titre,src:e.featuredImageId?x.d+e.featuredImageId.url:"assets/images/ecommerce/product-placeholder.jpg"}))),r.a.createElement(o.a,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(o.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},r.a.createElement(o.a,{item:!0,xs:!0},r.a.createElement(i.a,{gutterBottom:!0,component:C.a,to:"/detail-produit/".concat(e.sousSecteurs.slug,"/").concat(e.categorie.slug,"/").concat(e.id,"-").concat(e.slug),variant:"h6"},e.titre),r.a.createElement(i.a,{variant:"body2",gutterBottom:!0},L.a.capitalize(L.a.truncate(e.description,{length:70})),r.a.createElement(C.a,{to:"/detail-produit/".concat(e.sousSecteurs.slug,"/").concat(e.categorie.slug,"/").concat(e.id,"-").concat(e.slug),className:"ml-2 text-blue"},"Voir d\xe9tails")),r.a.createElement(i.a,{variant:"body2",className:"mb-8",color:"textSecondary"},"R\xe9f: ",e.reference),e.images&&e.images.length>0?r.a.createElement(w.a,{icon:r.a.createElement(u.a,{className:"text-16 mr-0"},"image"),label:e.images.length,classes:{root:"h-24",label:"pl-4 pr-6 py-4 text-11",deleteIcon:"w-16 ml-0"},variant:"outlined",className:"mr-4 h-24"}):"",e.videos?r.a.createElement(w.a,{icon:r.a.createElement(u.a,{className:"text-16 mr-0"},"videocam"),label:"1",classes:{root:"h-24",label:"pl-4 pr-6 py-4 text-11",deleteIcon:"w-16 ml-0"},variant:"outlined",className:"mr-4 h-24"}):"",e.ficheTechnique?r.a.createElement(w.a,{icon:r.a.createElement(u.a,{className:"text-16 mr-0"},"picture_as_pdf"),label:"1 fiche technique",classes:{root:"h-24",label:"pl-4 pr-6 py-4 text-11",deleteIcon:"w-16 ml-0"},variant:"outlined",className:"mr-4 h-24"}):"")),r.a.createElement(o.a,{item:!0},r.a.createElement(i.a,{variant:"subtitle1",color:"secondary",className:"font-600"},e.pu?parseFloat(e.pu).toLocaleString(void 0,{minimumFractionDigits:2})+(e.currency?" "+e.currency.name:""):"")))))):r.a.createElement("div",{className:"text-center mt-16"},"Aucun produit n'est ajout\xe9 par cette entreprise"),n.length>0&&r.a.createElement(o.a,{container:!0,spacing:2,className:"justify-between mt-16"},r.a.createElement(o.a,{item:!0,xs:6},"Montrer:\u2002",r.a.createElement(D.a,{className:"text-13",native:!0,value:l.itemsPerPage,onChange:function(e){l.page=1,l.itemsPerPage=e.target.value,document.querySelector(".st").scrollTop=0,t(R.X(l))},inputProps:{name:"ItemsPerPage"}},r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"50"},"50 "),r.a.createElement("option",{value:"100"},"100"))),r.a.createElement(o.a,{item:!0,xs:6,className:"text-right"},r.a.createElement(S.a,{"aria-label":"Previous",className:m.margin,disabled:1===l.page,onClick:function(){l.page=Math.max(l.page-1,1),t(R.X(l)),document.querySelector(".st").scrollTop=0}},r.a.createElement(u.a,null,"arrow_back")),l.page," / ",a,r.a.createElement(S.a,{"aria-label":"Next",disabled:l.page===a,className:m.margin,onClick:function(){l.page=Math.min(l.page+1,a),t(R.X(l)),document.querySelector(".st").scrollTop=0}},r.a.createElement(u.a,null,"arrow_forward"))))));var d});const V=Object(c.a)(e=>({chip:{margin:e.spacing(1)}}));var q=function(e){const t=V(),a=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.totalItems}),n=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.parametres}),c=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.loadingProduits}),o=Object(T.b)();return r.a.createElement(r.a.Fragment,null,a>0&&r.a.createElement("div",{className:"flex justify-between"},r.a.createElement("div",null,c?"":r.a.createElement(w.a,{label:a+" produit(s) trouv\xe9(s)",color:"primary",className:t.chip})),r.a.createElement("div",{className:"flex items-center justify-between "},r.a.createElement(i.a,{className:"text-13 mr-16"},"R\xe9sultats tri\xe9s par"),r.a.createElement(D.a,{className:"text-13",native:!0,value:n.filter.id,onChange:function(e){n.page=1,n.filter.id=e.target.value,o(R.X(n))},inputProps:{name:"currentRange"}},r.a.createElement("option",{value:"created-desc"},"Plus r\xe9cent"),r.a.createElement("option",{value:"created-asc"},"Plus ancien "),r.a.createElement("option",{value:"pu-asc"},"Prix les plus bas en premier"),r.a.createElement("option",{value:"pu-desc"},"Prix les plus hauts en premier")))))};var B=r.a.memo(function(e){const t=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.data});return r.a.createElement("div",{className:"flex flex-col p-20"},t&&r.a.createElement(O.Helmet,null,r.a.createElement("title",null,"Les produits de la soci\xe9t\xe9 "+t.societe),r.a.createElement("meta",{name:"description",content:t.description}),r.a.createElement("meta",{property:"og:title",content:"Les produits de la soci\xe9t\xe9 "+t.societe}),r.a.createElement("meta",{property:"og:description",content:t.description})),r.a.createElement(i.a,{variant:"h6",gutterBottom:!0},t&&"Les produits de la soci\xe9t\xe9 "+t.societe),r.a.createElement(q,null),r.a.createElement(G,null))}),W=a(1224),Q=a(1288),H=a(1434),M=a(33);const X=Object(v.a)(e=>({root:{flexGrow:1},businessIcon:{position:"absolute",top:10,left:10,color:"white",fontSize:40,width:40,height:40,pointerEvents:"none"},businessDownIcon:{position:"absolute",top:28,left:25,color:"#cbd5e0",fontSize:80,width:80,height:80,pointerEvents:"none"},icon:{fontSize:64},avatar:{width:80,height:80,padding:8,boxSizing:"content-box"},fiche:{marginTop:e.spacing(4),minHeight:260,maxHeight:260,backgroundColor:e.palette.primary.main,backgroundImage:"url(https://source.unsplash.com/collection/9631824/1600x900)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},bigAvatar:{width:150,height:150,borderWidth:6,borderStyle:"solid",borderColor:"gray"},title:{marginTop:10,marginRight:60,padding:e.spacing(2),width:"100%",backgroundColor:"rgba(0,0,0,.4)"},shadow:{"text-shadow":"1px 1px 1px #000"},position:{marginTop:"-63px",marginBottom:"20px"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},headerIcon:{position:"absolute",top:-64,right:0,opacity:.04,fontSize:512,width:512,height:512,pointerEvents:"none"},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"150px"},grid:{[e.breakpoints.down("xs")]:{width:"100%"}}}));var Y=r.a.memo(function(e){const t=Object(T.b)(),a=X(),[c,v]=Object(n.useState)(0),A=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur}),I=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.data}),U=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.loading}),w=e.match.params,{id:C,tab:_,slug:F}=w;return Object(n.useEffect)(()=>{v("produits"===_?1:0)},[_,v]),U?r.a.createElement(W.a,{color:"secondary"}):0!==A.data.length||A.loading?I?r.a.createElement(r.a.Fragment,null,I&&r.a.createElement(O.Helmet,null,r.a.createElement("title",null,L.a.truncate(I.societe+" | Les Achats Industriels",{length:70,separator:" "})),r.a.createElement("meta",{name:"description",content:L.a.truncate(I.description,{length:160,separator:" "})}),r.a.createElement("meta",{property:"og:title",content:L.a.truncate(I.societe+" | Les Achats Industriels",{length:70,separator:" "})}),r.a.createElement("meta",{property:"og:description",content:L.a.truncate(I.description,{length:160,separator:" "})}),r.a.createElement("meta",{property:"twitter:title",content:L.a.truncate(I.societe+" | Les Achats Industriels",{length:70,separator:" "})}),r.a.createElement("meta",{property:"twitter:description",content:L.a.truncate(I.description,{length:160,separator:" "})})),U?"":r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{container:!0,spacing:2,classes:{"spacing-xs-2":a.grid},className:Object(N.a)(a.fiche," relative max-w-2xl mx-auto")},r.a.createElement("div",{className:a.overlay}),r.a.createElement(o.a,{container:!0,spacing:2,classes:{"spacing-xs-2":a.grid},className:"py-24 z-999 sm:px-16 items-start"},r.a.createElement(o.a,{item:!0,xs:12,sm:2},I.avatar?r.a.createElement("div",{style:{width:150,height:150}},r.a.createElement("img",{className:Object(N.a)(a.img,"bg-white rounded-lg"),alt:I.societe,src:x.d+I.avatar.url})):r.a.createElement(m.a,{alt:I.societe,className:Object(N.a)(a.bigAvatar,"uppercase text-48 font-bold")},I.societe?I.societe[0]+I.societe[1]:"")),r.a.createElement(o.a,{item:!0,xs:12,sm:10},r.a.createElement("div",{className:Object(N.a)(a.title," ")},r.a.createElement(i.a,{variant:"h1",className:Object(N.a)(a.shadow,"uppercase  text-28 font-bold text-white tracking-wide ")},I.societe)))),r.a.createElement(u.a,{className:a.headerIcon},"school")),r.a.createElement(o.a,{container:!0,spacing:2,classes:{"spacing-xs-2":a.grid},className:Object(N.a)(a.position,"max-w-2xl  z-999 mx-auto sm:px-16 items-start ")},r.a.createElement(o.a,{item:!0,xs:12,sm:7,md:8},r.a.createElement(s.a,{className:a.root},r.a.createElement(d.a,{value:c,onChange:function(t,a){1===a&&e.history.push("/entreprise/".concat(C,"-").concat(F,"/produits")),0===a&&e.history.push("/entreprise/".concat(C,"-").concat(F)),v(a)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"off",classes:{root:"h-64 w-full border-b-1 z"}},r.a.createElement(p.a,{classes:{root:"h-64"},label:"INFOS ENTREPRISE"}),r.a.createElement(p.a,{classes:{root:"h-64"},label:"PRODUITS"})),0===c&&r.a.createElement(j,e),1===c&&r.a.createElement(B,null))),r.a.createElement(o.a,{item:!0,xs:12,sm:5,md:4,className:"sticky top-0"},r.a.createElement(g.a,{className:Object(N.a)("",a.root)},r.a.createElement("div",{className:"p-20 bg-gray-400 uppercase relative text-center font-bold text-16 "},"Contactez l'entreprise",r.a.createElement(u.a,{className:a.businessIcon},"business"),r.a.createElement(u.a,{className:a.businessDownIcon},"arrow_drop_down")),r.a.createElement(E.a,null,r.a.createElement(o.a,{container:!0,spacing:2,className:"items-center my-1"},r.a.createElement(o.a,{item:!0,xs:4,sm:4},r.a.createElement(m.a,{className:Object(N.a)(a.avatar,"avatar text-40 ")},r.a.createElement(u.a,{className:a.icon},"location_on"))),r.a.createElement(o.a,{item:!0,xs:8,sm:8},r.a.createElement(i.a,{variant:"h6",color:"textPrimary",className:"uppercase font-bold"},I.societe),r.a.createElement(i.a,{color:"textSecondary"},L.a.capitalize(I.adresse1)),r.a.createElement(i.a,{color:"textSecondary"},I.ville&&L.a.capitalize(I.ville.name),I.pays&&", "+L.a.capitalize(I.pays.name)),r.a.createElement(i.a,{color:"textSecondary"},I.ice&&"ICE: "+I.ice))),I.website&&r.a.createElement(P.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(l.a,{variant:"outlined",className:"whitespace-no-wrap lowercase items-center mb-8 mt-2 w-full",color:"primary",href:I.website,target:"_blank"},r.a.createElement(u.a,{className:"no-underline mr-2"},"language")," ",r.a.createElement("span",null," ",I.website))),I.id&&r.a.createElement(P.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(l.a,{size:"large",onClick:e=>t(R.W(I.id)),className:"whitespace-no-wrap upercase mb-8 mt-2 w-full items-center",color:"primary",variant:"contained"},r.a.createElement(u.a,{className:"mr-2"},"email"),"Envoyer un message")),A.loadingsPhone?r.a.createElement(i.a,{variant:"h6",color:"textPrimary",className:"uppercase font-bold w-full items-center flex justify-center"},r.a.createElement(f.a,{className:a.progress})):A.showPhone?r.a.createElement(P.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(i.a,{variant:"h6",color:"textPrimary",className:"uppercase font-bold w-full items-center flex justify-center"},r.a.createElement(u.a,null,"phone")," ",r.a.createElement("span",null,A.phone))):r.a.createElement(P.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(l.a,{size:"large",onClick:e=>t(R.Y(I.id)),className:"whitespace-no-wrap upercase w-full",variant:"outlined"},"Afficher le t\xe9l\xe9phone")),r.a.createElement(P.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(h.a,{id:"url",value:window.location.href,endAdornment:r.a.createElement(y.a,{position:"end"},r.a.createElement(H.CopyToClipboard,{text:window.location.href,onCopy:()=>t(Object(M.B)({message:"URL copi\xe9e avec succ\xe8s",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))},r.a.createElement(b.a,{title:"Copier l'URL dans le presse-papier",placement:"top"},r.a.createElement(S.a,{"aria-label":"copy",color:"primary"},r.a.createElement(u.a,null,"file_copy"))))),inputProps:{"aria-label":"url"},className:"text-11 mt-16",label:"Copier l'url de votre soci\xe9t\xe9",fullWidth:!0})),r.a.createElement("div",{className:"flex justify-end items-center mt-16"},r.a.createElement("div",{className:"mr-8 font-bold"},"Partager sur :"),r.a.createElement("div",null,r.a.createElement(Q.InlineShareButtons,{config:{alignment:"center",color:"social",enabled:!0,font_size:16,labels:"null",language:"fr",networks:["linkedin","twitter","email","facebook","messenger","whatsapp"],padding:8,radius:4,show_total:!1,size:30,url:window.location.href,image:I.avatar&&x.d+I.avatar.url,description:I.description,title:"".concat(I.societe," | Les Achats Industriels")}}))))))))):null:r.a.createElement("div",{className:"w-full max-w-2xl mx-auto   min-h-md"},r.a.createElement(O.Helmet,null,r.a.createElement("title",null,"Fournisseur inexistant"),r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("meta",{name:"googlebot",content:"noindex"})),r.a.createElement(s.a,{className:"p-32 w-full my-6 text-center"},r.a.createElement("img",{className:a.img,alt:"product not found",src:"assets/images/product_not_found.jpg"}),r.a.createElement(i.a,{variant:"h6",className:"mb-16 uppercase"},"Oups! Nous n'avons pas pu trouver cette entreprise"),r.a.createElement(l.a,{variant:"outlined",size:"small",color:"secondary",onClick:()=>e.history.goBack(),className:Object(N.a)(a.btn,"mr-8")},r.a.createElement(u.a,null,"chevron_left")," ",r.a.createElement("span",{className:"transition ease-in-out duration-700 "},"Retour"))))}),J=a(1256),K=a(1247),Z=a.n(K),$=a(1246),ee=a.n($);const te=Object(c.a)(e=>({layoutRoot:{},breadcrumbs:{fontSize:11},link:{display:"flex","align-items":"center"},icon:{marginRight:e.spacing(.5),width:20,height:20},btn:{fontSize:11,padding:"0px 8px"}}));var ae=function(e){const t=te();return Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.data}),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(l.a,{variant:"outlined",size:"small",color:"secondary",onClick:()=>e.history.goBack(),className:Object(N.a)(t.btn,"mr-8")},r.a.createElement(u.a,null,"chevron_left")," ",r.a.createElement("span",{className:"transition ease-in-out duration-700 "},"Retour")),r.a.createElement(P.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(J.a,{"aria-label":"breadcrumb",separator:r.a.createElement(ee.a,{fontSize:"small"}),className:t.breadcrumbs},r.a.createElement(C.a,{color:"textPrimary",to:"/",className:Object(N.a)(t.link,"underline")},r.a.createElement(Z.a,{className:t.icon}),"Accueil"))))},ne=a(1354),re=a(136),ce=a(1335);const oe=Object(c.a)(e=>({root:{display:"flex",flexDirection:"column",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},middle:{background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+e.palette.primary.main+" 100%)",position:"relative",marginBottom:e.spacing(4)},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},grid:{[e.breakpoints.down("xs")]:{width:"100%"}}}));t.default=Object(re.a)("fournisseursApp",ne.a)(function(e){const t=oe(),a=Object(T.b)(),c=Object(T.c)(e=>{let{fournisseursApp:t}=e;return t.fournisseur.parametres}),s=e.match.params,{id:i,tab:l}=s;return Object(n.useEffect)(()=>(a(R.O(i)),()=>{a(R.I())}),[a,i]),Object(n.useEffect)(()=>{if(!l)return a(R.Q(i)),()=>{a(R.J())}},[a,l,i]),Object(n.useEffect)(()=>{if(l)return a(R.P(i,c)),()=>{a(R.K())}},[a,l,i,c]),r.a.createElement("div",{className:Object(N.a)(t.root,e.innerScroll&&t.innerScroll,"min-h-md")},r.a.createElement("div",{className:Object(N.a)(t.middle,"mb-0 relative overflow-hidden flex flex-col flex-shrink-0 ")},r.a.createElement(o.a,{container:!0,spacing:2,classes:{"spacing-xs-2":t.grid},className:" max-w-2xl mx-auto py-8  sm:px-16 items-center z-9999"},r.a.createElement(o.a,{item:!0,sm:12,xs:12},r.a.createElement(ae,e)))),r.a.createElement(Y,e),r.a.createElement(ce.a,null))})}}]);