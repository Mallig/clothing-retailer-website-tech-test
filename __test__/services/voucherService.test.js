const voucherService = require('../../services/voucherService')

describe('.applyVoucher', () => {
    describe('when voucher is valid', () => {
        test('returns the cart total with discount applied', (done) => {
            const cart = { '1': 2 }
            const voucherCode = 'MONEYOFF'
            expect(voucherService.applyVoucher(voucherCode, cart)).toEqual(193)
            done()
        })
    })

    describe('when voucher is invalid', () => {
        test('doen not apply any discounts', (done) => {
            const cart = { '3': 1 }
            const voucherCode = 'MOREMONEYOFF'
            expect(voucherService.applyVoucher(voucherCode, cart)).toEqual(34)
            done()
        })
    })
})