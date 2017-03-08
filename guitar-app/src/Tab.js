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

class Cell extends Component {
    render() {
        var color = this.props.active ? "green" : "#333";
        var cellStyle = {"backgroundColor": color}
        var i = parseInt(this.props.num, 10);
        return (
            <a href="#" style={cellStyle}>{i%4 + 1}</a>
        )
    }
}

class Note extends Component {
    render() {
        var cell = parseInt(this.props.cell, 10)
        var string = parseInt(this.props.string, 10)
        var x = "" + ((cell*3.6) + 1.5) + "%";
        var y = "" + ((string*13.5) + 22.5) + "%";
        var noteStyle = {"left": x, "top": y}
        return (<div className="fret" style={noteStyle}>{this.props.fret}</div>)
    }
}
class Tab extends Component {
    state = {
        activeString: -1,
        activeCell: -1,
        notes: []
    }

    render() {
        var columns = [];
        for (var i=0; i < 100; i++) {
            columns.push(<Cell key={i} num={i} active={i === this.state.activeCell}></Cell>)
            //columns.push(<a href="#" key={i}>{i%4 + 1}</a>);
        }
        document.body.addEventListener('keydown', this.handleKeyPress);


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
                    {this.state.notes}
                </div>

            </div>

        )
    }
    renderString(i) {
        return <String num={i} handleClick={ this.handleClick(i) } active={this.state.activeString === i}/>
    }

    //This binds the click to the TAB component
    handleClick = (i) => (e) => {
        var scrolled = document.getElementById("Tab-container").scrollLeft
        // THIS GIVES US HOW FAR WE HAVE SCROLLED
        var leftMar = window.getComputedStyle(document.getElementById("Tab-container"), null).getPropertyValue('left')
        leftMar = parseInt(leftMar, 10)
        var relativeX = scrolled + e.clientX - leftMar;

        //The particular cell that we've clicked
        var cellNum = Math.floor(relativeX / 36.34); //TODO: Make this shit reliable

        //JUST WANT TO TEST: Add a note wherever clicked
        this.setState({activeString: i, activeCell: cellNum});
    }

    handleKeyPress = (event) => {
        if(event.key < "0" || event.key > "9") return;
        console.log(event.key);
        var notes = this.state.notes.slice();
        notes.push(<Note cell={this.state.activeCell} string={this.state.activeString-1} key={notes.length} fret={event.key}/>)
        this.setState({notes: notes});
    }

}

export default Tab
