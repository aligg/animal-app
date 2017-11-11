var koa = require('koa');
const _ = require('koa-route');
var app = module.exports = new koa();
// let database = require('./database.js');

const database = {
  slinky: { name: 'slinky', species: 'dog' },
  fluffy: { name: 'fluffy', species: 'cat' },
  creature: { name: 'creature', species: 'human' }
};

app.use(function *(next){
  yield next;
  const names = Object.keys(database);
  this.body = 'animals: ' + names.join(', ');
});


// const animals = {
//   list: (ctx) => {
//     const names = Object.keys(database);
//     ctx.body = 'animals: ' + names.join(', ');
//   },
//     show: (ctx, name) => {
//     const animal = database[name];
//     if (!animal) return ctx.throw('cannot find that creature', 404);
//     ctx.body = animal.name + ' is a ' + animal.species;
//   }
// };

// app.use(_.get('/animals', animals.list));
// app.use(_.get('/animals/:name', animals.show));