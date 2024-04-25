import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state) => {},
    removeTodo: (state) => {},
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
