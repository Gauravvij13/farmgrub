import React, { useMemo } from 'react';

import { Box } from 'atoms/Box';
import { Grid } from 'atoms/Grid';
import { CartTotal } from 'molecules/CartTotal';
import { CartPriceDetail } from 'molecules/CartPriceDetail';
import { CartDiscountDetail } from 'molecules/CartDiscountDetail';
import { Adjustment, PromotionAction } from 'generated/graphql-hooks';

export type CartPaymentTotalProps = {
  merchandiseSubTotal?: string | number | null;
  merchandiseTotal?: string | number | null;
  shipping?: number | null;
  salestax?: number | null;
  deliveryTip?: number | null;
  donation?: number | null;
  total?: number | null;
  adjustments?: Array<Pick<Adjustment, 'id' | 'amount'> & { source?: PromotionAction | null }>;
  shipmentAdjustments?: Array<
    Pick<Adjustment, 'id' | 'amount'> & { source?: PromotionAction | null }
  >;
};

export const CartPaymentTotal = ({
  merchandiseSubTotal,
  merchandiseTotal,
  shipping,
  salestax,
  deliveryTip,
  donation,
  total,
  adjustments,
  shipmentAdjustments,
}: CartPaymentTotalProps) => {
  const merchandiseDiscount = useMemo(
    () => Number(merchandiseSubTotal) - Number(merchandiseTotal),
    [merchandiseSubTotal, merchandiseTotal],
  );

  return (
    <Box width={{ md: '60%' }} mx={{ md: 'auto' }}>
      <Grid gridAutoFlow="columns" py="1.4rem">
        {Math.abs(merchandiseDiscount) > 0 && (
          <>
            <CartPriceDetail id="cart.subtotal.merchandise" amount={merchandiseSubTotal} />
            <CartDiscountDetail
              name="Merchandise Promotion(s)"
              amount={Math.abs(merchandiseDiscount)}
            />
            <Box borderBottom="1px solid" my={2} />
          </>
        )}
        <CartPriceDetail id="cart.total.merchandise" amount={merchandiseTotal} />
        {adjustments?.map(adjustment => (
          <CartDiscountDetail
            name={adjustment?.source?.promotion?.name || 'Discount'}
            amount={Math.abs(adjustment.amount)}
            key={adjustment.id!!}
          />
        ))}
        <CartPriceDetail id="cart.total.salestax" amount={salestax} />
        <CartPriceDetail id="cart.total.shipping" amount={shipping || 'TBD'} isText={!shipping} />
        {!!shipping &&
          shipmentAdjustments?.map(adjustment => (
            <CartDiscountDetail
              name={adjustment?.source?.promotion?.name || 'Discount'}
              amount={Math.abs(adjustment.amount)}
              key={adjustment.id!!}
            />
          ))}
        <CartPriceDetail
          id="cart.total.deliverytip"
          amount={deliveryTip ?? 'TBD'}
          isText={deliveryTip === undefined}
        />
        {donation ? <CartPriceDetail id="cart.total.roundup" amount={donation} /> : null}
        <CartTotal id={shipping ? 'cart.total.total' : 'cart.total.subtotal'} amount={total} />
      </Grid>
    </Box>
  );
};
