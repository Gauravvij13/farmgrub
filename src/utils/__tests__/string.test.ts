import { toTitleCase } from 'utils/string';

describe('utils', () => {
  describe('string', () => {
    describe('toTitleCase', () => {
      it('correctly cases an all lowercase string', () => {
        expect(toTitleCase('HELLO WORLD')).toBe('Hello World');
      });

      it('correctly cases an all uppercase string', () => {
        expect(toTitleCase('hello world')).toBe('Hello World');
      });

      it('correctly cases a mixed case string', () => {
        expect(toTitleCase('hEllO WoRLD')).toBe('Hello World');
      });
    });
  });
});
