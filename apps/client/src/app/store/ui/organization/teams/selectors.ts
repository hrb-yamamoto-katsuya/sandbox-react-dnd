import * as ReduxToolkit from '@reduxjs/toolkit';
import * as Constants from './constants';
import * as Types from './types';

const featureStateSelector = (state: {
  [Constants.featureKey]: Types.InitialState;
}) => state[Constants.featureKey];

export const teamsSelector = ReduxToolkit.createSelector(
  featureStateSelector,
  (state) => state.teams
);
