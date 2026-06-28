import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { recipesApi } from './recipesApi';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  recipeId: null,
};

export const fetchSimilar = createAsyncThunk(
  'similar/fetch',
  async ({ id, number = 8 } = {}, { rejectWithValue }) => {
    try {
      const data = await recipesApi.similar({ id, number });
      return Array.isArray(data) ? data : [];
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const similarSlice = createSlice({
  name: 'similar',
  initialState,
  reducers: {
    clearSimilar(state) {
      state.items = [];
      state.status = 'idle';
      state.error = null;
      state.recipeId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSimilar.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
        state.recipeId = action.meta.arg?.id ?? null;
      })
      .addCase(fetchSimilar.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchSimilar.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? action.error?.message ?? 'Something went wrong';
      });
  },
});

export const { clearSimilar } = similarSlice.actions;
export default similarSlice.reducer;

export const selectSimilar = (state) => state.similar.items;
export const selectSimilarStatus = (state) => state.similar.status;
export const selectSimilarError = (state) => state.similar.error;
