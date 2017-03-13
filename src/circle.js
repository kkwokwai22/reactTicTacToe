
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class circle extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <img src={require('../public/circle.png')} />
      </div>
    )
  }
}



export default circle;
