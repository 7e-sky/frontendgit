(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1051:function(e,t,a){"use strict";var n=a(3),r=a.n(n),l=a(4),i=a.n(l),c=a(0),o=a.n(c),s=(a(1),a(2)),u=a(7),p=a(98),m=o.a.forwardRef(function(e,t){var a=e.children,n=e.classes,l=e.className,c=e.disableTypography,u=void 0!==c&&c,m=i()(e,["children","classes","className","disableTypography"]);return o.a.createElement("div",r()({className:Object(s.a)(n.root,l),ref:t},m),u?a:o.a.createElement(p.a,{variant:"h6"},a))});t.a=Object(u.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(m)},1052:function(e,t,a){"use strict";var n=a(3),r=a.n(n),l=a(0),i=a.n(l),c=(a(1),a(7)),o=a(98),s=i.a.forwardRef(function(e,t){return i.a.createElement(o.a,r()({component:"p",variant:"body1",color:"textSecondary",ref:t},e))});t.a=Object(c.a)({root:{marginBottom:16}},{name:"MuiDialogContentText"})(s)},1354:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(40),i=a(6),c=a(140),o=a(23),s=a(958),u=a(1051),p=a(1037),m=a(1052),d=a(1038),f=a(1035),E=a(1013),h=a(347),y=a(54),v=a(107),b=a(36),g=a(10),O="[PAYS APP] GET PAYS",j="[VILLES APP] GET VILLES",L="[VILLES APP] REQUEST VILLES",A="[VILLES APP] SET SEARCH TEXT",P="[VILLES APP] OPEN NEW VILLES DIALOG",S="[VILLES APP] CLOSE NEW VILLES DIALOG",x="[VILLES APP] OPEN EDIT VILLES DIALOG",I="[VILLES APP] CLOSE EDIT VILLES DIALOG",N="[VILLES APP] ADD VILLE",V="[VILLES APP] SAVE ERROR",w="[VILLES APP] UPDATE VILLE",C="[VILLES APP] REMOVE VILLE",T="[SOUS_SECTEURS APP] SET PARAMETRES DATA";function D(e){var t="";e.search.length>0&&e.search.map(function(e,a){t+="&"+e.id+"="+e.value});var a=y.a.get("/api/villes?page=".concat(e.page).concat(t,"&order[").concat(e.filter.id,"]=").concat(e.filter.direction,"&props[]=id&props[]=name&props[]=pays"));return function(e){return e({type:L}),a.then(function(t){e({type:j,payload:t.data})})}}function k(e,t){var a={del:!0,name:e.name+"_deleted-"+e.id};return function(n){return n({type:L}),y.a.put(e["@id"],a).then(function(e){return Promise.all([n({type:C}),n(Object(b.B)({message:"Ville bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(function(){return n(D(t))})}).catch(function(e){n({type:V}),n(Object(b.B)({message:g.a.map(v.a.parseApiErrors(e),function(e,t){return e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}function B(e){return{type:T,parametres:e}}var R="[DIALOG] OPEN",F="[DIALOG] CLOSE";function z(){return{type:F}}function G(e){return{type:R,options:e}}var H=function(e){var t=Object(i.b)(),a=Object(i.c)(function(e){return e.villesApp.villes.entities}),c=Object(i.c)(function(e){return e.villesApp.villes.pageCount}),v=Object(i.c)(function(e){return e.villesApp.villes.loading}),b=Object(i.c)(function(e){return e.villesApp.villes.parametres}),j=Object(i.c)(function(e){return e.villesApp.villes.searchText}),L=Object(n.useState)(null),A=Object(o.a)(L,2),P=A[0],S=A[1];if(Object(n.useEffect)(function(){t(function(){var e=y.a.get("/api/pays?pagination=false&props[]=id&props[]=name");return function(t){return e.then(function(e){t({type:O,payload:e.data["hydra:member"]})})}}())},[t]),Object(n.useEffect)(function(){a&&S(function(e,t){var a=Object.keys(e).map(function(t){return e[t]});return 0===t.length?a:l.y.filterArrayByString(a,t)}(a,j))},[a,j]),!P)return null;var I=g.a.debounce(function(e){return t(B(e))},700);return r.a.createElement(l.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(h.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:function(e,a,n){return{className:"cursor-pointer",onClick:function(e,n){var r;a&&t((r=a.original,{type:x,data:r}))}}},data:P,columns:[{Header:"Villes",accessor:"name",filterable:!0},{Header:"Pays",accessor:"pays.name",filterable:!0,Cell:function(e){return r.a.createElement("div",{className:"flex items-center"},e.original.pays?e.original.pays.name:"")}},{Header:"",width:64,Cell:function(e){return r.a.createElement("div",{className:"flex items-center"},r.a.createElement(s.a,{className:"text-red text-20",onClick:function(a){a.stopPropagation(),t(G({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(p.a,null,r.a.createElement(m.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),r.a.createElement(d.a,null,r.a.createElement(f.a,{onClick:function(){return t(z())},color:"primary"},"Non"),r.a.createElement(f.a,{onClick:function(a){t(k(e.original)),t(z())},color:"primary",autoFocus:!0},"Oui")))}))}},r.a.createElement(E.a,null,"delete")))}}],manual:!0,pages:c,page:b.page-1,defaultPageSize:10,loading:v,showPageSizeOptions:!1,onPageChange:function(e){b.page=e+1,t(B(b))},onSortedChange:function(e,a,n){b.page=1,b.filter.id=e[0].id,b.filter.direction=e[0].desc?"desc":"asc",t(B(b))},onFilteredChange:function(e){b.page=1,b.search=e,I(b)},noDataText:"No ville found",loadingText:"Chargement...",ofText:"sur"}))},M=a(98);var W=function(e){var t=Object(i.b)();return r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(l.d,{animation:"transition.expandIn",delay:300},r.a.createElement(E.a,{className:"text-32 mr-0 sm:mr-12"},"location_city")),r.a.createElement(l.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(M.a,{className:"hidden sm:flex",variant:"h6"},"Gestion des Villes"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"}),r.a.createElement(l.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(f.a,{onClick:function(e){return t({type:P})},className:"whitespace-no-wrap",variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex"},"Ajouter nouvelle Ville"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},U=a(8),_=a(1031),q=a(1026),J=a(1036),Y=a(141),Q=a(55),X=a.n(Q),K=a(350),Z={name:"",pays:""};var $=function(e){var t=Object(i.b)(),a=Object(i.c)(function(e){return e.villesApp.villes.villesDialog}),c=Object(i.c)(function(e){return e.villesApp.villes.pays}),h=Object(i.c)(function(e){return e.villesApp.villes.parametres}),O=Object(Y.b)(Z),j=O.form,A=O.handleChange,P=O.setForm,x=Object(n.useState)(!1),C=Object(o.a)(x,2),T=C[0],B=C[1],R=Object(n.useRef)(null),F=Object(n.useCallback)(function(){if("edit"===a.type&&a.data){var e={value:a.data.pays["@id"],label:a.data.pays.name};P(Object(U.a)({},a.data)),P(g.a.set(Object(U.a)({},a.data),"pays",e))}"new"===a.type&&P(Object(U.a)({},Z,a.data))},[a.data,a.type,P]);function H(){"edit"===a.type?t({type:I}):t({type:S})}function W(){t(k(j)),t(z()),H()}return Object(n.useEffect)(function(){a.props.open&&F()},[a.props.open,F]),r.a.createElement(_.a,Object.assign({classes:{paper:"m-24"}},a.props,{onClose:H,fullWidth:!0,maxWidth:"xs"}),r.a.createElement(q.a,{position:"static",elevation:1},r.a.createElement(J.a,{className:"flex w-full"},r.a.createElement(M.a,{variant:"subtitle1",color:"inherit"},"new"===a.type?"Nouvelle Ville":"Editer Ville"))),r.a.createElement(X.a,{onValidSubmit:function(e){"new"===a.type?t(function(e,t){return e.pays=e.pays.value,function(a){return a({type:L}),y.a.post("/api/villes",e).then(function(e){return Promise.all([a({type:N}),a(Object(b.B)({message:"Ville bien ajout\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(function(){return a(D(t))})}).catch(function(e){a({type:V}),a(Object(b.B)({message:g.a.map(v.a.parseApiErrors(e),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}(j,h)):t(function(e,t){return e.pays=e.pays.value,function(a){return a({type:L}),y.a.put(e["@id"],e).then(function(e){return Promise.all([a({type:w}),a(Object(b.B)({message:"Ville bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(function(){return a(D(t))})}).catch(function(e){a({type:V}),a(Object(b.B)({message:g.a.map(v.a.parseApiErrors(e),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}(j,h)),H()},onValid:function(){B(!0)},onInvalid:function(){B(!1)},ref:R,className:"flex flex-col overflow-hidden"},r.a.createElement(p.a,{classes:{root:"p-24"}},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"min-w-48 pt-20"},r.a.createElement(E.a,{color:"action"},"location_city")),r.a.createElement(l.F,{className:"mb-24",label:"Nom",autoFocus:!0,id:"name",name:"name",value:j.name,onChange:A,variant:"outlined",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"min-w-48 pt-20"},r.a.createElement(E.a,{color:"action"},"public")),r.a.createElement(K.a,{id:"pays",name:"pays",className:"MuiFormControl-fullWidth MuiTextField-root mb-24",value:j.pays,onChange:function(e){return function(e,t){P(g.a.set(Object(U.a)({},j),t,e))}(e,"pays")},placeholder:"S\xe9lectionner un pays",textFieldProps:{label:"Pays",InputLabelProps:{shrink:!0},variant:"outlined"},options:c,fullWidth:!0,required:!0}))),"new"===a.type?r.a.createElement(d.a,{className:"justify-between pl-16"},r.a.createElement(f.a,{variant:"contained",color:"primary",type:"submit",disabled:!T},"Ajouter")):r.a.createElement(d.a,{className:"justify-between pl-16"},r.a.createElement(f.a,{variant:"contained",color:"primary",type:"submit",disabled:!T},"Modifier"),r.a.createElement(s.a,{onClick:function(){return t(G({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(p.a,null,r.a.createElement(m.a,{id:"alert-dialog-description"},0===Object.keys(g.a.pullAllBy(j.fournisseurs,[{del:!0}],"del")).length&&0===Object.keys(g.a.pullAllBy(j.acheteurs,[{del:!0}],"del")).length&&0===Object.keys(g.a.pullAllBy(j.commercials,[{del:!0}],"del")).length?"Voulez vous vraiment supprimer cet enregistrement ?":"Vous ne pouvez pas supprimer cet enregistrement, car il est en relation avec d'autre(s) objet(s) !")),r.a.createElement(d.a,null,r.a.createElement(f.a,{onClick:function(){return t(z())},color:"primary"},"Non"),0===Object.keys(g.a.pullAllBy(j.fournisseurs,[{del:!0}],"del")).length&&0===Object.keys(g.a.pullAllBy(j.acheteurs,[{del:!0}],"del")).length&&0===Object.keys(g.a.pullAllBy(j.commercials,[{del:!0}],"del")).length?r.a.createElement(f.a,{onClick:W,color:"primary",autoFocus:!0},"Oui"):r.a.createElement(f.a,{disabled:!0,color:"primary",autoFocus:!0},"Oui")))}))}},r.a.createElement(E.a,null,"delete")))))},ee=a(46),te={entities:null,parametres:{page:1,search:[],filter:{id:"id",direction:"asc"}},pageCount:null,loading:!1,searchText:"",selectedVillesIds:[],routeParams:{},villesDialog:{type:"new",props:{open:!1},data:null},pays:null},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(U.a)({},e,{loading:!0});case O:return Object(U.a)({},e,{pays:g.a.keyBy(t.payload,"id")});case j:return Object(U.a)({},e,{entities:g.a.keyBy(t.payload["hydra:member"],"id"),pageCount:v.a.hydraPageCount(t.payload),loading:!1});case V:return Object(U.a)({},e,{loading:!1});case A:return Object(U.a)({},e,{searchText:t.searchText});case P:return Object(U.a)({},e,{villesDialog:{type:"new",props:{open:!0},data:null}});case S:return Object(U.a)({},e,{villesDialog:{type:"new",props:{open:!1},data:null}});case x:return Object(U.a)({},e,{villesDialog:{type:"edit",props:{open:!0},data:t.data}});case I:return Object(U.a)({},e,{villesDialog:{type:"edit",props:{open:!1},data:null}});case T:return Object(U.a)({},e,{parametres:{page:t.parametres.page,search:t.parametres.search,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}});default:return e}},ne={state:!1,options:{children:"Hi"}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.f:return Object(U.a)({},e,{state:!0,options:Object(U.a)({},e.options,t.options)});case b.a:return Object(U.a)({},e,{state:!1});default:return e}},le=Object(ee.d)({villes:ae,dialog:re}),ie=a(346);t.default=Object(c.a)("villesApp",le)(function(e){var t=Object(i.b)(),a=Object(i.c)(function(e){return e.villesApp.villes.parametres}),c=Object(n.useRef)(null);return Object(n.useEffect)(function(){t(D(a))},[t,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.Helmet,null,r.a.createElement("title",null,"Villes | Les Achats Industriels"),r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("meta",{name:"googlebot",content:"noindex"})),r.a.createElement(l.p,{classes:{contentWrapper:"p-0 sm:p-24 pb-80 sm:pb-80 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(W,{pageLayout:c}),content:r.a.createElement(H,null),sidebarInner:!0,ref:c,innerScroll:!0}),r.a.createElement($,null))})}}]);