import React from 'react';

import { OrderStatusInfo } from 'pages/orders/molecules/OrderStatusInfo';
import { LocaleString } from 'locales';

type OrderStatusInfoListType = {
  state?: string | null;
  deliveryDate?: string | null;
  billAddress?: string | null;
  displayTime?: string | null;
  phone?: string | null;
  specialInstructions?: string | null;
  shipAddress?: string | null;
  cardType?: string | null;
  lastDigits?: string | null;
  driverTip: number | null;
  onEdit?: (arg0: LocaleString) => void;
};

export const OrderStatusInfoList = ({
  state,
  deliveryDate,
  billAddress,
  phone,
  lastDigits,
  cardType,
  specialInstructions,
  shipAddress,
  driverTip,
  onEdit,
  displayTime,
}: OrderStatusInfoListType) => {
  return (
    <>
      {state && (
        <OrderStatusInfo
          onEdit={onEdit}
          heading="order.detail.delivery.status.heading"
          subDetail={state}
        />
      )}
      <OrderStatusInfo
        onEdit={onEdit}
        heading="order.detail.delivery.address.heading"
        subDetail={shipAddress}
        phoneNo={phone}
      />
      <OrderStatusInfo
        onEdit={onEdit}
        heading="order.detail.billing.address.heading"
        subDetail={billAddress}
        phoneNo={phone}
      />
      {deliveryDate && (
        <OrderStatusInfo
          onEdit={onEdit}
          heading="order.detail.delivery.date.heading"
          date={deliveryDate!}
          displayTime={displayTime}
        />
      )}
      <OrderStatusInfo
        onEdit={onEdit}
        heading="order.detail.delivery.additional.info.heading"
        subDetail={specialInstructions}
      />
      <OrderStatusInfo
        onEdit={onEdit}
        heading="order.detail.delivery.payment.method.heading"
        cardType={cardType}
        lastDigits={lastDigits}
        showCardIcon
      />
      <OrderStatusInfo
        onEdit={onEdit}
        heading="order.detail.delivery.driver.tip.heading"
        subDetail={`$${driverTip?.toFixed(2)}`}
      />
    </>
  );
};
