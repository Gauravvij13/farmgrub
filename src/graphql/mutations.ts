import { gql } from 'apollo-boost';

export const VERIFY_EMAIL = gql`
  mutation VerifyEmail($input: VerifyEmailInput!) {
    verifyEmail(input: $input) {
      token
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

export const SEND_VERIFICATION_EMAIL = gql`
  mutation SendVerificationEmail($input: SendVerificationEmailInput!) {
    sendVerificationEmail(input: $input) {
      successMessage
    }
  }
`;

export const IS_ZIPCODE_VALID = gql`
  mutation AvailableZipcode($input: AvailableZipcodeInput!) {
    availableZipcode(input: $input) {
      successMessage
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      firstName
      lastName
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation ChangePassword($input: ChangePasswordInput!) {
    changePassword(input: $input) {
      changed
    }
  }
`;

export const ADD_CART = gql`
  mutation AddCart($input: AddCartInput!) {
    addCart(input: $input) {
      currency
      email
      id
      itemCount
      itemTotal
      lineItems {
        currency
        id
        preTaxAmount
        price
        quantity
        variantId
      }
      total
    }
  }
`;
