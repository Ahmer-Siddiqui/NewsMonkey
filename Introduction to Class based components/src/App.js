import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  name = "Ahmer";
  render() {
    return (
      <div>
        Hello {this.name} this is your first class base component
      </div>
    )
  }
}
