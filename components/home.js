const path = require('path');
const views = require('koa-views'); //
var koa = require('koa');
const _ = require('koa-route');
var app = module.exports = new koa();
app.use(views(path.join(__dirname, '../views'), { extension: 'ejs' }));


// const home = {
//     display: (ctx) => {
//         ctx.type = 'html';
//         ctx.body = 'Check out our <a href="/animals">animals!</a><br><img src="http://www.androidguys.com/wp-content/uploads/2015/11/02e3f64f32bfffc28b94cd7f53cf3fe0.jpg" style="width:100%;">'
//         ;
//     }
// };

app.use(async function(ctx) {
  await ctx.render('home', {  });
});




// app.use(_.get('/', home.display));
