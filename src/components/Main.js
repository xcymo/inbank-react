require('normalize.css/normalize.css');
require('styles/App.css');
import { Route, HashRouter, Switch } from 'react-router-dom'
import React from 'react';
import Login from './login/login'
import Home from './home/home';
import Trade from './trade/trade';
import Asset from './asset/asset';
import Mine from './mine/mine';
import Navbar from './nav'



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
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/asset" component={Asset} />
                        <Route path="/trade" component={Trade} />
                        <Route path="/mine" component={Mine} />                                      
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
