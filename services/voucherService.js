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
    let isValid = false

    if (deal.conditions["min-spend"] < cartService.total(cart)) {
        isValid = true
    }


    if (deal.conditions["required-categories"]["any-of"]) {
        for (var i=0; i<Object.keys(cart).length; i++) {
            const product = productList.products.filter(product => product.id == Object.keys(cart)[i])[0]
            if (deal.conditions["required-categories"]["any-of"].includes(product.category) && isValid === true) {
                isValid = true
                return isValid
            }
        }
        isValid =  false
    }
    return isValid
}


module.exports = {
    applyVoucher,
    isValidVoucher
}