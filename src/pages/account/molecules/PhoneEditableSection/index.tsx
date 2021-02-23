import React from 'react';
import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { FormPhoneInput } from 'molecules/FormPhoneInput';
import { AccountEditableSection } from 'pages/account/molecules/AccountEditableSection';

export type PhoneEditableSectionProps = {
  phoneNo?: string;
  handleSelectedSection(e: string): void;
  editable: boolean;
  resetForm(): void;
};

export const PhoneEditableSection = ({
  phoneNo,
  handleSelectedSection,
  editable,
  resetForm,
}: PhoneEditableSectionProps) => {
  const handleEditToggle = (selectedField: string) => {
    handleSelectedSection(selectedField);
    resetForm();
  };
  return (
    <>
      {editable ? (
        <Box height="7.6rem">
          <FormPhoneInput label="account.phone" name="phoneNo" autoFocus />
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
          label="account.phone"
          value={phoneNo!}
          phone
          onClick={() => {
            handleEditToggle('phone');
          }}
        />
      )}
    </>
  );
};
