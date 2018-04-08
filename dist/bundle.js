(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["kaleys"] = factory();
	else
		root["kaleys"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/thumb.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/parise_button.js":
/*!******************************!*\
  !*** ./src/parise_button.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Functor = function () {\n  function Functor(val) {\n    _classCallCheck(this, Functor);\n\n    this.val = val;\n  }\n\n  _createClass(Functor, [{\n    key: 'map',\n    value: function map(f) {\n      return Functor.of(f(this.val));\n    }\n  }]);\n\n  return Functor;\n}();\n\nFunctor.of = function (val) {\n  return new Functor(val);\n};\n\nvar PraiseButton = function () {\n  /**\n   * \n   * @param {string or selector} el 初始化的元素\n   * @param {object} options {\n   *  showel: 显示数字的元素\n   *  buttonEl: 按钮元素\n   *  initCount: 初始化点赞数，如果为0，以showEl的html为\u0013准\n   *  step: 每次点击加几次\n   * } \n   */\n  function PraiseButton(el) {\n    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n        _ref$showEl = _ref.showEl,\n        showEl = _ref$showEl === undefined ? '.praise-show' : _ref$showEl,\n        _ref$buttonEl = _ref.buttonEl,\n        buttonEl = _ref$buttonEl === undefined ? '.praise-btn' : _ref$buttonEl,\n        _ref$initCount = _ref.initCount,\n        initCount = _ref$initCount === undefined ? 0 : _ref$initCount,\n        _ref$step = _ref.step,\n        step = _ref$step === undefined ? 1 : _ref$step;\n\n    _classCallCheck(this, PraiseButton);\n\n    Functor.of(this).map(this.checkContainer(el)).map(this.checkShowEl(showEl)).map(this.checkButton(buttonEl)).map(this.checkCount(initCount));\n\n    this.step = step;\n    this.bindEvent();\n  }\n\n  _createClass(PraiseButton, [{\n    key: 'bindEvent',\n    value: function bindEvent() {\n      var btn = this.btn,\n          self = this;\n      btn.addEventListener('click', function (e) {\n        self.praise(e);\n        e.preventDefault();\n        return false;\n      });\n    }\n  }, {\n    key: 'praise',\n    value: function praise(e) {\n      var showEl = this.showEl;\n      this.count += this.step;\n      showEl.innerHTML = this.count;\n    }\n  }, {\n    key: 'checkContainer',\n    value: function checkContainer(el) {\n      return function (scope) {\n        if (!el) {\n          throw Error('没有初始元素选择器');\n          return;\n        }\n        scope.container = typeof el == 'string' ? document.querySelector(el) : el;\n        return scope;\n      };\n    }\n  }, {\n    key: 'checkButton',\n    value: function checkButton(btnEl) {\n      return function (scope) {\n        scope.btn = PraiseButton.checkEl(scope.container, btnEl, 'parise-btn', function (el) {\n          el.innerHTML = \"点赞\";\n        });\n        return scope;\n      };\n    }\n  }, {\n    key: 'checkShowEl',\n    value: function checkShowEl(showEl) {\n      return function (scope) {\n        scope.showEl = PraiseButton.checkEl(scope.container, showEl, 'parise-show');\n        return scope;\n      };\n    }\n  }, {\n    key: 'checkCount',\n    value: function checkCount(initCount) {\n      var _this = this;\n\n      return function (scope) {\n        var count = initCount || parseInt(scope.showEl.innerHTML || 0, 10);\n        _this.count = count;\n        scope.showEl.innerHTML = count;\n        return scope;\n      };\n    }\n  }], [{\n    key: 'checkEl',\n    value: function checkEl(parent, selector, className, beforeCreateCb) {\n      if (selector instanceof Element) return selector;\n      var el = void 0;\n      if (typeof selector == 'string') {\n        el = parent.querySelector(selector);\n      }\n      if (!el) {\n        el = document.createElement('div');\n        el.className = className;\n        beforeCreateCb && beforeCreateCb(el);\n        parent.appendChild(el);\n      }\n      return el;\n    }\n  }]);\n\n  return PraiseButton;\n}();\n\nexports.default = PraiseButton;\n\n//# sourceURL=webpack://kaleys/./src/parise_button.js?");

/***/ }),

/***/ "./src/thumb.js":
/*!**********************!*\
  !*** ./src/thumb.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Thumb = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _parise_button = __webpack_require__(/*! ./parise_button */ \"./src/parise_button.js\");\n\nvar _parise_button2 = _interopRequireDefault(_parise_button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar once = function once(el, eventName, callback) {\n  var fn = function fn() {\n    callback();\n    el.removeEventListener(eventName, fn);\n  };\n  el.addEventListener(eventName, fn);\n};\n\nvar Thumb = exports.Thumb = function (_PariseButton) {\n  _inherits(Thumb, _PariseButton);\n\n  function Thumb(el) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, Thumb);\n\n    var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, el, options));\n\n    var clsName = _this.container.className || '';\n    if (clsName.indexOf('praise-thumb') === -1) {\n      clsName = clsName.split(' ');\n      clsName.push('praise-thumb');\n      _this.container.className = clsName.join(' ');\n    }\n\n    var titleWrapper = document.createElement('div');\n    titleWrapper.className = 'parise-title';\n    titleWrapper.innerHTML = '<span class=\"praise-title__label\">点赞数：</span>';\n    titleWrapper.appendChild(_this.showEl);\n    _this.container.insertBefore(titleWrapper, _this.btn);\n\n    _this.btn.className += ' thumb';\n    _this.btn.innerHTML = '<div class=\"thumb-connect\"></div>\\n            <div class=\"thumb-thumb\"></div>\\n            <div class=\"thumb-finger-first\"></div>\\n            <div class=\"thumb-fingter-sec\"></div>\\n            <div class=\"thumb-wrist\"></div>';\n    _this.animating = false;\n    return _this;\n  }\n\n  _createClass(Thumb, [{\n    key: 'praise',\n    value: function praise(e) {\n      if (this.animating) return;\n      _get(Thumb.prototype.__proto__ || Object.getPrototypeOf(Thumb.prototype), 'praise', this).call(this);\n      this.startAnimate();\n    }\n  }, {\n    key: 'startAnimate',\n    value: function startAnimate() {\n      once(this.showEl, 'animationend', this.completeAnimate.bind(this));\n      this.animating = true;\n      this.showEl.className += ' parise-show__change';\n    }\n  }, {\n    key: 'completeAnimate',\n    value: function completeAnimate() {\n      var cls = this.showEl.className.replace(' parise-show__change', '');\n      this.showEl.className = cls;\n      this.animating = false;\n    }\n  }]);\n\n  return Thumb;\n}(_parise_button2.default);\n\n//# sourceURL=webpack://kaleys/./src/thumb.js?");

/***/ })

/******/ });
});