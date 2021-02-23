import React, { useEffect } from 'react';
import { useSuppliersQuery } from 'generated/graphql-hooks';

import Footer from 'molecules/Footer';
import { Loader } from 'molecules/Loader';
import { Navbar } from 'molecules/Navbar';
import useAuth from 'contexts/Authentication';
import { ErrorPage } from 'molecules/ErrorPage';
import { useIntl } from 'react-intl';
import { FarmView } from './organisms/FarmView';
import { Meta } from '../../atoms/Meta';

const Farms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    state: { isLoggedIn },
  } = useAuth();

  const { data, loading, error, refetch } = useSuppliersQuery();
  const intl = useIntl();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <ErrorPage
        message="error.sorry"
        description="error.wrong"
        onRetry={refetch}
        title="try.again"
      />
    );
  }
  if (Array.isArray(data?.suppliers)) {
    return (
      <>
        <Meta
          title={intl.formatMessage({ id: 'farms.title' })}
          description={intl.formatMessage({ id: 'farms.description' })}
        />
        {/* navbar only for guest login */}
        {!isLoggedIn && <Navbar />}
        <FarmView data={data?.suppliers} />
        <Footer />
      </>
    );
  }
  return null;
};
export default Farms;
