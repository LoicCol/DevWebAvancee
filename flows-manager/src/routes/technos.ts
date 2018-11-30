const express = require('express')
const router = express.Router()

import * as technoController from '../controller/TechnoController'

module.exports = router

/*
* List technos
*/
router.get('/', technoController.getAllTechno)

/*
* get techno
*/
router.get('/:id', technoController.getTechno)

/*
* Post a techno
*/
router.post('/', technoController.saveTechno)
