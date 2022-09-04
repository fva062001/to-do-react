import './App.css';
import AddNote from './AddNote/AddNote';
import React, {useState} from 'react';
import NotesList from './NotesList';



  //Initial Array of objects to test (displayed in the container component)
  const initialArray = [

  ];
function App() {

  //State for the array of objects
  const [notes, setNotes] = useState(initialArray);
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    console.log(notes);
  }
  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  return (
    <div className='main-container'>
      <NotesList deleteNote={deleteNote} notes={notes}/>
      <AddNote addNote={addNote}/>
    </div>
  );
}

export default App;
