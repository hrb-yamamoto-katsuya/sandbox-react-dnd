import * as ReduxToolkit from '@reduxjs/toolkit';
import * as Store from '~client/app/store';

import * as Slice from './slice';

import * as MembersEntity from '~client/app/application/domain/members/entity';

const adapterSelector = Slice.adapter.getSelectors();

const featureStateSelector = (state: Store.RootState) => state.entities.members;

export const membersSelector = ReduxToolkit.createSelector(
  featureStateSelector,
  adapterSelector.selectAll
);

type MembersByTeamId = {
  [teamId: string]: ReturnType<typeof membersSelector>;
};

const membersByTeamIdSelector = ReduxToolkit.createSelector(
  membersSelector,
  (members) =>
    members.reduce<MembersByTeamId>((acc, current) => {
      if (acc[current.teamId] === undefined) acc[current.teamId] = [];

      acc[current.teamId] = [...acc[current.teamId], current];

      return acc;
    }, {})
);

export const teamsMemberSelector = (teamId: MembersEntity.Member['teamId']) =>
  ReduxToolkit.createSelector(
    membersByTeamIdSelector,
    (state) => state[teamId]
  );
