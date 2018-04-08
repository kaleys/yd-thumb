import PariseButton from './parise_button';


const once = function(el, eventName, callback) {
  let fn = function(){
    callback();
    el.removeEventListener(eventName, fn);
  }
  el.addEventListener(eventName, fn);
}


export class Thumb extends PariseButton {
  constructor(el, options = {}) {
    super(el, options);
    let clsName = this.container.className||'';
    if (clsName.indexOf('praise-thumb') === -1) {
      clsName = clsName.split(' ');
      clsName.push('praise-thumb');
      this.container.className = clsName.join(' ');
    }

    let titleWrapper = document.createElement('div');
    titleWrapper.className = 'parise-title';
    titleWrapper.innerHTML = '<span class="praise-title__label">点赞数：</span>';
    titleWrapper.appendChild(this.showEl);
    this.container.insertBefore(titleWrapper, this.btn);

    this.btn.className += ' thumb';
    this.btn.innerHTML = `<div class="thumb-connect"></div>
            <div class="thumb-thumb"></div>
            <div class="thumb-finger-first"></div>
            <div class="thumb-fingter-sec"></div>
            <div class="thumb-wrist"></div>`;
    this.animating = false;
  }

  praise(e) {
    // if (this.animating) return;
    super.praise();
    this.startAnimate();
  }

  startAnimate(){
    once(this.showEl, 'animationend', this.completeAnimate.bind(this));
    // this.animating = true;
    this.showEl.className += ' parise-show__change';
  }
  completeAnimate() {
    let cls = this.showEl.className.replace(' parise-show__change', '');
    this.showEl.className = cls;
    // this.animating = false;
  }

}