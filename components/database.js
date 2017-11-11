var koa = require('koa');
var app = module.exports = new koa();


const database = {
  slinky: { name: 'slinky', species: 'dog' },
  fluffy: { name: 'fluffy', species: 'cat' },
  creature: { name: 'creature', species: 'human' }
};

console.log(database)