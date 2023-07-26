import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const list = createSlice({
  //  1- Creating the slice:
  name: "list",
  initialState: {
    list: [{ id: 1, name: "project todo list app", done: true }],
  },
  // 2-Defining reducers:
  reducers: {
    addTask(state, action) {
      state.list.push({
        id: nanoid(),
        name: action.payload,
        done: false,
      });
    },
    removeTask(state, action) {
      const updateTasks = state.list.filter((task) => {
        return task.id !== action.payload;
      });
      state.list = updateTasks;
    },
    editeTask(state, action) {
      const updateTasks = state.list.map((task) => {
        if (task.id === action.payload.idItem) {
          return {
            ...task,
            name: action.payload.content,
          };
        } else {
          return task;
        }
      });
      state.list = updateTasks;
    },
    finishTask(state, action) {
      const updateTask = state.list.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            done: !item.done,
          };
        } else {
          return item;
        }
      });
      state.list = updateTask;
    },
  },
});
export const { addTask, removeTask, editeTask, finishTask } = list.actions;
export const listReducer = list.reducer;
export const { listSlice } = list;
