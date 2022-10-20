import React, {useState} from 'react';
import style from './index.module.css'
import {AddTask, TodoList} from "../index";
import {TickerNews} from "../../components";

export const Main = () => {
    const [status, setStatus] = useState<boolean>(true);

    const changeStatus = () => {
        setStatus(!status)
    };
    return (
        <div className={style.main}>
            <div className={style.placeTasks}>
                <AddTask/>
                <TodoList status={status} changeStatus={changeStatus}/>
            </div>
            <TickerNews status={status}/>
        </div>
    );
};
