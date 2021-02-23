import * as cookie from '../cookie';

describe('Utils', () => {
  describe('cookie', () => {
    beforeEach(() => {
      document.cookie = '';
    });

    describe('loadCookie', () => {
      it('should read the cookie', () => {
        document.cookie = 'test=test';
        expect(cookie.loadCookie('test')).toBe('test');
      });

      it('should parse if an object', () => {
        document.cookie = 'test={"test": true}';
        expect(cookie.loadCookie('test').test).toBe(true);
      });

      it('should not parse if not an object', () => {
        document.cookie = 'test=1230.00';
        expect(cookie.loadCookie('test')).toBe('1230.00');
      });

      it('should not parse if we ask not to', () => {
        document.cookie = 'test={"test": true}';
        expect(typeof cookie.loadCookie('test', true)).toBe('string');
      });
    });

    describe('saveCookie', () => {
      it('should update the value', () => {
        document.cookie = 'test=test';
        expect(cookie.loadCookie('test')).toBe('test');

        cookie.saveCookie('test', 'other');
        expect(cookie.loadCookie('test')).not.toBe('test');
      });

      it('should stringify an object', () => {
        document.cookie = 'test=test';
        expect(cookie.loadCookie('test')).toBe('test');

        cookie.saveCookie('test', { test: true });
        expect(typeof cookie.loadCookie('test')).toBe('object');
      });
    });
  });
});
