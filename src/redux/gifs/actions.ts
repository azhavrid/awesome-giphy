import * as gifsConstants from './constants';

interface FetchParams {
  isSuccess: boolean;
  gifIds?: string[];
  offset?: number;
}

/* ------------- Actions ------------- */
export const fetchTrendingGifsInitiated = () =>
  <const>{
    type: gifsConstants.FETCH_TRENDING_GIFS_INITIATED,
  };

export const fetchTrendingGifsFinished = (params: FetchParams) =>
  <const>{
    type: gifsConstants.FETCH_TRENDING_GIFS_FINISHED,
    ...params,
  };

export const fetchTrendingGifsNextPageInitiated = () =>
  <const>{
    type: gifsConstants.FETCH_TRENDING_GIFS_NEXT_PAGE_INITIATED,
  };

export const fetchTrendingGifsNextPageFinished = (params: FetchParams) =>
  <const>{
    type: gifsConstants.FETCH_TRENDING_GIFS_NEXT_PAGE_FINISHED,
    ...params,
  };

export const setGifFavoriteStatus = (params: { gifId: string; isFavorite: boolean }) =>
  <const>{
    type: gifsConstants.SET_GIF_FAVORITE_STATUS,
    ...params,
  };

export const afterRehydrate = () =>
  <const>{
    type: gifsConstants.AFTER_REHYDRATE,
  };
