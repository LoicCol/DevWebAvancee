import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { clone as _clone, set as _set, unionBy as _unionBy } from 'lodash'

import Presentational from './Presentational'

import AppModel from '../../../models/app'
import TechnoModel from '../../../models/techno'

const appModel = new AppModel()
const technoModel = new TechnoModel()

class AppsFormContainer extends Component {
  constructor() {
    super()

    this.state = { data: {}, technos: [] }

    this._fetchApp = this._fetchApp.bind(this)
    this._fetchTechnos = this._fetchTechnos.bind(this)
    this.saveApp = this.saveApp.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  _fetchApp = id => {
    appModel.get(id).then(app => {
      this.setState({
        data: app
      })
    })
  }

  _fetchTechnos = () => {
    technoModel.list().then(technos => {
      console.log('AppsFormContainer :: tehcnos', technos)
      this.setState({
        technos: technos
      })
    })
  }

  saveApp = () => {
    const { data } = this.state
    let promise
    if (this.props.id !== 'new'){
      _set(data, 'id', this.props.id)
      promise = appModel.update(data)
    }
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
    this._fetchTechnos()
  }

  render = () => (
    <Presentational
      save={this.saveApp}
      data={this.state.data}
      onChange={this.handleChange}
      onHide={this.props.onHide}
      technos={_unionBy(this.state.technos, 'name')}
    />
  )
}

AppsFormContainer.propTypes = {
  onHide: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default AppsFormContainer
