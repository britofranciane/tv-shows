import { useEffect, useState } from 'react';
import { fetchShows } from '../../services/showService';

const useShows = () => {
  const [shows, setShows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getShows = async () => {
      try {
        setLoading(true);
        const data = await fetchShows();
        setShows(data);
      } catch (err) {
        setError('Failed to fetch shows');
      } finally {
        setLoading(false);
      }
    };

    getShows();
  }, []);

  return { shows, loading, error };
};

export default useShows;
