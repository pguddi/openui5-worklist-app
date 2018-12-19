/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/base/Object","sap/ui/thirdparty/URI","sap/base/Log","sap/ui/dom/includeStylesheet","sap/ui/thirdparty/jquery"],function(e,t,a,r,n,s){"use strict";var i=150;var h=t.extend("sap.ui.core.ThemeCheck",{constructor:function(e){this._oCore=e;this._iCount=0;this._CUSTOMCSSCHECK=/\.sapUiThemeDesignerCustomCss/i;this._CUSTOMID="sap-ui-core-customcss";this._customCSSAdded=false;this._themeCheckedForCustom=null;this._sFallbackTheme=null;this._mThemeFallback={};this._oThemeMetaDataCheckElement=null},getInterface:function(){return this},fireThemeChangedEvent:function(e){u(this);C.apply(this,[true]);if(!e&&!this._sThemeCheckId){this._oCore.fireThemeChanged({theme:this._oCore.getConfiguration().getTheme()})}}});h.themeLoaded=false;function o(e){try{return e.cssRules}catch(e){return null}}function l(e){var t=o(e);return!!t&&t.length>0}h.checkStyle=function(e,t){var a=document.getElementById(e);try{var n=false,s=false,i=false,h=false;n=!a;s=!!(a&&(a.getAttribute("data-sap-ui-ready")==="true"||a.getAttribute("data-sap-ui-ready")==="false"));i=!!(a&&a.sheet&&a.sheet.href===a.href&&l(a.sheet));h=!!(a&&a.innerHTML&&a.innerHTML.length>0);var o=n||i||h||s;if(t){r.debug("ThemeCheck: "+e+": "+o+" (noLinkElement: "+n+", sheet: "+i+", innerHtml: "+h+", linkElementFinishedLoading: "+s+")")}return o}catch(a){if(t){r.error("ThemeCheck: "+e+": Error during check styles '"+e+"'",a)}}return false};function u(e){h.themeLoaded=false;if(e._sThemeCheckId){clearTimeout(e._sThemeCheckId);e._sThemeCheckId=null;e._iCount=0;e._sFallbackTheme=null;e._mThemeFallback={};if(e._oThemeMetaDataCheckElement&&e._oThemeMetaDataCheckElement.parentNode){e._oThemeMetaDataCheckElement.parentNode.removeChild(e._oThemeMetaDataCheckElement);e._oThemeMetaDataCheckElement=null}}}function c(e){var t=e._oCore.getLoadedLibraries();var a=e._oCore.getConfiguration().getTheme();var i=e._oCore._getThemePath("sap.ui.core",a)+"custom.css";var o=a.indexOf("sap_")===0||a==="base";var u=true;var c=[];if(!!e._customCSSAdded&&e._themeCheckedForCustom===a){t[e._CUSTOMID]={}}function C(m){var C="sap-ui-theme-"+m;var f=h.checkStyle(C,true);if(f){var g=document.querySelectorAll("link[data-sap-ui-foucmarker='"+C+"']");if(g.length>0){for(var _=0,T=g.length;_<T;_++){g[_].parentNode.removeChild(g[_])}r.debug("ThemeCheck: Old stylesheets removed for library: "+m)}}u=u&&f;if(u){if(e._themeCheckedForCustom!=a){if(!o&&d(e,m)){var k=i;var p=e._oCore._getLibraryCssQueryParams(t["sap.ui.core"]);if(p){k+=p}n(k,e._CUSTOMID);e._customCSSAdded=true;r.warning("ThemeCheck: delivered custom CSS needs to be loaded, Theme not yet applied");e._themeCheckedForCustom=a;u=false;return false}else{var v=s("LINK[id='"+e._CUSTOMID+"']");if(v.length>0){v.remove();r.debug("ThemeCheck: Custom CSS removed")}e._customCSSAdded=false}}}if(!o&&f&&!e._mThemeFallback[m]){var y=document.getElementById(C);if(y&&y.getAttribute("data-sap-ui-ready")==="false"&&!(y.sheet&&l(y.sheet))){c.push(m)}}}s.each(t,C);if(c.length>0){if(!e._sFallbackTheme){if(!e._oThemeMetaDataCheckElement){e._oThemeMetaDataCheckElement=document.createElement("style");s.each(t,function(t){var a="sapThemeMetaData-UI5-"+t.replace(/\./g,"-");e._oThemeMetaDataCheckElement.classList.add(a)});document.head.appendChild(e._oThemeMetaDataCheckElement)}e._sFallbackTheme=m(e._oThemeMetaDataCheckElement)}if(e._sFallbackTheme){c.forEach(function(t){var n="sap-ui-theme-"+t;var s=document.getElementById(n);r.warning("ThemeCheck: Custom theme '"+a+"' could not be loaded for library '"+t+"'. "+"Falling back to its base theme '"+e._sFallbackTheme+"'.");e._oCore._updateThemeUrl(s,e._sFallbackTheme);e._mThemeFallback[t]=true});u=false}}if(!u){r.warning("ThemeCheck: Theme not yet applied.")}else{e._themeCheckedForCustom=a}return u}function m(e){function t(){var t=window.getComputedStyle(e).getPropertyValue("background-image");var a=/\(["']?data:text\/plain;utf-8,(.*?)['"]?\)/i.exec(t);if(!a||a.length<2){return null}var r=a[1];if(r.charAt(0)!=="{"&&r.charAt(r.length-1)!=="}"){try{r=decodeURI(r)}catch(e){}}r=r.replace(/\\"/g,'"');r=r.replace(/%20/g," ");try{return JSON.parse(r)}catch(e){return null}}var a=t();if(a&&a.Extends&&a.Extends[0]){return a.Extends[0]}else{return null}}function d(t,a){var n=window.document.getElementById("sap-ui-theme-"+a);if(!n){return false}var s=window.getComputedStyle(n,":after");var i=s?s.getPropertyValue("content"):null;if(!i&&e.browser.safari){var h=document.documentElement;h.classList.add("sapUiThemeDesignerCustomCss");i=window.getComputedStyle(h,":after").getPropertyValue("content");h.classList.remove("sapUiThemeDesignerCustomCss")}if(i&&i!=="none"){try{if(i[0]==="'"||i[0]==='"'){i=i.substring(1,i.length-1)}return i==="true"}catch(e){r.error("Custom check: Error parsing JSON string for custom.css indication.",e)}}var l=n.sheet?o(n.sheet):null;if(!l||l.length===0){r.warning("Custom check: Failed retrieving a CSS rule from stylesheet "+a);return false}for(var u=0;u<2&&u<l.length;u++){if(t._CUSTOMCSSCHECK.test(l[u].selectorText)){return true}}return false}function C(e){this._iCount++;var t=this._iCount>i;if(!c(this)&&!t){var a;if(this._iCount<=100){a=2}else if(this._iCount<=110){a=500}else{a=1e3}this._sThemeCheckId=setTimeout(C.bind(this),a)}else if(!e){u(this);h.themeLoaded=true;this._oCore.fireThemeChanged({theme:this._oCore.getConfiguration().getTheme()});if(t){r.warning("ThemeCheck: max. check cycles reached.")}}else{h.themeLoaded=true}}return h});