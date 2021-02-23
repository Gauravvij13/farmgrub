import React, { useState, useCallback, useEffect } from 'react';
import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { Checkbox } from 'atoms/Checkbox';
import { useFormikContext } from 'formik';
// import { CartFormValues } from 'typings/cartitems';
import { EditableInfo } from 'pages/cart/organisms/CartView/atoms/EditableField/EditableInfo';
import useCart from 'pages/cart/context/CartContext';
import { AddressFormType } from 'typings/cartitems';

import BillingAddressForm from './components/BillingAddressForm';

type BillingAddressProps = {
  isEditable?: boolean;
  checked: boolean;
  onChange?(e?: React.MouseEvent<HTMLElement | HTMLDivElement>): void;
};

export const BillingAddress = ({ isEditable, onChange, checked }: BillingAddressProps) => {
  const [deliveryForm, showDeliveryForm] = useState(isEditable);
  const { setFieldValue, values, isValid } = useFormikContext<AddressFormType>();
  const [initialValues, setInitialValues] = useState<Partial<AddressFormType['billAddress']>>(
    values.billAddress,
  );

  const {
    actions: { updateCartState },
  } = useCart();

  const resetDeliveryInfo = useCallback(() => {
    setFieldValue('billAddress.address1', initialValues?.address1);
    setFieldValue('billAddress.city', initialValues?.city);
    setFieldValue('billAddress.zipcode', initialValues?.zipcode);
    setFieldValue('billAddress.phone', initialValues?.phone);
  }, [setFieldValue, initialValues]);

  const closeForm = useCallback(() => {
    showDeliveryForm(false);
    resetDeliveryInfo();
  }, [showDeliveryForm, resetDeliveryInfo]);

  const openForm = useCallback(() => {
    showDeliveryForm(true);
    setInitialValues({ ...values.billAddress });
  }, [showDeliveryForm, values]);

  useEffect(() => {
    if (deliveryForm) {
      resetDeliveryInfo();
    }
  }, [resetDeliveryInfo, deliveryForm]);

  const onChangeHandler = useCallback(() => {
    if (typeof onChange === 'function') {
      onChange();
    }
    openForm();
  }, [onChange, openForm]);

  useEffect(() => {
    updateCartState({ nextDisable: !isValid });
  }, [isValid, updateCartState]);

  useEffect(() => {
    if (checked) {
      setFieldValue('billAddress.address1', values.shipAddress?.address1);
      setFieldValue('billAddress.city', values.shipAddress?.city);
      setFieldValue('billAddress.zipcode', values.shipAddress?.zipcode);
      setFieldValue('billAddress.phone', values.shipAddress?.phone);
    }
  }, [checked, values, setFieldValue]);

  return (
    <Box>
      <Grid justifyContent="start" gridAutoFlow="column" gridGap={10} alignItems="center">
        <Checkbox checked={checked} onChange={onChangeHandler} />
        <Text as="h3" variant="field" id="billing.address.check" color="steelgrey.500" />
      </Grid>

      {!checked && (
        <>
          {deliveryForm ? (
            <Grid mt={6}>
              <BillingAddressForm onClick={closeForm} closeButton={!!initialValues} />
            </Grid>
          ) : (
            <EditableInfo
              subDetail={`${values?.billAddress?.address1}, ${values?.billAddress?.city}, ${values?.billAddress?.zipcode}`}
              heading="billing.address.heading"
              alignment="vertical"
              phoneNo={values?.billAddress?.phone}
              onClick={openForm}
            />
          )}
        </>
      )}
    </Box>
  );
};
