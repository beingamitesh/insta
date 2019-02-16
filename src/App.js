import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Author from './components/Post';
import Vacations from './components/Vacations';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Author/>
        <Vacations/>
      </div>

    );
  }
}

export default App;
