(this["webpackJsonpnext-story"]=this["webpackJsonpnext-story"]||[]).push([[16],{164:function(e,r,t){"use strict";var o=t(24),n=t(0),a=t.n(n),i=t(251),p=t(19);function c(){var e=Object(o.a)(["\n    margin-top: 85px;\n    margin-bottom: 85px;\n"]);return c=function(){return e},e}var s=Object(p.b)(i.a)(c());r.a=function(e){return a.a.createElement(s,{maxWidth:e.maxWidth},e.children)}},202:function(e,r,t){"use strict";var o=t(40),n=t(24),a=t(19),i=t(0),p=t.n(i);function c(){var e=Object(n.a)(["\n    background-color: ",";\n    border: none;\n    outline: none;\n    font-size: 16px;\n    border-radius: 5px;\n    padding: 5px;\n    cursor: pointer;\n    margin: 5px;\n    color: ",";\n"]);return c=function(){return e},e}var s=a.b.button(c(),(function(e){var r=e.theme;return e.isAddedToUser?r.palette.grey[300]:r.palette.primary.light}),(function(e){return e.isAddedToUser?"black":"white"}));r.a=function(e){var r=e.addLabel,t=e.removeLabel,n=e.isAdded,a=e.toBackendOnClick,c=Object(i.useState)(!1),u=Object(o.a)(c,2),l=u[0],f=u[1];Object(i.useEffect)((function(){f(n)}),[n]);return p.a.createElement(s,{isAddedToUser:l,onClick:function(){return f(!l),void a()}},l?t:r)}},227:function(e,r,t){"use strict";var o=t(1),n=t(2),a=t(0),i=(t(3),t(4)),p=t(9),c=t(5),s=t(80),u=t(11),l=t(280),f=a.forwardRef((function(e,r){var t=e.classes,c=e.className,f=e.color,d=void 0===f?"primary":f,m=e.component,b=void 0===m?"a":m,h=e.onBlur,v=e.onFocus,g=e.TypographyClasses,y=e.underline,O=void 0===y?"hover":y,j=e.variant,x=void 0===j?"inherit":j,S=Object(n.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),w=Object(s.a)(),T=w.isFocusVisible,k=w.onBlurVisible,N=w.ref,A=a.useState(!1),C=A[0],E=A[1],P=Object(u.a)(r,N);return a.createElement(l.a,Object(o.a)({className:Object(i.a)(t.root,t["underline".concat(Object(p.a)(O))],c,C&&t.focusVisible,"button"===b&&t.button),classes:g,color:d,component:b,onBlur:function(e){C&&(k(),E(!1)),h&&h(e)},onFocus:function(e){T(e)&&E(!0),v&&v(e)},ref:P,variant:x},S))}));r.a=Object(c.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(f)},238:function(e,r,t){"use strict";var o=t(28),n=t(1),a=(t(3),t(49));var i=function(e){var r=function(r){var t=e(r);return r.css?Object(n.a)(Object(n.a)({},Object(a.a)(t,e(Object(n.a)({theme:r.theme},r.css)))),function(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}(r.css,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css"].concat(Object(o.a)(e.filterProps)),r};var p=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o=function(e){return r.reduce((function(r,t){var o=t(e);return o?Object(a.a)(r,o):r}),{})};return o.propTypes={},o.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),o},c=t(10),s=t(78);function u(e,r){return r&&"string"===typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var l=function(e){var r=e.prop,t=e.cssProperty,o=void 0===t?e.prop:t,n=e.themeKey,a=e.transform,i=function(e){if(null==e[r])return null;var t=e[r],i=u(e.theme,n)||{};return Object(s.a)(e,t,(function(e){var r;return"function"===typeof i?r=i(e):Array.isArray(i)?r=i[e]||e:(r=u(i,e)||e,a&&(r=a(r))),!1===o?r:Object(c.a)({},o,r)}))};return i.propTypes={},i.filterProps=[r],i};function f(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var d=p(l({prop:"border",themeKey:"borders",transform:f}),l({prop:"borderTop",themeKey:"borders",transform:f}),l({prop:"borderRight",themeKey:"borders",transform:f}),l({prop:"borderBottom",themeKey:"borders",transform:f}),l({prop:"borderLeft",themeKey:"borders",transform:f}),l({prop:"borderColor",themeKey:"palette"}),l({prop:"borderRadius",themeKey:"shape"})),m=p(l({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),l({prop:"display"}),l({prop:"overflow"}),l({prop:"textOverflow"}),l({prop:"visibility"}),l({prop:"whiteSpace"})),b=p(l({prop:"flexBasis"}),l({prop:"flexDirection"}),l({prop:"flexWrap"}),l({prop:"justifyContent"}),l({prop:"alignItems"}),l({prop:"alignContent"}),l({prop:"order"}),l({prop:"flex"}),l({prop:"flexGrow"}),l({prop:"flexShrink"}),l({prop:"alignSelf"}),l({prop:"justifyItems"}),l({prop:"justifySelf"})),h=p(l({prop:"gridGap"}),l({prop:"gridColumnGap"}),l({prop:"gridRowGap"}),l({prop:"gridColumn"}),l({prop:"gridRow"}),l({prop:"gridAutoFlow"}),l({prop:"gridAutoColumns"}),l({prop:"gridAutoRows"}),l({prop:"gridTemplateColumns"}),l({prop:"gridTemplateRows"}),l({prop:"gridTemplateAreas"}),l({prop:"gridArea"})),v=p(l({prop:"position"}),l({prop:"zIndex",themeKey:"zIndex"}),l({prop:"top"}),l({prop:"right"}),l({prop:"bottom"}),l({prop:"left"})),g=p(l({prop:"color",themeKey:"palette"}),l({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),y=l({prop:"boxShadow",themeKey:"shadows"});function O(e){return e<=1?"".concat(100*e,"%"):e}var j=l({prop:"width",transform:O}),x=l({prop:"maxWidth",transform:O}),S=l({prop:"minWidth",transform:O}),w=l({prop:"height",transform:O}),T=l({prop:"maxHeight",transform:O}),k=l({prop:"minHeight",transform:O}),N=(l({prop:"size",cssProperty:"width",transform:O}),l({prop:"size",cssProperty:"height",transform:O}),p(j,x,S,w,T,k,l({prop:"boxSizing"}))),A=t(158),C=p(l({prop:"fontFamily",themeKey:"typography"}),l({prop:"fontSize",themeKey:"typography"}),l({prop:"fontStyle",themeKey:"typography"}),l({prop:"fontWeight",themeKey:"typography"}),l({prop:"letterSpacing"}),l({prop:"lineHeight"}),l({prop:"textAlign"})),E=t(2),P=t(0),K=t.n(P),B=t(4),I=t(20),R=t.n(I),z=t(154);function W(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}var F=t(53),D=function(e){var r=function(e){return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.name,a=Object(E.a)(t,["name"]);var i,p=o,c="function"===typeof r?function(e){return{root:function(t){return r(Object(n.a)({theme:e},t))}}}:{root:r},s=Object(z.a)(c,Object(n.a)({Component:e,name:o||e.displayName,classNamePrefix:p},a));r.filterProps&&(i=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var u=K.a.forwardRef((function(r,t){var o=r.children,a=r.className,p=r.clone,c=r.component,u=Object(E.a)(r,["children","className","clone","component"]),l=s(r),f=Object(B.a)(l.root,a),d=u;if(i&&(d=W(d,i)),p)return K.a.cloneElement(o,Object(n.a)({className:Object(B.a)(o.props.className,f)},d));if("function"===typeof o)return o(Object(n.a)({className:f},d));var m=c||e;return K.a.createElement(m,Object(n.a)({ref:t,className:f},d),o)}));return R()(u,e),u}}(e);return function(e,t){return r(e,Object(n.a)({defaultTheme:F.a},t))}},L=i(p(d,m,b,h,v,g,y,N,A.b,C)),H=D("div")(L,{name:"MuiBox"});r.a=H},386:function(e,r,t){"use strict";t.r(r);var o=t(40),n=t(24),a=t(0),i=t.n(a),p=t(164),c=t(162),s=t.n(c),u=t(227),l=t(280),f=t(238),d=t(19),m=t(202),b=t(8);function h(){var e=Object(n.a)(["\n    &:hover {\n        cursor: pointer;\n    }\n"]);return h=function(){return e},e}function v(){var e=Object(n.a)(["\n    border-top: 2px solid ",";\n    border-bottom: ",";\n    min-height: 50px;\n    padding: 10px;\n"]);return v=function(){return e},e}var g=d.b.div(v(),(function(e){return e.theme.palette.grey[400]}),(function(e){var r=e.theme;return e.last&&"2px solid ".concat(r.palette.grey[400])})),y=Object(d.b)(u.a)(h());r.default=function(){var e=Object(a.useState)([]),r=Object(o.a)(e,2),t=r[0],n=r[1],c=Object(a.useState)([]),u=Object(o.a)(c,2),d=u[0],h=u[1],v=Object(b.g)();Object(a.useEffect)((function(){s.a.get("/nextStoryTags").then((function(e){var r=e.data;n(r)})).catch((function(e){}))}),[]),Object(a.useEffect)((function(){var e=sessionStorage.getItem("NS-session-data"),r=e&&JSON.parse(e),t=null===r||void 0===r?void 0:r.userId;s.a.get("/users/favoriteNSTags/".concat(t)).then((function(e){var r=e.data.map((function(e){return e.tagId}));h(r)})).catch((function(e){}))}),[]);return i.a.createElement(p.a,{maxWidth:"md"},i.a.createElement(l.a,{variant:"h1",gutterBottom:!0},"All our story tags!"),i.a.createElement(l.a,{variant:"h3",color:"primary",gutterBottom:!0},"Use these tags to filter stories, or add them to stories yourself"),t.map((function(e,r){var o=d.filter((function(r){return e.tagId===r})).length>0,n=o;return i.a.createElement(g,{key:r,last:r+1===t.length},i.a.createElement(f.a,{fontWeight:"fontWeightBold",fontSize:24,mb:1,display:"flex",justifyContent:"space-between"},i.a.createElement(y,{color:"textPrimary",onClick:function(){return r=e.tagId,void v.push("/searchResult/param?singleQueryType=tag&query=".concat(r));var r}},e.tagName),i.a.createElement(m.a,{addLabel:"Add to favorites",removeLabel:"Remove from favorites",isAdded:o,toBackendOnClick:function(){return function(e,r){var t=sessionStorage.getItem("NS-session-data"),o=t&&JSON.parse(t),n=null===o||void 0===o?void 0:o.userId;s.a.put("/users/favoriteNSTags/putToFavorites/".concat(n,"/").concat(r),{tag:e}).then((function(e){})).catch((function(e){}))}(e,n)}})),i.a.createElement(l.a,null,e.tagDescription))})))}}}]);
//# sourceMappingURL=16.c3a8c50e.chunk.js.map