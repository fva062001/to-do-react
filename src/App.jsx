import classes from './App.module.css';
import AddNote from './AddNote/AddNote';
import React, {useState} from 'react';
import NotesList from './NotesList';
import User from './Login/Login';
import Button from 'react-bootstrap/Button';

  //Initial Array of objects to test (displayed in the container component)
  const initialArray = [
    {
      id: 1,
      title: 'First Note',
      content: 'This is the first note'
    },
    {
      id: 2,
      title: 'Second Note',
      content: 'This is the second note'
    },
    {
      id: 3,
      title: 'Third Note',
      content: 'This is the third note'
    }
  ];
function App() {

  const username = "User";
  //State for the array of objects
  const [notes, setNotes] = useState(initialArray);
  const [formAppear, setFormAppear] = useState(false);
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
    setFormAppear(false);
  }

  const showForm = () => {
    setFormAppear(true);
  }

  return (
    <div className={classes.mainContainer}>
      <User username={username}/>
      <NotesList deleteNote={deleteNote} notes={notes}/>
      {formAppear && <AddNote addNote={addNote}/>}
      <Button className={classes.button} onClick={showForm}>+</Button>
    </div>
    
  );
}

export default App;
