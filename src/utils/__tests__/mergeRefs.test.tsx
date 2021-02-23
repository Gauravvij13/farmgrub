import mergeRefs from 'utils/mergeRefs';

describe('utils', () => {
  describe('mergeRefs', () => {
    it('returns null when no refs are passed', () => {
      expect(mergeRefs()).toBeNull();

      expect(mergeRefs(null, undefined, null)).toBeNull();
    });

    it('returns the raw ref if only one ref is passed', () => {
      expect(mergeRefs({ current: 1 })).toStrictEqual({ current: 1 });

      expect(mergeRefs(null, undefined, { current: 1 })).toStrictEqual({
        current: 1,
      });
    });

    it('returns a callback ref that assigns a value to multiple refs', () => {
      const ref1 = { current: 1 };
      const ref2 = { current: 2 };
      const ref3 = { current: 3 };
      const ref4 = { current: 4 };

      const callbackRef1 = (instance: any) => {
        ref3.current = instance;
      };

      const mergeRefCallback = mergeRefs(
        ref1,
        null,
        callbackRef1,
        ref2,
        undefined,
        mergeRefs(ref4),
      );

      if (typeof mergeRefCallback !== 'function') {
        throw new TypeError(`mergeRefs returned ${mergeRefCallback} instead of a function`);
      }

      mergeRefCallback('hello');

      expect(ref1).toStrictEqual({ current: 'hello' });
      expect(ref2).toStrictEqual({ current: 'hello' });
      expect(ref3).toStrictEqual({ current: 'hello' });
      expect(ref4).toStrictEqual({ current: 'hello' });
    });
  });
});
