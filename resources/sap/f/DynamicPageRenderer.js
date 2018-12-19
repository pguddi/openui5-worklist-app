/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device"],function(e){"use strict";var t={};t.render=function(a,r){var i=r.getTitle(),s=r.getHeader(),n=r.getFooter(),d=r.getContent(),o=r.getHeaderExpanded(),l=s?s.getContent():[],c=l.length>0,C=r.getShowFooter(),p=r._preserveHeaderStateOnScroll(),w=r.getLandmarkInfo(),g=r._getHeaderTag(w),F=r._getFooterTag(w);a.write("<article");a.writeControlData(r);a.addClass("sapFDynamicPage");if(r.getToggleHeaderOnTitleClick()){a.addClass("sapFDynamicPageTitleClickEnabled")}a.writeClasses();a.writeAccessibilityState(r,r._formatLandmarkInfo(w,"Root"));a.write(">");if(e.system.desktop){a.renderControl(r._getScrollBar().addStyleClass("sapFDynamicPageScrollBar"))}a.write("<"+g);a.writeAttributeEscaped("id",r.getId()+"-header");a.addClass("sapContrastPlus");a.addClass("sapFDynamicPageTitleWrapper");if(!o){a.addClass("sapFDynamicPageTitleSnapped")}if(!c){a.addClass("sapFDynamicPageTitleOnly")}a.writeClasses();a.writeAccessibilityState(r,r._formatLandmarkInfo(w,"Header"));a.write(">");a.renderControl(i);if(p){a.renderControl(s)}a.write("</"+g+">");a.write("<div");a.writeAttributeEscaped("id",r.getId()+"-contentWrapper");a.addClass("sapFDynamicPageContentWrapper");a.writeClasses();a.write(">");if(!p){a.renderControl(s)}a.write("<div");a.writeAttributeEscaped("id",r.getId()+"-content");a.addClass("sapFDynamicPageContent");a.writeClasses();a.writeAccessibilityState(r,r._formatLandmarkInfo(w,"Content"));a.write(">");a.write("<div");a.writeAttributeEscaped("id",r.getId()+"-contentFitContainer");if(r.getFitContent()){a.addClass("sapFDynamicPageContentFitContainer")}if(n&&C){a.addClass("sapFDynamicPageContentFitContainerFooterVisible")}a.writeClasses();a.write(">");a.renderControl(d);t.renderFooterSpacer(a,r,n,C);a.write("</div>");a.write("</div>");a.write("</div>");t.renderFooter(a,r,n,C,F,w);a.write("</article>")};t.renderFooter=function(e,t,a,r,i,s){if(a){e.write("<"+i);e.writeAttributeEscaped("id",t.getId()+"-footerWrapper");e.addClass("sapContrast sapContrastPlus sapFDynamicPageFooter sapFFooter-CTX");if(!r){e.addClass("sapUiHidden")}e.writeClasses();e.writeAccessibilityState(t,t._formatLandmarkInfo(s,"Footer"));e.write(">");a.addStyleClass("sapFDynamicPageActualFooterControl");e.renderControl(a);e.write("</"+i+">")}};t.renderFooterSpacer=function(e,t,a,r){if(a){e.write("<div");e.writeAttributeEscaped("id",t.getId()+"-spacer");if(r){e.addClass("sapFDynamicPageContentWrapperSpacer")}e.writeClasses();e.write(">");e.write("</div>")}};return t},true);