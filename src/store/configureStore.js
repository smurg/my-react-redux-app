import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
// we need to pass redux-thunk as a middleware also

/*
* Redux Thunk is a middleware that lets you call action creators that
* return a function instead of an action object.
* That function receives the store’s dispatch method, which is then used
* to dispatch regular synchronous actions inside the body of the
* function once the asynchronous operations have completed.
*/