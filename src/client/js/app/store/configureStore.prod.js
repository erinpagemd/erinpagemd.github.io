import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogicMiddleware } from 'redux-logic';
import rootReducer from '../reducers/index';
import logic from '../logic';

const deps = {
  httpClient: axios
};

const logicMiddleware = createLogicMiddleware(logic, deps);

const createStoreWithMiddleware = applyMiddleware(logicMiddleware, thunkMiddleware)(createStore);

export default function configureStore() {
  return createStoreWithMiddleware(rootReducer);
}
