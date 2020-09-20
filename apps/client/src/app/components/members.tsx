import * as React from 'react';

import styled from 'styled-components';

import * as Member from './member';
import { mockData } from './mock-data';

type Props = {
  members: typeof mockData[number]['members'];
};

export const Component = (props: Props) => {
  return (
    <StyledMembersContainer>
      {props.members.map((member, index) => (
        <Member.Component key={member.id} {...member} index={index} />
      ))}
    </StyledMembersContainer>
  );
};

const StyledMembersContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  background-color: red;
  max-height: 150px;
  min-height: 150px;
  overflow-y: scroll;
  padding: 12px;
`;
