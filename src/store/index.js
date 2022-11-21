import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  // synchronous
  // we should not mutate the original state
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + action.payload,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - action.payload,
    };
  }
  if (action.type === "ADD-BY") {
    return {
      counter: state.counter + action.payload,
    };
  }

  return state;
};

const store = createStore(reducerFn);
export default store;
