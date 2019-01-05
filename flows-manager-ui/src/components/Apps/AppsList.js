import React from 'react'
import { forEach as _forEach } from 'lodash'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

class AppsList extends React.PureComponent {
  render = () => {
    let appsContainer = []

    const { apps } = this.props

    console.log('Apps :: render', apps)

    return (
      <DataTable value={apps} paginator={true} rows={30}>
        <Column field="id" header="ID" />
        <Column field="name" header="Nom" />
      </DataTable>
    )
  }
}

export default AppsList
