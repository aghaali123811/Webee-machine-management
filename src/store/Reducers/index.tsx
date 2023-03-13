import {combineReducers} from 'redux';
import authReducer from './authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};
const rootReducer = combineReducers({
  auth: authReducer,
});
export default persistReducer(persistConfig, rootReducer);
