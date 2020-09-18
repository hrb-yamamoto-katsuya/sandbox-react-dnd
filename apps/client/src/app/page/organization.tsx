import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Organization from '../templates/organization';
import * as DomainStateOrganization from '~client/app/store/domain/organization';
import * as DomainStateOrganizationTeams from '~client/app/store/domain/organization/teams';
import * as DomainStateOrganizationMembers from '~client/app/store/domain/organization/members';

import { teams, members } from './mock-data';

export const Component = () => {
  const dispatch = ReactRedux.useDispatch();
  dispatch(DomainStateOrganizationTeams.actions.teamsReceived({ teams }));
  dispatch(DomainStateOrganizationMembers.actions.membersReceived({ members }));

  const org = ReactRedux.useSelector(
    DomainStateOrganization.organizationSelector
  );
  console.log(org);

  return <Organization.Component />;
};
