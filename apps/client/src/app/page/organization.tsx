import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Organization from '../templates/organization';
import * as AppStateOrganization from '~client/app/store/organization';
import * as EntitiesTeams from '~client/app/store/entities/teams';
import * as EntitiesMembers from '~client/app/store/entities/members';

import { teams, members } from './mock-data';

export const Component = () => {
  const dispatch = ReactRedux.useDispatch();
  dispatch(EntitiesTeams.actions.teamsReceived({ teams }));
  dispatch(EntitiesMembers.actions.membersReceived({ members }));

  const org = ReactRedux.useSelector(AppStateOrganization.organizationSelector);
  console.log(org);

  return <Organization.Component />;
};
