import React, { Component } from 'react'
import Square from './square.js'

class Borde extends Component {
  constructor (ops) {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  renderSquare (index) {
  	return <Square squareClicked={this.handleClick} value={this.props.current[index]} index={index} />
  }
  handleClick (index) {
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