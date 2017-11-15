const mount = require('koa-mount'); //using mount to enable modular code
const _ = require('koa-route'); //enable routes
const Koa = require('koa');
const app = new Koa();


const animalApp = require('./components/animals.js');
const home = require('./components/home.js')


app.use(mount('/animals', animalApp));
app.use(mount('/', home));

app.listen(3000);
console.log('koa is listening on port 3000');

