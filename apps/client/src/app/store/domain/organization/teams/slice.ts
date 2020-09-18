import * as ReduxToolkit from '@reduxjs/toolkit';

import Status from '~client/app/store/status';

import * as Constants from './constants';
import * as Types from './types';

import { teams } from './mock-data';

// ==================================================
// Helpers
// ==================================================

export function assertStatus(
  state: Types.State
): asserts state is Types.ValidState {
  if (state.status === Status.Pristine) {
    throw new Error(
      'Invalid status. Cannot operate on reducer when status is Pristine.'
    );
  }
}

// ==================================================
// Setups
// ==================================================

export const initialState: Types.InitialState = {
  status: Status.Pristine,
  teams,
};

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

// ==================================================
// Slice
// ==================================================

const slice = ReduxToolkit.createSlice({
  name,
  initialState: initialState as Types.State,
  reducers: {},
});

export const { actions, reducer } = slice;
