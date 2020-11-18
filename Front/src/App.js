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

function App() {
  return (
    <div className="app">
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Header />
        <Home />
        <Form /> */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/card/:id"> 
            <Cardpage />
          </Route>
          <Route path="/" exact> 
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      
      <Header /> 
      <Home />
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


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
