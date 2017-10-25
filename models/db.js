let mongoose = require('mongoose')

let db = mongoose.createConnection('mongodb://10.0.0.24:27017/books')

db.once('open', function (callback) {
  console.log('已成功连接数据库')
})

module.exports = db
