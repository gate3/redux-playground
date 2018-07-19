//@flow
import type {ReducerState} from './App.type'

const InitialState:ReducerState = {
    fetched:false,
    fetching:false,
    error:{},
    podcasts:[]
}

export default InitialState