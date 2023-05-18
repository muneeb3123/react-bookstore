import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const id = 'OYmhKWSLFlHC2cL1kdJ5';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books`;

export const createBook = createAsyncThunk(
  'create/book',
  async ({ title, author, category }) => {
    const itemId = Date.now();
    await axios.post(
      url,
      {
        title,
        author,
        item_id: itemId,
        category,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return {
      title,
      author,
      id: itemId,
      category,
    };
  },
);

export const getBook = createAsyncThunk('get/book', async () => {
  const response = await axios.get(url);
  if (response.data) {
    return Object.entries(response.data).map(([id, bookData]) => ({
      id: parseInt(id, 10),
      title: bookData[0].title,
      author: bookData[0].author,
      category: bookData[0].category,
    }));
  }
  return [];
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  await axios.delete(`${url}/${id}`);
  return id;
});

const initialState = {
  isLoading: false,
  items: [],
};

const bookSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(getBook.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const deletedBookId = action.payload;
        state.items = state.items.filter((book) => book.id !== deletedBookId);
      });
  },
});

export default bookSlice.reducer;
