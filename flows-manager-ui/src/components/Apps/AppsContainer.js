import React, { Component } from 'react'

import { Button } from 'primereact/button'
import { Growl } from 'primereact/growl'

import AppsList from './AppsList'
import FormContainer from './AppsForm/Container'

import AppModel from '../../models/app'

const appModel = new AppModel()

class AppsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { data: [] }

    this._fetchApps = this._fetchApps.bind(this)
    this.onHideFormPopin = this.onHideFormPopin.bind(this)
  }

  _fetchApps = () => {
    appModel.list().then(result => {
      this.setState({
        data: result,
      })
    })
  }

  onHideFormPopin = (action = '') => {
    if (action === 'success')
      this.growl.show({
        severity: 'success',
        summary: 'Succés',
        detail: 'App créé avec succés',
      })
    if (action === 'error')
      this.growl.show({
        severity: 'error',
        summary: 'Erreur',
        detail: 'La création à échoué',
      })
    this.setState({ creationPopin: false })
  }

  componentDidMount = () => {
    this._fetchApps()
  }

  render = () => {
    return (
      <div>
        <h1>Les apps</h1>
        <Button
          label="Créer"
          onClick={() => this.setState({ creationPopin: true })}
        />
        <AppsList apps={this.state.data} />
        {this.state.creationPopin ? (
          <FormContainer id="new" onHide={this.onHideFormPopin} />
        ) : (
          ''
        )}
        <Growl ref={el => (this.growl = el)} />
      </div>
    )
  }
}

export default AppsContainer
