import React from 'react';
import BrowserHistory from 'react-history/BrowserHistory';
import { StaticRouter } from 'react-router';
import { Provider, connect } from 'react-redux';
import Wrapper from './Wrapper';

// Adapted from
// https://gist.github.com/steida/16da36887e6e6b466e12ba3a4ae6ce87
// see also:
// https://gist.github.com/donnanicolas/3d76397a92551f449637590bf0413133

const Router = ({ dispatch, pathname }) => (
  // TODO: Use ControlledRouter once it will be released.
  // https://github.com/ReactTraining/react-router/issues/3879
  <BrowserHistory
    key={pathname} // github.com/yahoo/react-intl/issues/234#issuecomment-163366518
  >
    {({ history, action, location }) => {
      /*if (location.pathname !== pathname) {
        setImmediate(() => {
          dispatch(setLocation(location));
        });
      }*/
      return (
        <StaticRouter
          action={action}
          location={location}
          onPush={history.push}
          onReplace={history.replace}
          blockTransitions={history.block}
        >
          <Wrapper action={action} location={location} />
        </StaticRouter>
      );
    }}
  </BrowserHistory>
);

const ConnectedRouter = connect(state => ({
  pathname: state.app.location && state.app.location.pathname,
}))(Router);

// We needs such Root for vanilla hot reloading.
const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter />
  </Provider>
);

export default Root;
