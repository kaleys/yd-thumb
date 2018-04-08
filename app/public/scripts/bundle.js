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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PraiseButton; });\nclass Functor {\n  constructor(val) {\n    this.val = val;\n  }\n  map(f) {\n    return Functor.of(f(this.val));\n  }\n}\nFunctor.of = (val) => new Functor(val);\n\n\n\nclass PraiseButton {\n  /**\n   * \n   * @param {string or selector} el 初始化的元素\n   * @param {object} options {\n   *  showel: 显示数字的元素\n   *  buttonEl: 按钮元素\n   *  initCount: 初始化点赞数，如果为0，以showEl的html为\u0013准\n   *  step: 每次点击加几次\n   * } \n   */\n  constructor(el, {\n    showEl = '.praise-show',\n    buttonEl = '.praise-btn',\n    initCount = 0,\n    step = 1,\n    click= null\n  } = {}) {\n    Functor.of(this)\n      .map(this.checkContainer(el))\n      .map(this.checkShowEl(showEl))\n      .map(this.checkButton(buttonEl))\n      .map(this.checkCount(initCount));\n\n    this.step = step;\n    this.click = click;\n    this.bindEvent();\n  }\n\n  bindEvent() {\n    let btn = this.btn,\n      fn = this.click || function(e){\n        // console.log('============')\n        this.praise(e);\n        e.preventDefault();\n      }\n    btn.addEventListener('click', fn.bind(this));\n  }\n\n  praise(e) {\n    let showEl = this.showEl;\n    this.count += this.step;\n    showEl.innerHTML = this.count;\n  }\n  checkContainer(el) {\n    return (scope) => {\n      if (!el) {\n        throw Error('没有初始元素选择器');\n        return;\n      }\n      scope.container = typeof el == 'string' ? document.querySelector(el) : el;\n      return scope;\n    }\n  }\n\n  checkButton(btnEl) {\n    return (scope) => {\n      scope.btn = PraiseButton.checkEl(scope.container, btnEl, 'parise-btn', (el) => {\n        el.innerHTML = \"点赞\"\n      });\n      return scope;\n    }\n  }\n\n  checkShowEl(showEl) {\n    return (scope) => {\n      scope.showEl = PraiseButton.checkEl(scope.container, showEl, 'parise-show');\n      return scope;\n    }\n  }\n\n  checkCount(initCount) {\n    return (scope) => {\n      let count = initCount || parseInt(scope.showEl.innerHTML || 0, 10);\n      this.count = count;\n      scope.showEl.innerHTML = count;\n      return scope;\n    }\n  }\n\n  static checkEl(parent, selector, className, beforeCreateCb) {\n    if (selector instanceof Element) return selector;\n    let el;\n    if (typeof selector == 'string') {\n      el = parent.querySelector(selector);\n    }\n    if (!el) {\n      el = document.createElement('div');\n      el.className = className;\n      beforeCreateCb && beforeCreateCb(el);\n      parent.appendChild(el);\n    }\n    return el;\n  }\n}\n\n//# sourceURL=webpack://kaleys/./src/parise_button.js?");

/***/ }),

/***/ "./src/thumb.js":
/*!**********************!*\
  !*** ./src/thumb.js ***!
  \**********************/
/*! exports provided: Thumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Thumb\", function() { return Thumb; });\n/* harmony import */ var _parise_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parise_button */ \"./src/parise_button.js\");\n\n\n\nconst once = function(el, eventName, callback) {\n  let fn = function(){\n    callback();\n    el.removeEventListener(eventName, fn);\n  }\n  el.addEventListener(eventName, fn);\n}\n\n\nclass Thumb extends _parise_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el, options = {}) {\n    super(el, options);\n    let clsName = this.container.className||'';\n    if (clsName.indexOf('praise-thumb') === -1) {\n      clsName = clsName.split(' ');\n      clsName.push('praise-thumb');\n      this.container.className = clsName.join(' ');\n    }\n\n    let titleWrapper = document.createElement('div');\n    titleWrapper.className = 'parise-title';\n    titleWrapper.innerHTML = '<span class=\"praise-title__label\">点赞数：</span>';\n    titleWrapper.appendChild(this.showEl);\n    this.container.insertBefore(titleWrapper, this.btn);\n\n    this.btn.className += ' thumb';\n    this.btn.innerHTML = `<div class=\"thumb-connect\"></div>\n            <div class=\"thumb-thumb\"></div>\n            <div class=\"thumb-finger-first\"></div>\n            <div class=\"thumb-fingter-sec\"></div>\n            <div class=\"thumb-wrist\"></div>`;\n    this.animating = false;\n  }\n\n  praise(e) {\n    // if (this.animating) return;\n    super.praise();\n    this.startAnimate();\n  }\n\n  startAnimate(){\n    once(this.showEl, 'animationend', this.completeAnimate.bind(this));\n    // this.animating = true;\n    this.showEl.className += ' parise-show__change';\n  }\n  completeAnimate() {\n    let cls = this.showEl.className.replace(' parise-show__change', '');\n    this.showEl.className = cls;\n    // this.animating = false;\n  }\n\n}\n\n//# sourceURL=webpack://kaleys/./src/thumb.js?");

/***/ })

/******/ });
});