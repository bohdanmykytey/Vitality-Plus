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

function App() {


  return (
    <div className='App'>
      <LandingPage />
      <Router>
        <Link to='/form'></Link>

      <Switch>
        <Route exact path='/form'>
          <InfoForm />
        </Route>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
