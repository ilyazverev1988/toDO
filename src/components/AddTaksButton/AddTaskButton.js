import React, {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import uuid from 'react-uuid';
import {addTask} from "../../service/workerStore";

const AddTaskButton = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
        setTitle('');
    };

    const handleCreateTask = () => {
        let taskForRender = {
            id: uuid(),
            title: title,
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button disabled={title.length===0} onClick={handleCreateTask}>Создать</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddTaskButton