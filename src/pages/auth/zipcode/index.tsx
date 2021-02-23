import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from 'atoms/Box';
// import { Grid } from 'atoms/Grid';
import { Loader } from 'molecules/Loader/Loader';
import { IS_ZIPCODE_VALID } from 'graphql/mutations';
import Div100vh from 'react-div-100vh';
import { useMutation } from '@apollo/react-hooks';
import { showError } from 'utils/toast';
import SplashScreen from '../molecules/splash/SplashScreen';
import { InputField } from '../../../molecules/InputField/InputField';
import { ZipHeading } from './atoms/ZipHeading';

const ZipCode = () => {
  const [value, setValue] = useState('');
  const [availableZipCode, { loading, error }] = useMutation(IS_ZIPCODE_VALID);
  const history = useHistory();

  useEffect(() => {
    if (error?.graphQLErrors && error?.graphQLErrors.length > 0) {
      history.push(`/no-delivery?zip=${value}`);
    } else if (error?.networkError && value.length === 5) {
      showError(error?.message);
    }
  }, [error, history, value]);

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
        history.push(`/signup?zip=${value}`);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      }
    }
  }, [history, value, availableZipCode]);
  useEffect(() => {
    if (value && value.length === 5) {
      validateZipCode();
    }
  }, [value, history, validateZipCode]);
  if (loading) {
    return <Loader />;
  }
  return (
    <Div100vh>
      <SplashScreen>
        <Box>
          <ZipHeading text="splashscreen.zipcode.check.description" textColor="mahogany.500" />
          <Box maxWidth="80%" mx="auto" mt="4.9rem" display={{ xs: 'none', md: 'block' }}>
            <InputField
              autoFocus
              label="zipcode"
              onChange={handleChange}
              maxLength={5}
              value={value}
              type="text"
              inputMode="numeric"
              textAlign="center"
              labelPosition={{ left: '0', right: '0' }}
            />
            <Box height="8.4rem" />
          </Box>
        </Box>

        <Box position="absolute" bottom={0} width="100%" display={{ xs: 'block', md: 'none' }}>
          <InputField
            autoFocus
            label="zipcode"
            onChange={handleChange}
            maxLength={5}
            value={value}
            type="tel"
            textAlign="center"
            labelPosition={{ left: '0', right: '0' }}
          />
        </Box>
      </SplashScreen>
    </Div100vh>
  );
};
export default ZipCode;
