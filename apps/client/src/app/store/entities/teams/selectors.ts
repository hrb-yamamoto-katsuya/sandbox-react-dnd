import * as ReduxToolkit from '@reduxjs/toolkit';
import * as Store from '~client/app/store';

import * as Slice from './slice';

const { selectAll, selectEntities } = Slice.adapter.getSelectors();

const featureStateSelector = (state: Store.RootState) => state.entities.teams;

export const teamsSelector = ReduxToolkit.createSelector(
  featureStateSelector,
  (state) => state.entities
);

export const membersSelector = ReduxToolkit.createSelector(
  featureStateSelector,
  selectAll
);

// export const teamsTreeSelector = ReduxToolkit.createSelector(
//   featureStateSelector,
//   (state) =>
//     state.teams.reduce((acc, current) => {
//       acc = [];
//       return acc;
//     }, [])
// );
