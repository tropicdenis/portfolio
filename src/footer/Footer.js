import React from "react"
import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.scss";


function Footer() {
    return (
        <div id={'footer'}className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.footer}>
                    <div className={style.title}>
                        <h2>DENIS</h2>
                    </div>

                    <div className={style.links}>
                        <a href="https://t.me/DenisTrapeshconok">Telegram </a>
                        <a href="https://www.linkedin.com/in/denis-trapeshchonok-b933a91a4/">Linkedin </a>
                        <a href="https://github.com/tropicdenis">Github </a>
                        <a href="https://www.codewars.com/users/tropicdenis">Codewars </a>
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
