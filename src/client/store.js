//simple store for testing

import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './slices/authService';
import postSlice from './slices/postSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    post: postSlice,
    user: userSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
export default store;