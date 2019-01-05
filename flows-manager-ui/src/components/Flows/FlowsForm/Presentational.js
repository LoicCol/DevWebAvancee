import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Sidebar } from 'primereact/sidebar'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { AutoComplete } from 'primereact/autocomplete'
import { get as _get } from 'lodash'

class FlowsFormPresentational extends PureComponent {
  render = () => {
    const { data, onChange, onHide, save, apps } = this.props
    console.log('FlowsFormPresentational ', apps)
    return (
      <Sidebar visible fullScreen={true} onHide={onHide}>
        <div style={{ maxWidth: 1000, margin: 'auto' }}>
          <h2>{data ? `Création d'un flow` : `Modification d'un flow`}</h2>
          <table style={{ textAlign: 'left', width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ width: '30%', paddingBottom: 15 }}>Nom:</td>
                <td style={{ width: '70%', paddingBottom: 15 }}>
                  <InputText
                    name="name"
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
                    name="description"
                    value={_get(data, 'description', '')}
                    onChange={e => onChange('description', e.target.value)}
                    placeholder="Description"
                    style={{ width: '100%' }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%', paddingBottom: 15 }}>
                  Application cible:
                </td>
                <td style={{ width: '70%', paddingBottom: 15 }}>
                  <AutoComplete
                    name="srcApplication"
                    value={_get(data, 'srcApplication', '')}
                    onChange={e => onChange('srcApplication', e.target.value)}
                    style={{ width: '100%' }}
                    inputStyle={{ width: '100%' }}
                    suggestions={apps}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%', paddingBottom: 15 }}>
                  Application source:
                </td>
                <td style={{ width: '70%', paddingBottom: 15 }}>
                  <AutoComplete
                    name="tarApplication"
                    value={_get(data, 'tarApplication', '')}
                    onChange={e => onChange('tarApplication', e.target.value)}
                    style={{ width: '100%' }}
                    inputStyle={{ width: '100%' }}
                    suggestions={apps}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              width: '100%',
            }}
          >
            <Button label="Créer" onClick={save} />
            <Button
              label="Annuler"
              onClick={onHide}
              className="p-button-danger"
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
  data: PropTypes.object,
}

FlowsFormPresentational.defaultProps = {
  data: {},
}

export default FlowsFormPresentational
