const productList = require('../public/products.json')

add = (product_id, cart) => {
    for (var i=0; i<productList.products.length; i++) {
        if (cart[product_id]) {
            if (productList.products[i].id == product_id && cart[product_id] < productList.products[i].stock) {
                return cart[product_id] + 1
            }
        } else {
            return 1
        }
    }
}

remove = (product_id, cart) => {
    if (cart && cart[product_id] > 0) {
        return cart[product_id] -1
    } else {
        return 0
    }
}

total = (cart) => {
    let total = 0
    if (cart) {
        for (var i=0; i<Object.keys(cart).length; i++) {
            for (var j=0; j<productList.products.length; j++) {
                if (Object.keys(cart)[i] == productList.products[j].id) {
                    total += productList.products[j].price * cart[Object.keys(cart)[i]]
                }
            }
        }
        return  total
    }
}

module.exports = {
    add,
    remove,
    total
}