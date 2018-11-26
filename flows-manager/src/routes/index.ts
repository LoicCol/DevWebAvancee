'use strict'
const express = require('express')
const router = express.Router()
const headersMiddleware = require('../../middlewares/headers')

module.exports = router

console.log('YOYOYOYO')

router.use((req, res, next) => {
  console.log('YAAAAA 2')
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next()
})


console.log('YOYOYOYO 3')
router.use('/technos', require('./technos'))

router.use((req, res, next) => {
  console.log(req._parsedOriginalUrl)
  let err = new Error('APINotFound')
  err.name = 'APINotFound'
  next(err)
})
