import classes from './App.module.css';
import AddNote from './Components/AddNote/AddNote';
import React, {useState} from 'react';
import NotesList from './NotesList';
import Button from 'react-bootstrap/Button';
import User from './Components/Login/Login';
import { useEffect } from 'react';
  //Initial Array of objects to test (displayed in the container component)
  const initialArray = [

  ];
function App() {

  const username = "User";
  //State for the array of objects
  const [notes, setNotes] = useState(initialArray);
  const [formAppear, setFormAppear] = useState(false);
  const deleteNote = (id) => {
    localStorage.setItem('note',JSON.stringify(notes.filter((note) => note.id !== id)))
    setNotes(notes.filter((note) => note.id !== id));
  }

  useEffect(()=>{
      setNotes(JSON.parse(localStorage.getItem('note')))
  },[notes])

  const addNote = (note) => {
    setNotes((prevNotes) => {
      localStorage.setItem('note',JSON.stringify([...prevNotes,note]))
      return [...prevNotes, note];
    });
    setFormAppear(false);
  }

  const showForm = () => {
    setFormAppear(true);
  }

  const hideForm = () => {
    setFormAppear(false);
  }

  return (
    <div className={classes.mainContainer}>
      <User username={username}/>
      <NotesList deleteNote={deleteNote} notes={notes}/>
      {formAppear && <AddNote hideForm={hideForm} addNote={addNote}/>}
      <Button size='lg' className={classes.button} onClick={showForm}>+</Button>
    </div>
    
  );
}

export default App;
