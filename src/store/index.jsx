import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE_
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__({})
  : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk)); //增强函数相当于链式调用

const store = createStore(rootReducer, enhancer);
export default store;
