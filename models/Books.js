let mongoose = require('mongoose')

let db = require('./db.js')

let booksSchema = new mongoose.Schema({
  'bid': Number,
  'name': String,
  'author': String,
  'age': Number
})

booksSchema.index({'bid': 1})

booksSchema.statics.findAllBooks = function (callback) {
  this.model('Books').find(callback)
}

booksSchema.statics.findOneBook = function (name, callback) {
  this.model('Books').find({name: name}, callback)
}



let booksModle = db.model('Books', booksSchema)

module.exports = booksModle
