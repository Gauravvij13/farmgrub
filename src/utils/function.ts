/* eslint-disable import/export */

/*
?: We're using this compose function instead of the one inside of Lodash
?: because Lodash doesn't include an individual ES module for it at the moment
*/

export function compose(): <R>(...a: R[]) => R;

export function compose<F extends Function>(f: F): F;

export function compose<R>(f1: (b: any) => R, ...funcs: Function[]): (...args: any[]) => R;

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
export function compose<R>(...funcs: Function[]): (...args: any[]) => R;

export function compose<R>(...funcs: Function[]) {
  if (funcs.length === 0) {
    return (arg: R) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args: any[]) => a(b(...args)));
}

export function mergeHandlers(...handlers: (Function | undefined)[]) {
  return (...args: any) => {
    for (const handler of handlers) {
      typeof handler === 'function' && handler(...args);
    }
  };
}
