const express = require('express')
const router = express.Router()
const cartService = require('../services/cartService')
const voucherService = require('../services/voucherService')

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
    let alert
    req.session.cartTotal = cartService.total(cart)
    if (req.session.discountVoucher) {
        const voucher = req.session.discountVoucher
        const cartTotal = req.session.cartTotal
        alert = cartTotal === voucherService.applyVoucher(voucher, cartTotal) ? 'Invalid Voucher' : 'Voucher Applied'
        req.session.cartTotal = voucherService.applyVoucher(voucher, cartTotal)
    }
    res.send(compiledFunction({ total: req.session.cartTotal, alert: alert }))
})

router.post('/discount', (req, res) => {
    const voucherCode = req.body.voucher_code
    req.session.discountVoucher = voucherCode || req.session.discountVoucher
    res.redirect('/cart')
})

module.exports = router