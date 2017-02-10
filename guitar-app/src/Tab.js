import React, { Component } from 'react';
import './Tab.css'
//var Line = require('react-line');
class String extends Component {
    constructor(props){
        super(props);
        this.state = {test: -1};
    }
    render() {
        var color = this.props.active ? "red" : "black";
        var stringStyle = {"borderColor": color}
        return (
        <div onClick={() => this.handleClick()} className="String" style={stringStyle}>
        </div>
        )
    }
    handleClick() {
        //console.log("hello")
        console.log(this.props.num);
        this.props.handleClick();
    }
}

class Tab extends Component {
    constructor(props){
        super(props);
        this.state = {activeString: -1};
    }

    render() {
        return (
            <div className="Tab-frame">
                {this.renderString(1)}
                {this.renderString(2)}
                {this.renderString(3)}
                {this.renderString(4)}
                {this.renderString(5)}
                {this.renderString(6)}
            </div>
        )
    }
    renderString(i) {
        return <String num={i} handleClick={() => this.stringClick(i)} active={this.state.activeString === i}/>
    }
    stringClick(string) {
        console.log(this.state);
        console.log(string);
        this.setState({activeString: string});
    }

}

export default Tab
