const path = require('path');
const views = require('koa-views'); //
const koa = require('koa');
const _ = require('koa-route');
const app = module.exports = new koa();
app.use(views(path.join(__dirname, '../views'), { extension: 'ejs' }));



app.use(async function(ctx) {
  await ctx.render('home', {  });
});

