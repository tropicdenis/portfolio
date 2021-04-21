import React from "react"
import style from './Nav.module.css';


function Nav() {
    return (
        <div className={style.nav}>
            <a href={"#main"}>Главная</a>
            <a href={"#skills"}>Скилы</a>
            <a href={"#myWorks"}>Проекты</a>
            <a href={"#footer"}>Контакты</a>
        </div>
    );
}

export default Nav;
