import * as React from 'react';

import * as MembersEntities from '~client/app/application/domain/members/entity';

import styled from 'styled-components';

type Props = MembersEntities.Member & {
  index: number;
};

export const Component = (props: Props) => {
  return (
    <StyledMember>
      <img src={props.src} alt="" />
      <p>{props.name}</p>
    </StyledMember>
  );
};

const StyledMember = styled.div`
  width: 70px;
`;

// import * as React from 'react';
// import * as ReactDnD from 'react-dnd';

// import * as OrganizationEntity from '~client/app/application/organization/entity';

// import styled from 'styled-components';

// type Props = {
//   index: number;
//   id: number;
//   src: string;
//   name: string;
// };

// export const Component = (props: Props) => {
//   const [{}, refDrag] = ReactDnD.useDrag({
//     item: {
//       type: OrganizationEntity.itemTypes.member,
//       id: props.id,
//       index: props.index,
//     },
//   });

//   return (
//     <StyledMember ref={refDrag}>
//       <img src={props.src} alt="" />
//       <p>{props.name}</p>
//     </StyledMember>
//   );
// };

// const StyledMember = styled.div`
//   width: 70px;
// `;
