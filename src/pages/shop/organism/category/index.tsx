import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';

import { Grid } from 'atoms/Grid';
import { Banner } from 'pages/shop/atoms/Banner/input';
import { useCategoryQuery } from 'generated/graphql-hooks';
import { ProductListLoader } from 'molecules/ProductListLoader';

import { ProductGrid } from '../../../../molecules/ProductGrid';
import { Meta } from '../../../../atoms/Meta';

type CategoryParams = {
  categoryId?: string;
};
const CategoryProductGrid: FC<RouteComponentProps<CategoryParams>> = ({ match }) => {
  const categoryId = match.params?.categoryId!;
  const { loading, data } = useCategoryQuery({
    variables: { categoryId },
  });

  return (
    <>
      <Meta
        title={data?.category?.metaTitle}
        description={data?.category?.metaDescription}
        keywords={data?.category?.metaKeywords}
      />
      {data?.category.promotionals?.length ? (
        <Banner
          id="banner.description"
          promotions={data?.category.promotionals}
          description={data?.category.description}
        />
      ) : null}
      {loading ? (
        <Grid gridGap="5rem" py="5rem">
          <ProductListLoader />
          <ProductListLoader />
          <ProductListLoader />
        </Grid>
      ) : (
        <ProductGrid products={data?.category?.products!} heading={data?.category?.name!} />
      )}
    </>
  );
};
export default CategoryProductGrid;
