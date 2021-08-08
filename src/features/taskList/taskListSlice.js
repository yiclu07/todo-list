import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    /* {
      task: '',
      id: 0,
      complete: false
    } */
  ]
};

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
    },
    switchStatus: (state, action) => {
      state.tasks[state.tasks.findIndex(task => task.id === action.payload.id)].completed = !state.tasks[state.tasks.findIndex(task => task.id === action.payload.id)].completed;
    }
  }
});

export const { addNewTask, deleteTask, switchStatus } = taskListSlice.actions;
export const selectTasks = (state) => {
  return state.taskList.tasks.filter(task => {
    return task.completed === false;
  })
};
export const selectCompletedTasks = (state) => {
  return state.taskList.tasks.filter(task => {
    return task.completed === true;
  });
};
export default taskListSlice.reducer;