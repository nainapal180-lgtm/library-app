import { configureStore, createSlice } from "@reduxjs/toolkit";
import booksData from "./data/books";

const booksSlice = createSlice({
  name: "books",
  initialState: booksData,
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});


// Redux store for managing library books