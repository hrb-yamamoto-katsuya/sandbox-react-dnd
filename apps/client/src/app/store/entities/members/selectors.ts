import * as ReduxToolkit from '@reduxjs/toolkit';
import * as Store from '~client/app/store';

import * as Slice from './slice';

const adapterSelector = Slice.adapter.getSelectors();

const featureStateSelector = (state: Store.RootState) => state.entities.members;

export const membersSelector = ReduxToolkit.createSelector(
  featureStateSelector,
  adapterSelector.selectAll
);

type MembersByTeamId = {
  [teamId: string]: ReturnType<typeof membersSelector>;
};

export const membersByTeamIdSelector = ReduxToolkit.createSelector(
  membersSelector,
  (members) =>
    members.reduce<MembersByTeamId>((acc, current) => {
      if (acc[current.teamId] === undefined) acc[current.teamId] = [];

      acc[current.teamId] = [...acc[current.teamId], current];

      return acc;
    }, {})
);
