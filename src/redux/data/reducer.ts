import { Gif } from '../../types';
import * as dataConstants from './constants';
import { DataReducer } from './types';
import { keyBy } from 'lodash';
import { ApiGif } from '../../api/types';

/* ------------- State ------------- */
type DataStateType = typeof initialState;
export interface DataState extends DataStateType {}

const initialState = {
  gifs: {} as Record<string, Gif>,
};

const normalizeGifs = (gifs: Record<string, Gif>, apiGifs: ApiGif[]): Record<string, Gif> => {
  const normalizedGifs = apiGifs.map(
    (apiGif): Gif => ({
      id: apiGif.id,
      title: apiGif.title,
      url: apiGif.url,
      height: Number(apiGif.images.fixed_height.height),
      width: Number(apiGif.images.fixed_height.width),
      sourceUrl: apiGif.images.fixed_height.url,
      createdAt: apiGif.import_datetime,
      createdBy: apiGif.username,
    }),
  );

  return keyBy(normalizedGifs, (gif) => gif.id);
};

/* ------------- Reducers ------------- */
export const dataReducer: DataReducer<typeof dataConstants> = (state = initialState, action) => {
  switch (action.type) {
    case dataConstants.SAVE_GIFS:
      return {
        gifs: {
          ...state.gifs,
          ...normalizeGifs(state.gifs, action.gifsApiResponse),
        },
      };
    default:
      return state;
  }
};
