import React, { Component } from 'react'

import { Button } from 'primereact/button'
import { Growl } from 'primereact/growl'

import TechnosList from './TechnosList'
import FormContainer from './TechnosForm/Container'

import TechnoModel from '../../models/techno'

const technoModel = new TechnoModel()

class TechnosContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { data: [] }

    this._fetchTechnos = this._fetchTechnos.bind(this)
    this.onHideFormPopin = this.onHideFormPopin.bind(this)
  }

  _fetchTechnos = () => {
    technoModel.list().then(result => {
      this.setState({
        data: result
      })
    })
  }

  onHideFormPopin = (action = '') => {
    if (action === 'success')
      this.growl.show({
        severity: 'success',
        summary: 'Succés',
        detail: 'Techno créé avec succés'
      })
    if (action === 'error')
      this.growl.show({
        severity: 'error',
        summary: 'Erreur',
        detail: 'La création à échoué'
      })
    this.setState({ creationPopin: false })
  }

  componentDidMount = () => {
    this._fetchTechnos()
  }

  render = () => {
    return (
      <div>
        <h1 style={{ display: 'inline-block' }}>Les technos</h1>
        <Button
          label='Créer'
          onClick={() => this.setState({ creationPopin: true })}
          style={{
            display: 'inline-block',
            verticalAlign: 'super',
            marginLeft: 20
          }}
        />
        <TechnosList technos={this.state.data} />
        {this.state.creationPopin ? (
          <FormContainer id='new' onHide={this.onHideFormPopin} />
        ) : (
          ''
        )}
        <Growl ref={el => (this.growl = el)} />
      </div>
    )
  }
}

export default TechnosContainer
