import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    darkSide: [
      { name: 'Darth Vader' },
      { name: 'Darth Sidious' },
    ],
    showPersons: false,
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  deleteHandler = (personIndex) => {
    // Copy the array
    const items = [...this.state.darkSide];
    items.splice(personIndex, 1);
    this.setState({ darkSide: items });
  }

  render() {
    const style = {
      backgroundColor: 'violet',
      padding: '10px',
      borderRadius: '0px',
      color: 'white',
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.darkSide.map((item, index) => <Person click={this.deleteHandler.bind(this, index)} name={item.name}/>)}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p>React is working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
            Toggle Me
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
