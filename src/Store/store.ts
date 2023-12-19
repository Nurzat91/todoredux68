import {configureStore} from "@reduxjs/toolkit";
import {tasksReducer} from "../containers/ToDoApp/todoSlice";

export const store = configureStore({
  reducer: {
    todoapp: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;