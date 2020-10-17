import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import CreateDonor from './components/pages/create-donor';
import CreateUser from './components/pages/create-user';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/create-donor' component={CreateDonor} />
          <Route path='/about' component={About} />
          <Route path='/create-user' component={CreateUser} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

