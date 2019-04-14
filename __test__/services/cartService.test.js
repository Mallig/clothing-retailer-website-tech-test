const cartService = require('../../services/cartService')

describe('.add()', () => {
    describe('when cart contains product matching product_id', () => {
        test('increases quantity of product in cart', (done) => {
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

describe('.remove', () => {
    describe('when cart contains product matching product_id', () => {
        test('reduces quantity of product in basket by 1', () => {
            const cart = { '1': 1 }
            const product_id = '1'
            expect(cartService.remove(product_id, cart)).toEqual(0)
        })
    })
})

describe('.total', () => {
    test('returns the total cart price', () => {
        const cart = { '1': 2 }
        expect(cartService.total(cart)).toEqual({ "total": 198 })
    })
})