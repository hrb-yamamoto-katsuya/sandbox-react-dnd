import Status from '~client/app/store/status';
import * as TeamsEntity from '~client/app/application/domain/organization/teams/entity';

// ==================================================
// State
// ==================================================

export type InitialState = {
  status: Status.Pristine;
  teams: TeamsEntity.Team[];
};

export type ValidState = {
  status: Exclude<Status, Status.Pristine>;
  teams: TeamsEntity.Team[];
};

export type State = InitialState | ValidState;

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {};
  operation: {};
};
