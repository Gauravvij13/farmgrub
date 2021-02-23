// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect';

interface Window {
  __GA_ID__: string;
}

declare const window: Window & typeof globalThis;
