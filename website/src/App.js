import React, { Component } from 'react';
import './App.css';
import Keyboard from './Keyboard/Keyboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            CoderLayout
          </p>
          <Keyboard />
        </header>
        <br/>
      </div>
    );
  }
}

export default App;
