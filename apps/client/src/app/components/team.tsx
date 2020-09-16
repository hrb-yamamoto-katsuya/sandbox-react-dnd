import * as React from 'react';
import * as ReactDnD from 'react-dnd';

import styled from 'styled-components';

import * as MemberList from './member-list';

import { mockData } from './mock-data';
import * as TeamsEntity from '~client/app/application/domain/teams/entity';

type Props = typeof mockData[number] & {
  index: number;
  moveTeam: (dragIndex: number, hoverIndex: number) => void;
};

type DragItem = {
  index: Props['index'];
  id: Props['teamName'];
  type: typeof TeamsEntity.itemTypes.team;
};

export const Component = (props: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [{}, refDrag] = ReactDnD.useDrag({
    item: {
      type: TeamsEntity.itemTypes.team,
      id: props.teamName,
      index: props.index,
    },
  });

  const [{}, refDrop] = ReactDnD.useDrop({
    accept: TeamsEntity.itemTypes.team,
    hover(item: DragItem) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = props.index;

      if (dragIndex === hoverIndex) return;

      props.moveTeam(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  refDrag(refDrop(ref));

  return (
    <StyledTeam ref={ref}>
      <StyledHeading>{props.teamName}</StyledHeading>
      <MemberList.Component members={props.members} />
    </StyledTeam>
  );
};

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const StyledTeam = styled.div`
  width: 300px;
`;
