import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Member from './member';

export type State = {};

export const reducer = ReduxToolkit.combineReducers<State>({
  [Member.featureKey]: Member.reducer,
});
