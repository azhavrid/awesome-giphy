import * as gifsConstants from './constants';
import { GifsReducer } from './types';

/* ------------- State ------------- */
type GifsStateType = typeof initialState;
export interface GifsState extends GifsStateType {}

const initialState = {
  trendingPaginationOffset: 0,
  isTrendingGifsFetching: false,
  isTrendingGifsPaginationFetching: false,
  trendingIds: [] as string[],
  favoriteIds: [] as string[],
};

/* ------------- Reducers ------------- */
export const gifsReducer: GifsReducer<typeof gifsConstants> = (state = initialState, action) => {
  switch (action.type) {
    case gifsConstants.FETCH_TRENDING_GIFS_INITIATED:
      return {
        ...state,
        isTrendingGifsFetching: true,
      };
    case gifsConstants.FETCH_TRENDING_GIFS_FINISHED:
      return {
        ...state,
        isTrendingGifsFetching: false,
        trendingPaginationOffset: action.isSuccess ? action.offset : state.trendingPaginationOffset,
        trendingIds: action.isSuccess ? action.gifIds : state.trendingIds,
      };
    case gifsConstants.FETCH_TRENDING_GIFS_NEXT_PAGE_INITIATED:
      return {
        ...state,
        isTrendingGifsPaginationFetching: true,
      };
    case gifsConstants.FETCH_TRENDING_GIFS_NEXT_PAGE_FINISHED:
      return {
        ...state,
        isTrendingGifsPaginationFetching: false,
        trendingPaginationOffset: action.isSuccess
          ? state.trendingPaginationOffset + action.offset
          : state.trendingPaginationOffset,
        trendingIds: action.isSuccess ? [...state.trendingIds, ...action.gifIds] : state.trendingIds,
      };
    case gifsConstants.SET_GIF_FAVORITE_STATUS:
      return {
        ...state,
        favoriteIds: action.isFavorite
          ? [...state.favoriteIds, action.gifId]
          : state.favoriteIds.filter((id) => id !== action.gifId),
      };
    case gifsConstants.AFTER_REHYDRATE:
      return {
        ...state,
        isTrendingGifsFetching: false,
        isTrendingGifsPaginationFetching: false,
      };
    default:
      return state;
  }
};
