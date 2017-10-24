import React, { Component } from 'react'
import Square from './square'

class Borde extends Component {
  constructor (ops) {
    super()
  }
  renderSquare (index) {
    let {winSteps, current} = this.props
    let iswin = winSteps && winSteps.includes(index)

    return <Square winStep={iswin} squareClicked={this.handleClick} value={current[index]} index={index} />
  }
  handleClick = (index) => {
    this.props.onClick(index)
  }
  render () {
    return (
      <div className='b-border'>
        <div className='b-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='b-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='b-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
export default Borde
