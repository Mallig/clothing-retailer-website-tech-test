const discounts = require('../public/deals.json')

applyVoucher = (voucherCode, cartTotal) => {
    for (var i=0; i<discounts.deals.length; i++) {
        if (discounts.deals[i].code === voucherCode) {
            if (isValidVoucher(discounts.deals[i], cartTotal)) {
                return cartTotal - discounts.deals[i].discount
            }
        }
    }
    return cartTotal
}

isValidVoucher = (deal, cartTotal) => {
    if (deal.conditions["min-spend"] < cartTotal) {
        return true
    }
}

module.exports = {
    applyVoucher,
    isValidVoucher
}