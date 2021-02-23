import React from 'react';
import { BrowserRouterProps, Router } from 'react-router-dom';
import { History } from 'history';

import { browserHistory } from 'utils/settings/config';

// eslint-disable-next-line import/no-mutable-exports
export let history: History;

interface IAppRouterProps extends BrowserRouterProps {}

const AppRouter = (props: IAppRouterProps) => {
  if (history === undefined) {
    history = browserHistory;
  }

  return <Router history={history} {...props} />;
};

AppRouter.defaultProps = {};

export default AppRouter;
