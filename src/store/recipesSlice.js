import {
  createAsyncThunk,
  createSlice,
  createDraftSafeSelector as createSelector,
} from '@reduxjs/toolkit';
import { recipesApi } from './recipesApi';

const initialFilters = {
  query: '',
  cuisine: '',
  diet: '',
  intolerances: '',
  type: '',
  sort: 'popularity',
  sortDirection: 'desc',
  number: 12,
  offset: 0,
};

const initialState = {
  items: [],
  cachedItems: [],
  totalResults: 0,
  status: 'idle',
  error: null,
  mode: 'all',
  filters: initialFilters,
};

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchAll',
  async (overrides = {}, { getState, rejectWithValue }) => {
    const { filters } = getState().recipes;
    try {
      const data = await recipesApi.search({ ...filters, ...overrides });
      return { items: data?.results ?? [], totalResults: data?.totalResults ?? 0 };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchByNutrients = createAsyncThunk(
  'recipes/fetchByNutrients',
  async (params = {}, { rejectWithValue }) => {
    try {
      const data = await recipesApi.byNutrients(params);
      const items = Array.isArray(data) ? data : [];
      return { items, totalResults: items.length };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchByIngredients = createAsyncThunk(
  'recipes/fetchByIngredients',
  async (params = {}, { rejectWithValue }) => {
    try {
      const data = await recipesApi.byIngredients(params);
      const items = Array.isArray(data) ? data : [];
      return { items, totalResults: items.length };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const onPending = (state) => {
  state.status = 'loading';
  state.error = null;
};
const onRejected = (state, action) => {
  state.status = 'failed';
  state.error = action.payload ?? action.error?.message ?? 'Something went wrong';
};
const makeFulfilled = (mode) => (state, action) => {
  state.status = 'succeeded';
  state.mode = mode;
  state.items = action.payload.items;
  state.cachedItems = action.payload.items;
  state.totalResults = action.payload.totalResults;
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.filters.query = action.payload;
      state.filters.offset = 0;
    },
    setFilter(state, action) {
      const { key, value } = action.payload;
      state.filters[key] = value;
      state.filters.offset = 0;
    },
    setSort(state, action) {
      state.filters.sort = action.payload.sort ?? state.filters.sort;
      state.filters.sortDirection = action.payload.sortDirection ?? state.filters.sortDirection;
      state.filters.offset = 0;
    },
    setPage(state, action) {
      state.filters.offset = Math.max(0, (action.payload - 1) * state.filters.number);
    },
    setCachedRecipes(state, action) {
      state.cachedItems = action.payload;
    },
    nextPage(state) {
      state.filters.offset += state.filters.number;
    },
    prevPage(state) {
      state.filters.offset = Math.max(0, state.filters.offset - state.filters.number);
    },
    setMode(state, action) {
      state.mode = action.payload;
    },
    resetFilters(state) {
      state.filters = initialFilters;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, onPending)
      .addCase(fetchRecipes.fulfilled, makeFulfilled('all'))
      .addCase(fetchRecipes.rejected, onRejected)

      .addCase(fetchByNutrients.pending, onPending)
      .addCase(fetchByNutrients.fulfilled, makeFulfilled('nutrients'))
      .addCase(fetchByNutrients.rejected, onRejected)

      .addCase(fetchByIngredients.pending, onPending)
      .addCase(fetchByIngredients.fulfilled, makeFulfilled('ingredients'))
      .addCase(fetchByIngredients.rejected, onRejected);
  },
});

export const {
  setQuery,
  setFilter,
  setSort,
  setPage,
  nextPage,
  prevPage,
  setMode,
  resetFilters,
  setCachedRecipes,
} = recipesSlice.actions;

export default recipesSlice.reducer;

export const selectRecipes = (state) => state.recipes.items;
export const selectRecipesStatus = (state) => state.recipes.status;
export const selectRecipesError = (state) => state.recipes.error;
export const selectFilters = (state) => state.recipes.filters;
export const selectMode = (state) => state.recipes.mode;
export const selectTotalResults = (state) => state.recipes.totalResults;
export const selectIsLoading = (state) => state.recipes.status === 'loading';
export const selectCachedItems = (state) => state.recipes.cachedItems;

export const selectHasMore = createSelector(
  [selectFilters, selectTotalResults],
  (filters, total) => filters.offset + filters.number < total
);

export const selectCurrentPage = createSelector(
  [selectFilters],
  (filters) => Math.floor(filters.offset / filters.number) + 1
);
