var Koa = require('koa');

var app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(8008);

console.log('Koa is listening on port 8008');