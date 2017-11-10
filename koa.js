
/////////////////////////////////////////////////////////////
// const http = require('http');
// const https = require('https');
// const Koa = require('koa');
// const app = new Koa();

// // x-response-time
// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// // logger
// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

// // response

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// app.listen(3000);
// console.log('Koa is listening on port 3000');



/////////////////////////////////////////////////////////////
var Koa = require('koa');
var route = require('koa-route');

var app = new Koa();

app.use(route.get('/', index));
app.use(route.get('/about', about));

//The asterisk is key, designates a function as a generator.
function *index() {
  this.body = "<h1>Hello! This is my home page!</h1>";
}

function *about() {
  this.body = "<h2>My name is Ali and I like JavaScript</h2>";
}

app.listen(8008);
console.log('Koa is listening on port 8008');



/////////////////////////////////////////////////////////////
// const _ = require('koa-route');
// const Koa = require('koa');
// const app = new Koa();

// const db = {
//   tobi: { name: 'tobi', species: 'ferret' },
//   loki: { name: 'loki', species: 'ferret' },
//   jane: { name: 'jane', species: 'ferret' }
// };

// const pets = {
//   list: (ctx) => {
//     const names = Object.keys(db);
//     ctx.body = 'pets: ' + names.join(', ');
//   },

//   show: (ctx, name) => {
//     const pet = db[name];
//     if (!pet) return ctx.throw('cannot find that pet', 404);
//     ctx.body = pet.name + ' is a ' + pet.species;
//   }
// };

// app.use(_.get('/pets', pets.list));
// app.use(_.get('/pets/:name', pets.show));

// app.listen(3000);
// console.log('listening on port 3000');