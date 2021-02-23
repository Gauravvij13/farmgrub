import React from 'react';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { FormInput } from 'molecules/FormInput';
import { AccountEditableSection } from 'pages/account/molecules/AccountEditableSection';

export type EmailEditableSectionProps = {
  email?: string | null;
  handleSelectedSection(e: string): void;
  editable: boolean;
};

export const EmailEditableSection = ({
  email,
  handleSelectedSection,
  editable,
}: EmailEditableSectionProps) => {
  const handleEditToggle = (selectedField: string) => {
    handleSelectedSection(selectedField);
  };

  return (
    <>
      {editable ? (
        <Box height="7.6rem">
          <FormInput label="account.email" name="email" type="email" autoFocus />
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
        </Box>
      ) : (
        <AccountEditableSection
          label="account.email"
          value={email!}
          onClick={() => handleEditToggle('email')}
          editable={false}
        />
      )}
    </>
  );
};
