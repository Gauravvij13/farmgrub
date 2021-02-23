import React, { lazy } from 'react';

import AppRoute from 'components/AppRoute';
import IndexRedirect from 'pages';
import Auth, { AuthProps } from 'pages/auth/Auth';
import { Switch, useLocation } from 'react-router-dom';
import { Navbar } from 'molecules/Navbar';
import ErrorBoundary from 'utils/ErrorBoundary';

import { Box } from 'atoms/Box';
import { CartProvider } from 'pages/cart/context/CartContext';
import ConfirmedOrderDetail from 'pages/cart/organisms/ConfirmedOrder';

const Account = lazy(() => import(/* webpackChunkName: 'Company' */ 'pages/account'));

const Orders = lazy(() => import(/* webpackChunkName: 'Orders' */ 'pages/orders'));

const OrderDetail = lazy(() => import(/* webpackChunkName: 'OrderDetail' */ 'pages/orderdetail'));

const Shop = lazy(() => import(/* webpackChunkName: 'Shop' */ 'pages/shop'));

const QuickDelivery = lazy(() =>
  import(/* webpackChunkName: 'QuickDelivery' */ 'pages/quickdelivery'),
);
const Farms = lazy(() => import(/* webpackChunkName: 'Farms' */ 'pages/farms'));

const Mission = lazy(() => import(/* webpackChunkName: 'Mission' */ 'pages/mission'));

const Contact = lazy(() => import(/* webpackChunkName: 'Contact' */ 'pages/contact'));

const Cart = lazy(() => import(/* webpackChunkName: 'Cart' */ 'pages/cart'));

const TermsOfServices = lazy(() =>
  import(/* webpackChunkName: 'TermsOfServices' */ 'pages/termsofservices'),
);

const ProductDetail = lazy(() =>
  import(/* webpackChunkName: 'ProductDetail' */ 'pages/productdetail'),
);

const ProductSeachListing = lazy(() =>
  import(/* webpackChunkName: 'ProductSearchListing' */ 'pages/productsearchlisting'),
);

const ProductListing = lazy(() =>
  import(/* webpackChunkName: 'ProductListing' */ 'pages/productlisting'),
);
const ChangePassword = lazy(() =>
  import(/* webpackChunkName: 'ChangePassword' */ 'pages/changepassword'),
);
// const NotFound = lazy(() => import(/* webpackChunkName: 'NotFound' */ 'pages/errors/notfound'));

// TODO: Add permissions to admin route.

export const AuthenticatedRoutes = () => {
  const location = useLocation();
  return (
    <Box>
      <CartProvider>
        <Navbar />
        <ErrorBoundary key={location.pathname}>
          <Switch>
            <AppRoute path="/" as={IndexRedirect} />
            <AppRoute exact={false} path="/shop/products/:id" as={ProductDetail} />
            <AppRoute exact={false} path="/shop" as={Shop} />
            <AppRoute path="/orders/:id" as={OrderDetail} />
            <AppRoute path="/orders" as={Orders} />
            <AppRoute path="/order-confirmed/:id" as={ConfirmedOrderDetail} />
            <AppRoute path="/account" as={Account} />
            <AppRoute path="/cart" as={Cart} />
            <AppRoute path="/quickdelivery" as={QuickDelivery} />
            <AppRoute path="/farms" as={Farms} />
            <AppRoute path="/mission" as={Mission} />
            <AppRoute path="/contact" as={Contact} />
            <AppRoute path="/product-listing" as={ProductSeachListing} />
            <AppRoute path="/product-listing/:categoryId" as={ProductListing} />
            <AppRoute path="/change-password" as={ChangePassword} />
            <AppRoute path="/terms-of-services" as={TermsOfServices} />
            <AppRoute path="*" as={IndexRedirect} />
          </Switch>
        </ErrorBoundary>
      </CartProvider>
    </Box>
  );
};

export const UnauthenticatedRoutes = (props: AuthProps) => (
  <>
    <Switch>
      <AppRoute exact={false} path="/shop/products/:id" as={ProductDetail} />
      <AppRoute exact={false} path="/shop" as={Shop} />
      <AppRoute path="/quickdelivery" as={QuickDelivery} />
      <AppRoute path="/product-listing" as={ProductSeachListing} />
      <AppRoute path="/product-listing/:categoryId" as={ProductListing} />
      <AppRoute path="/farms" as={Farms} />
      <AppRoute path="/mission" as={Mission} />
      <AppRoute path="/contact" as={Contact} />
      <AppRoute path="/terms-of-services" as={TermsOfServices} />
      <AppRoute path="*" as={Auth} {...props} />
    </Switch>
  </>
);

// THIS IS AN EXAMPLE
export const SIDEBAR_ITEMS = [
  {
    permission: 'Tracking.View',
    to: '/tracking',
    icon: <div>T</div>,
    title: 'Tracking',
  },
  {
    permission: 'Shipments.View',
    to: '/shipments',
    icon: <div>S</div>,
    title: 'Shipments',
  },
  {
    permission: 'Shipment.Create',
    to: '/shipment-create',
    icon: <div>C</div>,
    title: 'Create Shipment',
  },
  {
    permission: 'BusinessPartners.View',
    to: '/business-partners',
    icon: <div>BP</div>,
    title: 'Business Partners',
  },
  {
    permission: 'Carriers.View',
    to: '/carriers',
    icon: <div>BP</div>,
    title: 'Carriers',
  },
  {
    permission: 'Locations.View',
    to: '/locations',
    icon: <div>L</div>,
    title: 'Locations',
  },
  {
    permission: 'Users.View',
    to: '/users',
    icon: <div>U</div>,
    title: 'Users',
  },
  {
    permission: 'Company.View',
    to: '/company-profile',
    icon: <div>CP</div>,
    title: 'Company Profile',
  },
  /**
   * Admin Routes
   */
  {
    permission: 'AppAdmin.ManageCompanies',
    to: '/admin/companies',
    icon: <div>C</div>,
    title: 'Admin - Users',
  },
  {
    permission: 'AppAdmin.ManageCarriers',
    to: '/admin/carriers',
    icon: <div>C</div>,
    title: 'Admin - Carriers',
  },
  {
    permission: 'AppAdmin.ManageVelosticsTeam',
    to: '/admin/velostics-team',
    icon: <div>V</div>,
    title: 'Admin - Velostics Team',
  },
  {
    permission: 'AppAdmin.ManageUsers',
    to: '/admin/users',
    icon: <div>U</div>,
    title: 'Admin - Users',
  },
];
