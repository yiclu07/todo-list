import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/taskList/taskListSlice';
import styles from './Task.module.css';

export default function Task({task}) {
  const dispatch = useDispatch();

  const handleDeleteTask = (e) => {
    dispatch(deleteTask(task));
  };

  return (
    <li>
      <label className={styles.container}>
        <input type="checkbox"/>
        <span className={styles.checkmark}></span>
        {task.task}
      </label>
      <button onClick={handleDeleteTask} aria-label="Remove">X</button>
    </li>
  )
}