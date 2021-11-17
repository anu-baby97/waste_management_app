const express = require('express')
const router = express.Router()
const user_data = require('../model/Logindata')
router.use(express.static('./public'))


module.exports = router