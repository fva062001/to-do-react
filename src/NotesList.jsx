import React from "react";
import Note from "./Note/Note";
import './NotesList.css';

function NotesList(props){

    const deleteNote = (id) => {
        props.deleteNote(id);
    }


    if(props.notes.length <= 0){
        return(
                <h1>No notes, try adding one</h1>
        );
    }

    return(
        <div>
            {props.notes.map((note) => {
                return <Note deleteNote={deleteNote} note={note} key={note.id}/>
            })}
        </div>
    );
}

export default NotesList;