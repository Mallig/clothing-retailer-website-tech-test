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
})