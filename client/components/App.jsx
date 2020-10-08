import React, { Component } from 'react';
import { render } from 'react-dom';
import Container from './Container.jsx';
import Login from './Login.jsx';
import CenteredGrid from './Test.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id='outer-container'>
        <CenteredGrid />
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/search' component={Container} />
          </Switch>
        </Router>
        <ReactQueryDevtools />
      </div>
    );
  }
}

export default App;
