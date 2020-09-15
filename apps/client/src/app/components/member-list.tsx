import * as React from 'react';

import styled from 'styled-components';

import * as Member from './member';
import { mockData } from './mock-data';

type Props = {
  members: typeof mockData[number]['members'];
};

export const Component = (props: Props) => {
  return (
    <StyledMemberContainer>
      {props.members.map((member) => (
        <Member.Component key={member.id} {...member} />
      ))}
    </StyledMemberContainer>
  );
};

const StyledMemberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
