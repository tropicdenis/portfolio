import React from "react"
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import profilePhoto from './gomer.png'


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi, There</span>
                    <h1>I am Denis Trapeshchonok</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>
                    <img src={profilePhoto}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
