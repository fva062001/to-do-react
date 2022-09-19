import React, {useState} from 'react';
import styles from './AddNote.module.css';
import Button from 'react-bootstrap/Button';

function AddNote(props){

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const contentChangeHandler = (e) => {
        setContent(e.target.value);
    }

    const submitNote = (event) => {
        event.preventDefault();
        if(content.length > 0){
        const newNote = {id: Math.floor(Math.random() * 100)
            ,            title: title, 
                         content: content, 
                         active: true};
        props.addNote(newNote);
        setContent('');
        setTitle('');
    }
    else{
        alert("Please don't submit an empty note");
        setContent('');
    }
    }

    return(
        <div>
            <div className={styles.backdrop} onClick={props.hideForm}/>
            <div className={styles.card}>
                <form onSubmit={submitNote}>
                    <label htmlFor="title">Note Title</label>
                    <input value={title} onChange={titleChangeHandler} id="title" type="text" />
                    <label htmlFor="content">Note Content</label>
                    <input value={content} onChange={contentChangeHandler} id="content" type="text" />
                    <Button variant='outline-info' type="submit">Add Note</Button>
                </form>
            </div>
        </div>

    );
}


export default AddNote;