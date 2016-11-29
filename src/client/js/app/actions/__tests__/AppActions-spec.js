import expect from 'expect';
import * as Constants from '../../constants';
import * as Actions from '../AppActions';

describe('App Actions', () => {
  let payload;

  beforeEach(() => {
    payload = {
      data: {
        code: 'MOCK_CODE',
        msg: 'MOCK_MSG',
      }
    };
  });

  it('should be an onInit action', () => {
    const expected = {
      type: Constants.APP_ON_INIT,
      payload
    };

    expect(Actions.onInit(payload)).toEqual(expected);
  });

  it('should be a onResize action', () => {
    const expected = {
      type: Constants.APP_ON_RESIZE
    };

    expect(Actions.onResize()).toEqual(expected);
  });

  it('should be an onError action', () => {
    const expected = {
      type: Constants.APP_ON_ERROR,
      payload
    };

    expect(Actions.onError(payload)).toEqual(expected);
  });

  it('should be a navToggle action', () => {
    const expected = {
      type: Constants.APP_NAV_TOGGLE
    };

    expect(Actions.navToggle()).toEqual(expected);
  });

  it('should be a home data pending action', () => {
    const expected = {
      type: Constants.HOME_DATA_PENDING,
      payload
    };

    expect(Actions.homeDataPending(payload)).toEqual(expected);
  });

  it('should be a home data success action', () => {
    const expected = {
      type: Constants.HOME_DATA_SUCCESS,
      payload
    };

    expect(Actions.homeDataSuccess(payload)).toEqual(expected);
  });

  it('should be a home data error action', () => {
    const expected = {
      type: Constants.HOME_DATA_ERROR,
      payload,
      error: true
    };

    expect(Actions.homeDataError(payload)).toEqual(expected);
  });
});
