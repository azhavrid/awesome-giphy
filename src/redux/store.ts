import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { afterRehydrate } from './gifs/actions';
import { rootReducer } from './reducer';

const middleware = [];
middleware.push(applyMiddleware(thunk));

export const store = createStore(rootReducer, {}, composeWithDevTools(...middleware));
export const persistor = persistStore(store, {}, () => {
  store.dispatch(afterRehydrate());
});
