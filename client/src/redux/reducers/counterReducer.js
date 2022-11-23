import { DECREMENT, INCREMENT, RESET_COUNTER } from '../types';

export default function counterReducer(state = 0, action) {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1; // state -> state - 1
    case RESET_COUNTER:
      return payload; // state -> 5
    default:
      return state;
  }
}
