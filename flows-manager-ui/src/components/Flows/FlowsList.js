import React from 'react'
import { forEach as _forEach } from 'lodash'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { get as _get } from 'lodash'

class FlowsList extends React.PureComponent {
  render = () => {
    let flowsContainer = []

    let { flows, onRowClick } = this.props

    flows.map(
      flow => (flow.srcApplication = _get(flow, 'srcApplication.name', ''))
    )
    flows.map(
      flow => (flow.tarApplication = _get(flow, 'tarApplication.name', ''))
    )

    return (
      <DataTable
        value={flows}
        paginator={true}
        rows={30}
        onRowClick={onRowClick}
      >
        <Column field='name' header='Nom' />
        <Column field='description' header='Description' />
        <Column field='srcApplication' header='Application Source' />
        <Column field='tarApplication' header='Application Cible' />
      </DataTable>
    )
  }
}

export default FlowsList
