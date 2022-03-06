import React, {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import uuid from 'react-uuid';
import {addTask} from "../../service/workerStore";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import ruLocale from 'date-fns/locale/ru';
import styles from './addTaskButton.module.css';

const AddTaskButton = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');
    const [time, setTime] = useState(null);

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
        setTitle('');
        setTask('');
    };

    const handleCreateTask = () => {
        let taskForRender = {
            id: uuid(),
            title: title,
            task: task,
            date: time
        }
        addTask(taskForRender);
        handleClose();
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Создать задачу
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Создать задачу</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Для создания задачи необходимо заполните следующие поля
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Заголовок задачи"
                        fullWidth
                        variant="standard"
                        defaultValue={title}
                        onChange={(evt)=>setTitle(evt.target.value)}
                        required
                    />
                    <TextField
                        margin="dense"
                        id="title"
                        className={styles.text_field}
                        label="Текст задачи"
                        fullWidth
                        variant="standard"
                        defaultValue={task}
                        onChange={(evt)=>setTask(evt.target.value)}
                        required
                    />
                    <LocalizationProvider  locale={ruLocale} dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Выберите дату"
                            views={['year', 'month', 'day']}
                            value={time}
                            fullWidth
                            onChange={(newValue) => {
                                setTime(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button disabled={title.length===0 || task.length===0 || !time} onClick={handleCreateTask}>Создать</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddTaskButton