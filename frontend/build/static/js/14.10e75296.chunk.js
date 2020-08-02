(this["webpackJsonpnext-story"]=this["webpackJsonpnext-story"]||[]).push([[14],{162:function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),function(e){e.movie="movie",e.book="book",e.start=""}(a||(a={})),function(e){e.bookPerson="bookPerson",e.moviePerson="moviePerson",e.genre="genre",e.tag="tag",e.searchBar="searchBar"}(r||(r={}))},164:function(e,t,n){"use strict";var a=n(17),r=n(0),c=n.n(r),o=n(249),i=n(15);function l(){var e=Object(a.a)(["\n    margin-top: 85px;\n    margin-bottom: 85px;\n"]);return l=function(){return e},e}var u=Object(i.b)(o.a)(l());t.a=function(e){return c.a.createElement(u,{maxWidth:e.maxWidth},e.children)}},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(77),r=function(e){return{type:a.a,filterName:e}}},170:function(e,t,n){"use strict";var a=n(17),r=n(0),c=n.n(r),o=n(15),i=n(8),l=n(162),u=n(41),s=n(75),d=n(166);function m(){var e=Object(a.a)(["\n    border-radius: 7px;\n    color: white;\n    outline: none;\n    border: none;\n    margin: 5px;\n    cursor: pointer;\n    background-color: ",";\n    &:hover {\n        background-color: ",";\n    }\n    font-size: 16px;\n    padding: 3px 5px 3px 5px;\n"]);return m=function(){return e},e}var b=o.b.button(m(),(function(e){return e.theme.palette.primary.light}),(function(e){return e.theme.palette.secondary.light})),p=Object(s.b)(null,{changeSingleSearchPageFilter:d.a})((function(e){var t=e.label,n=e.tagId,a=e.singleQueryType,r=Object(i.g)(),o=encodeURIComponent(n||t);return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement(b,{onClick:function(){!function(e,t){switch(t){case l.b.bookPerson:e.changeSingleSearchPageFilter(u.b);break;case l.b.moviePerson:e.changeSingleSearchPageFilter(u.d);break;case l.b.tag:case l.b.genre:case l.b.searchBar:default:e.changeSingleSearchPageFilter(u.a)}}(e,a),r.push("/searchResult/param?singleQueryType=".concat(a,"&query=").concat(o))}},t))}));function f(){var e=Object(a.a)(["\n    margin-bottom: 15px;\n"]);return f=function(){return e},e}var g=o.b.div(f());t.a=function(e){var t=e.singleQueryType,n=e.tags,a=e.tagObjects;return c.a.createElement(g,null,n&&n.map((function(e,n){return c.a.createElement(p,{key:n,label:e,singleQueryType:t})})),!n&&a&&a.map((function(e,n){return c.a.createElement(p,{key:n,label:e.tagName,singleQueryType:t,tagId:e.tagId})})))}},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n(65);function c(){return a.useContext(r.a)}},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(e){var t=e.controlled,n=e.default,r=(e.name,e.state,a.useRef(void 0!==t).current),c=a.useState(n),o=c[0],i=c[1];return[r?t:o,a.useCallback((function(e){r||i(e)}),[])]}},210:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(187),o=n(17),i=n(15),l=n(228),u=n(148),s=n(279),d=n(162),m=n(170),b=n(8),p=n(177);function f(){var e=Object(o.a)(["\n    &:hover {\n        cursor: pointer;\n    }\n"]);return f=function(){return e},e}function g(){var e=Object(o.a)(["\n    margin-bottom: 5px;\n"]);return g=function(){return e},e}function h(){var e=Object(o.a)(["\n    max-width: ",";\n    &:hover {\n        cursor: pointer;\n    }\n"]);return h=function(){return e},e}function v(){var e=Object(o.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return v=function(){return e},e}function y(){var e=Object(o.a)(["\n    border-top: ",";\n    border-bottom: ",";\n    min-height: 50px;\n    padding: 5px;\n    margin-bottom: 2px;\n"]);return y=function(){return e},e}var x=i.b.div(y(),(function(e){var t=e.theme;return"2px solid ".concat(t.palette.grey[400])}),(function(e){var t=e.theme;return"2px solid ".concat(t.palette.grey[400])})),k=i.b.div(v()),O=i.b.img(h(),(function(e){return e.isSmall?"150px":"100%"})),j=i.b.div(g()),E=Object(i.b)(l.a)(f()),S=function(e){var t=e.image,n=e.title,a=e.blurb,c=e.genres,o=e.mediaType,i=e.mediaId,l=e.nextStoryTags,f=Object(b.g)(),g=Object(u.a)("(max-width:450px)"),h=function(){f.push("/".concat(o,"/").concat(i))};return r.a.createElement(x,null,r.a.createElement(k,null,r.a.createElement(s.a,{container:!0,direction:"row",spacing:5},r.a.createElement(s.a,{item:!0,sm:3},r.a.createElement(O,{src:t,onClick:h,isSmall:g})),r.a.createElement(s.a,{item:!0,sm:6},r.a.createElement(j,null,r.a.createElement(E,{variant:"h5",onClick:h,color:"textPrimary",gutterBottom:!0},r.a.createElement("strong",null,n))),r.a.createElement(p.a,{content:a})),r.a.createElement(s.a,{item:!0,sm:3},"Genres:",r.a.createElement(m.a,{tags:c,singleQueryType:d.b.genre}),l&&r.a.createElement(r.a.Fragment,null,"Tags:",r.a.createElement(m.a,{tagObjects:l,singleQueryType:d.b.tag}))))))};t.a=function(e){var t=e.resultsToDisplay,n=e.hasMore,a=e.doNext;return r.a.createElement(c.a,{style:{overflow:"hidden"},dataLength:t.length,scrollThreshold:1,next:a,hasMore:n,loader:r.a.createElement("h4",{style:{textAlign:"center"}},"Loading more results..."),endMessage:r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"No more results"))},t.map((function(e,t){return r.a.createElement(S,{key:t,image:e.image,title:e.title,blurb:e.blurb,genres:e.genres,nextStoryTags:e.nextStoryTags,mediaType:e.mediaType,mediaId:e.id})})))}},282:function(e,t,n){"use strict";var a=n(1),r=n(2),c=n(0),o=(n(3),n(4)),i=n(171),l=n(5),u=n(278),s=n(9),d=c.forwardRef((function(e,t){e.checked;var n=e.classes,l=e.className,d=e.control,m=e.disabled,b=(e.inputRef,e.label),p=e.labelPlacement,f=void 0===p?"end":p,g=(e.name,e.onChange,e.value,Object(r.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),h=Object(i.a)(),v=m;"undefined"===typeof v&&"undefined"!==typeof d.props.disabled&&(v=d.props.disabled),"undefined"===typeof v&&h&&(v=h.disabled);var y={disabled:v};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof d.props[t]&&"undefined"!==typeof e[t]&&(y[t]=e[t])})),c.createElement("label",Object(a.a)({className:Object(o.a)(n.root,l,"end"!==f&&n["labelPlacement".concat(Object(s.a)(f))],v&&n.disabled),ref:t},g),c.cloneElement(d,y),c.createElement(u.a,{component:"span",className:Object(o.a)(n.label,v&&n.disabled)},b))}));t.a=Object(l.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(d)},392:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(164),o=n(278),i=n(64),l=n(185),u=n.n(l),s=n(186),d=n(40),m=n(17),b=n(15),p=n(163),f=n.n(p),g=n(282),h=n(1),v=n(2),y=(n(3),n(4)),x=n(54),k=n(201),O=n(171),j=n(5),E=n(152),S=a.forwardRef((function(e,t){var n=e.autoFocus,r=e.checked,c=e.checkedIcon,o=e.classes,i=e.className,l=e.defaultChecked,u=e.disabled,s=e.icon,d=e.id,m=e.inputProps,b=e.inputRef,p=e.name,f=e.onBlur,g=e.onChange,j=e.onFocus,S=e.readOnly,P=e.required,T=e.tabIndex,C=e.type,w=e.value,I=Object(v.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),B=Object(k.a)({controlled:r,default:Boolean(l),name:"SwitchBase",state:"checked"}),F=Object(x.a)(B,2),N=F[0],z=F[1],R=Object(O.a)(),M=u;R&&"undefined"===typeof M&&(M=R.disabled);var L="checkbox"===C||"radio"===C;return a.createElement(E.a,Object(h.a)({component:"span",className:Object(y.a)(o.root,i,N&&o.checked,M&&o.disabled),disabled:M,tabIndex:null,role:void 0,onFocus:function(e){j&&j(e),R&&R.onFocus&&R.onFocus(e)},onBlur:function(e){f&&f(e),R&&R.onBlur&&R.onBlur(e)},ref:t},I),a.createElement("input",Object(h.a)({autoFocus:n,checked:r,defaultChecked:l,className:o.input,disabled:M,id:L&&d,name:p,onChange:function(e){var t=e.target.checked;z(t),g&&g(e,t)},readOnly:S,ref:b,required:P,tabIndex:T,type:C,value:w},m)),N?c:s)})),P=Object(j.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(S),T=n(50),C=Object(T.a)(a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),w=Object(T.a)(a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),I=n(16),B=Object(T.a)(a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),F=n(9),N=a.createElement(w,null),z=a.createElement(C,null),R=a.createElement(B,null),M=a.forwardRef((function(e,t){var n=e.checkedIcon,r=void 0===n?N:n,c=e.classes,o=e.color,i=void 0===o?"secondary":o,l=e.icon,u=void 0===l?z:l,s=e.indeterminate,d=void 0!==s&&s,m=e.indeterminateIcon,b=void 0===m?R:m,p=e.inputProps,f=e.size,g=void 0===f?"medium":f,x=Object(v.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),k=d?b:u,O=d?b:r;return a.createElement(P,Object(h.a)({type:"checkbox",classes:{root:Object(y.a)(c.root,c["color".concat(Object(F.a)(i))],d&&c.indeterminate),checked:c.checked,disabled:c.disabled},color:i,inputProps:Object(h.a)({"data-indeterminate":d},p),icon:a.cloneElement(k,{fontSize:void 0===k.props.fontSize&&"small"===g?g:k.props.fontSize}),checkedIcon:a.cloneElement(O,{fontSize:void 0===O.props.fontSize&&"small"===g?g:O.props.fontSize}),ref:t},x))})),L=Object(j.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(I.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(I.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(M),A=n(149),H=n(210);function Q(){var e=Object(m.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return Q=function(){return e},e}var W=b.b.div(Q()),Y=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),m=Object(d.a)(l,2),b=m[0],p=m[1],h=Object(a.useState)(!1),v=Object(d.a)(h,2),y=v[0],x=v[1],k=Object(a.useState)([]),O=Object(d.a)(k,2),j=O[0],E=O[1],S=Object(a.useState)(0),P=Object(d.a)(S,2),T=P[0],C=P[1],w=Object(a.useState)(!0),I=Object(d.a)(w,2),B=I[0],F=I[1],N=Object(a.useState)(!0),z=Object(d.a)(N,2),R=z[0],M=z[1],Q=Object(a.useState)([]),Y=Object(d.a)(Q,2),$=Y[0],D=Y[1],q=Object(a.useState)(!1),V=Object(d.a)(q,2),J=V[0],G=V[1];Object(a.useEffect)((function(){f.a.get("/nextStoryTags").then((function(e){c(e.data)})).catch((function(e){console.log(e)}))}),[]);var U=function(){var e=Object(s.a)(u.a.mark((function e(){var t,n,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],n=[],a=j.reduce((function(e,t){return"".concat(e,"&").concat(t.tagId)}),"").substring(1),!b){e.next=14;break}return e.prev=4,e.next=7,f.a.get("/movies/withTags/".concat(a));case 7:r=e.sent,t=r.data,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log("error fetching movies from mongo for tag",e.t0);case 14:if(!y){e.next=25;break}return e.prev=15,e.next=18,f.a.get("/books/withTags/".concat(a));case 18:c=e.sent,n=c.data,e.next=25;break;case 22:e.prev=22,e.t1=e.catch(15),console.log("error fetching books from mongo for tag",e.t1);case 25:return e.prev=25,e.next=28,K(t,n);case 28:e.next=33;break;case 30:e.prev=30,e.t2=e.catch(25),console.log(e.t2);case 33:case"end":return e.stop()}}),e,null,[[4,11],[15,22],[25,30]])})));return function(){return e.apply(this,arguments)}}();function K(e,t){return X.apply(this,arguments)}function X(){return(X=Object(s.a)(u.a.mark((function e(t,n){var a,r,c,o,l,s,d,m,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],r=[],c=T+5,o=t.length>=c?c:t.length,l=n.length>=c?c:n.length,s=u.a.mark((function e(n){var a,c,o,l,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t[n].movieId,e.prev=1,e.next=4,f.a.get("/thirdPartyMovieApi/tmdbMovies/searchOneById/".concat(a));case 4:c=e.sent,o=c.data,l=t.filter((function(e){return e.movieId===a})),s=l.length>0&&l[0],o.nextStoryTags=s?s.nextStoryTags:[],r.push(o),D((function(e){return[].concat(Object(i.a)(e),[o])})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})),d=T;case 7:if(!(d<o)){e.next=12;break}return e.delegateYield(s(d),"t0",9);case 9:d++,e.next=7;break;case 12:m=u.a.mark((function e(t){var r,c,o,l,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n[t].bookId,e.prev=1,e.next=4,f.a.get("/thirdPartyBookApi/googleBooks/searchOneById/".concat(r));case 4:c=e.sent,o=c.data,l=n.filter((function(e){return e.bookId===r})),s=l.length>0&&l[0],o.nextStoryTags=s?s.nextStoryTags:[],a.push(o),D((function(e){return[].concat(Object(i.a)(e),[o])})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})),b=T;case 14:if(!(b<l)){e.next=19;break}return e.delegateYield(m(b),"t1",16);case 16:b++,e.next=14;break;case 19:return 0===r.length&&F(!1),0===a.length&&M(!1),e.abrupt("return",[r,a]);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=function(){C(T+5)},_=r.a.createElement("div",null,r.a.createElement(W,null,r.a.createElement(o.a,null,"Types:"),r.a.createElement("div",null,r.a.createElement(g.a,{onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:r.a.createElement(L,{name:"movie",onClick:function(e){e.stopPropagation(),p(!b)}}),label:"Movies"}),r.a.createElement(g.a,{onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:r.a.createElement(L,{name:"book",onClick:function(e){e.stopPropagation(),x(!y)}}),label:"Books"}))),r.a.createElement("div",null,r.a.createElement(o.a,null,"Tags:"),r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement(g.a,{control:r.a.createElement(L,{name:e.tagName,onClick:function(){if(j.includes(e)){var t=j.indexOf(e);t>-1&&j.splice(t,1)}else E([].concat(Object(i.a)(j),[e]))}}),label:e.tagName,key:t})})))),r.a.createElement(A.a,{variant:"contained",style:{marginBottom:"5px"},onClick:function(){b||y?j&&0!==j.length?(D([]),G(!0),U()):alert("Please Specify The Tags For Your Story!"):alert("Please Specify The Story Type You Are Looking For!")}},"Explore"));return r.a.createElement("div",null,_,J?$&&$.length>0?r.a.createElement(H.a,{resultsToDisplay:$,hasMore:B||R,doNext:Z}):r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"Sorry... We Haven't Found What You Are Looking For.")):r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"What's Your Next Story?")))};t.default=function(){return r.a.createElement(c.a,{maxWidth:"md"},r.a.createElement(o.a,{variant:"h1",gutterBottom:!0},"Explore Your Next Story!"),r.a.createElement(Y,null))}}}]);
//# sourceMappingURL=14.10e75296.chunk.js.map