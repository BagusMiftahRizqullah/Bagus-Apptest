import {combineReducers} from 'redux';
import GlobalReducer from './GlobalReducer';
import HomeReducer from '../Reducers/HomeReducer'



export const allReducer = combineReducers({
  GlobalReducer: GlobalReducer,
  HomeReducer: HomeReducer,

});