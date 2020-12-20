import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import words from './reducers/words';

export const store = createStore(words, applyMiddleware(thunk))