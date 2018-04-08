const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
// const axios = require('')
const render = require('koa-swig');
const co = require('co');

const rq = require('request');


const app = new Koa();
const router = new Router();

app.use(serve(path.join(__dirname, 'public')));

app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: false,
  ext: 'html'
}))

router
  .get('/index/index', async (ctx, next)=> {
    const getData = async function () {
      return new Promise((resolve, reject) => {
        rq.get({
          url: 'http://192.168.64.2/thumbButton/web/index.php?r=praise',
          json:true
        }, (err, res, body) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(body);
        })
      })
    }
    let res = await getData();
    //console.log(res);
    if (res.success) {
      let ret = Object.assign({}, res.data, { title: '点赞+1' });
      ctx.body = await ctx.render('index', ret);
    } else {
      throw new Error("请求失败");
    }
    
  })
  .post('/index/index', async (ctx, next)=> {
    const postData = async function(){
      return new Promise((resolve, reject)=> {
        rq.post('http://192.168.64.2/thumbButton/web/index.php?r=praise/add',(err, response, body) => {
          if (err) {
            reject(err);
            return;
          }
          console.log('body', body);
          resolve(body);
        });
      });
    }
    try {
      let res = await postData();
      // console.log(res);
      let ret = {success: 0};
      if (res.success) {
        ret.success = 1;
        ret.data = res.data;
      }
      ctx.body = ret;
    } catch(e){
      throw new Error(e);
    }
  });


app
  .use(router.routes())
  .use(router.allowedMethods())
  .on('error', e => {
    console.log(e.toString());
  })
  .listen(3000, _=> {
    console.log('server Start')
  });
