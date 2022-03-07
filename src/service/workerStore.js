import store from "store-js";

export const addTask = (task) => {
    const arrayTasks = store.get('tasks');
    arrayTasks ? store.set('tasks', [...arrayTasks, task]) : store.set('tasks', [task]);
    window.dispatchEvent(new Event("storage"));
}

export const returnTasks = () => {
    return  store.get('tasks')
}

export const clearTasks = () => {
    store.remove('tasks')
    window.dispatchEvent(new Event("storage"));
}

export const changeTask = (id, text, param) => {
    const arrayTasks = store.get('tasks');
    arrayTasks.forEach((item) => {
        if (item.id===id && param==='text') {
            item.title = text
        } else if (item.id===id && param==='finish') {
            item.finished = true
        }
    })
    store.set('tasks', arrayTasks)
    window.dispatchEvent(new Event("storage"));
}

export const deleteTask = (id) => {
    const arrayTasks = store.get('tasks');
    const newTasks = arrayTasks.filter((item)=>{ return item.id !== id })
    store.set('tasks', newTasks)
    window.dispatchEvent(new Event("storage"));
}