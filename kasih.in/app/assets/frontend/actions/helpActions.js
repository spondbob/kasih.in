import * as types from './actionTypes';

export function createHelp(help) {
  return { type: types.CREATE_HELP, help };
}
