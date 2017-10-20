import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: '访问者',
      time: new Date()
    }
    this.arr = ['item1', 'item2', 'item3']
    // 这个绑定是必要的，使`this`在回调中起作用
    this.clickAction = this.clickAction.bind(this)
  }
  clickAction () {
    // setState 调用state和props时要传入一个函数
    this.setState((pstate, props) => {
      return {
        name: `${pstate.name}click`
      }
    })
  }
  mapList () {
    return this.arr.map((item, index) => <li key={index}>{item}</li>)
  }
  message () {
    return <span>{`${this.state.name}:${this.state.time}`}</span>
  }
  componentWillMount () {
    console.log('componentWillMount')
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  render () {
    console.log('render')
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to {this.state.time.toLocaleTimeString()}</h1>
        </header>
        <ul>
          {this.mapList()}
        </ul>
        <p>
          {this.message()}
        </p>
        <p className='App-intro' onClick={this.clickAction}>
          {this.props.name}
        </p>
      </div>
    )
  }
}

export default App
