import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Teams from './teams';

export type State = {};

export const reducer = ReduxToolkit.combineReducers<State>({
  [Teams.featureKey]: Teams.reducer,
});
