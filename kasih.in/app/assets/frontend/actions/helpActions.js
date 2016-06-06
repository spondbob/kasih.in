import * as types from './actionTypes';

export function createHelp(help) {
  return {
    type: types.CREATE_HELP,
    help
  };
}

export function getHelpsFeed() {
  return {
    type: types.HELPS_FEED_REQUEST
  };
}

export function getHelpsFeedSuccess(helps) {
  return {
    type: types.HELPS_FEED_SUCCESS,
    helps: helps
  };
}

export function getHelpsFeedFailure(error) {
  return {
    type: types.HELPS_FEED_FAILURE,
    error
  };
}
