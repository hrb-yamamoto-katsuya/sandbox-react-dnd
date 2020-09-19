import * as React from 'react';
import * as ReactDnD from 'react-dnd';

import * as OrganizationEntity from '~client/app/application/organization/entity';

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
      type: OrganizationEntity.itemTypes.member,
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
