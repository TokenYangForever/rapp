import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'

import Borde from './subComponents/borde.js'

class App extends Component {
  constructor (ops) {
    // this.props == ops -> true
    super()
    this.state = {
      history: this.getNewArray(),
      step: 0,
      playerX: true
    }
    // 这个绑定是必要的，使`this`在回调中起作用
    this.clickAction = this.clickAction.bind(this)
    this.resetAction = this.resetAction.bind(this)
  }
  getNewArray () {
    let arr = new Array(9)
    for (let i = 0; i < 9; i++) {
      arr[i] = {val: null, winStep: false}
    }
    return [arr]
  }
  resetAction () {
    this.setState({
      history: this.getNewArray(),
      step: 0,
      playerX: true
    })
  }
  clickAction (i) {
    if (this.judgeWinner()) {
      return
    }
    let {history, step, playerX} = this.state
    let current = history[step]
    current[i].val = playerX ? 'X' : 'O'
    history.push(current)
    step += 1
    playerX = !playerX
    this.setState({
      step,
      history,
      playerX
    })
  }
  judgeWinner () {
    let indexArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    let current = this.state.history[this.state.step]
    for (let i = 0; i < indexArray.length; i++) {
      let arr = indexArray[i]
      if (current[arr[0]].val && current[arr[0]].val === current[arr[1]].val && current[arr[0]].val === current[arr[2]].val) {
        if (!current[arr[0]].winStep) {
          current[arr[0]].winStep = true
          current[arr[1]].winStep = true
          current[arr[2]].winStep = true
          let newHis = this.state.history
          newHis[this.state.step] = current
        }
        return current[arr[0]]
      }
    }
    return null
  }
  mapList () {
    // 遍历list使用map, 每一项需要指定特定的key
    return this.arr.map((item, index) => <li key={index}>{item}</li>)
  }
  message () {
    return <span>{`${this.state.name}:${this.state.time}`}</span>
  }
  componentWillMount () {
    // console.log('componentWillMount')
  }
  componentDidMount () {
    // console.log('componentDidMount')
  }
  render () {
    let {history, step, playerX} = this.state
    let winner = this.judgeWinner()
    let token = playerX ? 'X' : 'O'
    let stateText = ''
    if (step === 9 && !winner) {
      stateText = '平局~~~'
    } else {
      stateText = winner ? `${token}玩家你输了！` : `当前玩家:${token}`
    }
    return (
      <div className='App'>
        <p>{stateText}</p>
        <Borde current={history[step]} onClick={this.clickAction} />
        <button onClick={this.resetAction}>重置按钮</button>
      </div>
    )
  }
}

export default App
