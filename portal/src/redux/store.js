import { createStore } from "redux";
import rotateReducer from "./reducers/rotateReducer";
import { globalState } from "./globalState";

function configureStore(state = globalState) {
  return createStore(rotateReducer,state);
}

export default configureStore;