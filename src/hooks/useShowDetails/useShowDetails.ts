import { useEffect, useState } from 'react';
import { fetchShowDetails } from '../../services/showService';
import { Episode } from '../../types/showTypes';

interface ShowDetails {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  premiered: string;
  genres: string[];
  _embedded: {
    episodes: Episode[];
  };
}

const useShowDetails = (id: number) => {
  const [showDetails, setShowDetails] = useState<ShowDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getShowDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchShowDetails(id);
        setShowDetails(data);
      } catch (err) {
        setError('Failed to fetch show details');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getShowDetails();
    }
  }, [id]);

  return { showDetails, loading, error };
};

export default useShowDetails;
