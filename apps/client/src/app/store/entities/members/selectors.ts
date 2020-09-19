import * as ReduxToolkit from '@reduxjs/toolkit';
import * as Store from '~client/app/store';

import * as Slice from './slice';

const { selectAll, selectEntities } = Slice.adapter.getSelectors();

const featureStateSelector = (state: Store.RootState) => state.entities.members;

export const membersSelector = ReduxToolkit.createSelector(
  featureStateSelector,
  selectAll
);
