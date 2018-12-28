import React from 'react';
import { NavLink } from 'react-router-dom'
import './index.css'
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="bottom">
                    <NavLink exact to="/home">首页</NavLink>
                    <NavLink exact to="/asset">资产</NavLink>
                    <NavLink exact to="/trade">交易</NavLink>
                    <NavLink exact to="/mine">我的</NavLink>
                </div>
            </div>
        )
    }
}

export default Navbar;