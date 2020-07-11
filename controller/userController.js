const user = require("../service/user")
async function checkLogin(ctx, next) {
  let {
    phone,
    password
  } = ctx.request.query
  let data = await user.checkUser(phone, password)
  return ctx.response.body = data

}
async function registerUser(ctx, next) {
  let {
    phone,
    password
  } = ctx.request.query
  let data = await user.findUser(phone, password)
  return ctx.response.body = data
}
module.exports = {
  checkLogin,
  registerUser
}