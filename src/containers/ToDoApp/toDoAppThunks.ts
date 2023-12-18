import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {RootState} from "../../Store/store";

export const fetchToDoApp = createAsyncThunk(
  'counter/fetch',
  async () =>{
    const response = await axiosApi.get<string | null>(URL + '/todoapp.json');
    return response.data ?? null;
  });

export const increaseToDoApp = createAsyncThunk<void, undefined, {state: RootState}>(
  'counter/increase',
  async (_, thunkAPI) =>{
    const toDoValue = thunkAPI.getState().todoapp.title;

    await axiosApi.put(URL + '/todoapp.json', toDoValue);

  }
);