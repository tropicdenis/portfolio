import React from "react"
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";


function Footer() {
    return (
        <div id={'footer'}className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.footer}>
                    <div className={style.title}>
                        <h2>DENIS</h2>
                    </div>

                    <div className={style.links}>
                        <a href="#">Facebook </a>
                        <a href="#">Twitter </a>
                        <a href="#">VK </a>
                        <a href="#">Linkedin </a>
                        <a href="#">Instagram </a>
                    </div>
                    <div>
                        <p>
                            © 2021 Denis Trapeshchonok, All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;
