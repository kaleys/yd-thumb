(function(global, factory){
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = global.document ? factory(global, true): function(w) {
            if (!w.document) {
                throw new Error('没有document对象')
            }
            return factory(w)
        }
    }
}(typeof window !== 'undefined' ? window: this, function(window, noGlobal){
    'use strict';

    var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

    var Thumb = function (_PraiseButton) {
        _inherits(Thumb, _PraiseButton);

        function Thumb(el) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _classCallCheck(this, Thumb);

            var _this2 = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, el, options));

            var clsName = _this2.container.className;
            if (clsName.indexOf('praise-thumb') === -1) {
                _this2.container.clsName = clsName.split(' ').push('praise-thumb').join(' ');
            }

            var titleWrapper = document.createElement('div');
            titleWrapper.className = 'praise-title';
            titleWrapper.innerHTML = '<span class="praise-title__label">点赞数：</span>';
            titleWrapper.appendChild(_this2.showEl);
            _this2.container.appendChild(titleWrapper);

            _this2.btn.className += ' thumb';
            _this2.btn.innerHTML = '<div class="thumb-connect"></div>\n            <div class="thumb-thumb"></div>\n            <div class="thumb-finger-first"></div>\n            <div class="thumb-fingter-sec"></div>\n            <div class="thumb-wrist"></div>';
            return _this2;
        }

        _createClass(Thumb, [{
            key: 'praise',
            value: function praise(e) {
                var target = e.target;
                _get(Thumb.prototype.__proto__ || Object.getPrototypeOf(Thumb.prototype), 'praise', this).call(this);
            }
        }]);

        return Thumb;
    }(PraiseButton);

    if (typeof define === 'function' && define.amd) {
        define('Thumb', [], function(){
            return Thumb;
        })
    }

    if (!noGlobal) {
        window.Thumb = Thumb;
    }
    

}));