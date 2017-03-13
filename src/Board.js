import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import x from './x.js'
// import circle from './circle.js'
import StartGame from './StartGame';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import './Board.css';




class Board extends React.Component {
  constructor() {
    super()
  }

  startGame() {

  }

  render() {
    return (
    <div>
      <div>
        <button onClick={this.startGame.bind(this)}>StartGame</button>
      </div>
      <div className='parent'>
        <div className='boxOne'>

        </div>
        <div className='boxTwo'>

        </div>
        <div className='boxThree'>

        </div>
      </div>
      <div className='parentTwo'>
        <div className='boxFour'>

        </div>
        <div className='boxFive'>

        </div>
        <div className='boxSix'>

        </div>
      </div>
      <div className='parentThree'>
        <div className='boxSeven'>

        </div>
        <div className='boxEight'>

        </div>
        <div className='boxNine'>

        </div>
      </div>
    </div>
    )
  }
}



export default Board;
