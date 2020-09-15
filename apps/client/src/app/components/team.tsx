import * as React from 'react';

import styled from 'styled-components';

import * as MemberList from './member-list';

import { mockData } from './mock-data';

type Props = typeof mockData[number];

export const Component = (props: Props) => {
  return (
    <StyledTeam>
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
