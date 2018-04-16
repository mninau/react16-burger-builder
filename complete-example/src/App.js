import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    darkSide: [
      { name: 'Darth Vader' },
      { name: 'Darth Sidious' },
    ],
  };

  switchNameHandler = () => {
    alert('Was clicked');
    // DON'T USE THIS: this.state.specialName = 'Patata';
    this.setState({ specialName: 'C3PO' });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p>React is working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name="Han"/>
        <Person name="Leia">It's a trap!</Person>
        <Person name="Luke"/>
        <Person name={this.state.darkSide[0].name}/>
        <Person name={this.state.darkSide[1].name}/>
        <Person name={this.state.specialName}/>
      </div>
    );
  }
}

export default App;
