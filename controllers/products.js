const express = require('express')
const router = express.Router()
const pug = require('pug')

const compiledFunction = pug.compileFile('./views/products.pug')
const products = require('../public/products')

router.get('/', (req, res) => {
    console.log(req.session.cart)
    res.send(compiledFunction(products))
})

module.exports = router