import * as ReduxToolkit from '@reduxjs/toolkit';

import Status from '~client/app/store/status';
import * as TeamsEntity from '~client/app/application/domain/organization/teams/entity';

import * as Constants from './constants';
import * as Types from './types';

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

export const adapter = ReduxToolkit.createEntityAdapter<TeamsEntity.Team>({
  selectId: (team) => team.id,
});

export const initialState: Types.InitialState = adapter.getInitialState({
  status: Status.Pristine,
});

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

// ==================================================
// Slice
// ==================================================

const slice = ReduxToolkit.createSlice({
  name,
  initialState: initialState as Types.State,
  reducers: {
    teamsReceived(
      state,
      action: ReduxToolkit.PayloadAction<
        Types.Payload['action']['teamsReceived']
      >
    ) {
      adapter.setAll(state, action.payload.teams);
    },
  },
});

export const { actions, reducer } = slice;