import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addNewTask,
  deleteTask
} from './taskListSlice.js';
import styles from './TaskList.module.css';

export function TaskList() {
  const dispatch = useDispatch();

  /* task will store a string that corresponds to the user's input and will be used to add new tasks to TaskList */
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  }

  const handleAddTask = (e) => {
    /* Since a form will likely be used to handle adding tasks to TaskList, e.preventDefault() will prevent the default action of a form refreshing the browser on submit */
    e.preventDefault();

    dispatch(addNewTask(task));

    /* Clears the input on submit */
    setTask('');

  }

  return (
    <div>
      <h2>Today's Tasks</h2>
      <div>
        {/* List of tasks */}
      </div>
      <form onSubmit={handleAddTask}>
        <input value={task} onChange={handleTaskChange} placeholder="Add new task..." />
      </form>
    </div>
  );
}