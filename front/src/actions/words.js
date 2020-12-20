import { LOADING, RESPONSE } from './types';
import { getInverseWord } from '../api/word';

const loading = () => ({ type: LOADING })
const setResponse = (result) => ({ type: RESPONSE, result })

export const getBackwardWord = (word) =>
    async (dispatch) => {
        dispatch(loading())
        try {
            const text = await getInverseWord(word)
            dispatch(setResponse(text))
        } catch (e) {
            dispatch(setResponse(e.message))
        }
    }