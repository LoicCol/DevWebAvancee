import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import AppInit from './components/AppInit'

import AuthentContainer from './components/Authent/AuthentContainer'
import TechnosContainer from './components/Technos/TechnosContainer'
import FlowsContainer from './components/Flows/FlowsContainer'
import FlowChart from './components/FlowChart'
import AppsContainer from './components/Apps/AppsContainer'

const Routes = props => (
  <Router {...props}>
    <div>
      <Route path="/" exact component={AppInit} />
      <Route path="/apps" component={AppsContainer} />
      <Route path="/authent" component={AuthentContainer} />
      <Route path="/technos" component={TechnosContainer} />
      <Route path="/flows" component={FlowsContainer} />
      <Route path="/flowchart" component={FlowChart} />
    </div>
  </Router>
)

export default Routes
