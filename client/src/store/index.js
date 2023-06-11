import { createStore, combineReducer } from 'redux';
import { INITIAL_STATE } from './consts';
import authReducer from './authReducer';

const rootReducer = combineReducer({
  authReducer,
});
const store = createStore(rootReducer, INITIAL_STATE);

export default store;
