import React, { Component } from 'react'
import { translate } from 'react-polyglot'

import { get as _get } from 'lodash'

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
    this.handleRowClicked = this.handleRowClicked.bind(this)
  }

  _fetchApps = () => {
    appModel.list().then(result => {
      this.setState({
        data: result
      })
    })
  }

  onHideFormPopin = (action = '') => {
    if (action === 'success') {
      this.growl.show({
        severity: 'success',
        summary: 'Succés',
        detail: 'App créé avec succés'
      })
      this._fetchApps()
    }
    if (action === 'error')
      this.growl.show({
        severity: 'error',
        summary: 'Erreur',
        detail: 'La création à échoué'
      })
    this.setState({ creationPopin: false, modificationId: '' })
  }

  handleRowClicked = row => {
    this.setState({
      modificationId: _get(row, 'data.id', '')
    })
  }

  componentDidMount = () => {
    this._fetchApps()
  }

  render = () => {
    return (
      <div>
        <h1 style={{ display: 'inline-block' }}>Les apps</h1>
        <Button
          label={this.props.t('create')}
          onClick={() => this.setState({ creationPopin: true })}
          style={{
            display: 'inline-block',
            verticalAlign: 'super',
            marginLeft: 20
          }}
        />
        <AppsList apps={this.state.data} onRowClick={this.handleRowClicked} />
        {this.state.creationPopin ? (
          <FormContainer id='new' onHide={this.onHideFormPopin} />
        ) : (
          ''
        )}
        {this.state.modificationId ? (
          <FormContainer
            id={this.state.modificationId}
            onHide={this.onHideFormPopin}
          />
        ) : (
          ''
        )}
        <Growl ref={el => (this.growl = el)} />
      </div>
    )
  }
}

export default translate()(AppsContainer)
