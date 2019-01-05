import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { clone as _clone } from 'lodash'

import Presentational from './Presentational'

import TechnoModel from '../../../models/techno'

const technoModel = new TechnoModel()

class TechnosFormContainer extends Component {
  constructor() {
    super()

    this.state = { data: {} }

    this._fetchTechno = this._fetchTechno.bind(this)
    this.saveTechno = this.saveTechno.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  _fetchTechno = id => {
    technoModel.get(id).then(tech => {
      this.setState({
        data: tech,
      })
    })
  }

  saveTechno = () => {
    const { data } = this.state
    let promise
    if (this.props.id !== 'new') promise = technoModel.update(data)
    else promise = technoModel.create(data)

    promise
      .then(() => this.props.onHide('success'))
      .catch(e => this.props.onHide('error'))
  }

  handleChange = (name, value) => {
    const data = _clone(this.state.data)
    data[name] = value
    this.setState({ data: data })
  }

  componentDidMount = () => {
    if (this.props.id !== 'new') {
      this._fetchTechno(this.props.id)
    }
  }

  render = () => (
    <Presentational
      save={this.saveTechno}
      data={this.state.data}
      onChange={this.handleChange}
      onHide={this.props.onHide}
    />
  )
}

TechnosFormContainer.propTypes = {
  onHide: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}

export default TechnosFormContainer
