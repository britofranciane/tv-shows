import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import useShows from './useShows';
import { fetchShows } from '../../services/showService';

vi.mock('../../services/showService', () => ({
  fetchShows: vi.fn(),
}));

describe('useShows', () => {
  it('should fetch shows and set state correctly', async () => {
    const mockData = [
      {
        id: 1,
        name: 'Show 1',
        image: { medium: '', original: '' },
        summary: 'Summary of Show 1',
        premiered: '2023-01-01',
        genres: ['Drama'],
      },
      {
        id: 2,
        name: 'Show 2',
        image: { medium: '', original: '' },
        summary: 'Summary of Show 2',
        premiered: '2023-01-02',
        genres: ['Comedy'],
      },
    ];

    (fetchShows as vi.Mock).mockResolvedValue(mockData);

    const { result } = renderHook(() => useShows());

    await waitFor(() => {
      expect(result.current.shows).toEqual(mockData);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null);
    });
  });

  it('should handle error correctly', async () => {
    (fetchShows as vi.Mock).mockRejectedValue(new Error('Failed to fetch'));

    const { result } = renderHook(() => useShows());

    await waitFor(() => {
      expect(result.current.shows).toEqual([]);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe('Failed to fetch shows');
    });
  });
});
