import { apiRequest } from './api';

export const fetchShows = async () => {
  try {
    const data = await apiRequest('/shows');
    return data;
  } catch (error) {
    console.error('Error fetching shows:', error);
    throw error;
  }
};

export const fetchShowDetails = async (id: number) => {
  try {
    const data = await apiRequest(`/shows/${id}?embed=episodes`);
    return data;
  } catch (error) {
    console.error('Error fetching show details:', error);
    throw error;
  }
};
