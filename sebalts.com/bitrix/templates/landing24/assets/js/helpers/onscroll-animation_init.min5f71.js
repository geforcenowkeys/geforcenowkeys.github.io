(function(){"use strict";if(BX.browser.IsMobile()){return}var n=new IntersectionObserver(d);var a=new WeakMap;var i=BX.Landing.Utils.addClass;var t=BX.Landing.Utils.removeClass;var e=BX.Landing.Utils.style;var o=BX.Landing.Utils.isPlainObject;var r=BX.Landing.Utils.onAnimationEnd;var s=BX.Landing.Utils.slice;var l=BX.Landing.Utils.onCustomEvent;l("BX.Landing.Block:init",function(a){var i=s(a.block.querySelectorAll(".js-animation"));i.forEach(function(a){c(a);n.observe(a)})});l("BX.Landing.UI.Panel.URLList:show",function(a){var i=s(a.querySelectorAll(".js-animation"));i.forEach(function(a){c(a);n.observe(a)})});l("BX.Landing.Block:updateStyle",function(a){if(o(a.data)&&o(a.data.affect)){var i=a.data.affect.some(function(n){return n==="animation-name"});if(i){var t=s(a.block.querySelectorAll(".js-animation"));t.forEach(function(a){c(a);n.observe(a)})}}});function c(n){void e(n,{"animation-duration":"1000ms",visibility:"hidden","animation-name":"none","animation-play-state":"paused"})}function d(n){n.forEach(function(n){if(n.isIntersecting&&!a.has(n.target)){void u(n.target).then(function(){a.set(n.target,true);void e(n.target,{"animation-name":"none"});t(n.target,"animated")})}})}function u(n){i(n,"animated");void e(n,{visibility:"","animation-name":"","animation-play-state":"running"});return r(n)}})();