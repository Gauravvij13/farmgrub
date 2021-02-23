import React from 'react';
import { ProductList } from 'molecules/ProductList';
import { ErrorPage } from 'molecules/ErrorPage';

import { useSimilarProductsQuery } from 'generated/graphql-hooks';
import { ProductListLoader } from 'molecules/ProductListLoader';

type SimilarProductsProps = {
  productId: string;
};

export const SimilarProducts = ({ productId }: SimilarProductsProps) => {
  const { loading, data, error, refetch } = useSimilarProductsQuery({
    variables: { productId },
  });
  if (loading) {
    return <ProductListLoader />;
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
  if (data?.similarProducts) {
    return <ProductList data={data.similarProducts} />;
  }
  return null;
};
