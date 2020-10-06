import { createSelector } from 'reselect';

import { RootState } from '../types';

export const searchStateSelector = (state: RootState) => state.search;

export const isSearchGifsFetchingSelector = createSelector(
  searchStateSelector,
  (search) => search.isSearchGifsFetching,
);

export const searchQuerySelector = createSelector(searchStateSelector, (search) => search.searchQuery);

export const searchGifIdsSelector = createSelector(searchStateSelector, (search) => search.searchIds);
