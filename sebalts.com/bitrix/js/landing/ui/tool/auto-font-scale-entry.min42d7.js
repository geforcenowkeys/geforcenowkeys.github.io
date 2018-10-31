(function(){"use strict";BX.namespace("BX.Landing.UI.Tool");var t=BX.Landing.Utils.createRangeFromNode;var i=BX.Landing.Utils.isNumber;var e=BX.Landing.Utils.rect;BX.Landing.UI.Tool.autoFontScaleEntry=function(t){this.element=t;this.minSize=8;this.maxSize=parseInt(BX.style(t,"font-size"));this.maxLetterSpacing=parseFloat(BX.style(t,"letter-spacing"));this.maxLetterSpacing=i(this.maxLetterSpacing)?this.maxLetterSpacing:0;this.minLetterSpacing=0;this.paddings=30;this.changed=false};BX.Landing.UI.Tool.autoFontScaleEntry.prototype={setFontSize:function(t){t=Math.min(Math.max(t,this.minSize),this.maxSize);this.element.style.cssText="font-size: "+t+"px!important;"},setLetterSpacing:function(t){t=Math.min(Math.max(t,this.minLetterSpacing),this.maxLetterSpacing);this.element.style.letterSpacing=t+"px"},resetSize:function(){this.element.style.fontSize=null;this.element.style.letterSpacing=null;this.element.style.display=null},adjust:function(){if(this.changed||this.getRangeWidth()>this.getParentWidth()){this.changed=true;var t=this.getParentWidth()*this.getFontSizeRatio();var i=this.getParentWidth()*this.getLetterSpacingRatio();this.setFontSize(t-i);this.setLetterSpacing(i)}if(!this.changed&&this.maxSize>40&&BX.width(window)<=600){this.setFontSize(this.getParentWidth()*this.getBaseFontSizeRatio())}},getCurrentSize:function(){return parseInt(BX.style(this.element,"font-size"))},getFontSizeRatio:function(){if(i(this.ratio)){return this.ratio}this.ratio=this.maxSize/this.getRangeWidth();return this.ratio},getLetterSpacingRatio:function(){if(i(this.letterSpacingRatio)){return this.letterSpacingRatio}this.letterSpacingRatio=this.maxLetterSpacing/this.getRangeWidth();return this.letterSpacingRatio},getBaseFontSizeRatio:function(){if(i(this.baseFontSizeRatio)){return this.baseFontSizeRatio}this.baseFontSizeRatio=this.getCurrentSize()/(600-this.paddings);return this.baseFontSizeRatio},getRangeWidth:function(){return e(t(this.element)).width},getParentWidth:function(){return Math.min(e(this.element).width,BX.width(window)-this.paddings)}}})();