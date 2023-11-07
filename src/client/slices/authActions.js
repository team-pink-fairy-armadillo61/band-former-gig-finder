import { createAsyncThunk } from "@reduxjs/toolkit";

const URI = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

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
  async ({ userName, password}, thunkAPI) => {
    try {
      const resp = await fetch(`/users/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        mode: "no-cors",
        body: JSON.stringify({userName, password})
      });
      const data = await resp.json();
      localStorage.setItem('ssid', data.token);
      return data;
    } catch(err) {
      if (err.response && err.response.data.message) {
        return thunkAPI.rejectWithValue(err.response.data.message);
      } else {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);