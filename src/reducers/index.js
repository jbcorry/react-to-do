import taskReducer from './task';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    taskReducer: taskReducer,
});

export default allReducers;