import { createSelector } from 'reselect';

import { RootState } from '../types';

export const gifsStateSelector = (state: RootState) => state.gifs;

export const isTrendingGifsFetchingSelector = createSelector(gifsStateSelector, (gifs) => gifs.isTrendingGifsFetching);

export const isTrendingGifsPaginationFetchingSelector = createSelector(
  gifsStateSelector,
  (gifs) => gifs.isTrendingGifsPaginationFetching,
);

export const trendingPaginationOffsetSelector = createSelector(
  gifsStateSelector,
  (gifs) => gifs.trendingPaginationOffset,
);

export const trendingGifIdsSelector = createSelector(gifsStateSelector, (gifs) => gifs.trendingIds);

export const favoriteGifIdsSelector = createSelector(gifsStateSelector, (gifs) => gifs.favoriteIds);

export const getGifIsFavoriteSelector = (id: string) =>
  createSelector(favoriteGifIdsSelector, (favoriteIds) => favoriteIds.includes(id));
