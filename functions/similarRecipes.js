import { callSpoonacular, withGet } from '../src/utils/Spoonacular.js';

export const handler = withGet((params) => {
  if (!params.id) {
    const err = new Error('The "id" parameter is required.');
    err.statusCode = 400;
    throw err;
  }

  const { id, ...rest } = params;
  return callSpoonacular(`/recipes/${encodeURIComponent(id)}/similar`, {
    number: 10,
    ...rest,
  });
});
