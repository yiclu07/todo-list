import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addNewTask,
  deleteTask
} from './taskListSlice.js';
import styles from './TaskList.module.css';

export function TaskList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Today's Tasks</h2>
      <div>
        {/* List of tasks */}
      </div>
    </div>
  );
}