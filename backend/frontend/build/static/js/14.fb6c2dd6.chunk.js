(this["webpackJsonpnext-story"]=this["webpackJsonpnext-story"]||[]).push([[14],{157:function(r,e,t){"use strict";var o=t(22),n=t(0),p=t.n(n),a=t(138),i=t(17);function c(){var r=Object(o.a)(["\n    margin-top: 85px;\n"]);return c=function(){return r},r}var s=Object(i.b)(a.a)(c());e.a=function(r){return p.a.createElement(s,{maxWidth:r.maxWidth},r.children)}},329:function(r,e,t){"use strict";var o=t(28),n=t(1),p=(t(3),t(45));var a=function(r){var e=function(e){var t=r(e);return e.css?Object(n.a)(Object(n.a)({},Object(p.a)(t,r(Object(n.a)({theme:e.theme},e.css)))),function(r,e){var t={};return Object.keys(r).forEach((function(o){-1===e.indexOf(o)&&(t[o]=r[o])})),t}(e.css,[r.filterProps])):t};return e.propTypes={},e.filterProps=["css"].concat(Object(o.a)(r.filterProps)),e};var i=function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var o=function(r){return e.reduce((function(e,t){var o=t(r);return o?Object(p.a)(e,o):e}),{})};return o.propTypes={},o.filterProps=e.reduce((function(r,e){return r.concat(e.filterProps)}),[]),o},c=t(7),s=t(73);function u(r,e){return e&&"string"===typeof e?e.split(".").reduce((function(r,e){return r&&r[e]?r[e]:null}),r):null}var f=function(r){var e=r.prop,t=r.cssProperty,o=void 0===t?r.prop:t,n=r.themeKey,p=r.transform,a=function(r){if(null==r[e])return null;var t=r[e],a=u(r.theme,n)||{};return Object(s.a)(r,t,(function(r){var e;return"function"===typeof a?e=a(r):Array.isArray(a)?e=a[r]||r:(e=u(a,r)||r,p&&(e=p(e))),!1===o?e:Object(c.a)({},o,e)}))};return a.propTypes={},a.filterProps=[e],a};function l(r){return"number"!==typeof r?r:"".concat(r,"px solid")}var m=i(f({prop:"border",themeKey:"borders",transform:l}),f({prop:"borderTop",themeKey:"borders",transform:l}),f({prop:"borderRight",themeKey:"borders",transform:l}),f({prop:"borderBottom",themeKey:"borders",transform:l}),f({prop:"borderLeft",themeKey:"borders",transform:l}),f({prop:"borderColor",themeKey:"palette"}),f({prop:"borderRadius",themeKey:"shape"})),d=i(f({prop:"displayPrint",cssProperty:!1,transform:function(r){return{"@media print":{display:r}}}}),f({prop:"display"}),f({prop:"overflow"}),f({prop:"textOverflow"}),f({prop:"visibility"}),f({prop:"whiteSpace"})),h=i(f({prop:"flexBasis"}),f({prop:"flexDirection"}),f({prop:"flexWrap"}),f({prop:"justifyContent"}),f({prop:"alignItems"}),f({prop:"alignContent"}),f({prop:"order"}),f({prop:"flex"}),f({prop:"flexGrow"}),f({prop:"flexShrink"}),f({prop:"alignSelf"}),f({prop:"justifyItems"}),f({prop:"justifySelf"})),y=i(f({prop:"gridGap"}),f({prop:"gridColumnGap"}),f({prop:"gridRowGap"}),f({prop:"gridColumn"}),f({prop:"gridRow"}),f({prop:"gridAutoFlow"}),f({prop:"gridAutoColumns"}),f({prop:"gridAutoRows"}),f({prop:"gridTemplateColumns"}),f({prop:"gridTemplateRows"}),f({prop:"gridTemplateAreas"}),f({prop:"gridArea"})),g=i(f({prop:"position"}),f({prop:"zIndex",themeKey:"zIndex"}),f({prop:"top"}),f({prop:"right"}),f({prop:"bottom"}),f({prop:"left"})),b=i(f({prop:"color",themeKey:"palette"}),f({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),v=f({prop:"boxShadow",themeKey:"shadows"});function j(r){return r<=1?"".concat(100*r,"%"):r}var x=f({prop:"width",transform:j}),O=f({prop:"maxWidth",transform:j}),w=f({prop:"minWidth",transform:j}),K=f({prop:"height",transform:j}),P=f({prop:"maxHeight",transform:j}),N=f({prop:"minHeight",transform:j}),E=(f({prop:"size",cssProperty:"width",transform:j}),f({prop:"size",cssProperty:"height",transform:j}),i(x,O,w,K,P,N,f({prop:"boxSizing"}))),S=t(152),T=i(f({prop:"fontFamily",themeKey:"typography"}),f({prop:"fontSize",themeKey:"typography"}),f({prop:"fontStyle",themeKey:"typography"}),f({prop:"fontWeight",themeKey:"typography"}),f({prop:"letterSpacing"}),f({prop:"lineHeight"}),f({prop:"textAlign"})),A=t(2),C=t(0),W=t.n(C),k=t(4),z=t(19),R=t.n(z),B=t(148);function I(r,e){var t={};return Object.keys(r).forEach((function(o){-1===e.indexOf(o)&&(t[o]=r[o])})),t}var G=t(47),D=function(r){var e=function(r){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.name,p=Object(A.a)(t,["name"]);var a,i=o,c="function"===typeof e?function(r){return{root:function(t){return e(Object(n.a)({theme:r},t))}}}:{root:e},s=Object(B.a)(c,Object(n.a)({Component:r,name:o||r.displayName,classNamePrefix:i},p));e.filterProps&&(a=e.filterProps,delete e.filterProps),e.propTypes&&(e.propTypes,delete e.propTypes);var u=W.a.forwardRef((function(e,t){var o=e.children,p=e.className,i=e.clone,c=e.component,u=Object(A.a)(e,["children","className","clone","component"]),f=s(e),l=Object(k.a)(f.root,p),m=u;if(a&&(m=I(m,a)),i)return W.a.cloneElement(o,Object(n.a)({className:Object(k.a)(o.props.className,l)},m));if("function"===typeof o)return o(Object(n.a)({className:l},m));var d=c||r;return W.a.createElement(d,Object(n.a)({ref:t,className:l},m),o)}));return R()(u,r),u}}(r);return function(r,t){return e(r,Object(n.a)({defaultTheme:G.a},t))}},H=a(i(m,d,h,y,g,b,v,E,S.b,T)),F=D("div")(H,{name:"MuiBox"});e.a=F},343:function(r,e,t){"use strict";t.r(e);var o=t(42),n=t(22),p=t(0),a=t.n(p),i=t(157),c=t(159),s=t.n(c),u=t(140),f=t(329);function l(){var r=Object(n.a)(["\n    border-top: 2px solid ",";\n    border-bottom: ",";\n    min-height: 50px;\n    padding: 10px;\n"]);return l=function(){return r},r}var m=t(17).b.div(l(),(function(r){return r.theme.palette.grey[400]}),(function(r){var e=r.theme;return r.last&&"2px solid ".concat(e.palette.grey[400])})),d=window.location.protocol+"//"+window.location.host;e.default=function(){var r=Object(p.useState)([{tagId:"",tagName:"",tagDescription:""}]),e=Object(o.a)(r,2),t=e[0],n=e[1];return Object(p.useEffect)((function(){s.a.get(d+"/nextStoryTags").then((function(r){var e=r.data.sort((function(r,e){return r.tagName<e.tagName?-1:r.tagName>e.tagName?1:0}));n(e)})).catch((function(r){console.log("Error getting all tags",r)}))}),[]),a.a.createElement(i.a,{maxWidth:"md"},a.a.createElement(u.a,{variant:"h1",gutterBottom:!0},"All our story tags!"),a.a.createElement(u.a,{variant:"h3",color:"primary",gutterBottom:!0},"Use these tags to filter stories, or add them to stories yourself"),t.map((function(r,e){return a.a.createElement(m,{key:e,last:e+1===t.length},a.a.createElement(f.a,{fontWeight:"fontWeightBold",fontSize:24,mb:1},r.tagName),a.a.createElement(u.a,null,r.tagDescription))})))}}}]);
//# sourceMappingURL=14.fb6c2dd6.chunk.js.map