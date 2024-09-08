export const BASE_URL = 'https://api.tvmaze.com';

export const apiRequest = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }

  return response.json();
};
