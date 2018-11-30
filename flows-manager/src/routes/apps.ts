const express = require('express')
const router = express.Router()

import * as appController from '../controller/ApplicationController'

module.exports = router

/*
* List App
*/
router.get('/', appController.getAllApp)
/*
* Post an App
*/
router.post('/', appController.saveApp)
/*
* Update an App
*/
router.put('/', appController.updateApp)
/*
* Delete an App
*/
router.delete('/', appController.deleteApp)
