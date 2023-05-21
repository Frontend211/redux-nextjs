import { createStore } from 'redux';

// import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import { INCREMENT, DECREMENT } from './actions.js';


function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    // case HYDRATE:
    //   return {...state, ...action.payload};
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export const store = createStore(counterReducer);

// // create a makeStore function
// const makeStore = context => createStore(reducer);

// // export an assembled wrapper
// export const wrapper = createWrapper(makeStore, {debug: true});
