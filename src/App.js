import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav.js';
import List from './components/list.js';
import Note from './components/note.js';

class App extends Component {
render() {
  return (
    <div className="App">
      <Nav />
      <List />
      <Note />
    </div>
  );
}
}

export default App;
