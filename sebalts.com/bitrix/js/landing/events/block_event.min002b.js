(function(){"use strict";BX.namespace("BX.Landing.Event");BX.Landing.Event.Block=function(n){this.block=typeof n.block==="object"?n.block:null;this.card=typeof n.card==="object"?n.card:null;this.node=typeof n.node==="object"?n.node:null;this.data=typeof n.data!=="undefined"?n.data:null;this.forceInitHandler=typeof n.onForceInit==="function"?n.onForceInit:function(){}};BX.Landing.Event.Block.prototype={forceInit:function(){this.forceInitHandler()},makeRelativeSelector:function(n){return"#"+this.block.id+" "+n}}})();