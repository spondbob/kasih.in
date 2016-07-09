import * as types from '../actions/actionTypes';

export default function helpReducer(state = {
  descriptionModalIsOpened: false,
  locationModalIsOpened: false,
  submitting: false,
  submitted: {} }, action) {
  switch (action.type) {
    case types.HELP_SUBMIT:
      return Object.assign({}, state, {
        submitting: true,
        submitted: action.submitted });
    case types.HELP_SUBMIT_SUCCESS:
      return Object.assign({}, state, {
        submitting: false,
        submitted: action.submitted });
    case types.HELP_SUBMIT_FAILED:
      return Object.assign({}, state, { submitting: false });
    case types.SHOW_DESCRIPTION_MODAL:
      return Object.assign({}, state, { descriptionModalIsOpened: true });
    case types.HIDE_DESCRIPTION_MODAL:
      return Object.assign({}, state, { descriptionModalIsOpened: false });
    case types.SHOW_LOCATION_MODAL:
      return Object.assign({}, state, { locationModalIsOpened: true });
    case types.HIDE_LOCATION_MODAL:
      return Object.assign({}, state, { locationModalIsOpened: false });
    default:
      return state;
  }
}
