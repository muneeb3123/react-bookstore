import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.push(payload);
    },

    removeBook: (state, { payload }) => state.filter((book) => book.id !== payload),
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
