import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipesSlice';
import similarReducer from './similarSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    similar: similarReducer,
  },
});

export default store;
