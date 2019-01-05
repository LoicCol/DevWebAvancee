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
* Post a flow
*/
router.put('/', passport.authenticate('jwt', { session: false }), flowController.updateFlow)
/*
* Update a flow
*/
router.post('/', passport.authenticate('jwt', { session: false }), flowController.saveFlow)
/*
* Delete a flow
*/
router.delete('/', passport.authenticate('jwt', { session: false }), flowController.deleteFlow)
