import React from 'react'
import { forEach as _forEach } from 'lodash'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

class TechnosList extends React.PureComponent {
  render () {
    let technosContainer = []

    const { technos } = this.props

    console.log('Technos :: render', technos)

    return (
      <div>
        <h1>Les technos</h1>
        <DataTable
          value={technos}
          paginator={true}
          rows={30}>
             <Column field="id" header="ID" />
             <Column field="name" header="Nom" />
         </DataTable>
      </div>
    )
  }
}

export default TechnosList
