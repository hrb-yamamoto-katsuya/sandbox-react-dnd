import * as React from 'react';
import * as ReactDnD from 'react-dnd';

import * as TeamsEntity from '~client/app/application/domain/teams/entity';

import styled from 'styled-components';

type Props = {
  index: number;
  id: number;
  src: string;
  name: string;
};

export const Component = (props: Props) => {
  const [{}, refDrag] = ReactDnD.useDrag({
    item: {
      type: TeamsEntity.itemTypes.member,
      id: props.id,
      index: props.index,
    },
  });

  return (
    <StyledMember ref={refDrag}>
      <img src={props.src} alt="" />
      <p>{props.name}</p>
    </StyledMember>
  );
};

const StyledMember = styled.div`
  width: 50px;
`;