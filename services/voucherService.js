const discounts = require('../public/deals.json')

applyVoucher = (voucherCode, cartTotal) => {
    for (var i=0; i<discounts.deals.length; i++) {
        if (discounts.deals[i].code === voucherCode) {
            return cartTotal - discounts.deals[i].discount
        }
    }
    return cartTotal
}

module.exports = {
    applyVoucher
}