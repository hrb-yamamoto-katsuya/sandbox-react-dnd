import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Teams from './teams';
import * as Members from './members';

export type State = {};

export const reducer = ReduxToolkit.combineReducers<State>({
  [Teams.featureKey]: Teams.reducer,
  [Members.featureKey]: Members.reducer,
});
