import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Organization from '../templates/organization';
import * as DomainStateOrganization from '~client/app/store/domain/organization';

export const Component = () => {
  const org = ReactRedux.useSelector(
    DomainStateOrganization.organizationSelector
  );
  console.log(org);

  return <Organization.Component />;
};
