import { ApiGif } from '../../api/types';
import * as statusConstants from './constants';

/* ------------- Actions ------------- */
export const saveGifs = (gifsApiResponse: ApiGif[]) =>
  <const>{
    type: statusConstants.SAVE_GIFS,
    gifsApiResponse,
  };
