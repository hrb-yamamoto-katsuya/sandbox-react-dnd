import * as ReduxToolkit from '@reduxjs/toolkit';
import * as Store from '~client/app/store';

const featureStateSelector = (state: Store.RootState) =>
  state.domain.organization.teams;

export const teamsSelector = ReduxToolkit.createSelector(
  featureStateSelector,
  (state) => state.teams
);

// export const teamsTreeSelector = ReduxToolkit.createSelector(
//   featureStateSelector,
//   (state) =>
//     state.teams.reduce((acc, current) => {
//       acc = [];
//       return acc;
//     }, [])
// );
