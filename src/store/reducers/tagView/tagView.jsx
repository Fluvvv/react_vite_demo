import Lodash from 'lodash';
import { ADD_TAG, DELETE_TAG } from '@/store/constantTypes';

const initialState = [
  {
    title: '首页',
    path: '/main'
  }
];

export default function tagView(state = initialState, action) {
  let cloneState = Lodash.cloneDeep(state);
  switch (action.type) {
    case ADD_TAG:
      cloneState = [...cloneState, action.data];
      return cloneState;
    case DELETE_TAG:
      cloneState = cloneState.filter((item) => {
        return item.title !== action.data;
      });
      return cloneState;
    default:
      return cloneState;
  }
}
