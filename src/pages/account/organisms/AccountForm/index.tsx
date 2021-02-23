import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { Button } from 'molecules/Button';
import { Grid } from 'atoms/Grid';
import {
  validateEmail,
  validateAccountFirstName,
  validateAccountLastName,
  validateCurrentPassword,
  validateNewPassword,
  validatePhone,
} from 'utils/validators';
import { ApolloError } from 'apollo-boost';
import { NameEditableSection } from 'pages/account/molecules/NameEditableSection';
import { EmailEditableSection } from 'pages/account/molecules/EmailEditableSection';
import { PhoneEditableSection } from 'pages/account/molecules/PhoneEditableSection';
import { PasswordEdiatbleSection } from 'pages/account/molecules/PasswordEditableSection';

export const accountvalidation = yup.object().shape<FormValues>({
  email: validateEmail(),
  firstName: validateAccountFirstName(),
  lastName: validateAccountLastName(),
  phoneNo: validatePhone(),
  currentPassword: validateCurrentPassword(),
  newPassword: validateNewPassword(),
});

export type FormValues = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNo?: string | null;
  currentPassword?: string | null;
  newPassword?: string | null;
};

export type AccountFormProps = {
  onSubmit(values: FormValues, update: string, resetForm: () => void): void;
  loading?: boolean;
  error?: ApolloError;
  initialValues: FormValues;
};

const AccountForm = ({ onSubmit, loading, initialValues, error }: AccountFormProps) => {
  const [editable, setEditable] = useState('');

  const handleSelectedSection = (selected: string) => {
    setEditable(selected);
  };

  useEffect(() => {
    if (!loading && !error) {
      setEditable('');
    }
  }, [loading, error]);

  return (
    <Formik
      initialValues={
        {
          ...initialValues,
          phoneNo: initialValues.phoneNo ?? '',
          currentPassword: '',
          newPassword: '',
        } as FormValues
      }
      onSubmit={(values, { resetForm }) => {
        onSubmit(values, editable, resetForm);
      }}
      validationSchema={accountvalidation}
      enableReinitialize
    >
      {({ dirty, values, resetForm }) => {
        return (
          <Form>
            <Grid>
              <NameEditableSection
                handleSelectedSection={handleSelectedSection}
                firstName={initialValues?.firstName}
                lastName={initialValues?.lastName}
                editable={editable === 'name'}
                resetForm={resetForm}
              />
              <EmailEditableSection
                handleSelectedSection={handleSelectedSection}
                email={initialValues?.email}
                editable={editable === 'email'}
              />
              <PhoneEditableSection
                handleSelectedSection={handleSelectedSection}
                editable={editable === 'phone'}
                phoneNo={initialValues?.phoneNo ?? ''}
                resetForm={resetForm}
              />
              <PasswordEdiatbleSection
                handleSelectedSection={handleSelectedSection}
                editable={editable === 'password'}
                resetForm={resetForm}
              />

              {((editable !== 'password' && editable !== '' && dirty) ||
                (editable === 'password' && values.currentPassword && values.newPassword)) && (
                <Button type="submit" title="account.update" loading={loading} mt="3.2rem" />
              )}
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AccountForm;
