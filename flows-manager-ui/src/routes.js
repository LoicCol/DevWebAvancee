import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import AppInit from './components/AppInit'

const Routes = props => (
  <Router {...props}>
    <div>
      <AppInit />
    </div>
  </Router>
)

export default Routes
