import * as searchConstants from './constants';

interface SearchParams {
  query: string;
}

interface SearchFetchParams extends SearchParams {
  isSuccess: boolean;
  gifIds?: string[];
}

/* ------------- Actions ------------- */
export const searchGifsInitiated = (params: SearchParams) =>
  <const>{
    type: searchConstants.SEARCH_GIFS_INITIATED,
    ...params,
  };

export const searchGifsFinished = (params: SearchFetchParams) =>
  <const>{
    type: searchConstants.SEARCH_GIFS_FINISHED,
    ...params,
  };
