import * as React from 'react';
import * as ReactDnD from 'react-dnd';

import styled from 'styled-components';

import * as MembersEntities from '~client/app/application/domain/members/entity';
import * as OrganizationEntity from '~client/app/application/organization/entity';

type Props = MembersEntities.Member & {
  index: number;
};

type DragItem = {
  type: typeof OrganizationEntity.itemTypes.member;
  id: Props['id'];
};

export const Component = (props: Props) => {
  const [{}, refDrag] = ReactDnD.useDrag({
    item: {
      type: OrganizationEntity.itemTypes.member,
      id: props.id,
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
  width: 70px;
`;
