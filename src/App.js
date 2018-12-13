import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount () {
    this.evtSource = new EventSource("http://localhost:3001/es");
    this.evtSource.addEventListener('test', e => {
      let date = JSON.parse(e.data)
      this.setState({
        date: new Date(date.b)
      })
    });
    this.evtSource.addEventListener('error', e => {
      this.evtSource.close()
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload
          </p>
          <p>当前时间：{this.state.date.toLocaleTimeString()}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
