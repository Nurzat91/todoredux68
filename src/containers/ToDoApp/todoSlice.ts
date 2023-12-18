import {createSlice} from "@reduxjs/toolkit";
import {fetchToDoApp} from "./toDoAppThunks";

interface ToDoTask {
  id: number;
  title: string;
  checkbox: boolean;
}
interface TodoAppState{
  ToDoTask: ToDoTask [],
  isLoading: boolean;
  isError: boolean;
}
const initialState: TodoAppState = {
  ToDoTask: [],
  isLoading: false,
  isError: false,
};

export const todoSlice = createSlice({
  name: 'todoapp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchToDoApp.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchToDoApp.fulfilled, (state, action) => {
      state.ToDoTask = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchToDoApp.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});


export const toDoAppReducer = todoSlice.reducer;