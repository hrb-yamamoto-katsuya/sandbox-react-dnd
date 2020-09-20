import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Organization from '../templates/organization';

import * as EntitiesTeams from '~client/app/store/entities/teams';
import * as EntitiesMembers from '~client/app/store/entities/members';

import * as AppStateOrganization from '~client/app/store/organization';
import * as OrganizationEntity from '~client/app/application/organization/entity';

import * as MockData from './mock-data';

export const Component = () => {
  const dispatch = ReactRedux.useDispatch();
  dispatch(EntitiesTeams.actions.teamsReceived({ teams: MockData.teams }));
  dispatch(
    EntitiesMembers.actions.membersReceived({ members: MockData.members })
  );

  const teams = ReactRedux.useSelector(EntitiesTeams.teamsSelector);
  const membersByTeamId = ReactRedux.useSelector(
    EntitiesMembers.membersByTeamIdSelector
  );
  const { tree } = OrganizationEntity.getOrganizationTree(
    teams,
    membersByTeamId
  );
  // dispatch(
  //   AppStateOrganization.actions.updateOrganizationTree({
  //     teams,
  //     members: membersByTeamId,
  //   })
  // );
  console.log('tree', [tree]);

  return <Organization.Component />;
};
