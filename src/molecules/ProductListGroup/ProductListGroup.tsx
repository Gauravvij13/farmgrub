import React, { useCallback, useMemo, FC } from 'react';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview/web';

import { Grid } from 'atoms/Grid';
import css from '@styled-system/css';
import styled from 'styled-components';
import { Taxon } from 'generated/graphql-hooks';
import ErrorBoundary from 'utils/ErrorBoundary';
import { ProductList } from 'molecules/ProductList';

const StyledGrid = styled(Grid)(
  css({
    '& > div > div': { width: '898px !important', '& > div': { minWidth: '92rem !important' } },
  }),
);

interface ProductListGroupProps {
  data?: Taxon[];
  onViewAll?: Function;
}

const dataProvider = new DataProvider((r1: any, r2: any) => {
  return r1 !== r2;
});

const layoutProvider = new LayoutProvider(
  () => {
    return 0;
  },
  (_, dim) => {
    // eslint-disable-next-line no-param-reassign
    dim.width = 3000;
    // eslint-disable-next-line no-param-reassign
    dim.height = 235;
  },
);

export const ProductListGroup: FC<ProductListGroupProps> = ({ data, onViewAll }) => {
  const handleShowViewAll = useCallback(
    (id: string) => () => {
      if (typeof onViewAll === 'function') {
        onViewAll(id);
      }
    },
    [onViewAll],
  );

  const renderRow = (_: any, listData: any) => {
    return (
      <ProductList
        onViewAll={handleShowViewAll(listData?.id!)}
        data={listData?.products}
        heading={listData?.name}
        category={listData.id}
      />
    );
  };

  const list = useMemo(
    () => dataProvider.cloneWithRows(data?.filter((elm: Taxon) => elm.products.length !== 0) || []),
    [data],
  );

  return (
    <StyledGrid
      py="2rem"
      gridGap="3rem"
      gridAutoRows="min-content"
      height="100%"
      justifyItems="start"
      maxWidth={{ xs: '100vw', md: '71.8rem', xm: '89.8rem' }}
      overflowX="hidden"
    >
      <ErrorBoundary>
        <RecyclerListView
          disableRecycling
          renderAheadOffset={700}
          layoutSize={235}
          rowRenderer={renderRow}
          dataProvider={list}
          layoutProvider={layoutProvider}
          useWindowScroll
          style={{ width: 898 }}
        />
      </ErrorBoundary>
    </StyledGrid>
  );
};

ProductListGroup.defaultProps = {
  data: [],
};
