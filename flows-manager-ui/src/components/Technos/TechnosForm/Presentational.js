import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Sidebar } from 'primereact/sidebar'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { get as _get } from 'lodash'

class TechnosFormPresentational extends PureComponent {
  render = () => {
    const { data, onChange, onHide, save } = this.props
    return (
      <Sidebar visible fullScreen={true} onHide={onHide}>
        <div style={{ maxWidth: 1000, margin: 'auto' }}>
          <h3>
            {data ? `Création d'une techno` : `Modification d'une techno`}
          </h3>
          <div style={{ margin: 10 }}>
            <span>Nom:</span>
            <InputText
              name="name"
              value={_get(data, 'name', '')}
              onChange={e => onChange('name', e.target.value)}
            />
          </div>
          <Button label="Créer" onClick={save} />
          <Button
            label="Annuler"
            onClick={() => this.setState()}
            className="p-button-danger"
          />
        </div>
      </Sidebar>
    )
  }
}

TechnosFormPresentational.propTypes = {
  save: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  data: PropTypes.object,
}

TechnosFormPresentational.defaultProps = {
  data: {},
}

export default TechnosFormPresentational
