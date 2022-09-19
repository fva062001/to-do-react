import React from "react";
import classes from './EmptyList.module.css'

function EmptyList(){
    return(
        <div className={classes.card}>
            <p>Welcome, it looks like you don't have tasks in here, click the button below and then add a new task!!</p>
        </div>
    );
}

export default EmptyList;