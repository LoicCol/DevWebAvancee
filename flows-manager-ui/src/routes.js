import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import App from './components/App'

import Technos from './components/Technos'
import FlowChart from './components/FlowChart'

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Route path='/' exact component={App} />
      <Route path='/technos' component={Technos} />
      <Route path='/flowchart' component={FlowChart} />
    </div>
  </Router>
)

export default Routes
