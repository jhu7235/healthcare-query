import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';


function Landing () {

  return (
    <div id="landing">
      <div className="container welcome-message">
        <h1>Welcome to Access,</h1>
        <h3>your one-stop shop for all of your healthcare information.</h3>
      </div>

      <div className="app-body">
        <Switch>
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Redirect to="/login" />
        </Switch>
      </div>

    </div>
    );

}

export default Landing;
