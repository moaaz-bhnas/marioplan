import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/ProjectDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
