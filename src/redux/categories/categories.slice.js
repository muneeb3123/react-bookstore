import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getStatus: (state) => {
      const status = 'under construction';
      return { ...state, status };
    },
  },
});

export const { getStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
