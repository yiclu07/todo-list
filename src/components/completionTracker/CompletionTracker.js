import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectTasks,
  selectCompletedTasks
} from '../../features/taskList/taskListSlice.js';

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
    <div>
      <h2>{completedTasks.length} / {totalListLength}</h2>
      <ul>
        {blockArray.map((block, index) => {
          return <li style={{backgroundColor: block}} key={index}>{block}</li>
        })}
      </ul>
    </div>
  )
}