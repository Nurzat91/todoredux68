import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";

export const fetchTasks = createAsyncThunk(
  'todoapp/fetch',
  async () =>{
    const response = await axiosApi.get<string | null>(URL + '/todoapp.json');
    return response.data ?? null;
  });

export const addTask = createAsyncThunk(
  'todoapp/save',
  async (title: string) => {
    await axiosApi.put(URL + '/todoapp.json', { title, status: false });
  }
);

export const removeTask = createAsyncThunk(
  'todoapp/removeTask',
  async (id: number) => {
  await axiosApi.delete(URL + `${id}`);
  return id;
});