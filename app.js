const express = require('express')
const session = require('express-session')

const app = express()
app.use(session({secret: 'secret password', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: true}))

const products = require('./controllers/products')
app.use('/', products)

if (process.env.NODE_ENV !==  "test") {
    app.listen(3000, () => { console.log('App Listening on port 3000')})
}

module.exports = app