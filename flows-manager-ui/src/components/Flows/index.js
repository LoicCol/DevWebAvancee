import React, { Component } from 'react'

import { Button } from 'primereact/button'
import { Growl } from 'primereact/growl'

import FlowsList from './List'
import FormContainer from './Form/Container'

import FlowModel from '../../models/flow'

const flowModel = new FlowModel()

class Flows extends Component {
  constructor(props) {
    super(props)

    this.state = { data: [] }

    this._fetchFlows = this._fetchFlows.bind(this)
    this.onHideFormPopin = this.onHideFormPopin.bind(this)
  }

  _fetchFlows = () => {
    flowModel.list().then(result => {
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
        detail: 'Flow créé avec succés',
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
    this._fetchFlows()
  }

  render = () => (
    <div>
      <h1>Les flows</h1>
      <Button
        label="Créer"
        onClick={() => this.setState({ creationPopin: true })}
      />
      <FlowsList flows={this.state.data} />
      {this.state.creationPopin ? (
        <FormContainer id="new" onHide={this.onHideFormPopin} />
      ) : (
        ''
      )}
      <Growl ref={el => (this.growl = el)} />
    </div>
  )
}

export default Flows
