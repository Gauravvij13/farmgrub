import { ServerException } from 'exceptions';

describe('exceptions', () => {
  describe('ServerException', () => {
    it('returns `An unknown error occured` when constructed without a message', () => {
      const exc = new ServerException({});

      expect(exc.toString()).toBe('520: An unknown error occurred');
    });
  });
});
