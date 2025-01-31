import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice"
import orderReducer from './orderSlice';

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        orders: orderReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch