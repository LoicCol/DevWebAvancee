import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { clone as _clone } from 'lodash'

import Presentational from './Presentational'

import FlowModel from '../../../models/flow'
import AppModel from '../../../models/app'

const flowModel = new FlowModel()
const appModel = new AppModel()

class FlowsFormContainer extends Component {
  constructor() {
    super()

    this.state = { data: {}, apps: [] }

    this._fetchApps = this._fetchApps.bind(this)
    this._fetchFlow = this._fetchFlow.bind(this)
    this.saveFlow = this.saveFlow.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  _fetchApps = () => {
    console.log('FlowsFormContainer :: _fetchApps')
    appModel.list(apps => {
      console.log('FlowsFormContainer :: _fetchApps 2', apps)
      this.setState({
        apps: apps,
      })
    })
  }

  _fetchFlow = id => {
    flowModel.get(id).then(tech => {
      this.setState({
        data: tech,
      })
    })
  }

  saveFlow = () => {
    const { data } = this.state
    let promise
    if (this.props.id !== 'new') promise = flowModel.update(data)
    else promise = flowModel.create(data)

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
      this._fetchFlow(this.props.id)
    }
    this._fetchApps()
  }

  render = () => (
    <Presentational
      save={this.saveFlow}
      data={this.state.data}
      apps={this.state.apps}
      onChange={this.handleChange}
      onHide={this.props.onHide}
    />
  )
}

FlowsFormContainer.propTypes = {
  onHide: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}

export default FlowsFormContainer
