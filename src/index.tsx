import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink, Observable, Operation } from 'apollo-link';

import { ApolloProvider } from '@apollo/react-hooks';
import { showGraphqlError } from 'utils/error';
import { handleLogout } from 'utils/logout';
import { logError } from 'utils/logger';
import introspectionResult from './generated/introspection-result';
import env from './env';
import App from './App';

import * as serviceWorker from './serviceWorker';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
});

const cache = new InMemoryCache({
  fragmentMatcher,
});

const request = (operation: Operation) => {
  const token = localStorage.getItem('token');
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });
};

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      // @ts-ignore
      let handle;
      Promise.resolve(operation)
        .then(oper => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        // @ts-ignore
        if (handle) handle.unsubscribe();
      };
    }),
);

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        showGraphqlError(graphQLErrors);
        if (graphQLErrors[0]?.extensions?.Statuscode === 401) {
          handleLogout(true);
        }
      }
      if (networkError) {
        logError(networkError.message);
      }
    }),
    requestLink,
    withClientState(),
    new HttpLink({
      uri: env.API_HOST,
    }),
  ]),
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
