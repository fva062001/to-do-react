import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './AddNote.module.css';
import Button from 'react-bootstrap/Button';

function Backdrop(props){
    return <div className={styles.backdrop} onClick={props.hideForm}/>;
}

function Modal(props){

    const noteTitle = useRef();
    const noteContent = useRef();


    const submitNote = (event) => {
        event.preventDefault();
        const title = noteTitle.current.value;
        const content = noteContent.current.value;
        if(content.length > 0)
        {
            const newNote = {id: Math.floor(Math.random() * 100),title: title, content: content, active: true};
            props.addNote(newNote);
            noteTitle.current.value = "";
            noteContent.current.value = "";
        }
        else
        {
            alert("Please don't submit an empty note");
            noteTitle.current.value = "";
            noteContent.current.value = "";
        }
    }


    return(
        <div className={styles.card}>
            <form onSubmit={submitNote}>
                <label htmlFor="title">Note Title</label>
                <input ref={noteTitle} id="title" type="text" />
                <label htmlFor="content">Note Content</label>
                <input ref={noteContent} id="content" type="text" />
                <Button variant='outline-info' type="submit">Add Note</Button>
            </form>
        </div>
    );
}


function AddNote(props){







    return(
        <>
            {ReactDOM.createPortal(<Backdrop hideForm={props.hideForm}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal addNote={props.addNote}/>, document.getElementById('modal-root'))}
        </>

    );
}


export default AddNote;