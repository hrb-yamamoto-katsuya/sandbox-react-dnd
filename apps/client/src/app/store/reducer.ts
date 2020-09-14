import * as ReduxToolkit from '@reduxjs/toolkit';

// import * as Application from './application';

export const createReducer = () => {
  const reducer = ReduxToolkit.combineReducers({
    // application: Application.reducer,
  });

  return { reducer };
};
