import * as ReduxToolkit from '@reduxjs/toolkit';
import * as Store from '~client/app/store';

import * as Slice from './slice';

const adapterSelector = Slice.adapter.getSelectors();

const featureStateSelector = (state: Store.RootState) => state.entities.teams;

export const teamsSelector = ReduxToolkit.createSelector(
  featureStateSelector,
  adapterSelector.selectAll
);
