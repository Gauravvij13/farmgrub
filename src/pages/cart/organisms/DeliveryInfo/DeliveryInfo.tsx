import React, { useCallback, useState, useEffect, FC, useMemo } from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';

import { Grid } from 'atoms/Grid';
import { DeliveryAddress } from 'molecules/DeliveryAddress';
import useCart, { CartContext } from 'pages/cart/context/CartContext';
import { BillingAddress } from 'molecules/PaymentMethod/BillingAddress';
import {
  validateRequiredStreet,
  validateRequiredZipcode,
  validateRequiredCity,
  validateRequiredPhone,
  validatePhone,
} from 'utils/validators';
import { AddressFormType } from 'typings/cartitems';

const deliveryAddressValidationSchema = yup.object().shape<AddressFormType>({
  shipAddress: yup
    .object()
    .shape({
      address1: validateRequiredStreet(),
      zipcode: validateRequiredZipcode(),
      city: validateRequiredCity(),
      phone: validateRequiredPhone(),
    })
    .required(),
  billAddress: yup
    .object()
    .shape({
      address1: validateRequiredStreet(),
      zipcode: validateRequiredZipcode(),
      city: validateRequiredCity(),
      phone: validatePhone(),
    })
    .required(),
});

export type DeliveryInfoProps = {
  formRef?: any;
};

const checkIfSameAddress = (
  address?: CartContext['shipAddress'],
  billing?: CartContext['billAddress'],
) => {
  if (
    address &&
    billing &&
    address.address1 &&
    billing.address1 &&
    address.address1 === billing.address1 &&
    address.city === billing.city &&
    address.zipcode === billing.zipcode
  ) {
    return true;
  }
  return false;
};

export const DeliveryInfo: FC<DeliveryInfoProps> = ({ formRef }) => {
  const {
    state: { shipAddress, billAddress },
    actions: { updateCartState, checkoutUpdate },
  } = useCart();

  const isSame = useMemo(() => checkIfSameAddress(shipAddress, billAddress), [
    shipAddress,
    billAddress,
  ]);

  const [checked, setChecked] = useState(isSame);

  const handleBillingAddressChange = useCallback(() => {
    setChecked(c => !c);
  }, [setChecked]);

  useEffect(() => {
    if (checked) {
      updateCartState({ billAddress: shipAddress });
    }
  }, [checked, shipAddress, updateCartState]);

  return (
    <Grid width={{ xs: '100%', md: '50%', lg: '60%' }} m="auto" p={10}>
      <Formik
        innerRef={formRef}
        onSubmit={checkoutUpdate}
        initialValues={{ shipAddress, billAddress }}
        validationSchema={deliveryAddressValidationSchema}
      >
        {() => {
          return (
            <Form>
              <DeliveryAddress isEditable={!!shipAddress} />
              <Grid mt={8}>
                <BillingAddress
                  isEditable={!isSame && !billAddress}
                  checked={checked}
                  onChange={handleBillingAddressChange}
                />
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
};
