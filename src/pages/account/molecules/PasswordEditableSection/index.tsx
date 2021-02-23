import React from 'react';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { FormInput } from 'molecules/FormInput';
import { AccountEditableSection } from 'pages/account/molecules/AccountEditableSection';

export type PasswordEdiatbleSectionProps = {
  handleSelectedSection(e: string): void;
  editable: boolean;
  resetForm(): void;
};

export const PasswordEdiatbleSection = ({
  handleSelectedSection,
  editable,
  resetForm,
}: PasswordEdiatbleSectionProps) => {
  const handleEditToggle = (selectedField: string) => {
    handleSelectedSection(selectedField);
    resetForm();
  };

  return (
    <>
      {editable ? (
        <Grid gridGap="2rem">
          <FormInput
            label="account.current.password"
            name="currentPassword"
            type="password"
            autoFocus
          />
          <Text
            color="mahogany.500"
            variant="body"
            position="absolute"
            top={1}
            right={2}
            cursor="pointer"
            onClick={() => handleEditToggle('')}
            id="account.button.close"
            my={0}
            py={0}
          />
          <FormInput label="account.new.password" name="newPassword" type="password" />
        </Grid>
      ) : (
        <AccountEditableSection
          label="account.password"
          value="********"
          onClick={() => handleEditToggle('password')}
        />
      )}
    </>
  );
};
