import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Organization from './organization';

export type State = {};

export const reducer = ReduxToolkit.combineReducers<State>({
  [Organization.featureKey]: Organization.reducer,
});
