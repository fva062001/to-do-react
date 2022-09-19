import React from "react";
import styles from './Note.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import icon from './trash.svg';

function Note(props){

    const deleteNote = (e) => {
        props.deleteNote(props.note.id);
    }

    return(
        <Container className={styles.card}>
            <Row>
                <Col xs={10}>
                    <p className={styles.title}>{props.note.title}</p>
                    <p className={styles.content}>{props.note.content}</p>
                </Col>
                <Col xs={2}>
                    <button className={styles.button} onClick={deleteNote}><img src={icon} alt="TrashIcon"/></button>
                </Col>
            </Row>
        </Container>
    );
}

export default Note;