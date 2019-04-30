import React, {Component} from 'react'

class Tag extends Component {
    constructor(props){
        console.log(props);
        super(props);      
        this.sendClick=this.sendClick.bind(this);
    }
    sendClick(){
        this.props.handleClick(this.props.text);
    }
    render(){
        return (
            <span onClick={this.sendClick}>
                {this.props.text}
            </span>
        )
    }
}

export default Tag;