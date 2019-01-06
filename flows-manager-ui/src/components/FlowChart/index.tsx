import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  LinkModel,
  DiagramWidget,
  DefaultLinkModel
} from 'storm-react-diagrams'
import * as React from 'react'
import 'storm-react-diagrams/dist/style.min.css'
import './styles.css'
import FlowModel from '../../models/flow'
import { Component } from 'react'

const flowModel = new FlowModel()

interface MyProps {}

interface MyState {
  flows: any
}

class FlowChart extends Component<MyProps, MyState> {
  constructor(props) {
    super(props)
    this._fetchFlows = this._fetchFlows.bind(this)
  }

  generateNodes(
    model: DiagramModel,
    flow: any,
    offsetX: number,
    offsetY: number
  ) {
    //3-A) create a default node
    var node1 = new DefaultNodeModel(flow.srcApplication.name, 'rgb(0,192,255)')
    var port1 = node1.addOutPort(flow.srcApplication.description)
    node1.setPosition(100 + offsetX, 100 + offsetY)

    //3-B) create another default node
    var node2 = new DefaultNodeModel(flow.tarApplication.name, 'rgb(192,255,0)')
    var port2 = node2.addInPort(flow.tarApplication.description)
    node2.setPosition(600 + offsetX, 100 + offsetY)

    // link the ports
    let link1 = port1.link(port2)
    ;(link1 as DefaultLinkModel).addLabel(flow.name)

    //4) add the models to the root graph
    model.addAll(node1, node2, link1)
  }

  _fetchFlows() {
    flowModel.list().then(result => {
      this.setState({
        flows: result
      })
    })
  }

  componentDidMount() {
    this._fetchFlows()
  }

  render() {
    //1) setup the diagram engine
    var engine = new DiagramEngine()
    engine.installDefaultFactories()

    //2) setup the diagram model
    var model = new DiagramModel()

    if (this.state && this.state.flows) {
      for (let i = 0; i < this.state.flows.length; i++) {
        this.generateNodes(model, this.state.flows[i], i * 100, i * 100)
      }
    }

    //5) load model into engine
    engine.setDiagramModel(model)

    return (
      <div style={{}}>
        <DiagramWidget className='srd-demo-canvas' diagramEngine={engine} />
      </div>
    )
  }
}

export default FlowChart
