import React from 'react'
import { forEach as _forEach } from 'lodash'

class TechnosList extends React.PureComponent {
  render () {
    let technosContainer = []

    const { technos } = this.props

    console.log('Technos :: render', technos)

    _forEach(technos, tech => {
      technosContainer.push(
        <div>tech</div>
      )
    })

    return (
      <div>
        <h1>Les technos</h1>
        {technosContainer}
      </div>
    )
  }
}

export default TechnosList
