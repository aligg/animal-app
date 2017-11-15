const path = require('path');
const koa = require('koa');
const _ = require('koa-route');
const views = require('koa-views'); 
const app = module.exports = new koa();
const database = require('./database').database;
app.use(views(path.join(__dirname, '../views'), { extension: 'ejs' }));



const animals = {
  list: (ctx) => {
    const names = Object.keys(database);
    ctx.render('animals', {  })
    //ctx.body = 'animals: ' + names.join(', ');
  },
    show: (ctx, name) => {
    const animal = database[name];
    if (!animal) return ctx.throw('cannot find that creature', 404);
    ctx.body = animal.name + ' is a ' + animal.species;
  }
};


//app.use(_.get('/', animals.list));
//app.use(_.get('/:name', animals.show));
