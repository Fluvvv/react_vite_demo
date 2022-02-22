import home from './home/home.jsx';
import tagView from './tagView/tagView.jsx';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  home,
  tagView
});

export default rootReducer;
