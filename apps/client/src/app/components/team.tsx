import * as React from 'react';

import styled from 'styled-components';

import * as AppStateOrganization from '~client/app/store/organization';

type Props = {
  team: AppStateOrganization.State['tree'][number];
};

export const Component = (props: Props) => {
  console.log(props.team);

  return (
    <>
      <StyledHeading>{props.team.name}</StyledHeading>
      {props.team.children.length > 0 &&
        props.team.children.map((team) => <Component team={team} />)}
    </>
  );
};

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

// import * as React from 'react';
// import * as ReactDnD from 'react-dnd';

// import styled from 'styled-components';

// import * as Members from './members';

// import { mockData } from './mock-data';
// import * as OrganizationEntity from '~client/app/application/organization/entity';

// type Props = typeof mockData[number] & {
//   index: number;
//   moveTeam: (dragIndex: number, hoverIndex: number) => void;
// };

// type DragItem = {
//   index: Props['index'];
//   id: Props['teamName'];
//   type: typeof OrganizationEntity.itemTypes.team;
// };

// export const Component = (props: Props) => {
//   const ref = React.useRef<HTMLDivElement>(null);

//   const [{ isDragging }, refDrag] = ReactDnD.useDrag({
//     item: {
//       type: OrganizationEntity.itemTypes.team,
//       id: props.teamName,
//       index: props.index,
//     },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   const [{}, refDrop] = ReactDnD.useDrop({
//     accept: OrganizationEntity.itemTypes.team,
//     hover(item: DragItem) {
//       if (!ref.current) return;

//       const dragIndex = item.index;
//       const hoverIndex = props.index;

//       if (dragIndex === hoverIndex) return;

//       props.moveTeam(dragIndex, hoverIndex);

//       item.index = hoverIndex;
//     },
//   });

//   refDrag(refDrop(ref));

//   return (
//     <StyledTeam ref={ref} className={`${isDragging ? 'isDragging' : ''}`}>
//       <StyledHeading>{props.teamName}</StyledHeading>
//       <Members.Component members={props.members} />
//     </StyledTeam>
//   );
// };

// const StyledHeading = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
// `;

// const StyledTeam = styled.div`
//   width: 300px;
//   cursor: move;

//   &.isDragging {
//     opacity: 0;
//   }
// `;
