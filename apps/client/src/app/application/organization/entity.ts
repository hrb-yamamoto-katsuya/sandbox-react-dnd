import * as MembersEntity from '../domain/members/entity';
import * as TeamsEntity from '../domain/teams/entity';

export const itemTypes = {
  team: 'team',
  member: 'member',
};

export type Organization = (TeamsEntity.Team & {
  members: MembersEntity.Member[];
  children: Organization | null;
})[];
