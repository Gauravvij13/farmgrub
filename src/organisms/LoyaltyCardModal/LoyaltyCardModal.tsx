import React, { FC, useCallback } from 'react';
import { Formik, Form } from 'formik';
import { useSpring } from 'react-spring';

import { Box } from 'atoms/Box';
import { Flex } from 'atoms/Flex';
import { Text } from 'atoms/Text';
import { Grid } from 'atoms/Grid';
import { Image } from 'atoms/Image';
import { Icon } from 'molecules/Icon';
import { Merge } from 'typings/utils';
import { Button } from 'molecules/Button';
import { Checkbox } from 'atoms/Checkbox';
import { FormInput } from 'molecules/FormInput';
import { persist, hydrate } from 'utils/persist';
import { AnimatedMenu } from 'atoms/AnimatedMenu';
import { Supplier, useAddLoyaltyCardMutation } from 'generated/graphql-hooks';

export type LoyaltyCardModalProps = {
  visible?: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
  supplier?: Pick<Supplier, 'id' | 'name' | 'logo'>;
};

export const LoyaltyCardModal: FC<LoyaltyCardModalProps> = ({
  visible,
  onClose,
  supplier,
  onSuccess,
}) => {
  const styles = useSpring({
    transform: visible ? 'translateX(0)' : 'translateX(200%)',
    opacity: visible ? 1 : 0,
  });

  const [addLoyaltyCard, { loading }] = useAddLoyaltyCardMutation();

  const onSubmit = useCallback(
    async ({
      loyaltyCard,
      doNotAskAgain,
      skip,
    }: {
      loyaltyCard: string;
      doNotAskAgain: boolean;
      skip: boolean;
    }) => {
      if (supplier) {
        const loyaltyCards: Array<Merge<
          Pick<Supplier, 'id' | 'name'>,
          { doNotAskAgain?: boolean }
        >> = hydrate('loyaltycards') || [];

        if (loyaltyCard && !skip) {
          await addLoyaltyCard({
            variables: {
              input: {
                cardNumber: loyaltyCard,
                supplierId: Number(supplier?.id || 0),
              },
            },
            refetchQueries: ['UserDetails'],
            awaitRefetchQueries: true,
          });
        }

        let loyaltyCardSupplier = loyaltyCards.find(lc => lc.id === supplier.id);

        if (loyaltyCardSupplier) {
          loyaltyCardSupplier.doNotAskAgain = doNotAskAgain;
        } else {
          loyaltyCardSupplier = supplier;
          loyaltyCardSupplier.doNotAskAgain = doNotAskAgain;
          loyaltyCards.push(loyaltyCardSupplier);
        }

        persist('loyaltycards', loyaltyCards);

        if (typeof onSuccess === 'function') {
          onSuccess();
        }
        if (typeof onClose === 'function') {
          onClose();
        }
      }
    },
    [supplier, onSuccess, onClose, addLoyaltyCard],
  );

  return (
    <AnimatedMenu styles={styles!}>
      <Box
        backgroundColor="white"
        height="100vh"
        position="absolute"
        top="0"
        pt="2rem"
        right="0"
        width={{ xs: '100%', md: '40%' }}
        boxShadow="-5px 0 5px -5px #aaa"
      >
        <Grid padding="10px 30px" maxHeight="100vh" overflowY="auto">
          <Icon
            name="close"
            onClick={onClose}
            cursor="pointer"
            color="mahogany.500"
            height="1.6rem"
            width="1.7rem"
            justifySelf="right"
          />
          <Box>
            <Grid textAlign="center">
              <Box height="13rem" mx="auto" my="1rem" width="13rem">
                <Image
                  src={supplier?.logo?.custom}
                  alt={supplier?.logo?.altText}
                  title={supplier?.logo?.title}
                  lazy
                />
              </Box>
              <Text
                id="loyaltycard.modal.add.heading"
                color="applegreen.500"
                variant="heading"
                lineHeight="2.8rem"
                letterSpacing="0.05rem"
                fontWeight={500}
                as="div"
                my="1rem"
                values={{ name: supplier?.name || 'Supplier' }}
              />
              <Text
                id="loyaltycard.modal.add.subheading"
                color="mahogany.500"
                variant="body"
                lineHeight="1.9rem"
                as="div"
                values={{ name: supplier?.name || 'Supplier' }}
              />
              <Formik
                initialValues={{ loyaltyCard: '', doNotAskAgain: false, skip: false }}
                onSubmit={onSubmit}
              >
                {({ setFieldValue, values, handleSubmit }) => (
                  <Form>
                    <FormInput
                      name="loyaltyCard"
                      label="loyaltycard.modal.add.input.label"
                      mt="3rem"
                    />
                    <Flex
                      alignItems="center"
                      mt="2rem"
                      width="max-content"
                      cursor="pointer"
                      onClick={() => setFieldValue('doNotAskAgain', !values.doNotAskAgain)}
                    >
                      <Checkbox checked={values.doNotAskAgain} />
                      <Text
                        as="span"
                        id="donotaskagain"
                        fontFamily="roboto"
                        fontSize="1.4rem"
                        ml={4}
                        color="gray.700"
                      />
                    </Flex>
                    <Button
                      type="submit"
                      borderRadius="full"
                      variant="primary"
                      mt="2rem"
                      title="check"
                      loading={loading}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        setFieldValue('skip', true);
                        setFieldValue('doNotAskAgain', true);
                        handleSubmit();
                      }}
                      borderRadius="full"
                      variant="secondary"
                      mt="2rem"
                      title="notnow"
                    />
                  </Form>
                )}
              </Formik>
              <Text
                id="loyaltycard.modal.add.info"
                color="mahogany.300"
                mt="3rem"
                fontSize="1.2rem"
                lineHeight="1.4rem"
                fontFamily="roboto"
                values={{ name: supplier?.name || 'Supplier' }}
              />
            </Grid>
          </Box>
        </Grid>
      </Box>
    </AnimatedMenu>
  );
};
