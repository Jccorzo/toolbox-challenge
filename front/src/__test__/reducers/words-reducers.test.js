import * as reducers from '../../reducers/words';
import * as types from '../../actions/types';

describe('Words reducers test', () => {
    it('loading case', () => {
        const expected = reducers.default(undefined, { type: types.LOADING })
        const result = {
            loading: true,
            results: []
        }
        expect(expected).toEqual(result)
    })

    it('result case', () => {
        const expected = reducers.default(undefined, { type: types.RESPONSE, result: 'text' })
        const result = {
            loading: false,
            results: ['text']
        }
        expect(expected).toEqual(result)
    })

    it('default case', () => {
        const expected = reducers.default(undefined, { type: undefined })
        const result = {
            loading: false,
            results: []
        }
        expect(expected).toEqual(result)
    })
})