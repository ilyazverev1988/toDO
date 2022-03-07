import React, {useState} from "react";
import styles from './task.module.css';
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SaveIcon from '@mui/icons-material/Save';
import Input from "@mui/material/Input";
import {changeTask, deleteTask} from "../../service/workerStore";
const Task = (props) => {
    const {title, id, finished} = props.item;
    const [active, setActive] = useState(false);
    const [text, setText] = useState(title);
    const handleChangeText = ()=>{
        changeTask(id, text, 'text');
    }
    const handleFinishTask = () => {
        changeTask(id, text, 'finish');
    }
    const hadleDeleteTaks = () => {
        deleteTask(id);
    }
    return (
        <div className={finished ? styles.wrapper_task_finish : styles.wrapper_task}>
            <Button variant="contained" onClick={()=>setActive(!active)}>{active ? 'Свернуть': 'Изменить'}</Button>
            <p className={styles.title_text}>Задача: {title}</p>
            {active ?
                <div>
                    <Input className={styles.input}
                        margin="dense"
                        id="task"
                        label="Описание задачи"
                        // fullWidth
                        variant="standard"
                        value={text}
                        onChange={(evt)=>setText(evt.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="saveText"
                                    onClick={handleChangeText}
                                    edge="end"
                                >
                                    <SaveIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {!finished && <Button className={styles.button} variant="contained" onClick={handleFinishTask}>Задача выполнена</Button>}
                    <Button className={styles.button} variant="contained" onClick={hadleDeleteTaks}>Удалить задачу</Button>
                </div>
                : null}
        </div>
    )
}

export default Task;