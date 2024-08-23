import{r as u,g as d}from"./index-DJO9vBfz.js";var c={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=u,_=Symbol.for("react.element"),v=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,R=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function l(n,r,s){var o,i={},e=null,t=null;s!==void 0&&(e=""+s),r.key!==void 0&&(e=""+r.key),r.ref!==void 0&&(t=r.ref);for(o in r)x.call(r,o)&&!E.hasOwnProperty(o)&&(i[o]=r[o]);if(n&&n.defaultProps)for(o in r=n.defaultProps,r)i[o]===void 0&&(i[o]=r[o]);return{$$typeof:_,type:n,key:e,ref:t,props:i,_owner:R.current}}p.Fragment=v;p.jsx=l;p.jsxs=l;c.exports=p;var f=c.exports,m={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var r={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=i(e,o(a)))}return e}function o(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)r.call(e,a)&&e[a]&&(t=i(t,a));return t}function i(e,t){return t?e?e+" "+t:e+t:e}n.exports?(s.default=s,n.exports=s):window.classNames=s})()})(m);var O=m.exports;const S=d(O);function h({primaryColor:n="#000",children:r}){return u.useEffect(()=>{document.body.style.setProperty("--color-primary",n)},[n]),f.jsx(f.Fragment,{children:r})}h.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{primaryColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#000"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{h as T,S as c,f as j};
