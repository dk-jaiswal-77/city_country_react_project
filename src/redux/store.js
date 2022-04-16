import { createStore, combineReducers } from "redux";
import cityReducer from "./cities/reducer";

const rootReducer = combineReducers({
    cities : cityReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {store};