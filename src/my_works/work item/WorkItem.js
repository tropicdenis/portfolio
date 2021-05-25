import React from "react"
import style from './WorkItem.module.scss';

function WorkItem(props) {
    return (
        <div className={style.workItem}>

                <a href={"#main"}>
                    <div className={style.image} style={props.style}> </div>
                </a>

            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>

    );
}

export default WorkItem;
