import * as types from './actionTypes';

export function helpSubmit(promise = {}) {
  return {
    type: types.HELP_SUBMIT,
    submitted: promise.submitValues,
    reject: promise.reject,
    resolve: promise.resolve,
  };
}

export function showDescriptionModal() {
  return {
    type: types.SHOW_DESCRIPTION_MODAL,
  };
}

export function hideDescriptionModal() {
  return {
    type: types.HIDE_DESCRIPTION_MODAL,
  };
}

export function getHelpsFeed() {
  return {
    type: types.HELPS_FEED_REQUEST,
  };
}

export function getHelpsFeedSuccess(items) {
  return {
    type: types.HELPS_FEED_SUCCESS,
    items,
  };
}

export function getHelpsFeedFailure(error) {
  return {
    type: types.HELPS_FEED_FAILURE,
    error,
  };
}
