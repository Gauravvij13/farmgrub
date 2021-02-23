import React, { FC, lazy, useEffect } from 'react';
import { Switch, Redirect, RouteComponentProps } from 'react-router-dom';
import AppRoute from 'components/AppRoute';
import useAuth from 'contexts/Authentication';

import { HomePage } from 'templates/HomePage';
import { Navbar } from 'molecules/Navbar';

const Main = lazy(() => import(/* webpackChunkName: 'Main' */ 'pages/shop/organism/main'));
const CategoryView = lazy(() =>
  import(/* webpackChunkName: 'SubCategoryView' */ 'pages/shop/organism/categories'),
);
const CategoryGridView = lazy(() =>
  import(/* webpackChunkName: 'CategoryView' */ 'pages/shop/organism/category'),
);
type ShopProps = {} & RouteComponentProps;
const Shop: FC<ShopProps> = ({ match }) => {
  const {
    state: { isLoggedIn },
  } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* navbar only for guest login */}
      {!isLoggedIn && <Navbar />}
      <HomePage>
        <Switch>
          <AppRoute path={`${match.url}/main`} as={Main} />
          <AppRoute exact={false} path={`${match.url}/t/:categoryId+`} as={CategoryView} />
          <AppRoute exact={false} path={`${match.url}/t/:categoryId+/all`} as={CategoryGridView} />
          <Redirect to={`${match.url}/main`} />;
        </Switch>
      </HomePage>
    </>
  );
};

export default Shop;
