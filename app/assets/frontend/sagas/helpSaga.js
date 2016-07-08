import * as types from '../actions/actionTypes';
import * as helpActions from '../actions/helpActions';
import { api } from '../api/helpApi';
import { takeEvery, takeLatest } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import { reset } from 'redux-form';

function* getHelps() {
  try {
    const helps = yield call(api.getHelps);
    yield put(helpActions.getHelpsFeedSuccess(helps));
  } catch (e) {
    yield put({ type: types.HELPS_FEED_FAILURE, message: e.message });
  }
}

// TODO: There is no API for post so instead we just put the submitted help
// in the state by dispatching HELP_SUBMIT_SUCCESS.
export function* postHelp() {
  const { submitted,
    resolve,
    reject } = yield take(types.HELP_SUBMIT);
  if (submitted !== undefined && !isEmpty(submitted)) {
    yield put({
      type: types.HELP_SUBMIT_SUCCESS,
      submitted });
    yield call(resolve);
    // Clear the form after submit is success
    yield put(reset('help'));
  }
}

export function* helpFeedsFlow() {
  yield takeLatest(types.HELPS_FEED_REQUEST, getHelps);
}
