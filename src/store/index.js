import { configureStore } from "@reduxjs/toolkit";
import { songReduser } from "./songSlice";

export const store = configureStore({
    reducer: {
        song: songReduser
    }
})