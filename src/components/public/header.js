import React, { Component } from 'react'

class Header extends Component {

    render() {
        return (
            <div>
                <div className="header">{this.props.headName}</div>
            </div>
        )
    }
}

export default Header;