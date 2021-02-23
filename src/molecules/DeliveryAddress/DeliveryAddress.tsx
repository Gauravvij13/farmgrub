import React, { useState, useCallback, useEffect } from 'react';
import { Box } from 'atoms/Box';
import { useFormikContext } from 'formik';
import { EditableInfo } from 'pages/cart/organisms/CartView/atoms/EditableField/EditableInfo';
import useCart from 'pages/cart/context/CartContext';
import { AddressFormType } from 'typings/cartitems';
import DeliveryAddressForm from './components/DeliveryAddressForm';

type DeliveryAddressProps = {
  isEditable?: boolean;
};

let initialValues: Partial<AddressFormType['shipAddress']> = {};

export const DeliveryAddress = ({ isEditable }: DeliveryAddressProps) => {
  const {
    state: { shipAddress },
  } = useCart();

  const [deliveryForm, showDeliveryForm] = useState(!isEditable);
  const { setFieldValue, values } = useFormikContext<AddressFormType>();

  const resetDeliveryInfo = useCallback(() => {
    setFieldValue('shipAddress.address1', initialValues?.address1);
    setFieldValue('shipAddress.city', initialValues?.city);
    setFieldValue('shipAddress.zipcode', initialValues?.zipcode);
    setFieldValue('shipAddress.phone', initialValues?.phone);
  }, [setFieldValue]);

  const closeForm = useCallback(() => {
    showDeliveryForm(false);
    resetDeliveryInfo();
  }, [showDeliveryForm, resetDeliveryInfo]);

  const openForm = useCallback(() => {
    showDeliveryForm(true);
    initialValues = { ...values.shipAddress };
  }, [showDeliveryForm, values.shipAddress]);

  useEffect(() => {
    if (deliveryForm) {
      resetDeliveryInfo();
    }
  }, [resetDeliveryInfo, deliveryForm]);

  return (
    <Box>
      {deliveryForm ? (
        <DeliveryAddressForm onClick={closeForm} closeButton={isEditable} />
      ) : (
        <EditableInfo
          subDetail={`${shipAddress?.address1}, ${shipAddress?.city}, ${shipAddress?.zipcode}`}
          heading="delivery.address.heading"
          alignment="vertical"
          phoneNo={shipAddress?.phone}
          onClick={openForm}
        />
      )}
    </Box>
  );
};
