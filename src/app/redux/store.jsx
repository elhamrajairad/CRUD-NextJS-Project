import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./features/taskSlice";
import { listReducer } from "./features/listSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
    list: listReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
