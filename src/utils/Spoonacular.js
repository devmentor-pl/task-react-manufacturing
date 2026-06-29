const BASE = 'https://api.spoonacular.com';

export const json = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

export async function callSpoonacular(path, params = {}) {
  const apiKey = process.env.SPOON_API_KEY;
  if (!apiKey) {
    const err = new Error('Missing env var SPOON_API_KEY');
    err.statusCode = 500;
    throw err;
  }

  const url = new URL(BASE + path);
  for (const [key, value] of Object.entries(params)) {
    if (key === 'apiKey') continue;
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value);
    }
  }
  url.searchParams.set('apiKey', apiKey);

  const res = await fetch(url);
  const text = await res.text();

  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!res.ok) {
    const err = new Error((data && data.message) || `Spoonacular error (${res.status})`);
    err.statusCode = res.status;
    err.data = data;
    throw err;
  }

  return data;
}

export const withGet = (run) => async (event) => {
  if (event.httpMethod === 'OPTIONS')
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  if (event.httpMethod !== 'GET') return json(405, { message: 'Method not allowed' });

  const params = event.queryStringParameters || {};
  try {
    const data = await run(params, event);
    return json(200, data);
  } catch (err) {
    return json(err.statusCode || 500, {
      message: err.message,
      details: err.data ?? null,
    });
  }
};
