import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p>React is working!</p>
        <Person name="Han"/>
        <Person name="Leia">It's a pricess!</Person>
        <Person name="Luke"/>
      </div>
    );
  }
}

export default App;
