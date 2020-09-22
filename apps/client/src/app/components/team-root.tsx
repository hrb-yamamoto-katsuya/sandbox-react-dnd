import * as React from 'react';

import * as AppStateOrganization from '~client/app/store/organization';

import * as Teams from '~client/app/components/teams';

type Props = {
  tree: AppStateOrganization.State['tree'];
};

export const Component = (props: Props) => {
  const treeRoot = props.tree[0];
  return (
    <div>
      <p>id: {treeRoot.id}</p>
      <p>name: {treeRoot.name}</p>
      <p>parentTeamId: {treeRoot.parentTeamId}</p>

      {treeRoot.children.map((team) => (
        <Teams.Component key={team.id} team={team} />
      ))}
    </div>
  );
};
