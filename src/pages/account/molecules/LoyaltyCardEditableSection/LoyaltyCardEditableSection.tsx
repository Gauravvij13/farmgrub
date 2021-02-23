import React, { FC, useCallback } from 'react';

import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { FormInput } from 'molecules/FormInput';
import { AccountEditableSection } from 'pages/account/molecules/AccountEditableSection';
import useVisibleState from 'hooks/useVisibleState';
import { Formik, Form } from 'formik';
import {
  useUpdateLoyaltyCardMutation,
  useRemoveLoyaltyCardMutation,
} from 'generated/graphql-hooks';
import { Button } from 'molecules/Button';
import { showGraphqlError } from 'utils/error';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  loyaltyCard: yup.string().required('required'),
});

export type LoyaltyCardEditableSectionProps = {
  label?: string;
  cardId?: string;
  value?: string;
  resetForm?: () => void;
};

export const LoyaltyCardEditableSection: FC<LoyaltyCardEditableSectionProps> = ({
  label = 'Weigel',
  cardId,
  value = '',
  resetForm,
}) => {
  const { visible, show, hide } = useVisibleState();

  const [updateLoyaltyCard, { loading }] = useUpdateLoyaltyCardMutation();
  const [removeLoyaltyCard, { loading: removeLoading }] = useRemoveLoyaltyCardMutation();

  const closeEditable = useCallback(() => {
    hide();
    if (typeof resetForm === 'function') {
      resetForm();
    }
  }, [hide, resetForm]);

  const onSubmit = useCallback(
    async ({ loyaltyCard }: { loyaltyCard: string }) => {
      try {
        await updateLoyaltyCard({
          variables: { input: { cardNumber: loyaltyCard, id: cardId || '' } },
        });
        closeEditable();
      } catch (e) {
        showGraphqlError(e);
      }
    },
    [updateLoyaltyCard, cardId, closeEditable],
  );

  const onRemove = useCallback(
    () =>
      removeLoyaltyCard({
        variables: { input: { id: cardId || '' } },
        refetchQueries: ['UserDetails'],
        awaitRefetchQueries: true,
      }),
    [removeLoyaltyCard, cardId],
  );

  return (
    <>
      {visible ? (
        <Grid gridGap="2rem">
          <Formik
            initialValues={{ loyaltyCard: value }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {() => (
              <Form>
                <FormInput name="loyaltyCard" label="loyaltycard.modal.add.input.label" />
                <Text
                  color="mahogany.500"
                  variant="body"
                  position="absolute"
                  top={1}
                  right={2}
                  cursor="pointer"
                  onClick={closeEditable}
                  id="account.button.close"
                  my={0}
                  py={0}
                />
                <Button
                  borderRadius="full"
                  variant="primary"
                  mt="2rem"
                  title="update"
                  loading={loading}
                />
              </Form>
            )}
          </Formik>
        </Grid>
      ) : (
        <AccountEditableSection
          label="account.loyaltycards.suppliername"
          values={{ name: label }}
          value={value}
          onClick={show}
          onRemove={onRemove}
          removeLoading={removeLoading}
        />
      )}
    </>
  );
};
