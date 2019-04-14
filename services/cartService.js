const productList = require('../public/products.json')

add = (product_id, cart) => {
    if (cart[product_id]) {
        return cart[product_id] + 1
    } else {
        return 1
    }
}


module.exports = {
    add
}