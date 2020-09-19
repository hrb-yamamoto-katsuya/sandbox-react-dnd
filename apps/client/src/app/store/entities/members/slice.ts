import * as ReduxToolkit from '@reduxjs/toolkit';

import Status from '~client/app/store/status';
import * as MembersEntity from '~client/app/application/domain/members/entity';

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

export const adapter = ReduxToolkit.createEntityAdapter<MembersEntity.Member>({
  selectId: (member) => member.id,
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
    membersReceived(
      state,
      action: ReduxToolkit.PayloadAction<
        Types.Payload['action']['membersReceived']
      >
    ) {
      adapter.setAll(state, action.payload.members);
    },
  },
});

export const { actions, reducer } = slice;
