import React, { FC, ReactNode } from 'react';
import { TabList } from 'molecules/TabList';
import { Box } from 'atoms/Box';
import { useQuery } from '@apollo/react-hooks';
import { TAB_LIST_QUERY, TabListQueryType } from 'graphql/queries';
import Footer from 'molecules/Footer';
import { Grid } from 'atoms/Grid';
import { Meta } from '../../atoms/Meta';

type HomePageProps = {
  children?: ReactNode;
};

export const HomePage: FC<HomePageProps> = ({ children }) => {
  const { data: tabListData } = useQuery<TabListQueryType>(TAB_LIST_QUERY);
  const meta = {
    title: '',
    description:
      'Locally grown groceries, same day delivery. Vegetables, fruit, bread, meat, milk, eggs, sides, snacks, drinks, desserts, and more...',
    keywords:
      'food, delivery, home, curbside, grocery, groceries, vegetables, organic, prime, 2, hour, walmart, pick-up, fruit, eggs, milk, CSA, farm, box, amazon, same, day, today, hub, grub, insta, cart, instacart',
  };
  return (
    <Box>
      <Meta {...meta} />
      <Grid backgroundColor="offwhite.500" minHeight="calc(100vh - 5.4rem)" height="100%">
        {tabListData?.categories?.length && (
          <Box height="4.4rem">
            <Box
              position="fixed"
              top="5.4rem"
              zIndex={2}
              width={{ xs: '100vw', md: '71.8rem', xm: '89.8rem' }}
            >
              <TabList data={tabListData?.categories ?? []} />
            </Box>
          </Box>
        )}
        {children || null}

        <Footer />
      </Grid>
    </Box>
  );
};
