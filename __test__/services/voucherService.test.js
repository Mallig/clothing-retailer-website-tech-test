const voucherService = require('../../services/voucherService')

describe('.applyVoucher', () => {
    describe('when voucher is valid', () => {
        test('returns the cart total with discount applied', (done) => {
            const cartTotal = 198
            const voucherCode = 'MONEYOFF'
            expect(voucherService.applyVoucher(voucherCode, cartTotal)).toEqual(193)
            done()
        })
    })

    describe('when voucher is invalid', () => {
        test('doen not apply any discounts', (done) => {
            const cartTotal = 10
            const voucherCode = 'MOREMONEYOFF'
            expect(voucherService.applyVoucher(voucherCode, cartTotal)).toEqual(10)
            done()
        })
    })
})