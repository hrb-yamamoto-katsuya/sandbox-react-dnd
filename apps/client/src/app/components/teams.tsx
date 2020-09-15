import * as React from 'react';

import styled from 'styled-components';

import { mockData } from './mock-data';

import * as Team from './team';

export const Component = () => {
  return (
    <StyledTeamContainer>
      {mockData.map((data) => (
        <Team.Component {...data} />
      ))}
    </StyledTeamContainer>
  );
};

const StyledTeamContainer = styled.div`
  display: flex;
`;
