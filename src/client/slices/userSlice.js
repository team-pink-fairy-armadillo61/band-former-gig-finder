import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userLogin } from './authActions';

//https://blog.logrocket.com/handling-user-authentication-redux-toolkit/#configuring-redux-store

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null;

const initialState = {
  loading: 'idle', // 'idle', 'pending', 'succeeded', 'failed'
  userInfo: {}, // for user object
  userToken, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem('ssid');
      state.loading = 'idle';
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
    },
    updateUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.success = true; //register success
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(userLogin.pending, (state, action) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.userInfo = action.payload;
        state.userToken = action.payload.userToken;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
