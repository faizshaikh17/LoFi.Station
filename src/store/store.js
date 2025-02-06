import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/slice";

export const store = configureStore({
    reducer: todoReducer
})
