(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1051:function(e,t,a){"use strict";var n=a(3),r=a.n(n),s=a(4),c=a.n(s),i=a(0),o=a.n(i),l=(a(1),a(2)),u=a(7),p=a(98),d=o.a.forwardRef(function(e,t){var a=e.children,n=e.classes,s=e.className,i=e.disableTypography,u=void 0!==i&&i,d=c()(e,["children","classes","className","disableTypography"]);return o.a.createElement("div",r()({className:Object(l.a)(n.root,s),ref:t},d),u?a:o.a.createElement(p.a,{variant:"h6"},a))});t.a=Object(u.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(d)},1052:function(e,t,a){"use strict";var n=a(3),r=a.n(n),s=a(0),c=a.n(s),i=(a(1),a(7)),o=a(98),l=c.a.forwardRef(function(e,t){return c.a.createElement(o.a,r()({component:"p",variant:"body1",color:"textSecondary",ref:t},e))});t.a=Object(i.a)({root:{marginBottom:16}},{name:"MuiDialogContentText"})(l)},1355:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(40),c=a(6),i=a(140),o=a(23),l=a(958),u=a(1051),p=a(1037),d=a(1052),m=a(1038),f=a(1035),E=a(1013),h=a(347),b=a(54),S=a(107),g=a(36),O=a(10),v="[SECTEURS APP] GET SECTEURS",y="[SECTEURS APP] GET_PARENTS",j="[SOUS_SECTEURS APP] GET SOUS_SECTEURS",C="[SOUS_SECTEURS APP] SET PARAMETRES DATA",_="[SOUS_SECTEURS APP] REQUEST SOUS_SECTEURS",A="[SOUS_SECTEURS APP] OPEN NEW SOUS_SECTEURS DIALOG",P="[SOUS_SECTEURS APP] CLOSE NEW SOUS_SECTEURS DIALOG",T="[SOUS_SECTEURS APP] OPEN EDIT SOUS_SECTEURS DIALOG",U="[SOUS_SECTEURS APP] CLOSE EDIT SOUS_SECTEURS DIALOG",x="[SOUS_SECTEURS APP] ADD SOUS_SECTEUR",N="[SOUS_SECTEURS APP] SAVE ERROR",R="[SOUS_SECTEURS APP] UPDATE SOUS_SECTEUR",w="[SOUS_SECTEURS APP] REMOVE SOUS_SECTEUR";function D(e){var t="";e.search.length>0&&e.search.map(function(e,a){t+="&"+e.id+"="+e.value});var a=b.a.get("/api/sous_secteurs?page=".concat(e.page).concat(t,"&order[").concat(e.filter.id,"]=").concat(e.filter.direction,"&props[]=id&props[]=name&props[]=secteur&props[]=parent&props[]=fournisseurs"));return function(e){return e({type:_}),a.then(function(t){e({type:j,payload:t.data})})}}function k(e){return{type:C,parametres:e}}function I(e,t){var a={del:!0,name:e.name+"_deleted-"+e.id};return function(n){return n({type:_}),b.a.put(e["@id"],a).then(function(e){return Promise.all([n(Object(g.B)({message:"Sous-secteur bien supprim\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(function(){return n(D(t))})}).catch(function(e){n({type:w}),e.response.data&&e.response.data["hydra:description"]&&n(Object(g.B)({message:e.response.data["hydra:description"],anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}var F="[DIALOG] OPEN",L="[DIALOG] CLOSE";function W(){return{type:L}}function z(e){return{type:F,options:e}}var M=a(1029),B=a(7);var G=function(e){var t=Object(c.b)(),a=Object(c.c)(function(e){return e.sous_secteursApp.sous_secteurs.entities}),i=Object(c.c)(function(e){return e.sous_secteursApp.sous_secteurs.pageCount}),S=Object(c.c)(function(e){return e.sous_secteursApp.sous_secteurs.loading}),g=Object(c.c)(function(e){return e.sous_secteursApp.sous_secteurs.parametres}),y=Object(c.c)(function(e){return e.sous_secteursApp.sous_secteurs.searchText}),j=Object(n.useState)(null),C=Object(o.a)(j,2),_=C[0],A=C[1];if(Object(B.a)(function(e){return{tooltip:{maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9","& b":{fontWeight:e.typography.fontWeightMedium}}}})(M.a),Object(n.useEffect)(function(){t(function(){var e=b.a.get("/api/secteurs?pagination=false&props[]=id&props[]=name");return function(t){return e.then(function(e){t({type:v,payload:e.data["hydra:member"]})})}}())},[t]),Object(n.useEffect)(function(){a&&A(function(e,t){var a=Object.keys(e).map(function(t){return e[t]});return 0===t.length?a:s.y.filterArrayByString(a,t)}(a,y))},[a,y]),!_)return null;var P=O.a.debounce(function(e){return t(k(e))},700);return r.a.createElement(s.d,{animation:"transition.slideUpIn",delay:300},r.a.createElement(h.b,{className:"-striped -highlight h-full sm:rounded-16 overflow-hidden",getTrProps:function(e,a,n){return{className:"cursor-pointer",onClick:function(e,n){var r;a&&t((r=a.original,{type:T,data:r}))}}},data:_,columns:[{Header:"Activit\xe9",accessor:"name",filterable:!0},{Header:"Secteur",accessor:"secteur.name",filterable:!0,Cell:function(e){return r.a.createElement("div",{className:"flex items-center"},e.original.secteur?e.original.secteur.name:"")}},{Header:"",sortable:!1,width:64,Cell:function(e){return r.a.createElement("div",{className:"flex items-center"},r.a.createElement(l.a,{className:"text-red text-20",onClick:function(a){a.stopPropagation(),t(z({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(p.a,null,r.a.createElement(d.a,{id:"alert-dialog-description"},"Voulez vous vraiment supprimer cet enregistrement ?")),r.a.createElement(m.a,null,r.a.createElement(f.a,{onClick:function(){return t(W())},color:"primary"},"Non"),r.a.createElement(f.a,{onClick:function(a){t(I(e.original,g)),t(W())},color:"primary",autoFocus:!0},"Oui")))}))}},r.a.createElement(E.a,null,"delete")))}}],manual:!0,pages:i,page:g.page-1,defaultPageSize:10,loading:S,showPageSizeOptions:!1,onPageChange:function(e){g.page=e+1,t(k(g))},onSortedChange:function(e,a,n){g.page=1,g.filter.id=e[0].id,g.filter.direction=e[0].desc?"desc":"asc",t(k(g))},onFilteredChange:function(e){g.page=1,g.search=e,P(g)},noDataText:"Aucune activit\xe9 trouv\xe9e",loadingText:"Chargement...",ofText:"sur"}))},H=a(98);var V=function(e){var t=Object(c.b)();return r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(s.d,{animation:"transition.expandIn",delay:300},r.a.createElement(E.a,{className:"text-32 mr-0 sm:mr-12"},"ballot")),r.a.createElement(s.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(H.a,{className:"hidden sm:flex",variant:"h6"},"Gestion des Activit\xe9s"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"}),r.a.createElement(s.d,{animation:"transition.slideRightIn",delay:300},r.a.createElement(f.a,{onClick:function(e){return t({type:A})},className:"whitespace-no-wrap",variant:"contained"},r.a.createElement("span",{className:"hidden sm:flex"},"Ajouter nouvelle activit\xe9"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},q=a(8),J=a(1031),Q=a(1026),K=a(1036),X=a(141),Y=a(55),Z=a.n(Y),$=a(350),ee={name:""};var te=function(e){var t=Object(c.b)(),a=Object(c.c)(function(e){return e.sous_secteursApp.sous_secteurs.sous_secteursDialog}),i=Object(c.c)(function(e){return e.sous_secteursApp.sous_secteurs.secteur}),h=Object(c.c)(function(e){return e.sous_secteursApp.sous_secteurs.parents}),v=Object(c.c)(function(e){return e.sous_secteursApp.sous_secteurs.parametres}),j=Object(X.b)(ee),C=j.form,_=j.handleChange,A=j.setForm,T=Object(n.useState)(!1),w=Object(o.a)(T,2),k=w[0],F=w[1],L=Object(n.useRef)(null),M=Object(n.useCallback)(function(){if("edit"===a.type&&a.data){var e={value:a.data.secteur["@id"],label:a.data.secteur.name};a.data.parent&&(a.data.parent={value:a.data.parent["@id"],label:a.data.parent.name}),A(Object(q.a)({},a.data)),A(O.a.set(Object(q.a)({},a.data),"secteur",e))}"new"===a.type&&A(Object(q.a)({},ee,a.data))},[a.data,a.type,A]);function B(){"edit"===a.type?t({type:U}):t({type:P})}function G(){t(I(C,v)),t(W()),B()}function V(e,a){A(O.a.set(Object(q.a)({},C),a,e)),"secteur"===a&&e.value&&t(function(e){var t=b.a.get("".concat(e,"/sous_secteurs?pagination=false&props[]=id&props[]=name"));return function(e){return t.then(function(t){e({type:y,payload:t.data["hydra:member"]})})}}(e.value))}return Object(n.useEffect)(function(){a.props.open&&M()},[a.props.open,M]),r.a.createElement(J.a,Object.assign({classes:{paper:"m-24"}},a.props,{onClose:B,fullWidth:!0,maxWidth:"xs"}),r.a.createElement(Q.a,{position:"static",elevation:1},r.a.createElement(K.a,{className:"flex w-full"},r.a.createElement(H.a,{variant:"subtitle1",color:"inherit"},"new"===a.type?"Nouvelle activit\xe9":"Editer activit\xe9"))),r.a.createElement(Z.a,{onValidSubmit:function(e){"new"===a.type?t(function(e,t){return e.secteur=e.secteur.value,e.parent&&(e.parent=e.parent.value),function(a,n){return b.a.post("/api/sous_secteurs",e).then(function(e){return Promise.all([a({type:x}),a(Object(g.B)({message:"Sous-secteur bien ajout\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(function(){return a(D(t))})}).catch(function(e){a({type:N}),a(Object(g.B)({message:O.a.map(S.a.parseApiErrors(e),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}(C,v)):t(function(e,t){return e.secteur=e.secteur.value,e.parent&&(e.parent=e.parent.value),function(a,n){return b.a.put(e["@id"],e).then(function(e){return Promise.all([a({type:R}),a(Object(g.B)({message:"Sous-secteur bien modifi\xe9!",anchorOrigin:{vertical:"top",horizontal:"right"},variant:"success"}))]).then(function(){return a(D(t))})}).catch(function(e){a({type:N}),a(Object(g.B)({message:O.a.map(S.a.parseApiErrors(e),function(e,t){return t+": "+e}),autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"}))})}}(C,v)),B()},onValid:function(){F(!0)},onInvalid:function(){F(!1)},ref:L,className:"flex flex-col overflow-hidden"},r.a.createElement(p.a,{classes:{root:"p-24"}},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"min-w-48 pt-20"},r.a.createElement(E.a,{color:"action"},"ballot")),r.a.createElement(s.F,{className:"mb-24",label:"Nom",autoFocus:!0,id:"name",name:"name",value:C.name,onChange:_,variant:"outlined",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},required:!0,fullWidth:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"min-w-48 pt-20"},r.a.createElement(E.a,{color:"action"},"work")),r.a.createElement($.a,{id:"secteur",name:"secteur",className:"MuiFormControl-fullWidth MuiTextField-root mb-24",value:C.secteur,onChange:function(e){return V(e,"secteur")},placeholder:"S\xe9lectionner un secteur",textFieldProps:{label:"Secteur",InputLabelProps:{shrink:!0},variant:"outlined"},options:i,fullWidth:!0,required:!0})),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"min-w-48 pt-20"},r.a.createElement(E.a,{color:"action"},"work")),r.a.createElement($.a,{id:"parent",name:"parent",className:"MuiFormControl-fullWidth MuiTextField-root mb-24",value:C.parent,onChange:function(e){return V(e,"parent")},placeholder:"Parent optionnel",textFieldProps:{label:"Parent",InputLabelProps:{shrink:!0},variant:"outlined"},options:h,fullWidth:!0}))),"new"===a.type?r.a.createElement(m.a,{className:"justify-between pl-16"},r.a.createElement(f.a,{variant:"contained",color:"primary",type:"submit",disabled:!k},"Ajouter")):r.a.createElement(m.a,{className:"justify-between pl-16"},r.a.createElement(f.a,{variant:"contained",color:"primary",type:"submit",disabled:!k},"Modifier"),r.a.createElement(l.a,{onClick:function(){return t(z({children:r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{id:"alert-dialog-title"},"Suppression"),r.a.createElement(p.a,null,r.a.createElement(d.a,{id:"alert-dialog-description"},0===Object.keys(O.a.pullAllBy(C.fournisseurs,[{del:!0}],"del")).length?"Voulez vous vraiment supprimer cet enregistrement ?":"Vous ne pouvez pas supprimer cet enregistrement, car il est en relation avec d'autre(s) objet(s) !")),r.a.createElement(m.a,null,r.a.createElement(f.a,{onClick:function(){return t(W())},color:"primary"},"Non"),0===Object.keys(O.a.pullAllBy(C.fournisseurs,[{del:!0}],"del")).length?r.a.createElement(f.a,{onClick:G,color:"primary",autoFocus:!0},"Oui"):r.a.createElement(f.a,{disabled:!0,color:"primary",autoFocus:!0},"Oui")))}))}},r.a.createElement(E.a,null,"delete")))))},ae=a(46),ne={searchText:"",entities:null,pageCount:null,parametres:{page:1,search:[],filter:{id:"id",direction:"desc"}},routeParams:{},sous_secteursDialog:{type:"new",props:{open:!1},data:null},secteur:null,loading:!1,parents:null},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(q.a)({},e,{secteur:t.payload});case y:return Object(q.a)({},e,{parents:t.payload});case _:return Object(q.a)({},e,{loading:!0});case j:return Object(q.a)({},e,{entities:t.payload["hydra:member"],pageCount:S.a.hydraPageCount(t.payload),loading:!1});case w:return Object(q.a)({},e,{loading:!1});case C:return Object(q.a)({},e,{parametres:{page:t.parametres.page,search:t.parametres.search,filter:{id:t.parametres.filter.id,direction:t.parametres.filter.direction}}});case A:return Object(q.a)({},e,{sous_secteursDialog:{type:"new",props:{open:!0},data:null}});case P:return Object(q.a)({},e,{sous_secteursDialog:{type:"new",props:{open:!1},data:null}});case T:return Object(q.a)({},e,{sous_secteursDialog:{type:"edit",props:{open:!0},data:t.data}});case U:return Object(q.a)({},e,{sous_secteursDialog:{type:"edit",props:{open:!1},data:null}});default:return e}},se={state:!1,options:{children:"Hi"}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.f:return Object(q.a)({},e,{state:!0,options:Object(q.a)({},e.options,t.options)});case g.a:return Object(q.a)({},e,{state:!1});default:return e}},ie=Object(ae.d)({sous_secteurs:re,dialog:ce}),oe=a(346);t.default=Object(i.a)("sous_secteursApp",ie)(function(e){var t=Object(c.b)(),a=Object(n.useRef)(null),i=Object(c.c)(function(e){return e.sous_secteursApp.sous_secteurs.parametres});return Object(n.useEffect)(function(){t(D(i))},[t,i]),r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.Helmet,null,r.a.createElement("title",null,"Activit\xe9s | Les Achats Industriels"),r.a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),r.a.createElement("meta",{name:"googlebot",content:"noindex"})),r.a.createElement(s.p,{classes:{contentWrapper:"p-0 sm:p-24 pb-80 sm:pb-80 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(V,{pageLayout:a}),content:r.a.createElement(G,null),sidebarInner:!0,ref:a,innerScroll:!0}),r.a.createElement(te,null))})}}]);