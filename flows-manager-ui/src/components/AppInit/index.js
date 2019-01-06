import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Switch, withRouter } from 'react-router-dom'
import { I18n } from 'react-polyglot'

import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { SelectButton } from 'primereact/selectbutton'

import AuthentContainer from '../Authent/AuthentContainer'
import TechnosContainer from '../Technos/TechnosContainer'
import FlowsContainer from '../Flows/FlowsContainer'
import FlowChart from '../FlowChart'
import AppsContainer from '../Apps/AppsContainer'

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

let getCookie = name => {
  var value = '; ' + document.cookie
  var parts = value.split('; ' + name + '=')
  if (parts.length == 2)
    return parts
      .pop()
      .split(';')
      .shift()
}

class App extends Component {
  constructor() {
    super()
    this.onRouteChanged = this.onRouteChanged.bind(this)
    this.state = { message: '', locale: window.locale || 'fr' }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged()
    }
  }

  onRouteChanged() {
    if (getCookie('atk')) {
      this.setState({ message: 'Logout' })
    } else {
      this.setState({ message: 'Login' })
    }
  }

  componentDidMount() {
    if (getCookie('atk')) {
      this.setState({ message: 'Logout' })
    } else {
      this.setState({ message: 'Login' })
    }
  }

  render() {
    let messages

    if (this.state.locale === 'fr') {
      messages = require('./messageFr.json')
    } else {
      messages = require('./messageEn.json')
    }
    return (
      <I18n locale={this.state.locale} messages={messages}>
        <div>
          <Menubar model={menuItems}>
            <div style={{ display: 'inline-block', marginRight: 10 }}>
              <SelectButton
                options={[
                  { label: 'FR', value: 'fr' },
                  { label: 'EN', value: 'en' }
                ]}
                value={this.state.locale}
                onChange={e => {
                  if (this.state.locale === 'fr') {
                    this.setState({ locale: 'en' })
                  } else {
                    this.setState({ locale: 'fr' })
                  }
                }}
              />
            </div>
            <Button
              label={this.state.message}
              icon='pi pi-power-off'
              style={{ marginRight: 4, display: 'inline-block' }}
              onClick={() => {
                document.cookie =
                  'atk=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
                window.location.hash = '#/authent'
              }}
            />
          </Menubar>
          <Switch>
            <Route path='/apps' component={AppsContainer} />
            <Route path='/authent' component={AuthentContainer} />
            <Route path='/technos' component={TechnosContainer} />
            <Route path='/flows' component={FlowsContainer} />
            <Route path='/flowchart' component={FlowChart} />
          </Switch>
        </div>
      </I18n>
    )
  }
}

export default withRouter(App)
