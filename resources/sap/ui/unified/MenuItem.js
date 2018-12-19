/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/IconPool","./MenuItemBase","./library"],function(t,e,i){"use strict";var a=e.extend("sap.ui.unified.MenuItem",{metadata:{library:"sap.ui.unified",properties:{text:{type:"string",group:"Appearance",defaultValue:""},icon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:""}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}}}});t.insertFontFaceStyle();a.prototype.render=function(t,e,i,a){var s=t;var r=e.getSubmenu();s.write("<li ");var n="sapUiMnuItm";if(a.iItemNo==1){n+=" sapUiMnuItmFirst"}else if(a.iItemNo==a.iTotalItems){n+=" sapUiMnuItmLast"}if(!i.checkEnabled(e)){n+=" sapUiMnuItmDsbl"}if(e.getStartsSection()){n+=" sapUiMnuItmSepBefore"}s.writeAttribute("class",n);if(e.getTooltip_AsString()){s.writeAttributeEscaped("title",e.getTooltip_AsString())}s.writeElementData(e);if(a.bAccessible){s.writeAccessibilityState(e,{role:"menuitem",disabled:!i.checkEnabled(e),posinset:a.iItemNo,setsize:a.iTotalItems,labelledby:{value:this.getId()+"-txt "+this.getId()+"-scuttxt",append:true}});if(r){s.writeAttribute("aria-haspopup",true);s.writeAttribute("aria-owns",r.getId())}}s.write('><div class="sapUiMnuItmL"></div>');s.write('<div class="sapUiMnuItmIco">');if(e.getIcon()){s.writeIcon(e.getIcon(),null,{title:null})}s.write("</div>");s.write('<div id="'+this.getId()+'-txt" class="sapUiMnuItmTxt">');s.writeEscaped(e.getText());s.write("</div>");s.write('<div id="'+this.getId()+'-scuttxt" class="sapUiMnuItmSCut"></div>');s.write('<div class="sapUiMnuItmSbMnu">');if(r){s.write('<div class="sapUiIconMirrorInRTL"></div>')}s.write("</div>");s.write('<div class="sapUiMnuItmR"></div>');s.write("</li>")};a.prototype.hover=function(t,e){this.$().toggleClass("sapUiMnuItmHov",t)};return a});