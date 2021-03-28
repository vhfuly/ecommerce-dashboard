import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import rootRedcer from './reducers';

const store: Store = createStore( rootRedcer, applyMiddleware(thunk));

export default store;
