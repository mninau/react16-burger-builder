import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    darkSide: [
      { name: 'Darth Vader' },
      { name: 'Darth Sidious' },
    ],
    specialName: 'X',
    specialSecondName: 'Y',
  };

  showMeHandler = (newName) => {
    alert('=O');
    // DON'T USE THIS: this.state.specialName = 'Patata';
    this.setState({ specialName: 'C3PO' });
    this.setState({ specialSecondName: newName });
  };

  nameHandler = (event) => {
    this.setState({ specialSecondName: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p>React is working!</p>
        <Person name="Han"/>
        <Person name="Leia">It's a trap!</Person>
        <Person name="Luke"/>
        <Person name={this.state.darkSide[0].name}/>
        <Person name={this.state.darkSide[1].name}/>
        <button onClick={this.showMeHandler.bind(this, 'RD2D')}>Show Me</button>
        <Person name={this.state.specialName}/>
        <Person
          change={this.nameHandler}
          click={this.showMeHandler.bind(this, 'RD2D')}
          name={this.state.specialSecondName} />
      </div>
    );
  }
}

export default App;
