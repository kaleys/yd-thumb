(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define([], factory);
  else if (typeof exports === 'object')
    exports["kaleys"] = factory();
  else
    root["kaleys"] = factory();
})(window, function () {
  return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
          /******/
});
        /******/
}
      /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
      /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/thumb.js");
    /******/
})
/************************************************************************/
/******/({

/***/ "./src/parise_button.js":
/*!******************************!*\
  !*** ./src/parise_button.js ***!
  \******************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

          "use strict";


          Object.defineProperty(exports, "__esModule", {
            value: true
          });

          var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

          function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

          var Functor = function () {
            function Functor(val) {
              _classCallCheck(this, Functor);

              this.val = val;
            }

            _createClass(Functor, [{
              key: 'map',
              value: function map(f) {
                return Functor.of(f(this.val));
              }
            }]);

            return Functor;
          }();

          Functor.of = function (val) {
            return new Functor(val);
          };

          var PraiseButton = function () {
            /**
             * 
             * @param {string or selector} el 初始化的元素
             * @param {object} options {
             *  showel: 显示数字的元素
             *  buttonEl: 按钮元素
             *  initCount: 初始化点赞数，如果为0，以showEl的html为准
             *  step: 每次点击加几次
             * } 
             */
            function PraiseButton(el) {
              var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref$showEl = _ref.showEl,
                showEl = _ref$showEl === undefined ? '.praise-show' : _ref$showEl,
                _ref$buttonEl = _ref.buttonEl,
                buttonEl = _ref$buttonEl === undefined ? '.praise-btn' : _ref$buttonEl,
                _ref$initCount = _ref.initCount,
                initCount = _ref$initCount === undefined ? 0 : _ref$initCount,
                _ref$step = _ref.step,
                step = _ref$step === undefined ? 1 : _ref$step;

              _classCallCheck(this, PraiseButton);

              Functor.of(this).map(this.checkContainer(el)).map(this.checkShowEl(showEl)).map(this.checkButton(buttonEl)).map(this.checkCount(initCount));

              this.step = step;
              this.bindEvent();
            }

            _createClass(PraiseButton, [{
              key: 'bindEvent',
              value: function bindEvent() {
                var btn = this.btn,
                  self = this;
                btn.addEventListener('click', function (e) {
                  self.praise(e);
                  e.preventDefault();
                  return false;
                });
              }
            }, {
              key: 'praise',
              value: function praise(e) {
                var showEl = this.showEl;
                this.count += this.step;
                showEl.innerHTML = this.count;
              }
            }, {
              key: 'checkContainer',
              value: function checkContainer(el) {
                return function (scope) {
                  if (!el) {
                    throw Error('没有初始元素选择器');
                    return;
                  }
                  scope.container = typeof el == 'string' ? document.querySelector(el) : el;
                  return scope;
                };
              }
            }, {
              key: 'checkButton',
              value: function checkButton(btnEl) {
                return function (scope) {
                  scope.btn = PraiseButton.checkEl(scope.container, btnEl, 'parise-btn', function (el) {
                    el.innerHTML = "点赞";
                  });
                  return scope;
                };
              }
            }, {
              key: 'checkShowEl',
              value: function checkShowEl(showEl) {
                return function (scope) {
                  scope.showEl = PraiseButton.checkEl(scope.container, showEl, 'parise-show');
                  return scope;
                };
              }
            }, {
              key: 'checkCount',
              value: function checkCount(initCount) {
                var _this = this;

                return function (scope) {
                  var count = initCount || Number.parseInt(scope.showEl.innerHTML || 0, 10);
                  _this.count = count;
                  scope.showEl.innerHTML = count;
                  return scope;
                };
              }
            }], [{
              key: 'checkEl',
              value: function checkEl(parent, selector, className, beforeCreateCb) {
                if (selector instanceof Element) return selector;
                var el = void 0;
                if (typeof selector == 'string') {
                  el = parent.querySelector(selector);
                }
                if (!el) {
                  el = document.createElement('div');
                  el.className = className;
                  beforeCreateCb && beforeCreateCb(el);
                  parent.appendChild(el);
                }
                return el;
              }
            }]);

            return PraiseButton;
          }();

          exports.default = PraiseButton;

          /***/
}),

/***/ "./src/thumb.js":
/*!**********************!*\
  !*** ./src/thumb.js ***!
  \**********************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

          "use strict";


          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Thumb = undefined;

          var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

          var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

          var _parise_button = __webpack_require__(/*! ./parise_button */ "./src/parise_button.js");

          var _parise_button2 = _interopRequireDefault(_parise_button);

          function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

          function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

          function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

          function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

          var once = function once(el, eventName, callback) {
            var fn = function fn() {
              callback();
              el.removeEventListener(eventName, fn);
            };
            el.addEventListener(eventName, fn);
          };

          var Thumb = exports.Thumb = function (_PariseButton) {
            _inherits(Thumb, _PariseButton);

            function Thumb(el) {
              var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

              _classCallCheck(this, Thumb);

              var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, el, options));

              var clsName = _this.container.className;
              if (clsName.indexOf('praise-thumb') === -1) {
                _this.container.clsName = clsName.split(' ').push('praise-thumb').join(' ');
              }

              var titleWrapper = document.createElement('div');
              titleWrapper.className = 'parise-title';
              titleWrapper.innerHTML = '<span class="praise-title__label">点赞数：</span>';
              titleWrapper.appendChild(_this.showEl);
              _this.container.insertBefore(titleWrapper, _this.btn);

              _this.btn.className += ' thumb';
              _this.btn.innerHTML = '<div class="thumb-connect"></div>\n            <div class="thumb-thumb"></div>\n            <div class="thumb-finger-first"></div>\n            <div class="thumb-fingter-sec"></div>\n            <div class="thumb-wrist"></div>';
              _this.animating = false;
              return _this;
            }

            _createClass(Thumb, [{
              key: 'praise',
              value: function praise(e) {
                if (this.animating) return;
                _get(Thumb.prototype.__proto__ || Object.getPrototypeOf(Thumb.prototype), 'praise', this).call(this);
                this.startAnimate();
              }
            }, {
              key: 'startAnimate',
              value: function startAnimate() {
                once(this.showEl, 'animationend', this.completeAnimate.bind(this));
                this.animating = true;
                this.showEl.className += ' parise-show__change';
              }
            }, {
              key: 'completeAnimate',
              value: function completeAnimate() {
                var cls = this.showEl.className.replace(' parise-show__change', '');
                this.showEl.className = cls;
                this.animating = false;
              }
            }]);

            return Thumb;
          }(_parise_button2.default);

          /***/
})

      /******/
});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYWxleXMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2thbGV5cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYWxleXMvLi9zcmMvcGFyaXNlX2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9rYWxleXMvLi9zcmMvdGh1bWIuanMiXSwibmFtZXMiOlsiRnVuY3RvciIsInZhbCIsImYiLCJvZiIsIlByYWlzZUJ1dHRvbiIsImVsIiwic2hvd0VsIiwiYnV0dG9uRWwiLCJpbml0Q291bnQiLCJzdGVwIiwibWFwIiwiY2hlY2tDb250YWluZXIiLCJjaGVja1Nob3dFbCIsImNoZWNrQnV0dG9uIiwiY2hlY2tDb3VudCIsImJpbmRFdmVudCIsImJ0biIsInNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByYWlzZSIsInByZXZlbnREZWZhdWx0IiwiY291bnQiLCJpbm5lckhUTUwiLCJzY29wZSIsIkVycm9yIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnRuRWwiLCJjaGVja0VsIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJwYXJlbnQiLCJzZWxlY3RvciIsImNsYXNzTmFtZSIsImJlZm9yZUNyZWF0ZUNiIiwiRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIm9uY2UiLCJldmVudE5hbWUiLCJjYWxsYmFjayIsImZuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlRodW1iIiwib3B0aW9ucyIsImNsc05hbWUiLCJpbmRleE9mIiwic3BsaXQiLCJwdXNoIiwiam9pbiIsInRpdGxlV3JhcHBlciIsImluc2VydEJlZm9yZSIsImFuaW1hdGluZyIsInN0YXJ0QW5pbWF0ZSIsImNvbXBsZXRlQW5pbWF0ZSIsImJpbmQiLCJjbHMiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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N0I7Ozs7MkJBRU1uQyxDLEVBQUc7QUFDUixVQUFJLEtBQUttQyxTQUFULEVBQW9CO0FBQ3BCO0FBQ0EsV0FBS0MsWUFBTDtBQUNEOzs7bUNBRWE7QUFDWmYsV0FBSyxLQUFLbEMsTUFBVixFQUFrQixjQUFsQixFQUFrQyxLQUFLa0QsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBbEM7QUFDQSxXQUFLSCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBS2hELE1BQUwsQ0FBWTZCLFNBQVosSUFBeUIsc0JBQXpCO0FBQ0Q7OztzQ0FDaUI7QUFDaEIsVUFBSXVCLE1BQU0sS0FBS3BELE1BQUwsQ0FBWTZCLFNBQVosQ0FBc0J3QixPQUF0QixDQUE4QixzQkFBOUIsRUFBc0QsRUFBdEQsQ0FBVjtBQUNBLFdBQUtyRCxNQUFMLENBQVk2QixTQUFaLEdBQXdCdUIsR0FBeEI7QUFDQSxXQUFLSixTQUFMLEdBQWlCLEtBQWpCO0FBQ0QiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia2FsZXlzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImthbGV5c1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RodW1iLmpzXCIpO1xuIiwiY2xhc3MgRnVuY3RvciB7XG4gIGNvbnN0cnVjdG9yKHZhbCkge1xuICAgIHRoaXMudmFsID0gdmFsO1xuICB9XG4gIG1hcChmKSB7XG4gICAgcmV0dXJuIEZ1bmN0b3Iub2YoZih0aGlzLnZhbCkpO1xuICB9XG59XG5GdW5jdG9yLm9mID0gKHZhbCkgPT4gbmV3IEZ1bmN0b3IodmFsKTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmFpc2VCdXR0b24ge1xuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nIG9yIHNlbGVjdG9yfSBlbCDliJ3lp4vljJbnmoTlhYPntKBcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMge1xuICAgKiAgc2hvd2VsOiDmmL7npLrmlbDlrZfnmoTlhYPntKBcbiAgICogIGJ1dHRvbkVsOiDmjInpkq7lhYPntKBcbiAgICogIGluaXRDb3VudDog5Yid5aeL5YyW54K56LWe5pWw77yM5aaC5p6c5Li6MO+8jOS7pXNob3dFbOeahGh0bWzkuLpcdTAwMTPlh4ZcbiAgICogIHN0ZXA6IOavj+asoeeCueWHu+WKoOWHoOasoVxuICAgKiB9IFxuICAgKi9cbiAgY29uc3RydWN0b3IoZWwsIHtcbiAgICBzaG93RWwgPSAnLnByYWlzZS1zaG93JyxcbiAgICBidXR0b25FbCA9ICcucHJhaXNlLWJ0bicsXG4gICAgaW5pdENvdW50ID0gMCxcbiAgICBzdGVwID0gMVxuICB9ID0ge30pIHtcbiAgICBGdW5jdG9yLm9mKHRoaXMpXG4gICAgICAubWFwKHRoaXMuY2hlY2tDb250YWluZXIoZWwpKVxuICAgICAgLm1hcCh0aGlzLmNoZWNrU2hvd0VsKHNob3dFbCkpXG4gICAgICAubWFwKHRoaXMuY2hlY2tCdXR0b24oYnV0dG9uRWwpKVxuICAgICAgLm1hcCh0aGlzLmNoZWNrQ291bnQoaW5pdENvdW50KSk7XG5cbiAgICB0aGlzLnN0ZXAgPSBzdGVwO1xuICAgIHRoaXMuYmluZEV2ZW50KCk7XG4gIH1cblxuICBiaW5kRXZlbnQoKSB7XG4gICAgbGV0IGJ0biA9IHRoaXMuYnRuLFxuICAgICAgc2VsZiA9IHRoaXM7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHNlbGYucHJhaXNlKGUpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH1cblxuICBwcmFpc2UoZSkge1xuICAgIGxldCBzaG93RWwgPSB0aGlzLnNob3dFbDtcbiAgICB0aGlzLmNvdW50ICs9IHRoaXMuc3RlcDtcbiAgICBzaG93RWwuaW5uZXJIVE1MID0gdGhpcy5jb3VudDtcbiAgfVxuICBjaGVja0NvbnRhaW5lcihlbCkge1xuICAgIHJldHVybiAoc2NvcGUpID0+IHtcbiAgICAgIGlmICghZWwpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ+ayoeacieWIneWni+WFg+e0oOmAieaLqeWZqCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzY29wZS5jb250YWluZXIgPSB0eXBlb2YgZWwgPT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xuICAgICAgcmV0dXJuIHNjb3BlO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrQnV0dG9uKGJ0bkVsKSB7XG4gICAgcmV0dXJuIChzY29wZSkgPT4ge1xuICAgICAgc2NvcGUuYnRuID0gUHJhaXNlQnV0dG9uLmNoZWNrRWwoc2NvcGUuY29udGFpbmVyLCBidG5FbCwgJ3BhcmlzZS1idG4nLCAoZWwpID0+IHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gXCLngrnotZ5cIlxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc2NvcGU7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tTaG93RWwoc2hvd0VsKSB7XG4gICAgcmV0dXJuIChzY29wZSkgPT4ge1xuICAgICAgc2NvcGUuc2hvd0VsID0gUHJhaXNlQnV0dG9uLmNoZWNrRWwoc2NvcGUuY29udGFpbmVyLCBzaG93RWwsICdwYXJpc2Utc2hvdycpO1xuICAgICAgcmV0dXJuIHNjb3BlO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ291bnQoaW5pdENvdW50KSB7XG4gICAgcmV0dXJuIChzY29wZSkgPT4ge1xuICAgICAgbGV0IGNvdW50ID0gaW5pdENvdW50IHx8IE51bWJlci5wYXJzZUludChzY29wZS5zaG93RWwuaW5uZXJIVE1MIHx8IDAsIDEwKTtcbiAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgICAgIHNjb3BlLnNob3dFbC5pbm5lckhUTUwgPSBjb3VudDtcbiAgICAgIHJldHVybiBzY29wZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY2hlY2tFbChwYXJlbnQsIHNlbGVjdG9yLCBjbGFzc05hbWUsIGJlZm9yZUNyZWF0ZUNiKSB7XG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgRWxlbWVudCkgcmV0dXJuIHNlbGVjdG9yO1xuICAgIGxldCBlbDtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdzdHJpbmcnKSB7XG4gICAgICBlbCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgIGJlZm9yZUNyZWF0ZUNiICYmIGJlZm9yZUNyZWF0ZUNiKGVsKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfVxufSIsImltcG9ydCBQYXJpc2VCdXR0b24gZnJvbSAnLi9wYXJpc2VfYnV0dG9uJztcblxuXG5jb25zdCBvbmNlID0gZnVuY3Rpb24oZWwsIGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgbGV0IGZuID0gZnVuY3Rpb24oKXtcbiAgICBjYWxsYmFjaygpO1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmbik7XG4gIH1cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuKTtcbn1cbmV4cG9ydCBjbGFzcyBUaHVtYiBleHRlbmRzIFBhcmlzZUJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihlbCwgb3B0aW9ucyk7XG5cbiAgICBsZXQgY2xzTmFtZSA9IHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZTtcbiAgICBpZiAoY2xzTmFtZS5pbmRleE9mKCdwcmFpc2UtdGh1bWInKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsc05hbWUgPSBjbHNOYW1lLnNwbGl0KCcgJykucHVzaCgncHJhaXNlLXRodW1iJykuam9pbignICcpO1xuICAgIH1cblxuICAgIGxldCB0aXRsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZVdyYXBwZXIuY2xhc3NOYW1lID0gJ3BhcmlzZS10aXRsZSc7XG4gICAgdGl0bGVXcmFwcGVyLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInByYWlzZS10aXRsZV9fbGFiZWxcIj7ngrnotZ7mlbDvvJo8L3NwYW4+JztcbiAgICB0aXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5zaG93RWwpO1xuICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZSh0aXRsZVdyYXBwZXIsIHRoaXMuYnRuKTtcblxuICAgIHRoaXMuYnRuLmNsYXNzTmFtZSArPSAnIHRodW1iJztcbiAgICB0aGlzLmJ0bi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRodW1iLWNvbm5lY3RcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHVtYi10aHVtYlwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRodW1iLWZpbmdlci1maXJzdFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRodW1iLWZpbmd0ZXItc2VjXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGh1bWItd3Jpc3RcIj48L2Rpdj5gO1xuICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG4gIH1cblxuICBwcmFpc2UoZSkge1xuICAgIGlmICh0aGlzLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIHN1cGVyLnByYWlzZSgpO1xuICAgIHRoaXMuc3RhcnRBbmltYXRlKCk7XG4gIH1cblxuICBzdGFydEFuaW1hdGUoKXtcbiAgICBvbmNlKHRoaXMuc2hvd0VsLCAnYW5pbWF0aW9uZW5kJywgdGhpcy5jb21wbGV0ZUFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuc2hvd0VsLmNsYXNzTmFtZSArPSAnIHBhcmlzZS1zaG93X19jaGFuZ2UnO1xuICB9XG4gIGNvbXBsZXRlQW5pbWF0ZSgpIHtcbiAgICBsZXQgY2xzID0gdGhpcy5zaG93RWwuY2xhc3NOYW1lLnJlcGxhY2UoJyBwYXJpc2Utc2hvd19fY2hhbmdlJywgJycpO1xuICAgIHRoaXMuc2hvd0VsLmNsYXNzTmFtZSA9IGNscztcbiAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9