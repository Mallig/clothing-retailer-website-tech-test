const express = require('express')
const router = express.Router()
const cartService = require('../services/cartService')
// const voucherService = require('../services/voucherService')

const pug = require('pug')
const compiledFunction = pug.compileFile('./views/cart.pug')

router.post('/add', (req, res) => {
    req.session.cart = req.session.cart ? req.session.cart : {}
    const cart = req.session.cart
    const product_id = req.body.product_id
    
    cart[product_id] = cartService.add(product_id, cart)
    
    res.redirect('/')
})

router.post('/remove', (req, res) => {
    req.session.cart = req.session.cart ? req.session.cart : {}
    const cart = req.session.cart
    const product_id = req.body.product_id

    cart[product_id] = cartService.remove(product_id, cart)

    res.redirect('/')
})

router.get('/', (req, res) => {
    const cart = req.session.cart
    const cartTotal = cartService.total(cart)
    req.session.cartTotal = cartService.total(cart)
    res.send(compiledFunction({ total: req.session.cartTotal }))
})

router.post('/discount', (req, res) => {
    const voucherCode = req.body.voucher_code
    req.session.discountVoucher = voucherCode
    res.redirect('/cart')
})

module.exports = router