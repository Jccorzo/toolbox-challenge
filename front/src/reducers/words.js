import { RESPONSE, LOADING } from '../actions/types';

const wordsInitial = {
    loading: false,
    results: []
}

const wordsReducer = (state = wordsInitial, { type, result }) => {
    switch (type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case RESPONSE:
            return {
                ...state,
                loading: false,
                results: [result, ...state.results]
            }
        default: return state
    }
}

export default wordsReducer;