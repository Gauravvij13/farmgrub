import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useIntl } from 'react-intl';

import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { Grid } from 'atoms/Grid';
import Footer from 'molecules/Footer';
import { Spinner } from 'atoms/Spinner';
import { Navbar } from 'molecules/Navbar';
import useAuth from 'contexts/Authentication';
import { ProductGrid } from 'molecules/ProductGrid';
import { useSearchQuery } from 'hooks/useSearchQuery';
import { useProductSearchQuery } from 'generated/graphql-hooks';
import { ProductGridHeader } from 'molecules/ProductGrid/atoms/ProductGridHeader';

import { Meta } from '../../atoms/Meta';
import { ProductGridLoader } from './molecules/ProductGridLoader';

type ProductSearchListingProps = {};

const ProductSearchListing: FC<ProductSearchListingProps> = () => {
  const {
    state: { isLoggedIn },
  } = useAuth();

  const query = useSearchQuery();
  const { loading, data, error, fetchMore } = useProductSearchQuery({
    variables: { query, limit: 30, offset: 0 },
  });
  const intl = useIntl();

  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const isBottom = useCallback((el: any) => {
    if (el) {
      return el.getBoundingClientRect().bottom <= window.innerHeight;
    }
    return false;
  }, []);

  const trackScrolling = useCallback(() => {
    const wrappedElement = ref.current;
    if (isBottom(wrappedElement)) {
      setFetchMoreLoading(true);
      fetchMore({
        updateQuery: (prevData, { fetchMoreResult }) => {
          setFetchMoreLoading(false);
          return {
            productSearch: [
              ...(prevData?.productSearch || []),
              ...(fetchMoreResult?.productSearch || []),
            ],
          };
        },
        variables: { query, limit: 30, offset: data?.productSearch?.length },
      });
      document.removeEventListener('scroll', trackScrolling);
    }
  }, [isBottom, fetchMore, query, data]);

  useEffect(() => {
    document.addEventListener('scroll', trackScrolling);
    return () => {
      document.removeEventListener('scroll', trackScrolling);
    };
  }, [trackScrolling]);

  const ProductList = useMemo(() => {
    if (loading) {
      return <ProductGridLoader />;
    }
    if (data?.productSearch && data?.productSearch.length) {
      return (
        <Grid ref={ref}>
          <ProductGrid products={data?.productSearch} heading="Search Result" />
          {fetchMoreLoading && (
            <Box height={6} width={6} justifySelf="center">
              <Spinner color="primary.500" />
            </Box>
          )}
        </Grid>
      );
    }
    if (data?.productSearch || error) {
      return (
        <Box bg="offwhite.0">
          <Grid px="1.5rem" paddingTop="1.5rem" gridRowGap="1rem">
            <ProductGridHeader heading="Search Result" />
            <Text id="noresultfound" values={{ search: query }} variant="field" />
          </Grid>
        </Box>
      );
    }
    return <div />;
  }, [loading, data, error, query, fetchMoreLoading]);

  return (
    <>
      <Meta title={intl.formatMessage({ id: 'search.title' })} />
      {/* navbar only for guest login */}
      {!isLoggedIn && <Navbar />}
      <Grid
        bg="offwhite.0"
        maxWidth="92rem"
        px={{ xs: '0rem', md: '0rem' }}
        m="auto"
        minHeight="calc(100vh - 5.4rem)"
        gridTemplateRows="1fr auto"
        gridGap={10}
      >
        {ProductList}
        <Footer />
      </Grid>
    </>
  );
};

export default ProductSearchListing;
