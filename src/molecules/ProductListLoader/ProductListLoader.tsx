import React, { useCallback } from 'react';
import ContentLoader from 'react-content-loader';
import { ProductListContainer } from 'molecules/ProductList';
import { Box } from 'atoms/Box';

export const ProductLoader = () => {
  return (
    <Box
      height="17.5rem"
      width="13rem"
      border="1px solid"
      borderColor="pale.500"
      borderRadius=".4rem"
      backgroundColor="white"
      style={{ cursor: 'pointer' }}
    >
      <ContentLoader viewBox="0 0 130 175">
        <rect x="10" y="10" width="110" height="100" />
        <rect x="20" y="135" width="90" height="13" />
        <rect x="20" y="155" width="90" height="10" />
      </ContentLoader>
    </Box>
  );
};

export const ProductListLoader = ({ size }: { size?: number }) => {
  const renderContent = useCallback(() => {
    return Array(size)
      .fill(0)
      .map((_, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <ProductLoader key={index} />;
      });
  }, [size]);
  return (
    <ProductListContainer
      gridAutoFlow="column"
      justifyContent="start"
      gridColumnGap="8px"
      px="1.5rem"
    >
      {renderContent()}
    </ProductListContainer>
  );
};
ProductListLoader.defaultProps = {
  size: 7,
};
