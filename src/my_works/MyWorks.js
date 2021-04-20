import React from "react"
import style from './MyWorks.module.css';
import styleContainer from '../common/styles/Container.module.css'
import WorkItem from "./work item/WorkItem";

function MyWorks() {
    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.myWorks}>
                    <WorkItem title={"Flowers Store"}
                              description={"We like flowers. Bla bla bla.Bla bla bla.Bla bla bla.Bla bla bla."}/>
                    <WorkItem title={"Books store"}
                              description={"We like books. Bla bla bla.Bla bla bla.Bla bla bla.Bla bla bla."}/>
                    <WorkItem title={"Alcohol store"}
                              description={"We like alcohol. Bla bla bla.Bla bla bla.Bla bla bla.Bla bla bla."}/>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
