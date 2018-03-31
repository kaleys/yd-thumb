import PraiseButton from './parise_button.js';
export default class Thumb extends PraiseButton {
  constructor(el, options = {}) {
    super(el, options);

    let clsName = this.container.className;
    if (clsName.indexOf('praise-thumb') === -1) {
      this.container.clsName = clsName.split(' ').push('praise-thumb').join(' ');
    }

    let titleWrapper = document.createElement('div');
    titleWrapper.className = 'praise-title';
    titleWrapper.innerHTML = '<span class="praise-title__label">点赞数：</span>';
    titleWrapper.appendChild(this.showEl);
    this.container.appendChild(titleWrapper);

    this.btn.className += ' thumb';
    this.btn.innerHTML = `<div class="thumb-connect"></div>
            <div class="thumb-thumb"></div>
            <div class="thumb-finger-first"></div>
            <div class="thumb-fingter-sec"></div>
            <div class="thumb-wrist"></div>`;
  }

  praise(e) {
    let target = e.target;
    super.praise();
  }

}