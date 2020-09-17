import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Team from './team';
import * as Member from './member';

export type State = {};

export const reducer = ReduxToolkit.combineReducers<State>({
  [Team.featureKey]: Team.reducer,
  [Member.featureKey]: Member.reducer,
});
