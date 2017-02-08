import React, { Component } from 'react';
import './App.css';
import Tab from './Tab'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Instagram Guitar App
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
        <div className="container">
            <Tab />
        </div>
      </div>
    );
  }
}

export default App;
