import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/counter/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
