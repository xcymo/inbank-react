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
            <div>
                <HashRouter>
                    <div>
                        <Navbar />
                        <Switch>
                            <Route path="/login" exact component={Login} />
                            <Route path="/home" exact component={Home} />
                            <Route path="/asset" exact component={Asset} />
                            <Route path="/trade" exact component={Trade} />
                            <Route path="/mine" exact component={Mine} />
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
