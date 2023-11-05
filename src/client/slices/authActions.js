import { createAsyncThunk } from "@reduxjs/toolkit";
import fetch from "node-fetch";

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ userName, name, password}, thunkAPI) => {
    try {
      const config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: { userName, name, password}
      };
      await fetch('/users/register', config);
    } catch(err) {
      //doublecheck that the below is working
      if (err.response && err.response.data.message) {
        return thunkAPI.rejectWithValue(err.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);


export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ userName, password},thunkAPI) => {
    try {
      const config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: { userName, password}
      };
      const token = await fetch('/users/login', config);
      localStorage.setItem('ssid', token);
    } catch(err) {
      if (err.response && err.response.data.message) {
        return thunkAPI.rejectWithValue(err.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);