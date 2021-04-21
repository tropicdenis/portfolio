import React from "react"
import style from './MyWorks.module.css';
import styleContainer from '../common/styles/Container.module.css'
import WorkItem from "./work item/WorkItem";
import flowerIcon from './flowers.png';
import alcoholIcon from './alcohol.png';
import booksIcon from './books.png';

function MyWorks() {
    return (
        <div id={'myWorks'}className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.myWorks}>
                    <WorkItem title={"Flowers Store"}
                              workIcon={flowerIcon}
                    />
                    <WorkItem title={"Books store"}
                              workIcon={booksIcon}
                    />
                    <WorkItem title={"Alcohol store"}
                              workIcon={alcoholIcon}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
