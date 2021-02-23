import React, { useState, useEffect, useCallback } from 'react';
import { Box } from 'atoms/Box';
// import { Grid } from 'atoms/Grid';
import { IS_ZIPCODE_VALID } from 'graphql/mutations';
import { useMutation } from '@apollo/react-hooks';
import { showError } from 'utils/toast';
import { Formik, Form } from 'formik';
import { FormInput } from 'molecules/FormInput';
import { Button } from 'molecules/Button';
import useGuest from '../../contexts/GuestContext';
import { GuestSigninButton } from '../../atoms/GuestSigninButton';

import { ZipHeading } from '../../../../pages/auth/zipcode/atoms/ZipHeading';

export const GuestZipCode = () => {
  const [value, setValue] = useState('');
  const [availableZipCode, { loading, error }] = useMutation(IS_ZIPCODE_VALID);

  const {
    actions: { setGuestRoute, setGuestZipCode },
  } = useGuest();

  useEffect(() => {
    if (error?.graphQLErrors && error?.graphQLErrors.length > 0) {
      setGuestRoute('nodelivery');
      setGuestZipCode(value);
    } else if (error?.networkError && value.length === 5) {
      showError(error?.message);
    }
  }, [error, value, setGuestRoute, setGuestZipCode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberRegex = /^(?:\d{1,9}(?:\.\d{0,2})?)?$/;
    if (numberRegex.test(e.target.value)) {
      setValue(e.target.value);
    }
  };

  const validateZipCode = useCallback(async () => {
    if (value.length === 5) {
      try {
        await availableZipCode({ variables: { input: { zipCode: value } } });
        setGuestRoute('signup');
        setGuestZipCode(value);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      }
    }
  }, [value, availableZipCode, setGuestRoute, setGuestZipCode]);

  return (
    <Box>
      <Formik initialValues={{ zipCode: '' }} onSubmit={validateZipCode}>
        {() => {
          return (
            <Form>
              <Box>
                <ZipHeading
                  textColor="applegreen.500"
                  text="guestModal.zipcode.check.description"
                />
                <Box maxWidth="100%" mx="auto" mt="2.9rem">
                  <FormInput
                    name="guestZipCode"
                    onChange={handleChange}
                    maxLength={5}
                    label="zipcode"
                    type="tel"
                  />
                  <Box height="2.4rem" />
                </Box>
              </Box>

              <Box
                position="absolute"
                bottom={0}
                width="100%"
                display={{ xs: 'block', md: 'none' }}
              />
              <Button title="check" type="submit" loading={loading} onClick={validateZipCode} />
              <GuestSigninButton />
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
