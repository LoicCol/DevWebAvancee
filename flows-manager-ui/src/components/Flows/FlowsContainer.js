import React, { Component } from 'react'
import { get as _get } from 'lodash'

import { Button } from 'primereact/button'
import { Growl } from 'primereact/growl'

import FlowsList from './FlowsList'
import FormContainer from './FlowsForm/Container'

import FlowModel from '../../models/flow'

const flowModel = new FlowModel()

class FlowsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { data: [], flowSearched: '', flowSuggestions: [] }

    this._fetchFlows = this._fetchFlows.bind(this)
    this.onHideFormPopin = this.onHideFormPopin.bind(this)
    this.handleRowClicked = this.handleRowClicked.bind(this)
  }

  _fetchFlows = () => {
    flowModel.list().then(result => {
      this.setState({
        data: result
      })
    })
  }

  onHideFormPopin = (action = '', message = '') => {
    if (action === 'success') {
      this.growl.show({
        severity: 'success',
        summary: 'Succés',
        detail: 'Flow créé avec succés'
      })
      this._fetchFlows()
    }
    if (action === 'error')
      this.growl.show({
        severity: 'error',
        summary: 'Erreur',
        detail: message || 'La création à échoué'
      })
    this.setState({ creationPopin: false, modificationId: '' })
  }

  handleRowClicked = row => {
    console.log('AppsContainer ::: handleRowClicked', row)
    this.setState({
      modificationId: _get(row, 'data.id', '')
    })
  }

  componentDidMount = () => {
    this._fetchFlows()
  }

  render = () => (
    <div>
      <h1 style={{ display: 'inline-block' }}>Les flows</h1>
      <Button
        label='Créer'
        onClick={() => this.setState({ creationPopin: true })}
        style={{
          display: 'inline-block',
          verticalAlign: 'super',
          marginLeft: 20
        }}
      />
      <Button
        label='Vue en graphe'
        onClick={() => {
          this.props.history.push('/flowchart')
        }}
        className='p-button-success'
        style={{
          display: 'inline-block',
          verticalAlign: 'super',
          marginLeft: 20
        }}
      />
      <FlowsList flows={this.state.data} onRowClick={this.handleRowClicked} />
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

export default FlowsContainer
