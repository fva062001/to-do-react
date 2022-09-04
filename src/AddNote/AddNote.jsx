import React, {useState} from 'react';
import './AddNote.css';

function AddNote(props){

    const [content,setContent] = useState('');

    const handleChange = (e) => {
        setContent(e.target.value);
    }


    const submitNote = (event) => {
        console.log("Here");
        event.preventDefault();
        if(content.length > 0){
        const newNote = {id: Math.floor(Math.random() * 100)
            ,            username: "Fernando", 
                         content: content, 
                         active: true};
        props.addNote(newNote);
        setContent('');
    }
    else{
        alert("Please don't submit an empty note");
        setContent('');
    }
    }

    return(
            <form onSubmit={submitNote}>
                    <input type="text" placeholder='Add something' value={content} onChange={handleChange}/>
                    <button type="submit">+</button>
            </form>
    );
}


export default AddNote;