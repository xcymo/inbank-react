require('normalize.css/normalize.css');
require('styles/App.css');
import { Route, HashRouter, Switch } from 'react-router-dom'
import React from 'react';
import Login from './login/login'
import NavBar from './nav'
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLogin: false
    }
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/asset" exact component={Asset} />
          <Route path="/trade" exact component={Trade} />
          <Route path="/mine" exact component={Mine} />
        </Switch>
      </HashRouter>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
