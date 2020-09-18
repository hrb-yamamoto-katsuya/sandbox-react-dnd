import * as ReduxToolkit from '@reduxjs/toolkit';
import * as Store from '~client/app/store';

const featureStateSelector = (state: Store.RootState) =>
  state.domain.organization.members;

export const membersSelector = ReduxToolkit.createSelector(
  featureStateSelector,
  (state) => state.members
);
