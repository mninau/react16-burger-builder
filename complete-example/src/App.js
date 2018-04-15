import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p>lalalala</p>
        <Person/>
      </div>
    );
  }
}

export default App;
