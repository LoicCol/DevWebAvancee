import React from 'react'
import { forEach as _forEach } from 'lodash'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

class FlowsList extends React.PureComponent {
  render = () => {
    let flowsContainer = []

    const { flows } = this.props

    console.log('Flows :: render', flows)

    return (
      <DataTable value={flows} paginator={true} rows={30}>
        <Column field='name' header='Nom' />
        <Column field='description' header='Description' />
        <Column field='scrApplication' header='Application Source' />
        <Column field='tarApplication' header='Application Cible' />
      </DataTable>
    )
  }
}

export default FlowsList
