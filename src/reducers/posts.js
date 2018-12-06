import { FETCH_POST } from '../actions/types';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case FETCH_POST:
      return action.posts;
    default:
      return state;
  }
}
