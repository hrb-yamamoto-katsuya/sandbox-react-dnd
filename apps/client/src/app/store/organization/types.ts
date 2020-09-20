import Status from '~client/app/store/status';
import * as OrganizationEntity from '~client/app/application/organization/entity';

import * as EntitiesStoreTeams from '~client/app/store/entities/teams';
import * as EntitiesStoreMembers from '~client/app/store/entities/members';

// ==================================================
// State
// ==================================================

export interface InitialState extends OrganizationEntity.OrganizationTree {
  status: Status.Pristine;
}

export interface ValidState extends OrganizationEntity.OrganizationTree {
  status: Exclude<Status, Status.Pristine>;
}

export type State = InitialState | ValidState;

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {
    updateOrganizationTree: {
      teams: ReturnType<typeof EntitiesStoreTeams.teamsSelector>;
      members: ReturnType<typeof EntitiesStoreMembers.membersByTeamIdSelector>;
    };
  };
  operation: {};
};
