import React, { Component } from 'react'
import { clone as _clone } from 'lodash'
import { Messages } from 'primereact/messages'

import AuthentLogin from './AuthentLogin'
import AuthentRegister from './AuthentRegister'

import AuthModel from '../../models/auth'
const authModel = new AuthModel()

class AuthentContainer extends Component {
  constructor() {
    super()

    this.tryLog = this.tryLog.bind(this)
    this.register = this.register.bind(this)
    this.switchTo = this.switchTo.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = { data: {}, status: 'login' }
  }

  tryLog() {
    console.log('AuthentContainer :: tryLog')
    authModel
      .login(this.state.data)
      .then(() => this.props.history.push('/technos'))
      .catch(e => {
        console.log('AuthentContainer tryLog error', e)
        this.messages.show({
          severity: 'error',
          summary: 'Error Message',
          detail: 'Email or password wrong!'
        })
      })
  }

  register() {
    authModel
      .register(this.state.data)
      .then(() => this.props.history.push('/technos'))
      .catch(e => console.log('AuthentContainer register error', e))
  }

  switchTo() {
    const { status } = this.state
    if (status === 'login') this.setState({ status: 'register' })
    if (status === 'register') this.setState({ status: 'login' })
  }

  handleChange = (name, value) => {
    const data = _clone(this.state.data)
    data[name] = value
    this.setState({ data: data })
  }

  render() {
    const { status, data } = this.state
    if (status === 'login') {
      return (
        <div>
          <Messages ref={el => (this.messages = el)} />
          <AuthentLogin
            onChange={this.handleChange}
            data={data}
            log={this.tryLog}
            switchTo={this.switchTo}
          />
        </div>
      )
    } else if (status === 'register') {
      return (
        <AuthentRegister
          onChange={this.handleChange}
          data={data}
          register={this.register}
          switchTo={this.switchTo}
        />
      )
    }
  }
}

export default AuthentContainer
