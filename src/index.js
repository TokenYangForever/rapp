import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Home from './Home'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const HomeTab = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>数独数组</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/sanziqi'>三子棋</Link></li>
      </ul>

      <hr />

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/sanziqi' component={App} />
    </div>
  </Router>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

ReactDOM.render(<HomeTab />, document.getElementById('root'))

// import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(<App name='token' />, document.getElementById('root'))
// registerServiceWorker()
