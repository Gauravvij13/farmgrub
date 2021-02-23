import React, { FC } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';

import { Flex } from 'atoms/Flex';
import { Button } from 'molecules/Button';
import { FormInput } from 'molecules/FormInput';
import { useFormSubmitWithLoading } from 'hooks/useFormSubmitWithLoading';
import { Box } from 'atoms/Box';

export type NewsletterFormValuesType = {
  email: string;
};

export type NewsletterFormProps = {
  initialValues?: NewsletterFormValuesType;
  loading?: boolean;
  onSubmit?: (
    values: NewsletterFormValuesType,
    formikHelper?: FormikHelpers<NewsletterFormValuesType>,
  ) => void;
};

const defaultInitialValues: NewsletterFormValuesType = { email: '' };

export const NewsletterForm: FC<NewsletterFormProps> = ({ initialValues, onSubmit, loading }) => {
  const { onSubmitHandler } = useFormSubmitWithLoading(onSubmit);

  return (
    <Formik initialValues={initialValues || defaultInitialValues} onSubmit={onSubmitHandler}>
      {() => (
        <Form>
          <Flex justifyContent="center" flexWrap="wrap">
            <Box width="34rem" maxWidth="70vw" mt="1rem">
              <FormInput name="email" placeholder="Enter your email" pt={1} height="4rem" />
            </Box>
            <Box ml="1rem" mt="1rem">
              <Button
                title="subscribe"
                loading={loading}
                px="3rem"
                size="small"
                alignItems="center"
              />
            </Box>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
