import { take, put, call, fork, select } from 'redux-saga/effects';
import loginFlow from './userSaga.js';
import { helpFeedsFlow, postHelp } from './helpSaga.js';

export default function* root() {
  yield [
    fork(helpFeedsFlow),
    fork(postHelp),
    fork(loginFlow),
  ];
}
