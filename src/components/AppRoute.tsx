import React, { FC, Suspense } from 'react';

import { Route as RRR, RouteProps } from 'react-router-dom';
import { Loader } from 'molecules/Loader';

interface IAppRouteProps extends RouteProps {
  as: React.ComponentType<any>;
}

const AppRoute: FC<IAppRouteProps> = ({ as: Component, ...props }) => {
  const routeElement = (
    <RRR
      {...props}
      render={renderProps => (
        <Suspense fallback={<Loader />}>
          <Component {...renderProps} {...props} {...renderProps.location.state} />
        </Suspense>
      )}
    />
  );

  return routeElement;
};

AppRoute.defaultProps = {
  exact: true,
};

export default AppRoute;
