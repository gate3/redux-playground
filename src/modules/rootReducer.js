import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import appReducer from '../App/reducers/reducer';
import podcastReducer from '../Podcast/reducers/reducer';

export default combineReducers({
  routing: routerReducer,
  appReducer,
  podcastReducer,
});
