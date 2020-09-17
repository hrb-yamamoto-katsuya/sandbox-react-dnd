import Status from '~client/app/store/status';
import * as MembersEntity from '~client/app/application/domain/organization/members/entity';

// ==================================================
// State
// ==================================================

export type InitialState = {
  status: Status.Pristine;
  members: MembersEntity.Member[];
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
