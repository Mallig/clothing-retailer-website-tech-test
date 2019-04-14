const app = require('../../app')
const request = require('supertest')

test('"/cart/add" responds with status 302', (done) => {
    request(app).post('/cart/add').send({product_id: 1})
        .then((response) => {
            expect(response.statusCode).toBe(302)
            done()
        })
})

test('"/cart/remove" responds with status 302', (done) => {
    request(app).post('/cart/remove').send({ product_id: 1 })
        .then((response) => {
            expect(response.statusCode).toBe(302)
            done()
        })
})

test('"/cart" responds with status 200', (done) => {
    request(app).get('/cart')
        .then((response) => {
            expect(response.statusCode).toBe(200)
            done()
        })
})

test('"/cart/discount" responds with 302', (done) => {
    request(app).post('/cart/discount').send({ discountVoucher: "ATESTVOUCHER" })
        .then((response) => {
            expect(response.statusCode).toBe(302)
            done()
        })
})
