//@flow
import {FETCH_PODCASTS_PENDING, FETCH_PODCASTS_SUCCESS, FETCH_PODCASTS_ERROR} from '../../modules/constants';
import type {ReducerState, Action} from '../App.type';
import InitialState from '../constants';

const reducer = (state:ReducerState = InitialState, action:Action):ReducerState => {
  switch (action.type) {
  case FETCH_PODCASTS_PENDING:
    return {
      ...state,
      fetching: true,
    };
  case FETCH_PODCASTS_SUCCESS:
    return {
      ...state,
      fetched: true,
      fetching: false,
      podcasts: action.payload,
    };
  case FETCH_PODCASTS_ERROR:
    return {
      ...state,
      fetched: true,
      fetching: false,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default reducer;

