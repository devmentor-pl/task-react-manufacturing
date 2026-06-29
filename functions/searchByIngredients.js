import { callSpoonacular, withGet } from '../src/utils/Spoonacular.js';

export const handler = withGet((params) => {
  if (!params.ingredients) {
    const err = new Error('The "ingredients" parameter is required.');
    err.statusCode = 400;
    throw err;
  }

  return callSpoonacular('/recipes/findByIngredients', {
    number: 12,
    ranking: 1,
    ignorePantry: 'true',
    ...params,
  });
});
