import { createStore, combineReducers } from "redux";
import GameBauCuaReducer from "./GameBauCuaReducer";
const rootReducer = combineReducers({
  GameBauCuaReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
