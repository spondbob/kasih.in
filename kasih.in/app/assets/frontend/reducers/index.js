import {combineReducers} from 'redux';
import help from './helpReducer';
import helps from './helpsReducer';


const rootReducer = combineReducers({
    help,
    helps
});

export default rootReducer;
