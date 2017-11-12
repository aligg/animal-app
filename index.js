
let mount = require('koa-mount'); //using mount to enable modular code
const _ = require('koa-route'); //enable routes
const Koa = require('koa');
const app = new Koa();


let animalApp = require('./components/animals.js');
let home = require('./components/home.js')


// const home = {
//     display: (ctx) => {
//         ctx.type = 'html';
//         ctx.body = 'Check out our <a href="/animals">animals!</a><br><img src="http://www.androidguys.com/wp-content/uploads/2015/11/02e3f64f32bfffc28b94cd7f53cf3fe0.jpg" style="width:100%;">'
//         ;
//     }
// };

app.use(mount('/', home));
app.use(mount('/animals', animalApp));


app.listen(3000);
console.log('koa is listening on port 3000');

