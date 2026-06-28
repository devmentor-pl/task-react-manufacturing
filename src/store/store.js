import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipesSlice';
import similarReducer from './similarSlice';
import recipeReducer from './recipeSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    similar: similarReducer,
    recipe: recipeReducer,
  },
});

export default store;
