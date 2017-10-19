import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.stateA = {
      name: '访问者',
      time: Date.now()
    }
    this.arr = ['item1', 'item2', 'item3']
  }
  clickAction () {
    alert('clickAction')
  }
  message () {
    return <span>{`${this.props.name}:${this.stateA.time}`}</span>
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to</h1>
        </header>
        <ul>
          {this.arr.map(item => <li key={item}>{item}</li>)}
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
