import React, { MouseEvent, useRef, useCallback, useState, useEffect, useMemo } from 'react';
import { debounce } from 'lodash';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview/web';

import { Grid } from 'atoms/Grid';
import styled from 'styled-components';
import { Box, BoxProps } from 'atoms/Box';
import { ArrowButton } from 'atoms/ArrowButton';
import { Product } from 'generated/graphql-hooks';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { PurchasableProductListItem } from 'molecules/PurchasableProductListItem';

import { ProductListHeader } from './atoms/ProductListHeader';

type ProductListProps = {
  data?: Array<Product> | null;
  showViewAll?: boolean;
  heading?: string | null;
  onViewAll?(e: MouseEvent<HTMLDivElement>): void;
  category?: string | null;
};

const dataProvider = new DataProvider((r1: any, r2: any) => {
  return r1 !== r2;
});

export const ProductListContainer = styled(Grid)`
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-x: scroll;
  white-space: no-wrap;
`;

type ProductListGroupProps = {
  data?: Array<Product> | null;
};

const GridStyle = styled(Grid)<BoxProps>`
  .arrow-opacity {
    opacity: 0;
    & + div {
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
  &:hover,
  &:focus {
    .arrow-opacity {
      opacity: 1;
    }
  }
`;

const layoutProvider = new LayoutProvider(
  () => {
    return 0;
  },
  (_, dim) => {
    // eslint-disable-next-line no-param-reassign
    dim.width = 138;
    // eslint-disable-next-line no-param-reassign
    dim.height = 180;
  },
);

export const ProductListGroup = ({ data }: ProductListGroupProps) => {
  const scrollRef = useRef<any>();
  const [leftScrollPosition, setLeftScrollPosition] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollToOffset(leftScrollPosition, 0, true);
    }
  }, [leftScrollPosition]);

  /**
   * 276 px width slide two product cards at a time.
   */
  const handleLeftScroll = useCallback(() => {
    setLeftScrollPosition(prev => prev - 414);
  }, []);

  const handleRightScroll = useCallback(() => {
    setLeftScrollPosition(prev => prev + 414);
  }, []);

  const shouldShowRightArrow = useMemo(() => {
    if (scrollRef?.current) {
      /**
       * only show when position of view is less than scrollable width and content displayed on screen.
       */
      return (
        leftScrollPosition < scrollRef.current._virtualRenderer._layoutManager._totalWidth - 898
      );
    }
    return true;
  }, [leftScrollPosition]);

  const renderRow = (_: any, listData: any) => {
    return <PurchasableProductListItem product={listData} />;
  };

  const debouncedScroll = useMemo(() => debounce(setLeftScrollPosition, 1000), [
    setLeftScrollPosition,
  ]);

  const isDesktop = useMediaQuery('(min-width: 64rem)');
  const isTablet = useMediaQuery('(min-width: 45rem)');

  useEffect(() => {
    return debouncedScroll.cancel();
  }, [debouncedScroll]);

  const onScroll = useCallback(
    (_, x) => {
      debouncedScroll(x);
    },
    [debouncedScroll],
  );

  const list = useMemo(() => dataProvider.cloneWithRows(data || []), [data]);

  return (
    <GridStyle position="relative">
      {Array.isArray(data) && data?.length > 6 && (
        <Box
          position="absolute"
          width="100%"
          display={{ xs: 'none', md: 'flex' }}
          className="arrow-opacity"
        >
          {leftScrollPosition > 0 && (
            <ArrowButton
              left="0rem"
              top="7rem"
              onClick={handleLeftScroll}
              name="leftArrow"
              height="3rem"
              width="3rem"
            />
          )}
          {shouldShowRightArrow && (
            <ArrowButton
              right="1.6rem"
              top="7rem"
              onClick={handleRightScroll}
              name="rightArrow"
              height="3rem"
              width="3rem"
            />
          )}
        </Box>
      )}
      <RecyclerListView
        renderAheadOffset={100}
        isHorizontal
        rowRenderer={renderRow}
        dataProvider={list}
        ref={scrollRef}
        onScroll={onScroll}
        layoutProvider={layoutProvider}
        scrollViewProps={{
          style: {
            height: 190,
            width: isDesktop ? 883 : 703,
            maxWidth: `calc(100vw - ${isTablet ? 5.2 : 1.5}rem)`,
            overflow: 'auto hidden',
          },
        }}
      />
    </GridStyle>
  );
};
export const ProductList = ({ onViewAll, data, heading, category }: ProductListProps) => {
  return (
    <Grid pl="1.5rem" gridRowGap={5} maxWidth={{ xs: 718, xm: 898 }}>
      {heading && (
        <ProductListHeader
          heading={heading}
          category={category}
          onViewAll={Array.isArray(data) && data?.length > 10 ? onViewAll : undefined}
        />
      )}
      <ProductListGroup data={data} />
    </Grid>
  );
};
