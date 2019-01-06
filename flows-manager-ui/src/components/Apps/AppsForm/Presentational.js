import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Sidebar } from 'primereact/sidebar'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { get as _get, find as _find, unionBy as _unionBy } from 'lodash'

class AppsFormPresentational extends PureComponent {
  render = () => {
    const { id, data, onChange, onHide, save, technos, deleteApp } = this.props
    console.log('AppsFormPresentational', data, technos)

    return (
      <Sidebar visible fullScreen={true} onHide={onHide}>
        <div style={{ maxWidth: 1000, margin: 'auto' }}>
          <h2 style={{ display: 'inline-block' }}>
            {id !== 'new' ? `Création d'une app` : `Modification d'une app`}
          </h2>
          {id !== 'new' ? (
            <Button
              label='Supprimer'
              className='p-button-secondary'
              onClick={deleteApp}
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
                    required
                    className={_get(data, 'name', '') ? '' : 'p-error'}
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
                    className={_get(data, 'description', '') ? '' : 'p-error'}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%', paddingBottom: 15 }}>Team:</td>
                <td style={{ width: '70%', paddingBottom: 15 }}>
                  <InputText
                    name='team'
                    value={_get(data, 'team', '')}
                    onChange={e => onChange('team', e.target.value)}
                    style={{ width: '100%' }}
                    className={_get(data, 'team', '') ? '' : 'p-error'}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%', paddingBottom: 15 }}>Technos:</td>
                <td style={{ width: '70%', paddingBottom: 15 }}>
                  <Dropdown
                    name='technoId'
                    value={
                      _get(data, 'techno')
                        ? _get(data, 'techno')
                        : _find(
                            technos,
                            tech =>
                              _get(tech, 'id') === _get(data, 'technoId', '')
                          )
                    }
                    onChange={e =>
                      onChange('technoId', _get(e.target.value, 'id'))
                    }
                    style={{ width: '100%' }}
                    inputStyle={{ width: '100%' }}
                    options={technos}
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
            data.team &&
            (data.technoId || data.techno) ? (
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

AppsFormPresentational.propTypes = {
  save: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  data: PropTypes.object
}

AppsFormPresentational.defaultProps = {
  data: {}
}

export default AppsFormPresentational
