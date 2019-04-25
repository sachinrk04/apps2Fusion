import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import classes from './App.css';
import SignUp from './containers/SignUp/SignUp';
import LogIn from './containers/LogIn/LogIn';
import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import Logout from './containers/Logout/Logout';
import * as actions from './store/actions/index';
import Tables from './containers/Tables/Tables';

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login"  component={LogIn} />
          <Route path="/logout" component={Logout} />
          <Route path="/tables" component={Tables} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
