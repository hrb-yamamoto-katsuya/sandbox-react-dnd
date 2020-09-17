import * as MembersEntity from './members/entity';
import * as TeamsEntity from './teams/entity';

export const itemTypes = {
  team: 'team',
  member: 'member',
};

export type Organization = (TeamsEntity.Team & {
  members: MembersEntity.Member[];
  children: Organization | null;
})[];
