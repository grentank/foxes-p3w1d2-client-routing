import { DECREMENT, INCREMENT, RESET_COUNTER } from '../types';

export const incrCounter = () => ({ type: INCREMENT });
export const decrCounter = () => ({ type: DECREMENT });
export const setCounter = (payload) => ({ type: RESET_COUNTER, payload });
