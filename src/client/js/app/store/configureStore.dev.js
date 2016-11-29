/* eslint global-require: "off" */
import axios from 'axios';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Iterable } from 'immutable';
import { createLogicMiddleware } from 'redux-logic';
import DevTools from '../containers/DevTools';
import rootReducer from '../reducers/index';

import logic from '../logic';

const deps = {
  httpClient: axios
};

const logicMiddleware = createLogicMiddleware(logic, deps);

const logger = createLogger({
  stateTransformer: (state) => {
    var newState = {};
    for (var i of Object.keys(state)) {
      if (Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    };
    return newState;
  }
});

const createStoreWithMiddleware = compose(
  applyMiddleware(logicMiddleware, thunkMiddleware, logger),
  DevTools.instrument()
)(createStore);

export default function configureStore() {
  const store = createStoreWithMiddleware(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
