import { Exception } from 'exceptions';

describe('exceptions', () => {
  describe('Exception', () => {
    it('returns message when casted to string', () => {
      const exc = new Exception('name', {}, 'some message');

      expect(exc.toString()).toBe('some message');
    });
  });
});
