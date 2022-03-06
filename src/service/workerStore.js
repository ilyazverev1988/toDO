import store from "store-js";

export const addTask = (task) => {
    const arrayTasks = store.get('tasks');
    arrayTasks ? store.set('tasks', [...arrayTasks, task]) : store.set('tasks', [task]);
}