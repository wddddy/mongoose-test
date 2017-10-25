let express = require('express')

let app = express()

let router = require('./router/router')

app.set('views engine', 'ejs')

app.get('/', router.showbooks)
app.get('/addbooks', router.addbooks)
app.get('/addbook', router.addbook)
app.get('/showedit', router.showedit)
app.get('/showedit/doedit/:bid', router.doedit)
app.get('/remove/:bid', router.remove)

app.listen(3000)