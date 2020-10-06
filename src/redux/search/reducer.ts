import * as searchConstants from './constants';
import { SearchReducer } from './types';

/* ------------- State ------------- */
type SearchStateType = typeof initialState;
export interface SearchState extends SearchStateType {}

const initialState = {
  searchQuery: '',
  isSearchGifsFetching: false,
  searchIds: [] as string[],
};

/* ------------- Reducers ------------- */
export const searchReducer: SearchReducer<typeof searchConstants> = (state = initialState, action) => {
  switch (action.type) {
    case searchConstants.SEARCH_GIFS_INITIATED:
      return {
        ...state,
        isSearchGifsFetching: true,
        searchQuery: action.query,
      };
    case searchConstants.SEARCH_GIFS_FINISHED:
      return {
        ...state,
        isSearchGifsFetching: false,
        searchIds: action.isSuccess ? action.gifIds : state.searchIds,
      };
    default:
      return state;
  }
};
