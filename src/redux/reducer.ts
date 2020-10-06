import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { dataReducer } from './data/reducer';
import { gifsReducer } from './gifs/reducer';
import { searchReducer } from './search/reducer';

/* ------------- Configs ------------- */
const mainConfig = {
  key: 'main',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['data', 'gifs'],
};

/* ------------- Reducers ------------- */
const mainReducer = combineReducers({
  data: dataReducer,
  gifs: gifsReducer,
  search: searchReducer,
});

export const rootReducer = persistReducer(mainConfig, mainReducer);
