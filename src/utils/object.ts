export const flattenObject = (obj: object): Record<string, string | number | boolean> => {
  const flattened = {};

  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = obj[key];

    if (value !== null) {
      if (typeof value === 'object') {
        Object.assign(flattened, flattenObject(value));
      } else {
        flattened[key] = value;
      }
    }
  }

  return flattened;
};

export const objWithDefault = <O extends object, D>(obj: O & Record<any, D>, def: D) =>
  new Proxy(obj, {
    get: (target, name) =>
      Object.prototype.hasOwnProperty.call(target, name) ? target[name as string] : def,
  });

export const mapObjEntries = <V = any, R = any>(
  obj: Record<any, V>,
  fn: (k: string | number, v: V) => R,
) =>
  Object.entries(obj).reduce((result, [k, v]) => {
    // eslint-disable-next-line no-param-reassign
    result[k] = fn(k, v);

    return result;
  }, {});
