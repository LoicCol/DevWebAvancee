import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import AppInit from './components/AppInit'

import Authent from './components/Authent'
import Technos from './components/Technos'
import Flows from './components/Flows'
import FlowChart from './components/FlowChart'
import Apps from './components/Apps'

const Routes = props => (
  <Router {...props}>
    <div>
      <Route path="/" exact component={AppInit} />
      <Route path="/authent" component={Authent} />
      <Route path="/technos" component={Technos} />
      <Route path="/flows" component={Flows} />
      <Route path="/flowchart" component={FlowChart} />
      <Route path="/apps" component={FlowChart} />
    </div>
  </Router>
)

export default Routes
