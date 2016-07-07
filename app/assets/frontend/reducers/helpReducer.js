import * as types from '../actions/actionTypes';

export default function helpReducer(state = { modalIsOpened: false },
  action) {
  switch (action.type) {
    case types.CREATE_HELP:
      return Object.assign({}, state, action);
    case types.SHOW_DESCRIPTION_MODAL:
      return Object.assign({}, state, { modalIsOpened: true });
    case types.HIDE_DESCRIPTION_MODAL:
      return Object.assign({}, state, { modalIsOpened: false });
    default:
      return state;
  }
}
