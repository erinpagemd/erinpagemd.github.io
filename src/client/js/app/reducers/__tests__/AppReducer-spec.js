import expect from 'expect';
import * as Constants from '../../constants';
import '../../../vendor/modernizr-custom';

import reducer from '../AppReducer';

describe('AppReducer', () => {
  it('initializes with initialState', () => {
    const state = reducer(undefined, {});

    expect(state.get('error').toJS()).toEqual({});
  });

  it('should load initial state', () => {
    const action = {
      type: Constants.APP_ON_INIT,
      payload: {
        app: {
          error: {},
          breakPoints: {},
          nav: {
            open: true,
          }
        }
      },
    };

    const state = reducer(undefined, action);
    expect(state.getIn(['nav', 'open'])).toBe(true);
  });

  it('should update window value on resize', () => {
    const action = { type: Constants.APP_ON_RESIZE };

    const state = reducer(undefined, action);
    expect(state.get('window').toJS()).toEqual({
      width: window.innerWidth,
      height: window.innerHeight
    });
  });

  it('should toggle the nav', () => {
    const action = { type: Constants.APP_NAV_TOGGLE };

    const state = reducer(undefined, action);
    expect(state.getIn(['nav', 'open'])).toEqual(false);
  });

  it('should set an error', () => {
    const action = {
      type: Constants.APP_ON_ERROR,
      data: 'MOCK_ERROR',
    };

    const state = reducer(undefined, action);
    expect(state.get('error')).toEqual('MOCK_ERROR');
  });
});
