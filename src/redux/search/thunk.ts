import { Dispatch } from 'redux';
import { getGifsByQueryApi } from '../../api/api';
import { mapApiGifsToIds } from '../../helpers/gifs';
import { saveGifs } from '../data/actions';
import { GetStateFunction } from '../types';
import { searchGifsFinished, searchGifsInitiated } from './actions';
import { searchQuerySelector } from './selectors';

export const fetchSearchGifs = (query: string) => async (dispatch: Dispatch, getState: GetStateFunction) => {
  dispatch(searchGifsInitiated({ query }));

  try {
    const { data } = await getGifsByQueryApi(query, 0);
    const { data: apiGifs, meta } = data;

    if (meta.status !== 200) {
      throw new Error();
    }

    dispatch(saveGifs(apiGifs));

    const currentState = getState();
    const currentQuery = searchQuerySelector(currentState);

    if (currentQuery !== query) {
      dispatch(searchGifsFinished({ isSuccess: false, query }));
      return;
    }

    dispatch(searchGifsFinished({ isSuccess: true, gifIds: mapApiGifsToIds(apiGifs), query }));
  } catch (e) {
    dispatch(searchGifsFinished({ isSuccess: false, query }));
  }
};
