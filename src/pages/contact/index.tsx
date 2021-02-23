import React, { useEffect } from 'react';
import useAuth from 'contexts/Authentication';

import { Navbar } from 'molecules/Navbar';
import { useIntl } from 'react-intl';
import { ContactView } from './organisms/ContactView';
import { Meta } from '../../atoms/Meta';

const Contact = () => {
  const {
    state: { isLoggedIn },
  } = useAuth();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const intl = useIntl();
  return (
    <>
      <Meta title={intl.formatMessage({ id: 'contact.title' })} />
      {/* navbar only for guest login */}
      {!isLoggedIn && <Navbar />}
      <ContactView />
    </>
  );
};
export default Contact;
