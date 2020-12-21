import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import Home from './Home';
import NameForm from "./Form";
import Header from './Header'
import Cardpage from './Cardpage'
import Platforms from './Platforms' 
import Ads from './Ads' 

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/form">
            <NameForm />
          </Route>
          <Route path="/card/:id"> 
            <Cardpage />
          </Route>
          <Route path="/ads">
            <Ads />
          </Route>
          <Route path="/" exact> 
            <Home />
          </Route>
        </Switch>
    </Router>
      {/* <NameForm /> */}
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
