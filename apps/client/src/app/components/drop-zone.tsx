import * as React from 'react';
import * as ReactDnD from 'react-dnd';

import styled from 'styled-components';

import * as OrganizationEntity from '~client/app/application/organization/entity';

type Props = {};

export const Component = (props: Props) => {
  const [{}, refDrop] = ReactDnD.useDrop({
    accept: OrganizationEntity.itemTypes.member,
  });
  return <StyledDropZone ref={refDrop}></StyledDropZone>;
};

const StyledDropZone = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 400px;
  height: 200px;
  border: 1px solid #000;
  overflow-y: scroll;
`;
