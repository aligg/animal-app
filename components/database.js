var koa = require('koa');
var app = module.exports = new koa();

//dummy data 
const database = {
  slinky: { name: 'slinky', species: 'dog' },
  fluffy: { name: 'fluffy', species: 'cat' },
  creature: { name: 'creature', species: 'human' }
};


//send data out into the universe
module.exports = {database: database};
