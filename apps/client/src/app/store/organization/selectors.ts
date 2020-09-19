import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Members from '~client/app/store/entities/members';
import * as Teams from '~client/app/store/entities/teams';

export const organizationSelector = ReduxToolkit.createSelector(
  [Teams.teamsSelector, Members.membersSelector],
  (teams, members) => ({ teams, members })
);
