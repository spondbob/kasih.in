import * as types from '../actions/actionTypes';
import { takeEvery, takeLatest } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';

function* loginFlow() {
  while (true) {
    const {
        values,
        resolve,
        reject,
    } = yield take(types.LOGIN_SUBMIT);
    if (!['john'].includes(values.username)) {
      yield call(
        reject,
        {
          username: 'User does not exist',
          _error: 'Login failed!',
        });
    } else if (values.password !== 'snow') {
      yield call(
        reject,
        {
          password: 'Wrong password',
          _error: 'Login failed!',
        });
    } else {
      yield call(resolve);
      yield put({ type: types.LOGIN_SUBMIT_SUCCESS, username: values.username });
    }
  }
}

export default loginFlow;
