import React from "react"
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import alcoPhoto from './пьянка.jpg'
import progPhoto from './програмист.jpg'
import pickupPhoto from './пикап.jpg'

function Skills() {
    return (
        <div id={'skills'}className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.title}>
                    <h2>Skills</h2>
                </div>

                <div className={style.skills}>
                    <Skill title={"Alcohol"}
                           description={"I regularly drink different brands of alcohol. " +
                           "I skillfully keep up the conversation at any booze. I love drunken dancing."}
                           skillIcon={alcoPhoto}
                    />
                    <Skill title={"Programming"}
                           description={"I am undergoing training at IT-incubator. " +
                           "I am fluent in React.JS, Redux, TypeScript."}
                           skillIcon={progPhoto}
                    />
                    <Skill title={"PickUp"}
                           description={"After drinking alcohol, " +
                           "I have an irresistible desire to make contact with girls, as well as dance and have fun."}
                           skillIcon={pickupPhoto}
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;
