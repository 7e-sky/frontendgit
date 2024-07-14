(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1545:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(39),s=a(7),l=a(136),o=a(1160),c=a(1151),p=a(1140),d=a(1204),u=a(365),m=a(50),g=a(102),f=a(33),h=a(10);const b="[JETONS APP] GET JETONS",E="[JETONS APP] SET SEARCH TEXT",y="[JETONS APP] OPEN NEW JETONS DIALOG",j="[JETONS APP] CLOSE NEW JETONS DIALOG",O="[JETONS APP] OPEN EDIT JETONS DIALOG",v="[JETONS APP] CLOSE EDIT JETONS DIALOG",N="[JETONS APP] ADD JETON",P="[JETONS APP] SAVE ERROR",x="[JETONS APP] REQUEST_JETONS",S="[JETONS APP] SET PARAMETRES DATA",C="[JETONS APP] CLEAN_UP",A="[JETONS APP] GET_PAIEMENT";function T(e){return{type:S,parametres:e}}function w(e){var t="";e.search.length>0&&e.search.map(e=>e.value&&("created"===e.id?t+="&"+e.id+"[after]="+e.value:t+="&"+e.id+"="+e.value));const a=m.a.get("/api/jetons?page=".concat(e.page).concat(t,"&order[").concat(e.filter.id,"]=").concat(e.filter.direction));return e=>(e({type:x}),a.then(t=>{e({type:b,payload:t.data})}))}var J=a(1226),D=a(59),I=a.n(D);const L=Object(J.a)(e=>({chip2:{marginLeft:e.spacing(1),padding:2,background:"#4caf50",color:"white",fontWeight:"bold",fontSize:"11px",height:20},chipOrange:{marginLeft:e.spacing(1),padding:2,background:"#ff9800",color:"white",fontWeight:"bold",fontSize:"11px",height:20}}));var k=function(e){const t=Object(s.b)(),a=Object(s.c)(e=>{let{jetonsApp:t}=e;return t.jetons.entities}),l=Object(s.c)(e=>{let{jetonsApp:t}=e;return t.jetons.searchText}),m=L(),g=Object(s.c)(e=>{let{jetonsApp:t}=e;return t.jetons.parametres}),f=Object(s.c)(e=>{let{jetonsApp:t}=e;return t.jetons.loading}),b=Object(s.c)(e=>{let{jetonsApp:t}=e;return t.jetons.pageCount}),[E,y]=Object(n.useState)(null);if(Object(n.useEffect)(()=>{a&&y(function(e,t){const a=Object.keys(e).map(t=>e[t]);return 0===t.length?a:i.y.filterArrayByString(a,t)}(a,l))},[a,l]),!E)return null;const j=h.a.debounce(e=>t(T(e)),1e3);return r.a.createElement(i.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(u.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTheadProps:(e,t,a)=>({className:"h-64 font-bold"}),data:E,columns:[{Header:"N\xb0 commande",className:"font-bold",filterable:!0,accessor:"demande.id",Cell:e=>e.original.demande?e.original.demande.id:"Sans commande"},{Header:"Nombre de jetons",filterable:!0,accessor:"nbrJeton"},{Header:"Mode de paiement",accessor:"paiement.name",filterable:!0,Cell:e=>e.original.paiement?e.original.paiement.name:""},{Header:"Prix",accessor:"prix",filterable:!0,Cell:e=>parseFloat(e.original.prix).toLocaleString("fr",{minimumFractionDigits:2})+" Dhs "},{Header:"Fournisseur",filterable:!0,className:"font-bold",accessor:"fournisseur.societe",Cell:e=>e.original.fournisseur?e.original.fournisseur.societe:""},{Header:"Etat",accessor:"isPayed",filterable:!0,Cell:e=>e.original.isPayed?r.a.createElement(o.a,{className:m.chip2,label:"Pay\xe9"}):r.a.createElement(o.a,{className:m.chipOrange,label:"En attente"}),Filter:e=>{let{filter:t,onChange:a}=e;return r.a.createElement("select",{onChange:e=>a(e.target.value),style:{width:"100%"},value:t?t.value:""},r.a.createElement("option",{value:""},"Tous"),r.a.createElement("option",{value:"true"},"Pay\xe9"),r.a.createElement("option",{value:"false"},"En attente"))}},{Header:"Date de cr\xe9ation",accessor:"created",filterable:!0,Cell:e=>I()(e.original.created).format("DD/MM/YYYY HH:mm"),Filter:e=>{let{filter:t,onChange:a}=e;return r.a.createElement(c.a,{onChange:e=>a(e.target.value),style:{width:"100%"},value:t?t.value:"",type:"date",InputLabelProps:{shrink:!0}})}},{Header:"",sortable:!1,width:64,Cell:e=>r.a.createElement("div",{className:"flex items-center"},r.a.createElement(p.a,{className:"text-orange text-20",onClick:a=>{a.stopPropagation(),t(function(e){return{type:O,data:e}}(e.original))}},r.a.createElement(d.a,null,"edit")))}],manual:!0,pages:b,defaultPageSize:10,loading:f,showPageSizeOptions:!1,onPageChange:e=>{g.page=e+1,t(T(g))},onSortedChange:(e,a,n)=>{g.page=1,g.filter.id=e[0].id,g.filter.direction=e[0].desc?"desc":"asc",t(T(g))},onFilteredChange:e=>{g.page=1,g.search=e,j(g)},noDataText:"Aucun jeton trouv\xe9",loadingText:"Chargement...",ofText:"sur"}))},F=a(89),H=a(1227);var R=function(e){const t=Object(s.b)();return r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(i.d,{animation:"transition.expandIn",delay:300},r.a.createElement(d.a,{className:"text-32 mr-0 sm:mr-12"},"monetization_on")),r.a.createElement(i.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(F.a,{className:"hidden sm:flex",variant:"h6"},"Liste des jetons"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"}),r.a.createElement(i.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(H.a,{onClick:e=>t({type:y}),className:"whitespace-no-wrap",variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex"},"Ajouter des jetons"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},z=a(1223),W=a(1218),q=a(1228),M=a(1229),G=a(1215),B=a(1238),V=a(1230),U=a(137),Y=a(51),_=a.n(Y),Q=a(139),X=a.n(Q),K=a(355),Z=a.n(K),$=a(485),ee=a.n($),te=a(135),ae=a(1147);const ne={name:""},re=Object(J.a)(e=>({root:{height:250,flexGrow:1},container:{position:"relative",width:"100%"},suggestionsContainerOpen:{position:"absolute",zIndex:9999,marginTop:e.spacing(1),left:0,right:0},suggestion:{display:"block"},suggestionsList:{margin:0,padding:0,listStyleType:"none"},divider:{height:e.spacing(2)}}));function ie(e,t){let{query:a,isHighlighted:n}=t;const i=Z()(e.societe,a),s=ee()(e.societe,i);return r.a.createElement(ae.a,{selected:n,component:"div"},r.a.createElement("div",null,s.map(e=>r.a.createElement("span",{key:e.text,style:{fontWeight:e.highlight?500:400}},e.text))))}function se(e){const{classes:t,inputRef:a=(()=>{}),ref:n,...i}=e;return r.a.createElement(c.a,Object.assign({fullWidth:!0,InputProps:{inputRef:e=>{n(e),a(e)},classes:{input:t.input}},required:!0},i))}var le=function(e){const t=re(),a=Object(s.b)(),l=Object(s.c)(e=>{let{jetonsApp:t}=e;return t.jetons.jetonsDialog}),o=Object(s.c)(e=>{let{jetonsApp:t}=e;return t.jetons.paiements}),c=Object(s.c)(e=>{let{jetonsApp:t}=e;return t.jetons.parametres}),[p,d]=Object(n.useState)({societe:""}),[u,b]=Object(n.useState)([]),{form:E,handleChange:y,setForm:O}=Object(U.b)(ne),[x,S]=Object(n.useState)(!1),C=Object(n.useRef)(null),A={renderInputComponent:se,renderSuggestion:ie},T=Object(n.useCallback)(()=>{"edit"===l.type&&l.data&&(O({...l.data}),d(l.data.fournisseur),O(h.a.set({...l.data},"fournisseur",l.data.fournisseur["@id"])),O(h.a.set({...l.data},"paiement",{value:l.data.paiement["@id"],label:l.data.paiement.name}))),"new"===l.type&&O({...ne,...l.data})},[l.data,l.type,O]);function J(){"edit"===l.type?a({type:v}):a({type:j})}return Object(n.useEffect)(()=>{l.props.open&&T()},[l.props.open,T]),r.a.createElement(z.a,Object.assign({classes:{paper:"m-24"}},l.props,{onClose:J,fullWidth:!0,maxWidth:"xs"}),r.a.createElement(W.a,{position:"static",elevation:1},r.a.createElement(q.a,{className:"flex w-full"},r.a.createElement(F.a,{variant:"subtitle1",color:"inherit"},"new"===l.type?"Nouveau Jeton":"Editer Jeton"))),r.a.createElement(_.a,{onValidSubmit:function(){"edit"===l.type?(a(function(e,t){let a={paiement:e.paiement.value,prix:parseFloat(e.prix),isPayed:e.isPayed};return(n,r)=>m.a.put(e["@id"],a).then(e=>Promise.all([n({type:N}),n(Object(f.B)({message:"Jetons bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>n(w(t)))).catch(e=>{n({type:P}),n(Object(f.B)({message:h.a.map(g.a.parseApiErrors(e),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}(E,c)),d({societe:""})):(a(function(e,t){let a={fournisseur:e.fournisseur,paiement:e.paiement.value,nbrJeton:e.nbrJeton,prix:parseFloat(e.prix),isPayed:e.isPayed};return(e,n)=>m.a.post("/api/jetons",a).then(a=>Promise.all([e({type:N}),e(Object(f.B)({message:"Jetons bien effuctu\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(()=>e(w(t)))).catch(t=>{e({type:P}),e(Object(f.B)({message:h.a.map(g.a.parseApiErrors(t),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}(E,c)),d({societe:""})),J()},onValid:function(){S(!0)},onInvalid:function(){S(!1)},ref:C,className:"flex flex-col overflow-hidden"},r.a.createElement(M.a,{classes:{root:"p-24"}},r.a.createElement("div",{className:"flex"},r.a.createElement(X.a,Object.assign({suggestions:u},A,{onSuggestionsFetchRequested:async e=>{let{value:t}=e;if(t)try{const e=await m.a.get("/api/fournisseurs?societe=".concat(t,"&del=false&isactif=true&props[]=id&props[]=societe"));b(e.data["hydra:member"])}catch(a){b([])}else b([])},onSuggestionsClearRequested:()=>{b([])},getSuggestionValue:e=>e.societe,onSuggestionSelected:(e,t)=>{let{suggestion:a,method:n}=t;"enter"===n&&e.preventDefault(),d(a),O(h.a.set({...E},"fournisseur",a["@id"]))},required:!0,inputProps:{classes:t,label:"Fournisseur",placeholder:"Cherchez avec le nom du soci\xe9t\xe9",value:p.societe,variant:"outlined",name:"fournisseur",disabled:"edit"===l.type,onChange:(e,t)=>{let{newValue:a}=t;d({societe:a})},InputLabelProps:{shrink:!0}},theme:{container:t.container,suggestionsContainerOpen:t.suggestionsContainerOpen,suggestionsList:t.suggestionsList,suggestion:t.suggestion},renderSuggestionsContainer:e=>r.a.createElement(te.a,Object.assign({},e.containerProps,{square:!0}),e.children)}))),r.a.createElement("div",{className:"flex mt-24"},r.a.createElement(i.C,{className:"inline",name:"nbrJeton",label:"Nombre de jetons",onChange:function(e){O(h.a.set({...E},"nbrJeton",parseInt(e.target.value)))}},r.a.createElement(G.a,{value:"5",disabled:"edit"===l.type,checked:5===E.nbrJeton,control:r.a.createElement(B.a,null),label:"5"}),r.a.createElement(G.a,{value:"10",disabled:"edit"===l.type,checked:10===E.nbrJeton,control:r.a.createElement(B.a,null),label:"10"}),r.a.createElement(G.a,{value:"20",disabled:"edit"===l.type,checked:20===E.nbrJeton,control:r.a.createElement(B.a,null),label:"20"}))),r.a.createElement("div",{className:"flex"},r.a.createElement(i.F,{className:"mb-24 mt-24",type:"number",step:"any",label:"Prix",id:"prix",name:"prix",min:"0",value:String(E.prix),onChange:y,variant:"outlined",inputProps:{min:"0",step:"any"},fullWidth:!0,required:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(i.E,{id:"paiement",name:"paiement",className:"MuiFormControl-fullWidth MuiTextField-root mb-24 z-999",value:E.paiement,onChange:e=>(function(e,t){O(h.a.set({...E},t,e))})(e,"paiement"),textFieldProps:{label:"Choisissez le mode de paiement",InputLabelProps:{shrink:!0},variant:"outlined"},options:o,fullWidth:!0,required:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement(i.a,{className:"mb-10",name:"isPayed",value:E.isPayed,onChange:e=>(function(e,t){O(h.a.set({...E},t,e.target.checked))})(e,"isPayed"),label:"Confirmer le paiement de cette entreprise"}))),"new"===l.type?r.a.createElement(V.a,{className:"justify-between pl-16"},r.a.createElement(H.a,{variant:"contained",color:"primary",type:"submit",disabled:!x||!p["@id"]},"Ajouter")):r.a.createElement(V.a,{className:"justify-between pl-16"},E.isUse?"":r.a.createElement(H.a,{variant:"contained",color:"primary",type:"submit",disabled:!x},"Mettre \xe0 jour"))))},oe=a(43);const ce={entities:null,paiements:null,parametres:{page:1,search:[],filter:{id:"created",direction:"desc"}},pageCount:null,loading:!1,searchText:"",selectedJetonsIds:[],routeParams:{},jetonsDialog:{type:"new",props:{open:!1},data:null}};var pe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{...e,parametres:{page:t.parametres.page,search:t.parametres.search,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}};case C:return{...ce};case x:return{...e,loading:!0};case b:return{...e,entities:t.payload["hydra:member"],pageCount:g.a.hydraPageCount(t.payload),loading:!1};case A:return{...e,paiements:t.payload};case E:return{...e,searchText:t.searchText};case y:return{...e,jetonsDialog:{type:"new",props:{open:!0},data:null}};case j:return{...e,jetonsDialog:{type:"new",props:{open:!1},data:null}};case O:return{...e,jetonsDialog:{type:"edit",props:{open:!0},data:t.data}};case v:return{...e,jetonsDialog:{type:"edit",props:{open:!1},data:null}};default:return e}};const de={state:!1,options:{children:"Hi"}};var ue=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.f:return{...e,state:!0,options:{...e.options,...t.options}};case f.a:return{...e,state:!1};default:return e}};var me=Object(oe.d)({jetons:pe,dialog:ue}),ge=a(364);t.default=Object(l.a)("jetonsApp",me)(function(e){const t=Object(s.b)(),a=Object(n.useRef)(null),l=Object(s.c)(e=>{let{jetonsApp:t}=e;return t.jetons.parametres}),o=Object(s.c)(e=>{let{jetonsApp:t}=e;return t.jetons.paiements});return Object(n.useEffect)(()=>{t(w(l)),o||t(function(){const e=m.a.get("/api/paiements");return t=>e.then(e=>{t({type:A,payload:e.data["hydra:member"]})})}())},[t,l]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ge.Helmet,null,r.a.createElement("title",null,"Jetons | Les Achats Industriels"),r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("meta",{name:"googlebot",content:"noindex"})),r.a.createElement(i.p,{classes:{contentWrapper:"p-0 sm:p-24 pb-80 sm:pb-80 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(R,{pageLayout:a}),content:r.a.createElement(k,null),sidebarInner:!0,ref:a,innerScroll:!0}),r.a.createElement(le,null))})}}]);