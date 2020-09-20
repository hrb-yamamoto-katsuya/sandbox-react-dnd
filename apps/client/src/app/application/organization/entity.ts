import * as MembersEntity from '../domain/members/entity';
import * as TeamsEntity from '../domain/teams/entity';

import * as EntitiesStoreTeams from '~client/app/store/entities/teams';
import * as EntitiesStoreMembers from '~client/app/store/entities/members';

export const itemTypes = {
  team: 'team',
  member: 'member',
};

type OrganizationTreeNode = TeamsEntity.Team & {
  members: MembersEntity.Member[] | null;
  children: OrganizationTreeNode[] | null;
};

export type OrganizationTree = {
  tree: OrganizationTreeNode[];
};

/**
 * 組織のツリー構造取得
 */
export const getOrganizationTree = (
  teams: ReturnType<typeof EntitiesStoreTeams.teamsSelector>,
  members: ReturnType<typeof EntitiesStoreMembers.membersByTeamIdSelector>
) => {
  // SEE: https://typeofnan.dev/an-easy-way-to-build-a-tree-with-object-references/
  /**
   * teamsに対してなにか付与したteamsを返す
   */
  const teamsTreeNodes: OrganizationTreeNode[] = teams.map((team) => ({
    ...team,
    children: null,
    members: members[team.id],
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
