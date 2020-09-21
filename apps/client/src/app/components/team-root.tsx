import * as React from 'react';

import * as AppStateOrganization from '~client/app/store/organization';

import * as OrganizationEntity from '~client/app/application/organization/entity';

import * as Teams from '~client/app/components/teams';

type Props = {
  tree: AppStateOrganization.State['tree'];
};

const Team = (props: {
  team: OrganizationEntity.OrganizationTree['tree'][number];
}) => {
  return (
    <>
      <p>name: {props.team.name}</p>
      {props.team.children.length > 0 &&
        props.team.children.map((team) => <Team team={team} />)}
    </>
  );
};

export const Component = (props: Props) => {
  const treeRoot = props.tree[0];
  return (
    <div>
      <p>id: {treeRoot.id}</p>
      <p>name: {treeRoot.name}</p>
      <p>parentTeamId: {treeRoot.parentTeamId}</p>

      {treeRoot.children.map((team) => (
        <Teams.Component team={team} />
      ))}
    </div>
  );
};
