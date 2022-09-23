import React from "react";
import Note from './Components/Note/Note';
import './NotesList.css';
import EmptyList from "./Components/EmptyList/EmptyList";

function NotesList(props){

    const deleteNote = (id) => {
        props.deleteNote(id);
    }


    if(props.notes.length <= 0){
        return(
            <EmptyList />
        );
    }

    return(
        <>
            {props.notes.map((note) => {
                return <Note deleteNote={deleteNote} note={note} key={note.id}/>
            })}
        </>
    );
}

export default NotesList;