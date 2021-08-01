import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addNewTask,
  deleteTask,
  selectTasks
} from './taskListSlice.js';
import styles from './TaskList.module.css';

export function TaskList() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  /* task will store a string that corresponds to the user's input and will be used to add new tasks to TaskList */
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  }

  const handleAddTask = (e) => {
    /* Since a form will likely be used to handle adding tasks to TaskList, e.preventDefault() will prevent the default action of a form refreshing the browser on submit */
    e.preventDefault();

    /* Math.random() is used to generate a random id for each task. While this approach works, it could be beneficial to incorporate an approach that guarantees uniqueness among ids */
    dispatch(addNewTask({task: task, id: Math.floor(Math.random() * 100000)}));

    /* Clears the input on submit */
    setTask('');

  }

  return (
    <div>
      <h2>Today's Tasks</h2>
      <div>
        <ul>
          {tasks.map(task => {
            return <li>{task.task}</li>
          })}
        </ul>
      </div>
      <form onSubmit={handleAddTask}>
        <input value={task} onChange={handleTaskChange} placeholder="Add new task..." type="text" />
        <input type="submit" value="Add task" />
      </form>
    </div>
  );
}