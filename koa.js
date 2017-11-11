
// var koa = require('koa');
// var app = new koa();
 
// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });
 
// app.listen(3000);
// console.log('Koa is listening on port 3000');

const _ = require('koa-route');
const Koa = require('koa');
const app = new Koa();

const database = {
  slinky: { name: 'slinky', species: 'dog' },
  fluffy: { name: 'fluffy', species: 'cat' },
  creature: { name: 'creature', species: 'human' }
};

const animals = {
  list: (ctx) => {
    const names = Object.keys(database);
    ctx.body = 'animals: ' + names.join(', ');
  },

  show: (ctx, name) => {
    const animal = database[name];
    if (!animal) return ctx.throw('cannot find that creature', 404);
    ctx.body = animal.name + ' is a ' + animal.species;
  }
};

const home = {
    display: (ctx) => {
        ctx.type = 'html';
        ctx.body = 'Check out our <a href="/animals">animals!</a>';
    }
};

app.use(_.get('/animals', animals.list));
app.use(_.get('/animals/:name', animals.show));
app.use(_.get('/', home.display));

app.listen(3000);
console.log('koa is listening on port 3000');