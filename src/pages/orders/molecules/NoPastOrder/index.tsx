import React from 'react';
import { ErrorPage } from 'molecules/ErrorPage';
import { useHistory } from 'react-router-dom';

export const NoPastOrder = () => {
  const history = useHistory();
  const handleNoOrder = () => {
    history.push('/shop/main');
  };

  return (
    <ErrorPage
      message="no.past.order.heading"
      description="no.past.order.subheading"
      onRetry={handleNoOrder}
      title="no.past.order.shopping"
    />
  );
};
