import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import UserAddPage from './pages/UserAdd.js'
import Home from './pages/Home.js'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/user/add" component={UserAddPage}/>
  </Router>
), document.getElementById('app'))