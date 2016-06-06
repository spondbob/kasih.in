import * as types from '../actions/actionTypes';
import {combineReducers} from 'redux';

function helps(state = {
  isFetching: false,
  helps: []
}, action) {
  switch (action.type) {
    case types.HELPS_FEED_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.HELPS_FEED_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        helps: action.helps
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  helps
});

export default rootReducer;
