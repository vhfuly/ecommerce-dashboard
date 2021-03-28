import { combineReducers, Reducer } from 'redux';

const reducers: Reducer = combineReducers({
  root: (state, action) => state || {},
});

export default reducers;