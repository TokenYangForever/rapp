import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      arr: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9 ],
        [4, 5, 6, 7, 8, 9, 1, 2, 3 ],
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
  render () {
    let arr = this.state.arr
    return (
      <ul>
        {arr.map((item, index) =>
          <li key={index}>
            {item.map((sItem, sIndex) => <span key={`${index}${sIndex}`}>{sItem}</span>)}
          </li>
        )}
      </ul>
    )
  }
}

export default App
