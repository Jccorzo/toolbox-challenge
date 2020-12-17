import wordsReducer from './words';
import { combineReducers } from 'redux';

export default combineReducers({
    words: wordsReducer
})
