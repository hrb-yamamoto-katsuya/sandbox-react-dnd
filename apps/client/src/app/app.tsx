import * as React from 'react';

import styled from 'styled-components';

import * as Teams from './page/teams';

export const App = () => (
  <Wrap>
    <Teams.Component />
  </Wrap>
);

const Wrap = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
`;
