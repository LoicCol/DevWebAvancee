const express = require('express')
const router = express.Router()

import * as flowController from '../controller/FlowController'

module.exports = router

/*
* List flow
*/
router.get('/', flowController.getAllFlow)
/*
* Post a flow
*/
router.put('/', flowController.updateFlow)
/*
* Update a flow
*/
router.post('/', flowController.saveFlow)
/*
* Delete a flow
*/
router.delete('/', flowController.deleteFlow)