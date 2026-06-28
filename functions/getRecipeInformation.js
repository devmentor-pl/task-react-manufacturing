import { callSpoonacular, withGet } from '../src/utils/Spoonacular.js';

exports.handler = withGet((params) => {
  if (!params.id) {
    const err = new Error('Parametr "id" jest wymagany (id przepisu).');
    err.statusCode = 400;
    throw err;
  }
  const { id, ...rest } = params;
  return callSpoonacular(`/recipes/${encodeURIComponent(id)}/information`, {
    includeNutrition: 'false',
    ...rest,
  });
});
