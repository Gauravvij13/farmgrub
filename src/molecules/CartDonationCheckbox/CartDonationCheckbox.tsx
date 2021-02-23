import React, { MouseEvent, useState, useCallback } from 'react';
import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { FormattedMessage } from 'react-intl';
import { Checkbox } from 'atoms/Checkbox';
import { Text } from 'atoms/Text';
import { CharitableContributionModal } from 'pages/cart/molecules/CharitableContributionModal';
import { Charity } from 'generated/graphql-hooks';

type CartDonationCheckbox = {
  checked: boolean;
  description?: string | null;
  fullDescription?: string | null;
  onChange?(e: MouseEvent<HTMLElement | HTMLDivElement>): void;
  loading?: boolean;
  charity?: Partial<Charity>;
};

export const CartDonationCheckbox = ({
  checked,
  description,
  onChange,
  loading,
  charity,
  fullDescription,
}: CartDonationCheckbox) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleModalToggle = useCallback(
    bool => () => {
      setIsVisible(bool);
    },
    [setIsVisible],
  );
  return (
    <Box m="auto" minHeight="6.7rem">
      <Grid
        bg="applegreen.500"
        borderRadius="0.5rem"
        gridAutoFlow="column"
        gridTemplateColumns="5rem 1fr"
        alignItems="center"
        justifyItems="center"
        boxShadow="0rem 0rem 0.5rem"
      >
        <Checkbox checked={checked} onChange={onChange} loading={loading} />
        <Box pr="1rem">
          <p
            style={{
              color: 'white',
              fontSize: '1.2rem',
              lineHeight: '1.6rem',
              fontFamily: 'roboto',
              fontWeight: 'bold',
            }}
          >
            <Text as="span">{description}</Text>
            <Box
              // had to add `any` because of styled-component missmatch types for `as`
              as={'a' as any}
              onClick={handleModalToggle(true)}
              style={{
                color: 'white',
                fontSize: '1.2rem',
                lineHeight: '1.6rem',
                fontFamily: 'roboto',
                fontWeight: 'bold',
                marginInlineStart: '0.5rem',
                cursor: 'pointer',
              }}
            >
              <u>
                <FormattedMessage id="roundup.learn" />
              </u>
            </Box>
          </p>
        </Box>
      </Grid>
      <CharitableContributionModal
        isVisible={isVisible}
        altText={charity?.logo?.altText}
        imgTitle={charity?.logo?.title}
        title={charity?.name}
        onClose={handleModalToggle(false)}
        description={fullDescription}
        image={charity?.logo?.thumbnail}
      />
    </Box>
  );
};
