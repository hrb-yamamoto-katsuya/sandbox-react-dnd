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

  dispatch(EntitiesTeams.actions.addTeams(MockData.teams));
  dispatch(EntitiesMembers.actions.addMembers(MockData.members));

  const teams = ReactRedux.useSelector(EntitiesTeams.teamsSelector);
  const membersByTeamId = ReactRedux.useSelector(
    EntitiesMembers.membersByTeamIdSelector
  );

  console.log('teams', teams);
  console.log('membersByTeamId', membersByTeamId);

  dispatch(
    AppStateOrganization.actions.updateOrganizationTree({
      teams,
      members: membersByTeamId,
    })
  );
  // const org = ReactRedux.useSelector(AppStateOrganization.featureStateSelector);
  // console.log('org', org);

  const { tree } = OrganizationEntity.getOrganizationTree(
    teams,
    membersByTeamId
  );

  console.log('tree', [tree]);

  React.useEffect(() => {
    dispatch(
      EntitiesTeams.actions.addTeam({
        id: 100,
        name: 'team-100',
        parentTeamId: 0,
      })
    );
    dispatch(
      EntitiesMembers.actions.addMember({
        id: 'aaaaaaaaaaaaaaaaaaaaaaaaa',
        name: 'tyankatsu',
        src: 'a',
        teamId: 100,
      })
    );
  }, [dispatch]);

  return <Organization.Component />;
};
