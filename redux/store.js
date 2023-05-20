import { createStore } from 'redux';
import {INCREMENT,DECREMENT} from './actions.js';

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
}


export const store = createStore(counterReducer);
console.log('store=',store);
console.log('state=', store.getState());