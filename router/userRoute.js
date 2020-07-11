const Router = require("koa-router")
const service = require("../lib/mysql")
const {
  checkLogin,
  registerUser
} = require("../controller/userController")
const router = Router()
router.get('/', checkLogin);
router.get('/hello/:name', async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});
router.get("/login", checkLogin)
router.get("/register", registerUser)
module.exports = router