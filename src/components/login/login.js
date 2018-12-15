import React from 'react';
import './login.less';
import axios from 'axios'
import base from '../../static/base.json';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: ''
        };
        this.doLogin = this.doLogin.bind(this)
    }
    changeHandler(name, event) {
        let newState = {};
        newState[name] = event.target.value;
        this.setState(newState);
    }
    doLogin() {
        console.log(this.state.account);
        console.log(this.state.password);
        axios.post(base.domain + "api/v1/user/login", {
            country_code: "86",
            account: this.state.account,
            password: this.state.password
        }).then((res) => {
            console.log(res);
        })

    }
    render() {
        return (
            <div>
                <div>登录界面</div>
                <div><input type='number' placeholder='请输入账号' onChange={this.changeHandler.bind(this, 'account')} /></div>
                <div><input type='password' placeholder='请输入密码' onChange={this.changeHandler.bind(this, 'password')} /></div>
                <div><button onClick={this.doLogin}>登录</button></div>
            </div>
        )
    }
}

export default Login