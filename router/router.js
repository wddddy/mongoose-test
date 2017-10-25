let Books = require('../models/Books.js')

exports.addbooks = function (req, res, next) {
  res.render('addbooks.ejs')
}

exports.addbook = function (req, res, next) {
  console.log(req.query)
  Books.create(req.query, function (err) {
    if (err) {
      console.log(err)
    }
    res.send('添加成功')
  })
}

exports.showbooks = function (req, res, next) {
  Books.findAllBooks(function (err, result) {
    if(err) {
      console.log(err)
    }
    console.log(result)
    res.render('showbooks', {
      books: result
    })
  })
}

exports.showedit = function (req, res, next) {
  Books.findOneBook(req.query.name, function (err, result) {
    res.render('edit', result[0])
  })
}

exports.doedit = function (req, res, next) {
  console.log(req.params)
  Books.find({'bid': req.params.bid}, function (err, result) {
    console.log(result)
    result[0].update(req.query, function (err) {
      if(err) console.log(err)
      res.send('修改成功')
    })
  })
}

exports.remove = function (req, res, next) {
  Books.find({'bid': req.params.bid}, function (err, result) {
    result[0].remove(function (err) {
      res.send('删除成功')
    })
  })
}
