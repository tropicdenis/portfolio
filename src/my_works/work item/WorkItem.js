import React from "react"
import style from './WorkItem.module.css';

function WorkItem(props) {
    return (
        <div className={style.workItem}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default WorkItem;
