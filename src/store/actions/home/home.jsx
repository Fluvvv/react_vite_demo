import { USER } from '@/store/constantTypes';

export function setName(data) {
  return { type: USER, data };
}

export function getName() {
  return (dispatch) => {
    console.log('执行action！');
    dispatch(setName({ name: '樊继权' }));
  };
}
