import React, { FC, useCallback } from 'react';
import { RouteComponentProps } from 'react-router';

import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import Footer from 'molecules/Footer';
import { Navbar } from 'molecules/Navbar';
import useAuth from 'contexts/Authentication';
import { ProductGrid } from 'molecules/ProductGrid';
import { Banner } from 'pages/shop/atoms/Banner/input';
import { useCategoryQuery } from 'generated/graphql-hooks';
import AddAllProductsToCart from 'organisms/AddAllProductsToCart';

import { ProductGridLoader } from './molecules/ProductGridLoader';

type SubCategoryParams = {
  categoryId: string;
};

/** currently unused */
const ProductListing: FC<RouteComponentProps<SubCategoryParams>> = ({ match }) => {
  const categoryId = match.params?.categoryId!;
  const {
    state: { isLoggedIn },
  } = useAuth();

  const { loading, data, error } = useCategoryQuery({
    variables: { categoryId },
  });

  const ProductList = useCallback(() => {
    if (loading) {
      return <ProductGridLoader />;
    }
    if (data?.category) {
      return <ProductGrid products={data?.category?.products!} heading={data?.category?.name!} />;
    }
    if (error) {
      return (
        <Text as="h3" variant="field">
          {error.message}
        </Text>
      );
    }
    return <></>;
  }, [loading, data, error]);

  return (
    <>
      {!isLoggedIn && <Navbar />}
      <Box bg="darklavender.500" height="100%">
        <Box bg="darklavender.600" maxWidth="92rem" px={{ xs: '0rem', md: '1.1rem' }} m="auto">
          {data?.category.promotionals?.length ? (
            <Banner
              id="banner.description"
              promotions={data?.category.promotionals}
              description={data?.category.description}
            />
          ) : null}
          {data?.category.addProductsAllowed && (
            <AddAllProductsToCart categoryId={data.category?.id || ''} />
          )}
          <ProductList />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProductListing;
