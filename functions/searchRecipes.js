import { callSpoonacular, withGet } from '../src/utils/Spoonacular.js';

export const handler = withGet((params) =>
  callSpoonacular('/recipes/complexSearch', {
    addRecipeInformation: 'true',
    number: 12,
    offset: 0,
    ...params,
  })
);
