import {createSlice } from '@reduxjs/toolkit';
import {Task} from "../../types";
import {addTask, fetchTasks, removeTask} from "./toDoAppThunks";


const initialState: Task[] = [];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload;
      });
    builder.addCase(addTask.fulfilled, (state, action) => {
        state.push(action.payload);
      });
    builder.addCase(removeTask.fulfilled, (state, action) => {
        return state.filter((task) => task.id !== action.payload);
      });
  },
});

export const tasksReducer = tasksSlice.reducer;


