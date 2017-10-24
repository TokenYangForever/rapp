import React, { Component } from 'react'

class Square extends Component {
  constructor (ops) {
    super()
    this.clickAction = this.clickAction.bind(this)
  }
  clickAction () {
    if (!this.props.value) {
      this.props.squareClicked(this.props.index)
    }
  }
  className () {
    return this.props.winStep ? 'sq-item sq-winItem' : `sq-item`
  }
  render () {
    return (
      <button className={this.className()} onClick={this.clickAction}>{this.props.value}</button>
    )
  }
}
export default Square
