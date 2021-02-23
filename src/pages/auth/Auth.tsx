import React, { lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import AppRoute from 'components/AppRoute';

const Landing = lazy(() => import(/* webpackChunkName: 'Landing' */ 'pages/auth/landing'));

const ZipCode = lazy(() => import(/* webpackChunkName: 'ZipCode' */ 'pages/auth/zipcode'));

const Signup = lazy(() => import(/* webpackChunkName: 'Signup' */ 'pages/auth/signup'));

const Signin = lazy(() => import(/* webpackChunkName: 'Signin' */ 'pages/auth/signin'));

const SignupSuccess = lazy(() =>
  import(/* webpackChunkName: 'SignupSuccess' */ 'pages/auth/signupsuccess'),
);

const ForgotPassword = lazy(() =>
  import(/* webpackChunkName: 'ForgotPassword' */ 'pages/auth/forgotpassword'),
);

const NoDelivery = lazy(() => import(/* webpackChunkName: 'NoDelivery' */ 'pages/auth/nodelivery'));
export type AuthProps = {
  message?: string;
};

export default function Auth() {
  return (
    <Switch>
      <AppRoute path="/landing" as={Landing} />
      <AppRoute path="/zipcode" as={ZipCode} />
      <AppRoute path="/signup" as={Signup} />
      <AppRoute path="/signin" as={Signin} />
      <AppRoute path="/forgot-password" as={ForgotPassword} />
      <AppRoute path="/signup-success" as={SignupSuccess} />
      <AppRoute path="/no-delivery" as={NoDelivery} />
      <Redirect to="/shop/main" />;
    </Switch>
  );
}
