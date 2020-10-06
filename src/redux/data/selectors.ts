import { createSelector } from 'reselect';

import { RootState } from '../types';

export const dataStateSelector = (state: RootState) => state.data;

export const getGifByIdSelector = (id: string) => createSelector(dataStateSelector, (data) => data.gifs[id]);
