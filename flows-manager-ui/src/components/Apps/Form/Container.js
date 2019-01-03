import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { clone as _clone } from 'lodash'

import Presentational from './Presentational'

import AppModel from '../../../models/app'

const appModel = new AppModel()

class AppsFormContainer extends Component {
  constructor() {
    super()

    this.state = { data: {} }

    this._fetchApp = this._fetchApp.bind(this)
    this.saveApp = this.saveApp.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  _fetchApp = id => {
    appModel.get(id).then(tech => {
      this.setState({
        data: tech,
      })
    })
  }

  saveApp = () => {
    const { data } = this.state
    let promise
    if (this.props.id !== 'new') promise = appModel.update(data)
    else promise = appModel.create(data)

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
      this._fetchApp(this.props.id)
    }
  }

  render = () => (
    <Presentational
      save={this.saveApp}
      data={this.state.data}
      onChange={this.handleChange}
      onHide={this.props.onHide}
    />
  )
}

AppsFormContainer.propTypes = {
  onHide: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}

export default AppsFormContainer
