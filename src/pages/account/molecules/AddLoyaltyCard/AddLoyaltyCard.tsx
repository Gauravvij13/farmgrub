import React, { FC, useCallback, useMemo } from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';

import { Text } from 'atoms/Text';
import { Button } from 'molecules/Button';
import { FormInput } from 'molecules/FormInput';
import { FormSelect } from 'molecules/FormSelect';
import useVisibleState from 'hooks/useVisibleState';
import { useAddLoyaltyCardMutation, useSuppliersQuery, LoyaltyCard } from 'generated/graphql-hooks';

const validationSchema = yup.object().shape({
  loyaltyCard: yup.string().required('required'),
});

export type AddLoyaltyCardProps = {
  loyaltyCards?: Pick<LoyaltyCard, 'cardNumber' | 'id'>[] | null;
};

export const AddLoyaltyCard: FC<AddLoyaltyCardProps> = ({ loyaltyCards }) => {
  const [addLoyaltyCard, { loading }] = useAddLoyaltyCardMutation();
  const { visible, hide, show } = useVisibleState();
  const { data, loading: suplierLoading } = useSuppliersQuery();

  const onSubmit = useCallback(
    async ({ loyaltyCard, supplier }: { loyaltyCard: string; supplier: string }) => {
      await addLoyaltyCard({
        variables: {
          input: {
            cardNumber: loyaltyCard,
            supplierId: Number(supplier || 0),
          },
        },
        refetchQueries: ['UserDetails'],
        awaitRefetchQueries: true,
      });

      hide();
    },
    [hide, addLoyaltyCard],
  );

  const suppliers = useMemo(
    () => data?.suppliers?.filter(supplier => supplier.supportsLoyaltyCards) || [],
    [data],
  );

  if (suplierLoading || (loyaltyCards && loyaltyCards?.length === suppliers.length)) {
    return null;
  }

  return (
    <>
      {visible ? (
        <Formik
          initialValues={{ loyaltyCard: '', supplier: suppliers?.[0]?.id || '0' }}
          onSubmit={onSubmit}
          enableReinitialize
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <FormSelect
                name="supplier"
                label="loyaltycard.add.supplier.label"
                mt="3rem"
                placeholder="hello"
              >
                {suppliers.map(supplier => (
                  <option key={supplier.id!} value={supplier.id!}>
                    {supplier.name}
                  </option>
                ))}
              </FormSelect>
              <FormInput name="loyaltyCard" label="loyaltycard.modal.add.input.label" mt="3rem" />
              <Button
                borderRadius="full"
                variant="primary"
                mt="2rem"
                title="add"
                loading={loading}
              />
            </Form>
          )}
        </Formik>
      ) : (
        <Text
          id="add"
          color="applegreen.500"
          variant="body"
          textTransform="capitalize"
          fontWeight="600"
          onClick={show}
          cursor="pointer"
        />
      )}
    </>
  );
};
