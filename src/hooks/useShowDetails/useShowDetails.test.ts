import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import useShowDetails from './useShowDetails';
import { fetchShowDetails } from '../../services/showService';

vi.mock('../../services/showService', () => ({
  fetchShowDetails: vi.fn(),
}));

describe('useShowDetails', () => {
  it('should fetch show details and set state correctly', async () => {
    const mockData = {
      id: 1,
      name: 'Mock Show',
      image: { medium: '', original: '' },
      summary: 'This is a summary',
      premiered: '2023-01-01',
      genres: ['Drama'],
      _embedded: { episodes: [] },
    };

    (fetchShowDetails as vi.Mock).mockResolvedValue(mockData);

    const { result } = renderHook(() => useShowDetails(1));

    await waitFor(() => {
      expect(result.current.showDetails).toEqual(mockData);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null);
    });
  });
});
