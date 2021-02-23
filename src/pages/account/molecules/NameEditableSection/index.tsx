import React from 'react';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { FormInput } from 'molecules/FormInput';
import { AccountEditableSection } from 'pages/account/molecules/AccountEditableSection';

export type NameEditableSectionProps = {
  firstName?: string | null;
  lastName?: string | null;
  handleSelectedSection(e: string): void;
  editable: boolean;
  resetForm(): void;
};

export const NameEditableSection = ({
  handleSelectedSection,
  firstName,
  lastName,
  editable,
  resetForm,
}: NameEditableSectionProps) => {
  const handleEditToggle = (selectedField: string) => {
    handleSelectedSection(selectedField);
    resetForm();
  };

  return (
    <>
      {editable ? (
        <Grid gridTemplateColumns="1fr 1fr" gridGap={4} height="7.6rem">
          <FormInput label="signup.firstname" name="firstName" autoFocus />
          <FormInput label="signup.lastName" name="lastName" />
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
        </Grid>
      ) : (
        <AccountEditableSection
          label="account.name"
          value={`${firstName} ${lastName}`}
          onClick={() => handleEditToggle('name')}
        />
      )}
    </>
  );
};
