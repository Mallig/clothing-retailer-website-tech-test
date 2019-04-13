const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({ "text": "Hello world" })
})

module.exports = router