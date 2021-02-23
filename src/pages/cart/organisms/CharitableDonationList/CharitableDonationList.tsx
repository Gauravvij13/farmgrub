import React, { useState, useCallback } from 'react';

import {
  useCartViewQuery,
  useCharitableContributionsQuery,
  useAddCharitableContributionToCartMutation,
  useRemoveCharitableContributionFromCartMutation,
  Adjustment,
} from 'generated/graphql-hooks';
import { CartDonationCheckbox } from 'molecules/CartDonationCheckbox';
import { Box } from 'atoms/Box';
import useCart from 'pages/cart/context/CartContext';

/**
 *
 * @param id
 * used to determine if the charitable contribution exists or not
 */
const charitableSourceStrategy = (id: string | number) => ({ source }: Partial<Adjustment>) =>
  source?.__typename === 'CharitableContribution' && source?.id === id;

export const CharitableDonationList = () => {
  const { data } = useCartViewQuery();
  const [charitableCheckListLoading, setCharitableCheckListLoading] = useState<
    Array<string | number>
  >([]);
  const { data: charitableContributionData } = useCharitableContributionsQuery();
  const {
    state: { cartTotal },
    actions: { updateCartState },
  } = useCart();
  const [addCharitableContributionToCart] = useAddCharitableContributionToCartMutation();
  const [removeCharitableContributionFromCart] = useRemoveCharitableContributionFromCartMutation();

  const handleCharitableCheckboxChange = useCallback(
    (id: string) => async () => {
      const isCharitableSelected = data?.cart?.adjustments?.find(charitableSourceStrategy(id));
      try {
        setCharitableCheckListLoading(prevState => [...prevState, id]);
        if (!isCharitableSelected) {
          await addCharitableContributionToCart({
            variables: { input: { charitableContributionId: Number(id) } },
            update(_cache, { data: charitableData }) {
              const donationData = charitableData?.addCharitableContributionToCart?.adjustments?.find(
                charitableSourceStrategy(id),
              );
              if (cartTotal) {
                updateCartState({ cartTotal: cartTotal + (donationData?.amount || 0) });
              }
            },
          });
        } else {
          await removeCharitableContributionFromCart({
            variables: { input: { charitableContributionId: Number(id) } },
          });

          if (cartTotal) {
            updateCartState({ cartTotal: cartTotal - isCharitableSelected.amount });
          }
        }
      } catch (e) {
      } finally {
        setCharitableCheckListLoading(prevState =>
          prevState.filter(internalId => internalId !== id),
        );
      }
    },
    [
      data,
      cartTotal,
      updateCartState,
      setCharitableCheckListLoading,
      addCharitableContributionToCart,
      removeCharitableContributionFromCart,
    ],
  );
  return (
    <>
      {charitableContributionData?.charitableContributions.map(
        ({ id, description, charity, fullDescription }) => (
          <Box key={id!} p="2rem" bg="offwhite.0" m="auto" width="100%">
            <CartDonationCheckbox
              loading={Boolean(charitableCheckListLoading.find(internalId => internalId === id))}
              checked={Boolean(data?.cart?.adjustments?.find(charitableSourceStrategy(id!)))}
              onChange={handleCharitableCheckboxChange(id!)}
              description={description}
              charity={charity}
              fullDescription={fullDescription}
            />
          </Box>
        ),
      )}
    </>
  );
};
