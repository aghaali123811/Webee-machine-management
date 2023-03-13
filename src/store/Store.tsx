import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/index';
import {persistStore} from 'redux-persist';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
