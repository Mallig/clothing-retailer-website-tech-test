const app = require('../../app')
const request = require('supertest')

test('"/cart/add" responds with status 200', (done) => {
    request(app).post('/cart/add').send({product_id: 1})
        .then((response) => {
            expect(response.statusCode).toBe(200)
            done()
        })
})