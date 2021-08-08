import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, switchStatus } from '../features/taskList/taskListSlice';
import styles from './Task.module.css';

export default function Task({task}) {
  const dispatch = useDispatch();

  const handleDeleteTask = (e) => {
    dispatch(deleteTask(task));
  };

  const handleSwitchStatus = (e) => {
    
    dispatch(switchStatus(task))
  }

  return (
    <li className={styles.list}>
      <label className={styles.container}>
        <input type="checkbox" onClick={handleSwitchStatus} checked={task.completed} />
        <div className={styles.checkmark}></div>
        <p className={styles.task}>{task.task}</p>
        <button onClick={handleDeleteTask} aria-label="Remove" className={styles.deleteBtn}>X</button>
      </label>
      
    </li>
  )
}