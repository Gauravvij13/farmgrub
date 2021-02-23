/* eslint-disable no-confusing-arrow */
import { set } from 'lodash';
import { OverrideReturn } from 'typings/utils';
import {
  Schema as YupSchema,
  ValidateOptions as YupValidateOptions,
  ValidationError as YupValidationError,
} from 'yup';

type Validator = (value: any, allValues: Record<string, any>) => string | undefined;

export const yupFormValidator = <T = any>(
  schema: YupSchema<T>,
  options: YupValidateOptions = {
    abortEarly: false,
  },
) => async (values: any) => {
  try {
    await schema.validate(values, options);

    return undefined;
  } catch (errors) {
    if (errors instanceof YupValidationError) {
      const formErrors = {};

      for (const error of errors.inner) {
        set(formErrors, error.path, error.message);
      }

      return formErrors;
    }

    return { 'Internal Error': 'An error occurred during validation.' };
  }
};

export const composeValidators = (...validators: Validator[]): Validator => (...args) =>
  validators.reduce<string | undefined>(
    (error, validator) => error || validator(...args),
    undefined,
  );

export const required = (message?: string): Validator => (value: any) =>
  value ? undefined : message || 'Required';

type Condition = OverrideReturn<Validator, boolean>;

export const conditional = (condition: Condition, validator: Validator): Validator => (...args) =>
  condition(...args) === true ? validator(...args) : undefined;

export const optional = (validator: Validator): Validator => (...args) =>
  args[0] ? validator(...args) : undefined;

export const minLength = (length: number, message?: string): Validator => (value: string) =>
  value.length < length ? message || `Must be at least ${length} characters` : undefined;

export const maxLength = (length: number, message?: string): Validator => (value: string) =>
  value.length >= length ? message || `Must be no more than ${length} characters` : undefined;
