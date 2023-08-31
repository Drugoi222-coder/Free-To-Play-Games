import { configureStore } from "@reduxjs/toolkit";
import gameListSlice from "./gameListSlice";

export const store = configureStore({
    reducer: {
        gameListSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;