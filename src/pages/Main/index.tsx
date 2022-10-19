import React from 'react';
import style from './index.module.css'
import {TodoList} from "../index";

export const Main = () => {
    return (
        <div className={style.main}>
            <TodoList/>
        </div>
    );
};
