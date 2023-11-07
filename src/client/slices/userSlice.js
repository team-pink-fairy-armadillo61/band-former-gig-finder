import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userLogin } from './authActions';

//https://blog.logrocket.com/handling-user-authentication-redux-toolkit/#configuring-redux-store

const userToken = localStorage.getItem('ssid')
  ? localStorage.getItem('ssid')
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
        console.log('fulfilled case')
        state.loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(userLogin.pending, (state, action) => {
        console.log('login pending case')
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        console.log('login fulfilled case')
        state.loading = 'succeeded';
        state.userInfo = action.payload.userInfo;
        state.userToken = action.payload.token;
      })
      .addCase(userLogin.rejected, (state, action) => {
        console.log('login rejected case')
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { logout, setCredentials } = userSlice.actions;
export default userSlice.reducer;
