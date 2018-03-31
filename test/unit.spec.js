var Thumb = kaleys.Thumb;
describe('先实例一个吧', ()=> {
  let div, thumb;
  beforeEach(()=>{
    div = document.createElement('div');
    document.body.appendChild(div);
    thumb = new Thumb(div);
    jasmine.clock().install();
  });
  afterEach(()=> {
    jasmine.clock().uninstall();
  });
  it('实例内应该会有.parise-title和parise-btn',(done) => {
    let title = div.querySelector('.parise-title');
    let btn = div.querySelector('.parise-btn');
    expect(title instanceof Element).toBe(true);
    expect(btn instanceof Element).toBe(true);
    expect(thumb.container).toEqual(div);
    done();
  });

  it('点击应该+1', ()=> {
    thumb.btn.click();
    let count = parseInt(thumb.showEl.innerHTML);
    expect(count).toBe(1);
  });

  it('连续点击2次,点赞数仍为1，必须等动画结束后才会变成2', ()=> {
    let showEl = thumb.showEl;
    thumb.btn.click();
    thumb.btn.click();
    let count = parseInt(showEl.innerHTML, 10);
    expect(count).toBe(1);

    setTimeout(() => {
      thumb.btn.click();
    }, 2000);
    jasmine.clock().tick(2001);
    count = parseInt(showEl.innerHTML, 10);
    expect(count).toBe(6);
  })
})