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
        <Column field="id" header="ID" />
        <Column field="name" header="Nom" />
      </DataTable>
    )
  }
}

export default FlowsList
