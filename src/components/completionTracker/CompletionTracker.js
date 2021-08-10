import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectTasks,
  selectCompletedTasks
} from '../../features/taskList/taskListSlice.js';
import styles from './CompletionTracker.module.css';

export default function CompletionTracker() {
  const incompleteTasks = useSelector(selectTasks);
  const completedTasks = useSelector(selectCompletedTasks);

  const totalListLength = incompleteTasks.length + completedTasks.length;
  const blockArray = [];

  for (let i = 0; i < totalListLength; i++) {
    if (i < incompleteTasks.length) {
      blockArray.push('#eee');
    } else {
      blockArray.push('#2196f3');
    }
  }

  return (
    <div className={styles.trackerContainer}>
      <h2 className={completedTasks.length === totalListLength ? styles.completedIndicator : styles.incompleteIndicator}>{completedTasks.length} / {totalListLength}</h2>
      <ul className={styles.blockContainer}>
        {blockArray.slice(0).reverse().map((block, index) => {
          return <li style={{backgroundColor: block}} className={styles.block} key={index}>
            <div className={styles.blockDiv}></div>
          </li>
        })}
      </ul>
    </div>
  )
}