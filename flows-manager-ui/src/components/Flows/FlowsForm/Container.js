import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { clone as _clone, get as _get, remove as _remove, set as _set } from 'lodash'

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
    this.deleteFlow = this.deleteFlow.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  _fetchApps = () => {
    appModel.list().then(apps => {
      this.setState({
        apps: apps
      })
    })
  }

  _fetchFlow = id => {
    flowModel.get(id).then(tech => {
      this.setState({
        data: tech
      })
    })
  }

  saveFlow = () => {
    let { data } = this.state

    data.srcAppId = _get(data, 'srcApplication.id', '')
    data.tarAppId = _get(data, 'tarApplication.id', '')

    let promise
    if (this.props.id !== 'new') {
      _set(data, 'id', this.props.id)
      promise = flowModel.update(data)
    }
    else promise = flowModel.create(data)

    promise
      .then(() => this.props.onHide('success'))
      .catch(e => this.props.onHide('error'))
  }

  deleteFlow = () => {
    flowModel.delete({ id: this.props.id })
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

  render = () => {
    let { apps } = this.state
    const { data } = this.state

    let tarApps = _clone(apps),
      srcApps = _clone(apps)

    if (_get(data, 'srcApplication')) {
      _remove(tarApps, app => _get(app, 'id') === _get(data, 'srcApplication.id'))
    }
    if (_get(data, 'tarApplication')) {
      _remove(srcApps, app => _get(app, 'id') === _get(data, 'tarApplication.id'))
    }
    return (
      <Presentational
        id={this.props.id}
        save={this.saveFlow}
        data={data}
        srcApps={srcApps}
        tarApps={tarApps}
        onChange={this.handleChange}
        onHide={this.props.onHide}
        deleteFlow={this.props.id !== 'new' ? this.deleteFlow : null}
      />
    )
  }
}

FlowsFormContainer.propTypes = {
  onHide: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default FlowsFormContainer
