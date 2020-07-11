const Koa = require("koa")
const router = require("./router/router")
const bodyParser = require("koa-body")
var cors = require('koa2-cors')


var app = new Koa()


app.use(bodyParser())
app.use(router.routes())
app.use(cors({
  origin: function (ctx) {
    // if (ctx.url === '/test') {
    return "*"; // 允许来自所有域名请求
    // }
    // return "http://localhost:8080"; // 这样就能只允许 http://localhost:8080 这个域名的请求了
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true, // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(async (ctx) => {
  // console.log(ctx)
  console.log("404 Not Found")
})

console.log("项目启动http://127.0.0.1:3000")
app.listen(3000)