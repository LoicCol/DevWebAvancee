import React, { Component } from 'react'
import TechnoModel from '../../models/techno'
import { forEach as _forEach } from 'lodash'

const technoModel = new TechnoModel()

class Technos extends Component {
  constructor (props) {
    super(props)

    this._fetchTechnos = this._fetchTechnos.bind(this)
  }

  _fetchTechnos () {
    technoModel.list()
      .then(result => {
        console.log('Technos :: _fetchTechnos', result)
        this.setState({
          technos: result
        })
      })
  }

  componentDidMount () {
    this._fetchTechnos()
  }

  render () {
    let technosContainer = []

    if (this.state && this.state.technos) {
      _forEach(this.state.technos, tech => {
        technosContainer.push(
          <div>{tech.name}</div>
        )
      })
    }

    return (
      <div>
        <h1>Les technos</h1>
        {technosContainer}
      </div>
    )
  }
}

export default Technos
