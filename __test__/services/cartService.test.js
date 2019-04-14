const cartService = require('../../services/cartService')

describe('.add()', () => {
    describe('when cart contains product matching product_id', () => {
        test('returns 1 greater than currently in the cart', (done) => {
            const cart = { '1': 1 }
            const product_id = '1'
            expect(cartService.add(product_id, cart)).toEqual(2)
            done()
        })
    })

    describe('when cart doesn\'t contain product matching product_id', () => {
        test('adds product to cart', (done) => {
            const cart = { }
            const product_id = '1'
            expect(cartService.add(product_id, cart)).toEqual(1)
            done()
        })
    })

})