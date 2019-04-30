import React from 'react';
import './login.less';
import axios from 'axios';
// import Main from 'components/Main'
import { Redirect } from 'react-router'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            hasLogin: false
        };
        this.doLogin = this.doLogin.bind(this)
    }
    changeHandler(name, event) {
        let newState = {};
        newState[name] = event.target.value;
        this.setState(newState);
    }
    doLogin() {       
        axios.get("/static/api/v1/user/login" + ".json", {
            country_code: "86",
            account: this.state.account,
            password: this.state.password
        }).then((res) => {
            console.log(res);
            if(res.data.account==this.state.account&&res.data.password==this.state.password){
                this.setState({
                    hasLogin: true
                })
                localStorage.hasLogin=this.state.hasLogin;
                window.location.reload();
            }else{
                alert('账号或密码错误');
            }
        })
    }
    render() {        
        if (!this.state.hasLogin) {
            return (
                <div className="loginOut">
                    <div>登录界面</div>
                    <div className="inputDiv"><input type='number' placeholder='请输入账号' onChange={this.changeHandler.bind(this, 'account')} /></div>
                    <div className="inputDiv"><input type='password' placeholder='请输入密码' onChange={this.changeHandler.bind(this, 'password')} /></div>
                    <div className="btnDiv"><button onClick={this.doLogin}>登录</button></div>
                </div>
            )
        } else {
            return (<Redirect to="/main" />)
        }
    }
}

export default Login