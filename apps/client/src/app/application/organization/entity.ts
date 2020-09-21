import * as TeamsEntity from '../domain/teams/entity';

import * as EntitiesStoreTeams from '~client/app/store/entities/teams';

export const itemTypes = {
  team: 'team',
  member: 'member',
};

type OrganizationTreeNode = TeamsEntity.Team & {
  children: OrganizationTreeNode[];
};

export type OrganizationTree = {
  tree: OrganizationTreeNode[];
};

/**
 * 組織のツリー構造取得
 */
export const getOrganizationTree = (
  teams: ReturnType<typeof EntitiesStoreTeams.teamsSelector>
) => {
  // SEE: https://typeofnan.dev/an-easy-way-to-build-a-tree-with-object-references/
  /**
   * teamsに対してなにか付与したteamsを返す
   */
  const teamsTreeNodes: OrganizationTreeNode[] = teams.map((team) => ({
    ...team,
    children: [],
  }));

  const idMapping = teamsTreeNodes.reduce((acc, current, index) => {
    acc[current.id] = index;
    return acc;
  }, {});

  let tree: typeof teamsTreeNodes[number];
  teamsTreeNodes.forEach((team) => {
    if (team.parentTeamId === null) {
      tree = team;
      return;
    }

    const parentTeam = teamsTreeNodes[idMapping[team.parentTeamId]];

    parentTeam.children = [...(parentTeam.children || []), team];
  });

  return { tree };
};
