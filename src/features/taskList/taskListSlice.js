import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    /* {
      task: '',
      id: 0
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
      state.tasks.filter(task => task.id !== action.payload.id);
    }
  }
});

export const { addNewTask, deleteTask } = taskListSlice.actions;
export default taskListSlice.reducer;