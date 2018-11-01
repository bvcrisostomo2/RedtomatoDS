import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button } from 'antd';
import './App.css';

import LandningPage from './components/Pages/landing_page';
import LandingPage from './components/Pages/landing_page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="">
            <Link exact to="/">Home</Link>
            

            <Switch>
              <Route exact path="/" component={LandingPage}/>
          </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
