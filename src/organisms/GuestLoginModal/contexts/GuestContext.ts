import { useCallback, useReducer } from 'react';
import { createContainer, createReducer, createAction } from '../../../utils/context';

export type GuestState = {
  loginWarningModalState?: boolean;
  guestRoute: 'zipcode' | 'signin' | 'nodelivery' | 'signup';
  guestZipCode: string;
};
const initialState: GuestState = {
  loginWarningModalState: false,
  guestRoute: 'zipcode',
  guestZipCode: '',
};
const actions = {
  setLoginWarningState: createAction('SET_LOGIN_WARNING_STATE'),
  setGuestZipcode: createAction('SET_GUEST_ZIPCODE'),
  setGuestRoute: createAction('SET_GUEST_ROUTE'),
};

const guestReducer = createReducer<GuestState>({
  [actions.setLoginWarningState.toString()]: (state, { payload }) => ({
    ...state,
    loginWarningModalState: payload,
  }),
  [actions.setGuestRoute.toString()]: (state, { payload }) => ({
    ...state,
    guestRoute: payload,
  }),
  [actions.setGuestZipcode.toString()]: (state, { payload }) => ({
    ...state,
    guestZipCode: payload,
  }),
});

export const {
  useContext: useGuest,
  Context: GuestContext,
  Provider: GuestProvider,
  TestProvider: TestGuestProvider,
} = createContainer(() => {
  const [state, dispatch] = useReducer(guestReducer, initialState);
  const setLoginWarningState = useCallback((modalState: boolean) => {
    dispatch(actions.setLoginWarningState(modalState));
  }, []);

  const setGuestRoute = useCallback((route: string) => {
    dispatch(actions.setGuestRoute(route));
  }, []);

  const setGuestZipCode = useCallback((zipCode: string) => {
    dispatch(actions.setGuestZipcode(zipCode));
  }, []);

  return {
    state,
    actions: {
      setGuestRoute,
      setLoginWarningState,
      setGuestZipCode,
    },
  };
});

export default useGuest;
