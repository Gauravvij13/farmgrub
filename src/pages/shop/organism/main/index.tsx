import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useCategoriesQuery, useRootCategoryQuery } from 'generated/graphql-hooks';
import { ProductListGroup } from 'molecules/ProductListGroup';
import { ProductListLoader } from 'molecules/ProductListLoader';
import { Grid } from 'atoms/Grid';
import { Banner } from 'pages/shop/atoms/Banner/input';
import { Newsletter } from 'templates/Newsletter/Newsletter';
import { Meta } from '../../../../atoms/Meta';

const Main = () => {
  const { push } = useHistory();
  const { loading, data } = useCategoriesQuery({
    variables: {},
  });

  const { data: rootCategoryData, loading: rootCategoryLoading } = useRootCategoryQuery();

  const onViewAll = useCallback((id: number) => push(`/shop/t/${id}`), [push]);

  return (
    <>
      <Meta />
      <Banner
        id="banner.description"
        promotions={rootCategoryData?.rootCategory.promotionals}
        description={rootCategoryData?.rootCategory.description}
        loading={rootCategoryLoading}
      />
      {loading ? (
        <Grid gridGap="5rem" py="5rem">
          <ProductListLoader />
          <ProductListLoader />
          <ProductListLoader />
        </Grid>
      ) : (
        <ProductListGroup data={data?.categories} onViewAll={onViewAll} />
      )}
      <Newsletter />
    </>
  );
};
export default Main;
