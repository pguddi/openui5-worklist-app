/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/base/security/encodeCSS"],function(e,t){"use strict";var r=e.GenericTileMode;var i=e.GenericTileScope;var a=e.LoadState;var d={};d.render=function(e,d){var s=d._getTooltipText();var o=d._getAriaText();o="GenericTile"+"\n"+o;var n=d.getHeaderImage();var l=d.hasListeners("press");var w=d.getState();var c=d.getScope();var v=t("sapMGTState"+w);var u=t("sapMGTScope"+c);e.write("<div");e.writeControlData(d);if(s){e.writeAttributeEscaped("title",s)}e.addClass("sapMGT");e.addClass(v);e.addClass(u);if(c!==i.Actions&&d._bShowActionsView){e.addClass("sapMGTScopeActions")}e.addClass(d.getFrameType());if(l){e.writeAttribute("role","button")}else{e.writeAttribute("role","presentation")}e.writeAttributeEscaped("aria-label",o);if(w!==a.Disabled){e.addClass("sapMPointer");e.writeAttribute("tabindex","0")}if(d.getBackgroundImage()){e.write(" style='background-image:url(");e.writeEscaped(d.getBackgroundImage());e.write(");'");e.addClass("sapMGTBackgroundImage")}if(d.getMode()===r.HeaderMode){e.addClass("sapMGTHeaderMode")}e.writeClasses();e.write(">");e.write("<div");e.addClass("sapMGTHdrContent");e.addClass(d.getFrameType());if(s){e.writeAttributeEscaped("title",s)}e.writeClasses();e.write(">");if(n){e.renderControl(d._oImage)}this._renderHeader(e,d);if(d.getSubheader()){this._renderSubheader(e,d)}e.write("</div>");e.write("<div");e.addClass("sapMGTContent");e.writeClasses();e.writeAttribute("id",d.getId()+"-content");e.write(">");var g=d.getTileContent();var C=g.length;for(var p=0;p<C;p++){d._checkFooter(g[p],d);e.renderControl(g[p])}e.write("</div>");if(w!==a.Loaded){this._renderStateOverlay(e,d,s)}if(w!==a.Disabled){this._renderHoverOverlay(e,d);this._renderFocusDiv(e,d)}if(c===i.Actions){this._renderActionsScope(e,d)}e.write("</div>")};d._renderFocusDiv=function(e,t){e.write("<div");e.addClass("sapMGTFocusDiv");e.writeClasses();e.writeAttribute("id",t.getId()+"-focus");e.write(">");e.write("</div>")};d._renderStateOverlay=function(e,t,r){var d=t.getState();e.write("<div");e.addClass("sapMGTOverlay");e.writeClasses();e.writeAttribute("id",t.getId()+"-overlay");if(r){e.writeAttributeEscaped("title",r)}e.write(">");switch(d){case a.Loading:t._oBusy.setBusy(d==a.Loading);e.renderControl(t._oBusy);break;case a.Failed:e.write("<div");e.writeAttribute("id",t.getId()+"-failed-ftr");e.addClass("sapMGenericTileFtrFld");e.writeClasses();e.write(">");e.write("<div");e.writeAttribute("id",t.getId()+"-failed-icon");e.addClass("sapMGenericTileFtrFldIcn");e.writeClasses();e.write(">");e.renderControl(t._oWarningIcon);e.write("</div>");if(t.getScope()!==i.Actions&&!t._bShowActionsView){e.write("<div");e.writeAttribute("id",t.getId()+"-failed-text");e.addClass("sapMGenericTileFtrFldTxt");e.writeClasses();e.write(">");e.renderControl(t.getAggregation("_failedMessageText"));e.write("</div>")}e.write("</div>");break;default:}e.write("</div>")};d._renderActionsScope=function(e,t){if(t.getState()!==a.Disabled){e.renderControl(t._oRemoveButton);e.renderControl(t._oMoreIcon)}};d._renderHoverOverlay=function(e,t){e.write("<div");if(t.getBackgroundImage()){e.addClass("sapMGTWithImageHoverOverlay")}else{e.addClass("sapMGTWithoutImageHoverOverlay")}e.writeClasses();e.writeAttribute("id",t.getId()+"-hover-overlay");e.write(">");e.write("</div>")};d._renderHeader=function(e,t){e.write("<div");e.addClass("sapMGTHdrTxt");e.writeClasses();e.writeAttribute("id",t.getId()+"-hdr-text");e.write(">");e.renderControl(t._oTitle);e.write("</div>")};d._renderSubheader=function(e,t){e.write("<div");e.addClass("sapMGTSubHdrTxt");e.writeClasses();e.writeAttribute("id",t.getId()+"-subHdr-text");e.write(">");e.renderControl(t._oSubTitle);e.write("</div>")};return d},true);