(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1281:function(e,t,r){"use strict";var a=r(33),n=r(50);const i="[PRODUITS FOURNISSEURS APP] REQUEST PRODUITS",c="[PRODUITS FOURNISSEURS APP] REQUEST FREE PRODUITS",o="[PRODUITS FOURNISSEURS APP] REMOVE PRODUITS",s="[PRODUITS FOURNISSEURS APP] SET PARAMETRES DATA",u="[PRODUITS FOURNISSEURS APP] CLEAN_UP",l="[PRODUITS FOURNISSEURS APP] CLEAN_UP_FREE",d="[PRODUITS FOURNISSEURS APP] GET PRODUITS",p="[PRODUITS FOURNISSEURS APP] GET FREE PRODUITS",g="[PRODUITS FOURNISSEURS APP] SET PRODUITS SEARCH TEXT";function m(){return e=>e({type:l})}function f(e,t){var r="";t.search.length>0&&t.search.map(e=>e.value&&("created"===e.id?r+="&"+e.id+"[after]="+e.value:r+="&"+e.id+"="+e.value));const a=n.a.get("/api/fournisseurs/".concat(e,"/produits?page=").concat(t.page).concat(r,"&order[").concat(t.filter.id,"]=").concat(t.filter.direction));return e=>(e({type:i}),a.then(t=>e({type:d,payload:t.data})))}function E(e){const t=n.a.get("/api/free-products");return e=>(e({type:c}),t.then(t=>e({type:p,payload:t.data})))}function h(e,t,r){let c={del:!0};return s=>{return s({type:i}),n.a.put("/api/produits/".concat(e.id),c).then(e=>Promise.all([s({type:o}),s(Object(a.B)({message:"Produit bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>s(f(r.id,t))).then(()=>s(E())))}}function R(e){return{type:s,parametres:e}}var S=r(39),P=r(60),O=r.n(P),U=r(10);const I="[PRODUIT FOURNISSEUR APP] REQUEST PRODUIT",y="[PRODUIT FOURNISSEUR APP] GET PRODUIT",b="[PRODUIT FOURNISSEUR APP] REQUEST SAVE",T="[PRODUIT FOURNISSEUR APP] SAVE PRODUIT",A="[PRODUIT FOURNISSEUR APP] SAVE ERROR",N="[PRODUIT FOURNISSEUR APP] REQUEST SOUS_SECTEUR",D="[PRODUIT FOURNISSEUR APP] GET SOUS SECTEUR",v="[PRODUIT FOURNISSEUR APP] REQUEST SECTEUR",F="[PRODUIT FOURNISSEUR APP] GET SECTEUR",C="[PRODUIT FOURNISSEUR APP] REQUEST CATEGORIE",j="[PRODUIT FOURNISSEUR APP] GET CATEGORIE",x="[PRODUIT FOURNISSEUR APP] UPLOAD ATTACHEMENT",w="[PRODUIT FOURNISSEUR APP] UPLOAD REQUEST",_="[PRODUIT FOURNISSEUR APP] UPLOAD ERROR",L="[PRODUIT FOURNISSEUR APP] UPLOAD_FICHE_ATTACHEMENT",k="[PRODUIT FOURNISSEUR APP] UPLOAD_FICHE_REQUEST",H="[PRODUIT FOURNISSEUR APP] UPLOAD_FICHE_ERROR",q="[PRODUIT FOURNISSEUR APP] REQUEST DELETE",G="[PRODUIT FOURNISSEUR APP] DELETE SUCCESS",z="[PRODUIT FOURNISSEUR APP] ERROR DELETE",V="[PRODUIT FOURNISSEUR APP] CLEAN_UP_PRODUCT",Q="[PRODUIT FOURNISSEUR APP] CLEAN_ERROR",B="[PRODUIT FOURNISSEUR APP] CLEAN_IMAGE",M="[PRODUIT FOURNISSEUR APP] CLEAN_DELETE_IMAGE",W="[PRODUIT FOURNISSEUR APP] GET_FOURNISSEUR",K="[PRODUIT FOURNISSEUR APP] REQUEST_VIDEO",Y="[PRODUIT FOURNISSEUR APP] GET_VIDEO",J="[PRODUIT FOURNISSEUR APP] REQUEST_CHECK",X="[PRODUIT FOURNISSEUR APP] GET_CHECK";function Z(e){const t=O.a.get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=".concat(e,"&key=AIzaSyBvpeIK_1hzKDwawG1uRVmbHdE6n7tcRr4"));return e=>(e({type:K}),t.then(t=>e({type:Y,payload:t.data&&t.data.items.length>0?1:2})))}function $(){const e=n.a.get("/api/secteurs?pagination=false&props[]=id&props[]=name");return t=>(t({type:v}),e.then(e=>{t({type:F,payload:e.data})}))}function ee(e){const t=n.a.get("".concat(e,"/sous_secteurs?pagination=false&props[]=id&props[]=name"));return e=>(e({type:N}),t.then(t=>{e({type:D,payload:t.data})}))}function te(e){const t=n.a.get("".concat(e,"/categories?pagination=false&props[]=id&props[]=name"));return e=>(e({type:C}),t.then(t=>{e({type:j,payload:t.data})}))}function re(e){const t=n.a.get("api/check_activite_used?activite=".concat(e));return e=>(e({type:J}),t.then(t=>{e({type:X,payload:t.data})}))}function ae(e){const t=n.a.get("/api/produits/".concat(e));return e=>(e({type:I}),t.then(t=>{e({type:y,payload:t.data})}).catch(t=>{e({type:A,payload:S.y.parseApiErrors(t)})}))}function ne(e,t,r,i,c){const o={...e,pu:e.pu?parseFloat(e.pu):0,secteur:t&&t.value,sousSecteurs:r&&r.value,categorie:i&&i.value,images:e.images&&U.a.map(e.images,function(e,t){return e["@id"]}),ficheTechnique:e.ficheTechnique&&e.ficheTechnique["@id"],featuredImageId:e.featuredImageId&&e.featuredImageId["@id"],free:!c&&!0},s=n.a.post("/api/produits",o);return e=>(e({type:b}),s.then(t=>(e(Object(a.B)({message:"Produit / Service bien enregistr\xe9"})),e({type:T,payload:t.data}))).catch(t=>{e({type:A,payload:S.y.parseApiErrors(t)})}))}function ie(e,t,r,i,c){const o={...e,pu:e.pu?parseFloat(e.pu):0,secteur:r&&r.value,sousSecteurs:i&&i.value,categorie:c&&c.value,images:e.images&&U.a.map(e.images,function(e,t){return e["@id"]}),ficheTechnique:e.ficheTechnique&&e.ficheTechnique["@id"],featuredImageId:e.featuredImageId&&e.featuredImageId["@id"]},s=n.a.put("/api/produits/".concat(t),o);return e=>(e({type:b}),s.then(t=>(e(Object(a.B)({message:"Produit / Service bien modifi\xe9"})),e({type:T,payload:t.data}))).catch(t=>{e({type:A,payload:S.y.parseApiErrors(t)})}))}function ce(e){const t=n.a.delete(e["@id"]);return r=>(r({type:q}),t.then(t=>(r(Object(a.B)({message:"Document supprim\xe9"})),r({type:G,id:e}))).catch(e=>{r({type:z,payload:S.y.parseApiErrors(e)})}))}function oe(e){return(t,r)=>{const i=new FormData;i.append("file",e);const c=n.a.post("/api/image_produits",i,{headers:{"Content-Type":"multipart/form-data"}});return t({type:w}),c.then(e=>Promise.all([e,t({type:x,payload:e.data}),t(Object(a.B)({message:"Document t\xe9l\xe9charg\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).catch(e=>{t({type:_}),t(Object(a.B)({message:U.a.map(S.y.parseApiErrors(e),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}function se(e){return(t,r)=>{const i=new FormData;i.append("file",e);const c=n.a.post("/api/fiches",i,{headers:{"Content-Type":"multipart/form-data"}});return t({type:k}),c.then(e=>Promise.all([e,t({type:L,payload:e.data}),t(Object(a.B)({message:"Document t\xe9l\xe9charg\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))])).catch(e=>{t({type:H}),t(Object(a.B)({message:U.a.map(S.y.parseApiErrors(e),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}function ue(){return{type:y,payload:{reference:"",description:"",secteur:null,sousSecteurs:null,categorie:null,pu:0,created:null,images:[],ficheTechnique:null}}}function le(){return e=>e({type:Q})}function de(){return e=>e({type:V})}function pe(){return e=>e({type:B})}function ge(){return e=>e({type:M})}const me="[DIALOG] OPEN",fe="[DIALOG] CLOSE";function Ee(){return{type:fe}}function he(e){return{type:me,options:e}}r.d(t,"v",function(){return i}),r.d(t,"t",function(){return c}),r.d(t,"C",function(){return s}),r.d(t,"d",function(){return u}),r.d(t,"e",function(){return l}),r.d(t,"m",function(){return d}),r.d(t,"k",function(){return p}),r.d(t,"D",function(){return g}),r.d(t,"O",function(){return m}),r.d(t,"V",function(){return f}),r.d(t,"T",function(){return E}),r.d(t,"cb",function(){return h}),r.d(t,"eb",function(){return R}),r.d(t,"u",function(){return I}),r.d(t,"l",function(){return y}),r.d(t,"w",function(){return b}),r.d(t,"B",function(){return T}),r.d(t,"A",function(){return A}),r.d(t,"y",function(){return N}),r.d(t,"o",function(){return D}),r.d(t,"x",function(){return v}),r.d(t,"n",function(){return F}),r.d(t,"q",function(){return C}),r.d(t,"h",function(){return j}),r.d(t,"E",function(){return x}),r.d(t,"J",function(){return w}),r.d(t,"F",function(){return _}),r.d(t,"G",function(){return L}),r.d(t,"I",function(){return k}),r.d(t,"H",function(){return H}),r.d(t,"s",function(){return q}),r.d(t,"g",function(){return G}),r.d(t,"f",function(){return V}),r.d(t,"b",function(){return Q}),r.d(t,"c",function(){return B}),r.d(t,"a",function(){return M}),r.d(t,"j",function(){return W}),r.d(t,"z",function(){return K}),r.d(t,"p",function(){return Y}),r.d(t,"r",function(){return J}),r.d(t,"i",function(){return X}),r.d(t,"Y",function(){return Z}),r.d(t,"W",function(){return $}),r.d(t,"X",function(){return ee}),r.d(t,"S",function(){return te}),r.d(t,"K",function(){return re}),r.d(t,"U",function(){return ae}),r.d(t,"db",function(){return ne}),r.d(t,"bb",function(){return ie}),r.d(t,"R",function(){return ce}),r.d(t,"gb",function(){return oe}),r.d(t,"fb",function(){return se}),r.d(t,"Z",function(){return ue}),r.d(t,"M",function(){return le}),r.d(t,"P",function(){return de}),r.d(t,"N",function(){return pe}),r.d(t,"L",function(){return ge}),r.d(t,"Q",function(){return Ee}),r.d(t,"ab",function(){return he})},1345:function(e,t,r){"use strict";var a=r(43),n=r(1281),i=r(102);r(10);const c={data:[],freeProduits:[],nbImages:0,pageCount:null,loading:!1,loadingFree:!1,searchText:"",abonnement:null,parametres:{page:1,search:[],description:"",filter:{id:"created",direction:"desc"}}};var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.d:return{...e,data:[],parametres:{page:1,search:[],description:"",filter:{id:"created",direction:"desc"}}};case n.e:return{...e,freeProduits:[],nbImages:0};case n.v:return{...e,loading:!0};case n.j:return{...e,abonnement:t.payload};case n.m:return{...e,data:t.payload["hydra:member"],pageCount:i.a.hydraPageCount(t.payload),loading:!1};case n.t:return{...e,loadingFree:!0,nbImages:0};case n.k:return{...e,freeProduits:t.payload,nbImages:parseInt(t.payload),loadingFree:!1};case n.D:return{...e,searchText:t.searchText};case n.C:return{...e,parametres:{page:t.parametres.page,description:t.parametres.description,search:t.parametres.search,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}};default:return e}};const s={data:null,error:null,loading:!1,success:!1,imageReqInProgress:!1,deleteReqInProgress:!1,image:null,image_deleted:null,secteurs:[],sousSecteurs:[],categories:[],fiche:null,ficheReqInProgress:!1,loadingSecteurs:!1,loadingSousSecteurs:!1,loadingCategories:!1,loadingRechercheVideo:!1,videoExist:0,checking:!1,exist:!1};var u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.r:return{...e,checking:!0};case n.i:return{...e,checking:!1,exist:!!t.payload&&t.payload.exist};case n.u:case n.w:return{...e,loading:!0};case n.z:return{...e,loadingRechercheVideo:!0};case n.p:return{...e,videoExist:t.payload,loadingRechercheVideo:!1};case n.x:return{...e,loadingSecteurs:!0,sousSecteurs:[],categories:[]};case n.y:return{...e,loadingSousSecteurs:!0,categories:[]};case n.q:return{...e,loadingCategories:!0};case n.J:return{...e,imageReqInProgress:!0};case n.s:return{...e,deleteReqInProgress:!0};case n.E:return{...e,image:t.payload,imageReqInProgress:!1};case n.g:return{...e,deleteReqInProgress:!1,image_deleted:t.id};case n.F:return{...e,imageReqInProgress:!1};case n.I:return{...e,ficheReqInProgress:!0};case n.G:return{...e,fiche:t.payload,ficheReqInProgress:!1};case n.H:return{...e,ficheReqInProgress:!1};case n.l:return{...e,data:t.payload,loading:!1};case n.j:return{...e,sousSecteurs:t.payload.sousSecteurs,loadingSousSecteurs:!1};case n.n:return{...e,secteurs:t.payload["hydra:member"],loadingSecteurs:!1};case n.o:return{...e,sousSecteurs:[...t.payload["hydra:member"],{"@id":"/api/sous_secteurs/98",name:"Autre"}],loadingSousSecteurs:!1};case n.h:return{...e,categories:[...t.payload["hydra:member"],{"@id":"/api/categories/382",name:"Autre"}],loadingCategories:!1};case n.B:return{...e,loading:!1,success:!0};case n.f:return{...s};case n.b:return{...e,error:null};case n.c:return{...e,image:null,fiche:null};case n.a:return{...e,image_deleted:null};case n.A:return{...e,error:t.payload,loading:!1,success:!1};default:return e}},l=r(33);const d={state:!1,options:{children:"Hi"}};var p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.f:return{...e,state:!0,options:{...e.options,...t.options}};case l.a:return{...e,state:!1};default:return e}};const g=Object(a.d)({produits:o,produit:u,dialog:p});t.a=g},1578:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(39),c=r(136),o=r(1160),s=r(1151),u=r(1221),l=r(1140),d=r(1244),p=r(1229),g=r(1245),m=r(1230),f=r(1227),E=r(1204),h=r(71),R=r(1281),S=r(7),P=r(59),O=r.n(P),U=r(365),I=r(1226),y=r(10),b=r(2);const T=Object(I.a)(e=>({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},chip:{marginLeft:e.spacing(1),padding:2,background:"#ef5350",color:"white",fontWeight:"bold",fontSize:"11px",height:20},chip2:{marginLeft:e.spacing(1),padding:2,background:"#4caf50",color:"white",fontWeight:"bold",fontSize:"11px",height:20},chip3:{padding:2,background:"#4caf50",color:"white",fontWeight:"bold",fontSize:"11px",height:20},chipOrange:{marginLeft:e.spacing(1),padding:2,background:"#ff9800",color:"white",fontWeight:"bold",fontSize:"11px",height:20}}));var A=Object(h.g)(function(e){const t=T(),r=Object(S.b)(),c=Object(S.c)(e=>{let{produitsFournisseursApp:t}=e;return t.produits.data}),h=Object(S.c)(e=>{let{produitsFournisseursApp:t}=e;return t.produits.loading}),P=Object(S.c)(e=>{let{produitsFournisseursApp:t}=e;return t.produits.pageCount}),I=Object(S.c)(e=>{let{produitsFournisseursApp:t}=e;return t.produits.parametres}),A=Object(S.c)(e=>{let{auth:t}=e;return t.user}),N=Object(S.c)(e=>{let{produitsFournisseursApp:t}=e;return t.produits.searchText}),[D,v]=Object(a.useState)(null);if(Object(a.useEffect)(()=>{c&&v(function(e,t){const r=Object.keys(e).map(t=>e[t]);return 0===t.length?r:i.y.filterArrayByString(r,t)}(c,N))},[c,N]),!D)return null;const F=y.a.debounce(e=>r(R.eb(e)),1e3);return n.a.createElement(i.d,{animation:"transition.slideUpIn",delay:300},n.a.createElement(U.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden border-2",getTrProps:(t,r,a)=>({className:"h-64 cursor-pointer",onClick:(t,a)=>{r&&e.history.push("/produits/"+r.original.id)}}),getTheadProps:(e,t,r)=>({className:"h-64 font-bold"}),data:D,columns:[{Header:"",accessor:"featuredImageId",Cell:e=>n.a.createElement("div",{className:"flex items-center relative "},e.original.featuredImageId?n.a.createElement("img",{className:Object(b.a)("w-full block rounded"),src:i.G+e.original.featuredImageId.url,alt:e.original.reference}):n.a.createElement("img",{className:Object(b.a)("w-full block rounded"),src:"assets/images/ecommerce/product-image-placeholder.png",alt:e.original.reference}),e.original.free?n.a.createElement(o.a,{className:Object(b.a)("absolute bottom-2 left-1",t.chip3),label:"Free"}):""),className:"justify-center ",width:64,sortable:!1,filterable:!1},{Header:"Statut",accessor:"isValid",className:"justify-center ",sortable:!1,filterable:!0,Cell:e=>n.a.createElement("div",{className:"flex items-center"},e.original.isValid?n.a.createElement(o.a,{className:t.chip2,label:"Publi\xe9"}):n.a.createElement(o.a,{className:t.chipOrange,label:"En attente"}),e.original.isSelect?n.a.createElement(o.a,{className:t.chip2,label:"Focus produit"}):""),Filter:e=>{let{filter:t,onChange:r}=e;return n.a.createElement("select",{onChange:e=>r(e.target.value),style:{width:"100%"},value:t?t.value:""},n.a.createElement("option",{value:""},"Tous"),n.a.createElement("option",{value:"true"},"Publi\xe9"),n.a.createElement("option",{value:"false"},"En attente"))}},{Header:"Images",className:"justify-center ",accessor:"images",sortable:!1,filterable:!1,Cell:e=>n.a.createElement("div",{className:"flex items-center"},e.original.images.length)},{Header:"Ref",className:"justify-center ",accessor:"reference",filterable:!0},{Header:"Titre",accessor:"titre",filterable:!0},{Header:"Produit",className:"justify-center ",filterable:!0,accessor:"categorie.name",Cell:e=>e.original.categorie?e.original.categorie.name:"N/A"},{Header:"Date de cr\xe9ation",className:"justify-center ",filterable:!0,accessor:"created",Cell:e=>O()(e.original.created).format("DD/MM/YYYY"),Filter:e=>{let{filter:t,onChange:r}=e;return n.a.createElement(s.a,{onChange:e=>r(e.target.value),style:{width:"100%"},value:t?t.value:"",type:"date",InputLabelProps:{shrink:!0}})}},{Header:"",Cell:e=>n.a.createElement("div",{className:"flex items-center"},n.a.createElement(u.a,{title:"Supprimer"},n.a.createElement(l.a,{className:"text-red text-20",onClick:t=>{t.stopPropagation(),r(R.ab({children:n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{id:"alert-dialog-title"},"Suppression"),n.a.createElement(p.a,null,n.a.createElement(g.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),n.a.createElement(m.a,null,n.a.createElement(f.a,{onClick:()=>r(R.Q()),color:"primary"},"Non"),n.a.createElement(f.a,{onClick:t=>{r(R.cb(e.original,I,A)),r(R.Q())},color:"primary",autoFocus:!0},"Oui")))}))}},n.a.createElement(E.a,null,"delete"))),n.a.createElement(u.a,{title:"Modifier"},n.a.createElement(l.a,{className:"text-orange text-20"},n.a.createElement(E.a,null,"edit"))))}],manual:!0,defaultSortDesc:!0,pages:P,page:I.page-1,defaultPageSize:10,loading:h,showPageSizeOptions:!1,onPageChange:e=>{I.page=e+1,r(R.eb(I))},onSortedChange:(e,t,a)=>{I.page=1,I.filter.id=e[0].id,I.filter.direction=e[0].desc?"desc":"asc",r(R.eb(I))},onFilteredChange:e=>{I.page=1,I.search=e,F(I)},noDataText:"Aucun produit trouv\xe9",loadingText:"Chargement...",ofText:"sur"}))}),N=r(89),D=r(1385),v=r(16),F=r(1293),C=r(1157),j=r(1224);const x=Object(F.a)(e=>({root:{height:10,borderRadius:5},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:5,backgroundColor:"#1a90ff"}}))(j.a),w=Object(C.a)(e=>({chip1:{padding:2,background:"#e3342f",marginTop:10,color:"white",fontWeight:"bold",fontSize:"11px",height:20},chip2:{padding:2,background:"#4caf50",marginTop:10,color:"white",fontWeight:"bold",fontSize:"11px",height:20}}));var _=function(e){const t=Object(S.c)(e=>{let{auth:t}=e;return t.user.abonnement}),[r,c]=Object(a.useState)(!1),o=Object(S.c)(e=>{let{produitsFournisseursApp:t}=e;return t.produits.nbImages}),s=(w(e),Object(S.c)(e=>{let{produitsFournisseursApp:t}=e;return t.produits.loading}),Object(S.c)(e=>{let{produitsFournisseursApp:t}=e;return t.produits.loadingFree}));return Object(a.useEffect)(()=>{if(t){let e=O()(t.expired).diff(O()(),"days");t.statut&&e>0&&c(!0)}},[t]),n.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},n.a.createElement("div",{className:"flex flex-col min-w-0"},n.a.createElement("div",{className:"flex items-center"},n.a.createElement(i.d,{animation:"transition.expandIn",delay:300},n.a.createElement(E.a,{className:"text-32 mr-0 sm:mr-12"},"shopping_cart")),n.a.createElement(i.d,{animation:"transition.slideLeftIn",delay:300},n.a.createElement(N.a,{className:"hidden sm:flex",variant:"h6"},"Vos Produits / Services"))),!r&&(s?"Chargement...":n.a.createElement(D.a,{display:"flex",alignItems:"center"},n.a.createElement(D.a,{minWidth:35},n.a.createElement(E.a,null,"image")),n.a.createElement(D.a,{width:"100%",mr:1},n.a.createElement(x,{variant:"determinate",value:o/5*100})),n.a.createElement(D.a,{minWidth:35},n.a.createElement(N.a,{variant:"body2",color:"textSecondary"},"".concat(o,"/5")))))),n.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"}),n.a.createElement(i.d,{animation:"transition.slideRightIn",delay:300},n.a.createElement(f.a,{component:v.a,to:"/produits/new",className:"whitespace-no-wrap",variant:"contained"},n.a.createElement("span",{className:"hidden sm:flex"},"Ajouter nouveau produit / service"),n.a.createElement("span",{className:"flex sm:hidden"},"New"))))},L=r(1345),k=r(364);t.default=Object(c.a)("produitsFournisseursApp",L.a)(function(){const e=Object(S.b)(),t=Object(S.c)(e=>{let{auth:t}=e;return t.user}),r=Object(S.c)(e=>{let{produitsFournisseursApp:t}=e;return t.produits.parametres});return Object(a.useEffect)(()=>{t.id&&e(R.V(t.id,r))},[e,r,t]),Object(a.useEffect)(()=>{if(t.id)return e(R.T(t)),()=>{e(R.O())}},[e,t]),n.a.createElement(n.a.Fragment,null,n.a.createElement(k.Helmet,null,n.a.createElement("title",null,"Mes produits / services | Les Achats Industriels"),n.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),n.a.createElement("meta",{name:"googlebot",content:"noindex"})),n.a.createElement(i.o,{classes:{content:"flex flex-col h-full",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:n.a.createElement(_,null),content:n.a.createElement(A,null),innerScroll:!0}))})}}]);