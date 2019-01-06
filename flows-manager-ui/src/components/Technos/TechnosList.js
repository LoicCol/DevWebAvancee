import React from 'react'
import { forEach as _forEach } from 'lodash'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

class TechnosList extends React.PureComponent {
  render = () => {
    let technosContainer = []

    const { technos } = this.props

    return (
      <DataTable value={technos} paginator={true} rows={30}>
        <Column field="name" header="Nom" />
      </DataTable>
    )
  }
}

export default TechnosList
