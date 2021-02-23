import { useCallback, useEffect, useReducer } from 'react';
import { createContainer, createReducer, createAction } from 'utils/context';
import { log } from 'utils/logger';
import { handleLogout, AUTH_KEYS } from 'utils/logout';
import { StockNotificationsDocument, User } from 'generated/graphql-hooks';
import { setUserId } from 'utils/analytics';
import { useApolloClient } from '@apollo/react-hooks';

export type UserData = {
  id: string;
  email: string;
};

export type AuthState = {
  token?: string;
  user?: User;
  isLoggedIn?: boolean;
  authenticating?: boolean;
};
const initialState: AuthState = {
  isLoggedIn: false,
  authenticating: true,
};
const actions = {
  setAuthenticationState: createAction('SET_AUTHENTICATION'),
  setAuthenticating: createAction('SET_AUTHENTICATING'),
  resetUserInfo: createAction('RESET_USER_INFO'),
};

const authReducer = createReducer<AuthState>({
  [actions.setAuthenticationState.toString()]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [actions.resetUserInfo.toString()]: () => ({
    isLoggedIn: false,
    user: undefined,
  }),
  [actions.setAuthenticating.toString()]: (state, { payload }) => ({
    ...state,
    authenticating: payload,
  }),
});

export const {
  useContext: useAuth,
  Context: AuthContext,
  Provider: AuthProvider,
  TestProvider: TestAuthProvider,
} = createContainer(() => {
  const [{ user, ...state }, dispatch] = useReducer(authReducer, initialState);
  log({ ...state, user });

  const client = useApolloClient();

  const getNotificationsData = useCallback(async () => {
    try {
      const { data } = await client.query({
        query: StockNotificationsDocument,
      });

      if (data) {
        dispatch(
          actions.setAuthenticationState({
            user: {
              ...user,
              pendingStockNotifications: [
                ...(user?.pendingStockNotifications || []),
                ...(data?.me?.pendingStockNotifications || []),
              ],
            },
          }),
        );
      }
    } catch (e) {}
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (state.isLoggedIn) {
      getNotificationsData();
    }
  }, [getNotificationsData, state.isLoggedIn]);

  const logout = useCallback(() => {
    handleLogout(false);
    dispatch(actions.resetUserInfo());
  }, []);

  const retrieveUserInfoFromCookie = useCallback(() => {
    if (user === undefined) {
      const token = localStorage.getItem(AUTH_KEYS.TOKEN);
      const localUserInfo = localStorage.getItem(AUTH_KEYS.USER_DATA);
      if (token && localUserInfo) {
        const userInfo: AuthState = {
          token,
          isLoggedIn: true,
          user: JSON.parse(localUserInfo),
        };
        return userInfo;
      }
    }
    return user;
  }, [user]);

  const retrieveUserInfo = useCallback(() => {
    dispatch(actions.setAuthenticating(true));
    const userInfo = retrieveUserInfoFromCookie();
    if (userInfo) {
      dispatch(actions.setAuthenticationState(userInfo));
    }
    dispatch(actions.setAuthenticating(false));
    return userInfo;
  }, [retrieveUserInfoFromCookie]);

  const setUserInfo = useCallback((token: string, userData: UserData) => {
    if (userData) {
      localStorage.setItem(AUTH_KEYS.TOKEN, token);
      localStorage.setItem(AUTH_KEYS.USER_DATA, JSON.stringify(userData));

      // analytics
      setUserId(userData.id);

      const userInfo: AuthState = {
        token,
        isLoggedIn: true,
        user: userData,
      };
      dispatch(actions.setAuthenticationState(userInfo));
    }
  }, []);

  const changeUserData = useCallback(
    (userData: Partial<User>) => {
      dispatch(actions.setAuthenticationState({ user: { ...user, ...userData } }));
    },
    [user],
  );

  return {
    state: {
      user,
      ...state,
    },
    actions: {
      logout,
      retrieveUserInfo,
      setUserInfo,
      changeUserData,
    },
  };
});

export default useAuth;
