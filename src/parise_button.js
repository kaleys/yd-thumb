class Functor {
  constructor(val) {
    this.val = val;
  }
  map(f) {
    return Functor.of(f(this.val));
  }
}
Functor.of = (val) => new Functor(val);


export default class PraiseButton {
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
  constructor(el, {
    showEl = '.praise-show',
    buttonEl = '.praise-btn',
    initCount = 0,
    step = 1
  } = {}) {
    Functor.of(this)
      .map(this.checkContainer(el))
      .map(this.checkShowEl(showEl))
      .map(this.checkButton(buttonEl))
      .map(this.checkCount(initCount));

    this.step = step;
    this.bindEvent();
  }

  bindEvent() {
    let btn = this.btn,
      self = this;
    btn.addEventListener('click', function (e) {
      self.praise(e);
      e.preventDefault();
      return false;
    })
  }

  praise(e) {
    let showEl = this.showEl;
    this.count += this.step;
    showEl.innerHTML = this.count;
  }
  checkContainer(el) {
    return (scope) => {
      if (!el) {
        throw Error('没有初始元素选择器');
        return;
      }
      scope.container = typeof el == 'string' ? document.querySelector(el) : el;
      return scope;
    }
  }

  checkButton(btnEl) {
    return (scope) => {
      scope.btn = PraiseButton.checkEl(scope.container, btnEl, 'parise-btn', (el) => {
        el.innerHTML = "点赞"
      });
      return scope;
    }
  }

  checkShowEl(showEl) {
    return (scope) => {
      scope.showEl = PraiseButton.checkEl(scope.container, showEl, 'parise-show');
      return scope;
    }
  }

  checkCount(initCount) {
    return (scope) => {
      let count = initCount || parseInt(scope.showEl.innerHTML || 0, 10);
      this.count = count;
      scope.showEl.innerHTML = count;
      return scope;
    }
  }

  static checkEl(parent, selector, className, beforeCreateCb) {
    if (selector instanceof Element) return selector;
    let el;
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
}