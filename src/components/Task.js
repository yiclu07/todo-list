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
        <div className={styles.checkmark}></div>
        <p className={styles.task}>{task.task}</p>
        <button onClick={handleDeleteTask} aria-label="Remove" className={styles.deleteBtn}>X</button>
      </label>
      
    </li>
  )
}