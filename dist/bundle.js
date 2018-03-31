!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.kaleys=t():e.kaleys=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(t){i(this,e),this.val=t}return r(e,[{key:"map",value:function(t){return e.of(t(this.val))}}]),e}();o.of=function(e){return new o(e)};var a=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.showEl,a=void 0===r?".praise-show":r,u=n.buttonEl,c=void 0===u?".praise-btn":u,s=n.initCount,l=void 0===s?0:s,f=n.step,p=void 0===f?1:f;i(this,e),o.of(this).map(this.checkContainer(t)).map(this.checkShowEl(a)).map(this.checkButton(c)).map(this.checkCount(l)),this.step=p,this.bindEvent()}return r(e,[{key:"bindEvent",value:function(){var e=this;this.btn.addEventListener("click",function(t){return e.praise(t),t.preventDefault(),!1})}},{key:"praise",value:function(e){var t=this.showEl;this.count+=this.step,t.innerHTML=this.count}},{key:"checkContainer",value:function(e){return function(t){if(!e)throw Error("没有初始元素选择器");return t.container="string"==typeof e?document.querySelector(e):e,t}}},{key:"checkButton",value:function(t){return function(n){return n.btn=e.checkEl(n.container,t,"parise-btn",function(e){e.innerHTML="点赞"}),n}}},{key:"checkShowEl",value:function(t){return function(n){return n.showEl=e.checkEl(n.container,t,"parise-show"),n}}},{key:"checkCount",value:function(e){var t=this;return function(n){var r=e||parseInt(n.showEl.innerHTML||0,10);return t.count=r,n.showEl.innerHTML=r,n}}}],[{key:"checkEl",value:function(e,t,n,r){if(t instanceof Element)return t;var i=void 0;return"string"==typeof t&&(i=e.querySelector(t)),i||((i=document.createElement("div")).className=n,r&&r(i),e.appendChild(i)),i}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Thumb=void 0;var r,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=(r=o)&&r.__esModule?r:{default:r};t.Thumb=function(e){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),i=r.container.className||"";-1===i.indexOf("praise-thumb")&&((i=i.split(" ")).push("praise-thumb"),r.container.className=i.join(" "));var o=document.createElement("div");return o.className="parise-title",o.innerHTML='<span class="praise-title__label">点赞数：</span>',o.appendChild(r.showEl),r.container.insertBefore(o,r.btn),r.btn.className+=" thumb",r.btn.innerHTML='<div class="thumb-connect"></div>\n            <div class="thumb-thumb"></div>\n            <div class="thumb-finger-first"></div>\n            <div class="thumb-fingter-sec"></div>\n            <div class="thumb-wrist"></div>',r.animating=!1,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),i(t,[{key:"praise",value:function(e){this.animating||(function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"praise",this).call(this),this.startAnimate())}},{key:"startAnimate",value:function(){var e,t,n;e=this.showEl,t="animationend",n=this.completeAnimate.bind(this),e.addEventListener(t,function r(){n(),e.removeEventListener(t,r)}),this.animating=!0,this.showEl.className+=" parise-show__change"}},{key:"completeAnimate",value:function(){var e=this.showEl.className.replace(" parise-show__change","");this.showEl.className=e,this.animating=!1}}]),t}()}])});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYWxleXMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2thbGV5cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYWxleXMvLi9zcmMvcGFyaXNlX2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9rYWxleXMvLi9zcmMvdGh1bWIuanMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwid2luZG93IiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJ2YWx1ZSIsIm4iLCJfX2VzTW9kdWxlIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiRnVuY3RvciIsInZhbCIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJmIiwib2YiLCJQcmFpc2VCdXR0b24iLCJlbCIsIl9yZWYiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfcmVmJHNob3dFbCIsInNob3dFbCIsIl9yZWYkYnV0dG9uRWwiLCJidXR0b25FbCIsIl9yZWYkaW5pdENvdW50IiwiaW5pdENvdW50IiwiX3JlZiRzdGVwIiwic3RlcCIsIm1hcCIsImNoZWNrQ29udGFpbmVyIiwiY2hlY2tTaG93RWwiLCJjaGVja0J1dHRvbiIsImNoZWNrQ291bnQiLCJiaW5kRXZlbnQiLCJzZWxmIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmFpc2UiLCJwcmV2ZW50RGVmYXVsdCIsImNvdW50IiwiaW5uZXJIVE1MIiwic2NvcGUiLCJFcnJvciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ0bkVsIiwiY2hlY2tFbCIsIl90aGlzIiwicGFyc2VJbnQiLCJwYXJlbnQiLCJzZWxlY3RvciIsImNsYXNzTmFtZSIsImJlZm9yZUNyZWF0ZUNiIiwiRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIl9wYXJpc2VfYnV0dG9uIiwiVGh1bWIiLCJvcHRpb25zIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfX3Byb3RvX18iLCJnZXRQcm90b3R5cGVPZiIsImNsc05hbWUiLCJpbmRleE9mIiwic3BsaXQiLCJwdXNoIiwiam9pbiIsInRpdGxlV3JhcHBlciIsImluc2VydEJlZm9yZSIsImFuaW1hdGluZyIsIl9nZXQiLCJzdGFydEFuaW1hdGUiLCJldmVudE5hbWUiLCJjYWxsYmFjayIsImNvbXBsZXRlQW5pbWF0ZSIsImJpbmQiLCJmbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFBQSxFQUFBQyxHQUNBLGlCQUFBQyxTQUFBLGlCQUFBQyxPQUNBQSxPQUFBRCxRQUFBRCxJQUNBLG1CQUFBRyxlQUFBQyxJQUNBRCxVQUFBSCxHQUNBLGlCQUFBQyxRQUNBQSxRQUFBLE9BQUFELElBRUFELEVBQUEsT0FBQUMsSUFSQSxDQVNDSyxPQUFBLFdBQ0QsbUJDVEEsSUFBQUMsS0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQVAsUUFHQSxJQUFBQyxFQUFBSSxFQUFBRSxJQUNBQyxFQUFBRCxFQUNBRSxHQUFBLEVBQ0FULFlBVUEsT0FOQVUsRUFBQUgsR0FBQUksS0FBQVYsRUFBQUQsUUFBQUMsSUFBQUQsUUFBQU0sR0FHQUwsRUFBQVEsR0FBQSxFQUdBUixFQUFBRCxRQTJDQSxPQXRDQU0sRUFBQU0sRUFBQUYsRUFHQUosRUFBQU8sRUFBQVIsRUFHQUMsRUFBQVEsRUFBQSxTQUFBZCxFQUFBZSxFQUFBQyxHQUNBVixFQUFBVyxFQUFBakIsRUFBQWUsSUFDQUcsT0FBQUMsZUFBQW5CLEVBQUFlLEdBQ0FLLGNBQUEsRUFDQUMsWUFBQSxFQUNBQyxJQUFBTixLQU1BVixFQUFBaUIsRUFBQSxTQUFBdkIsR0FDQWtCLE9BQUFDLGVBQUFuQixFQUFBLGNBQWlEd0IsT0FBQSxLQUlqRGxCLEVBQUFtQixFQUFBLFNBQUF4QixHQUNBLElBQUFlLEVBQUFmLEtBQUF5QixXQUNBLFdBQTJCLE9BQUF6QixFQUFBLFNBQzNCLFdBQWlDLE9BQUFBLEdBRWpDLE9BREFLLEVBQUFRLEVBQUFFLEVBQUEsSUFBQUEsR0FDQUEsR0FJQVYsRUFBQVcsRUFBQSxTQUFBVSxFQUFBQyxHQUFzRCxPQUFBVixPQUFBVyxVQUFBQyxlQUFBbkIsS0FBQWdCLEVBQUFDLElBR3REdEIsRUFBQXlCLEVBQUEsR0FJQXpCLElBQUEwQixFQUFBLDhhQ25FTUMsYUFDSixTQUFBQSxFQUFZQyxHQUFLQyxFQUFBQyxLQUFBSCxHQUNmRyxLQUFLRixJQUFNQSx3Q0FFVEcsR0FDRixPQUFPSixFQUFRSyxHQUFHRCxFQUFFRCxLQUFLRixlQUc3QkQsRUFBUUssR0FBSyxTQUFDSixHQUFELE9BQVMsSUFBSUQsRUFBUUMsUUFHYkssYUFXbkIsU0FBQUEsRUFBWUMsR0FLSixJQUFBQyxFQUFBQyxVQUFBQyxPQUFBLFFBQUFDLElBQUFGLFVBQUEsR0FBQUEsVUFBQSxNQUFBRyxFQUFBSixFQUpOSyxjQUlNRixJQUFBQyxFQUpHLGVBSUhBLEVBQUFFLEVBQUFOLEVBSE5PLGdCQUdNSixJQUFBRyxFQUhLLGNBR0xBLEVBQUFFLEVBQUFSLEVBRk5TLGlCQUVNTixJQUFBSyxFQUZNLEVBRU5BLEVBQUFFLEVBQUFWLEVBRE5XLFlBQ01SLElBQUFPLEVBREMsRUFDREEsRUFBQWhCLEVBQUFDLEtBQUFHLEdBQ05OLEVBQVFLLEdBQUdGLE1BQ1JpQixJQUFJakIsS0FBS2tCLGVBQWVkLElBQ3hCYSxJQUFJakIsS0FBS21CLFlBQVlULElBQ3JCTyxJQUFJakIsS0FBS29CLFlBQVlSLElBQ3JCSyxJQUFJakIsS0FBS3FCLFdBQVdQLElBRXZCZCxLQUFLZ0IsS0FBT0EsRUFDWmhCLEtBQUtzQiwwREFJTCxJQUNFQyxFQUFPdkIsS0FEQ0EsS0FBS3dCLElBRVhDLGlCQUFpQixRQUFTLFNBQVVDLEdBR3RDLE9BRkFILEVBQUtJLE9BQU9ELEdBQ1pBLEVBQUVFLGtCQUNLLG1DQUlKRixHQUNMLElBQUloQixFQUFTVixLQUFLVSxPQUNsQlYsS0FBSzZCLE9BQVM3QixLQUFLZ0IsS0FDbkJOLEVBQU9vQixVQUFZOUIsS0FBSzZCLDZDQUVYekIsR0FDYixPQUFPLFNBQUMyQixHQUNOLElBQUszQixFQUNILE1BQU00QixNQUFNLGFBSWQsT0FEQUQsRUFBTUUsVUFBeUIsaUJBQU43QixFQUFpQjhCLFNBQVNDLGNBQWMvQixHQUFNQSxFQUNoRTJCLHVDQUlDSyxHQUNWLE9BQU8sU0FBQ0wsR0FJTixPQUhBQSxFQUFNUCxJQUFNckIsRUFBYWtDLFFBQVFOLEVBQU1FLFVBQVdHLEVBQU8sYUFBYyxTQUFDaEMsR0FDdEVBLEVBQUcwQixVQUFZLE9BRVZDLHVDQUlDckIsR0FDVixPQUFPLFNBQUNxQixHQUVOLE9BREFBLEVBQU1yQixPQUFTUCxFQUFha0MsUUFBUU4sRUFBTUUsVUFBV3ZCLEVBQVEsZUFDdERxQixzQ0FJQWpCLEdBQVcsSUFBQXdCLEVBQUF0QyxLQUNwQixPQUFPLFNBQUMrQixHQUNOLElBQUlGLEVBQVFmLEdBQWF5QixTQUFTUixFQUFNckIsT0FBT29CLFdBQWEsRUFBRyxJQUcvRCxPQUZBUSxFQUFLVCxNQUFRQSxFQUNiRSxFQUFNckIsT0FBT29CLFVBQVlELEVBQ2xCRSxxQ0FJSVMsRUFBUUMsRUFBVUMsRUFBV0MsR0FDMUMsR0FBSUYsYUFBb0JHLFFBQVMsT0FBT0gsRUFDeEMsSUFBSXJDLFNBVUosTUFUdUIsaUJBQVpxQyxJQUNUckMsRUFBS29DLEVBQU9MLGNBQWNNLElBRXZCckMsS0FDSEEsRUFBSzhCLFNBQVNXLGNBQWMsUUFDekJILFVBQVlBLEVBQ2ZDLEdBQWtCQSxFQUFldkMsR0FDakNvQyxFQUFPTSxZQUFZMUMsSUFFZEEscUJBMUZVRCwyVkNYckI0QyxFQUFBN0UsRUFBQSx5Q0FVYThFLGtCQUNYLFNBQUFBLEVBQVk1QyxHQUFrQixJQUFkNkMsRUFBYzNDLFVBQUFDLE9BQUEsUUFBQUMsSUFBQUYsVUFBQSxHQUFBQSxVQUFBLG1HQUFBUCxDQUFBQyxLQUFBZ0QsR0FBQSxJQUFBVixtS0FBQVksQ0FBQWxELE1BQUFnRCxFQUFBRyxXQUFBckUsT0FBQXNFLGVBQUFKLElBQUF6RSxLQUFBeUIsS0FDdEJJLEVBQUk2QyxJQUNOSSxFQUFVZixFQUFLTCxVQUFVUyxXQUFXLElBQ0MsSUFBckNXLEVBQVFDLFFBQVEsbUJBQ2xCRCxFQUFVQSxFQUFRRSxNQUFNLE1BQ2hCQyxLQUFLLGdCQUNibEIsRUFBS0wsVUFBVVMsVUFBWVcsRUFBUUksS0FBSyxNQUcxQyxJQUFJQyxFQUFleEIsU0FBU1csY0FBYyxPQVRkLE9BVTVCYSxFQUFhaEIsVUFBWSxlQUN6QmdCLEVBQWE1QixVQUFZLGdEQUN6QjRCLEVBQWFaLFlBQVlSLEVBQUs1QixRQUM5QjRCLEVBQUtMLFVBQVUwQixhQUFhRCxFQUFjcEIsRUFBS2QsS0FFL0NjLEVBQUtkLElBQUlrQixXQUFhLFNBQ3RCSixFQUFLZCxJQUFJTSxVQUFULHFPQUtBUSxFQUFLc0IsV0FBWSxFQXJCV3RCLGtYQXdCdkJaLEdBQ0QxQixLQUFLNEQscVFBQ1RDLENBQUFiLEVBQUF2RCxVQUFBMEQsV0FBQXJFLE9BQUFzRSxlQUFBSixFQUFBdkQsV0FBQSxTQUFBTyxNQUFBekIsS0FBQXlCLE1BQ0FBLEtBQUs4RCx1REFuQ0ksSUFBUzFELEVBQUkyRCxFQUFXQyxFQUFmNUQsRUF1Q2JKLEtBQUtVLE9BdkNZcUQsRUF1Q0osZUF2Q2VDLEVBdUNDaEUsS0FBS2lFLGdCQUFnQkMsS0FBS2xFLE1BbEM5REksRUFBR3FCLGlCQUFpQnNDLEVBSlgsU0FBTEksSUFDRkgsSUFDQTVELEVBQUdnRSxvQkFBb0JMLEVBQVdJLEtBcUNsQ25FLEtBQUs0RCxXQUFZLEVBQ2pCNUQsS0FBS1UsT0FBT2dDLFdBQWEsaUVBR3pCLElBQUkyQixFQUFNckUsS0FBS1UsT0FBT2dDLFVBQVU0QixRQUFRLHVCQUF3QixJQUNoRXRFLEtBQUtVLE9BQU9nQyxVQUFZMkIsRUFDeEJyRSxLQUFLNEQsV0FBWSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrYWxleXNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia2FsZXlzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiY2xhc3MgRnVuY3RvciB7XG4gIGNvbnN0cnVjdG9yKHZhbCkge1xuICAgIHRoaXMudmFsID0gdmFsO1xuICB9XG4gIG1hcChmKSB7XG4gICAgcmV0dXJuIEZ1bmN0b3Iub2YoZih0aGlzLnZhbCkpO1xuICB9XG59XG5GdW5jdG9yLm9mID0gKHZhbCkgPT4gbmV3IEZ1bmN0b3IodmFsKTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmFpc2VCdXR0b24ge1xuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nIG9yIHNlbGVjdG9yfSBlbCDliJ3lp4vljJbnmoTlhYPntKBcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMge1xuICAgKiAgc2hvd2VsOiDmmL7npLrmlbDlrZfnmoTlhYPntKBcbiAgICogIGJ1dHRvbkVsOiDmjInpkq7lhYPntKBcbiAgICogIGluaXRDb3VudDog5Yid5aeL5YyW54K56LWe5pWw77yM5aaC5p6c5Li6MO+8jOS7pXNob3dFbOeahGh0bWzkuLpcdTAwMTPlh4ZcbiAgICogIHN0ZXA6IOavj+asoeeCueWHu+WKoOWHoOasoVxuICAgKiB9IFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwsIHtcbiAgICBzaG93RWwgPSAnLnByYWlzZS1zaG93JyxcbiAgICBidXR0b25FbCA9ICcucHJhaXNlLWJ0bicsXG4gICAgaW5pdENvdW50ID0gMCxcbiAgICBzdGVwID0gMVxuICB9ID0ge30pIHtcbiAgICBGdW5jdG9yLm9mKHRoaXMpXG4gICAgICAubWFwKHRoaXMuY2hlY2tDb250YWluZXIoZWwpKVxuICAgICAgLm1hcCh0aGlzLmNoZWNrU2hvd0VsKHNob3dFbCkpXG4gICAgICAubWFwKHRoaXMuY2hlY2tCdXR0b24oYnV0dG9uRWwpKVxuICAgICAgLm1hcCh0aGlzLmNoZWNrQ291bnQoaW5pdENvdW50KSk7XG5cbiAgICB0aGlzLnN0ZXAgPSBzdGVwO1xuICAgIHRoaXMuYmluZEV2ZW50KCk7XG4gIH1cblxuICBiaW5kRXZlbnQoKSB7XG4gICAgbGV0IGJ0biA9IHRoaXMuYnRuLFxuICAgICAgc2VsZiA9IHRoaXM7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHNlbGYucHJhaXNlKGUpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH1cblxuICBwcmFpc2UoZSkge1xuICAgIGxldCBzaG93RWwgPSB0aGlzLnNob3dFbDtcbiAgICB0aGlzLmNvdW50ICs9IHRoaXMuc3RlcDtcbiAgICBzaG93RWwuaW5uZXJIVE1MID0gdGhpcy5jb3VudDtcbiAgfVxuICBjaGVja0NvbnRhaW5lcihlbCkge1xuICAgIHJldHVybiAoc2NvcGUpID0+IHtcbiAgICAgIGlmICghZWwpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ+ayoeacieWIneWni+WFg+e0oOmAieaLqeWZqCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzY29wZS5jb250YWluZXIgPSB0eXBlb2YgZWwgPT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xuICAgICAgcmV0dXJuIHNjb3BlO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrQnV0dG9uKGJ0bkVsKSB7XG4gICAgcmV0dXJuIChzY29wZSkgPT4ge1xuICAgICAgc2NvcGUuYnRuID0gUHJhaXNlQnV0dG9uLmNoZWNrRWwoc2NvcGUuY29udGFpbmVyLCBidG5FbCwgJ3BhcmlzZS1idG4nLCAoZWwpID0+IHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gXCLngrnotZ5cIlxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc2NvcGU7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tTaG93RWwoc2hvd0VsKSB7XG4gICAgcmV0dXJuIChzY29wZSkgPT4ge1xuICAgICAgc2NvcGUuc2hvd0VsID0gUHJhaXNlQnV0dG9uLmNoZWNrRWwoc2NvcGUuY29udGFpbmVyLCBzaG93RWwsICdwYXJpc2Utc2hvdycpO1xuICAgICAgcmV0dXJuIHNjb3BlO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ291bnQoaW5pdENvdW50KSB7XG4gICAgcmV0dXJuIChzY29wZSkgPT4ge1xuICAgICAgbGV0IGNvdW50ID0gaW5pdENvdW50IHx8IHBhcnNlSW50KHNjb3BlLnNob3dFbC5pbm5lckhUTUwgfHwgMCwgMTApO1xuICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgICAgc2NvcGUuc2hvd0VsLmlubmVySFRNTCA9IGNvdW50O1xuICAgICAgcmV0dXJuIHNjb3BlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjaGVja0VsKHBhcmVudCwgc2VsZWN0b3IsIGNsYXNzTmFtZSwgYmVmb3JlQ3JlYXRlQ2IpIHtcbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gc2VsZWN0b3I7XG4gICAgbGV0IGVsO1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ3N0cmluZycpIHtcbiAgICAgIGVsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgYmVmb3JlQ3JlYXRlQ2IgJiYgYmVmb3JlQ3JlYXRlQ2IoZWwpO1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsO1xuICB9XG59IiwiaW1wb3J0IFBhcmlzZUJ1dHRvbiBmcm9tICcuL3BhcmlzZV9idXR0b24nO1xuXG5cbmNvbnN0IG9uY2UgPSBmdW5jdGlvbihlbCwgZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICBsZXQgZm4gPSBmdW5jdGlvbigpe1xuICAgIGNhbGxiYWNrKCk7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuKTtcbiAgfVxuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4pO1xufVxuZXhwb3J0IGNsYXNzIFRodW1iIGV4dGVuZHMgUGFyaXNlQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKGVsLCBvcHRpb25zKTtcbiAgICBsZXQgY2xzTmFtZSA9IHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZXx8Jyc7XG4gICAgaWYgKGNsc05hbWUuaW5kZXhPZigncHJhaXNlLXRodW1iJykgPT09IC0xKSB7XG4gICAgICBjbHNOYW1lID0gY2xzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgY2xzTmFtZS5wdXNoKCdwcmFpc2UtdGh1bWInKTtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9IGNsc05hbWUuam9pbignICcpO1xuICAgIH1cblxuICAgIGxldCB0aXRsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZVdyYXBwZXIuY2xhc3NOYW1lID0gJ3BhcmlzZS10aXRsZSc7XG4gICAgdGl0bGVXcmFwcGVyLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInByYWlzZS10aXRsZV9fbGFiZWxcIj7ngrnotZ7mlbDvvJo8L3NwYW4+JztcbiAgICB0aXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5zaG93RWwpO1xuICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZSh0aXRsZVdyYXBwZXIsIHRoaXMuYnRuKTtcblxuICAgIHRoaXMuYnRuLmNsYXNzTmFtZSArPSAnIHRodW1iJztcbiAgICB0aGlzLmJ0bi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRodW1iLWNvbm5lY3RcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHVtYi10aHVtYlwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRodW1iLWZpbmdlci1maXJzdFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRodW1iLWZpbmd0ZXItc2VjXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGh1bWItd3Jpc3RcIj48L2Rpdj5gO1xuICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG4gIH1cblxuICBwcmFpc2UoZSkge1xuICAgIGlmICh0aGlzLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIHN1cGVyLnByYWlzZSgpO1xuICAgIHRoaXMuc3RhcnRBbmltYXRlKCk7XG4gIH1cblxuICBzdGFydEFuaW1hdGUoKXtcbiAgICBvbmNlKHRoaXMuc2hvd0VsLCAnYW5pbWF0aW9uZW5kJywgdGhpcy5jb21wbGV0ZUFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuc2hvd0VsLmNsYXNzTmFtZSArPSAnIHBhcmlzZS1zaG93X19jaGFuZ2UnO1xuICB9XG4gIGNvbXBsZXRlQW5pbWF0ZSgpIHtcbiAgICBsZXQgY2xzID0gdGhpcy5zaG93RWwuY2xhc3NOYW1lLnJlcGxhY2UoJyBwYXJpc2Utc2hvd19fY2hhbmdlJywgJycpO1xuICAgIHRoaXMuc2hvd0VsLmNsYXNzTmFtZSA9IGNscztcbiAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9