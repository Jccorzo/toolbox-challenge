import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import * as actions from '../../actions/words';
import * as types from '../../actions/types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as api from '../../api/word';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Words actions tests', () => {

    /* beforeEach(() => {
        fetch.resetMocks();
    }); */

    it('request api success', () => {
        fetch.mockResponseOnce(JSON.stringify({ text: 'tset' }));
        //jest.spyOn(api, 'getInverseWord').mockReturnValue('tset')
        /* jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve({ text: 'tset', status:200 }),
          })) */
        /* global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ text: 'tset', status: 200 }),
            })
        ); */
        const store = mockStore({})
        const expectedActions = [
            { type: types.LOADING },
            { type: types.RESPONSE, result: 'tset' }
        ]
        store.dispatch(actions.getBackwardWord('test')).catch(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('request api error', () => {

        fetch.mockResponseOnce(JSON.stringify({ error: 'no text' }), { status: 400 });

        const store = mockStore({})
        const expectedActions = [
            { type: types.LOADING },
            { type: types.RESPONSE, result: 'no text' }
        ]
        store.dispatch(actions.getBackwardWord('')).catch(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})