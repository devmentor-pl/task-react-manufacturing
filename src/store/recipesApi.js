const queryString = (params = {}) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.set(key, value);
    }
  });
  const s = searchParams.toString();
  return s ? `?${s}` : '';
};

async function getJson(fn, params) {
  const res = await fetch(`/api/${fn}${queryString(params)}`);

  let data = null;
  try {
    data = await res.json();
  } catch {
    return;
  }

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
};
