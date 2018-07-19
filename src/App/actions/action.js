import {FETCH_PODCASTS_PENDING,
        FETCH_PODCASTS_SUCCESS,
        FETCH_PODCASTS_ERROR} from '../../modules/constants';

import axiosInstance from '../../modules/axiosInstance';

const fetchPodcastRequest = ()=>({type: FETCH_PODCASTS_PENDING});
const fetchPodcastSuccess = (payload) => ({type: FETCH_PODCASTS_SUCCESS, payload});
const fetchPodcastError = (payload) => ({type: FETCH_PODCASTS_ERROR, payload});

export const fetchAll = () => {
  return (dispatch) => {
    dispatch(fetchPodcastRequest());

    return axiosInstance.get('test').then((podcasts)=>{
      dispatch(fetchPodcastSuccess(podcasts.data));
    })
        .catch((error)=>dispatch(fetchPodcastError(error)));
  };
};
