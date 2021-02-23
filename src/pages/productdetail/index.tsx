import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';

import { Loader } from 'molecules/Loader';
import { Navbar } from 'molecules/Navbar';
import { HomePage } from 'templates/HomePage';
import useAuth from 'contexts/Authentication';
import { ErrorPage } from 'molecules/ErrorPage';
import { useProductQuery } from 'generated/graphql-hooks';

import ProductDetailView from './organism';
import { Meta } from '../../atoms/Meta';

type ProductDetailParams = {
  id: string;
};
export const ProductDetail: FC<RouteComponentProps<ProductDetailParams>> = ({ match }) => {
  const { loading, data, error, refetch } = useProductQuery({
    variables: { id: match.params.id },
    fetchPolicy: 'cache-and-network',
  });
  const {
    state: { isLoggedIn },
  } = useAuth();

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
  if (data?.product) {
    return (
      <>
        {/* navbar only for guest login */}
        {!isLoggedIn && <Navbar />}

        <HomePage>
          <Meta
            title={data?.product?.metaTitle}
            description={data?.product?.metaDescription}
            keywords={data?.product?.metaKeywords}
          />
          <ProductDetailView data={data?.product} />
        </HomePage>
      </>
    );
  }
  return null;
};

export default ProductDetail;
