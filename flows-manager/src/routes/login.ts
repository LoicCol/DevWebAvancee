const express = require('express')
const router = express.Router()

import * as authController from '../controller/AuthController'

module.exports = router

router.post('/', authController.loginUser)
