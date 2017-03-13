import React, { Component } from 'react';
import './Tab.css'
//var Line = require('react-line');
class String extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var color = this.props.active ? "red" : "black";
        var stringStyle = {"borderColor": color}
        return (
        <div className="String" style={stringStyle} onClick={this.props.handleClick}></div>
        )
    }
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
        notesmap: {},
        counter: 0
    }

    render() {
        var columns = [];
        for (var i=0; i < 100; i++) {
            columns.push(<Cell key={i} num={i} active={i === this.state.activeCell}></Cell>)
            //columns.push(<a href="#" key={i}>{i%4 + 1}</a>);
        }
        document.body.addEventListener('keydown', this.handleKeyPress);
        var notes = [];
        //Push all the notes to the array. Easier to render array
        for (const cell of Object.keys(this.state.notesmap)) {
            for(var i = 0; i < 6; i++){
                if(this.state.notesmap[cell][i]){
                    notes.push(this.state.notesmap[cell][i])
                };
            }
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
                    {notes}
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

        this.setState({activeString: i, activeCell: cellNum});
    }
    //What happens when we want to add a tab
    handleKeyPress = (event) => {
        var cell = this.state.activeCell;
        var string = this.state.activeString - 1;
        var notesmap = this.state.notesmap;
        var counter = parseInt(this.state.counter);
        //Directions to move around the tab frame
        console.log(event.key);
        switch(event.key){
            case "ArrowUp":
                event.preventDefault();
                this.setState({activeString: Math.max(1, this.state.activeString-1)})
                return;
            case "ArrowDown":
                event.preventDefault();
                this.setState({activeString: Math.min(6, this.state.activeString+1)})
                return;
            case "ArrowLeft":
                event.preventDefault();
                this.setState({activeCell: Math.max(0, this.state.activeCell-1)})
                return;
            case "ArrowRight":
                event.preventDefault();
                this.setState({activeCell: Math.min(100, this.state.activeCell+1)})
                return;
            case "Backspace":
                event.preventDefault();
                if(cell.toString() in notesmap){
                    notesmap[cell.toString()][string] = false;
                    this.setState({notesmap: notesmap});
                }
                return;

        }
        if(event.key < "0" || event.key > "9") return;
        //Initialize state variables for easier access lol
        //If the note is already there
        if(cell.toString() in notesmap){
            var prevNote = notesmap[cell.toString()][string];
            if(prevNote){
                var fret = parseInt(prevNote.props.fret)*10;
                notesmap[cell.toString()][string] =
                    <Note cell={cell} string={string} key={counter} fret={fret+parseInt(event.key)}/>;
            }
            else notesmap[cell.toString()][string] = <Note cell={cell} string={string} key={counter} fret={parseInt(event.key)}/>;
        }
        else{
            notesmap[cell.toString()] = new Array(6);
            notesmap[cell.toString()][string] = <Note cell={cell} string={string} key={counter} fret={parseInt(event.key)}/>;
        }

        this.setState({activeCell: Math.min(100, cell+1), notesmap: notesmap, counter: ++counter});
    }

}

export default Tab
