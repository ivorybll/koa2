const mysql = require('mysql')
const DBconfig = require("../config/DBconfig")
//建立连接池
let pool = mysql.createPool(DBconfig)
let allSqlAction = (sql, value) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, value, (err, row) => {
          if (err) reject(err)
          else {
            resolve(row)
          }
          connection.release()
        })
      }
    })
  })
}
module.exports = {
  allSqlAction
}