import { configureStore } from "@reduxjs/toolkit";
import reducerTech from './reducer';

export const store=configureStore({
    reducer:{
        techcloud:reducerTech
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch