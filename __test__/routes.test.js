const app = require('../app')
const request = require('supertest')

test('"/" responds with status 200', (done) => {
    request(app).get('/').then((response) => {
        expect(response.statusCode).toBe(200)
        done()
    })
})