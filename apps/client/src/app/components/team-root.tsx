import * as React from 'react';
import * as ReactDnD from 'react-dnd';
import * as ReactDnDHTML5Backend from 'react-dnd-html5-backend';

import styled from 'styled-components';

import * as AppStateOrganization from '~client/app/store/organization';

import * as Teams from '~client/app/components/teams';
import * as DropZone from './drop-zone';

type Props = {
  tree: AppStateOrganization.State['tree'];
};

export const Component = (props: Props) => {
  const treeRoot = props.tree[0];
  return (
    <ReactDnD.DndProvider backend={ReactDnDHTML5Backend.HTML5Backend}>
      <StyledTeamRootContainer>
        <div>
          <p>id: {treeRoot.id}</p>
          <p>name: {treeRoot.name}</p>
          <p>parentTeamId: {treeRoot.parentTeamId}</p>
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
