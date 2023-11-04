import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
    reducer: {
        plan: planSlice,
        user: userSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

