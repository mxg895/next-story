(this["webpackJsonpnext-story"]=this["webpackJsonpnext-story"]||[]).push([[13],{157:function(t,e,n){"use strict";var a=n(22),r=n(0),o=n.n(r),i=n(138),c=n(17);function s(){var t=Object(a.a)(["\n    margin-top: 85px;\n"]);return s=function(){return t},t}var u=Object(c.b)(i.a)(s());e.a=function(t){return o.a.createElement(u,{maxWidth:t.maxWidth},t.children)}},354:function(t,e,n){"use strict";n.r(e);var a=n(42),r=n(22),o=n(0),i=n.n(o),c=n(157),s=n(161),u=n.n(s),l=n(140),d=n(344),f=n(17);function g(){var t=Object(r.a)(["\n    background-color: ",";\n    border: none;\n    outline: none;\n    font-size: 16px;\n    border-radius: 5px;\n    padding: 5px;\n    cursor: pointer;\n    margin: 5px;\n    color: ",";\n"]);return g=function(){return t},t}var m=f.b.button(g(),(function(t){var e=t.theme;return t.isAddedToUser?e.palette.grey[300]:e.palette.primary.light}),(function(t){return t.isAddedToUser?"black":"white"})),p=function(t){var e=t.addLabel,n=t.removeLabel,r=t.isAdded,c=t.toBackendOnClick,s=Object(o.useState)(!1),u=Object(a.a)(s,2),l=u[0],d=u[1];Object(o.useEffect)((function(){d(r)}),[r]);return i.a.createElement(m,{isAddedToUser:l,onClick:function(){return d(!l),void c()}},l?n:e)};function v(){var t=Object(r.a)(["\n    border-top: 2px solid ",";\n    border-bottom: ",";\n    min-height: 50px;\n    padding: 10px;\n"]);return v=function(){return t},t}var b=f.b.div(v(),(function(t){return t.theme.palette.grey[400]}),(function(t){var e=t.theme;return t.last&&"2px solid ".concat(e.palette.grey[400])}));e.default=function(){var t=Object(o.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],s=Object(o.useState)([]),f=Object(a.a)(s,2),g=f[0],m=f[1];Object(o.useEffect)((function(){u.a.get("/nextStoryTags").then((function(t){var e=t.data.sort((function(t,e){return t.tagName<e.tagName?-1:t.tagName>e.tagName?1:0}));r(e)})).catch((function(t){console.log("Error getting all tags",t)}))}),[]),Object(o.useEffect)((function(){var t=sessionStorage.getItem("NS-session-data"),e=t&&JSON.parse(t),n=null===e||void 0===e?void 0:e.userId;u.a.get("/users/favoriteNSTags/".concat(n)).then((function(t){var e=t.data.map((function(t){return t.tagId}));m(e)})).catch((function(t){console.log("Error getting all tags",t)}))}),[]);return i.a.createElement(c.a,{maxWidth:"md"},i.a.createElement(l.a,{variant:"h1",gutterBottom:!0},"All our story tags!"),i.a.createElement(l.a,{variant:"h3",color:"primary",gutterBottom:!0},"Use these tags to filter stories, or add them to stories yourself"),n.map((function(t,e){var a=g.filter((function(e){return t.tagId===e})).length>0,r=a;return i.a.createElement(b,{key:e,last:e+1===n.length},i.a.createElement(d.a,{fontWeight:"fontWeightBold",fontSize:24,mb:1,display:"flex",justifyContent:"space-between"},t.tagName,i.a.createElement(p,{addLabel:"Add to favorites",removeLabel:"Remove from favorites",isAdded:a,toBackendOnClick:function(){return function(t,e){var n=sessionStorage.getItem("NS-session-data"),a=n&&JSON.parse(n),r=null===a||void 0===a?void 0:a.userId;u.a.put("/users/favoriteNSTags/putToFavorites/".concat(r,"/").concat(e),{tag:t}).then((function(t){console.log(t.data)})).catch((function(t){console.log("Error getting all tags",t)}))}(t,r)}})),i.a.createElement(l.a,null,t.tagDescription))})))}}}]);
//# sourceMappingURL=13.5eba96d6.chunk.js.map