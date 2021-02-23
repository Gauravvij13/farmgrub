import React, { FC } from 'react';

import { Redirect } from 'react-router-dom';

const IndexRedirect: FC = () => {
  /**
   *  TODO: IN case of company, index route becomes company/companyid -> and so on
   *  In case of admin, indexRedirect becomes admin/companies, have to check what user is logging in here.
   */

  const route = {
    to: '/shop/main',
  };

  return <Redirect to={route.to} />;
};

export default IndexRedirect;
