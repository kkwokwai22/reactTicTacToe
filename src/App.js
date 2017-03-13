import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Tic Tac Toe</h2>
        </div>
        <Board />
      </div>
    );
  }
}

export default App;
