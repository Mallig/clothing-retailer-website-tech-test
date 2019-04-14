const express = require('express')
const router = express.Router()
const cartService = require('../services/cartService')

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

    // cart[product_id] = cartService.remove(product_id, cart)

    res.redirect('/')
})

module.exports = router