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
    this.setState({ showPersons:!this.state.showPersons });
  }

  render() {
    const style = {
      backgroundColor: 'violet',
      padding: '10px',
      borderRadius: '0px',
      color: 'white',
    };

    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p>React is working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
            Toggle Me
        </button>
        {
          this.state.showPersons ?
            <div>
              <Person name={this.state.darkSide[0].name}/>
              <Person name={this.state.darkSide[1].name}/>
            </div>
          : null
        }
      </div>
    );
  }
}

export default App;
