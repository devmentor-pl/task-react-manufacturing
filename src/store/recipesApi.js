const querySearch = (params = {}) => {
  const sp = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      sp.set(key, value);
    }
  });
  const string = sp.toString();
  return string ? `?${string}` : '';
};

async function getJson(fn, params) {
  const res = await fetch(`/api/${fn}${querySearch(params)}`);

  let data = null;
  try {
    data = await res.json();
  } catch {}

  if (!res.ok) {
    throw new Error((data && data.message) || `Request failed (${res.status})`);
  }
  return data;
}

export const recipesApi = {
  search: (params) => getJson('searchRecipes', params),
  byNutrients: (params) => getJson('searchByNutrients', params),
  byIngredients: (params) => getJson('searchByIngredients', params),
  similar: (params) => getJson('similarRecipes', params),
  recipeById: (params) => getJson('getRecipeInformation', params),
};
