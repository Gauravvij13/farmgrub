import React, { MouseEvent } from 'react';
import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { Phone } from 'atoms/Phone';
import { LocaleString } from 'locales';
import { Flex } from 'atoms/Flex';
import { Button } from 'molecules/Button';

export type AccountEditableSectionProps = {
  label: LocaleString;
  values?: any;
  value: string | null;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  onRemove?(e: MouseEvent<HTMLButtonElement>): void;
  phone?: boolean;
  editable?: boolean;
  removeLoading?: boolean;
};

export const AccountEditableSection = ({
  label,
  value,
  onClick,
  phone,
  editable,
  values,
  onRemove,
  removeLoading,
}: AccountEditableSectionProps) => {
  return (
    <>
      <Box maxHeight="7.6rem" minHeight="5.4rem" bg="offwhite.0" py="1.6rem">
        <Text variant="body" color="mahogany.500" id={label} my={0} py={0} values={values} />
        <Grid
          my={0}
          pt="0.8rem"
          pb={0}
          gridAutoFlow="column"
          gridGap={20}
          justifyContent="space-between"
        >
          {phone ? (
            <Phone
              variant="body"
              color="mahogany.500"
              fontWeight="bold"
              my={0}
              py={0}
              phoneNo={value}
            />
          ) : (
            <Text variant="body" color="mahogany.500" fontWeight="bold" my={0} py={0}>
              {value || 'N/A'}
            </Text>
          )}

          <Flex>
            {editable && (
              <Text
                variant="body"
                color="applegreen.500"
                id="account.edit"
                fontWeight="bold"
                my={0}
                py={0}
                onClick={onClick}
                cursor="pointer"
              />
            )}

            {onRemove && (
              <Button
                variant="transparent"
                color="applegreen.500"
                title="remove"
                fontWeight="bold"
                my={0}
                ml={6}
                py={0}
                bg="transparent"
                loading={removeLoading}
                onClick={onRemove}
                cursor="pointer"
              />
            )}
          </Flex>
        </Grid>
      </Box>
      <Box bg="offwhite.500" mt={0} py={0} height="0.2rem" />
    </>
  );
};

AccountEditableSection.defaultProps = {
  editable: true,
};
