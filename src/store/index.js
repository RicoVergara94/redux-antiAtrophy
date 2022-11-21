import { createStore } from "redux";

const reducerFn = (state = { count: 0 }, action) => {};

const store = createStore(reducer);
export default store;
