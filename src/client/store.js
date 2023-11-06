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
