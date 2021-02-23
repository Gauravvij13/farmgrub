/* eslint-disable no-console */
export const log = (entry: any) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(entry);
  }
};
export const logError = (entry: any) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(entry);
  }
};
