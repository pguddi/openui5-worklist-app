/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/routing/Target","./async/Target","./sync/Target","sap/base/Log","sap/base/util/UriParameters"],function(r,t,e,n,a){"use strict";var i=r.extend("sap.m.routing.Target",{constructor:function(i,s,o,u){this._oTargetHandler=u;function c(){if(new a(window.location.href).get("sap-ui-xx-asyncRouting")==="true"){n.warning("Activation of async view loading in routing via url parameter is only temporarily supported and may be removed soon","MobileTarget");return true}return false}if(i._async===undefined){i._async=c()}r.prototype.constructor.apply(this,arguments);var p=i._async?t:e;this._super={};for(var g in p){this._super[g]=this[g];this[g]=p[g]}}});return i});