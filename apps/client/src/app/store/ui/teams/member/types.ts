import Status from '~client/app/store/status';

// ==================================================
// State
// ==================================================

export type InitialState = {
  status: Status.Pristine;
};

export type ValidState = {
  status: Exclude<Status, Status.Pristine>;
};

export type State = InitialState | ValidState;

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {};
  operation: {};
};
