import { fromJS, Record, Map } from 'immutable';
import * as Constants from '../constants';

// Calculate breakPoints from Atomizer
const breakPoints = {};
Object.keys(Atomizer.breakPoints).forEach(bp => { breakPoints[bp] = Modernizr.mq(Atomizer.breakPoints[bp]); });

export const getWindowSize = () => new Map({
  width: window.innerWidth,
  height: window.innerHeight
});

export const AppStateRecord = Record({
  error: new Map(),
  breakPoints: new Map(breakPoints),
  nav: new Map({
    open: breakPoints.sm,
  }),
  window: getWindowSize(),
});

const defaultState = new AppStateRecord();

export default function (state = defaultState, action) {
  switch (action.type) {
    case Constants.APP_ON_INIT:
      return state.merge(fromJS(action.payload.app));

    case Constants.APP_ON_RESIZE:
      return state.set('window', getWindowSize());

    case Constants.APP_NAV_TOGGLE:
      return state.setIn(['nav', 'open'], !state.getIn(['nav', 'open']));

    case Constants.APP_ON_ERROR:
      {
        return state.set('error', fromJS(action.data));
      }

    default:
      return state;
  }
}
