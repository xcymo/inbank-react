import React, { Component } from 'react'
import Header from '../public/header'
import Tag from '../tag/tag'
class Home extends Component {
    constructor(props){
        super(props);
        this.getTagName=this.getTagName.bind(this);
    }
    getTagName(e) {
        console.log('111');   
        console.log(e); 
    }
    render() {
        return (
            <div>
                <Header headName="首页" />
                <div></div>
                <Tag text='大标签' handleClick={this.getTagName}/>
            </div>
        )
    }
}

export default Home;