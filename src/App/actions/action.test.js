import * as types from '../../modules/constants'
import {fetchAll} from './action'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import moxios from 'moxios'
import axiosInstance from '../../modules/axiosInstance'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('App actions', () => {
    beforeEach(() => {
        moxios.install(axiosInstance)
    });

    afterEach(()=>{
        moxios.uninstall(axiosInstance)
    })

    it(`creates ${types.FETCH_PODCASTS_SUCCESS} when fetching podcasts is successful`, async () => {
        const successResponse = []

        moxios.wait(()=>{
            const request = moxios.requests.mostRecent()
            request.respondWith({status: 200, response:successResponse})
        })

        const expected = [
            {type: types.FETCH_PODCASTS_PENDING},
            {type: types.FETCH_PODCASTS_SUCCESS, payload:[]}
        ]

        const store = mockStore({})

        const result = await store.dispatch(fetchAll())
        expect(store.getActions()).toEqual(expected)
    })

    it(`creates ${types.FETCH_PODCASTS_ERROR} when fetching podcasts is not successful`, async () => {
        const errorResponse = {
            status: 422,
            response: { data:null, message: 'problem occurred' },
        };
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.reject(errorResponse);
        })
        
        const expected = [
            {type: types.FETCH_PODCASTS_PENDING},
            {type: types.FETCH_PODCASTS_ERROR, payload:errorResponse}
        ]

        const store = mockStore({})

        const result = await store.dispatch(fetchAll())
        expect(store.getActions()).toEqual(expected)
    })
});