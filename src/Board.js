import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import x from './x.js'
// import circle from './circle.js'
import StartGame from './StartGame';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';



class Board extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <StartGame />
      </div>
    )
  }
}



export default Board;
