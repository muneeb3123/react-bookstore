import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const bookSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.items.push(payload);
    },

    removeBook: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
