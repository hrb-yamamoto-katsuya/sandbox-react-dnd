import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as ReactDnD from 'react-dnd';
import * as ReactDnDHTML5Backend from 'react-dnd-html5-backend';

import styled from 'styled-components';

import * as AppStateOrganization from '~client/app/store/organization';
import * as EntitiesTeams from '~client/app/store/entities/teams';
import * as EntitiesMembers from '~client/app/store/entities/members';

import * as Teams from '~client/app/components/teams';
import * as DropZone from './drop-zone';

type Props = {
  tree: AppStateOrganization.State['tree'];
};

export const Component = (props: Props) => {
  const treeRoot = props.tree[0];
  const dispatch = ReactRedux.useDispatch();

  const handleAddTeam = React.useCallback(() => {
    dispatch(
      EntitiesTeams.actions.addTeam({
        id: 100,
        name: 'team-100',
        parentTeamId: 0,
      })
    );
  }, [dispatch]);

  const handleAddMember = React.useCallback(() => {
    dispatch(
      EntitiesMembers.actions.addMember({
        id: 'aaaaaaaaaaaaaaaaaaaa',
        name: 'tyankatsu',
        src: 'aaaa',
        teamId: 9,
      })
    );
  }, [dispatch]);
  return (
    <ReactDnD.DndProvider backend={ReactDnDHTML5Backend.HTML5Backend}>
      <StyledTeamRootContainer>
        <div>
          <p>id: {treeRoot.id}</p>
          <p>name: {treeRoot.name}</p>
          <p>parentTeamId: {treeRoot.parentTeamId}</p>

          <button type="button" onClick={handleAddTeam}>
            add team
          </button>

          <button type="button" onClick={handleAddMember}>
            add member
          </button>
        </div>

        <StyledTeamsContainer>
          {treeRoot.children.map((team) => (
            <Teams.Component key={team.id} team={team} />
          ))}
        </StyledTeamsContainer>
      </StyledTeamRootContainer>
      <DropZone.Component />
    </ReactDnD.DndProvider>
  );
};

const StyledTeamRootContainer = styled.div`
  display: flex;
`;
const StyledTeamsContainer = styled.div`
  display: flex;
`;
