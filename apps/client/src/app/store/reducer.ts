import * as ReduxToolkit from '@reduxjs/toolkit';

import * as UI from './ui';

export const createReducer = () => {
  const reducer = ReduxToolkit.combineReducers({
    ui: UI.reducer,
  });

  return { reducer };
};
