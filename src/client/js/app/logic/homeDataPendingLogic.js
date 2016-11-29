import { createLogic } from 'redux-logic';
import { HOME_DATA_PENDING } from '../constants';
import { homeDataSuccess, homeDataError } from '../actions/AppActions';

export const homeDataPendingLogic = createLogic({
  type: HOME_DATA_PENDING,
  latest: true, // take latest only

  processOptions: {
    dispatchReturn: true,
    successType: homeDataSuccess,
    failType: homeDataError
  },

  process({ httpClient, action }) {
    return httpClient.get('https://api.github.com/repos/facebook/react/commits')
      .then(resp => resp.data);
  }
});

export default [
  homeDataPendingLogic
];
