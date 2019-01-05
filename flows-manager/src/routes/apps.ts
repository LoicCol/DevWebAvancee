const express = require('express')
const router = express.Router()

import * as passport from 'passport';
import * as appController from '../controller/ApplicationController'

module.exports = router

/*
* List App
*/
router.get('/', appController.getAllApp)
/*
* get an App
*/
router.get('/:id', appController.getApp)
/*
* Post an App
*/
router.post('/', passport.authenticate('jwt', { session: false }), appController.saveApp)
/*
* Update an App
*/
router.put('/', passport.authenticate('jwt', { session: false }), appController.updateApp)
/*
* Delete an App
*/
router.delete('/', passport.authenticate('jwt', { session: false }), appController.deleteApp)
