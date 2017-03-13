import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class StartGame extends React.Component {
  constructor() {
    super()
  }

  startGame() {
    console.log("startingGame");
  }

  render() {
    return (
      <div>
        <button onClick={this.startGame.bind(this)}>StartGame</button>
      </div>
    )
  }
}



export default StartGame;
