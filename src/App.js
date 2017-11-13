import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'

import Borde from './subComponents/borde'

class App extends Component {
  constructor (ops) {
    // this.props == ops -> true
    super()
    this.state = {
      history: this.getNewArray(),
      step: 0,
      playerX: true,
      winSteps: null,
      stateText: ''
    }
    // 这个绑定是必要的，使`this`在回调中起作用，或者使用箭头函数
    // this.clickAction = this.clickAction.bind(this)
    // this.resetAction = this.resetAction.bind(this)
  }
  getNewArray () {
    let arr = new Array(9)
    for (let i = 0; i < 9; i++) {
      arr[i] = null
    }
    return [arr]
  }
  resetAction = () => {
    this.setState({
      history: this.getNewArray(),
      step: 0,
      playerX: true,
      stateText: ''
    })
  }
  clickAction = (i) => {
    window.his = this.state.history
    let {history, step, playerX, winSteps, stateText} = this.state
    if (winSteps) {
      return
    }

    let current = [...history[step]]
    current[i] = playerX ? 'X' : 'O'
    winSteps = this.judgeWinner(current)
    history.push(current)
    step += 1
    playerX = !playerX

    let token = playerX ? 'X' : 'O'
    if (step === 9 && !winSteps) {
      stateText = '平局~~~'
    } else {
      stateText = winSteps ? `${token}玩家你输了！` : `当前玩家:${token}`
    }

    this.setState({
      step,
      history,
      playerX,
      winSteps,
      stateText
    })
  }
  judgeWinner (current) {
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
    for (let i = 0; i < indexArray.length; i++) {
      let arr = indexArray[i]
      if (current[arr[0]] && current[arr[0]] === current[arr[1]] && current[arr[0]] === current[arr[2]]) {
        return arr
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
  undoAction = () => {
    let {history, step, playerX} = this.state
    if (!step) 
      return
    step--
    history.pop()
    playerX = !playerX
    this.setState({
      history,
      step,
      playerX,
      winSteps: null
    })
  }
  render () {
    let {history, step, winSteps, stateText} = this.state
    return (
      <div className='App'>
        {false && <h3>条件渲染</h3>}
        <p>{stateText}</p>
        <Borde winSteps={winSteps} current={history[step]} onClick={this.clickAction} />
        <button onClick={this.resetAction}>重置按钮</button>
        <button onClick={this.undoAction}>悔棋按钮</button>
      </div>
    )
  }
}

export default App
