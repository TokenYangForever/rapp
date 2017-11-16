import React, { Component } from 'react'
// import logo from './logo.svg';
import './Home.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      arr: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [2, 1, 4, 3, 6, 5, 8, 9, 7],
        [3, 6, 5, 8, 9, 7, 2, 1, 4],
        [8, 9, 7, 2, 1, 4, 3, 6, 5],
        [5, 3, 1, 6, 4, 2, 9, 7, 8],
        [6, 4, 2, 9, 7, 8, 5, 3, 1],
        [9, 7, 8, 5, 3, 1, 6, 4, 2]
      ]
    }
  }
  randomArr = () => {
    let arr = [...this.state.arr]
    console.time('randomArr')
    let changeArr = this.getChangeArr()
    for (let i = 0; i < 9; i++) {
      let temp = arr[i]
      for (let j = 0; j < changeArr.length; j++) {
        let fst = changeArr[j][0]
        let sec = changeArr[j][1]
        let fIndex = temp.indexOf(fst)
        let sIndex = temp.indexOf(sec)
        temp[fIndex] = sec
        temp[sIndex] = fst
      }
    }
    console.timeEnd('randomArr')
    this.setState({
      arr
    })
  }
  getChangeArr () {
    let changeArr = []
    for (let i = 0; i < 10; i++) {
      let fst = Math.floor(Math.random() * 9) + 1
      let sec = Math.floor(Math.random() * 9) + 1
      if (sec === fst) {
        sec = fst === 5 ? 4 : 10 - fst
      }
      changeArr[i] = [fst, sec]
    }
    return changeArr
  }
  getQueArr = () => {
    let arr = [...this.state.arr]
    console.time('getQueArr')
    for (let i = 0; i < 41; i++) {
      arr = this.getBlock(arr)
    }
    console.timeEnd('getQueArr')
    this.setState({
      arr
    })
  }
  getBlock (ar) {
    let i = Math.floor(Math.random() * 9)
    let j = Math.floor(Math.random() * 9)
    if (ar[i][j] === null) {
      return this.getBlock(ar)
    } else {
      ar[i][j] = null
      return ar
    }
  }
  render () {
    let arr = this.state.arr
    return (
      <div>
        <ul>
          {arr.map((item, index) =>
            <li key={index}>
              {item.map((sItem, sIndex) => <span className='sd-span' key={`${index}${sIndex}`}>{sItem}</span>)}
            </li>
          )}
        </ul>
        <button onClick={this.randomArr}>打乱</button>
        <button onClick={this.getQueArr}>挖洞</button>
      </div>
    )
  }
}

export default App
