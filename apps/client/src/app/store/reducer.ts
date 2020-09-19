import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Entities from './entities';
import * as Organization from './organization';

export const createReducer = () => {
  const reducer = ReduxToolkit.combineReducers({
    [Entities.featureKey]: Entities.reducer,
    [Organization.featureKey]: Organization.reducer,
  });

  return { reducer };
};
