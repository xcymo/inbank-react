require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Login from './login/login'

class AppComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        <Login />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
