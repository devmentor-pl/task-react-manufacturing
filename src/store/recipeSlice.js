import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { recipesApi } from './recipesApi';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchRecipeById = createAsyncThunk(
  'recipe/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      return await recipesApi.recipeById({ id });
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    clearRecipe(state) {
      state.data = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? action.error?.message ?? 'Something went wrong';
      });
  },
});

export const { clearRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;

export const selectRecipe = (state) => state.recipe.data;
export const selectRecipeStatus = (state) => state.recipe.status;
export const selectRecipeError = (state) => state.recipe.error;
