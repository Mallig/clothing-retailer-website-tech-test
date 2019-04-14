const express = require('express')
const session = require('express-session')

const app = express()
app.use(session({secret: 'secret password', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

const products = require('./controllers/products')
const cart = require('./controllers/cart')
app.use('/', products)
app.use('/cart', cart)

if (process.env.NODE_ENV !==  "test") {
    app.listen(3000, () => { console.log('App Listening on port 3000')})
}

module.exports = app