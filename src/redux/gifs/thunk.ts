import { Dispatch } from 'redux';
import { getTrendingGifsApi } from '../../api/api';
import { mapApiGifsToIds } from '../../helpers/gifs';
import { saveGifs } from '../data/actions';
import { GetStateFunction } from '../types';
import {
  fetchTrendingGifsFinished,
  fetchTrendingGifsInitiated,
  fetchTrendingGifsNextPageFinished,
  fetchTrendingGifsNextPageInitiated,
} from './actions';
import {
  isTrendingGifsFetchingSelector,
  isTrendingGifsPaginationFetchingSelector,
  trendingPaginationOffsetSelector,
} from './selectors';

export const fetchTrendingGifs = () => async (dispatch: Dispatch, getState: GetStateFunction) => {
  const state = getState();
  const isTrendingGifsFetching = isTrendingGifsFetchingSelector(state);

  if (isTrendingGifsFetching) {
    return;
  }

  dispatch(fetchTrendingGifsInitiated());

  try {
    const { data } = await getTrendingGifsApi(0);
    const { data: apiGifs, pagination, meta } = data;
    const { count } = pagination;

    if (meta.status !== 200) {
      throw new Error();
    }

    dispatch(saveGifs(apiGifs));
    dispatch(fetchTrendingGifsFinished({ isSuccess: true, gifIds: mapApiGifsToIds(apiGifs), offset: count }));
  } catch (e) {
    dispatch(fetchTrendingGifsFinished({ isSuccess: false }));
  }
};

export const fetchTrendingGifsNextPage = () => async (dispatch: Dispatch, getState: GetStateFunction) => {
  const state = getState();
  const isTrendingGifsPaginationFetching = isTrendingGifsPaginationFetchingSelector(state);
  const trendingPaginationOffset = trendingPaginationOffsetSelector(state);

  if (isTrendingGifsPaginationFetching) {
    return;
  }

  dispatch(fetchTrendingGifsNextPageInitiated());

  try {
    const { data } = await getTrendingGifsApi(trendingPaginationOffset);
    const { data: apiGifs, pagination, meta } = data;
    const { count } = pagination;

    if (meta.status !== 200) {
      throw new Error();
    }

    dispatch(saveGifs(apiGifs));

    const currentState = getState();
    const currentTrendingPaginationOffset = trendingPaginationOffsetSelector(currentState);
    if (currentTrendingPaginationOffset !== trendingPaginationOffset) {
      dispatch(fetchTrendingGifsNextPageFinished({ isSuccess: false }));
      return;
    }

    dispatch(fetchTrendingGifsNextPageFinished({ isSuccess: true, gifIds: mapApiGifsToIds(apiGifs), offset: count }));
  } catch (e) {
    dispatch(fetchTrendingGifsNextPageFinished({ isSuccess: false }));
  }
};
