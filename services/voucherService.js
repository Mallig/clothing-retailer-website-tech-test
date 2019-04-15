const discounts = require('../public/deals.json')
const productList = require('../public/products.json')
const cartService = require('./cartService')

applyVoucher = (voucherCode, cart) => {
    for (var i=0; i<discounts.deals.length; i++) {
        if (discounts.deals[i].code === voucherCode) {
            if (isValidVoucher(discounts.deals[i], cart)) {
                return cartService.total(cart) - discounts.deals[i].discount
            }
        }
    }
    return cartService.total(cart)
}

isValidVoucher = (deal, cart) => {
    if (deal.conditions["min-spend"] < cartService.total(cart)) {
        return true
    }
}

module.exports = {
    applyVoucher,
    isValidVoucher
}