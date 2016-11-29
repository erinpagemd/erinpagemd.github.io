import * as Constants from '../constants';

export function onInit(payload) {
  return {
    type: Constants.APP_ON_INIT,
    payload
  };
}

export function onResize() {
  return {
    type: Constants.APP_ON_RESIZE,
  };
}

export function onError(payload) {
  return {
    type: Constants.APP_ON_ERROR,
    payload
  };
}

export function navToggle() {
  return {
    type: Constants.APP_NAV_TOGGLE,
  };
}

export function homeDataPending(payload) {
  return {
    type: Constants.HOME_DATA_PENDING,
    payload
  };
}

export function homeDataSuccess(payload) {
  return {
    type: Constants.HOME_DATA_SUCCESS,
    payload
  };
}

export function homeDataError(payload) {
  return {
    type: Constants.HOME_DATA_ERROR,
    payload,
    error: true
  };
}
