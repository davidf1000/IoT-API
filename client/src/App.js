import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
//Style
import './App.css';
//Component
import Nav from './components/layout/Nav';
import Landing from './components/layout/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import GetStarted from './components/GetStarted/GetStarted'
import Footer from './components/layout/Footer';
const useStyles = makeStyles((theme)=>({
  root: {
    width: '100%',
    maxWidth: 500,
    textAlign:"center"
  },
  container :{
      display: 'flex',
      alignItems:'center',
      justifyContent: "center",
      flexDirection: 'column',
  },
  footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
      position:'absolute',
      bottom:0
    }
}));
const App = () => {
  const classes = useStyles();
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
          <div className={classes.container}>
          <Footer />

          </div>
        </Fragment>
      </Router>
  );
}

export default App;
