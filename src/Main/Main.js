import React from "react"
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import profilePhoto from './myAvatar.jpg'


function Main() {
    return (
        <div id={'main'} className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi, There</span>
                    <h1>I am Denis Trapeshchonok</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={style.photo}>
                    <img src={profilePhoto}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
