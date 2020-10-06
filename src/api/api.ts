import { apiInstance } from './instance';

const fetchLimit = 20;

export const getGifsByQueryApi = (query: string, offset: number) =>
  apiInstance.get('/gifs/search', { params: { q: query, offset, limit: fetchLimit } });

export const getTrendingGifsApi = (offset: number) =>
  apiInstance.get('/gifs/trending', { params: { offset, limit: fetchLimit } });
