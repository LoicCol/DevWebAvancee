const express = require('express')
const router = express.Router()

import * as technoController from '../controller/TechnoController'

module.exports = router

/*
* List technos
*/
console.log('YOYOYO 3')
router.get('/', technoController.getAllTechno)

console.log('YOYOYO 4')
/*
* Post a techno
*/
router.post('/', technoController.saveTechno)
