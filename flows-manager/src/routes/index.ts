'use strict'
import * as express from 'express';
import * as passport from 'passport';
import { JwtStrategy } from '../passport/JwtStrategy';
import { AuthRepository } from '../repository/AuthRepository';

const router = express.Router()
const headersMiddleware = require('../../middlewares/headers')
const LocalStrategy = require('../passport/JwtStrategy');

module.exports = router

router.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next()
})

passport.use(new JwtStrategy( new AuthRepository()));


router.use('/technos', require('./technos'))
router.use('/apps', require('./apps'))
router.use('/flows', require('./flows'));
router.use('/auth/login', require('./login'))
router.use('/auth/register', require('./register'))

router.use((req, res, next) => {
  console.log(req._parsedOriginalUrl)
  let err = new Error('APINotFound')
  err.name = 'APINotFound'
  next(err)
})
