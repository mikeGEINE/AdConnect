import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Header from './Header.js'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Platforms from './Platforms' 
import Ads from './Ads' 

function App() {
  return (
    <div className="app">
      <Header /> 
      <Router>
        <Switch>
          <Route path="/platforms">
            <Platforms />
          </Route>
          <Route path="/ads">
            <Ads />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* Home */}
          {/* Header */}

          {/* Banner */}
              {/* Search */}

          {/* Cards */}

          {/* Footer */}

      {/* SearchPage */}
          {/*...*/}

    </div>
  );
}

export default App;
