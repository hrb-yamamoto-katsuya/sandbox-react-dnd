export type Team = {
  id: number;
  name: string;
  parentTeamId: Team['id'] | null;
  children?: Team | null;
};
