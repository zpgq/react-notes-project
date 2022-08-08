import { combineReducers } from 'redux';
import count from './count';

// 合并多个 reduce
const rootReducers = combineReducers({
    count,
});

export default rootReducers;
