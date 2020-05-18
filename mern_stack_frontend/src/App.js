import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './component/Login'
import ErrorPage from './component/ErrorPage'

import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Login} />
            <Route component={ErrorPage} />
          </Switch>

        </div>
      </Router>
  );
}

export default App;
