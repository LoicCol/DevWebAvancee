import React, { Component } from 'react'
import { Password } from 'primereact/password'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

import { get as _get } from 'lodash'

class AuthentForm extends Component {
  render() {
    const { data, onChange, log, switchTo } = this.props

    return (
      <div style={{ maxWidth: 1000, margin: 'auto' }}>
        <h2>{`Connection`}</h2>
        <Button label='Créer un compte' onClick={switchTo} />
        <table style={{ textAlign: 'left', width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ width: '30%', paddingBottom: 15 }}>
                Email:
              </td>
              <td style={{ width: '70%', paddingBottom: 15 }}>
                <InputText
                  name='email'
                  value={_get(data, 'email', '')}
                  onChange={e => onChange('email', e.target.value)}
                  style={{ width: '100%' }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ width: '30%', paddingBottom: 15 }}>Mot de passe:</td>
              <td style={{ width: '70%', paddingBottom: 15 }}>
                <Password
                  name='password'
                  value={_get(data, 'password', '')}
                  onChange={e => onChange('password', e.target.value)}
                  style={{ width: '100%' }}
                  feedback={false}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '100%'
          }}
        >
          <Button label='Login' onClick={log} />
          <Button
            label='Annuler'
            onClick={() =>  this.props.history.push('/home')}
            className='p-button-danger'
          />
        </div>
      </div>
    )
  }
}

export default AuthentForm
