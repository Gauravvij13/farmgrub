import { ErrorResponse } from 'apollo-link-error';
import { ApolloError } from 'apollo-boost';
import { GraphQLError } from 'graphql';
import { showError } from './toast';

/**
 * Returns the error thrown from a function as the value
 *
 * @param func
 */
export async function getError(func: Function) {
  try {
    await func();
  } catch (error) {
    return error;
  }
  return undefined;
}
/**
 * Returns a string from graphql error object.
 * @param error
 */
export function showGraphqlError(error: ErrorResponse | ApolloError | readonly GraphQLError[]) {
  if (Array.isArray(error) && error.length > 0) {
    showError(error[0].message);
  } else if ('graphQLErrors' in error && error.graphQLErrors && error.graphQLErrors.length > 0) {
    showError(error.graphQLErrors[0].message);
  } else if ('networkError' in error && error.networkError) {
    showError(error.networkError.message);
  }
}
