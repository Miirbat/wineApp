import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import GrapeTable from './components/GrapeTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={GrapeTable} />
      </Router>
    )
  }
}

export default App;
