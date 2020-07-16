import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Style
import './App.css';
//Component
import Nav from './components/layout/Nav';
import Landing from './components/layout/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import GetStarted from './components/GetStarted/GetStarted'

const App = () => {
  return (
      <Router>
        <Fragment>
          <Nav />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/getstarted" component={GetStarted} />
            </Switch>
          </section>
        </Fragment>
      </Router>
  );
}

export default App;
