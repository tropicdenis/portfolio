import React from "react"
import style from './Nav.module.scss';


function Nav() {
    return (
        <div className={style.nav}>
            <a href={"#main"}>Home</a>
            <a href={"#skills"}>Skills</a>
            <a href={"#myWorks"}>My works</a>
            <a href={"#footer"}>Contacts</a>
        </div>
    );
}

export default Nav;
