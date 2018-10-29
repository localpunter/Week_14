import React, { Component } from 'react';
import './App.css';
import PiggyBank from './PiggyBank';

class App extends Component {
  render() {
    return (
      <PiggyBank title="Savings Pig" amount={5}/>
    );
  }
}

export default App;
