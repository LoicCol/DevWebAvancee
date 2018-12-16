import React, { Component } from 'react'
import TechnoModel from '../../models/techno'
import TechnosList from './List'

const technoModel = new TechnoModel()

class Technos extends Component {
  constructor (props) {
    super(props)

    this.state = { data: [] }

    this._fetchTechnos = this._fetchTechnos.bind(this)
  }

  _fetchTechnos () {
    technoModel.list()
      .then(result => {
        this.setState({
          data: result
        })
      })
  }

  componentDidMount () {
    this._fetchTechnos()
  }

  render () {
    return <TechnosList technos={this.state.data} />
  }
}

export default Technos
