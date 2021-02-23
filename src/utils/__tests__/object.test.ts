import { objWithDefault, mapObjEntries } from '../object';

describe('utils', () => {
  describe('object', () => {
    describe('objWithDefault', () => {
      it('retrieves values from defined keys', () => {
        expect(objWithDefault({ car: 'blue' }, 'green').car).toBe('blue');
      });

      it('retrieves default for undefined keys', () => {
        expect(objWithDefault({ car: 'blue' }, 'green').truck).toBe('green');
      });

      it('allows setting values', () => {
        const obj = objWithDefault({}, 'blue');

        obj.car = 'red';

        expect(obj.car).toBe('red');
      });
    });

    describe('mapObjEntries', () => {
      it('maps over object entries', () => {
        const original = { primary: 'blue', danger: 'red', success: 'green' };

        const result = mapObjEntries(original, (k, v) => k + v);

        expect(original).not.toBe(result);

        expect(result).toStrictEqual({
          primary: 'primaryblue',
          danger: 'dangerred',
          success: 'successgreen',
        });
      });
    });
  });
});
