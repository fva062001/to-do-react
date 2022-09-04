import React from "react";
import './Note.css';

function Note(props){

    const deleteNote = (e) => {
        props.deleteNote(props.note.id);
    }

    return(
        <div onClick={deleteNote} className="card">
            <p>{props.note.content}</p>
        </div>
    );
}

export default Note;