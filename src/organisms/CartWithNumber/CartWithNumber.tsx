import React, { useCallback } from 'react';
import { Cart, CartProps } from 'atoms/Cart';
import { useCartCountQuery } from 'generated/graphql-hooks';
import { Spinner } from 'atoms/Spinner';
import { showError } from 'utils/toast';
import useAuth from 'contexts/Authentication';

import { Box } from 'atoms/Box';
import { useHistory } from 'react-router';
import useGuest from '../GuestLoginModal/contexts/GuestContext';

type CartWithAdder = {} & CartProps;
export const CartWithAdder = (props: CartWithAdder) => {
  const {
    state: { isLoggedIn },
  } = useAuth();

  const {
    actions: { setLoginWarningState },
  } = useGuest();

  const history = useHistory();
  const { data, loading } = useCartCountQuery({ skip: !isLoggedIn });

  const handleClick = useCallback(() => {
    // If there is no cart, or items, just show the warning.
    if (isLoggedIn) {
      if (data?.cart?.itemCount) {
        history.push('/cart');
      } else {
        showError('cart.error.empty', true);
      }
    } else {
      setLoginWarningState(true);
    }
  }, [history, data, isLoggedIn, setLoginWarningState]);
  if (loading === true) {
    return (
      <Box height="2rem" width="2rem">
        <Spinner color="primary.500" />
      </Box>
    );
  }
  return <Cart {...props} number={data?.cart?.itemCount} onClick={handleClick} />;
};
