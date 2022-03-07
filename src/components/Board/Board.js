import React, {useEffect, useState} from "react";
import styles from './board.module.css';
import Task from "../Task/Task";

const Board = (props) => {
    const {tasks} = props;
    return (
        <div className={styles.board_wrapper}>
            {tasks ? tasks.map((item)=>
                <Task key={item.id} item={item}/>
             ) :
            <p>Задач нет, можно отдыхать)</p>
                }
        </div>
    )
}

export default Board;