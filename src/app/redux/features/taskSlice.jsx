import { createSlice } from "@reduxjs/toolkit";
const task = createSlice({
  name: "task",
  initialState: {
    value: "",
  },
});
export const taskReducer = task.reducer;
