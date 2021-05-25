import React from "react"
import style from './MyWorks.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import WorkItem from "./work item/WorkItem";
import Title from "../common/components/title/Title";
import socialImage from './../assets/image/socialNetwork.png';
import todoListImage from './../assets/image/todoList.jpg';


function MyWorks() {
    const social = {
        backgroundImage: `url(${socialImage})`
    };
    const todoList = {
        backgroundImage: `url(${todoListImage})`
    };
    return (
        <div id={'myWorks'} className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <Title text={"My Works"}/>

                <div className={style.myWorks}>
                    <WorkItem style={social}
                              title={"Social network"}
                              itemReference={"https://github.com/tropicdenis/tropic_social_network"}
                              description={"A social networking service (also social " +
                              "networking site or social media) is an online platform " +
                              "which people use to build social networks or social " +
                              "relationships with other people who share similar personal" +
                              " or career interests, activities, backgrounds or real-life " +
                              "connections."}
                    />
                    <WorkItem style={todoList}
                              title={"TodoList"}
                              itemReference={"https://github.com/tropicdenis/new_todolist"}
                              description={"Todolist is an application that allows you to" +
                              " control your to-do list and tasks so that you can complete " +
                              "them on time and maximize your productivity."}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
