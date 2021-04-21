import React from "react"
import style from './WorkItem.module.css';

function WorkItem(props) {
    return (<div className={style.item}>
            <div className={style.workItem}>
                <div className={style.icon}>
                    <img src={props.workIcon}/>
                </div>
                <h3>{props.title}</h3>
            </div>
        </div>
    );
}

export default WorkItem;
