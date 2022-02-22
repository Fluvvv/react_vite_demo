import Lodash from 'lodash';
import { USER } from '@/store/constantTypes';
const initialState = {
  name: '初始化姓名'
};

export default function home(state = initialState, action) {
  const cloneState = Lodash.cloneDeep(state);
  switch (action.type) {
    case USER:
      cloneState.name = action.data.name;
      return cloneState;
    default:
      return cloneState;
  }
}
