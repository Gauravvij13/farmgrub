import React, { useEffect } from 'react';

import { Box } from 'atoms/Box';
import Footer from 'molecules/Footer';
import useAuth from 'contexts/Authentication';

import { Navbar } from 'molecules/Navbar';
import { useIntl } from 'react-intl';
import { PreLaunch } from './organisms/PreLaunch';
import { Meta } from '../../atoms/Meta';
// import { PostLaunch } from './organisms/PostLaunch';

const Mission = () => {
  const {
    state: { isLoggedIn },
  } = useAuth();

  const intl = useIntl();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta title={intl.formatMessage({ id: 'mission.title' })} />
      {/* navbar only for guest login */}
      {!isLoggedIn && <Navbar />}
      <Box minHeight={{ xs: '100%', md: '100vh' }}>
        <PreLaunch />
        {/* <PostLaunch /> */}
      </Box>
      <Footer />
    </>
  );
};
export default Mission;
