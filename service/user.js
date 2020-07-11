const allSqlAction = require("../lib/mysql")
async function checkUser(phone, password) {
  // console.log(phone, 12345)
  // console.log(password, 123456)
  // phone = 17600
  // password = 123456
  let sql = `select * from elm_user where elm_userPhone = ${phone} and elm_userPassword=${password}`
  return allSqlAction.allSqlAction(sql).then(res => {
    if (res.length == 1 && res[0].elm_userPhone == phone && res[0].elm_userPassword == password) {
      return {
        msg: "登录成功",
        code: 200
      }
    } else {
      return {
        msg: "登录失败",
        code: 201
      }
    }
  })
}
async function findUser(phone, password) {
  // phone = 123456789
  // password = 22345678
  let sql = `select*from elm_user where elm_userPhone=${phone}`
  return allSqlAction.allSqlAction(sql).then(res => {
    if (res.length == 0) {
      return registerUser(phone, password)
    } else {
      return findAll()
      return {
        msg: '用户已存在',
        code: 202
      }
    }
  })

}
async function findAll() {

  let sql = `select*from elm_user`
  return allSqlAction.allSqlAction(sql).then(res => {
    return res
  })
}
async function registerUser(phone, password) {
  // phone = 123456789
  // password = 22345678
  let sql = `insert into elm_user (elm_userPhone,elm_userPassword) values ('${phone}','${password}')`
  return allSqlAction.allSqlAction(sql).then(res => {
    if (res.affectedRows == 1) {
      return {
        msg: "注册成功",
        code: 200
      }
    } else {
      return {
        msg: "注册失败",
        code: 200
      }
    }
  })
}
module.exports = {
  checkUser,
  findUser,
  registerUser
}