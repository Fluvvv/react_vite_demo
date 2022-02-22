import { ADD_TAG, DELETE_TAG } from '@/store/constantTypes';

export function createAddTagAction(data) {
  return { type: ADD_TAG, data };
}

export function createDeleteTagAction(data) {
  return { type: DELETE_TAG, data };
}
