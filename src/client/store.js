//simple store for testing

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice.js';
import { authApi } from './slices/authService';

const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
export default store;
import { configureStore } from '@reduxjs/toolkit';

//import the slices
import postSlice from './postSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    post: postSlice,
    user: userSlice,
  },
});
