import { combineReducers } from 'redux';
import { user } from './user/reducer';
import { ui } from './ui/reducer';

const rootReducer = combineReducers({
    user,
    ui
})

export default rootReducer;