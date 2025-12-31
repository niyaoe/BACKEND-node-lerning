const express = require('express')
const userCreate = require('../Controller/userControl')

const router = express.Router()

router.route('/').post(userCreate)

module.exports = router