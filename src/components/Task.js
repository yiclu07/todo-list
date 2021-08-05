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
    <li className={styles.list}>
      <label className={styles.container}>
        <input type="checkbox"/>
        <span className={styles.checkmark}></span>
        {task.task}
        <span><button onClick={handleDeleteTask} aria-label="Remove">X</button></span>
      </label>
      
    </li>
  )
}