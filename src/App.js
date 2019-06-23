import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav.js';
import List from './components/list.js';
import Note from './components/note.js';
import axios from 'axios';
import urlFor from './helpers/urlFor';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showNote: false,
      notes: [],
      note: {}
    };
  }

  toggleNote = () => {
    this.setState({
      showNote: ! this.state.showNote, 
      note: {}
    })
  }

  getNotes = () => {
    axios.get(urlFor('notes'))
    .then((res) => this.setState({ notes: res.data }) )
    .catch((err) => console.log(err) );
  }

  getNote = (id) => {
    axios.get(urlFor(`notes/${id}`))
    .then((res) => this.setState({ note: res.data, showNote: true }) )
    .catch((err) => console.log(err) );
  }

  performSubmissionRequest = (data, id) => {
    if (id) {
      return axios.patch(urlFor(`notes/${id}`), data);
    } else {
      return axios.post(urlFor('notes'), data);
    }
  }

  submitNote = (data, id) => {
    this.performSubmissionRequest(data, id)
    .then((res) => this.setState({ showNote: false }) )
    .catch((err) => console.log(err) );
  }

  render() {
    const { showNote, notes, note } = this.state; 

    return (
      <div className="App">
        <Nav toggleNote={this.toggleNote} showNote={showNote} />
        {showNote ?
          <Note 
          note={note}
          submitNote={this.submitNote} />
          :
          <List 
          getNotes={this.getNotes} 
          notes={notes} 
          getNote={this.getNote} />
        }
      </div>
    );
  }
}

export default App;
