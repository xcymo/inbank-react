import React from 'react';
import { NavLink } from 'react-router-dom'
import './index.css'
class Navbar extends React.Component {
    render() {
        return (
        <div className="bottom">
                {
                    !localStorage.hasLogin?
                    <NavLink exact className="navbar" activeClassName="activeNavbar" to="/login">登录</NavLink>:
                    <div className="bottom">
                        <NavLink className="navbar" activeClassName="activeNavbar" to="/" exact>首页</NavLink>
                        <NavLink className="navbar" activeClassName="activeNavbar" to="/asset">资产</NavLink>
                        <NavLink className="navbar" activeClassName="activeNavbar" to="/trade">交易</NavLink>
                        <NavLink className="navbar" activeClassName="activeNavbar" to="/mine">我的</NavLink>
                    </div>
                }
        </div>
        )
    }
}

export default Navbar;