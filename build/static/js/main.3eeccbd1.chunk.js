(this["webpackJsonppractise-app"]=this["webpackJsonppractise-app"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),r=t(6),s=t.n(r),i=(t(12),t(2));t.p,t(13);var l=t(7),o=(t(14),t(0)),j=function(){return Object(o.jsx)("span",{className:"game-symbol",children:"\xd7"})},u=function(){return Object(o.jsx)("span",{className:"game-symbol",children:"0"})},b=function(e){var n=e.playerInfo;return Object(o.jsx)("div",{className:"banner-layout",children:Object(o.jsx)("div",{className:"winner-banner",children:Object(o.jsxs)("h1",{children:[n.player," Wins the Match!!!"]})})})},O=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]],f="PLAYER - 1",h="PLAYER - 2",d={ZERO:{label:"ZERO",value:0},CROSS:{label:"CROSS",value:1}},p=function(){var e=Object(c.useState)(O),n=Object(i.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(!1),s=Object(i.a)(r,2),p=s[0],g=s[1],x=Object(c.useState)({player:f,sign:d.ZERO}),m=Object(i.a)(x,2),v=m[0],y=m[1],S=Object(c.useState)(null),R=Object(i.a)(S,2),I=R[0],E=R[1];Object(c.useEffect)((function(){I&&(!function(e,n){for(var t=n.rowIndex,c=n.colIndex,a=e[t][c],r=!0,s=!0,i=!1,l=!1,o=0;o<e[t].length;o++)if(e[t][o]!==a){r=!1;break}for(var j=0;j<e[c].length;j++)if(e[j][c]!==a){s=!1;break}if(t===c){for(var u=e.length-1,b=e.length-1;u>=0&&b>=0;){if(e[u][b]!==a){i=!1;break}u-=1,b-=1}u<0&&b<0&&(i=!0)}var O=0,f=e.length-1;if(e.length-1-t===c){for(;O<e.length&&f>=0;){if(e[O][f]!==a){l=!1;break}O+=1,f-=1}O===e.length&&-1===f&&(l=!0)}return r||s||i||l}(t,I)?y((function(e){return e.player===f?{player:h,sign:d.CROSS}:{player:f,sign:d.ZERO}})):g(!0))}),[t,I]);return Object(o.jsxs)("div",{className:"game-layout",children:[Object(o.jsx)("h1",{children:"Tic Tac Toe"}),Object(o.jsx)("div",{className:"game-board",children:t.map((function(e,n){return Object(o.jsx)(o.Fragment,{children:e.map((function(e,t){return Object(o.jsx)("div",{className:"cell",onClick:function(){return function(e,n){a((function(t){return t[e][n]=v.sign.value,Object(l.a)(t)})),E({rowIndex:e,colIndex:n})}(n,t)},children:-1!==e&&(0===e?Object(o.jsx)(u,{}):Object(o.jsx)(j,{}))},"".concat(n,"-").concat(t))}))})}))}),Object(o.jsx)("footer",{children:Object(o.jsx)("h3",{children:"".concat(v.player," turn : Please place a ").concat(v.sign.label)})}),p&&Object(o.jsx)(b,{playerInfo:v})]})};var g=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"React Interview Problems"}),Object(o.jsx)(p,{})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.3eeccbd1.chunk.js.map