import { hydrate, persist } from 'utils/persist';

describe('Utils', () => {
  describe('perist and hydrate', () => {
    it('should allow storing and retreiving values from cookies', () => {
      persist('test', { hello: 'world' }, 'cookies');

      expect(hydrate('test', 'cookies')).toEqual({ hello: 'world' });
    });

    it('should allow storing and retreiving values from localStorage', () => {
      persist('test', { hello: 'world' }, 'localStorage');

      expect(hydrate('test', 'localStorage')).toEqual({ hello: 'world' });
    });

    it('should allow storing and retreiving values from sessionStorage', () => {
      persist('test', { hello: 'world' }, 'sessionStorage');

      expect(hydrate('test', 'sessionStorage')).toEqual({ hello: 'world' });
    });

    it('should set default values for missing keys', () => {
      persist('test', { hello: 'world' }, 'cookies');

      expect(hydrate('test', 'cookies', { hello: 'party', color: 'red' })).toEqual({
        hello: 'world',
        color: 'red',
      });
    });

    it('should allow persisting and hydrating strings', () => {
      persist('test', 'strings');

      expect(hydrate('test')).toBe('strings');
    });

    it('should allow persisting and hydrating arrays', () => {
      persist('test', ['array', 'items']);

      expect(hydrate('test')).toStrictEqual(['array', 'items']);
    });
  });
});
