/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/base/Log"],function(e,s){"use strict";var r=e.extend("sap.ui.core.message.MessageParser",{metadata:{publicMethods:["parse","setProcessor"]},constructor:function(){this._processor=null}});r.prototype.setProcessor=function(e){this._processor=e;return this};r.prototype.getProcessor=function(){return this._processor};r.prototype.parse=function(e){s.error("MessageParser: parse-method must be implemented in the specific parser class. Messages "+"have been ignored.")};return r});