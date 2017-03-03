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
        <div className="String" style={stringStyle} onClick={this.props.handleClick}></div>
        )
    }
    // handleClick() {
    //     this.props.handleClick();
    // }
}

class Tab extends Component {
    constructor(props){
        super(props);
        this.state = {activeString: -1};
    }

    render() {
        var columns = [];
        for (var i=0; i < 100; i++) {
            columns.push(<a href="#" key={i}>{i}</a>);
        }
        return (
            <div style={{"display":"inline-block"}} className="Whole-tab" id="whole">
                <div className="scrollmenu">
                  {columns}
                </div>
                <div className="Tab-frame">
                    {this.renderString(1)}
                    {this.renderString(2)}
                    {this.renderString(3)}
                    {this.renderString(4)}
                    {this.renderString(5)}
                    {this.renderString(6)}
                </div>

            </div>

        )
    }
    renderString(i) {
        return <String num={i} handleClick={ this.handleClick(i) } active={this.state.activeString === i}/>
    }

    //This binds the click to the TAB component
    handleClick = (i) => (e) => {
        // document.getElementById("Tab-container").scrollLeft
        // THIS GIVES US HOW FAR WE HAVE SCROLLED 
        console.log("Client X" + e.clientX);
        console.log("Screen X" + e.screenXc);
        //document.getElementById("Tab-container").style.
        this.setState({activeString: i});
    }

}

export default Tab
