import { createAction, getType, createAsyncActions } from '..';

describe('createAction', () => {
  it('should create an action', () => {
    const actionCreator = createAction('A_TYPE');
    expect(actionCreator('something')).toEqual({
      type: 'A_TYPE',
      payload: 'something',
    });
  });

  describe('when stringifying action', () => {
    it('should return the action type', () => {
      const actionCreator = createAction('A_TYPE');
      expect(`${actionCreator}`).toEqual('A_TYPE');
    });
  });
});

describe('getType', () => {
  it('should return the action type', () => {
    const actionCreator = createAction('A_TYPE');
    expect(getType(actionCreator)).toEqual('A_TYPE');
  });
});

describe('createAsyncActions', () => {
  const types = createAsyncActions('TEST');

  const LOADING = 'TEST_LOADING';
  const SUCCESS = 'TEST_SUCCESS';
  const FAILURE = 'TEST_FAILURE';

  it('should return an array with loading, success, and failure actions as items', () => {
    expect(Array.isArray(types)).toBe(true);

    const [loading, success, failure] = types;

    expect(loading.type).toBe(LOADING);
    expect(loading.toString()).toBe(LOADING);
    expect(`${loading}`).toBe(LOADING);

    expect(success.type).toBe(SUCCESS);
    expect(success.toString()).toBe(SUCCESS);
    expect(`${success}`).toBe(SUCCESS);

    expect(failure.type).toBe(FAILURE);
    expect(failure.toString()).toBe(FAILURE);
    expect(`${failure.type}`).toBe(FAILURE);
  });

  it('should return an array with loading, success, and failure actions as properties', () => {
    expect(Array.isArray(types)).toBe(true);

    const { loading, success, failure } = types;

    expect(loading.type).toBe(LOADING);
    expect(loading.toString()).toBe(LOADING);
    expect(`${loading}`).toBe(LOADING);

    expect(failure.type).toBe(FAILURE);
    expect(failure.toString()).toBe(FAILURE);
    expect(`${failure}`).toBe(FAILURE);

    expect(success.type).toBe(SUCCESS);
    expect(success.toString()).toBe(SUCCESS);
    expect(`${success}`).toBe(SUCCESS);
  });
});
