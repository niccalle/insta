import React, { Component } from 'react';
import './Tab.css'
import Line from 'react-line';
class String extends Component {
    render() {
        return <p>{this.props.num} string</p>
    }
}

class Tab extends Component {
    render() {
        return (
            <div className="Tab-frame">
                <String num={1} />
                <String num={2} />
                <String num={3} />
                <String num={4} />
                <String num={5} />
                <String num={6} />
            </div>
        )
    }
}

export default Tab
