import React, { Component } from 'react'

class Square extends Component {
  constructor (ops) {
    super()
    this.clickAction = this.clickAction.bind(this)
  }
  clickAction () {
  	if (!this.props.value.val) {
  		this.props.squareClicked(this.props.index)
  	}
  }
  className () {
  	return this.props.value.winStep ? 'sq-item sq-winItem' : `sq-item`
  }
  render () {
  	return (
    	<button className={this.className()} onClick={this.clickAction}>{this.props.value.val}</button>
  	)
  }
}
export default Square
