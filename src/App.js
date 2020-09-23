import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Alert from './pages/alert';
import SignIn from './pages/login';
import Employees from './pages/employees';
import './App.css';


class App extends React.Component {

  render() {
    return (
      <div>
        <Alert/>
        <Switch>
        <Route exact path='/' component = {SignIn} />
        <Route exact path='/dashboard' component = {Employees} />
        </Switch>
      </div>
    );
  }
}



export default (App);

/*
   <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
*/