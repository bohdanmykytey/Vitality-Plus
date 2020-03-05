import React from 'react';
import LandingPage from './Components/landingPage'
import InfoForm from './Components/InfoForm'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import { Appbar, Button, Container } from 'muicss/react';

function App() {


  return (
    <div className='App'>
      <Router>

      <Switch>
        <Route exact path='/form'>
          <InfoForm />
        </Route>
      </Switch>

      </Router>
      
      <LandingPage />
      
 
    </div>
  );
}

export default App;
