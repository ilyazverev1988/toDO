import React from "react";
import styles from './header.module.css';
import AddTaskButton from "../AddTaksButton/AddTaskButton";
import ClearTaskButton from "../ClearTaksButton/ClearTaskButton";

const Header = () => {
    return (
        <div className={styles.header_wrapper}>
        <h2 className={styles.title}>Приложение создано для работы с напоминаниями</h2>
            <div className={styles.wrapper_button}>
            <AddTaskButton/>
            <ClearTaskButton/>
            </div>
        </div>
    )
}

export default Header;