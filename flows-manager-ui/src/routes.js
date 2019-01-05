import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'

import AppInit from './components/AppInit'

import AuthentContainer from './components/Authent/AuthentContainer'
import TechnosContainer from './components/Technos/TechnosContainer'
import FlowsContainer from './components/Flows/FlowsContainer'
import FlowChart from './components/FlowChart'
import AppsContainer from './components/Apps/AppsContainer'

const menuItems = [
  {
    label: 'Technos',
    icon: 'pi pi-fw pi-shopping-cart',
    command: event => {
      window.location.hash = '#/technos'
    }
  },
  {
    label: 'Flows',
    icon: 'pi pi-fw pi-refresh',
    command: event => {
      window.location.hash = '#/flows'
    }
  },
  {
    label: 'Apps',
    icon: 'pi pi-fw pi-briefcase',
    command: event => {
      window.location.hash = '#/apps'
    }
  }
]

const Routes = props => (
  <Router {...props}>
    <div>
      <Menubar model={menuItems}>
        <Button
          label='Logout'
          icon='pi pi-power-off'
          style={{ marginLeft: 4 }}
          onClick={() => {
            document.cookie =
              'atk=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
            window.location.hash = '#/authent'
          }}
        />
      </Menubar>

      <Switch>
        <Route path='/' exact component={AppInit} />
        <Route path='/apps' component={AppsContainer} />
        <Route path='/authent' component={AuthentContainer} />
        <Route path='/technos' component={TechnosContainer} />
        <Route path='/flows' component={FlowsContainer} />
        <Route path='/flowchart' component={FlowChart} />
      </Switch>
    </div>
  </Router>
)

export default Routes
