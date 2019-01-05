const express = require('express')
const router = express.Router()

import * as passport from 'passport';
import * as flowController from '../controller/FlowController'

module.exports = router

/*
* List flow
*/
router.get('/', flowController.getAllFlow)
/*
* get a Flow
*/
router.get('/:id', flowController.getFlow)
/*
* Post a flow
* Need to be Authentified
*/
router.put('/', passport.authenticate('jwt', { session: false }), flowController.updateFlow)
/*
* Update a flow
* Need to be Authentified
*/
router.post('/', passport.authenticate('jwt', { session: false }), flowController.saveFlow)
/*
* Delete a flow
* Need to be Authentified
*/
router.delete('/', passport.authenticate('jwt', { session: false }), flowController.deleteFlow)
