import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/taskList/taskListSlice';

export default function Task({task}) {
  const dispatch = useDispatch();

  const handleDeleteTask = (e) => {
    dispatch(deleteTask(task));
  };

  return (
    <li>
      <span>{task.task}</span>
      <button onClick={handleDeleteTask} aria-label="Remove">X</button>
    </li>
  )
}