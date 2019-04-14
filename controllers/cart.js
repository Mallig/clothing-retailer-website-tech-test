const express = require('express')
const router = express.Router()

router.post('/add', (req, res) => {
    const product_id = req.params.product_id
    res.send()
})

module.exports = router