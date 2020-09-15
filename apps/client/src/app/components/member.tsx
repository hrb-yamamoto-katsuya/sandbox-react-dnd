import * as React from 'react';
import styled from 'styled-components';

type Props = {
  id: number;
  src: string;
  name: string;
};

export const Component = (props: Props) => (
  <StyledMember>
    <img src={props.src} alt="" />
    <p>{props.name}</p>
  </StyledMember>
);

const StyledMember = styled.div`
  width: 50px;
`;
