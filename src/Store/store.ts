import {configureStore} from "@reduxjs/toolkit";
import {toDoAppReducer} from "../containers/ToDoApp/todoSlice";

export const store = configureStore({
  reducer: {
    todoapp: toDoAppReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;