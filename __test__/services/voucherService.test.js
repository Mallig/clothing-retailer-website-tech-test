const voucherService = require('../../services/voucherService')

describe('.applyVoucher', () => {
    test('returns the cart total with discount applied', (done) => {
        const cartTotal = 198
        const voucherCode = 'MONEYOFF'
        expect(voucherService.applyVoucher(voucherCode, cartTotal)).toEqual(193)
        done()
    })
})