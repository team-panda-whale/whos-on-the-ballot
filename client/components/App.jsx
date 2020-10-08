import React, { Component } from 'react';
import { render } from 'react-dom';
import Container from './Container.jsx';
import ContainerCopy from './ContainerCopy.jsx';
import Login from './Login.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id='outer-container'>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/search' component={ContainerCopy} />
          </Switch>
        </Router>
        <ReactQueryDevtools />
      </div>
    );
  }
}

export default App;
