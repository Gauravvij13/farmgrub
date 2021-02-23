import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import { Grid } from 'atoms/Grid';
import { Meta } from 'atoms/Meta';
import { ProductGrid } from 'molecules/ProductGrid';
import { Banner } from 'pages/shop/atoms/Banner/input';
import { useCategoryQuery } from 'generated/graphql-hooks';
import { ProductListGroup } from 'molecules/ProductListGroup';
import { ProductListLoader } from 'molecules/ProductListLoader';
import AddAllProductsToCart from 'organisms/AddAllProductsToCart';

type CategoryParams = {
  categoryId?: string;
};
const SubCategoryView: FC<RouteComponentProps<CategoryParams>> = ({ match }) => {
  const history = useHistory();
  const categoryId = match.params?.categoryId!;
  const { loading, data } = useCategoryQuery({
    variables: { categoryId },
  });

  if (loading) {
    return (
      <Grid gridGap="5rem" py="5rem">
        <ProductListLoader />
        <ProductListLoader />
        <ProductListLoader />
      </Grid>
    );
  }

  if (data?.category?.hasChildren) {
    return (
      <>
        <Meta
          title={data?.category?.metaTitle}
          description={data?.category?.metaDescription}
          keywords={data?.category?.metaKeywords}
        />
        {data?.category?.promotionals?.length ? (
          <Banner
            id="banner.description"
            promotions={data?.category?.promotionals}
            description={data?.category.description}
          />
        ) : null}
        {data?.category.addProductsAllowed && (
          <AddAllProductsToCart categoryId={data.category?.id || ''} />
        )}
        {data?.category?.products?.length ? (
          <ProductListGroup
            data={[data?.category]}
            onViewAll={(id: number) => history.push(`/shop/t/${id}/all`)}
          />
        ) : null}
        {data?.category?.descendants?.length ? (
          <ProductListGroup
            data={data?.category?.descendants}
            onViewAll={(id: number) => history.push(`/shop/t/${id}`)}
          />
        ) : null}
      </>
    );
  }

  return (
    <>
      {data?.category?.promotionals?.length ? (
        <Banner
          id="banner.description"
          promotions={data?.category?.promotionals}
          description={data?.category.description}
        />
      ) : null}
      {data?.category.addProductsAllowed && (
        <AddAllProductsToCart categoryId={data.category?.id || ''} />
      )}
      <ProductGrid products={data?.category?.products!} heading={data?.category?.name!} />
    </>
  );
};
export default SubCategoryView;
