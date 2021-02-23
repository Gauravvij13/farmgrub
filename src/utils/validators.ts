import * as yup from 'yup';

// const phoneRegExp = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s-]?[\0-9]{3}[\s-]?[0-9]{4}$/;
const onlyNumber = /^[0-9]*$/;
const expiryDateRegExp = /((0{1}[1-9]{1})|(1{1}[0-2]{1}))([2-9]{1}[0-9]{1})/;
const nameRegExp = /^(?=.{1,60}$)[a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/;
const passwordRegExp = /^[^ ]*$/;

export const validateRequiredEmail = () =>
  yup
    .string()
    .trim()
    .email('validation.email')
    .required('validation.email.required');

export const validateRequiredPassword = () =>
  yup
    .string()
    .matches(passwordRegExp, 'validation.password.invalid.space')
    .min(6, 'validation.password.min')
    .required('validation.password.required');
export const validateRequiredFirstName = () =>
  yup
    .string()
    .matches(nameRegExp, 'validation.firstname.invalid')
    .required('validation.firstname.required');
export const validateRequiredName = () =>
  yup
    .string()
    .matches(nameRegExp, 'validation.name.invalid')
    .required('validation.name.required');
export const validateRequiredLastName = () =>
  yup
    .string()
    .matches(nameRegExp, 'validation.lastname.invalid')
    .required('validation.lastname.required');
export const validateRequiredMessage = () => yup.string().required('validation.message.required');

export const validateAccountFirstName = () =>
  yup
    .string()
    .matches(nameRegExp, 'validation.firstname.invalid')
    .required('account.firstname.required')
    .min(1, 'minmium 1');

export const validateAccountLastName = () =>
  yup
    .string()
    .matches(nameRegExp, 'validation.lastname.invalid')
    .required('account.lastname.required')
    .min(1, 'minimum 1');

export const validateEmail = () =>
  yup
    .string()
    .trim()
    .email('validation.email');
export const validatePhone = () =>
  yup
    .string()
    .matches(onlyNumber, 'validation.phone.invalid')
    .max(10, 'validation.phone.max.digit')
    .min(10, 'validation.phone.min.digit');

export const validateCurrentPassword = () =>
  yup
    .string()
    .min(6, 'validation.password.min')
    .matches(passwordRegExp, 'validation.password.invalid.space');

export const validateNewPassword = () =>
  yup
    .string()
    .min(6, 'validation.password.min')
    .matches(passwordRegExp, 'validation.password.invalid.space');
export const validateRequiredZipcode = () =>
  yup
    .string()
    .matches(onlyNumber, 'validation.zipcode.number')
    .required('validation.zipcode.required')
    .max(5, 'validation.zipcode.max.digit')
    .min(5, 'validation.zipcode.min.digit');

export const validateDriverTip = () =>
  yup.string().matches(/^[0-9]*(.[0-9]+)?$/, 'validation.drivertip.number');

export const validateRequiredStreet = () => yup.string().required('validation.street.required');
export const validateRequiredCity = () => yup.string().required('validation.city.required');
export const validateRequiredState = () => yup.string().required('validation.state.required');
export const validateRequiredPhone = () =>
  yup
    .string()
    .required('validation.phone.required')
    .matches(onlyNumber, 'validation.phone.invalid')
    .max(10, 'validation.phone.max.digit')
    .min(10, 'validation.phone.min.digit');

export const validateRequiredCardName = () =>
  yup
    .string()
    .matches(/^([^0-9]*)$/, 'validation.cardname.invalid')
    .required('validation.cardname.required')
    .max(100);
export const validateRequiredCardNumber = () =>
  yup
    .string()
    .matches(onlyNumber, 'validation.cardnumber.number')
    .required('validation.cardnumber.required')
    .min(14, 'validation.cardnumber.min');

export const validateRequiredCardCvv = () =>
  yup
    .string()
    .matches(onlyNumber, 'validation.cvv.number')
    .required('validation.cvv.required')
    .min(3, 'validation.cvv.min');

export const validateRequiredCardExpiry = () =>
  yup
    .string()
    .matches(expiryDateRegExp, 'validation.cardexpiry.invalid')
    .required('validation.cardexpiry.required');
