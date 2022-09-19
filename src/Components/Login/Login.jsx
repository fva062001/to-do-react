import React from "react";
import styles from './Login.module.css';


function User(props) {

    return(
        <div>
            <h2 className={styles.h2}>Hello, {props.username}</h2>
            <p className={styles.p}>My Tasks</p>
        </div>
    );
}

export default User;