(this["webpackJsonpnext-story"]=this["webpackJsonpnext-story"]||[]).push([[5],{104:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o);n(104),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(150),u=n(94),l=Object(u.a)({typography:{h1:{fontSize:32,fontFamily:'"Cambria Math", "Roboto", "Helvetica", "Arial", sans-serif'},h2:{fontSize:28},h3:{fontSize:24},h4:{fontSize:20},h5:{fontSize:16},h6:{fontSize:12}}}),s=n(30),f=n(44),d=n(73),m=n(52),b=n(53),h=n(60),p=n(59),v=n(9),g=n(84),E=n(141),O=n(143),j=function(){return r.a.createElement(E.a,null,r.a.createElement(O.a,{variant:"h3"},"Loading..."))},y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.load,n=Object(g.a)(e,["load"]),o=Object(a.lazy)((function(){return t()}));return r.a.createElement(a.Suspense,{fallback:r.a.createElement(j,null)},r.a.createElement(o,n))}}]),n}(r.a.Component),k=function(e){var t=e.component,n=sessionStorage.getItem("NS-session-data"),a=n&&JSON.parse(n),o=null===a||void 0===a?void 0:a.expiry,c=new Date(o),i=o&&c>new Date;if(i){var u=c.setSeconds(c.getSeconds()+3599);a.expiry=u,sessionStorage.setItem("NS-session-data",JSON.stringify(a))}else sessionStorage.removeItem("NS-session-data");for(var l=arguments.length,s=new Array(l>1?l-1:0),f=1;f<l;f++)s[f-1]=arguments[f];return r.a.createElement(v.b,Object.assign({},s,{render:function(e){return i?r.a.createElement(t,e):r.a.createElement(v.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},x=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.d,null,r.a.createElement(k,{exact:!0,key:"home",path:"/",component:function(e){return r.a.createElement(y,Object.assign({load:function(){return Promise.all([n.e(0),n.e(3),n.e(10)]).then(n.bind(null,360))}},e))}}),r.a.createElement(k,{exact:!0,key:"profile",path:"/profile",component:function(e){return r.a.createElement(y,Object.assign({load:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(9)]).then(n.bind(null,359))}},e))}}),r.a.createElement(k,{exact:!0,key:"singleSearchResult",path:"/searchResult/:params",component:function(e){return r.a.createElement(y,Object.assign({load:function(){return Promise.all([n.e(0),n.e(16),n.e(13)]).then(n.bind(null,362))}},e))}}),r.a.createElement(v.b,{exact:!0,key:"login",path:"/login",render:function(e){return r.a.createElement(y,Object.assign({load:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(14)]).then(n.bind(null,363))}},e))}}),r.a.createElement(v.b,{exact:!0,key:"signup",path:"/signup",render:function(e){return r.a.createElement(y,Object.assign({load:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(15)]).then(n.bind(null,364))}},e))}}),r.a.createElement(k,{exact:!0,key:"nextStoryTagPage",path:"/allStoryTags",component:function(e){return r.a.createElement(y,Object.assign({load:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,356))}},e))}}),r.a.createElement(k,{exact:!0,key:"mediaPage",path:"/:mediaType/:id",component:function(e){return r.a.createElement(y,Object.assign({load:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(8),n.e(11)]).then(n.bind(null,358))}},e))}}),r.a.createElement(k,{exact:!0,key:"notFound",path:"*",component:function(e){return r.a.createElement(y,Object.assign({load:function(){return n.e(17).then(n.bind(null,357))}},e))}})))}}]),a}(r.a.Component),S=n(36),w=n(23),I=n(18),P=n(144),C=n(154),T=n(152),_=n(156),N=n(146),z=n(122),R=n(157),A=n(147),L=n(148),D=n(149),B=n(69),F=n.n(B),M=n(92),J=n.n(M),W=n(93),U=n.n(W);function q(){var e=Object(w.a)(["\n"]);return q=function(){return e},e}function G(){var e=Object(w.a)(["\n    background-color: white;\n    padding-left: 5px;\n"]);return G=function(){return e},e}function H(){var e=Object(w.a)(["\n"]);return H=function(){return e},e}function Q(){var e=Object(w.a)(["\n"]);return Q=function(){return e},e}function V(){var e=Object(w.a)(["\n"]);return V=function(){return e},e}function $(){var e=Object(w.a)(["\n    display: flex;\n"]);return $=function(){return e},e}function K(){var e=Object(w.a)(["\n"]);return K=function(){return e},e}function X(){var e=Object(w.a)(["\n    flex: 1;\n"]);return X=function(){return e},e}function Y(){var e=Object(w.a)(["\n    color: white;\n    text-decoration: none;\n"]);return Y=function(){return e},e}function Z(){var e=Object(w.a)(["\n    top: 0;\n    left: 0;\n    width: 100%;\n"]);return Z=function(){return e},e}var ee=Object(I.b)(P.a)(Z()),te=I.b.a(Y()),ne=I.b.div(X()),ae=Object(I.b)(C.a)(K()),re=I.b.div($()),oe=Object(I.b)(C.a)(V()),ce=Object(I.b)(C.a)(Q()),ie=Object(I.b)(T.a)(H()),ue=Object(I.b)(_.a)(G()),le=Object(I.b)(N.a)(q()),se=function(){var e=r.a.useState(!1),t=Object(S.a)(e,2),n=t[0],o=t[1],c=r.a.useState(null),i=Object(S.a)(c,2),u=i[0],l=i[1],s=r.a.useState(null),f=Object(S.a)(s,2),d=f[0],m=f[1],b=r.a.useState(""),h=Object(S.a)(b,2),p=h[0],g=h[1],E=Object(v.g)();Object(a.useEffect)((function(){switch(n){case"explore":break;case"tags":E.push("/allStoryTags");break;case"logout":E.push("/login");break;case"profile":E.push("/profile")}}),[E,n]);var O=Boolean(u),j=Boolean(d),y=function(){m(null)},k=function(e,t){l(null),o(t),y()},x=r.a.createElement(z.a,{anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},id:"desktop-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:O,onClose:function(e){l(null),y()}},r.a.createElement(R.a,{onClick:function(e){return k(0,"logout")}},"Logout")),w=r.a.createElement(z.a,{anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},id:"mobile-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:j,onClose:y},r.a.createElement(R.a,{onClick:function(e){return k(0,"tags")}},"Tags"),r.a.createElement(R.a,{onClick:function(e){return k(0,"explore")}},"Explore"),r.a.createElement(R.a,{onClick:function(e){return k(0,"profile")}},"Profile"),r.a.createElement(R.a,{onClick:function(e){return k(0,"logout")}},"Logout"));return r.a.createElement(ee,null,r.a.createElement(A.a,null,r.a.createElement(te,{href:"/"},"Next Story"),r.a.createElement(ae,{smDown:!0},r.a.createElement(ie,{variant:"fullWidth",value:("tags"===n||"explore"===n)&&n,"aria-label":"nav items tabs",onChange:function(e,t){o(t)}},r.a.createElement(L.a,{component:"a",label:"Tags",value:"tags"}),r.a.createElement(L.a,{component:"a",label:"Explore",value:"explore"}))),r.a.createElement(ne,null),r.a.createElement(re,null,r.a.createElement(ue,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"},onChange:function(e){g(e.target.value)}}),r.a.createElement(le,{onClick:function(){E.push("/searchResult/param?singleQueryType=searchBar&query=".concat(p))}},r.a.createElement(J.a,null))),r.a.createElement(ne,null),r.a.createElement(oe,{smDown:!0},r.a.createElement(D.a,{edge:"end","aria-label":"profile","aria-haspopup":"true",color:"inherit",onClick:function(){return E.push("/profile")}},r.a.createElement(U.a,null)),r.a.createElement(D.a,{edge:"end","aria-label":"logout","aria-controls":"desktop-menu","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit"},r.a.createElement(F.a,null))),r.a.createElement(ce,{mdUp:!0},r.a.createElement(D.a,{"aria-label":"show more","aria-controls":"mobile-menu","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},r.a.createElement(F.a,null)))),w,x)};var fe=function(){return r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement(x,null))},de=n(62),me=n(14),be=n(35),he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.d:var n=[],a={};e.forEach((function(e){if(e.userId!==t.userId)n.push(e);else{var r=Object(me.a)(Object(me.a)({},e),{},{userName:e.userName,userId:e.userId,text:t.text,datePosted:t.datePosted});a=r}}));var r=[a].concat(n);return r;case be.a:var o=e.filter((function(e){return t.userId===e.userId}));if(0===o.length){var c={userName:t.userName,userId:t.userId,text:t.text,datePosted:t.datePosted},i=[c].concat(Object(de.a)(e));return i}return e.map((function(e){return e.userId===t.userId?Object(me.a)(Object(me.a)({},e),{},{text:t.text,datePosted:t.datePosted}):e}));case be.c:var u=[];return e.forEach((function(e){e.userId===t.userId?void 0!==e.rating&&0!==e.rating&&u.push(Object(me.a)(Object(me.a)({},e),{},{text:""})):u.push(e)})),[].concat(u);case be.e:return t.reviewsArray;case be.b:var l=!1,s=[];if(e.forEach((function(e){e.userId===t.userId?(l=!0,(""!==e.text||0!==t.rating&&void 0!==t.rating)&&s.push(Object(me.a)(Object(me.a)({},e),{},{rating:t.rating}))):s.push(e)})),!l){var f={userId:t.userId,userName:t.userName,text:"",datePosted:"",rating:t.rating};s=[f].concat(Object(de.a)(e))}return s;default:return e}},pe=n(63),ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe.a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.c:return t.filterName;default:return e}},ge=n(83),Ee={avatar:"",booksRead:[],email:"",favoriteAuthors:[],favoriteBooks:[],favoriteDirectors:[],favoriteGenres:[],favoriteMovies:[],favoriteNextStoryTags:[],message:"",moviesWatched:[],name:"",readLater:[],type:"",userId:"",watchLater:[],_id:""},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.a:return Object(me.a)({},t.profile);default:return e}},je=n(65),ye={favorites:{books:[],movies:[]},later:{books:[],movies:[]}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je.a:return Object(me.a)(Object(me.a)({},e),{},{favorites:t.data});case je.b:return Object(me.a)(Object(me.a)({},e),{},{later:t.data});default:return e}},xe=Object(s.b)({profile:Oe,reviewRatings:he,homePageFilterReducer:ve,booksMovies:ke}),Se=Object(s.c)(xe);c.a.render(r.a.createElement(d.a,{store:Se},r.a.createElement(i.a,{theme:l},r.a.createElement(I.a,{theme:l},r.a.createElement(f.a,null,r.a.createElement(fe,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return i}));var a="add_review",r="delete_review",o="edit_review",c="load_reviews_from_db",i="change_rating"},63:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c}));var a="change_home_page_filter",r="all",o="movies",c="books"},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="UPDATE_FAVORITES",r="UPDATE_LATER_LIST"},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="SET_PROFILE"},99:function(e,t,n){e.exports=n(111)}},[[99,6,7]]]);
//# sourceMappingURL=main.2b12eae7.chunk.js.map