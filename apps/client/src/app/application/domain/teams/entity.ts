export type Team = {
  id: number;
  name: string;
  parentTeamId: Team['id'] | null;
};

/**
 * teamのtree構造
 */
export type TeamsTreeNode = Team & {
  children: TeamsTreeNode[] | null;
};
