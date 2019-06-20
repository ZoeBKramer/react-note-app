import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav.js';
import List from './components/list.js';
import Note from './components/note.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showNote: false
    };
  }

  render() {
    const { showNote } = this.state;

    return (
      <div className="App">
        <Nav />
        { showNote ? <Note /> : <List /> }
      </div>
    );
  }
}

export default App;
