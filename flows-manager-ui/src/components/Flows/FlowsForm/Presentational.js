import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Sidebar } from 'primereact/sidebar'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { get as _get, remove as _remove, find as _find } from 'lodash'

class FlowsFormPresentational extends PureComponent {
  render = () => {
    const {
      id,
      data,
      onChange,
      onHide,
      save,
      srcApps,
      tarApps,
      deleteFlow
    } = this.props
    return (
      <Sidebar visible fullScreen={true} onHide={onHide}>
        <div style={{ maxWidth: 1000, margin: 'auto' }}>
          <h2 style={{ display: 'inline-block' }}>
            {id === 'new' ? `Création d'un flow` : `Modification d'un flow`}
          </h2>
          {id !== 'new' ? (
            <Button
              label='Supprimer'
              className='p-button-secondary'
              onClick={deleteFlow}
              style={{
                display: 'inline-block',
                marginLeft: 20
              }}
            />
          ) : (
            ''
          )}
          <table style={{ textAlign: 'left', width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ width: '30%', paddingBottom: 15 }}>Nom:</td>
                <td style={{ width: '70%', paddingBottom: 15 }}>
                  <InputText
                    name='name'
                    value={_get(data, 'name', '')}
                    onChange={e => onChange('name', e.target.value)}
                    style={{ width: '100%' }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%', paddingBottom: 15 }}>
                  Description:
                </td>
                <td style={{ width: '70%', paddingBottom: 15 }}>
                  <InputTextarea
                    name='description'
                    value={_get(data, 'description', '')}
                    onChange={e => onChange('description', e.target.value)}
                    placeholder='Description'
                    style={{ width: '100%' }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%', paddingBottom: 15 }}>
                  Application cible:
                </td>
                <td style={{ width: '70%', paddingBottom: 15 }}>
                  <Dropdown
                    name='srcApplication'
                    value={_find(
                      srcApps,
                      app => _get(app, 'id') === _get(data, 'srcApplication.id')
                    )}
                    onChange={e => onChange('srcApplication', e.target.value)}
                    style={{ width: '100%' }}
                    inputStyle={{ width: '100%' }}
                    options={srcApps}
                    optionLabel='name'
                    dropdown
                    className={
                      _get(data, 'technoId', '') || _get(data, 'techno', '')
                        ? ''
                        : 'p-error'
                    }
                  />
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%', paddingBottom: 15 }}>
                  Application source:
                </td>
                <td style={{ width: '70%', paddingBottom: 15 }}>
                  <Dropdown
                    name='tarApplication'
                    value={_find(
                      tarApps,
                      app => _get(app, 'id') === _get(data, 'tarApplication.id')
                    )}
                    onChange={e => onChange('tarApplication', e.target.value)}
                    style={{ width: '100%' }}
                    inputStyle={{ width: '100%' }}
                    options={tarApps}
                    optionLabel='name'
                    dropdown
                    className={
                      _get(data, 'technoId', '') || _get(data, 'techno', '')
                        ? ''
                        : 'p-error'
                    }
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
            {data.name &&
            data.description &&
            data.srcApplication &&
            data.tarApplication ? (
              <Button label='Créer' onClick={save} />
            ) : (
              <Button disabled label='Créer' onClick={save} />
            )}
            <Button
              label='Annuler'
              onClick={onHide}
              className='p-button-danger'
            />
          </div>
        </div>
      </Sidebar>
    )
  }
}

FlowsFormPresentational.propTypes = {
  save: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  data: PropTypes.object
}

FlowsFormPresentational.defaultProps = {
  data: {}
}

export default FlowsFormPresentational
