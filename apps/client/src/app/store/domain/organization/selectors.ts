import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Members from './members';
import * as Teams from './teams';

export const organizationSelector = ReduxToolkit.createSelector(
  [Teams.teamsSelector, Members.membersSelector],
  (teams, members) => ({ teams, members })
);
