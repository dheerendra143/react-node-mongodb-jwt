import { createStore } from "redux";
import userReducer from "./reducers/userReducer";
import { globalState } from "./globalState";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();



function configureStore(state = globalState) {
  return createStore(
    userReducer,
    state,
    ReactReduxDevTools
  );
}

export default configureStore;