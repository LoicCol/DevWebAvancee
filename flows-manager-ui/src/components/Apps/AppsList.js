import React from 'react'
import { forEach as _forEach } from 'lodash'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

class AppsList extends React.PureComponent {
  render = () => {
    let appsContainer = []

    const { apps, onRowClick } = this.props

    console.log('Apps :: render', apps)

    return (
      <DataTable
        value={apps}
        paginator={true}
        rows={30}
        onRowClick={onRowClick}
      >
        <Column field='name' header='Nom' />
        <Column field='description' header='Description' />
        <Column field='team' header='Team' />
        <Column field='techno.name' header='Technos' />
      </DataTable>
    )
  }
}

export default AppsList
