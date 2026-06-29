import { callSpoonacular, withGet } from '../src/utils/Spoonacular.js';

export const handler = withGet((params) =>
  callSpoonacular('/recipes/findByNutrients', {
    number: 12,
    offset: 0,
    ...params,
  })
);
