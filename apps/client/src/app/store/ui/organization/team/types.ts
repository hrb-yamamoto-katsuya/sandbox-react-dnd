import Status from '~client/app/store/status';
import * as TeamEntity from '~client/app/application/domain/organization/team/entity';

// ==================================================
// State
// ==================================================

export type InitialState = {
  status: Status.Pristine;
  team: TeamEntity.Team;
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
