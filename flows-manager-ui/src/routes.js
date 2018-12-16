import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import App from './components/App'

import Technos from './components/Technos'
import TechnosList from './components/Technos/List'

const Routes = (props) => (
  <Router {...props}>
    <div>
      <Route path='/' exact component={App} />
      <Route path='/technos'
        component={Technos}
        render={(technos) => <TechnosList technos={technos} />}
      />
    </div>
  </Router>
)

export default Routes
