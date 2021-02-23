/**
 * USE GOOGLE ANALYTICS ONLY IN THIS LOCATION,
 */
import * as firebase from 'firebase';
import ReactPixel from 'react-facebook-pixel';

import env from '../env';

import { browserHistory } from './settings/config';
import { stages } from './settings/constants';

export const initialize = async () => {
  if (env.FIREBASE_APIKEY !== undefined) {
    const firebaseConfig = {
      apiKey: env.FIREBASE_APIKEY,
      authDomain: env.FIREBASE_AUTHDOMAIN,
      databaseURL: env.FIREBASE_DATABASEURL,
      projectId: env.FIREBASE_PROJECTID,
      storageBucket: env.FIREBASE_STORAGEBUCKET,
      messagingSenderId: env.FIREBASE_MESSAGINGSENDERID,
      appId: env.FIREBASE_APPID,
      measurementId: env.FIREBASE_MEASUREMENTID,
    };

    // Initialize Firebase
    try {
      const app = firebase.initializeApp(firebaseConfig);
      firebase.analytics(app);
      // eslint-disable-next-line no-console
      console.info(`Initialized Analytics Service`);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(`Failed to initialize Firebase`, e);
    }
  } else {
    // eslint-disable-next-line no-console
    console.error(`FIREBASE_APIKEY environment variable missing`);
  }
};

export const fbPixelInit = async () => {
  if (process.env.REACT_APP_FB_KEY !== undefined) {
    try {
      const options = {
        autoConfig: true, // set pixel's autoConfig
        debug: false,
      };

      ReactPixel.init(process.env.REACT_APP_FB_KEY, undefined, options);
      ReactPixel.pageView();
      // eslint-disable-next-line no-console
      console.info(`Initialized FBP Analytics Service`);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(`Failed to initialize FBP`, e);
    }
  } else {
    // eslint-disable-next-line no-console
    console.error(`REACT_APP_FB_KEY environment variable missing`);
  }
};

/**
 * This is for screenView
 */
export const screenView = (screenName: string) => {
  if (firebase !== undefined && firebase.apps.length > 0) {
    firebase.analytics().setCurrentScreen(screenName);
  }
};

browserHistory.listen(({ pathname }) => {
  screenView(pathname);
});

export const cartProgressAnalytics = async (
  page: string,
  amount: number,
  // eslint-disable-next-line camelcase
  items: { item_name: string; coupon?: string; price: number; item_id: string; quantity: number }[],
  coupon?: string,
) => {
  if (firebase !== undefined && firebase.apps.length > 0) {
    firebase.analytics().logEvent('page_view', {
      page_location: `${window.location.pathname}/${page}`,
      page_path: `${window.location.pathname}/${page}`,
      page_title: `Checkout - ${page} | Farm Grub`,
    });
    firebase.analytics().logEvent('checkout_progress', {
      checkout_step: stages.indexOf(page) + 1,
      value: amount,
      currency: 'USD',
      screen_name: `Checkout - ${page} | Farm Grub`,
      items,
      ...(coupon && { coupon }),
    });
  }
};

export const logEventAnalytics = async (
  event: firebase.analytics.EventNameString,
  amount?: number,
  items?: {
    // eslint-disable-next-line camelcase
    item_name: string;
    coupon?: string;
    price: number;
    // eslint-disable-next-line camelcase
    item_id: string;
    quantity: number;
  }[],
  coupon?: string,
) => {
  if (firebase !== undefined && firebase.apps.length > 0) {
    firebase.analytics().logEvent(event as any, {
      ...(items && { items }),
      ...(coupon && { coupon }),
      ...(amount && { value: amount, currency: 'USD' }),
    });
  }
};

export const setUserId = async (id: string) => {
  if (firebase !== undefined && firebase.apps.length > 0) {
    firebase.analytics().setUserId(id);
  }
};
