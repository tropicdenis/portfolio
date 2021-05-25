import React from "react"
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import reactLogo from './react.png'
import typescriptLogo from './typescript.png'
import reduxLogo from './redux.png'
import Title from "../common/components/title/Title";

function Skills() {
    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title className={style.title} text={"Skills"}/>

                <div className={style.skills}>
                    <Skill title={"React"}
                           description={"Development of SPA applications using " +
                           "the React framework."}
                           skillIcon={reactLogo}
                    />
                    <Skill title={"TypeScript"}
                           description={"Writing code using the TypeScript programming" +
                           " language that supports static typing"}
                           skillIcon={typescriptLogo}
                    />
                    <Skill title={"Redux"}
                           description={"Building an application state using the" +
                           " Redux library. Redux is a state management library for" +
                           " JavaScript applications. "}
                           skillIcon={reduxLogo}
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;
