import React from 'react';
import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { LocaleString } from 'locales';
import { Icon } from 'molecules/Icon';
import { Phone } from 'atoms/Phone';
import { PaymentCardDetail } from 'atoms/PaymentCardDetail';
import { Flex } from 'atoms/Flex';

type OrderStatusInfoProps = {
  heading: LocaleString;
  subDetail?: string | null;
  phoneNo?: string | null;
  displayTime?: string | null;
  showCardIcon?: boolean;
  date?: string | null;
  cardType?: string | null;
  lastDigits?: string | null;
  onEdit?: (arg0: LocaleString) => void;
};
export const OrderStatusInfo = ({
  heading,
  subDetail,
  phoneNo,
  date,
  showCardIcon,
  cardType,
  lastDigits,
  onEdit,
  displayTime,
}: OrderStatusInfoProps) => {
  return (
    <Box borderBottom="1px solid" borderColor="pale.500" py={10} px="1.6rem">
      <Flex justifyContent="space-between">
        <Text variant="body" color="mahogany.500" id={heading} />
        {onEdit && (
          <Text
            variant="body"
            color="mahogany.500"
            id="edit"
            cursor="pointer"
            textDecoration="underline"
            onClick={() => onEdit(heading)}
          />
        )}
      </Flex>
      <Grid gridAutoFlow="column" gridGap={5} justifyContent="start" alignItems="center">
        {showCardIcon && <Icon name="creditCard" height={30} width={30} />}
        {date && (
          <Text
            variant="body"
            color="mahogany.500"
            fontWeight="bold"
            my={0}
            textTransform="capitalize"
          >
            {date}
          </Text>
        )}
        {displayTime && (
          <Text variant="body" fontWeight="bold" color="mahogany.500">
            {`(${displayTime})`}
          </Text>
        )}
        {(cardType || lastDigits) && (
          <PaymentCardDetail cardType={cardType} lastDigits={lastDigits} />
        )}
        <Text
          variant="body"
          color="mahogany.500"
          fontWeight="bold"
          mb={0}
          mt={2}
          textTransform="capitalize"
        >
          {subDetail}
        </Text>
      </Grid>
      <Phone phoneNo={phoneNo} color="mahogany.500" variant="body" />
    </Box>
  );
};
