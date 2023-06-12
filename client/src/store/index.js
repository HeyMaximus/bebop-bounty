import { createStore, combineReducers } from 'redux';
import INITIAL_STATE from './consts';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  authReducer,
});
const store = createStore(rootReducer);

export default store;
