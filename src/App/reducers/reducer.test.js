import * as types from '../../modules/constants'
import InitialState from '../constants'
import reducer from './reducer'

describe('App Reducer', () => {
    it('should return intial state', () => {
        expect(reducer(undefined, {})).toEqual(InitialState)
    });

    describe('should handle', () => {
        it(`${types.FETCH_PODCASTS_PENDING} state`, ()=>{
            const expected = {...InitialState, fetching:true}
            const mockAction = {type: types.FETCH_PODCASTS_PENDING}
            expect(reducer(InitialState, mockAction)).toEqual(expected)
        })
    
        it(`${types.FETCH_PODCASTS_SUCCESS} state`, () => {
            const expected = {...InitialState, fetching: false, fetched: true, podcasts:[]}
            const mockAction = {type: types.FETCH_PODCASTS_SUCCESS, payload: []}
    
            expect(reducer(InitialState, mockAction)).toEqual(expected)
        });
    
        it(`${types.FETCH_PODCASTS_PENDING} state`, ()=>{
            const expected = {...InitialState, fetching: false, fetched: true, error:{}}
            const mockAction = {type: types.FETCH_PODCASTS_ERROR, payload:{}}
            expect(reducer(InitialState, mockAction)).toEqual(expected)
        })
    });
});
