import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
       
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to reactiv-coaching</h2>
      </div>
    );
  }
}

export default App;
