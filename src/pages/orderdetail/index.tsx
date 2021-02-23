import React, { FC, useMemo } from 'react';
import { useParams } from 'react-router';

import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { Grid } from 'atoms/Grid';
import { BackButton } from 'atoms/BackButton';
import { ErrorPage } from 'molecules/ErrorPage';
import { Loader } from 'molecules/Loader/Loader';
import { OrderItemList } from 'pages/orderdetail/molecules/OrderItemList';
import { CartPaymentTotal } from 'molecules/CartPaymentTotal/CartPaymentTotal';
import { OrderStatusInfoList } from 'pages/orderdetail/molecules/OrderStatusInfoList';
import { useOrderQuery, CreditCard, Adjustment, PromotionAction } from 'generated/graphql-hooks';

type OrderDetailParams = {
  id: string;
};

type AdjustmentType = Array<
  Pick<Adjustment, 'id' | 'amount'> & {
    source?: PromotionAction | null;
  }
>;

const OrderDetail: FC<OrderDetailParams> = () => {
  const { id: paramsId } = useParams();

  const { data, error, loading, refetch } = useOrderQuery({
    variables: { id: paramsId || '' },
  });

  const paymentDetails = useMemo(() => {
    const cardData = data?.order?.payments?.filter(payment => payment.state !== 'invalid');
    const card = cardData?.length ? cardData?.[cardData.length - 1]?.source : undefined;
    return card as CreditCard | undefined;
  }, [data]);

  const adjustments = useMemo(
    () =>
      data?.order?.adjustments?.filter(
        adjustment =>
          adjustment.eligible === true && adjustment.source?.__typename === 'PromotionAction',
      ) || [],
    [data],
  );

  const shipmentAdjustments = useMemo(
    () =>
      data?.order?.shipmentAdjustments?.filter(
        adjustment =>
          adjustment.eligible === true && adjustment.source?.__typename === 'PromotionAction',
      ) || [],
    [data],
  );

  const displayTimeSlot = useMemo(() => {
    if (data) {
      const orders = data.order;
      if (Array.isArray(orders?.shipments) && orders.shipments?.length > 0) {
        return orders.shipments[0]?.deliverySlot?.displayTime;
      }
      return null;
    }
    return null;
  }, [data]);

  const renderContent = () => {
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return (
        <ErrorPage
          message="error.sorry"
          description="error.wrong"
          onRetry={refetch}
          title="try.again"
        />
      );
    }

    if (data) {
      return (
        <>
          <Box pt="1.6rem">
            <Grid pb={15} px="1.6rem">
              <BackButton top={0} />
              <Text
                variant="body"
                id="order.detail.back.to.order"
                color="steelgrey.500"
                left={27}
                top={-6}
                mb={0}
                width="90%"
              />
            </Grid>
            <Text as="h3" variant="headingBold" fontWeight="bold" color="secondary.500" px="1.6rem">
              Order #{data?.order?.number!}
            </Text>
            <OrderStatusInfoList
              state={data?.order?.state}
              deliveryDate={data?.order?.shipments?.[0]?.requestedDeliveryDate || ''}
              displayTime={displayTimeSlot}
              driverTip={data?.order?.driverTipTotal!}
              phone={data?.order?.shipAddress?.phone}
              specialInstructions={data?.order?.specialInstructions || '-'}
              shipAddress={`${data?.order?.shipAddress?.address1}, ${data?.order?.shipAddress?.city}, ${data?.order?.shipAddress?.zipcode}`}
              billAddress={`${data?.order?.billAddress?.address1}, ${data?.order?.billAddress?.city}, ${data?.order?.billAddress?.zipcode}`}
              lastDigits={paymentDetails?.lastDigits}
              cardType={paymentDetails?.ccType}
            />
            <Box px="1.6rem">
              <Text variant="body" id="order.detail.total.items.heading" py={5} />
              <OrderItemList data={data?.order?.lineItems} />
            </Box>
          </Box>
          <Box bg="offwhite.500">
            <CartPaymentTotal
              merchandiseSubTotal={data?.order?.merchandiseTotal!}
              merchandiseTotal={data?.order?.preTaxAmount!}
              shipping={data?.order?.shipping}
              salestax={data?.order?.salesTax}
              donation={data?.order?.charitableContributionTotal}
              total={data?.order?.total}
              deliveryTip={data?.order?.driverTipTotal!}
              adjustments={adjustments as AdjustmentType}
              shipmentAdjustments={shipmentAdjustments as AdjustmentType}
            />
          </Box>
        </>
      );
    }
    return null;
  };

  return <>{renderContent()}</>;
};

export default OrderDetail;
